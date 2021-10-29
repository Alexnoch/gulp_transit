@@include('./loadTemplateM.js');
@@include('./loadTemplate.js');
@@include('./loadSingleArticle.js');
@@include('./api.js');

const bigContainer = $(".articles__top-container");
const middleContainer = $(".articles__bottom-container");

// Открыть статью по клику
const loadOn = () => {
  $('.article-middle__title, .article-middle__text, .article-big__title, .article-big__text').on('click', (e) => {
    const id = e.target.id;
    loadSingle(id)
  })
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

  switch (target) {
    case "articles-languages":
      initArticles(4, "languages", "rubricHtml");
      break;
    case "articles-guides":
      initArticles(4, "guides", "rubricOther");
      break;
    case "articles-others":
      initArticles(4, "others", "rubricNews");
      break;
  }
  loadOn();
});

// Меню рубрик
const submenu = $(".articles__submenu-item");
submenu.on("click", (e) => {
  // Саб меню выделение цветом
  let oldActiveSubMenu = $('.activeSubMenu');
  oldActiveSubMenu.removeClass('activeSubMenu');
  $(e.target).addClass("activeSubMenu");

console.log(e.target.id,'Загрузка по ID рубрик')
  loadRubricArt(4,e.target.id)
  loadOn();
});

// Переход смотреть все статьи раздела
const btnViewAll = $('#viewAll');
btnViewAll.on('click', () => {
  const activeMenu = $('.active-menu')[0].id
  $('body,html').animate({ scrollTop: top }, 500);
  switch (activeMenu) {
    case "articles-languages":
      loadListArt(4,'languages','rubricHtml');
      break;
    case "articles-guides":
      loadListArt(4,'guides','rubricOther');
      break;
    case "articles-others":
      loadListArt(8,'others','rubricNews');
    break;
  }
  loadOn();
})



$(document).ready(() => {
  initArticles(4, "languages", "rubricHtml");
  loadOn();
})































  //   if(1150 > window.innerWidth){
  //     $('.revealator-slideright').removeClass('revealator-slideright')
  //     $('.revealator-slideleft').removeClass('revealator-slideleft')
  //  }