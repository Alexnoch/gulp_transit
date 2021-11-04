// AJAX - Запросы на сервер

const NODE_ENV = 'prod';

const baseUrl = 
NODE_ENV === 'prod'
? `http://alexnoch-blog.ru`
: `http://localhost:3005`;
// const local = 
// const server = `http://78.155.222.130`;



const loadSingle = (id) =>{
  $.ajax({
    method: "GET",
    url: `${baseUrl}/articles/one`,
    dataType: "json",
    data: {
      "id": id,
    },
    success: (data) => {
    const container = $('.articles');
    $(container).html(loadSigleArticle(data[0]))
    $('body,html').animate({ scrollTop: top }, 300);
    loadOn()
    }
  })
}

const loadListArt = (count,section,rubric) =>{
  const container = $('.articles');
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
      console.log(data, 'Список')
      $(container)
      .addClass('articles_flex-row')
      .html(`<a class="articles__btn-back" href="articles.html">Все статьи -> Языки </a> ${loadTemplateM(data,count)}`)
      loadOn()

    }
  })
} 

const loadRubricArt = (count,rubric) =>{
  const amount = 3
  console.log('API-> rubric funct')
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
      $(bigContainer).html(loadTemplate(articlesData[3], articlesData[3]?.id))
      $(middleContainer).html(loadTemplateM(articlesData, amount))
      loadOn()

    }
  })
}

const initArticles = (count, section, rubric) => {
  const amount = 3
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
      $(bigContainer).html(loadTemplate(articlesData[3], articlesData[3]?.id))
      $(middleContainer).html(loadTemplateM(articlesData, amount))
      loadOn()
    }
  })
}