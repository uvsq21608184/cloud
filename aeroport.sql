--
-- Base de données :  `Aban_Ramdan_Bejaia`
--

-- --------------------------------------------------------

--
-- Structure de la table `company`
--

CREATE TABLE `company` (
  `Name` char(20) NOT NULL,
  `Nationality` char(30) NOT NULL,
  `Id` varchar(3) NOT NULL
) ;

--
-- Structure de la table `fly`
--

CREATE TABLE `fly` (
  `No` varchar(11) NOT NULL,
  `Day` date NOT NULL,
  `Hour` time NOT NULL,
  `Distination` char(30) NOT NULL,
  `arivalfrom` varchar(20) NOT NULL,
  `Capacity` int(11) NOT NULL,
  `Boarding_Hour` time NOT NULL,
  `Id` varchar(8) NOT NULL,
  `Id_Company` varchar(8) NOT NULL,
  `Id_Plane` varchar(8) NOT NULL
);
--
-- Structure de la table `Parking`
--

CREATE TABLE `Parking` (
  `id_place` varchar(8) NOT NULL,
  `type` varchar(1) NOT NULL
);
--
-- Structure de la table `person`
--

CREATE TABLE `person` (
  `First_Name` char(30) NOT NULL,
  `Last_Name` char(30) NOT NULL,
  `Sex` char(1) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `FGS_No` varchar(8) NOT NULL,
  `Passport_No` int(12) NOT NULL
) ;
--
-- Structure de la table `pilot`
--

CREATE TABLE `pilot` (
  `License_No` varchar(8) NOT NULL,
  `Flying_hours` int(1) NOT NULL,
  `FGS_No` varchar(8) NOT NULL,
  `Id` varchar(8) NOT NULL,
  `Id_Plane` varchar(8) NOT NULL
);

--
-- Structure de la table `plane`
--

CREATE TABLE `plane` (
  `Registration_No` varchar(8) NOT NULL,
  `Model` varchar(30) NOT NULL,
  `Capacity` int(2) NOT NULL,
  `Landing_distance` int(4) NOT NULL,
  `Takeoff_distance` int(4) NOT NULL,
  `Id` varchar(8) NOT NULL,
  `Id_Track` varchar(8) NOT NULL
);
--
-- Structure de la table `ReservationParking`
--

CREATE TABLE `ReservationParking` (
  `Id_occupant` varchar(8) NOT NULL,
  `Id_place` varchar(8) NOT NULL,
  `DateReserv` date NOT NULL
);

--
-- Structure de la table `steward`
--

CREATE TABLE `steward` (
  `Class` varchar(1) NOT NULL,
  `FGS_No` varchar(8) NOT NULL,
  `Id` varchar(10) NOT NULL,
  `Id_Plane` varchar(8) NOT NULL
);
--
-- Structure de la table `traveller`
--

CREATE TABLE `traveller` (
  `Seat` varchar(8) NOT NULL,
  `Class` char(10) NOT NULL,
  `Luggage_Wight` int(2) NOT NULL,
  `Paid` char(3) NOT NULL,
  `Id_Fly` varchar(8) NOT NULL,
  `FGS_No` varchar(8) NOT NULL,
  `Id` varchar(8) NOT NULL
) ;

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `identifiant` varchar(25) NOT NULL,
  `mot_de_passe` varchar(15) NOT NULL,
  `type_utilisateur` int(1) NOT NULL,
  `No_FGS` varchar(8) NOT NULL
) ;
--
-- Structure de la table `worker`
--

CREATE TABLE `worker` (
  `Salary` varchar(8) NOT NULL,
  `Schedule` char(2) NOT NULL,
  `Account_No` int(11) NOT NULL,
  `Function` char(20) NOT NULL,
  `FGS_No` varchar(8) NOT NULL,
  `Id` varchar(10) NOT NULL,
  `Id_Fly` varchar(8) NOT NULL
) ;





--
-- Index pour les tables exportées
--

--
-- Index pour la table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Index pour la table `fly`
--
ALTER TABLE `fly`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `No` (`No`),
  ADD KEY `Id_Company` (`Id_Company`),
  ADD KEY `Id_Plane` (`Id_Plane`);

--
-- Index pour la table `Parking`
--
ALTER TABLE `Parking`
  ADD PRIMARY KEY (`id_place`);

--
-- Index pour la table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`FGS_No`),
  ADD UNIQUE KEY `Passport_No` (`Passport_No`);

--
-- Index pour la table `pilot`
--
ALTER TABLE `pilot`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `License_No` (`License_No`),
  ADD KEY `FGS_No` (`FGS_No`),
  ADD KEY `Id_Plane` (`Id_Plane`);

--
-- Index pour la table `plane`
--
ALTER TABLE `plane`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id_Track` (`Id_Track`);

--
-- Index pour la table `ReservationParking`
--
ALTER TABLE `ReservationParking`
  ADD KEY `Id_occupant` (`Id_occupant`),
  ADD KEY `Id_place` (`Id_place`),
  ADD KEY `DateReserv` (`DateReserv`);

--
-- Index pour la table `steward`
--
ALTER TABLE `steward`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id` (`Id`),
  ADD KEY `FGS_No` (`FGS_No`),
  ADD KEY `Id_Plane` (`Id_Plane`);

--
-- Index pour la table `track`
--
ALTER TABLE `track`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `traveller`
--
ALTER TABLE `traveller`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id-Fly` (`Id_Fly`),
  ADD KEY `FGS_No` (`FGS_No`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`No_FGS`),
  ADD UNIQUE KEY `No_FGS_2` (`No_FGS`),
  ADD UNIQUE KEY `identifiant` (`identifiant`),
  ADD KEY `No_FGS` (`No_FGS`) USING BTREE,
  ADD KEY `No_FGS_3` (`No_FGS`);
--
-- Index pour la table `worker`
--
ALTER TABLE `worker`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id` (`Id`),
  ADD KEY `FGS_No` (`FGS_No`),
  ADD KEY `Id_Fly` (`Id_Fly`);

  //on referncie les cles etrangers de chaque table


ALTER TABLE `Worker` ADD FOREIGN KEY  (`Id_Fly`) REFERENCES Fly (`Id`);
ALTER TABLE `Fly` ADD FOREIGN KEY  (`Id_Company`) REFERENCES Company (`Id`);
ALTER TABLE `Fly` ADD FOREIGN KEY  (`Id_Plane`) REFERENCES Plane (`Id`);
ALTER TABLE `Plane` ADD FOREIGN KEY  (`Id_Track`) REFERENCES Track (`Id`);


ALTER TABLE `Pilot` ADD FOREIGN KEY  (`Id_Plane`) REFERENCES Plane (`Id`);
ALTER TABLE `Steward` ADD FOREIGN KEY  (`Id_Plane`) REFERENCES Plane (`Id`);


ALTER TABLE `Traveller` ADD FOREIGN KEY  (`FGS_No`) REFERENCES Person (`FGS_No`);
ALTER TABLE `Worker` ADD FOREIGN KEY  (`FGS_No`) REFERENCES Person (`FGS_No`);
ALTER TABLE `Pilot` ADD FOREIGN KEY  (`FGS_No`) REFERENCES Person (`FGS_No`);
ALTER TABLE `Steward` ADD FOREIGN KEY  (`FGS_No`) REFERENCES Person (`FGS_No`);
ALTER TABLE `Traveller` ADD FOREIGN KEY  (`Id_Fly`) REFERENCES Fly (`Id`);

ALTER TABLE `utilisateur` ADD FOREIGN KEY  (`No_FGS`) REFERENCES Person (`FGS_No`);

ALTER TABLE `ReservationParking` ADD FOREIGN KEY  (`Id_place`) REFERENCES Parking (`Id`);
ALTER TABLE `ReservationParking` ADD FOREIGN KEY  (`Id_occupant`) REFERENCES Parking (`FGS_No`);
ALTER TABLE `Company` ADD FOREIGN KEY  (`Id_represantant1`) REFERENCES Person (`FGS_No`);

--GRANT DROITS AUX UTILISATEURS
CREATE USER IF NOT EXISTS 'Normal'@'localhost' IDENTIFIED BY 'Normal';

GRANT SELECT ON Aban_Ramdan_Bejaia.* TO 'Normal'@'localhost';
GRANT INSERT,DELETE ON Aban_Ramdan_Bejaia.ReservationParking TO 'Normal'@'localhost';

CREATE USER IF NOT EXISTS 'company'@'localhost' IDENTIFIED BY 'company';

GRANT SELECT ON Aban_Ramdan_Bejaia.* TO 'company'@'localhost';
GRANT UPDATE, INSERT ON Aban_Ramdan_Bejaia.fly TO 'company'@'localhost';
GRANT INSERT ON Aban_Ramdan_Bejaia.traveller TO 'company'@'localhost';

CREATE USER IF NOT EXISTS 'Admin'@'localhost' IDENTIFIED BY 'Admin';

GRANT SELECT, UPDATE, INSERT ON Aban_Ramdan_Bejaia.* TO 'Admin'@'localhost';

--Requetes--

--1--les pistes qui n‘ont pas de vole prévus .

 SELECT * FROM Track WHERE Track.Id NOT IN (SELECT Track.Id 
 FROM Fly,Plane,Track WHERE Plane.Id_Track=Track.Id AND Fly.Id_Plane=Plane.Id )
--2--tous les travailleur qui sont occuper des bagage du vole a destination de NEW YORK

  SELECT * FROM Person WHERE Person.FGS_No IN (SELECT Worker.FGS_No 
  FROM Worker,Fly WHERE Worker.Id_Fly=Fly.Id and Fly.Distination="New York JFK" 
  AND Worker.Function="Bagage-handler")
--3-- les travailleurs qui ont dépasser le cap de 5000 euro par mois

 SELECT * FROM Person WHERE Person.FGS_No IN (SELECT Worker.FGS_No 
 FROM Worker WHERE Worker.Salary>5000)
--4--les models d’avion utiliser par la compagnie air France

 SELECT Model FROM Plane,fly,Company WHERE Fly.Id_Company=Company.Id 
 AND Fly.Id_Plane=Plane.Id and Company.Name="Air France"
--5--les place restantes du vole a destination de New York

 SELECT Fly.Capacity-COUNT(*) FROM Fly,Traveller 
 WHERE Traveller.Id_Fly=Fly.Id AND Fly.Distination="New York JFK"
--6-- les voyageurs du vol du 22-juin-2016

 SELECT * FROM Person WHERE FGS_No IN (SELECT FGS_No FROM Traveller,Fly 
 WHERE Fly.Id=Traveller.Id_Fly AND Fly.Day="2016-06-22")
--7--nom et la nationalité de la compagnie qui organisera le vole du 22-juin-2016

 SELECT Name,Nationality FROM Company,Fly WHERE Fly.Id_Company=Company.Id 
 AND Fly.Day="2016-06-22"
--8--les noms de l’équipage de bord qui assurant le vole du 22-juin-2016

  
  SELECT * FROM Person WHERE FGS_No IN (SELECT FGS_No FROM Pilot,Fly 
  WHERE Pilot.Id_Plane=Fly.Id_Plane AND Fly.Day="2016-06-22")
--9--trouver l’heur de départ du vole de monsieur « Torres Rahim »

 SELECT HOUR FROM Fly,Traveller,Person WHERE Person.FGS_No=Traveller.FGS_No 
 AND Fly.Id=Traveller.Id_Fly AND Person.Last_Name="Rahim" AND Person.First_Name="Torres"
--10--la direction du vent et le model d’avion que va piloter le pilote « Grant Leo»

 SELECT Model,Wind_direction FROM Pilot,Person,Plane,Track 
 WHERE Pilot.Id_Plane=Plane.Id AND Plane.Id_Track=Track.Id 
 AND Person.FGS_No=Pilot.FGS_No ANDPerson.First_Name="Grant" AND Person.Last_Name="Leo"
--11--afficher le nombre de places de la classe affaire du vole vers new York

 SELECT COUNT(*) FROM Traveller,Fly WHERE Traveller.Id_Fly=Fly.Id 
 AND Fly.Distination="New York JFK" AND Traveller.Class="A"
--12--les voyageur qui ont dépassé le seuil de 30 ko de bagage pour le vole a destination de Bordeaux.

 SELECT * FROM Person WHERE FGS_No IN (SELECT FGS_No FROM Traveller,Fly WHERE 
 Fly.Id=Traveller.Id_Fly AND Fly.Distination="Bordeaux Merignac" 
 AND Traveller.Luggage_Wight>30)
--13--la liste des avions avec le nombre de place supérieur a 140.

 SELECT * FROM Plane WHERE Plane.Capacity>140
--14--trouver tous les vols ayant décoller avec le vent du nord .

 SELECT * FROM Fly WHERE Fly.Id IN (SELECT Fly.Id FROM Fly,Plane,Track 
 WHERE Fly.Id_Plane=Plane.Id AND Plane.Id_Track=Track.Id AND Track.Wind_direction="N")

--15--Le nombre de voyageur qui ont payé du vol a destination de Bejaia.

SELECT COUNT(*) FROM Fly,Traveller WHERE Traveller.Id_Fly=Fly.Id 
AND Traveller.Paid="YES" AND   Fly.Distination="Bejaia"
--16--donner tous les noms des compagnies et les voles qui ils organisent avec le model d’avion et la destination et l’heur du vol et la piste de décollage avec la direction du vent

SELECT DISTINCT Name,Fly.No,Distination,Model,Track.Id,Hour,Wind_Direction 
FROM Company,Fly,Track,Plane WHERE 
Fly.Id_Company=Company.Id AND Fly.Id_Plane=Plane.Id AND Plane.Id_Track=Track.Id
--17--la liste des Travailleurs avec leurs functions hors pilotes et Stewards

 SELECT DISTINCT Person.First_Name, Person.Last_Name,Worker.Function,Worker.Schedule 
 FROM Worker,Person WHERE Worker.FGS_No=Person.FGS_No;
--18-- les femmes pilotes du vol de Oran

  SELECT * FROM Person WHERE FGS_No IN (SELECT FGS_No FROM Pilot,Fly,Plane 
  WHERE  Pilot.Id_Plane=Plane.Id AND Fly.Id_Plane=Plane.Id AND Fly.Distination="Oran" AND   Person.Sex="F");
--19--tous les vols par ordre de date croissante

  SELECT * FROM `Fly` ORDER BY `Fly`.`Day` ASC;

