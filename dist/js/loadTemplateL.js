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
  