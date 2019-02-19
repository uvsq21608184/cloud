<!DOCTYPE html>
<html><head>
<link rel="stylesheet" href="pageUtilisateur.css" type="text/css">
	<title>GeStion du site</title>
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
//Pour afficher son nom prenom dans le header 
$req1=$bdd->prepare('SELECT No_FGS FROM utilisateur WHERE identifiant=:id AND mot_de_passe=:mdp');
$req=$bdd->prepare('SELECT Last_Name,First_Name FROM person WHERE FGS_No=:fgss');

$req1->execute(array('id' =>$_SESSION['mail'],'mdp'=>$_SESSION['mdp'] ));
$num=$req1->fetch();



$req->execute(array('fgss'=>$num['No_FGS']));
$donnee=$req->fetch();
?>
<header>
ADMINISTRATEUR:  <?php echo $donnee['First_Name'].' '.$donnee['Last_Name'];
$_SESSION['nfgs']=$num['No_FGS'];
?>

<div id="bouttonDec" style="position: relative;float: right; margin-right: 10px;">
<form method="POST" action="accueil.php">
	<input type="submit" name="Deconexion" value="Deconexion">
</form>
</div>
<div style="position: relative;float: right;margin-right: 10px;"><a href="Monprofil.php" style="color: white;">Mon profil</a></div>
<div style="position: relative;float: right; margin-right: 10px;"><a href="menuAdmin.php" style="color: white;">Home</a></div>
</header>

<div id="Passages" style="position: relative;float: left;width: 50%;">
<table class="Passages" >
<caption>Voyageurs Membre</caption>

 	<tr>
 	<td style="background-color: #FF6600;">Noms</td>
 	<td style="background-color: #FF6600;">Prenoms</td>
 	<td style="background-color: #FF6600;">Email</td>
 	<td style="background-color: #FF6600;">mot de passe</td>
 	<td style="background-color: #FF6600;">NO_FGS</td>
 	</tr>
<?php
$reponse=$bdd->query('SELECT * FROM nomutilsateur ');
while ($reponse1=$reponse->fetch()) 
{
?>
<tr>
<td><?php echo $reponse1['Last_Name'];?></td>
<td><?php echo $reponse1['First_Name'];?></td>
<td><?php echo $reponse1['identifiant'];?></td>
<td><?php echo $reponse1['mot_de_passe'];?></td>
<td><?php echo $reponse1['FGS_No'];?></td>
</tr>
<?php
}
?>
</table>
</div>


<div id="Passages" style="position: relative;float: right; width: 50%;">
<table class="Passages">
<caption>Representant companies</caption>

 	<tr>
 	<td style="background-color: #FF6600;">Noms</td>
 	<td style="background-color: #FF6600;">Prenoms</td>
 	<td style="background-color: #FF6600;">Email</td>
 	<td style="background-color: #FF6600;">mot de passe</td>
 	<td style="background-color: #FF6600;">COMPANIE</td>
 	</tr>
<?php
$reponse2=$bdd->query('SELECT * FROM comrepresentant ');
while ($reponse3=$reponse2->fetch()) 
{
?>
<tr>
<td><?php echo $reponse3['Last_Name'];?></td>
<td><?php echo $reponse3['First_Name'];?></td>
<td><?php echo $reponse3['identifiant'];?></td>
<td><?php echo $reponse3['mot_de_passe'];?></td>
<td><?php echo $reponse3['Name'];?></td>
<td><form method="POST" action="sup.php"><input type="submit" value="supprimer">
<?php $_SESSION['Representant']=$reponse3['identifiant'];
?>

</form></td>
</tr>
<?php
}
?>
</table>
</div>
<br>
<br>
<div id="Passages" style="position: relative;margin-left: 200px;margin-top: 50px; width: 50%;">
<table class="Passages" style="width: 900px;">
<caption>Utilisateur</caption>

 	<tr>
 	<td style="background-color: #FF6600;">identifiant</td>
 	<td style="background-color: #FF6600;">mot de passe</td>
 	<td style="background-color: #FF6600;">type</td>
 	<td style="background-color: #FF6600;">No FGS</td>
 	</tr>
<?php
$rq4=$bdd->query('SELECT * FROM utilisateur ');
	# code...');
while ($reponse5=$rq4->fetch()) 
{
	if(($reponse5['type_utilisateur']==1) || ($reponse5['type_utilisateur']==0) ) {
		?>
	
<tr>
<td><?php echo $reponse5['identifiant'];?></td>
<td><?php echo $reponse5['mot_de_passe'];?></td>
<td><?php echo $reponse5['type_utilisateur'];?></td>
<td><?php echo $reponse5['No_FGS'];?></td>
<?php $_SESSION['ident']=$reponse5['identifiant'];
?>
<td><form method="POST" action="suppr.php"><input type="submit" value="supprimer">


</form> </td>
</tr>
<?php
}
}
?>
</table>
</div>
<div style="margin-left: 400px;margin-top: 80px;text-align: center; width: 400px; background-color: gray;opacity: 0.7;">

<form action="droits.php" method="POST">
<fieldset>
<legend>Donner les droits</legend>
<h4>Email:</h4><input type="email" name="id" required><br>
<h4>Companie:</h4><input type="com" name="com"><br>
<h4>le rendre</h4>
<select name="choix" required>
	<option va>Administrateur</option>
	<option>Representant</option>
</select>

</fieldset>
<input type="submit" value="valider" name="id1">
</form>
</div>



</body>
</html>