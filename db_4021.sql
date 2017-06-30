-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Host: i5.liveserver.pl
-- Czas generowania: 30 Cze 2017, 15:11
-- Wersja serwera: 10.0.29-MariaDB-0+deb8u1
-- Wersja PHP: 5.6.30-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `db_4021`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `idBook` int(11) NOT NULL,
  `title` text,
  `cover` text,
  `idCat` int(11) DEFAULT NULL,
  `author` text,
  `description` text,
  `active` int(11) DEFAULT NULL,
  `visits` int(11) DEFAULT NULL,
  `recommended` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `books`
--

INSERT INTO `books` (`idBook`, `title`, `cover`, `idCat`, `author`, `description`, `active`, `visits`, `recommended`, `createdAt`, `updatedAt`) VALUES
(1, 'Testowa ksiazka', 'no-cover.jpg', 0, 'Testowy autor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 0, 1, '2017-06-27 00:26:23', '2017-06-28 06:44:36'),
(2, 'Testowa ksiazka', 'no-cover.jpg', 0, 'Testowy autor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 0, 1, '2017-06-27 00:28:27', '2017-06-28 06:44:26'),
(3, 'Brulion zabaw', '13-1498632246703.jpg', 7, 'Opracowanie zbiorowe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 0, 1, '2017-06-27 00:29:17', '2017-06-28 06:44:08'),
(4, 'Kolorowy rok.', '12-1498632198161.jpg', 9, 'Opracowanie zbiorowe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 2, 1, '2017-06-27 00:29:30', '2017-06-28 06:50:14'),
(9, 'Nowa Jadlonomia.', '11-1498632156081.jpg', 8, 'Dymek Marta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 1, 1, '2017-06-27 00:31:24', '2017-06-28 06:50:13'),
(10, 'Prokurator', '10-1498632110619.jpg', 5, 'Swist Paulina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 2, 1, '2017-06-27 12:04:34', '2017-06-28 07:05:10'),
(11, 'Nela i tajemnice oceanów ', '9-1498631878512.jpg', 7, 'Nela', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 0, 0, '2017-06-27 12:05:35', '2017-06-28 06:40:00'),
(12, 'Za zamknietymi drzwiami', '8-1498631850401.jpg', 5, 'Paris B.A.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 0, 0, '2017-06-27 12:08:07', '2017-06-28 06:40:39'),
(13, '13 powodów', '7-1498631811408.jpg', 6, 'Asher Jay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 2, 0, '2017-06-27 13:46:17', '2017-06-28 07:05:02'),
(14, 'Wilcze leze', '6-1498631781508.jpg', 3, 'Pilipiuk Andrzej', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 1, 1, '2017-06-27 13:46:17', '2017-06-28 09:23:30'),
(15, 'Zapisane w wodzie', '5-1498631736456.jpg', 5, 'Hawkins Paula', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 2, 1, '2017-06-27 13:46:17', '2017-06-28 06:50:00'),
(16, 'Ponad wszystko', '4-1498631701843.jpg', 6, 'Yoon Nicola', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 0, 0, '2017-06-27 16:13:18', '2017-06-28 06:39:17'),
(17, 'Lokatorka', '3-1498631672553.jpg', 5, 'Delaney JP', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 1, NULL, '2017-06-27 17:19:14', '2017-06-30 12:15:57'),
(18, 'Metro 2033', '2-1498631587803.jpg', 3, 'Dmitrij Gluchowski', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 1, NULL, '2017-06-27 22:41:25', '2017-06-28 06:50:23'),
(19, 'Testowa ksiazka 2', 'no-cover.jpg', 10, 'testowy', 'testowy', 0, 2, NULL, '2017-06-28 09:25:16', '2017-06-28 09:26:49');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `idCat` int(11) NOT NULL,
  `name` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `categories`
--

INSERT INTO `categories` (`idCat`, `name`, `createdAt`, `updatedAt`) VALUES
(0, 'Inne', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Fantastyka', '2017-06-28 06:13:55', '2017-06-28 06:13:55'),
(5, 'Kryminal', '2017-06-28 06:38:44', '2017-06-28 06:38:44'),
(6, 'Dla mlodziezy', '2017-06-28 06:38:53', '2017-06-28 06:38:53'),
(7, 'Popularno-naukowe', '2017-06-28 06:39:00', '2017-06-28 06:39:00'),
(8, 'Kucharskie', '2017-06-28 06:42:11', '2017-06-28 06:42:11'),
(9, 'Hobby', '2017-06-28 06:42:54', '2017-06-28 06:42:54'),
(10, 'Testowa', '2017-06-28 09:24:15', '2017-06-28 09:24:15');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `lends`
--

CREATE TABLE IF NOT EXISTS `lends` (
  `idLend` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idBook` int(11) DEFAULT NULL,
  `returnDate` datetime DEFAULT NULL,
  `returned` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `lends`
--

INSERT INTO `lends` (`idLend`, `idUser`, `idBook`, `returnDate`, `returned`, `createdAt`, `updatedAt`) VALUES
(3, 5, 1, '2018-03-27 10:20:00', '2017-06-30 10:09:42', '2017-06-28 00:20:00', '2017-06-30 12:09:42'),
(4, 5, 17, '2017-07-28 03:43:58', '2017-06-30 10:08:18', '2017-06-28 05:43:58', '2017-06-30 12:08:18'),
(5, 5, 9, '2017-08-28 01:49:10', '2017-06-22 00:00:00', '2017-06-28 05:49:10', '2017-06-30 11:24:37'),
(6, 5, 4, '2014-08-28 01:55:44', '2017-06-30 10:08:43', '2017-06-28 05:55:44', '2017-06-30 12:08:43'),
(7, 5, 16, '2017-08-28 01:59:26', '2017-06-30 10:09:40', '2017-06-28 05:59:26', '2017-06-30 12:09:40'),
(8, 25, 4, '2017-10-27 22:32:55', NULL, '2017-06-28 06:32:55', '2017-06-28 06:33:29'),
(9, 25, 13, '2017-07-28 05:04:42', NULL, '2017-06-28 07:04:42', '2017-06-28 07:04:42'),
(10, 39, 15, '2017-08-28 05:17:21', NULL, '2017-06-28 09:17:21', '2017-06-28 09:18:37'),
(11, 5, 17, '2017-08-30 08:16:49', '2017-06-30 10:17:53', '2017-06-30 12:16:49', '2017-06-30 12:17:53');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
  `idPhoto` int(11) NOT NULL,
  `path` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `photos`
--

INSERT INTO `photos` (`idPhoto`, `path`, `createdAt`, `updatedAt`) VALUES
(6, 'no-cover.jpg', '2017-06-27 17:18:30', '2017-06-27 17:18:30'),
(7, 'no-cover.jpg', '2017-06-27 17:18:50', '2017-06-27 17:18:50'),
(8, 'no-cover.jpg', '2017-06-27 18:30:09', '2017-06-27 18:30:09'),
(9, 'no-cover.jpg', '2017-06-27 18:31:31', '2017-06-27 18:31:31'),
(10, 'no-cover.jpg', '2017-06-27 18:32:00', '2017-06-27 18:32:00'),
(11, 'no-cover.jpg', '2017-06-27 18:33:14', '2017-06-27 18:33:14'),
(12, 'no-cover.jpg', '2017-06-27 22:11:52', '2017-06-27 22:11:52'),
(13, 'no-cover.jpg', '2017-06-27 22:11:58', '2017-06-27 22:11:58'),
(14, 'no-cover.jpg', '2017-06-27 22:12:07', '2017-06-27 22:12:07'),
(15, 'no-cover.jpg', '2017-06-27 22:22:00', '2017-06-27 22:22:00'),
(16, 'no-cover.jpg', '2017-06-27 22:22:11', '2017-06-27 22:22:11'),
(17, 'no-cover.jpg', '2017-06-27 22:23:14', '2017-06-27 22:23:14'),
(18, 'no-cover.jpg', '2017-06-27 22:24:06', '2017-06-27 22:24:06'),
(19, 'no-cover.jpg', '2017-06-27 22:24:08', '2017-06-27 22:24:08'),
(20, 'no-cover.jpg', '2017-06-27 22:41:15', '2017-06-27 22:41:15'),
(21, '0-1498603283332.jpg', '2017-06-27 22:41:23', '2017-06-27 22:41:23'),
(22, 'no-cover.jpg', '2017-06-27 23:16:25', '2017-06-27 23:16:25'),
(23, 'no-cover.jpg', '2017-06-27 23:25:24', '2017-06-27 23:25:24'),
(24, 'no-cover.jpg', '2017-06-27 23:33:08', '2017-06-27 23:33:08'),
(25, 'no-cover.jpg', '2017-06-28 00:22:22', '2017-06-28 00:22:22'),
(26, 'no-cover.jpg', '2017-06-28 00:48:59', '2017-06-28 00:48:59'),
(27, 'no-cover.jpg', '2017-06-28 00:49:07', '2017-06-28 00:49:07'),
(28, 'no-cover.jpg', '2017-06-28 05:41:21', '2017-06-28 05:41:21'),
(29, 'no-cover.jpg', '2017-06-28 05:47:57', '2017-06-28 05:47:57'),
(30, 'no-cover.jpg', '2017-06-28 06:26:21', '2017-06-28 06:26:21'),
(31, 'no-cover.jpg', '2017-06-28 06:28:40', '2017-06-28 06:28:40'),
(32, 'no-cover.jpg', '2017-06-28 06:28:42', '2017-06-28 06:28:42'),
(33, 'no-cover.jpg', '2017-06-28 09:24:38', '2017-06-28 09:24:38'),
(34, '0-1498641906690.jpg', '2017-06-28 09:25:06', '2017-06-28 09:25:06');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` text,
  `password` text,
  `type` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `session_token` varchar(255) DEFAULT NULL,
  `session_expire_timestemp` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `type`, `active`, `session_token`, `session_expire_timestemp`, `createdAt`, `updatedAt`) VALUES
(5, 'test@mail.com', 'test', 1, 1, 'kFxMHJEOQqUtbtXoHJcDGJGB3lIMl9gA', 1499422592, '2017-06-23 22:41:21', '2017-06-30 10:16:31'),
(8, 'wlad.kopytko@op.pl', 'haslo', 3, 1, 'vutJHkNR0zq099jBiuvlfDBksmntCGXA', 1499066224, '2017-06-26 07:17:04', '2017-06-27 23:15:48'),
(25, 'wdefr@wp.pl', 'lol', 2, 1, 'zkvivas39YEj1taG1vDYA7Zcrz726RTu', 1499233389, '2017-06-26 10:54:29', '2017-06-28 05:43:09'),
(28, 'efr@wp.pl', 'lol', 3, 1, 'vHxN3KYLrSEQqfhAOBPfuAF9uKO3zAjQ', 1499156759, '2017-06-27 08:25:59', '2017-06-27 23:15:47'),
(29, 'volfram@gmail.com', 'test', 1, 1, 'yVcUpWyZ5rb8dgZj4qM0PCIh5ilogzr6', 1499166700, '2017-06-27 11:11:06', '2017-06-27 23:15:42'),
(33, 'test2@mail.com', 'test', 2, 0, '3EgzZMyFVf5C3smArTh9V1zYEqtmTtUt', 1499180645, '2017-06-27 15:03:49', '2017-06-28 09:20:39'),
(38, 'test3@mail.com', 'test', 2, 1, 'dcEKEgxeNQ3RtTVwlcl4DUNL1ELipzs7', 1499189863, '2017-06-27 17:37:43', '2017-06-28 09:23:12'),
(39, 'test5@mail.com', 'test', 1, 0, 'cGqmKrYHBQpIJcKBuMM4GPF2mcuZjHQK', 1499246223, '2017-06-28 09:17:02', '2017-06-28 09:23:20'),
(40, 'test6@mail.com', 'test', 1, 1, '4ePiI3BsLxDF2G6r7WXRwAOTA8PAwoKK', 1499432150, '2017-06-30 12:27:17', '2017-06-30 12:55:50');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`idBook`),
  ADD KEY `idCat` (`idCat`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCat`);

--
-- Indexes for table `lends`
--
ALTER TABLE `lends`
  ADD PRIMARY KEY (`idLend`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idBook` (`idBook`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`idPhoto`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `books`
--
ALTER TABLE `books`
  MODIFY `idBook` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT dla tabeli `categories`
--
ALTER TABLE `categories`
  MODIFY `idCat` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT dla tabeli `lends`
--
ALTER TABLE `lends`
  MODIFY `idLend` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT dla tabeli `photos`
--
ALTER TABLE `photos`
  MODIFY `idPhoto` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=41;
--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`idCat`) REFERENCES `categories` (`idCat`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `lends`
--
ALTER TABLE `lends`
  ADD CONSTRAINT `lends_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `lends_ibfk_2` FOREIGN KEY (`idBook`) REFERENCES `books` (`idBook`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
