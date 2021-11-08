const loadSigleArticle = (article) => {
  const articleTemp = `
    <div class="single-article">
    <a class="single-article__breadCrumbs" href="articles.html">Статьи-> </a><a>${article.title}</a>
      <div class="single-article__image">
        <img src="${article.image}" alt="photo" />
      </div>
      <p class="single-article__date">${article.date}</p>
      <h4 class="single-article__title">${article.title}</h4>
      <div class="single-article__text">
      ${article.text}
      </div>
      <div class="single-article__back-container">
        <a class="single-article__back" href="articles.html">Назад</a>
      </div>
    </div>
    `
  return articleTemp;
}