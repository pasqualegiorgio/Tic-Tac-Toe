// Creare la tabellina del numero acquisito dal modulo form
<?php

$a = $_POST['a'];
echo "La tabellina del $a:\n";
for ($i = 1; $i <= 10; $i++) {
  echo "$a per $i = ". ($a * $i) . "\n";
}

?>
