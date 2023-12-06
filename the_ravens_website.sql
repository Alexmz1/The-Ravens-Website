-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 30 août 2023 à 13:36
-- Version du serveur : 5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `the_ravens_website`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `nom`) VALUES
(2, 'T-shirt');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
  `id` int(11) NOT NULL,
  `date_commande` datetime(6) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `id_utilisateurs` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `lignes_commandes`
--

CREATE TABLE `lignes_commandes` (
  `id` int(11) NOT NULL,
  `nom_produit` varchar(255) NOT NULL,
  `quantite` int(11) DEFAULT NULL,
  `taille` varchar(255) NOT NULL,
  `prix` float DEFAULT NULL,
  `id_produits` int(11) DEFAULT NULL,
  `id_commandes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `message_client`
--

CREATE TABLE `message_client` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` tinytext,
  `id_utilisateurs` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `message_client`
--

INSERT INTO `message_client` (`id`, `nom`, `prenom`, `email`, `message`, `id_utilisateurs`) VALUES
(1, 'Test', 'Test', 'test@test.fr', 'Bonjour', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `description` tinytext,
  `photo_produit` varbinary(255) DEFAULT NULL,
  `id_categories` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `prix`, `description`, `photo_produit`, `id_categories`) VALUES
(1, 'Test', 35, 'T-shirt rouge', NULL, NULL),
(2, 'Test', 25, 'T-shirt rouge', NULL, NULL),
(4, 'T-shirt Carhartt', 20, 'T-shirt marron', NULL, NULL),
(6, 'T-shirt', 35, 'T-shirt marron', NULL, NULL),
(7, 'T-shirt', 50, 'T-shirt Travis Scott', NULL, NULL),
(8, 'T-shirt Nike', 25, 'T-shirt Nike rose', NULL, NULL),
(9, 'Produit de Test', 10, 'Description du produit de test', NULL, 2),
(11, 'T-shirt', 50, 'TEST', NULL, NULL),
(12, 'T-shirt', 20, 'TEST', NULL, NULL),
(13, 'T-shirt', 20, 'T-shirt Marron', NULL, NULL),
(14, 'T-shirt', 20, 'T-shirt Marron Chase', NULL, NULL),
(15, 'T-shirt', 25, 'T-shirt Marron ', NULL, NULL),
(16, 'T-shirt', 35, 'T-shirt test', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `num_rue` varchar(255) DEFAULT NULL,
  `rue` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `code_postal` varchar(255) DEFAULT NULL,
  `pays` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `email`, `mdp`, `num_rue`, `rue`, `ville`, `code_postal`, `pays`, `role`, `token`) VALUES
(1, 'Test', 'Test', 'test@test.fr', 'test1', NULL, 'Rue de Paris', 'Paris', NULL, 'France', 'Admin', ''),
(2, 'Client1', 'Client1', 'client1@test.fr', 'client1', NULL, 'Rue de Seine', 'Paris', NULL, 'France', 'Client', NULL),
(3, 'test2', 'test2', 'test2@test.fr', 'test2', '45', 'tt', 'tt', '45', 'France', 'Client', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_utilisateurs_commandes` (`id_utilisateurs`);

--
-- Index pour la table `lignes_commandes`
--
ALTER TABLE `lignes_commandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_produits_lignes_commandes` (`id_produits`),
  ADD KEY `fk_commandes_lignes_commandes` (`id_commandes`);

--
-- Index pour la table `message_client`
--
ALTER TABLE `message_client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_utilisateurs_message_client` (`id_utilisateurs`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_produits_categories` (`id_categories`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `lignes_commandes`
--
ALTER TABLE `lignes_commandes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message_client`
--
ALTER TABLE `message_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `fk_utilisateurs_commandes` FOREIGN KEY (`id_utilisateurs`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `lignes_commandes`
--
ALTER TABLE `lignes_commandes`
  ADD CONSTRAINT `fk_commandes_lignes_commandes` FOREIGN KEY (`id_commandes`) REFERENCES `commandes` (`id`),
  ADD CONSTRAINT `fk_produits_lignes_commandes` FOREIGN KEY (`id_produits`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `message_client`
--
ALTER TABLE `message_client`
  ADD CONSTRAINT `fk_utilisateurs_message_client` FOREIGN KEY (`id_utilisateurs`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `fk_produits_categories` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
