// main
$(document).ready(function() {
    select();
})
function select()
{
    var item = new FormData();
    item.identifier = "vinacap@vinacap.vn",
    item.password = "123456a@",

    $.ajax({
        url:"http://api.innoway.vn/api/login" ,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': "application/json",
        },
        method: "POST",
        dataType:"json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(item),
        success:function(res)
        {
            alert(1)
        },
        error:function(error)
        {
            console.log("error");
        }
    })
    
}
