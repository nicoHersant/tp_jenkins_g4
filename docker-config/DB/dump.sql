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
-- Structure de la table `livraison`
--
CREATE TABLE IF NOT EXISTS `livraison` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `package` int(15) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Contenu de la table `profile`
--
INSERT INTO `livraison` (`ID`, `firstname`, `lastname`, `package`, `createdAt`) VALUES
(1, 'Loic', 'Arif', '1', '2017-07-18 00:38:00'),
(2, 'Clem', 'Tournery', '1', '2016-06-11 00:36:00'),
(3, 'Loic', 'Arif', '1', '2015-03-15 00:42:00'),
(4, 'Antoine', 'Bohssain', '1', '1998-02-02 00:28:00'),
(5, 'Antoine', 'Bohssain', '1', '2010-05-30 00:01:00'),
(6, 'Silvano', 'Costanzo', '1', '2000-01-25 00:12:00'),
(7, 'Silvano', 'Costanzo', '1', '1999-02-06 00:06:00'),
(8, 'Dylan', 'Gosselin', '1', '2015-08-01 00:04:00'),
(9, 'Dylan', 'Gosselin', '1', '1995-02-18 01:00:00'),
(10, 'Antoine', 'Bohssain', '1', '2014-03-30 00:05:00'),
(11, 'Clem', 'Tournery', '1', '2017-07-18 00:09:00'),
(12, 'Clem', 'Tournery', '1', '2016-06-11 00:07:00'),
(13, 'Loic', 'Arif', '1', '2015-03-15 00:08:00'),


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
