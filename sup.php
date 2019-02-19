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
if(isset($_SESSION['Representant'])) {
	$req1=$bdd->prepare('SELECT No_FGS FROM utilisateur WHERE identifiant=:id1');
	$req1->execute(array('id1'=>$_SESSION['Representant']));
	$req=$req1->fetch();

	$req3=$bdd->prepare('UPDATE Company SET Id_represantant1=NUll WHERE Id_represantant1=:per');
	$req3->execute(array('per'=>$req['No_FGS']));
	
	header('Refresh:0; url=menuAdmin.php');
	echo '<script type="text/javascript">window.alert("Representant Supprimer ");</script>';

}else if(isset($_SESSION['identifiant'])){
$req2=$bdd->prepare('DELETE FROM utilisateur WHERE identifiant=:id ');
$req2->execute(array('id'=>$_SESSION['identifiant']));
	header('Refresh:0; url=menuAdmin.php');
	echo '<script type="text/javascript">window.alert("utilisateur Supprimer");</script>';
}
?>