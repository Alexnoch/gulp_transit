NODE_ENV === 'dev';

$('#edit-articles').on("click",()=>{
    $.ajax(
        {
            method: "GET",
            url: `${NODE_ENV === 'dev' ? 'http://localhost:3005' : 'http://78.155.222.130'}/admin/edit-articles`,
            success: (data) => {
            const container = $('#admin-content-display');
            $(container).replaceWith(data);
      
            }
          }
    )
})