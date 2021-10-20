
let project_folder="dist";
let source_folder="src";

let path={
  build:{
    html:project_folder+"/",
    css:project_folder+"/css/",
    js:project_folder+"/js/",
    img:project_folder+"/assets/images/",
    icons:project_folder + "/assets/icons/",
    fonts:project_folder+"/assets/fonts/",
    env:project_folder + "/",
  },
  src:{
    html:[source_folder+"/*.html", "!" + source_folder + "/_*.html"],
    css:source_folder+"/css/index.scss",
    js:[
    source_folder+"/js/index.js",
    source_folder + "/js/revealator-master/fm.revealator.jquery.js",
    source_folder + "/js/revealator-master/jquery-1.11.3.min.js",
    ],
    img:source_folder+"/assets/images/**/*.{jpg,png,svg,gif,ico,webp}",
    icons:source_folder+"/assets/icons/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts:source_folder+"/assets/fonts/*.ttf",
    env:source_folder+"/.env",
  },
  watch:{
    html:source_folder+"/**/*.html",
    css:source_folder+"/css/**/*.scss",
    js:source_folder+"/js/**/*.js",
    img:source_folder+"/assets/icons/**/*.{jpg,png,svg,gif,ico,webp}",
    icons:source_folder+"/assets/images/**/*.{jpg,png,svg,gif,ico,webp}",
    env:source_folder+"/.env",
  },
  clean:"./" + project_folder + "/"
}

let {src, dest} = require('gulp'),
gulp = require('gulp'),
// Плагины 
// Обновляет браузер
browsersync = require("browser-sync").create();
fileinclude = require('gulp-file-include');
del = require("del")
scss = require("gulp-sass")(require('sass'));
autoprefixer=require("gulp-autoprefixer");
group_media = require("gulp-group-css-media-queries");
clean_css = require("gulp-clean-css");
rename = require("gulp-rename");
uglify = require("gulp-uglify-es").default
// imagemin = require("gulp-imagemin")

function browserSync(params){
  browsersync.init({
    server:{
      baseDir:"./" + project_folder + "/"
    },
    port:3000,
    notify:false
  })
}

function clean(params){
  return del(path.clean)
}

// Собирает из src в dist
function html(){
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css(){
  return src(path.src.css)
   .pipe(
     scss({
       outputStyle:"expanded"
     })
   )
   .pipe(group_media())
   .pipe(
     autoprefixer({
       overrideBrowserslist:["last 5 version"],
       cascade: true
     })
   )
  .pipe(dest(path.build.css))
  .pipe(clean_css())
  .pipe(
    rename({
      extname:".min.css"
    })
  )
  .pipe(dest(path.build.css))
  .pipe(browsersync.stream())
}

function js(){
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname:".min.js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images(){
  src(path.src.img)
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
  return src(path.src.icons)
    .pipe(dest(path.build.icons))
    .pipe(browsersync.stream())
}

function fonts(){
  return  src(path.src.fonts)
  .pipe(dest(path.build.fonts))
  .pipe(browsersync.stream())
}

function env(){
  return  src(path.src.env)
  .pipe(dest(path.build.env))
  .pipe(browsersync.stream())
}


function watchFiles(params){
  gulp.watch([path.watch.html],html);
  gulp.watch([path.watch.css],css);
  gulp.watch([path.watch.js],js);
  gulp.watch([path.watch.img],images);
  gulp.watch([path.watch.env],env);
}

//  обьединяет , запускает Процесс выполнения. Паралель значит паральное выполнение
let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts,env))
let watch = gulp.parallel(build, watchFiles, browserSync);


// По умолчанию при запуске Gulp будет выполнятся Watch, она в свою очередь содержет галп паралель который запустит браузерсинх
exports.env = env;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
// ----------------------------------