-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 14 Novembre 2017 à 16:11
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `api_jenkins`
--
CREATE DATABASE IF NOT EXISTS `api_jenkins`;
USE `api_jenkins`;
-- --------------------------------------------------------

--
-- Structure de la table `deliveryboy`
--
CREATE TABLE IF NOT EXISTS `deliveryboy` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;
--
-- Contenu de la table `deliveryboy`
--
INSERT INTO `deliveryboy` (`ID`, `firstname`, `lastname`) VALUES
(1, 'Loic', 'Arif'),
(2, 'Clem', 'Tournery'),
(3, 'Antoine', 'Bohssain'),
(4, 'Silvano', 'Costanzo'),
(5, 'Pierre', 'LePage'),
(6, 'Dylan', 'Gosselin'),
(13, 'Nico', 'Hersant');
--
-- Structure de la table `delivery`
--
CREATE TABLE IF NOT EXISTS `delivery` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `deliveryboy` int(11) NOT NULL,
  `package` int(15) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;
--
-- Contenu de la table `delivery`
--
INSERT INTO `delivery` (`ID`, `deliveryboy`, `package`, `createdAt`) VALUES
(1, '1', '2', '2017-07-18 00:38:00'),
(2, '2', '1', '2016-06-11 00:36:00'),
(3, '1', '1', '2015-03-15 00:42:00'),
(4, '3', '1', '1998-02-02 00:28:00'),
(5, '3', '1', '2010-05-30 00:01:00'),
(6, '4', '1', '2000-01-25 00:12:00'),
(7, '4', '3', '1999-02-06 00:06:00'),
(8, '6', '1', '2015-08-01 00:04:00'),
(9, '6', '1', '1995-02-18 01:00:00'),
(10, '3', '2', '2014-03-30 00:05:00'),
(11, '2', '1', '2017-07-18 00:09:00'),
(12, '2', '1', '2016-06-11 00:07:00'),
(13, '1', '1', '2015-03-15 00:08:00');

--
-- création d'un utilisateur pour la table `livraison`
--
/*
GRANT USAGE ON *.* TO "jenkins_user"@"localhost" IDENTIFIED BY "VlR1d1oiqrccMxid";
GRANT USAGE ON *.* TO "jenkins_user"@"%" IDENTIFIED BY "VlR1d1oiqrccMxid";
GRANT ALL PRIVILEGES ON `api_jenkins`.* TO 'jenkins_user'@'%';
GRANT ALL PRIVILEGES ON `api_jenkins`.* TO 'jenkins_user'@'localhost';
*/
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
