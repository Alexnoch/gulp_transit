// AJAX - Запросы на сервер
NODE_ENV = 'dev';

const local = `http://localhost:3005`;
const server = `http://78.155.222.130`;

const loadSingle = (id) =>{
  console.log('ФУнкция единственного нажатия')
  $.ajax({
    method: "GET",
    url: `${NODE_ENV === 'dev' ? 'http://localhost:3005' : 'http://78.155.222.130'}/articles/one`,
    dataType: "json",
    data: {
      "id": id,
    },
    success: (data) => {
      console.log(data, 'Одна статья')
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
    url: `${NODE_ENV === 'dev' ? 'http://localhost:3005' : 'http://78.155.222.130'}/articles`,
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
    url: `${NODE_ENV === 'dev' ? 'http://localhost:3005' : 'http://78.155.222.130'}/articles/rubric`,
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
    url: `${NODE_ENV === 'dev' ? 'http://localhost:3005' : 'http://78.155.222.130'}/articles`,
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