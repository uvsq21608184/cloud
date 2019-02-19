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
	$req = $bdd->prepare('SELECT type_utilisateur AS A , count(*) AS nbr  FROM utilisateur WHERE identifiant = :id  AND mot_de_passe = :mdp ');
	$req->execute(array('id' => $_POST['mail'],'mdp' => $_POST['motdepasse']));
	$donnees = $req->fetch();
	$req->closeCursor();
if($donnees['nbr'] == 1 AND $donnees['A']==0 )
		{
			$_SESSION['mdp'] = $_POST['motdepasse'];
			$_SESSION['mail'] = $_POST['mail'];
			$_SESSION['type']="voyageur";
	    header('Location: menuVisiteur.php');
	    exit();
	  	}
elseif ($donnees['nbr']==1 AND $donnees['A']==1) {
			$_SESSION['mdp'] = $_POST['motdepasse'];
			$_SESSION['mail'] = $_POST['mail'];
			$_SESSION['type']="Company";
	    header('Location: menuCompany.php');
	  	}	  	
elseif ($donnees['nbr']==1 AND $donnees['A']==2) {
		$_SESSION['mdp'] = $_POST['motdepasse'];
			$_SESSION['mail'] = $_POST['mail'];
			$_SESSION['type']="Admin";
	    header('Location: menuAdmin.php');
		}
		else
		{
		header('Refresh:0; url=authentification.php');
		echo '<script type="text/javascript">window.alert("identifiant ou mot de passe incorrect ou pas encore inscrit");</script>';
		}
?> 