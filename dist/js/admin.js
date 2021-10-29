const welcome = $('#welcome');
const sparrow = $('#sparrow');
const local = `http://localhost:3005`;

console.log(welcome.val())

$('#send').on('click',()=>{
    $.ajax({
      method: "GET",
      url: `${local}/admin`,

      data: {
        "welcome": welcome.val(),
        "sparrow":sparrow.val()
      },
      success: (data) => {
     console.log(typeof data, 'ДАТА')
        $("body").replaceWith(data);
  
      }
    })
})
