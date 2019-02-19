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
if(isset($_SESSION['ident'])) {
$req2=$bdd->prepare('DELETE FROM utilisateur WHERE identifiant=:id');
$req2->execute(array('id'=>$_SESSION['ident']));
header('Refresh:0; url=menuAdmin.php');
	echo '<script type="text/javascript">window.alert("utilisateur Supprimer ");</script>';
}