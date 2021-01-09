-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INT NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,
    `matricula` INT NOT NULL,
UNIQUE INDEX `Usuario.matricula_unique`(`matricula`),

    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estacion` (
    `idEstacion` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEstacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bicicleta` (
    `idBicicleta` INT NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(191) NOT NULL,
    `estacion` INT NOT NULL,

    PRIMARY KEY (`idBicicleta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alquiler` (
    `idAlquiler` INT NOT NULL AUTO_INCREMENT,
    `usuario` INT NOT NULL,
    `bicicleta` INT NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`idAlquiler`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reportar` (
    `idReportar` INT NOT NULL AUTO_INCREMENT,
    `usuario` INT NOT NULL,
    `bicicleta` INT NOT NULL,
    `contenido` VARCHAR(191),
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`idReportar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Foro` (
    `idForo` INT NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191),

    PRIMARY KEY (`idForo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Informacion` (
    `idInformacion` INT NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `contenido` VARCHAR(191),
    `foro` INT NOT NULL,

    PRIMARY KEY (`idInformacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publicacion` (
    `idPublicacion` INT NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `contenido` VARCHAR(191),
    `foro` INT NOT NULL,
    `usuario` INT NOT NULL,

    PRIMARY KEY (`idPublicacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bicicleta` ADD FOREIGN KEY (`estacion`) REFERENCES `Estacion`(`idEstacion`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alquiler` ADD FOREIGN KEY (`bicicleta`) REFERENCES `Bicicleta`(`idBicicleta`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alquiler` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reportar` ADD FOREIGN KEY (`bicicleta`) REFERENCES `Bicicleta`(`idBicicleta`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reportar` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Informacion` ADD FOREIGN KEY (`foro`) REFERENCES `Foro`(`idForo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicacion` ADD FOREIGN KEY (`foro`) REFERENCES `Foro`(`idForo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicacion` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;
