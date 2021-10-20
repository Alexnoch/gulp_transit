// Загрузка последних статей

const data = [
  {
    id: 1,
    date: "Февраль 2021",
    title: "Первые шаги в HTML",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного, красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации. Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.",
    image: "assets/images/article_m7.png",
    section: 'languages',
    rubric: 'rubricHtml'
  },
  {
    id: 2,
    date: "Январь 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио,красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации. Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.",
    image: "assets/images/article_m11.jpg",
    section: 'languages',
    rubric: 'rubricHtml'
  },
  {
    id: 3,
    date: "Март 2021",
    title: "Первые шаги в CSS",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m8.png",
    section: 'languages',
    rubric: 'rubricHtml'
  },
  {
    id: 4,
    date: "Март 2021",
    title: "Первые шаги в JavaScript",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомствоМой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации. Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.",
    image: "assets/images/article_m9.jpg",
    section: 'languages',
    rubric: 'rubricHtml'
  },
  {
    id: 5,
    date: "Февраль 2021",
    title: "Первые шаги в Webpack",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного, красивый background, минимум фото и информацииМой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации. Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации..",
    image: "assets/images/article_m1.png",
    section: 'languages',
    rubric: 'rubricCss'
  },
  {
    id: 6,
    date: "Январь 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио,красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации. Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного,  красивый background, минимум фото и информации.",
    image: "assets/images/article_m2.png",
    section: 'languages',
    rubric: 'rubricCss'
  },
  {
    id: 7,
    date: "Март 2021",
    title: "Первые шаги в Bootstrap",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m3.png",
    section: 'languages',
    rubric: 'rubricCss'
  },
  {
    id: 8,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m10.jpg",
    section: 'languages',
    rubric: 'rubricCss'
  },
  {
    id: 9,
    date: "Февраль 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного, красивый background, минимум фото и информации.",
    image: "assets/images/article_m3.png",
    section: 'languages',
    rubric: 'rubricJavascript'
  },
  {
    id: 10,
    date: "Январь 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио,красивый background, минимум фото и информации.",
    image: "assets/images/article_m2.png",
    section: 'languages',
    rubric: 'rubricJavascript'
  },
  {
    id: 11,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m1.png",
    section: 'languages',
    rubric: 'rubricJavascript'
  },
  {
    id: 12,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m4.png",
    section: 'languages',
    rubric: 'rubricJavascript'
  },
  {
    id: 13,
    date: "Февраль 2021",
    title: "Первые шаги в Node.js",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного, красивый background, минимум фото и информации.",
    image: "assets/images/article_m1.png",
    section: 'languages',
    rubric: 'rubricWebpack'
  },
  {
    id: 14,
    date: "Январь 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио,красивый background, минимум фото и информации.",
    image: "assets/images/article_m2.png",
    section: 'languages',
    rubric: 'rubricWebpack'
  },
  {
    id: 15,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m2.png",
    section: 'languages',
    rubric: 'rubricWebpack'
  },
  {
    id: 16,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m4.png",
    section: 'languages',
    rubric: 'rubricWebpack'
  },
  {
    id: 17,
    date: "Июль 2021",
    title: "Сборка проекта через Webpack",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного, красивый background, минимум фото и информации.",
    image: "assets/images/article_m1.png",
    section: 'guides',
    rubric: 'rubricOther'
  },
  {
    id: 18,
    date: "Июнь 2021",
    title: "React и Webpack",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио,красивый background, минимум фото и информации.",
    image: "assets/images/article_m12.png",
    section: 'guides',
    rubric: 'rubricOther'
  },
  {
    id: 19,
    date: "Август 2021",
    title: "Webpack Plugins",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m3.png",
    section: 'guides',
    rubric: 'rubricOther'
  },
  {
    id: 20,
    date: "Март 2021",
    title: "Webpack Resolve упрощаем",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m4.png",
    section: 'guides',
    rubric: 'rubricOther'
  },
  {
    id: 21,
    date: "Февраль 2021",
    title: "Семантическая настройка",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного, красивый background, минимум фото и информации.",
    image: "assets/images/article_m5.png",
    section: 'others',
    rubric: 'rubricNews'
  },
  {
    id: 22,
    date: "Январь 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио,красивый background, минимум фото и информации.",
    image: "assets/images/article_m6.png",
    section: 'others',
    rubric: 'rubricNews'
  },
  {
    id: 23,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m3.png",
    section: 'others',
    rubric: 'rubricNews'
  },
  {
    id: 24,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m3.png",
    section: 'others',
    rubric: 'rubricNews'
  },
  {
    id: 25,
    date: "Февраль 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть. Ничего особенного, красивый background, минимум фото и информации.",
    image: "assets/images/article_m2.png",
    section: 'others',
    rubric: 'rubricNews'
  },
  {
    id: 26,
    date: "Январь 2021",
    title: "Webpack или Gulp?",
    text: "Мой первый проект созданный на начальном уровне, первый сайт портфолио,красивый background, минимум фото и информации.",
    image: "assets/images/article_m3.png",
    section: 'others',
    rubric: 'rubricNews'
  },
  {
    id: 27,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m6.png",
    section: 'others',
    rubric: 'rubricNews'
  },
  {
    id: 28,
    date: "Март 2021",
    title: "Первые шаги в Node.js",
    text: "Давай сразу уясним, есть два важный обьекта request и resolve, с них мы и начнём знакомство",
    image: "assets/images/article_m6.png",
    section: 'others',
    rubric: 'rubricNews'
  },
]

// -------------------------Паралакс

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

// _________________________Другой подход к навигации ______________________________

const loadSigleArticle = (article)=>{
  const articleTemp = `
  <div class="single-article">
    <div class="single-article__image">
      <img src="${article[0].image}" alt="photo" />
    </div>
    <p class="single-article__date">${article[0].date}</p>
    <h4 class="single-article__title">${article[0].title}</h4>
    <p class="single-article__text">${article[0].text}</p>
  </div>
  `
  return articleTemp;
}

// Открыть статью по клику
const loadOn =()=>{
  $('.article-middle__title, .article-middle__text, .article-big__title, .article-big__text').on('click', (e)=>{
    const id = e.target.id;
    const article = data.filter((el)=> el.id == id)
    const container = $('.articles');
    $(container).html(loadSigleArticle(article))
    $('body,html').animate({ scrollTop: top }, 300);
  })
}


const bigContainer = $(".articles__top-container");
const middleContainer = $(".articles__bottom-container");

const loadTemplate = (articlesData, amount) => {
    const bigArticle = `
          <div id="${articlesData[amount].id}" class="article-big">
          <div class="article-big__container">
            <div class="article-big__image">
              <img src="${articlesData[amount].image}" alt="Человеческий мозг картинка" />
            </div>
            <div class="article-big__content">
              <p class="article-big__date">${articlesData[amount].date}</p>
              <p id="${articlesData[amount].id}" class="article-big__title">${articlesData[amount].title}</p>
              <p id="${articlesData[amount].id}" class="article-big__text">${articlesData[amount].text}</p>
            </div>
          </div>
        </div>
          `;
    return bigArticle;
}

const loadTemplateM = (articlesData,amount) =>{

    let middleArticle = '';
  for (let i = 0; i < amount; i++) {
    middleArticle += ` <div class="article-middle">
          <div class="article-middle__container">
            <div class="article-middle__image">
                  <img src="${articlesData[i].image}" alt="мозг" />
              </div>
              <div class="article-middle__content">
                  <p class="article-middle__date">${articlesData[i].date}</p>
                  <p id="${articlesData[i].id}" class="article-middle__title">${articlesData[i].title}</p>
                  <p id="${articlesData[i].id}" class="article-middle__text">${articlesData[i].text}</p>
              </div>
              </div>
          </div>`;
  }
  return middleArticle;
}

const find = (name) =>{
  return data.filter((el)=>el.rubric === name )
}

const findSection = (name) =>{
  return data.filter((el)=>el.section === name)
}
// Главное меню----------------------------
const articlesMenuContainer = $(".articles__rubric-item");
articlesMenuContainer.on("click", function (e) {
  let target = e.target.id;
  // Главное меню подчеркивание
  let oldActiveMenu = $(".active-menu");
  oldActiveMenu.removeClass("active-menu");
  $(e.target).addClass("active-menu");

  // Показ/скрытие контейнеров с контентом
  let oldActiveList = $(".activeMenu");
  oldActiveList.removeClass("activeMenu");
  const select = `#${target}-list`;
  $(select).addClass("activeMenu");
  var amount = 3;

  switch (target) {
    case "articles-languages":
      $(bigContainer).html(loadTemplate(find('rubricHtml'), amount))
      $(middleContainer).html(loadTemplateM(find('rubricHtml'), amount))
      break;
    case "articles-guides":
      $(bigContainer).html(loadTemplate(find('rubricOther'), amount))
      $(middleContainer).html(loadTemplateM(find('rubricOther'), amount))
      break;
    case "articles-other":
      $(bigContainer).html(loadTemplate(find('rubricNews'), amount))
      $(middleContainer).html(loadTemplateM(find('rubricNews'), amount))
      break;
  }
  loadOn();
});

// Меню рубрик
const submenu = $(".articles__submenu-item");
submenu.on("click", (e) => {
  let sub = e.target.id;

  // Саб меню выделение цветом
  let oldActiveSubMenu = $('.activeSubMenu');
  oldActiveSubMenu.removeClass('activeSubMenu');
  $(e.target).addClass("activeSubMenu");

  // Загрузка контента
  // var amount = 3;
  $(bigContainer).html(loadTemplate(find(sub), amount=3))
  $(middleContainer).html(loadTemplateM(find(sub), amount=3))
  loadOn();
});

// Переход смотреть все статьи раздела

const btnViewAll = $('#viewAll');
btnViewAll.on('click', () => {
  const container = $('.articles');
  const activeMenu = $('.active-menu')[0].id
  $('body,html').animate({ scrollTop: top }, 500);
 
  switch (activeMenu) {
    case "articles-languages":
      $(container).addClass('articles_flex-row').html(`<a class="articles__btn-back" href="articles.html">Назад</a> ${loadTemplateM(findSection("languages"),8)}`)
      break;
    case "articles-guides":
      $(container).addClass('articles_flex-row').html(`<a class="articles__btn-back" href="articles.html">Назад</a> ${loadTemplateM(findSection("guides"),4)}`)
      break;
    case "articles-others":
      $(container).addClass('articles_flex-row').html(`<a class="articles__btn-back" href="articles.html">Назад</a> ${loadTemplateM(findSection("others"),2)}`)
      break;
  }
  loadOn();
})

$(document).ready(() => {
  const articlesData = data.filter((el,idx)=>el.rubric === 'rubricHtml')
  const amount = 3;
  $(bigContainer).html(loadTemplate(articlesData, amount))
  $(middleContainer).html(loadTemplateM(articlesData, amount))
  loadOn();
//   if(1150 > window.innerWidth){
//     $('.revealator-slideright').removeClass('revealator-slideright')
//     $('.revealator-slideleft').removeClass('revealator-slideleft')
//  }
})


// 3D куб в разделе мои работы

let activeIndex = 0
let limit = 0
let disabled = false
let $stage
let $controls
let canvas = false
const SPIN_FORWARD_CLASS = 'js-spin-fwd'
const SPIN_BACKWARD_CLASS = 'js-spin-bwd'
const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled'
const SPIN_DUR = 1000
const appendControls = () => {
    $controls = $('.tabs3d-control').children()
    $controls.eq(activeIndex).addClass('active')
}
const setIndexes = () => {
    $('.spinner').children().each((i, el) => {
        if (i == 0) {
            $(el).addClass('js-active');
        }
        $(el).attr('data-index', i)
        $('.tabs3d-control').append('<a style="background-color: ' + $(el).attr('data-bg') + '" href="#tab" data-index="' +i+ '">' + $(el).attr('data-menu') + '</a>');
        limit++
    })
}
const duplicateSpinner = () => {
    const $el = $('.spinner').parent()
    const html = $('.spinner').parent().html()
    $el.append(html)
    $('.spinner').last().addClass('spinner-right')
    $('.spinner-right').removeClass('spinner-left')
}
const paintFaces = () => {
    $('.spinner-face').each((i, el) => {
        $(el).children().css('background', $(el).attr('data-bg'))
    })
}
const prepareDom = () => {
    setIndexes()
    paintFaces()
    duplicateSpinner()
    appendControls()
}
const spin = (inc = 1) => {
    if (disabled) return
    if (!inc) return
    activeIndex += inc
    disabled = true
    if (activeIndex >= limit) {
        activeIndex = 0
    }
    if (activeIndex < 0) {
        activeIndex = (limit - 1)
    }
    const $activeEls = $('.spinner-face.js-active')
    const $nextEls = $('.spinner-face[data-index=' + activeIndex + ']')
    $nextEls.addClass('js-next')
    if (inc > 0) {
        $stage.addClass(SPIN_FORWARD_CLASS)
        } else {
        $stage.addClass(SPIN_BACKWARD_CLASS)
    }
    $controls.removeClass('active')
    $controls.eq(activeIndex).addClass('active')
    setTimeout(() => {
        spinCallback(inc)
    }, SPIN_DUR, inc)
}
const spinCallback = (inc) => {
    $('.js-active').removeClass('js-active')
    $('.js-next').removeClass('js-next').addClass('js-active')
    $stage
    .addClass(DISABLE_TRANSITIONS_CLASS)
    .removeClass(SPIN_FORWARD_CLASS)
    .removeClass(SPIN_BACKWARD_CLASS)
    $('.js-active').each((i, el) => {
        const $el = $(el)
        $el.prependTo($el.parent())
    })
    setTimeout(() => {
        $stage.removeClass(DISABLE_TRANSITIONS_CLASS)
        disabled = false
    }, 100)
}
const attachListeners = () => {
    document.onkeyup = (e) => {
        switch (e.keyCode) {
            case 38:
            spin(-1)
            break
            case 40:
            spin(1)
            break
        }
    }
    $controls.on('click', (e) => {
        e.preventDefault()
        if (disabled) return
        const $el = $(e.target)
        const toIndex = parseInt($el.attr('data-index'), 10)
        spin(toIndex - activeIndex)
    })
}
const assignEls = () => {
    $stage = $('.tabs3d-stage')
}
const init = () => {
    assignEls()
    prepareDom()
    attachListeners()
}
$(() => {
    init();
}); 


// Адаптивное меню
$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}

// Прелоадер
  document.body.onload = function () {
    setTimeout(()=>{
      const preloader = $('#preloader');
      const container = $('.preloader-container');
      if(preloader.attr('class') != 'menu-disable'){
        $(preloader).addClass('menu-disable')
        $(container).addClass('menu-disable')
      }
      
    },1000)
  }

//   $(window).resize(function() {
//     if(1150 > window.innerWidth){
//        $('.revealator-slideright').removeClass('revealator-slideright').addClass('revealator-slideup')
//        $('.revealator-slideleft').removeClass('revealator-slideleft').addClass('revealator-slideup')
//     }
//  }
 
//  );

