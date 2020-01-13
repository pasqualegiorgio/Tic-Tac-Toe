<!DOCTYPE html>
<html>
  <body>
    <?php

    $Nome = $_POST['Nome'];
    $Ragionesociale = $_POST['Ragionesociale'];
    $Indirizzo = $_POST['Indirizzo'];
    $Partitaiva = $_POST['Partitaiva'];

    echo "Nome: $Nome <br/>";
    echo "Ragione sociale: $Ragionesociale <br/>";
    echo "Indirizzo: $Indirizzo <br/>";
    echo "Partita IVA: $Partitaiva";

    ?>

  </body>
</html>
