<?
$phone=$_POST['phone'];
 mail("smpotolok@ya.ru", "Заказ звонка с сайта ".$_SERVER['HTTP_REFERER'], "Номер телефона: ".$phone); // письмо на свой электронный ящик, измените на свой email
 // mail("na3ar1y@rambler.ru", "Заказ звонка с сайта ".$_SERVER['HTTP_REFERER'], "Номер телефона: ".$phone); // письмо на свой электронный ящик, измените на свой email

 // mail("buahaga@ya.ru", "My Subject", "Line 1\nLine 2\nLine 3");

Header("Refresh: 2; URL=".$_SERVER['HTTP_REFERER']); // спустя 8 секунд человек будет возвращён на предыдущий URL
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
  background: url("images/Спасибо за доверие.png") no-repeat;
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
<script> // нажав на label посетитель вернётся на предыдущую страницу, где заполнял форму
// document.getElementsByTagName('label')[0].onclick = function() {
//   window.location.href="<? print $_SERVER['HTTP_REFERER']; ?>"
// }
</script>