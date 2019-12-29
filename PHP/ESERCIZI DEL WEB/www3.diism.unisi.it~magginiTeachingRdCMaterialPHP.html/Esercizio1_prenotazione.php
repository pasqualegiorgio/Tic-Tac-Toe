<?php
  session_start();
  $_SESSION["prenotazioni"][$_REQUEST["evento"]] += $_REQUEST["num"];
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Evento prenotato</title>
  </head>
  <body>
    <?php
      echo "Inserito: ".$_REQUEST["evento"]." posti ".$_REQUEST["num"];
      echo " totale = ".$_SESSION["prenotazioni"][$_request["evento"]]."<br/>";
    ?>

    <a href="Esercizio1.html">Nuova prenotazione</a><br/>
    <a href="Esercizio1_listaprenotazioni.php">Lista prenotazioni</a>
  </body>
</html>
