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
    let Stt = document.getElementById('Stt').value;
    let Thuoctinh = document.getElementById('Thuoctinh').value;
    let ID = document.getElementById('ID').value;
    let Loaithuoctinh = document.getElementById('Loaithuoctinh').value;
    let Loaigiatri = document.getElementById('Loaigiatri').value;
    let Giatrimacdinh = document.getElementById('Giatrimacdinh').value;
    let Giatrihientai = document.getElementById('Giatrihientai').value;
    let Capnhapgiacuoi = document.getElementById('Capnhaplancuoi').value;
    if (check() )
    {
        var tabLines = document.getElementById("table");
        var tabLinesRow = tabLines.insertRow(tabLines.rows.length);
        var col1html = Stt;
        var col2html = Thuoctinh;
        var col3html = ID;
        var col4html = Loaithuoctinh;
        var col5html = Loaigiatri;
        var col6html = Giatrimacdinh;
        var col7html = Giatrihientai;
        var col8html = Capnhaplancuoi;
        var col9html = "                <input class=\"submit\" type=\"button\" value = \"Xóa\" onclick=\"XoaRow(this) ;\">\n" +
            "                <input class=\"submit\" type=\"button\" value = \"Sửa\" onclick=\"document.getElementById('modal').style.display='block';\">" ;

        var col1 = tabLinesRow.insertCell(0); col1.innerHTML=col1html;
        var col2 = tabLinesRow.insertCell(1); col2.innerHTML=col2html;
        var col3 = tabLinesRow.insertCell(2); col3.innerHTML=col3html;
        var col4 = tabLinesRow.insertCell(3); col4.innerHTML=col4html;
        var col5 = tabLinesRow.insertCell(4); col5.innerHTML=col5html;
        var col6 = tabLinesRow.insertCell(5); col6.innerHTML=col6html;
        var col7 = tabLinesRow.insertCell(6); col7.innerHTML=col7html;
        var col8 = tabLinesRow.insertCell(7); col8.innerHTML=col8html;
        var col9 = tabLinesRow.insertCell(8); col9.innerHTML=col9html;
    }
}
function resetRow(){
    document.getElementById('Stt').value = "";
    document.getElementById('Thuoctinh').value = "";
    document.getElementById('ID').value = "";
    document.getElementById('Loaithuoctinh').value = "";
    document.getElementById('Loaigiatri').value = "";
    document.getElementById('Giatrimacdinh').value = "";
    document.getElementById('Giatrijhientai').value = "";
    document.getElementById('Capnhaplancuoi').value = "";
}

// Sửa
function editRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("Stt").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("Thucotinh").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("ID").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("Loaithuoctinh").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("Loaigiatri").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("Giatrimacdinh").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("Giatrihientai").value;
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("Capnhaplancuoi").value;
}
//  Xóa
function XoaRow(row) {
        var i=row.parentNode.parentNode.rowIndex;
        document.getElementById('table1').deleteRow(i);

}

function addTable() {
    var index = $('#sttAdd').val();
    console.log(index);
    var rowAppend = '<tr style="border-bottom: 1px solid black;">' +
        '<td>' + index + '</td>' +
        '<td>'+$("#thuocTinh").val()+'</td>' +
        '<td>ID1</td>' +
        '<td>Loại thuộc tính1</td>' +
        '<td>Loại giá trị1</td>' +
        '<td>Giá trị mặc định1</td>' +
        '<td>Giá trị hiện tại1</td>' +
        '<td>Cập nhập lần cuối1 :</td>' +
        '<td>' +
        '<input class="submit" type="button" value = "Xóa" onclick="XoaRow(this) ;">' +
        '<input class="submit" type="button" value = "Sửa" data-toggle="modal" data-target="#exampleModal">' +
        '</td>' +
        '</tr>';

    $("#table1").find("tbody").append(rowAppend);
}

function setEditTr(index, tt, id, ltt) {
    console.log(index, tt, id, ltt);
    $("#sttEdit").val(index);
}

function editTable() {
    var index = $('#sttAdd').val();
    console.log(index);
    var rowAppend =
        '<td>' + index + '</td>' +
        '<td>'+$("#thuocTinh").val()+'</td>' +
        '<td>ID1</td>' +
        '<td>Loại thuộc tính1</td>' +
        '<td>Loại giá trị1</td>' +
        '<td>Giá trị mặc định1</td>' +
        '<td>Giá trị hiện tại1</td>' +
        '<td>Cập nhập lần cuối1 :</td>' +
        '<td>' +
        '<input class="submit" type="button" value = "Xóa" onclick="XoaRow(this) ;">' +
        '<input class="submit" type="button" value = "Sửa" data-toggle="modal" data-target="#exampleModal">' +
        '</td>';

    $("#tr_3").html(rowAppend);
}