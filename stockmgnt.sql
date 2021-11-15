-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 15 nov. 2021 à 14:55
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdd_sauteuhz`
--

-- --------------------------------------------------------

--
-- Structure de la table `stockmgnt`
--

DROP TABLE IF EXISTS `stockmgnt`;
CREATE TABLE IF NOT EXISTS `stockmgnt` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Stock` int(11) NOT NULL,
  `Besoin` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `stockmgnt`
--

INSERT INTO `stockmgnt` (`ID`, `Stock`, `Besoin`) VALUES
(1, 10, 5),
(2, 15, 10),
(3, 20, 15),
(4, 25, 20),
(5, 30, 25),
(6, 35, 30),
(7, 40, 20),
(8, 33, 18),
(9, 28, 25),
(10, 38, 15),
(11, 23, 10),
(12, 51, 38);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
