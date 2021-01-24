<?php

$d = $_POST['data'];
$f = $_POST['fname'];
// $a = $_POST['appendOrOverwrite'];

/*
if ($a == "append") {
	$a = FILE_APPEND;
} else if ($a == "overwrite") {
	$a = null;
}
*/

$ret = file_put_contents("./".$f, $d/*, $a*/);



?>
