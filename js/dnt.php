<?php
header("Content-type: application/x-javascript");
header("Expires: " . date("D, j M Y", strtotime("tomorrow")) . " 02:00:00 GMT");

$DoNotTrackHeader = "DNT";
$DoNotTrackValue = "1";

$phpHeader = "HTTP_" . strtoupper(str_replace("-", "_", $DoNotTrackHeader));

if((array_key_exists($phpHeader, $_SERVER)) and ($_SERVER[$phpHeader] == $DoNotTrackValue))
{
        echo ("var dnt = true;"); // Do Not Track is enabled
}

else
{
        echo ("var dnt = false;"); // Do Not Track is not enabled
}
?>