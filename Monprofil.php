<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="pageUtilisateur.css" type="text/css">

	<title>Monprofil</title>
</head>
<body background="images/abcd.jpg">

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
$req1=$bdd->prepare('SELECT No_FGS,type_utilisateur FROM utilisateur WHERE identifiant=:id AND mot_de_passe=:mdp');
$req=$bdd->prepare('SELECT Last_Name,First_Name FROM person WHERE FGS_No=:fgss');

$req1->execute(array('id' =>$_SESSION['mail'],'mdp'=>$_SESSION['mdp'] ));
$num=$req1->fetch();



$req->execute(array('fgss'=>$num['No_FGS']));
$donnee=$req->fetch();
?>
<header>

<?php echo $donnee['First_Name'].' '.$donnee['Last_Name'];
$_SESSION['nfgs']=$num['No_FGS'];
?>

<div id="bouttonDec" style="position: relative;float: right; margin-right: 10px;">
<form method="POST" action="accueil.php">
	<input type="submit" name="Deconexion" value="Deconexion">
</form>
</div>
<?php 
if($num['type_utilisateur']==0)
	{
		?>
<div style="position: relative;float: right; margin-right: 10px;"><a href="menuVisiteur.php" style="color: white;">Home</a></div>

<?php 
}else if($num['type_utilisateur']==1){
?>
<div style="position: relative;float: right; margin-right: 10px;"><a href="menuCompany.php" style="color: white;">Home</a></div>
<?php 
}else{ ?>

<div style="position: relative;float: right; margin-right: 10px;"><a href="menuAdmin.php" style="color: white;">Home</a></div>
<?php 
} 
?>

</header>
<div style="width: 600px; text-align: center; margin-left: 400px;margin-top: 150px;">
<?php
if ( isset($_SESSION['mail']) )
					{
						?>
							<h2>Profil</h2>
							<h3>Email : <?php echo $_SESSION['mail']; ?> </h3>
							<!-- Affichage des favoris -->
							<br/>

							
<?php

							//Si l'utilisateur a fait une demande de modification du mot de passe, on le met à jour si tout est bon
							if ( isset( $_POST['nouvPass1']) )
							{
								$req5=$bdd->prepare('SELECT * FROM utilisateur WHERE identifiant=:email AND mot_de_passe=:pass');
								$req5->execute( array('email' =>$_SESSION['mail'], 'pass' =>$_POST['ancienPass'] ) );
								if ($req5->fetch() != NULL)
								{
									$req6= $bdd->prepare('UPDATE utilisateur SET mot_de_passe=:nvmdp WHERE identifiant=:email');
									$req6->execute(array(
										'nvmdp'=>$_POST['nouvPass1'],
										'email'=>$_SESSION['mail'] ));
									?>
										<h3 style="color: red;">Mot de passe modifié !</h3>
									<?php
								}
								else
								{
									?>
										<h3 style="color: red;">Erreur modification mot de passe !</h3>
									<?php
								}
								$req5->closeCursor();
							}
							?>

							<!-- Formulaire modification mot de passe -->
							<div style="color: white; background-color: gray;opacity: 0.7">
							<form method="post" action="Monprofil.php">
								<label for="ancienPass">Ancien mot de passe: </label> 
									<input type="password" name="ancienPass" placeholder="Ancien mot de passe..." id="ancienPass" required/>
									<br />
									<br />
								<label for="nouvPass1">Nouveau mot de passe: </label> 
									<input type="password" name="nouvPass1" placeholder="Nouveau mot de passe..." id="nouvPass1"  required onchange="form.nouvPass2.pattern = this.value;"/>
									<br />
									<br />
								<label for="nouvPass2">Retapez le mot de passe: </label> 
									<input type="password" name="nouvPass2" placeholder="Retapez le mot de passe..." id="nouvPass2"  required/>
									<br />
									<br />
								<input type="submit" value="Modifier le mot de passe"/>
							</form>
							</div>
							<br/>
							<br/>

<?php 
}
?>
</div>
			
</body>
</html>

