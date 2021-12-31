/**
 * Created by nguyenphuonglinh on 28/12/2021.
 */
function addData() {
    $('#table1').append('<h6>Đã Thêm</h6>');
//            var STT=document.getElementById('STT').value;
//            var Thuoc tinh=document.getElementById('Thuoc tinh').value;
//            var ID=document.getElementById('ID').value;
//            var Loai thuoc tinh=document.getElementById('Loai thuoc tinh').value;
//            var Loai gia tri=document.getElementById('Loại gia tri').value;
//            var Gia tri mac dinh=document.getElementById('Gia tri mac dinh').value;
//            var Gia tri hien tai=document.getElementById('Gia tri hien tai').value;
//            var Cap nhap lan cuoi=document.getElementById('Cap nhap lan cuoi').value;
//            if (check() )
//            {
//                var tabLines= document.getElementById("table");
//                var tabLinesRow= tabLines.insertRow(tabLines.rows.length-1);
//                var col1html=STT;
//                var col2html=Thuoc tinh;
//                var col3html=Loai thuoc tinh;
//                var col4html=ID;
//                var col5html=Loai gia tri;
//                var col6html=Gia tri mac dinh;
//                var col7html=Gia tri hien tai;
//                var col8html=Cap nhap lan cuoi;
//
//                var col1=tabLinesRow.insertCell(0); col1.innerHTML=col1html;
//                var col2=tabLinesRow.insertCell(1); col2.innerHTML=co12html;
//                var col3=tabLinesRow.insertCell(2); col3.innerHTML=col3html
//                var co14=tabLinesRow.insertCell(3); co14.innerHTML=co14html;
//                var col5=tabLinesRow.insertCell(4); col5.innerHTML=col5html;
//                var col6=tabLinesRow.insertCell(5); col6.innerHTML=col6html;
//                var col7=tabLinesRow.insertCell(6); col7.innerHTML=col7html;
//                var col8=tabLinesRow.insertCell(7); col8.innerHTML=col8html;
//
//            }
}
function check(){
    var STT=document.getElementById('STT').value;
    var Thuoctinh=document.getElementById('Thuoctinh').value;
    var ID=document.getElementById('ID').value;
    var Loaithuoctinh=document.getElementById('Loaithuoctinh').value;
    var Loaigiatri=document.getElementById('Loạigiatri').value;
    var Giatrimacdinh=document.getElementById('Giatrimacdinh').value;
    var Giatrihientai=document.getElementById('Giatrihientai').value;
    var Capnhaplancuoi=document.getElementById('Capnhaplancuoi').value;
    if (Stt=="") {
        alert("STT ko được để trống");
        return false ;
    }
    if (Thuoctinh="") {
        alert("Thuoctinh ko được để trống");
        return false ;
    }
    if (ID="") {
        alert("ID ko được để trống");
        return false ;
    }
    if (Loaithuoctinh="") {
        alert("Loaithuoctinh ko được để trông");
        return false ;
    }
    if (Loaigiatri="") {
        alert("Loaigiatri ko được để trống");
        return false ;
    }
    if (Giatrimacdinh="") {
        alert("Giatrimacdinh ko được để trống");
        return false ;
    }
    if (Giatrihientai="") {
        alert ("Giatrihientai ko được để trống");
        return false ;
    }
    if (Capnhaplancuoi="") {
        alert("Capnhaplancuoi ko được để trống");
        return false;
    }
    return true;
}
function them(){
    let Stt = document.getElementById('stt').value;
    let Id = document.getElementById('id').value;
    let HoTen = document.getElementById('hoTen').value;
    let NgaySinh = document.getElementById('ngaySinh').value;
    let QueQuan = document.getElementById('queQuan').value;
    let SoCMND = document.getElementById('soCMND').value;
    let Phone = document.getElementById('phone').value;
    if (check() )
    {
        var tabLines = document.getElementById("form_table1");
        var tabLinesRow = tabLines.insertRow(tabLines.rows.length);
        var col1html = Stt;
        var col2html = Id;
        var col3html = HoTen;
        var col4html = NgaySinh;
        var col5html = QueQuan;
        var col6html = SoCMND;
        var col7html = Phone;
        var col8html = "                <input class=\"submit\" type=\"button\" value = \"Delete\" onclick=\"deleteRow(this) ;\">\n" +
            "                <input class=\"submit\" type=\"button\" value = \"Sửa\" onclick=\"document.getElementById('modal').style.display='block';\">" ;

        var col1 = tabLinesRow.insertCell(0); col1.innerHTML=col1html;
        var col2 = tabLinesRow.insertCell(1); col2.innerHTML=col2html;
        var col3 = tabLinesRow.insertCell(2); col3.innerHTML=col3html;
        var col4 = tabLinesRow.insertCell(3); col4.innerHTML=col4html;
        var col5 = tabLinesRow.insertCell(4); col5.innerHTML=col5html;
        var col6 = tabLinesRow.insertCell(5); col6.innerHTML=col6html;
        var col7 = tabLinesRow.insertCell(6); col7.innerHTML=col7html;
        var col8 = tabLinesRow.insertCell(7); col8.innerHTML=col8html;
    }
}
function resetRow(){
    document.getElementById('stt').value = "";
    document.getElementById('id').value = "";
    document.getElementById('hoTen').value = "";
    document.getElementById('ngaySinh').value = "";
    document.getElementById('queQuan').value = "";
    document.getElementById('soCMND').value = "";
    document.getElementById('phone').value = "";
}

// Sửa
function editRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("stt").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("id").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("hoTen").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("ngaySinh").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("queQuan").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("soCMND").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("phone").value;
}
//   Xóa
function deleteRow(row){
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('form_table1').deleteRow(i);
}