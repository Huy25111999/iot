
// Open modal
function openModal(){
    document.getElementById('modal').style.display='block' ;
    document.getElementById('wrapper').style.backgroundColor='#f0e8e8';
}

// Close modal
document.getElementById('Close').onclick=function () {
    document.getElementById('modal').style.display='none';
    document.getElementById('wrapper').style.backgroundColor='#FFFFFF';
    document.getElementById('card').style.backgroundColor='#FFFFFF';
}

//Add
document.getElementById('addTable').onclick=function () {
    openModal()
    document.getElementById('Add').style.display='block';
    document.getElementById('Close').style.display='block';
    document.getElementById('Edit').style.display='none';
}

// Xuất ra file excel
$("#btn-excel").click(function(){
    $("#datatablesNew").table2excel({
        name: "TênFile",
        filename: "FileExcel",
        fileext: ".xls"
    });
});

// Show màn hình
$(document).ready(function() {
    renderNew();
    render();
});

function render(){
    var table = '<table id ="datatables" class="table dataTable no-footer dtr-inline" ><thead><tr><th>STT</th><th>ID</th><th>Username</th> <th>Email</th><th>Role</th></tr></thead><tbody>';
    $.ajax({
        url: "/getListUsers",
        method: "GET",
        dataType: "json",
        success: function (res) {
            let data = res.content;
            for (var i = 0; i < data.length; i++){
                table +='<tr>';
                table += "<td contenteditable=''>"+(i+1)+ "</td>";
                table +='<td contenteditable="">'+data[i].id+'</td>';
                table +='<td contenteditable="">'+data[i].username+'</td>';
                table +='<td contenteditable>'+data[i].email+'</td>';
                table +='<td contenteditable>'+data[i].role+'</td>';
                table +='<td>'+
                    '<div class="dropdown">\n' +
                    '  <button class = "btn-action" type="button" data-toggle="dropdown">     :  \n' +
                    '  <ul class="dropdown-menu">\n' +
                    '    <li><a href="#" class="glyphicon glyphicon-search">  Xem chi tiết</a></li>\n' +
                    '    <li><a href="#" id="editUsers" class="glyphicon glyphicon-pencil gly-edit" onclick="edit(\''+data[i].id+'\');" >  Chỉnh sửa</a></li>\n' +
                    '    <li><a href="#" class="glyphicon glyphicon-th-list">  Sao chép ID</a></li>\n' +
                    '    <li><a href="#" class="glyphicon glyphicon-trash gly-edit" onclick="deleteRow(\''+data[i].id+'\');">  Xóa</a></li>\n' +
                    '  </ul>\n' +
                    '</div>\n'+
                    '</td>';
                table +='</tr>';
            }
            table += '</tbody></table>';
            document.getElementById('database').innerHTML = table;

            $('#datatables').DataTable({});
            $( "#datatables" ).removeClass( "dataTable no-footer" )
            console.log(data)
        },
        error: function (err){
            console.log(err);
        }
    })
}

function renderNew() {
    var tableNew = '<table id ="datatablesNew" class="table dataTable no-footer dtr-inline" ><thead><tr><th>STT</th><th>ID</th><th>Username</th> <th>Email</th><th>Role</th><th></th></tr></thead><tbody>';
    $.ajax({
        url: "/getListUsers",
        method: "GET",
        dataType: "json",
        success: function (res) {
            let data = res.content;
            for (var i = 0; i < data.length; i++) {
                tableNew += '<tr>';
                tableNew += "<td contenteditable=''>" + (i + 1) + "</td>";
                tableNew += '<td contenteditable="">' + data[i].id + '</td>';
                tableNew += '<td contenteditable="">' + data[i].username + '</td>';
                tableNew += '<td contenteditable>' + data[i].email + '</td>';
                tableNew += '<td contenteditable>' + data[i].role + '</td>';
                tableNew += '</tr>';
            }
            tableNew += '</tbody></table>';
            document.getElementById('databaseNew').innerHTML = tableNew;
        }
    })
}
// Add
function them(){
    var username = $("#username").val();
    var password = $("#password").val();
    var passwordRepeat = $("#passwordRepeat").val();
    var role = $("#role").val();

    var item = new FormData();
    item.username = username;
    item.password = password;
    item.passwordRepeat = passwordRepeat;
    item.role = role;
    var r = jsRoutes.controllers.UserController.addUser();
        $.ajax({
            method: "POST",
            url: r.url,
            data: JSON.stringify(item),
            dataType: "json",
            type: r.type,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                render();
                if(data.success)
                {
                    showNotification('top','center','success',data.resultString,'notifications');
                    setTimeout(function ()
                    {
                        window.location.reload();
                    },1000);
                }else
                {
                    showNotification('top','center','danger',data.errorString,'notifications');
                }
            }
        })
}

//Edit
function  edit(id){
    document.getElementById('form-head-content').textContent='SỬA MỚI NGƯỜI DÙNG';
    openModal();
    document.getElementById('Add').style.display='none';
    document.getElementById('Close').style.display='block';
    document.getElementById('Edit').style.display='block';
    $.ajax({
        url: "/getListUsers",
        method: "GET",
        dataType: "json",
        success: function (res) {
            let data = res.content;
            for (var i = 0; i < data.length; i++) {
                if(data[i].id == id){
                    document.getElementById('username').value = data[i].username,
                    document.getElementById('password').value = data[i].password;
                    document.getElementById('passwordRepeat').value = data[i].passwordRepeat;
                    document.getElementById('role').value = data[i].role;
                }
            }
        }
    })
}
document.getElementById('Edit').onclick=function ()
{
    editUsers();
}
function  editUsers(){
    var username = $("#username").val();
    var password = $("#password").val();
    var passwordRepeat = $("#passwordRepeat").val();
    var role = $("#role").val();

    var item = new FormData();
    item.username = username;
    item.password = password;
    item.passwordRepeat = passwordRepeat;
    item.role = role;
    $.ajax({
        url: "/editUser",
        method: "POST",
        data: JSON.stringify(item),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            alert(11)
            render();
        },
        err:function (){
            alert(12)
            render();
        }
    })
}

//Delete
function deleteRow(id){
    var modal = document.getElementById('modal-delete');
    modal.style.display="block";
    document.getElementById('no').onclick=function(){
        modal.style.display="none";
    }
    document.getElementById('yes').onclick=function(){
        $.ajax({
            url: "/getListUsers",
            method: "GET",
            dataType: "json",
            success: function (res) {
                let data = res.content;
                for (var i = 0; i < data.length; i++) {
                    if(data[i].id == id){
                        document.getElementById('stt').value = data[i].id;
                    }
                }
            }
        })
        var stt = $("#stt").val();
        var item = new FormData();
        item.id = stt;
        $.ajax({
                url: "/deleteUser",
                method: "POST",
                dataType: "json",
                data: JSON.stringify(item),
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    document.getElementById('modal-delete').style.display='none';
                    console.log(data)
                    // if(data.success)
                    // {
                    //     showNotification('top','center','success',data.resultString,'notifications');
                    //     setTimeout(function ()
                    //     {
                    //         window.location.reload();
                    //     },1000);
                    // }else
                    // {
                    //     showNotification('top','center','danger',data.errorString,'notifications');
                    // }
                    render();
                },
                 error: function (data){
                    document.getElementById('modal-delete').style.display='none';
                     console.log(1)
                     console.log(2)
                     console.log(data)
                     if(data.success)
                     {
                         showNotification('top','center','success',data.resultString,'notifications');
                         setTimeout(function ()
                         {
                             window.location.reload();
                         },1000);
                     }else
                     {
                         showNotification('top','center','danger',data.errorString,'notifications');
                     }
                     render();

                 }
        })
    }
}


/*
var data = [{stt: 1,ten: 'Humg',maID: '1338rfuhc', email: 'Humg@gmail.com', nhom: '01',vaiTro: 'Cơ bản', ngayTao: '21-10-2121', nguoiTao: 'Huy'},
    {stt: 2,ten: 'Huy',maID: '1fef338rfuhc', email: 'Huy@gmail.com', nhom: '01',vaiTro: 'Cơ bản', ngayTao: '21-10-2121', nguoiTao: 'Huy'},
    {stt: 3,ten: 'Ha Noi',maID: '1338rfuhcvcbcv', email: 'HaNoi@gmail.com', nhom: '01',vaiTro: 'Xem', ngayTao: '21-10-2121', nguoiTao: 'Huy'},
    {stt: 4,ten: 'Hung Yen',maID: '1fef338rfuhccvbc', email: 'HungYen@gmail.com', nhom: '01',vaiTro: 'Quản trị viên', ngayTao: '8-7-2121', nguoiTao: 'Huy'}];


function input(){
    var ten = $("#ten").val();
    var email = $("#email").val();
    var matKhau = $("#matKhau").val();
    var nhapMatKhau = $("#nhapMatKhau").val();
}

function check(){
    input();
    if( ten == "") {
        alert("Tên ko được để trống");
        return false;
    }
    if( email == "") {
        alert("Email ko được để trống");
        return false;
    }
    if( matKhau == ""){
        alert("Mật khau ko được để trống");
        return false ;
    }
    if ( nhapMatKhau == "") {
        alert("Mật khẩu nhập lại ko được để trống");
        return false;
    }
    return true ;
}

function hienThi(){
    var table = '<table class = "form_table" id ="form_table1"><thead><tr><th>STT</th><th>Tên</th> <th>Mã ID</th><th>Email</th><th>Nhóm</th><th>Vai trò</th><th>Ngày tạo</th><th>Người tạo</th></tr></thead><tbody>';
    for (var i = 0; i < data.length; i++){
        table +='<tr>';
        table +='<td>'+data[i].stt+'</td>';
        table +='<td>'+data[i].ten+'</td>';
        table +='<td>'+data[i].maID+'</td>';
        table +='<td>'+data[i].email+'</td>';
        table +='<td>'+data[i].nhom+'</td>';
        table +='<td>'+data[i].vaiTro+'</td>';
        table +='<td>'+data[i].ngayTao+'</td>';
        table +='<td>'+data[i].nguoiTao+'</td>';
        table +='<td>'+
            '<div class="dropdown">\n' +
            '  <button class = "btn-action" type="button" data-toggle="dropdown"> :  \n' +
            '  <ul class="dropdown-menu">\n' +
            '    <li><a href="#" class="glyphicon glyphicon-search">  Xem chi tiết</a></li>\n' +
            '    <li><a href="#" id="" class="glyphicon glyphicon-pencil gly-edit" onclick="openModal();editRow('+data[i].stt+');document.getElementById(\'form-head-content\').textContent=\'SỬA MỚI NGƯỜI DÙNG\' " >  Chỉnh sửa</a></li>\n' +
            '    <li><a href="#" class="glyphicon glyphicon-th-list">  Sao chép ID</a></li>\n' +
            '    <li><a href="#" class="glyphicon glyphicon-trash gly-edit" onclick="deleteRow(\''+data[i].maID+'\');">  Xóa</a></li>\n' +
            '  </ul>\n' +
            '</div>\n'+
            '</td>';

        table +='</tr>';

    }
    table += '</tbody></table>';
    document.getElementById('database').innerHTML = table ;
    console.log(data);
}

// Add
function them(){
    var ten = $("#ten").val();
    var email = $("#email").val();
    var nhom = $("#nhom").val();
    var vaiTro = $("#vaiTro").val();
    var matKhau = $("#matKhau").val();
    var nhapMatKhau = $("#nhapMatKhau").val();
    var maID = Math.random().toString(36).substring(7);
    var item = {
        stt :stt,
        ten :ten,
        maID:maID,
        email :email,
        nhom :nhom,
        vaiTro :vaiTro,
        matKhau:matKhau,
        nhapMatKhau:nhapMatKhau,
        ngayTao:"25-11",
        nguoiTao:"Huy",
    };

    var index = data.findIndex((c)=>c.stt==item.stt)
    if (check()){
        if ( index >=0){
            data.splice(index,1,item);
            resetRow();
            document.getElementById('modal').style.display='none' ;
        }else{
            for ( var i=0; i< data.length; i++){
                var ID = Number(data[i].stt)+1;
            }
            item.stt = ID;
            data.push(item);
            resetRow();
            document.getElementById('modal').style.display='none' ;
        }
    }
    hienThi();
    console.log(index);
}

//reset
function resetRow(){
    document.getElementById('stt').value = "";
    document.getElementById('ten').value = "";
    document.getElementById('email').value = "";
    document.getElementById('nhom').value = "";
    document.getElementById('vaiTro').value = "";
    document.getElementById('matKhau').value = "";
    document.getElementById('nhapMatKhau').value = "";
}

// Sửa
function  editRow(el){
    for (var i=0; i<data.length; i++){
        if(data[i].stt==el){
            document.getElementById('stt').value = data[i].stt;
            document.getElementById('ten').value = data[i].ten;
            document.getElementById('email').value = data[i].email;
            document.getElementById('nhom').value = data[i].nhom;
            document.getElementById('vaiTro').value = data[i].vaiTro ;
        }
    }
}

//   Xóa
function deleteRow(maID){
    var modal = document.getElementById('modal-delete');
    modal.style.display="block";
    document.getElementById('no').onclick=function(){
        modal.style.display="none";
    }
    var text = '';
    for (var i = 0; i < data.length; i++){
        if (data[i].maID == maID){
            text += '<p> Bạn có chắc chắn muốn xóa người dùng '+ data[i].stt +' ko?</p>';
        }
    }
    document.getElementById('content-head').innerHTML = text;

    document.getElementById('yes').onclick=function(){
        for ( var i=0; i<data.length; i++){
            if (data[i].maID == maID){
                data.splice(i,1) ;
                modal.style.display="none";
            }
        }
        hienThi();
    }
}

*/