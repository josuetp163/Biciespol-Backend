-- DropForeignKey
ALTER TABLE `alquiler` DROP FOREIGN KEY `alquiler_ibfk_1`;

-- DropForeignKey
ALTER TABLE `alquiler` DROP FOREIGN KEY `alquiler_ibfk_2`;

-- DropForeignKey
ALTER TABLE `bicicleta` DROP FOREIGN KEY `bicicleta_ibfk_1`;

-- DropForeignKey
ALTER TABLE `informacion` DROP FOREIGN KEY `informacion_ibfk_1`;

-- DropForeignKey
ALTER TABLE `publicacion` DROP FOREIGN KEY `publicacion_ibfk_1`;

-- DropForeignKey
ALTER TABLE `publicacion` DROP FOREIGN KEY `publicacion_ibfk_2`;

-- DropForeignKey
ALTER TABLE `reportar` DROP FOREIGN KEY `reportar_ibfk_1`;

-- DropForeignKey
ALTER TABLE `reportar` DROP FOREIGN KEY `reportar_ibfk_2`;

-- AlterTable
ALTER TABLE `alquiler` ADD COLUMN     `estado` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `reportar` ADD COLUMN     `estado` BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE `Alquiler` ADD FOREIGN KEY (`bicicleta`) REFERENCES `Bicicleta`(`idBicicleta`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alquiler` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bicicleta` ADD FOREIGN KEY (`estacion`) REFERENCES `Estacion`(`idEstacion`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Informacion` ADD FOREIGN KEY (`foro`) REFERENCES `Foro`(`idForo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicacion` ADD FOREIGN KEY (`foro`) REFERENCES `Foro`(`idForo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicacion` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reportar` ADD FOREIGN KEY (`bicicleta`) REFERENCES `Bicicleta`(`idBicicleta`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reportar` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;
