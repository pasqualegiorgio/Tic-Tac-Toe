// Creare la tabellina del due senza modulo form usando il ciclo while
<?php
$a = 2;
$b = 0;
$i = 1;
echo "La tabellina del $a " . "\n";
while ($b < 20) {
  $b = $a * $i;
  echo "$a per $i = $b\n";
  $i++;
}
?>
