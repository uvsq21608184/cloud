	<?php
	session_start();
		if (isset($_SESSION['mail']) && $_SESSION['type'] == "voyageur")
		{
			try{
				$bdd = new PDO('mysql:host=localhost;dbname=Aban_Ramdan_Bejaia;charset=utf8', 'Normal', 'Normal', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));


			}
			catch (Exception $e){
					die('Erreur : ' . $e->getMessage());
			}
		}		
		elseif (isset($_SESSION['email']) && $_SESSION['type'] == "Admin")
		{
			try{
				$bdd = new PDO('mysql:host=localhost;dbname=Aban_Ramdan_Bejaia;charset=utf8', 'Admin', 'Admin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
			}
			catch (Exception $e){
					die('Erreur : ' . $e->getMessage());
			}
		}
		else
		{
			try{
				$bdd = new PDO'mysql:host=localhost;dbname=Aban_Ramdan_Bejaia;charset=utf8', 'company', 'company', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
			}
			catch (Exception $e){
					die('Erreur : ' . $e->getMessage());
			}
		}
	?>