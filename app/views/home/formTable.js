
 var data = [{id: 1, hoTen: 'Humg', ngaySinh: '25-11', queQuan: 'Hưng Yên', phone: '+84368949274'},
            {id: 2, hoTen: 'Huy', ngaySinh: '25-11', queQuan: 'Văn Giang', phone: '+84368378293'},
            {id: 3, hoTen: 'Humg', ngaySinh: '25-11', queQuan: 'Hưng Yên', phone: '+84368949274'},
            {id: 4, hoTen: 'Huy', ngaySinh: '25-11', queQuan: 'Văn Giang', phone: '+84368378293'},
            {id: 5, hoTen: 'Humg', ngaySinh: '25-11', queQuan: 'Hưng Yên', phone: '+84368949274'},
            {id: 6, hoTen: 'Huy', ngaySinh: '25-11', queQuan: 'Văn Giang', phone: '+84368378293'},
            {id: 7, hoTen: 'Humg', ngaySinh: '25-11', queQuan: 'Hưng Yên', phone: '+84368949274'},
            {id: 8, hoTen: 'Huy', ngaySinh: '25-11', queQuan: 'Văn Giang', phone: '+84368378293'},
            {id: 9, hoTen: 'Humg', ngaySinh: '25-11', queQuan: 'Hưng Yên', phone: '+84368949274'},
            {id: 10, hoTen: 'Huy', ngaySinh: '25-11', queQuan: 'Văn Giang', phone: '+84368378293'},
            {id: 11, hoTen: 'Humg', ngaySinh: '25-11', queQuan: 'Hưng Yên', phone: '+84368949274'},
            {id: 12, hoTen: 'Huy', ngaySinh: '25-11', queQuan: 'Văn Giang', phone: '+84368378293'}];
 function check(){
     var HoTen = document.getElementById('hoTen').value;
     var NgaySinh = document.getElementById('ngaySinh').value;
     var QueQuan = document.getElementById('queQuan').value;
     var Phone = document.getElementById('phone').value;
     if( HoTen == "") {
         alert("Họ tên ko được để trống");
         return false;
     }
     if( NgaySinh == "") {
         alert("NgaySinh ko được để trống");
         return false;
     }
     if( QueQuan == ""){
         alert("QueQuan ko được để trống");
         return false ;
     }
     if ( Phone == "") {
         alert("phone ko được để trống");
         return false;
     }
     return true ;
 }
 
 function hienThi(){
     var table = '<table class = "form_table" id ="form_table1"><thead><tr><th>ID</th><th>Họ Tên</th> <th>Ngày sinh</th><th>Quê quán</th><th>Phone</th><th>Chức năng</th></tr></thead><tbody>';
     for (var i = 0; i < data.length; i++){
         table +='<tr>';
         table +='<td>'+data[i].id+'</td>';
         table +='<td>'+data[i].hoTen+'</td>';
         table +='<td>'+data[i].ngaySinh+'</td>';
         table +='<td>'+data[i].queQuan+'</td>';
         table +='<td>'+data[i].phone+'</td>';
         table +='<td class="td-actions">'+'<span  onclick="deleteRow('+data[i].id+');" class="glyphicon glyphicon-remove gly-edit"></span>' + '<span  onclick="document.getElementById(\'modal\').style.display=\'block\';editRow('+data[i].id+');" class="glyphicon glyphicon-pencil gly-edit"></span>' ;+'</td>'; 
         table +='</tr>';
     }
     table += '</tbody></table>';
     document.getElementById('database').innerHTML = table ;
     console.log(data);
 }
 
 var item = {
     id :id,
     hoTen :hoTen,
     ngaySinh :ngaySinh,
     queQuan :queQuan,
     phone :phone,
 };















 // Add
 function them(){
     var id = document.getElementById('id').value;
     var hoTen = document.getElementById('hoTen').value;
     var ngaySinh = document.getElementById('ngaySinh').value;
     var queQuan = document.getElementById('queQuan').value;
     var phone = document.getElementById('phone').value;
     var item = {
         id :id,
         hoTen :hoTen,
         ngaySinh :ngaySinh,
         queQuan :queQuan,
         phone :phone,
     };
     
     
     var index = data.findIndex((c)=>c.id==item.id)
     if (check()){
        if ( index >=0){   
            data.splice(index,1,item);
            resetRow();
        }else{
            for ( var i=0; i< data.length; i++){       
            var ID = Number(data[i].id)+1;       
             }
            item.id = ID;
            data.push(item);
            resetRow();
        }
     }    
     hienThi();
     console.log(index);
 }
 
 //reset
 function resetRow(){
     document.getElementById('id').value = "";
     document.getElementById('hoTen').value = "";
     document.getElementById('ngaySinh').value = "";
     document.getElementById('queQuan').value = "";
     document.getElementById('phone').value = "";
 }
 
 // Sửa
 function  editRow(el){
    for (var i=0; i<data.length; i++){
        if(data[i].id==el){
            document.getElementById('id').value = data[i].id;
            document.getElementById('hoTen').value = data[i].hoTen;
            document.getElementById('ngaySinh').value = data[i].ngaySinh;
            document.getElementById('queQuan').value = data[i].queQuan ;
            document.getElementById('phone').value = data[i].phone;     
        }
    }
 }
 
 //   Xóa
 function deleteRow(id){
    var modal = document.getElementById('modal-delete');  
    modal.style.display="block";  
    document.getElementById('no').onclick=function(){
        modal.style.display="none";
    }
    document.getElementById('yes').onclick=function(){
         for ( var i=0; i<data.length; i++){
            if (data[i].id == id){
                data.splice(i,1) ;  
                modal.style.display="none";    
            }
        }
        hienThi();
    }     
 }

 $(document).ready(function() {
    // LoadData();
    // $('#form_table1').dataTable({}); 
});
/*
function LoadData() {
    $.ajax({
        url: 'http://127.0.0.1:5500/Test/demo.html',
        type: 'GET',
        dataType : 'json',
        success: function(rs) {
            var str = "";
            str += '<table border="1" cellspacing="0" cellpadding="10">';
            str += '<tr>';
            str += '<td>';
            str += 'Number';
            str += '</td>';
            str += '<td>';
            str += 'Username';
            str += '</td>';
            str += '<td>';
            str += 'Role';
            str += '</td>';
            str += '<td>';
            str += 'Action';
            str += '</td>';
            str += '<tr>';
            // Kết quả là một object dạng json
            $.each(rs.content, function(i, item) {
                str += "<tr>";
                str += "<td>" + (i + 1) + "</td>";
                str += "<td>" + item.username+ "</td>";
                str += "<td>" + item.role+ "</td>";
                str += "<td><a data-id='" + item.id + "'><span class=\"glyphicon glyphicon-remove gly-edit\"></span></a></td>";
                str += "</tr>";
            });
            str += '</table>';
            // Hiển thị dữ liệu ra màn hình
            $('#database').html(str);
        }
    });
}
*/