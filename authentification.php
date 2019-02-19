<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="fichier.css" type="text/css">
<link rel="shortcut icon" href="images/picto-formation.ico" />
	<title>Veuillez vous authentifier</title>
</head>
<body>

<img class="img_auth" src="images/AR1.jpg"> 
	<div class="authetification">
	<form method="POST" action="verficationAuthentification.php";>
		
		<h2 id="title_auth">Acceder a votre espace personnelle </h2>
		identifiant:<input type="email" name="mail" id="mail" placeholder="ketam.djalal@gmail.com" ><br>
		mot de passe: <input type="password" name="motdepasse" id="motdepasse"><br>	
		<input type="submit" value="Conexion" />
		<a href="inscription.php">inscription</a>
		

	</form>
	</div>
<?php include("menu.php");?>
	
</body>
</html>