const loadTemplateM = (articlesData, amount) => {
  let result = articlesData.length
  let middleArticle = '';
  for (let i = 0; i < result; i++) {
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
