@@include('./articles-data.js');

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
  