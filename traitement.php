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
$req=$bdd->prepare('SELECT count(*) AS ilestdeja FROM utilisateur WHERE identifiant=:mail OR No_FGS=:fgu');
$req1=$bdd->prepare('SELECT FGS_No,count(*) AS ilestdeja1 FROM person WHERE Passport_No=:pass1');
$requette=$bdd->prepare('SELECT count(*) AS nbperson1 FROM person');

$req1->execute(array('pass1'=> $_POST['nmpassport']));//pour verfier si la person existe deja ou pas
$donnees2=$req1->fetch();

$req->execute(array('mail'=> $_POST['mail'],'fgu'=>$donnees2['FGS_No']));//pour verfier si le mail existe ou pas
$requette->execute();//conter le nombre de persone dans ma table pour l'attribut Per dans pereson



$donnees=$req->fetch();
$nbr=$requette->fetch();
$nombreDePersonnes=$nbr['nbperson1'];
$nombreDePersonnes++;

$requette->closeCursor();
$req->closeCursor();


if(($donnees['ilestdeja']==0) && ($donnees2['ilestdeja1']==0) && ($_POST['motdepasseA']==($_POST['motdepasseB'])))
{
	$req=$bdd->prepare('INSERT INTO utilisateur(identifiant, mot_de_passe, type_utilisateur,No_FGS) VALUES(:identifiant, :mdp, :admin,:idfgs)');
	$req->execute(array('identifiant' => $_POST['mail'],'mdp' => $_POST['motdepasseA'], 'admin' => 0,
		'idfgs'=>'PER'.$nombreDePersonnes));
	
	$req2=$bdd->prepare('INSERT INTO person(First_Name,Last_Name,Sex,Address,FGS_No,Passport_No) VALUES(:nom,:prenom,:sexe,:add,:id,:pssp)');

	$req2->execute(array('nom' => $_POST['Nom'], 'prenom' => $_POST['prenom'],'sexe' => $_POST['sexe'],'add' => $_POST['adresse'],'id' => 'PER'.$nombreDePersonnes,'pssp'=>$_POST['nmpassport']));

	
		 	$_SESSION['admin'] =  0 ;
			$_SESSION['mail'] = $_POST['mail'];
			$_SESSION['fgs']='PER'.$nombreDePersonnes;
				
     	 header('location: FinInscription.php');
     	 exit();
  		}else if (($donnees['ilestdeja']==0)&& ($donnees2['ilestdeja1']==1) && ($_POST['motdepasseA']==($_POST['motdepasseB']))) {
  		$req3=$bdd->prepare('INSERT INTO utilisateur(identifiant, mot_de_passe, type_utilisateur,No_FGS) VALUES(:identifiant, :mdp, :admin,:idfgs)');
		$req3->execute(array('identifiant' => $_POST['mail'],'mdp' => $_POST['motdepasseA'], 'admin' => 0,
		'idfgs'=>$donnees2['FGS_No']));
		 	$_SESSION['admin'] =  0 ;
			$_SESSION['mail'] = $_POST['mail'];
			$_SESSION['fgs']=$donnees2['FGS_No'];
				
     	 header('location: FinInscription.php');
  			exit();
  		}
  		else if ($_POST['motdepasseA'] != $_POST['motdepasseB'] )
  		{

		header('Refresh:0; url=inscription.php');
     	echo '<script type="text/javascript">window.alert("mot de passe non identiques");</script>';
     	} 
	else
		{

		header('Refresh:0; url=inscription.php');
		echo '<script type="text/javascript">window.alert("identifant deja utilisee ou Un utilisateur dans le meme numero de passport existe deja");</script>';
     	}
?> 

