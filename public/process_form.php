<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    $to = "keenoo256@gmail.com"; // Замените на ваш email
    $subject = "Новое сообщение с формы";
    $body = "Имя: $name\nТелефон: $phone\nДата: $date\nСообщение: $message";

    // Отправка письма
    if (mail($to, $subject, $body)) {
        echo "Сообщение успешно отправлено.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}