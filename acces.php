<!DOCTYPE html>
<html>
<head>
	<script src="https://maps.googleapis.com/maps/api/js?key=AZFZERGOPNRGPNERGPIONERGPN&exp&sensor=true&libraries=places"></script>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<title>Accès à l'aéroport</title>
	<link rel="shortcut icon" href="images/airport_256.ico" />
	<link rel="stylesheet" href="fichier.css" type="text/css">
	   <script type="text/javascript">
    window.onload = function(){
        var config = {
            latitude  : 36.7154,
            longitude : 5.0713,
            location  : 'Aeroport,Bejaia,algerie'
        };
 
        // Création d'un objet pLatLng pour stocker les coordonnées
        var latlng = new google.maps.LatLng(config.latitude, config.longitude);
 
        // Options de la carte
        var myOptions = {
            zoom: 17,
            center: latlng,
            // mapTypeId: google.maps.MapTypeId.SATELLITE
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        // Création et affichage de la carte dans le div map_canvas
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
        // Ajout d'un marqueur sur la carte
        var mark = new google.maps.Marker({
            position: latlng,
            map:      map,
            title:    config.location
        });
    }
    </script>
</head>
<body>
<header class="Header-de-base">     
      <h1>Aéroport soummam Abane Ramdane <em>Béjaïa</em></h1>
        <a href="https://www.google.fr/maps/place/Aéroport+de+Bejaia+%2F+Soummam+-+Abane+Ramdane+(BJA)/@36.7153777,5.0690999,17z/data=!3m1!4b1!4m5!3m4!1s0x12f2cd28c67df499:0x3fcda3731935960b!8m2!3d36.7153777!4d5.0712886"><img id="logo-localistation" src="images/google-maps-vector-720x340.png"></a>
        <a href="authentification.php"><img id="logo-authentification" src="images/Authentification-big.png"></a>
        <img id="log-algerie" src="images/fichier.png" width="5%" alt="log drapeau algerie" id="log-algerie">

</header>
<div style="position: absolute;margin-top: 45px;">
<img id="bagagesfond" src="images/accesBejaia.jpg" style="height: 200px; width: 100%;">

<img src="">
</div>


<div id="barre_gauche" style="margin-top: 210px;">
<div id="case1" style="height: 170px;">
<a href="Accueil.php"><div id="Accueil">Accueil</div></a>
<table>
	<tr class="a2"><td class="a2"><a href="authentification.php"><img id="avion" src="images/avion-alsace.png"></a></td><td><a href="authentification.php">Vols</a></td></tr>
	<tr class="a2"><td class="a2"><a href="bagages.php"><img id="bagages" src="images/bagage.jpg"></a></td><td><a href="bagages.php">Préparez vos Bagages</a></td></tr>
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
<div style="position: relative;float: right; margin-top: 280px; width: 1070px; height: 400px;overflow: auto;">
<div style="width: 50%; float: left;">
<ul>
<li><h4 style="color: red;">n°1: Transports en comun </h4>
La ligne 29 ainsi la ligne 22 (Directtion SIDI ALI LEBHAR) dont le terminus est a l'entree de l'aeroport </li>
<li><h4 style="color: red;">n°2: Taxis</h4>
<h3>Reconnaître un taxi officiel</h3>

Seuls les taxis situés au niveau des stations aux portes arrivées mentionnées ci-dessous (Cf. "localisation des bornes taxis") sont autorisés à prendre en charge des clients. Ces taxis officiels sont reconnaissables au signe lumineux situé sur le toit du véhicule. Si vous êtes abordé en sortie de la salle de livraison bagages par des personnes prétendant être des taxis, nous vous invitons à décliner toute proposition de transport.</li>
</ul>

<li><h4 style="color: red;">n°3: En Voiture </h4>
Du centre ville jusqu'a a l'aeroport en moyenne ca fait 30 min de trajet 
<br>
prenez la sortie de bejaia directtion Setif et canstantine une fois arrivez au pont sekala suivez l'itineraire indiquez sure la carte 
</li>
</div>
<div style="width: 50%; float: right;">
<iframe src="https://www.google.com/maps/d/embed?mid=1561NR5yx9cVAv828Vt4uRPzw7Bc" width="500" height="350"></iframe></div>
</div>
</body>
</html>

