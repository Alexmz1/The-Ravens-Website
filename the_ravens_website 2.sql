-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : lun. 04 sep. 2023 à 07:15
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
(2, 'T-shirt'),
(3, 'Accessoires'),
(4, 'Vestes'),
(5, 'Pantalons'),
(6, 'Hoodies'),
(7, 'Shorts');

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

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id`, `date_commande`, `total`, `id_utilisateurs`) VALUES
(1, '2023-08-31 13:14:10.269000', 39, NULL),
(2, '2023-08-31 13:25:46.197000', 150, NULL),
(3, '2023-08-31 13:27:18.363000', 78, NULL),
(4, '2023-09-01 15:38:56.507000', 135, NULL);

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
  `description` varchar(1024) DEFAULT NULL,
  `photo_produit` varchar(255) DEFAULT NULL,
  `id_categories` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `prix`, `description`, `photo_produit`, `id_categories`) VALUES
(1, 'T-shirt Carhartt Chase', 39, 'Le Chase T-Shirt pour femme est confectionné en jersey de coton organique peigné. Il fait partie de notre Programme Chase qui se compose des essentiels en jersey et comporte un motif « C » de Carhartt sur la poitrine à gauche.', 'https://i1.adis.ws/i/carhartt_wip/I026391_00F_XX-ST-01/s-s-chase-t-shirt-black-gold-1691.png?$pdp_02$\r\n', 2),
(2, 'Mystery Rug', 150, 'The Mystery Rug features a seasonal motif in hand-tufted acrylic pile, laid on a silicone backing. It is further detailed with woven branding.', 'https://i1.adis.ws/i/carhartt_wip/I032502_HZ_XX-ST-01/mystery-rug-hamilton-brown-241.png?$pdp_02$', 3),
(4, 'OG Active Liner', 150, 'The OG Active Liner has a silhouette inspired by that of the OG Active Jacket and is made of heavyweight polyester pile. While some iterations of the liner feature an allover block color, others have a jacquard shell depicting a seasonal motif. Inside, the item is lined with mesh in the body and nylon taffeta in the sleeves. The liner also has an adjustable hood, as well as a rib-knit bottom band and cuffs. A kangaroo pocket and woven Square Label on the front complete the design.', 'https://i1.adis.ws/i/carhartt_wip/I032301_1SZ_XX-ST-01/og-active-liner-baru-jacquard-black-11922.png?$pdp_02$', 4),
(6, 'Terrell SK Short', 55, 'Le short \'Terrell Single Knee\' est confectionné en toile Terrell, un tissu hickory semi-épais à rayures. De coupe ample et taille basse, il dispose de poches à outils et d\'une boucle porte-marteau.', 'https://i1.adis.ws/i/carhartt_wip/I032109_1ON_02-ST-01/terrell-sk-short-bleach-wax-rinsed-1559.png?$pdp_02$', 7),
(7, 'Canvas Graphic Tote', 40, 'Le tote bag \'Canvas Graphic\' est conçu dans notre toile robuste Dearborn de 12 oz (340 g). Non doublé, il dispose d\'une poche intérieure amovible. L\'ensemble affiche un imprimé graphique de saison.', 'https://i1.adis.ws/i/carhartt_wip/I031597_1XI_XX-ST-03/canvas-graphic-tote-buddy-print-natural-1704.png?$pdp_02$', 3),
(8, 'Mac Icy Lake Puzzle', 25, 'The Sulo For Carhartt WIP Ollie Mac Icy Lake Puzzle is made in collaboration with the French brand Sulo, who specialize in limited edition puzzles created from sustainable materials. Made in France, the item features an image by the artist Oliver Macdonald Oulds and is composed of 1000 puzzle pieces.', 'https://i1.adis.ws/i/carhartt_wip/I032713_1X8_XX-ST-01/ollie-mac-icy-lake-puzzle-multicolor-fw23-71.png?$pdp_02$', 3),
(9, 'Chase Sweat Pant', 85, 'Le Chase Sweat Pant est réalisé à partir d’un mélange brossé de coton et de polyester pour plus de chaleur et de confort. Ce pantalon est également doté d’une bande réglable à la taille ainsi que d’une poche arrière et il est subtilement agrémenté d’une broderie prenant la forme du logo « C ». Coupe ample.', 'https://i1.adis.ws/i/carhartt_wip/I028284_00F_XX-ST-01/chase-sweat-pant-black-gold-1249.png?$pdp_02$', 5),
(11, 'Hooded Chase', 85, 'Le sweat à capuche Hooded Chase Sweat est confectionné dans un jersey lourd de coton et polyester. Il fait partie de notre Chase Program, qui regroupe des articles en jersey et comporte un motif « C » de Carhartt sur la manche gauche. Il inclut également des poignets et un ourlet côtelés, une capuche avec cordon et une poche kangourou.', 'https://i1.adis.ws/i/carhartt_wip/I026384_00F_XX-ST-01/hooded-chase-sweatshirt-black-gold-1727.png?$pdp_02$', 6),
(18, 'S/S Warm Embrace T-Shirt', 45, 'The S/S Warm Embrace T-Shirt is made in a loose fit from midweight organic cotton jersey. It is detailed with a seasonal graphic print on the chest.', 'https://i1.adis.ws/i/carhartt_wip/I032390_02_XX-ST-01/s-s-warm-embrace-t-shirt-white-556.png?$pdp_02$', 2);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
