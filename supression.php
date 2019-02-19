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
if(isset($_SESSION['dte']) AND isset($_SESSION['pl'])) {
$req2=$bdd->prepare('DELETE FROM ReservationParking WHERE Id_occupant=:id AND DateReserv=:dte AND Id_place=:pl');
$req2->execute(array('id'=>$_SESSION['nfgs'],'dte'=>$_SESSION['dte'],'pl'=>$_SESSION['pl']));
header('Refresh:0; url=menuVisiteur.php');
	echo '<script type="text/javascript">window.alert("Reservation Supprimer ");</script>';
}

?>