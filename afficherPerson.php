<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="pageUtilisateur.css" type="text/css">
	<title>Details de la Personne</title>
</head>
<body>
<header>

<div id="bouttonDec" style="position: relative;float: right; margin-right: 10px;">
<form method="POST" action="accueil.php">
	<input type="submit" name="Deconexion" value="Deconexion">
</form>
</div>
<div style="position: relative;float: right;margin-right: 10px;"><a href="Monprofil.php" style="color: white;">Mon profil</a></div>
<div style="position: relative;float: right; margin-right: 10px;"><a href="menuCompany.php" style="color: white;">Home</a></div>
</header>

<?php
try
{
$bdd = new PDO('mysql:host=localhost;dbname=Aban_Ramdan_Bejaia;charset=utf8', 'root','root');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
?>
<table class="Passages2" style="position: absolute;margin-top: 200px;margin-left: 300px; width: 700px;">
<caption style="font-size: 25px;"><?php echo $_POST['FGS'];?>:</caption>

 	<tr>
	<td style="background-color: #FF6600;">First_Name</td>
 	<td style="background-color: #FF6600;">Last_Name</td>
 	<td style="background-color: #FF6600;">SEX</td>
 	<td style="background-color: #FF6600;">ADDRESS</td>
 	<td style="background-color: #FF6600;">Passport Number</td>
	</tr>
<?php	
$req1=$bdd->prepare('SELECT * FROM person WHERE FGS_No=:id1');
$req1->execute(array('id1'=>$_POST['FGS']));
while($nbr1=$req1->fetch()){
?>
<tr>
<td><?php echo $nbr1['First_Name'];?></td>
<td><?php echo $nbr1['Last_Name'];?></td>
<td><?php echo $nbr1['Sex'];?></td>
<td><?php echo $nbr1['Address'];?></td>
<td><?php echo $nbr1['Passport_No'];?></td>
</tr>
<?php
}
?>
</table>

</body>
</html>