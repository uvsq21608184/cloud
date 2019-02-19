<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<title>Accueil</title>
	<link rel="shortcut icon" href="images/airport_256.ico" />
	<link rel="stylesheet" href="fichier.css" type="text/css">
	<script type="text/javascript" src="js/date_heure.js"></script>
</head>
<body background="images/resize-img.jpeg">
<header class="Header-de-base">     
      <h1>Aéroport soummam Abane Ramdane <em>Béjaïa</em></h1>
        <a href="https://www.google.fr/maps/place/Aéroport+de+Bejaia+%2F+Soummam+-+Abane+Ramdane+(BJA)/@36.7153777,5.0690999,17z/data=!3m1!4b1!4m5!3m4!1s0x12f2cd28c67df499:0x3fcda3731935960b!8m2!3d36.7153777!4d5.0712886"><img id="logo-localistation" src="images/google-maps-vector-720x340.png"></a>
        <a href="authentification.php"><img id="logo-authentification" src="images/Authentification-big.png"></a>
        <img id="log-algerie" src="images/fichier.png" width="5%" alt="log drapeau algerie" id="log-algerie">

</header>
<div id="barre_gauche">
<div id="case1">
<table>
	<tr class="a2"><td class="a2"><a href="authentification.php"><img id="avion" src="images/avion-alsace.png"></a></td><td><a href="authentification.php">Vols</a></td></tr>
	<tr class="a2"><td class="a2"><a href="bagages.php"><img id="bagages" src="images/bagage.jpg"></a></td><td><a href="bagages.php">Préparez vos Bagages</a></td></tr>
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
<div id="content">


<div id="meteo">
<div id="cont_OTg3MDB8MXw0fDF8NHxGRkZGRkZ8M3xGRkZGRkZ8Y3wx"><div id="spa_OTg3MDB8MXw0fDF8NHxGRkZGRkZ8M3xGRkZGRkZ8Y3wx"><a id="a_OTg3MDB8MXw0fDF8NHxGRkZGRkZ8M3xGRkZGRkZ8Y3wx" href="http://www.meteocity.com/algerie/bejaia_v98700/" target="_blank" style="color:#333;text-decoration:none;">Météo Bejaia</a> ©<a href="http://www.meteocity.com">meteocity.com</a></div><script type="text/javascript" src="http://widget.meteocity.com/js/OTg3MDB8MXw0fDF8NHxGRkZGRkZ8M3xGRkZGRkZ8Y3wx"></script></div>
</div>
 <span id="date_heure"></span>
            <script type="text/javascript">window.onload = date_heure('date_heure');</script>
<table class="Departs">
<caption>Au Programme Aujourd'hui</caption>
<tr>
<td  colspan="5" style="text-align: center;background-color: green">Départ </td>
<td  colspan="5" style="text-align: center;background-color: green">Arrivée</td>
 	<tr>
 	<td style="background-color: #FF6600;">Fly</td>
 	<td style="background-color: #FF6600;">Day</td>
 	<td style="background-color: #FF6600;">Distination</td>
 	<td style="background-color: #FF6600;">Hour</td>
 	<td style="background-color: #FF6600;">Company</td>
 	<td style="background-color: #FF6600;">Fly</td>
 	<td style="background-color: #FF6600;">Day</td>
 	<td style="background-color: #FF6600;">Arival from</td>
 	<td style="background-color: #FF6600;">Hour</td>
 	<td style="background-color: #FF6600;">Company</td>
 	</tr>  	
<?php
	try
		{
		$bdd= new PDO('mysql:host=localhost;dbname=Aban_Ramdan_Bejaia;charset=utf8', 'root', 'root');
		}
	catch(Exception $e)
		{
	    die('Erreur : '.$e->getMessage());
	    }
$reponse = $bdd->query('SELECT No,Day,Hour,Distination,Id_Company FROM fly WHERE arivalfrom="bejaia" AND Day=CURRENT_DATE');
$reponse2= $bdd->query('SELECT No,Day,Hour,arivalfrom,Id_Company FROM fly WHERE Distination="bejaia" AND Day=CURRENT_DATE');
while ($reponse1=$reponse->fetch() or $reponse3=$reponse2->fetch()) 
{

?>
<tr>
<td><?php echo $reponse1['No'];?></td>
<td><?php echo $reponse1['Day'];?></td>
<td><?php echo $reponse1['Distination'];?></td>
<td><?php echo $reponse1['Hour'];?></td>
<td><?php echo $reponse1['Id_Company'];?></td>
<td><?php echo $reponse3['No'];?></td>
<td><?php echo $reponse3['Day'];?></td>
<td><?php echo $reponse3['arivalfrom'];?></td>
<td><?php echo $reponse3['Hour'];?></td>
<td><?php echo $reponse3['Id_Company'];?></td>
</tr>
<?php
}
$reponse1->closeCursor();
?>
</table>
</div>

</body>
</html>