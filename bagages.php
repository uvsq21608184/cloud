<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<title>Preparer vos bagages</title>
	<link rel="shortcut icon" href="images/airport_256.ico" />
	<link rel="stylesheet" href="fichier.css" type="text/css">
	<script type="text/javascript" src="js/date_heure.js"></script>
</head>
<body>
<header class="Header-de-base">     
      <h1>Aéroport soummam Abane Ramdane <em>Béjaïa</em></h1>
        <a href="https://www.google.fr/maps/place/Aéroport+de+Bejaia+%2F+Soummam+-+Abane+Ramdane+(BJA)/@36.7153777,5.0690999,17z/data=!3m1!4b1!4m5!3m4!1s0x12f2cd28c67df499:0x3fcda3731935960b!8m2!3d36.7153777!4d5.0712886"><img id="logo-localistation" src="images/google-maps-vector-720x340.png"></a>
        <a href="authentification.php"><img id="logo-authentification" src="images/Authentification-big.png"></a>
        <img id="log-algerie" src="images/fichier.png" width="5%" alt="log drapeau algerie" id="log-algerie">

</header>
<div style="position: absolute;margin-top: 45px;">
<img id="bagagesfond" src="images/bagagesprepa.jpg" style="height: 200px; width: 100%;">

<img src="">
</div>


<div id="barre_gauche" style="margin-top: 210px;">
<div id="case1" style="height: 170px;">
<a href="Accueil.php"><div id="Accueil">Accueil</div></a>
<table>
	<tr class="a2"><td class="a2"><a href="authentification.php"><img id="avion" src="images/avion-alsace.png"></a></td><td><a href="authentification.php">Vols</a></td></tr>
	<tr class="a2"><td class="a2"><a href="acces.php"><img id="acces" src="images/acces.jpg"></a></td> <td><a href="acces.php">Accès à l'aéroport </a></td> </tr>
</table>

</div>
<div id=case2>
	<div class="service">
		<table>
			<tr class="a1"><td class="a1"><a href="authentification.php"><img id="parking" src="images/parking.jpg"></a></td><td><a href="authentification.php"> Parking </a></td>
			<td style="background-color: black; color: red; text-align: center; border: 1px solid white; font-size: 25px;">
			<?php 
		try{
			$bdd= new PDO('mysql:host=localhost;dbname=Aban_Ramdan_Bejaia;charset=utf8', 'root', 'root');
		}
		catch(Exception $e){
	  		  die('Erreur : '.$e->getMessage());
	    }
		   $requettes = $bdd->query('SELECT count(*) as placedispo FROM Parking WHERE Parking.id_place NOT IN(SELECT Id_place FROM ReservationParking  WHERE DateReserv=CURRENT_DATE)');
		    $place=$requettes->fetch();
		   echo $place['placedispo'];
		    ?>
		    	
		    </td>
			</tr>
			<!-- a metre le bon lien -->
			<tr class="a1"><td class="a1"><a href="Accueil.php"><img id="location" src="images/logo.png"></a></td><td colspan="2" class="a1"><a href="Accueil.php">Location de voitures</a></td></tr>
			<!-- a metre le lien de la page de youness -->
		</table>
	</div>
</div>
</div>

<div style="position: relative;float: right; margin-top: 250px; width: 1070px; height: 400px;overflow: auto;font-family: time new roman;">

<div style="position: relative;float: left;width: 50%;display: inline;" >
<h2 style="color: blue;">Regles D'or</h2>
<p>
<ul>
<li><h4 style="color: red;">Règle n°1: Surveiller ses bagages</h4>
Ne laissez jamais vos bagages sans surveillance, même durant un court instant. Ils deviendraient suspects et seraient détruits</li>
<li><h4 style="color: red;">Règle n°2: Ne pas accepter de bagage d'un tiers</h4>
N'acceptez aucun bagage ou colis d'un tiers, quel qu'en soit le motif.</li>
<li><h4 style="color: red;">Règle n°3: Signaler un bagage abandonné</h4>
Signalez aux agents de l'aéroport tout bagage ou colis abandonné.</li>
<li><h4 style="color: red;">Règle n°4: Garder ses traitements médicaux </h4>
Gardez vos traitements médicaux et ordonnances avec vous.</li>
<li><h4 style="color: red;">Règle n°5: Ne pas transporter d'objet de valeur</h4>
Ne transportez pas d'objets de valeur dans vos bagages de soute.</li>
<li><h4 style="color: red;">Règle n°6: Indiquer ses coordonnées sur ses bagages</h4>
Indiquez lisiblement vos noms et adresse à l'intérieur et à l'extérieur de vos bagages.</li>
<li><h4 style="color: red;">Règle n°7: Protéger les objets fragiles</h4>
Emballez soigneusement tout objet fragile.</li>
</ul>
</p>
</div>

<div style="position: relative;float: right; width: 50%;">
<h2 style="color: blue;">Bagages cabine</h2>
<h3 style="color: red;">Dimensions</h3>
La dimension des bagages de cabine est généralement limitée à 115 cm (total hauteur + largeur + longueur) sur les lignes régulières. 

<h3 style="color: red;">Limite de poids</h3>
La limite de poids des bagages en cabine varie selon les compagnies. Pour connaître la limite de poids de votre bagage à main, renseignez-vous auprès de votre compagnie aérienne.ces limites peuvent varier selon les compagnies : soyez vigilants si vous avez des correspondances.<br>

<img id="avion" src="images/dimension.png" style="width: 100%; height: 240px;">
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</div>
<br>
<br>
<hr>
<div style="position: relative;margin-top: 50px;">
<em>Voici les règles à connaître pour préparer vos bagages de soute : nombre de bagages, poids maximum, dimensions réglementaires, contenus interdits…<em>
<br>

<h3 style="color: blue; outline: double;">Poids et dimension des bagages en soute</h3>
<p>
Le poids et le nombre de bagages en soute dépendent de votre compagnie aérienne et des options liées à votre billet d'avion. Pour la plupart des compagnies aériennes Algerienne le poids maximal est de 30 kilos, dont une marge de tolérance de 2 kilos qui reste en générale à la discrétion de la compagnie aérienne.
Pour obtenir toutes les informations nécessaires sur le poids et les dimensions autorisés de vos bagages en soute, consultez l'annuaire des compagnies aériennes.</p>

<strogn>A SAVOIR : Bagages en correspondance. En cas de correspondance avec 2 compagnies différentes, renseignez-vous auprès de chaque compagnie.</strogn>

<h3 style="color: red;outline: double;">Objets interdits en avion</h3>
<p>
Les objets interdits dans l'avion, même dans les bagages de soute, se résument aux substances et matières dangereuses.La liste ci-dessous est non exhaustive. Pour plus de précisions consultez la Réglementation en vigueur et la liste officielle des objets interdits en soute et dans l'avion sur le site de la Direction Générale de l'Aviation Civile (DGAC).</p>
<ul>
<li><h4 style="color: red;">1 Les substances détonantes</h4>
et déflagrantes (pétards,
feux d’artifice, détonateurs,
munitions...)
<li><h4 style="color: red;">2 Les matières inflammables</h4>
(essence, peintures, laque...)3Les produits chimiques
dangereux (matières toxiques,
matériaux radioactifs...)

<li><h4 style="color: red;">4 Les gaz et matériels</h4>
d’autodéfense (gaz irritants,
urticants ou lacrymogènes...)
</div>
</div>

</body>
</html>

