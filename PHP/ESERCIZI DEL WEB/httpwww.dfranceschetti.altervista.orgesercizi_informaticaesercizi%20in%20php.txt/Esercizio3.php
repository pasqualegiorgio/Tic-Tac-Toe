<?php
  $codice = $_POST['codice'];

  if(strlen($codice) != 13) {
    echo "Il codice non è valido. Ridigitare!";
  }
  else {
    echo "$codice";
  }
?>
