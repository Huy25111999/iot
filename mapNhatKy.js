
document.getElementById("menu-toggle").onclick=function (){
    if (this.classList.contains('move-in'))
    {
        document.getElementById("sidebar-content").style.display="block";
        this.classList.add('move-out');
        this.classList.remove('move-in');
    }else
    {
        document.getElementById("sidebar-content").style.display="none";
        this.classList.add('move-in');
        this.classList.remove('move-out');
    }
}
$(document).ready(function() {
     select();
});

function select(){
    var select = "<select id=\"imeiDevice\" data-placeholder=\"Thiết bị\" class=\"single-select select2-hidden-accessible\" style=\"width: 100%\" data-select2-id=\"imeiDevice\" tabindex=\"-1\" aria-hidden=\"true\">";
    select += '<option value="" data-select2-id="4>">Thiết bị</option>';
    $.ajax({
        url:"/getAllImeiDevice" ,
        method: "GET",
        dataType:"json",
        success:function(res)
        {
             var data= res.content.data.data;
             for ( var i=0; i < data.length;i++)
             {
                 select += '<option value="'+data[i].id+'" data-select2-id="4">'+data[i].imei+'</option>';
             }
            select += '</select>';
            document.getElementById('selectDevice').innerHTML = select;
            console.log(res.content.data.data);
        },
        err:function (res)

        {
            alert(23)
        }
    })

}