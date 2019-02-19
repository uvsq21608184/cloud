<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="fichier.css" type="text/css">

        <link rel="shortcut icon" href="img/cadenas.ico" />

        <script type="text/javascript" src="js/verif.js"></script>
	<title>inscription</title>
</head>
<body>

<img id="img_insc" src="images/inscrption.jpg"> 
	<div class="Formulaire">
	<form method="POST" action="traitement.php">
	
		<fieldset>
			<legend>infomrations personnelles </legend>
			<select name="sexe" id="sexe" required>
				<option>M</option>
				<option>F</option>
			</select>
			<p>
			<label>Nom: </label><input type="text" name="Nom" id="Nom" required></p>
			<p>
			<label>Prenom: </label><input type="text" name="prenom" id="prenom" required></p>
			<p>
			<label>Adresse: </label><input type="text" name="adresse" id="adresse" required></p>

			<label>Numero De Passport: </label><input type="" name="nmpassport" id="nmpassport" required></p>

			</fieldset>
			<fieldset>
			<legend>Coordonnees De Conexion</legend>
			<label>Email: </label><input type="email" name="mail" id="mail" required></p>
			<label>Mot De Passe:</label> <input type="password" name="motdepasseA" id="motdepasseA" onKeyUp="verif(this.value);" required />
		<!-- à chaque touche pressée (onKeyUp), on va tester le mot de passe tapé par l'utilisateur (this.value pour indiquer la valeur du champ actuel) -->
		
		<div id="verif">
		<!--pour le fichier js-->
		</div>
			</p>
			<label>Confirmation Du Mot de Passe:</label> <input type="password" name="motdepasseB" id="motdepasseB" required><br><br>
			<input type="submit" value="Validation"></p>
			</fieldset>
			</form> 
			</div>

</body>
</html>