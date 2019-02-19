<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="pageUtilisateur.css" type="text/css">
	<title>Details</title>
</head>
<body background="images/hacker.jpeg">
<header style="width: 100%;height: 60px; color: white; background-color:black;text-align: center; ">
<h3>vol
<?php 
echo $_POST['numero'];
?></h3>
<div id="bouttonDec" style="position: relative;float: right; margin-right: 10px;">
<form method="POST" action="accueil.php">
	<input type="submit" name="Deconexion" value="Deconexion">
</form>
</div>
<div style="position: relative;float: right;margin-right: 10px;"><a href="Monprofil.php" style="color: white;">Mon profil</a></div>
<div style="position: relative;float: right; margin-right: 10px;"><a href="menuCompany.php" style="color: white;">Home</a></div>
</header>
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
$req=$bdd->prepare('SELECT count(*) AS exist FROM fly WHERE fly.No=:id');
$req->execute(array('id'=>$_POST['numero']));
$nbr=$req->fetch();
if($nbr['exist']==1){
?>
<div style="display: inline;">
<table class="Passages23" style="position: relative;float: left;">
<caption class="cap">Pilots du vol:</caption>

 	<tr>
	<td style="background-color: #FF6600;">License</td>
 	<td style="background-color: #FF6600;">flying hours</td>
 	<td style="background-color: #FF6600;">FGS Number</td>
 	<td style="background-color: #FF6600;">ID</td>
 	</tr>
<?php	
$req1=$bdd->prepare('SELECT pilot.License_No,pilot.Flying_hours,pilot.FGS_No,pilot.Id FROM pilot,plane,fly WHERE  pilot.Id_Plane=plane.Id AND plane.Id=fly.Id_Plane AND fly.No=:id1');
$req1->execute(array('id1'=>$_POST['numero']));
while($nbr1=$req1->fetch()){
?>
<tr>
<td><?php echo $nbr1['License_No'];?></td>
<td><?php echo $nbr1['Flying_hours'];?></td>
<td><?php echo $nbr1['FGS_No'];?></td>
<td><?php echo $nbr1['Id'];?></td>
</tr>
<?php
}

?>
</table>

<table class="Passages23" style="position: relative;float: right;">
<caption class="cap">steward:</caption>

 	<tr>
	<td style="background-color: #FF6600;">Class</td>
 	<td style="background-color: #FF6600;">FGS Number</td>
 	<td style="background-color: #FF6600;">ID</td>
 	</tr>
<?php	
$req2=$bdd->prepare('SELECT steward.Class,steward.FGS_No,steward.Id FROM steward,plane,fly WHERE  steward.Id_Plane=plane.Id AND plane.Id=fly.Id_Plane AND fly.No=:id1');
$req2->execute(array('id1'=>$_POST['numero']));
while($nbr2=$req2->fetch()){
?>
<tr>
<td><?php echo $nbr2['Class'];?></td>
<td><?php echo $nbr2['FGS_No'];?></td>
<td><?php echo $nbr2['Id'];?></td>
</tr>
<?php
}
?>
</table>
<table class="Passages23" style="position: relative;float: left;margin-top: 30px;width: 700px;">
<caption class="cap">Piste du vol:</caption>

 	<tr>
	<td style="background-color: #FF6600;">No</td>
 	<td style="background-color: #FF6600;">Length</td>
 	<td style="background-color: #FF6600;">Wind_force</td>
 	<td style="background-color: #FF6600;">ID</td>
 	</tr>
<?php	
$req5=$bdd->prepare('SELECT track.No,track.Length,track.Wind_force,track.Id FROM track,plane,fly WHERE  plane.Id_Track=track.Id AND plane.Id=fly.Id_Plane AND fly.No=:id1');
$req5->execute(array('id1'=>$_POST['numero']));
while($nbr5=$req5->fetch()){
?>
<tr>
<td><?php echo $nbr5['No'];?></td>
<td><?php echo $nbr5['Length'];?></td>
<td><?php echo $nbr5['Wind_force'];?></td>
<td><?php echo $nbr5['Id'];?></td>
</tr>
<?php
}

?>
</table>
<div style="position: relative;margin-top: 200px; width: 450px;margin-left: 300px; background-color: #008080;text-align: center;">
<form method='POST' action='afficherPerson.php'>
	<fieldset>
	<legend>details d'une personne</legend>
	FGS_NO:<input type="text" name="FGS"></fieldset>
	<input type='submit' onclick='confirme();' value='Voir'></form>
	
</div>
</div>

<div style=" display: inline; position: relative;">
<table class="voyageur2" style="position: relative;float: left; margin-top: 50px;">
<caption class="cap">Voyageurs:</caption>

 	<tr>
	<td style="background-color: #FF6600;">ID</td>
	<td style="background-color: #FF6600;">Siege</td>
 	<td style="background-color: #FF6600;">Poids des bagages</td>
 	<td style="background-color: #FF6600;">Payer</td>
 	<td style="background-color: #FF6600;">FGS_No</td>
 	</tr>
<?php	
$req4=$bdd->prepare('SELECT traveller.Id,traveller.Seat,traveller.Luggage_Wight,traveller.Paid,traveller.FGS_No FROM traveller,fly WHERE  traveller.Id_Fly=fly.Id AND fly.No=:id1');
$req4->execute(array('id1'=>$_POST['numero']));
while($nbr4=$req4->fetch()){
?>
<tr>
<td><?php echo $nbr4['Id'];?></td>
<td><?php echo $nbr4['Seat'];?></td>
<td><?php echo $nbr4['Luggage_Wight'];?></td>
<td><?php echo $nbr4['Paid'];?></td>
<td><?php echo $nbr4['FGS_No'];?></td>
		
</tr>
<?php
}
?>
</table>

<table class="Passages23" style="position: relative;float: right;margin-top: 50px;">
<caption class="cap">travailleurs:</caption>

 	<tr>
	<td style="background-color: #FF6600;">Account Number</td>
	<td style="background-color: #FF6600;">Schedule</td>
 	<td style="background-color: #FF6600;">Function</td>
 	<td style="background-color: #FF6600;">Salary</td>
 	<td style="background-color: #FF6600;">FGS_No</td>
 	<td style="background-color: #FF6600;">ID</td>
 	</tr>
<?php	
$req3=$bdd->prepare('SELECT worker.Account_No,worker.Schedule,worker.Function,worker.Salary,worker.FGS_No,worker.Id FROM worker,fly WHERE  worker.Id_Fly=fly.Id AND fly.No=:id1');
$req3->execute(array('id1'=>$_POST['numero']));
while($nbr3=$req3->fetch()){
?>
<tr>
<td><?php echo $nbr3['Account_No'];?></td>
<td><?php echo $nbr3['Schedule'];?></td>
<td><?php echo $nbr3['Function'];?></td>
<td><?php echo $nbr3['Salary'];?></td>
<td><?php echo $nbr3['FGS_No'];?></td>
<td><?php echo $nbr3['Id'];?></td>
		
</tr>
<?php
}
?>
</table>
</div>


<?php
}
?>
</body>
</html>
</header>
