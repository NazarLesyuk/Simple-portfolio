<?php

// Ñîîáùåíèå
// $name=$_POST['name'];
// $phone=$_POST['phone'];

$message = "test php mail";

// Íà ñëó÷àé åñëè êàêàÿ-òî ñòðîêà ïèñüìà äëèííåå 70 ñèìâîëîâ ìû èñïîëüçóåì wordwrap()

// $message = wordwrap($message, 70);

// Îòïðàâëÿåì

// mail('info@ceh499.ru', 'www.ceh4999.ru', $message);
// mail("info@ceh499.ru", "Çàêàç ñ ñàéòà ".$_SERVER['ceh499.ru']," Èìÿ: ".$name."\nÍîìåð òåëåôîíà: ".$phone);
mail("na3ar1y@rambler.ru", "Çàêàç ñ ñàéòà ".$_SERVER['ceh499.ru']," Èìÿ: ".$name."\nÍîìåð òåëåôîíà: ".$phone);

?>