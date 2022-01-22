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
      console.log(data,'ДАТА 1')
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

// Загрузка начальных стайте шаг 2 
const initNew = ()=>{
  initNewHtmlBig(2, "languages", "rubricCss","big-left","CSS");
  initNewHtml(3, "languages", "rubricHtml","middle","HTML");
  initNewHtml(3, "languages", "rubricJavascript","middle","JAVASCRIPT");
}