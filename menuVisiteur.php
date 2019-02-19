<!DOCTYPE html>
<html>
<head>
<script language="javascript"><!-- 
function confirme() 
{ 
var val=(confirm("Voulez-vous vraiment supprimer la Reservation "))?true:false; 
if(val==true) 
document.form1.submit();//si confirmation, appel de delproprio1.php 
else 
location.reload();//sinon on reaffiche le formulaire 
}</script>

<link rel="stylesheet" href="pageUtilisateur.css" type="text/css">
	<title>Mon Bureau</title>
</head>
<body background="images/billet-avion-pas-cher.jpg">
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
$req1=$bdd->prepare('SELECT No_FGS FROM utilisateur WHERE identifiant=:id AND mot_de_passe=:mdp');
$req=$bdd->prepare('SELECT Last_Name,First_Name FROM person WHERE FGS_No=:fgss');

$req1->execute(array('id' =>$_SESSION['mail'],'mdp'=>$_SESSION['mdp'] ));
$num=$req1->fetch();



$req->execute(array('fgss'=>$num['No_FGS']));
$donnee=$req->fetch();
?>
<header>
Bonjour <?php echo $donnee['First_Name'].' '.$donnee['Last_Name'];
$_SESSION['nfgs']=$num['No_FGS'];
?>

<div id="bouttonDec" style="position: relative;float: right; margin-right: 10px;">
<form method="POST" action="accueil.php">
	<input type="submit" name="Deconexion" value="Deconnexion">
</form>
</div>
<div style="position: relative;float: right;margin-right: 10px;"><a href="Monprofil.php" style="color: white;">Mon profil</a></div>
<div style="position: relative;float: right; margin-right: 10px;"><a href="menuVisiteur.php" style="color: white;">Home</a></div>
</div>

</header>
<div id="passages">
<table class="Passages">
<caption>Mes Passages</caption>

 	<tr>
 	<td style="background-color: #FF6600;">Fly</td>
 	<td style="background-color: #FF6600;">Day</td>
 	<td style="background-color: #FF6600;">Departure</td>
 	<td style="background-color: #FF6600;">Distination</td>
 	<td style="background-color: #FF6600;">Hour</td>
 	<td style="background-color: #FF6600;">Company</td>
 	</tr>
<?php
$reponse = $bdd->prepare('SELECT No,Day,Hour,Distination,arivalfrom,id_Company FROM fly,traveller WHERE traveller.FGS_No=:id1 AND fly.Id=traveller.Id_Fly AND fly.Day<CURRENT_DATE');
$reponse->execute(array('id1'=>$num['No_FGS']));
while ($reponse1=$reponse->fetch()) 
{
?>
<tr>
<td><?php echo $reponse1['No'];?></td>
<td><?php echo $reponse1['Day'];?></td>
<td><?php echo $reponse1['arivalfrom'];?></td>
<td><?php echo $reponse1['Distination'];?></td>
<td><?php echo $reponse1['Hour'];?></td>
<td><?php echo $reponse1['id_Company'];?></td>
</tr>
<?php
}
?>
</table>
</div>
<br>
<div id="passages2">
<table class="Passages">
<caption>Mes prochains vols</caption>

 	<tr>
 	<td style="background-color: #FF6600;">Fly</td>
 	<td style="background-color: #FF6600;">Day</td>
 	<td style="background-color: #FF6600;">Departure</td>
 	<td style="background-color: #FF6600;">Distination</td>
 	<td style="background-color: #FF6600;">Hour</td>
 	<td style="background-color: #FF6600;">Company</td>
 	</tr>
<?php
$reponse2= $bdd->prepare('SELECT No,Day,Hour,Distination,arivalfrom,id_Company FROM fly,traveller WHERE traveller.FGS_No=:id1 AND fly.Id=traveller.Id_Fly AND fly.Day>=CURRENT_DATE');
$reponse2->execute(array('id1'=>$num['No_FGS']));
while ($reponse3=$reponse2->fetch()) 
{
?>
<tr>
<td><?php echo $reponse3['No'];?></td>
<td><?php echo $reponse3['Day'];?></td>
<td><?php echo $reponse3['arivalfrom'];?></td>
<td><?php echo $reponse3['Distination'];?></td>
<td><?php echo $reponse3['Hour'];?></td>
<td><?php echo $reponse3['id_Company'];?></td>
</tr>
<?php
}
?>
</table>
</div>
<?php
session_start();
$req2=$bdd->prepare('SELECT Id_place, DateReserv FROM ReservationParking WHERE Id_occupant=:id AND ReservationParking.DateReserv>=CURRENT_DATE');
$req2->execute(array("id"=>$num['No_FGS']));

if(1){
	echo "<table style='
	width: 400px;
 	color: white;
 	background-color: gray;
 	position:absolute;
 	margin-left: 50px;
	margin-top: 100px;
	opacity: 0.9;
 	'>";
 	echo "<tr>";
	echo "<td colspan='3' style='text-align:center;border:solid 1px;'>".'Mes reservations de parking'."</td>";
	echo "</tr>";

while ($resultat2=$req2->fetch()){
	
	echo "<tr>";
	echo "<td >".$resultat2['Id_place']."</td>";
	echo "<td>".$resultat2['DateReserv']."</td>";
	echo "<td>"."<form method='POST' action='supression.php'>".
	"<input type='submit' onclick='confirme();' value='Annuler'>"."</form>"."</td>";
	$_SESSION['dte']=$resultat2['DateReserv'];
	$_SESSION['pl']=$resultat2['Id_place'];
		echo "</tr>";
	# code...
}
echo "<td colspan='3' "."style='text-align:center;border:solid 1px;'>"."le Prix de la place du parking est de <div style="."'color:red;'>"."50 da"."</div> et tant que vous sortez pas de l aeroport vous avais 24h pour liberer la place ou payer le landemain"."</td>";
	echo "</tr>";
echo "</table>";

}
?>




<div class="Formulaire">
<form method="POST" action="reservation.php">
<fieldset>
<legend>VOULEZ VOUS RESERVER UNE PLACCE DE PARKING ?</legend>
<label>Pour le </label><input type="date" max="2019-03-10" min="2019-02-15" name="date" id="date" required><br>
<label>type :</label><input type="radio" name="choix" value="choix1" required>place normale<br>
<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="radio" name="choix" value="choix2" required="">place pour handicapé<br>
<input type="submit" value="Reserver">
</fieldset>
</form>
</div>

</body>
</html>