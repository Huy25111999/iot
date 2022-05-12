
// main
$(document).ready(function() {
    map();
    searchDevice();

})

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

$('#btn-close').click(function (){
    $('#modal').css('display','none');
})

$('#Close').click(function (){
    $('#modal').css('display','none');
})

function map(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5c3VwcG9ydCIsImEiOiJjbDB2dDV1d3kxYWF6M2lvMmo0Mml3MWJ2In0.sBwz__9G5aSTCROFnlKrYw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        //   center: [ 103.90462168031246, 20.668780521951536 ],
        center: [105.811197,21.067695 ],
        zoom: 8,
    });
    map.addControl(new mapboxgl.FullscreenControl(),'bottom-right');
    map.addControl(new mapboxgl.NavigationControl(),'bottom-right');
}

function searchDevice()
{
    var select = "<select id=\"imeiDevice\" data-placeholder=\"Thiết bị\" class=\"single-select select2-hidden-accessible\" style=\"width: 100%\" data-select2-id=\"imeiDevice\" tabindex=\"-1\" aria-hidden=\"true\">";
    select += '<option value="" data-select2-id="4>">Thiết bị</option>';
    $.ajax({
        url:"/getListDevice",
        method:"POST",
        dataType: 'json',
        data:JSON.stringify({
            "request": "GetListDevice",
            "data": {
                "phone": "0"
            }
        }),
        contentType: "application/json; charset=utf-8",
        success:function (res){
            console.log(1);
            console.log(res)
            var data= res.content.data.data;

            for ( var i=0; i < data.length;i++)
            {
                select += '<option value="'+data[i].id+'" data-select2-id="4">'+data[i].plate+'</option>';
            }
            select += '</select>';
            document.getElementById('selectDevice').innerHTML = select;
        },
        error:function (ER)
        {
            console.log("error")
        }
    })
}

$('#btn-viewID').click(function (){
     repeatListID();
   // listID();
})
function repeatListID()
{
    var interval = setInterval(listID,5000)

}
/*
function listID()
{
    var req = new FormData();
    req.request = "GetAttribute";
    var roles = $("#imeiDevice").val();
    var data = new FormData();
    data.id = roles ;
    data.type = "device" ;
    data.attribute = ["set_rf"] ;

    req.data = data ;

    $.ajax({
        url : "/getAttribute" ,
        method: "POST",
        dataType: 'json',
        data: JSON.stringify(req),
        contentType: "application/json; charset = utf-8" ,
        success:function (res)
        {
            console.log(11);console.log(res);
            var data = res.content.data.data.location;
            var idHienTai = "" ;

            for (var i = 0; i < data.current_id.length; i++) {
                idHienTai += '<tr>';
                idHienTai += '<td>' + (i + 1) + ". " + data.registered_id[i] + '</td>';
                idHienTai += '</tr>';
                idHienTai += 2;
            }

            var idDK = "" ;
            for ( var i =0 ; i< data.registered_id.length ; i++)
            {
                idDK += '<tr>';
                idDK +='<td>'+ (i+1)+". "+ data.registered_id[i] +'</td>';
                idDK += '</tr>';
            }

            var idMissing = "" ;
            for ( var i =0 ; i< data.missing_id.length ; i++)
            {
                idMissing += '<tr>';
                idMissing +='<td>'+ (i+1)+". "+ data.missing_id[i] +'</td>';
                idMissing += '</tr>';
            }

            var idLa = "" ;
            for ( var i =0 ; i< data.unknown_id.length ; i++)
            {
                idLa += '<tr>';
                idLa +='<td>'+ (i+1)+". "+data.unknown_id[i] +'</td>';
                idLa += '</tr>';
            }

            var  dataTable = '<tr>';
            dataTable +='<td id="idHienTai" class = "id-rfid">'+'<table class = "table-content" id ="current_id"><tbody>'+idHienTai+'</tbody></table>'+'</td>';
            dataTable +='<td id="idDK" class = "id-rfid" ><table class = "table-content" id ="registered_id"><tbody >'+ idDK +'</tbody></table></td>';
            dataTable +='<td id="idMissing" class = "id-rfid"><table class = "table-content" id ="missing_id"><tbody >'+idMissing+'</tbody></table></td>';
            dataTable +='<td id="idLa" class = "id-rfid"><table class = "table-content" id ="unknown_id"> <tbody >'+idLa+'</tbody></table></td>';
            dataTable += '</tr>';

            document.getElementById('modal-table-content').innerHTML = dataTable;

            var countID = '<table  id="contentID" ><thead id = "count-head" ><th>Số lượng</th></thead><tbody>';
            countID += '<tr id = "row-count-id">';
            countID += '<td id="column-count">'+ data.current_id.length +'</td>';
            countID += '<td>'+ data.registered_id.length+'</td>';
            countID += '<td>'+ data.missing_id.length+'</td>';
            countID += '<td>'+ data.unknown_id.length+'</td>';
            countID += '</tr>';
            countID += '</tbody>';
            countID += '</table>';
            document.getElementById('count-id').innerHTML = countID;

            var today = new Date();
            var dateTime = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+'-'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log(dateTime);

            var dateTimeUpdate = moment.unix(data.time_stamp / 1000).format("DD/MM/YYYY HH:mm:ss")
            document.getElementById('date_timepicker_update').textContent = dateTimeUpdate;
            var demo = data.time_stamp ;
            console.log(demo)

        },
        error:function (err)
        {
            console.log(err);
        }
    })
}
*/
function listID()
{
    var roles = $("#imeiDevice").val();
    $.ajax({
        url : "/getAttribute" ,
        method: "POST",
        dataType: 'json',
        data: JSON.stringify({
            "request": "GetAttribute",
            "data": {
                "id": "78639604-8276-480d-8962-65a54f3833d2",
                "type": "device",
                "attribute": ["set_rf"]

            }
        }),
        contentType: "application/json; charset = utf-8" ,
        success:function (res)
        {
            console.log(11);console.log(res);
            var data = res.content.data.data.location;
            var idHienTai = "" ;

            for (var i = 0; i < data.current_id.length; i++) {
                idHienTai += '<tr>';
                idHienTai += '<td>' + (i + 1) + ". " + data.registered_id[i] + '</td>';
                idHienTai += '</tr>';
                idHienTai += 2;
            }

            var idDK = "" ;
            for ( var i =0 ; i< data.registered_id.length ; i++)
            {
                idDK += '<tr>';
                idDK +='<td>'+ (i+1)+". "+ data.registered_id[i] +'</td>';
                idDK += '</tr>';
            }

            var idMissing = "" ;
            for ( var i =0 ; i< data.missing_id.length ; i++)
            {
                idMissing += '<tr>';
                idMissing +='<td>'+ (i+1)+". "+ data.missing_id[i] +'</td>';
                idMissing += '</tr>';
            }

            var idLa = "" ;
            for ( var i =0 ; i< data.unknown_id.length ; i++)
            {
                idLa += '<tr>';
                idLa +='<td>'+ (i+1)+". "+data.unknown_id[i] +'</td>';
                idLa += '</tr>';
            }

            var  dataTable = '<tr>';
            dataTable +='<td id="idHienTai" class = "id-rfid">'+'<table class = "table-content" id ="current_id"><tbody>'+idHienTai+'</tbody></table>'+'</td>';
            dataTable +='<td id="idDK" class = "id-rfid" ><table class = "table-content" id ="registered_id"><tbody >'+ idDK +'</tbody></table></td>';
            dataTable +='<td id="idMissing" class = "id-rfid"><table class = "table-content" id ="missing_id"><tbody >'+idMissing+'</tbody></table></td>';
            dataTable +='<td id="idLa" class = "id-rfid"><table class = "table-content" id ="unknown_id"> <tbody >'+idLa+'</tbody></table></td>';
            dataTable += '</tr>';

            document.getElementById('modal-table-content').innerHTML = dataTable;

            var countID = '<table  id="contentID" ><thead id = "count-head" ><th>Số lượng</th></thead><tbody>';
            countID += '<tr id = "row-count-id">';
            countID += '<td id="column-count">'+ data.current_id.length +'</td>';
            countID += '<td>'+ data.registered_id.length+'</td>';
            countID += '<td>'+ data.missing_id.length+'</td>';
            countID += '<td>'+ data.unknown_id.length+'</td>';
            countID += '</tr>';
            countID += '</tbody>';
            countID += '</table>';
            document.getElementById('count-id').innerHTML = countID;

            var today = new Date();
            var dateTime = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+'-'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log(dateTime);

            var dateTimeUpdate = moment.unix(data.time_stamp / 1000).format("DD/MM/YYYY HH:mm:ss")
            document.getElementById('date_timepicker_update').textContent = dateTimeUpdate;
            var demo = data.time_stamp ;
            console.log(demo)

        },
        error:function (err)
        {
            console.log(err);
        }
    })
}


// btn-register
$('#btn-seach').click(function (){
    $('#modal').css('display','block');
})

$('#Save').click(function (){
    register();
})

function register()
{
    var req = new FormData();
    req.request = "Set-RF"
    var data = new FormData();
    data.id = "78639604-8276-480d-8962-65a54f3833d2"
    // var rfid = ["E200001726040198224032c9",
    //     "E2000017690601070820C635"] ;
    var rfid = $('#username').val();
    data.set_rf = {"rfid":rfid}
    req.data = data

    $.ajax({
        url:"/setRFID",
        method:"POST",
        dataType: 'json',
        data:JSON.stringify(req),
        contentType: "application/json; charset=utf-8",
        success:function (res){
            console.log(1);
            console.log(res);
            $.ajax({
                url : "/getAttribute" ,
                method: "POST",
                dataType: 'json',
                data: JSON.stringify({
                    "request": "GetAttribute",
                    "data": {
                        "id": "78639604-8276-480d-8962-65a54f3833d2",
                        "type": "device",
                        "attribute": ["set_rf"]
                    }
                }),
                contentType: "application/json; charset=utf-8",
                success:function (res)

                {
                    console.log(1);
                    console.log(res);
                }
            })
        },
        error:function (ER)
        {
            console.log("error")
        }
    })

}

// Delete
$('#btn-xoa').click(function ()
{
    deleteID();
})
function deleteID()
{
    $.ajax({
        url: "/getAttribute",
        method: "POST",
        dataType: 'json',
        data: JSON.stringify({
            "request": "GetAttribute",
            "data": {
                "id": "78639604-8276-480d-8962-65a54f3833d2",
                "type": "device",
                "attribute": ["set_rf"]
            }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            console.log(1);
            console.log(res);

            var delID = res.content.data.data.set_rf.rfid;
            console.log(delID);

            $.ajax({
                url:"/editRF",
                method:"POST",
                dataType: 'json',
                data:JSON.stringify({
                    "request": "Edit-RFID",
                    "data": {
                        "id":"78639604-8276-480d-8962-65a54f3833d2",
                        "remove": delID,
                        "add": [""]
                    }
                }),
                contentType: "application/json; charset=utf-8",
                success:function (res){
                    console.log(111);
                    console.log(res)
                },
                error:function (ER)
                {
                    console.log("error")
                }
            })

        },
        error:function (err)
        {
            console.log("err");
        }
    })
}

/* Mode */
function checkMode()
{
    $.ajax({
        url: "/getAttribute",
        method: "POST",
        dataType: 'json',
        data: JSON.stringify({
            "request": "GetAttribute",
            "data": {
                "id": "78639604-8276-480d-8962-65a54f3833d2",
                "type": "device",
                "attribute": ["mode"]
            }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            console.log(res);
            console.log(res.content.data.data.mode);
            var mode = res.content.data.data.mode;
            if (mode == 0){
                console.log(11);
                $('#btn-update').css('background','#999999')

            }else{
                $('#btn-update').css('background','blue');
                register();
            }
        },
        error:function (err)
        {
            console.log("err");
        }
    });
}

