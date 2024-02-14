-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2024 a las 22:27:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `challenge_dh_aspirantes`
--
CREATE DATABASE IF NOT EXISTS `challenge_dh_aspirantes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `challenge_dh_aspirantes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aspirantes`
--

CREATE TABLE `aspirantes` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `dni` int(11) NOT NULL,
  `rol` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `perfiil_linkedin` varchar(50) NOT NULL,
  `fecha_nacimiento` datetime NOT NULL,
  `sexo` varchar(50) NOT NULL,
  `imagen_perfil` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `usuario_creacion` int(11) NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `usuario_modificacion` int(11) NOT NULL,
  `fecha_eliminacion` datetime NOT NULL,
  `usuario_eliminacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aspirantes_profesiones`
--

CREATE TABLE `aspirantes_profesiones` (
  `id` int(11) NOT NULL,
  `id_aspirante` int(11) NOT NULL,
  `id_profesion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `usuario_creacion` int(11) NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `usuario_modificacion` int(11) NOT NULL,
  `fecha_eliminacion` datetime NOT NULL,
  `usuario_eliminacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesiones`
--

CREATE TABLE `profesiones` (
  `id` int(11) NOT NULL,
  `nombre_profesion` varchar(50) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `usuario_creacion` int(11) NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `usuario_modificacion` int(11) NOT NULL,
  `fecha_eliminacion` datetime NOT NULL,
  `usuario_eliminacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aspirantes`
--
ALTER TABLE `aspirantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `aspirantes_profesiones`
--
ALTER TABLE `aspirantes_profesiones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_aspirante` (`id_aspirante`),
  ADD KEY `id_profesion` (`id_profesion`);

--
-- Indices de la tabla `profesiones`
--
ALTER TABLE `profesiones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aspirantes_profesiones`
--
ALTER TABLE `aspirantes_profesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `profesiones`
--
ALTER TABLE `profesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aspirantes_profesiones`
--
ALTER TABLE `aspirantes_profesiones`
  ADD CONSTRAINT `aspirantes_profesiones_ibfk_1` FOREIGN KEY (`id_aspirante`) REFERENCES `aspirantes` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `aspirantes_profesiones_ibfk_2` FOREIGN KEY (`id_profesion`) REFERENCES `profesiones` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
