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
}