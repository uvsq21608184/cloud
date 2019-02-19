<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="2;menuCompany.php" />
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <title>Ajout reussit</title>
  <link rel="stylesheet" href="fichier.css" type="text/css">
  <script type="text/javascript" src="date_heure.js"></script>
</head>
<body background="images/hd.png">

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

if(isset($_POST['A'])) {
$req1=$bdd->query('SELECT CURRENT_DATE');
$dateAU=$req1->fetch();

$req3=$bdd->prepare('SELECT count(*) AS exist FROM fly WHERE No=:num');
$req3->execute(array('num'=>$_POST['No']));
$exist=$req3->fetch();

if($exist['exist']==1){
  header('Refresh:0; url=menuCompany.php');
    echo '<script type="text/javascript">window.alert("Numero de vol deja utilisee");</script>';

}else if($_POST['dte']< $dateAU['CURRENT_DATE']){
	header('Refresh:0; url=menuCompany.php');
    echo '<script type="text/javascript">window.alert("Date du vol et inferieur a la date d ajourdhui");</script>';

}else if($_POST['time']< $_POST['time2']){
header('Refresh:0; url=menuCompany.php');
   echo '<script type="text/javascript">window.alert("heur de l embraquement superieur a l heur du vol ");</script>';

}else if(($_POST['A']!="bejaia")AND($_POST['B']!="bejaia")){
	header('Refresh:0; url=menuCompany.php');
   echo '<script type="text/javascript">window.alert("impossible le vol ne passe pas par bejaia");</script>';

}else{
$requette=$bdd->prepare('SELECT count(*) AS nbrvols FROM fly');
$requette->execute();//conter le nombre de persone dans ma table pour l'attribut Per dans pereson
$nbr=$requette->fetch();
$nbr1=$nbr['nbrvols'];
$nbr1++;

$req=$bdd->prepare('SELECT Id FROM plane WHERE  Id NOT IN(SELECT fly.Id_Plane FROM fly,plane WHERE plane.Id=fly.Id_Plane AND fly.Day=:dte1)');
$req->execute(array('dte1'=>$_POST['dte']));
$resultat=$req->fetch();

$req2=$bdd->prepare('INSERT INTO fly(No,Day,Hour,Distination,arivalfrom,Capacity,Boarding_Hour,Id,Id_Company,Id_Plane) VALUES(:num,:DD,:h,:Dep,:arr,:cap,:BH,:Id,:com,:pl)');

$req2->execute(array('num' => $_POST['No'], 'DD' => $_POST['dte'],'h' => $_POST['time'],'Dep' => $_POST['B'],'arr'=>$_POST['A'],'cap'=>$_POST['nmbr'],'BH'=>$_POST['time2'],'Id' => 'FLY'.$nbr1,'com'=>$_SESSION['nfgs'],'pl'=>$resultat['Id']));

header('Refresh:0; url=menuCompany.php');
     	echo '<script type="text/javascript">window.alert("Vol Ajoutee");</script>';
     }

}
?>

<?
if(isset($_POST['paid'])) {

//recupere le id du vols dans le num de vol est NV 
$requette2=$bdd->prepare('SELECT Id FROM fly WHERE fly.No=:no');
$requette2->execute(array('no'=>$_POST['nv']));
$flyex=$requette2->fetch();

/*
//compter le nombre de passager d'un vol
$requette9=$bdd->prepare('SELECT COUNT(*) as nb FROM traveller WHERE traveller.Id_Fly=:vol1');
$requette9->execute(array('vol1'=>$flyex['Id']));
$nombreplace=$requette9->fetch();
$nombreplace1=$nombreplace['nb'];
$nombreplace1++;


$requette10=$bdd->prepare('SELECT Capacity FROM fly WHERE fly.Id=:vol2');
$requette10=$bdd->execute(array('vol2' => $flyex['Id']));
$capci=$requette10->fetch();
/*
if($nombreplace1>$capci['Capacity']){
  header('Refresh:0; url=ajoutVoyageur.php');
      echo '<script type="text/javascript">window.alert("y a plus de place dans ce vole");</script>';
 }else{     
*/
//verifie si la personne existe grace au num de passport
$requette3=$bdd->prepare('SELECT FGS_No,count(*) AS ilestdeja1 FROM person WHERE Passport_No=:pass1');
$requette3->execute(array('pass1'=> $_POST['nmpassport']));//pour verfier si la person existe deja si oui ne pas l'ajouter a la table personne
$donneesVoyageur=$requette3->fetch();//pour le if
//

$requette5=$bdd->query('SELECT count(*) AS nbvoyageur FROM traveller');
$totalvoyageur=$requette5->fetch();
$NOMBRE=$totalvoyageur['nbvoyageur'];
$NOMBRE++; 


if($donneesVoyageur['ilestdeja1']==0){
//si il exist pas on l'ajout dans les deux table person et voyageur
$requette4=$bdd->query('SELECT count(*) AS nbperson1 FROM person');
$nbrp=$requette4->fetch();
$nbrv2=$nbrp['nbperson1'];
$nbrv2++;

$requette8=$bdd->prepare('INSERT INTO person(First_Name,Last_Name,Sex,Address,FGS_No,Passport_No) VALUES(:nom,:prenom,:sexe,:add,:id,:pssp)');
$requette8->execute(array('nom' => $_POST['Nom'], 'prenom' => $_POST['prenom'],'sexe' => $_POST['sexe'],'add' => $_POST['adresse'],'id' => 'PER'.$nbrv2,'pssp'=>$_POST['nmpassport']));

//insertion dans voyageur
$requette6=$bdd->prepare('INSERT INTO traveller(Seat,Class,Luggage_Wight,Paid,Id_Fly,FGS_No,Id) VALUES(:si,:cl,:poi,:pay,:vol,:fgs1,:voy)');
$requette6->execute(array('si'=>$_POST['siege'],'cl'=>$_POST['class'],'poi' => $_POST['poids'],'pay'=>$_POST['paid'],'vol' => $flyex['Id'],'fgs1' =>"PER".$nbrv2,'voy'=>'TR'.$NOMBRE));

header('Refresh:0; url=ajoutVoyageur.php');
      echo '<script type="text/javascript">window.alert("Voyageur Ajoutee");</script>';

}else{//sinon on l'ajoute que dans voyageur
$requette7=$bdd->prepare('INSERT INTO traveller(Seat,Class,Luggage_Wight,Paid,Id_Fly,FGS_No,Id) VALUES(:si,:cl,:poi,:pay,:vol,:fgs1,:voy)');
$requette7->execute(array('si'=>$_POST['siege'],'cl'=>$_POST['class'],'poi' => $_POST['poids'],'pay'=>$_POST['paid'],'vol' => $flyex['Id'],'fgs1' => $donneesVoyageur['FGS_No'],'voy'=>'TR'.$NOMBRE)); 
header('Refresh:0; url=ajoutVoyageur.php');
      echo '<script type="text/javascript">window.alert("voyageur Ajoutee");</script>';
        }
  }
?>

<div style="background-color: white; width: 600px;height:150px; ; position: absolute;margin-left: 330px;border-radius: 10px; font-size: 30px; text-align: center;">
<h3 style="color: red;">Chargement</h3>
<h6 style="color: white; font-size: 15px;">vous allez etre rediriger a la page principal dans 5 seconde</h6>
</div>

</body>
</html>

