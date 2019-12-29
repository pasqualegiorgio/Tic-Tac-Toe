<?php
  session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Lista prenotazioni</title>
  </head>
  <body>
    <h3>Prenotazioni inserite</h3>
    <?php
      foreach($_SESSION["prenotazioni"] as $evento => $num) {
        echo $evento." posti ".$num."<br/>";
        $tot += $num;
        if ($num > $maxnum) {
          $maxnum = $num;
          $eventomax = $evento;
        }
      }
      echo "<br/><b>Totale persone</b> ".$tot."<br/>";
      echo "<b>Prenotazioni max:</b> ".$eventomax." posti ".$maxnum."<br/>";
    ?>
  </body>
</html>
