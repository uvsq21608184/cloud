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


$req1=$bdd->prepare('SELECT No_FGS,count(*) AS A FROM utilisateur WHERE identifiant=:id');
$req1->execute(array('id' =>$_POST['id']));
$req2=$req1->fetch();
if(($req2['A']==0) AND !(isset($_POST['com'])) ) {
header('Refresh:0; url=menuAdmin.php');
	echo '<script type="text/javascript">window.alert("email eronee ");</script>';

}else{
	if($_POST['choix']=="Administrateur"){
	$req3=$bdd->prepare('UPDATE utilisateur SET type_utilisateur=2 WHERE identifiant=:per');
	$req3->execute(array('per'=>$_POST['id']));
	header('Refresh:0; url=menuAdmin.php');
	echo '<script type="text/javascript">window.alert("Administrateur Ajoutee");</script>';


	}else if(isset($_POST['com'])) {
	$req3=$bdd->prepare('UPDATE utilisateur SET type_utilisateur=1 WHERE identifiant=:per');
	$req3->execute(array('per'=>$_POST['id']));

	$req4=$bdd->prepare('UPDATE Company SET Id_represantant1=:per2 WHERE Name=:per1');
	$req4->execute(array('per1'=>$_POST['com'],'per2'=>$req2['No_FGS']));


	header('Refresh:0; url=menuAdmin.php');
	echo '<script type="text/javascript">window.alert("Represantant ajoutee");</script>';


	}

}
?>