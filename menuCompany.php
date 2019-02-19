<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="pageUtilisateur.css" type="text/css">
	<title>Gerer les vols</title>
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
$req=$bdd->prepare('SELECT Name,Id FROM Company WHERE Id_represantant1=:fgss');

$req1->execute(array('id' =>$_SESSION['mail'],'mdp'=>$_SESSION['mdp'] ));
$num=$req1->fetch();



$req->execute(array('fgss'=>$num['No_FGS']));
$donnee=$req->fetch();
?>
<header>

<?php echo $donnee['Name'];
$_SESSION['nfgs']=$donnee['Id'];
?>
<div id="bouttonDec" style="position: relative;float: right; margin-right: 10px;">
<form method="POST" action="accueil.php">
	<input type="submit" name="Deconexion" value="Deconexion">
</form>
</div>
<div style="position: relative;float: right;margin-right: 10px;"><a href="Monprofil.php" style="color: white;">Mon profil</a></div>
<div style="position: relative;float: right; margin-right: 10px;"><a href="menuCompany.php" style="color: white;">Home</a></div>
</header>

<aside>
<h4>Details du vol</h4>
	<form method="POST" action="details.php">
	<label>numero du vol :</label><input type="text" name="numero" id="numero" required><br>
	<input type="submit" value="Rechercher">
	</form>
</aside>

<div id="VolsP">
<table class="Passages2">
<caption>Nos Vols passer</caption>

 	<tr>
 	<td style="background-color: #FF6600;">Fly</td>
 	<td style="background-color: #FF6600;">Day</td>
 	<td style="background-color: #FF6600;">Departure</td>
 	<td style="background-color: #FF6600;">Distination</td>
 	<td style="background-color: #FF6600;">avion</td>
 	<td style="background-color: #FF6600;">Piste</td>
 	<td style="background-color: #FF6600;">Hour</td>
 	</tr>
<?php
$reponse = $bdd->prepare('SELECT No,Day,Hour,Distination,arivalfrom,Id_Plane,Id_Track FROM fly,plane WHERE fly.Id_Company=:id1  AND fly.Day<CURRENT_DATE AND fly.Id_Plane=plane.Id');
$reponse->execute(array('id1'=>$donnee['Id']));
while ($reponse1=$reponse->fetch()) 
{
?>
<tr>
<td><?php echo $reponse1['No'];?></td>
<td><?php echo $reponse1['Day'];?></td>
<td><?php echo $reponse1['arivalfrom'];?></td>
<td><?php echo $reponse1['Distination'];?></td>
<td><?php echo $reponse1['Id_Plane'];?></td>
<td><?php echo $reponse1['Id_Track'];?></td>
<td><?php echo $reponse1['Hour'];?></td>
</tr>
<?php
}
?>
</table>
</div>
<br>
<div id="volsP2">
<table class="Passages2">
<caption>Nos prochains vols</caption>

 	<tr>
	<td style="background-color: #FF6600;">Fly</td>
 	<td style="background-color: #FF6600;">Day</td>
 	<td style="background-color: #FF6600;">Departure</td>
 	<td style="background-color: #FF6600;">Distination</td>
 	<td style="background-color: #FF6600;">avion</td>
 	<td style="background-color: #FF6600;">Piste</td>
 	<td style="background-color: #FF6600;">Hour</td>
 	</tr>
<?php
$reponse2= $bdd->prepare('SELECT No,Day,Hour,Distination,arivalfrom,Id_Plane,Id_Track FROM fly,plane WHERE fly.Id_Company=:id1  AND fly.Day>=CURRENT_DATE AND fly.Id_Plane=plane.Id');
$reponse2->execute(array('id1'=>$donnee['Id']));
while ($reponse3=$reponse2->fetch()) 
{
?>
<tr>
<td><?php echo $reponse3['No'];?></td>
<td><?php echo $reponse3['Day'];?></td>
<td><?php echo $reponse3['arivalfrom'];?></td>
<td><?php echo $reponse3['Distination'];?></td>
<td><?php echo $reponse3['Id_Plane'];?></td>
<td><?php echo $reponse3['Id_Track'];?></td>
<td><?php echo $reponse3['Hour'];?></td>
</tr>
<?php
}
?>
</table>
</div>


<div id="ajout">
<form method="POST" action="traitement2.php">
<fieldset>
<legend>Ajouter un vol</legend>
	Numero:<input type="text" name="No" id="No"  required>
	le:<input type="date" name="dte" id="dte" required>
	a:<input type="time" name="time" id="time" required>
	De:<input type="text" name="A" id="A" required>
	vers:<input type="text" name="B" id="B" required>
	capicity:<input type="number" name="nmbr" id="nmbr" required>
	Boarding Hour<input type="time" name="time2" id="time2" required><br>
	<input type="submit" value="ajouter">

</fieldset>
</form>
</div>



</form>
<div id="ajoutvoyageur">
<form method="POST" action="ajoutVoyageur.php">
<fieldset>
<legend>Ajouter un Voyageur</legend>
	Numero de vol:<input type="text" name="NoV" id="NoV"  required>
	<input type="submit" value="ajouter">

</fieldset>
</form>
</div>

</body>
</html>