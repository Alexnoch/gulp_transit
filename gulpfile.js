
let project_folder="dist";
let source_folder="src";
// Пути ввода и вывода
let path={
  build:{
    html:project_folder+"/",
    css:project_folder+"/css/",
    js:project_folder+"/js/",
    img:project_folder+"/assets/images/",
    icons:project_folder + "/assets/icons/",
    fonts:project_folder+"/assets/fonts/",
    components:project_folder + "/css/components/"
  },
  src:{
    html:[source_folder+"/*.html", "!" + source_folder + "/components/_*.html"],
    css:source_folder+"/css/*.scss",
    js:[
    source_folder+"/js/*.js",
    source_folder + "/js/revealator-master/*.js",
    ],
    img:source_folder+"/assets/images/**/*.{jpg,png,svg,gif,ico,webp}",
    icons:source_folder+"/assets/icons/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts:source_folder+"/assets/fonts/*.ttf",
    components: source_folder + "/css/components/*.scss",
  },
  watch:{
    html:source_folder+"/**/*.html",
    css:source_folder+"/css/**/*.scss",
    js:source_folder+"/js/**/*.js",
    img:source_folder+"/assets/icons/**/*.{jpg,png,svg,gif,ico,webp}",
    icons:source_folder+"/assets/images/**/*.{jpg,png,svg,gif,ico,webp}",
    components: source_folder + "/css/components/*.scss",
  },
  clean:"./" + project_folder + "/"
}
// Стандартное подключение галпа
let {src, dest} = require('gulp'),
gulp = require('gulp'),
// Плагины 
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


// Функции которые обрабатывают файлы при переносе
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
  src(path.src.components)
  .pipe(
    scss({
      outputStyle:"expanded"
    })
  )
    .pipe(dest(path.build.components))
    .pipe(browsersync.stream())

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
  //  .pipe(dest(path.build.css))
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
    // .pipe(dest(path.build.js))
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

function watchFiles(params){
  gulp.watch([path.watch.html],html);
  gulp.watch([path.watch.css],css);
  gulp.watch([path.watch.js],js);
  gulp.watch([path.watch.img],images);
}

// При сборке запускает эти функции + при ватче
let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts))
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
