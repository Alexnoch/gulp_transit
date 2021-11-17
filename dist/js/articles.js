const loadTemplateM = (articlesData, amount) => {

  let middleArticle = '';
  for (let i = 0; i < amount; i++) {
    middleArticle += ` <div class="article-middle">
            <div class="article-middle__container">
              <div class="article-middle__image">
                    <img src="${articlesData[i]?.image}" alt="мозг" />
                </div>
                <div class="article-middle__content">
                    <p class="article-middle__date">${articlesData[i]?.date}</p>
                    <p id="${articlesData[i]?._id}" class="article-middle__title">${articlesData[i]?.title}</p>
                    <p id="${articlesData[i]?._id}" class="article-middle__text">${articlesData[i]?.desc}</p>
                    <div id="${articlesData[i]?._id}" class="article-middle__read">Читать статью</div>
                </div>
                </div>
            </div>`;
  }
  return middleArticle;
}
;
const loadTemplateL = (articlesData, amount) => {

    let middleArticle = '';
    for (let i = 0; i < amount; i++) {
      middleArticle += ` <div class="article-l">
              <div class="article-middle__container-l">
                <div class="article-middle__image-l">
                      <img src="${articlesData[i].image}" alt="мозг" />
                </div>
                <div class="article-l__content">
                      <p class="article-middle__date">${articlesData[i].date}</p>
                      <p id="${articlesData[i]._id}" class="article-middle__title">${articlesData[i].title}</p>
                      <p id="${articlesData[i]._id}" class="article-middle__text">${articlesData[i].desc}</p>
                      <div class="article-l__read" >Читать статью</div>
                </div>
                  </div>
              </div>`;
    }
    return middleArticle;
  }
  ;
const loadTemplateBig = (articlesData) => {
  console.log(articlesData,'LFNF')
  const bigArticle = `
            <div id="${articlesData._id}" class="article-big">
            <div class="article-big__container">
              <div class="article-big__image">
                <img src="${articlesData.image}" alt="Человеческий мозг картинка" />
              </div>
              <div class="article-big__content">
                <p class="article-big__date">${articlesData.date}</p>
                <p id="${articlesData._id}" class="article-big__title">${articlesData.title}</p>
                <p id="${articlesData._id}" class="article-big__text">${articlesData.desc}</p>
                <div class="article-big__read" >Читать статью</div>
              </div>
            </div>
          </div>
            `;
  return bigArticle;
};
const loadSigleArticle = (article) => {
  const articleTemp = `
    <div class="single-article">
   
    <div class="single-article__border">
    <a class="single-article__breadCrumbs" href="articles.html">Статьи</a>
    <div class="single-article__top">
    <h4 class="single-article__title">${article.title}</h4>
    <p class="single-article__date">${article.date}</p>
    </div>
      <div class="single-article__image">
        <img src="${article.image}" alt="photo" />
      </div>
      <div class="single-article__text">
      ${article.text}
      </div>
      <div class="single-article__back-container">
        <a class="single-article__back" href="articles.html">Назад</a>
      </div>
      </div>
    </div>
    `
  return articleTemp;
};
// AJAX - Запросы на сервер

const devServer = `http://localhost:3000`;
const backServer = `http://localhost:3005`;
const production = `http://alexnoch-blog.ru`;
const baseUrl = backServer;
// const local = 
// const server = `http://78.155.222.130`;

const loadSingle = (id) =>{
  $.ajax({
    method: "GET",
    url: `${baseUrl}/articles/one`,
    dataType: "json",
    data: {
      "_id": id,
    },
    success: (data) => {
    const container = $('.articles');
    $(container).html(loadSigleArticle(data[0]))
    $('body,html').animate({ scrollTop: top }, 300);
    loadOn()
    }
  })
}



const loadRubricArt = (count,rubric) =>{
  $.ajax({
    method: "GET",
    url: `${baseUrl}/articles/rubric`,
    dataType: "json",
    data: {
      "count": count,
      "rubric": rubric,
    },
    success: (data) => {
      console.log(data, 'Рубрика')
      const articlesData = data;
      $(middleContainer).html('');
      $(middleContainer).html(`<div class="middle-all">${loadTemplateM(articlesData, 8)}</div>`);
      loadOn()

    }
  })
}

const initArticles = (count, section, rubric, temp) => {
  const amount = 3

  switch(temp){
    case 'middle':
      $.ajax({
        method: "GET",
        url: `${baseUrl}/articles`,
        dataType: "json",
        data: {
          "count": count,
          "section": section,
          "rubric": rubric,
        },
        success: (data) => {
          console.log(data, 'Количество')
          const articlesData = data;
          // $(bigContainer).html(loadTemplate(articlesData[3], articlesData[3]?.id))
          $(middleContainer).append(`<div class="${temp}">${loadTemplateM(articlesData, count)}</div>`)
          loadOn()
        }
      })
      break;
    case 'big-left' :
      $.ajax({
        method: "GET",
        url: `${baseUrl}/articles`,
        dataType: "json",
        data: {
          "count": count,
          "section": section,
          "rubric": rubric,
        },
        success: (data) => {
          console.log(data, 'Количество')
          const articlesData = data;
          $(middleContainer).append()
          $(middleContainer).append(`
          <div class="${temp}">
            ${loadTemplateBig(articlesData[1])}
            ${loadTemplateL(articlesData, 1)}
          </div>`)
          loadOn()
        }
      })
      break;
      case 'big-right' :
        $.ajax({
          method: "GET",
          url: `${baseUrl}/articles`,
          dataType: "json",
          data: {
            "count": count,
            "section": section,
            "rubric": rubric,
          },
          success: (data) => {
            console.log(data, 'Количество')
            const articlesData = data;
            // $(bigContainer).html(loadTemplate(articlesData[3], articlesData[3]?.id))
            $(middleContainer).append(`<div class="${temp}">${loadTemplateM(articlesData, count)}</div>`)
            loadOn()
          }
        })
        break;
  }
 
}

const initNewHtml = (count, section, rubric, temp,name)=>{
  $.ajax({
    method: "GET",
    url: `${baseUrl}/articles`,
    dataType: "json",
    data: {
      "count": count,
      "section": section,
      "rubric": rubric,
    },
    success: (data) => {
      $(middleContainer).append(`
      <div>
      <p class="rubricName">${name}</p>
      <div class="${temp}">${loadTemplateM(data, count)}</div>
        <p class="view-all">
          Посмотреть все статьи
        </p>
      </div>`)
      loadOn()
    }
  })
}

const initNewHtmlBig = (count, section, rubric, temp,name) =>{
   $.ajax({
        method: "GET",
        url: `${baseUrl}/articles`,
        dataType: "json",
        data: {
          "count": count,
          "section": section,
          "rubric": rubric,
        },
        success: (data) => {
          console.log(data, 'Количество')
          const articlesData = data;
          $(middleContainer).append()
          $(middleContainer).append(`
          <div>
          <p class="rubricName">${name}</p>
          <div class="${temp}">
            ${loadTemplateBig(articlesData[1])}
            ${loadTemplateL(articlesData, 1)}
          </div>
          <p class="view-all">Смотреть все</p>
          </div>`)
          loadOn()
        }
      })
}

const initNew = ()=>{
  initNewHtml(3, "languages", "rubricHtml","middle","HTML");
  initNewHtmlBig(2, "languages", "rubricCss","big-left","CSS");
  initNewHtml(3, "languages", "rubricJavascript","middle","JAVASCRIPT");
};

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