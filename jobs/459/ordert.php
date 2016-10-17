<?
$name=$_POST['name'];
$phone=$_POST['phone'];
 // mail("info@ceh499.ru", "Заказ с сайта ".$_SERVER['HTTP_REFERER']," Имя: ".$name."\nНомер телефона: ".$phone); // письмо на свой электронный ящик, измените на свой email
 mail("info@ceh495.ru", "Заказ с сайта ".$_SERVER['HTTP_REFERER']," Имя: ".$name."\nНомер телефона: ".$phone); // письмо на свой электронный ящик, измените на свой email
 // mail("Sss53@yandex.ru", "Заказ с сайта ".$_SERVER['HTTP_REFERER']," Имя: ".$name."\nНомер телефона: ".$phone); // письмо на свой электронный ящик, измените на свой email

Header("Refresh: 2; URL=".$_SERVER['HTTP_REFERER']); // спустя 8 секунд человек будет возвращён на предыдущий URL
exit;
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<title>Данные успешно отправлены!</title>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<meta name="robots" content="noindex"/>
<style>
body{
  background: #ececec;
}
#wrapper {
  min-width: 600px;
  min-height: 500px;
  height: 100%;
    margin: 0 auto;
    background: #ececec;
  /*outline: 2px solid yellow;*/
}
#container {
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  /*outline: 1px solid red;*/
}
.notification {
    width: 555px;
    height: 350px;
  margin: 0 auto;
  /*outline: 1px solid blue;*/
  background: url("images/spasibo.png") no-repeat;
  padding: 25px 0 0 0;
}
.notification label {
  margin-left: 480px;
}
.notification h1 {
  font: 23px/23px "Tahoma",sans-serif;
  text-align: center;
}
.notification img {
    width: 33%;
    height: 50%;
    border-radius: 50%;
    margin-left: 180px;

}

</style>
<div id="wrapper">
  <div id="container">
    <div class="notification">

    </div>
  </div>
