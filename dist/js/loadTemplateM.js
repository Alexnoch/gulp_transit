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