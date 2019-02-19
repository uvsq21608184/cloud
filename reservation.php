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
if($_POST['choix']=="choix1"){
$ch="N";
}else{
	$ch="H";
}
$req=$bdd->prepare('SELECT id_place ,count(*) AS nbrDispo FROM Parking WHERE Parking.type=:type and Parking.id_place NOT IN(SELECT ReservationParking.Id_place FROM ReservationParking,Parking WHERE Parking.id_place=ReservationParking.Id_place AND ReservationParking.DateReserv=:dte1)');
$req->execute(array('type' =>$ch,'dte1'=>$_POST['date']));
$resultat=$req->fetch();
if($resultat['nbrDispo']>0){
$req1=$bdd->prepare('INSERT INTO ReservationParking(Id_occupant,Id_place,DateReserv) VALUES(:nfgs,:plac,:dte)');
$req1->execute(array('nfgs' => $_SESSION['nfgs'],'plac' =>$resultat['id_place'],'dte'=>$_POST['date']));

header('Refresh:0; url=menuVisiteur.php');
	echo '<script type="text/javascript">window.alert("Resevation faite avec succes");</script>';

}else{
	header('Refresh:0; url=menuVisiteur.php');
	echo '<script type="text/javascript">window.alert("ya plus de place de se type la ");</script>';
}
?>

	
	
