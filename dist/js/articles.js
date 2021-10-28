const loadTemplateM = (articlesData, amount) => {

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
;
const loadTemplate = (articlesData, id) => {
  const bigArticle = `
            <div id="${id}" class="article-big">
            <div class="article-big__container">
              <div class="article-big__image">
                <img src="${articlesData.image}" alt="Человеческий мозг картинка" />
              </div>
              <div class="article-big__content">
                <p class="article-big__date">${articlesData.date}</p>
                <p id="${articlesData.id}" class="article-big__title">${articlesData.title}</p>
                <p id="${articlesData.id}" class="article-big__text">${articlesData.text}</p>
              </div>
            </div>
          </div>
            `;
  return bigArticle;
};
const loadSigleArticle = (article) => {
  const articleTemp = `
    <div class="single-article">
    <a class="single-article__breadCrumbs" href="articles.html">Статьи-> </a><a>${article.title}</a>
      <div class="single-article__image">
        <img src="${article.image}" alt="photo" />
      </div>
      <p class="single-article__date">${article.date}</p>
      <h4 class="single-article__title">${article.title}</h4>
      <p class="single-article__text">${article.text}</p>  
      <div class="single-article__back-container">
        <a class="single-article__back" href="articles.html">Назад</a>
      </div>
    </div>
    `
  return articleTemp;
};
// AJAX - Запросы на сервер
const local = `http://localhost:3005`;
const server = `http://78.155.222.130`;

const loadSingle = (id) =>{
  console.log('ФУнкция единственного нажатия')
  $.ajax({
    method: "GET",
    url: `${local}/articles/one`,
    dataType: "json",
    data: {
      "id": id,
    },
    success: (data) => {
      console.log(data, 'Одна статья')
    const container = $('.articles');
    $(container).html(loadSigleArticle(data[0]))
    $('body,html').animate({ scrollTop: top }, 300);
    }
  })
}

const loadListArt = (count,section,rubric) =>{
  const container = $('.articles');
  $.ajax({
    method: "GET",
    url: `${local}/articles`,
    dataType: "json",
    data: {
      "count": count,
      "section": section,
      "rubric": rubric,
    },
    success: (data) => {
      console.log(data, 'Список')
      $(container)
      .addClass('articles_flex-row')
      .html(`<a class="articles__btn-back" href="articles.html">Все статьи -> Языки </a> ${loadTemplateM(data,count)}`)
    }
  })
} 

const loadRubricArt = (count,rubric) =>{
  const amount = 3
  console.log('API-> rubric funct')
  $.ajax({
    method: "GET",
    url: `${local}/articles/rubric`,
    dataType: "json",
    data: {
      "count": count,
      "rubric": rubric,
    },
    success: (data) => {
      console.log(data, 'Рубрика')
      const articlesData = data;
      $(bigContainer).html(loadTemplate(articlesData[3], articlesData[3]?.id))
      $(middleContainer).html(loadTemplateM(articlesData, amount))
    }
  })
}

const initArticles = (count, section, rubric) => {
  const amount = 3
  $.ajax({
    method: "GET",
    url: `${local}/articles`,
    dataType: "json",
    data: {
      "count": count,
      "section": section,
      "rubric": rubric,
    },
    success: (data) => {
      console.log(data, 'Количество')
      const articlesData = data;
      $(bigContainer).html(loadTemplate(articlesData[3], articlesData[3]?.id))
      $(middleContainer).html(loadTemplateM(articlesData, amount))
    }
  })
};

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

console.log(e.target,'Таргет САб меню')
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
      loadListArt(8,'languages','rubricHtml');
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