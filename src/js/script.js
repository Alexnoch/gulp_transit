const adminTextarea = $('#admin_textarea');
const preview = $('#preview');
const content = adminTextarea.val();
var rubricSend = '';



$('.edit-panel__menu').on('click',(e)=>{
  const content = adminTextarea.val();

  const id = e.target.id;
  switch(id){
    case 'add_h1' :
      adminTextarea.val(`${content} <h1> </h1>`)
      break;
    case 'add_h4' :
      adminTextarea.val(`${content} <h4> </h4>`)
      break;
    case 'add_p' :
      adminTextarea.val(`${content} <p> </p>`)
      break;
    case 'add_photo' :
      adminTextarea.val(`${content} <img src="" alt=""> </img>`)
      break;
  }

})


adminTextarea.on('change keyup paste', function() {
  console.log('ЧТото')
  const content = adminTextarea.val();
   preview.html(content)
});


// Выбор секции
const section = $('#section');
const sectionVal = section.val();
section.on('change',()=>{
  $('.active').removeClass('active');
  const sectionVal = section.val();
  $(`#${sectionVal}`).addClass('active');
});

$('#languages, #guides, #others').on('change', (e)=>{
  const rubric = e.target;
  const selectRubric = $(rubric).val()
  rubricSend = selectRubric;
})


$('#send_to_server').on('click',()=>{
  const article = {
    id:$('#params-id').val(),
    date:$('#params-date').val(),
    title:$('#params-title').val(),
    text:adminTextarea.val(),
    image:$('#params-image').val(),
    section:sectionVal,
    rubric:rubricSend,
  }

  console.log(article,'Готовая статяь')
  $.ajax({
    method: "GET",
    url: `${local}/admin/newArticle`,
    dataType: "json",
    data: article
    // success: (data) => {
    //   console.log(data, 'Список')
    //   $(container)
    //   .addClass('articles_flex-row')
    //   .html(`<a class="articles__btn-back" href="articles.html">Все статьи -> Языки </a> ${loadTemplateM(data,count)}`)
    //   loadOn()

    // }
  })
})