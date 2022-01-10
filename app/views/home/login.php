
<!-- Login -->
<?php
    if($_POST)
    {
        $user = $_POST['username'];
        $pass = $_POST['password'];
        if ($user == NULL OR $pass == NULL)
        {
            echo '<script language="javascript"> alert ("Username hoặc password không được để trống ")</script>';
            require_once 'index.php';
            die;
        }

        $conn = mysqli_connect('localhost', 'root', '', 'data') or die ('Lỗi kết nối'); 
        // ' or 1=1 #
        // Cách phòng chống lỗ hổng SQL Injection
        $user = mysqli_real_escape_string($conn, $user) ;
       $pass = mysqli_real_escape_string($conn, $pass) ;

        $sql = "select * from member where username='$user' and password = '$pass'  " ;

        $result = mysqli_query($conn, $sql);
        

        if  (mysqli_num_rows($result ) > 0 )
        {
            header ("Location: dashboads.php");
        }
        else{
            echo "<h2 style = 'text-align : center;'>Tên đăng nhập hoặc mật khẩu không chính xác!</h2>";
            require_once 'index.php';
        }
   }
?>