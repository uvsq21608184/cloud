<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
session_start();
try
{
$bdd = new PDO('mysql:host=localhost;dbname=Aban_Ramdan_Bejaia;charset=utf8', 'root','root');

}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}


$requette5=$bdd->query('SELECT count(*) AS nbvoyageur FROM traveller');
$totalvoyageur=$requette5->fetch();
$NOMBRE=$totalvoyageur['nbvoyageur'];
$NOMBRE++; 



$requette2=$bdd->prepare('SELECT Id FROM fly WHERE fly.No=:no');
$requette2->execute(array('no'=>$_POST['nv']));//conter le nombre de persone dans ma table pour l'attribut Per dans pereson
$flyex=$requette2->fetch();

echo $_POST['siege']." ".$_POST['class']." ".$_POST['poids']." ".$flyex['Id']." ".'TR'.$NOMBRE;


?>
</body>
</html>