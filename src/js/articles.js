@@include('./loadTemplateM.js');
@@include('./loadTemplateL.js');
@@include('./loadTemplate.js');
@@include('./loadSingleArticle.js');
@@include('./api.js');

const bigContainer = $(".articles__top-container");
const middleContainer = $(".articles__bottom-container");

// Открыть статью по клику
const loadOn = () => {
  $('.article-middle__title, .article-middle__text, .article-big__title, .article-big__text, .article-middle__read').on('click', (e) => {
    const id = e.target.id;
    loadSingle(id)
  })
}

// Главное меню---------------------------- ЯЗЫКИ, ГАЙДЫ , РАЗНОЕ
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

  switch (target) {
    case "articles-languages":
      middleContainer.html('');
      initArticles(3, "languages", "rubricHtml","middle");
      initArticles(2, "languages", "rubricCss","big-left");
      initArticles(3, "languages", "rubricJavascript","middle");
      break;
    case "articles-guides":
      middleContainer.html('')
      initArticles(3, "guides", "rubricOther","middle");
      initArticles(2, "guides", "rubricOther","big-left");
      break;
    case "articles-others":
      middleContainer.html('')
      initArticles(3, "others", "rubricNews","middle");
      initArticles(2, "others", "rubricNews","big-left");
      break;
  }
  loadOn();
});

// Меню рубрик -----------HTML CSS WEBPACK JAVASCRIPT
const submenu = $(".articles__submenu-item");
submenu.on("click", (e) => {
  // Саб меню выделение цветом
  let oldActiveSubMenu = $('.activeSubMenu');
  oldActiveSubMenu.removeClass('activeSubMenu');
  $(e.target).addClass("activeSubMenu");

console.log(e.target.id,'Загрузка по ID рубрик')
  loadRubricArt(8,e.target.id,temp='middle')
  loadOn();
});


$(document).ready(() => {
  initNew();
  loadOn();
})































  //   if(1150 > window.innerWidth){
  //     $('.revealator-slideright').removeClass('revealator-slideright')
  //     $('.revealator-slideleft').removeClass('revealator-slideleft')
  //  }