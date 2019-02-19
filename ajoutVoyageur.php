<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="fichier.css" type="text/css">

        <link rel="shortcut icon" href="img/cadenas.ico" />

        <script type="text/javascript" src="js/verif.js"></script>
	<title>Ajout Voyageur</title>
</head>
<body>

<img id="img_insc" src="images/inscrption.jpg"> 
	<div class="Formulaire">
	<form method="POST" action="traitement2.php">
	
		<fieldset>
			<legend>infomrations personnelles du voyageur</legend>
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
			<legend>informations par raport au vol</legend>
			<label>vol :</label><input type="text" value=<?php echo $_POST['NoV'];?> name="nv" id="nv" required><br>
			<label>Siege</label><input type="text" placeholder="ex: S1" name="siege" id="siege" required><br>
			<label>Poids des bagages</label><input type="number" name="poids" id="poids" max="40" required><br>
			<label>Class</label><select name="class" id="class" required>
				<option>E</option>
				<option>A</option>	
			</select><br>
			<label>Billet Payer?</label><select name="paid" id="paid" required>
				<option>Yes</option>
				<option>No</option>	
			</select><br>
			<input type="submit" value="ajouter"></p>
					</fieldset>
			</form> 
			</div>
			

</body>
</html>