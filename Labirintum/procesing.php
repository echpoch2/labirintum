<?php
  $host = 'localhost';  // Хост, у нас все локально
  $user = 'root';    // Имя созданного вами пользователя
  $pass = ''; // Установленный вами пароль пользователю
  $db_name = 'labirintum';   // Имя базы данных
  $link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой

  // Ругаемся, если соединение установить не удалось
  if (!$link) {
    echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
  }


  $sql = mysqli_query($link, 'SELECT * FROM `учителя`');
  while ($row = mysqli_fetch_array($sql)) {
    $data['teachers'][] = $row;
     
  }

      $sql = mysqli_query($link, 'SELECT * FROM `результаты`');
  while ($row = mysqli_fetch_array($sql)) {
    $data['results'][] = $row;
     
  }
        $sql = mysqli_query($link, 'SELECT * FROM `отзывы`');
  while ($row = mysqli_fetch_array($sql)) {
    $data['reviews'][] = $row;
     
  }
          $sql = mysqli_query($link, 'SELECT * FROM `предметы`');
  while ($row = mysqli_fetch_array($sql)) {
    $data['subjects'][] = $row;
     
  }

     header('Content-Type: application/json;');
echo json_encode($data, JSON_PRETTY_PRINT);

?>