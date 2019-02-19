<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="5;authentification.php" />
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<title>Utilisateur</title>
	<link rel="stylesheet" href="fichier.css" type="text/css">
	<script type="text/javascript" src="date_heure.js"></script>
</head>
<body background="images/hd.png">
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
$req=$bdd->prepare('SELECT Last_Name,First_Name FROM person Where FGS_No=:fgss');
$req->execute(array('fgss'=>$_SESSION['fgs']));
$donnee=$req->fetch();
$req->closeCursor();
?>
<div style="background-color: white; width: 600px;height:150px; ; position: absolute;margin-left: 330px;border-radius: 10px; font-size: 30px; text-align: center;">
<?php echo $donnee['Last_Name'].' '.$donnee['First_Name'];?>
<h3 style="color: red;">Merci Pour votre inscription </h3>
<h6 style="color: white; font-size: 15px;">vous allez etre rediriger ver la page de conexion dans 5 seconde</h6>
</div>
</body>
</html>