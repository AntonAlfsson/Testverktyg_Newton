-- MySQL Script generated by MySQL Workbench
-- Wed Feb 22 13:13:31 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema testverktyg
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema testverktyg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `testverktyg` DEFAULT CHARACTER SET utf8 ;
USE `testverktyg` ;

-- -----------------------------------------------------
-- Table `testverktyg`.`Person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `testverktyg`.`Person` (
  `pNr` VARCHAR(12) NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `roll` VARCHAR(45) NOT NULL,
  `lösen` VARCHAR(45) NULL DEFAULT NULL,
  `klass` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`pNr`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `testverktyg`.`Test`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `testverktyg`.`Test` (
  `idTest` INT(11) NOT NULL,
  `Title` VARCHAR(45) NOT NULL,
  `start` DATETIME NULL DEFAULT NULL,
  `stop` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idTest`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `testverktyg`.`Question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `testverktyg`.`Question` (
  `idQuestion` INT(11) NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(45) NOT NULL,
  `Question` MEDIUMTEXT NOT NULL,
  `HTML-element` MEDIUMTEXT NULL DEFAULT NULL,
  `img` MEDIUMTEXT NULL DEFAULT NULL,
  `type` VARCHAR(45) NOT NULL,
  `Test_idTest` INT(11) NOT NULL,
  PRIMARY KEY (`idQuestion`),
  INDEX `fk_Question_Test_idx` (`Test_idTest` ASC),
  CONSTRAINT `fk_Question_Test`
    FOREIGN KEY (`Test_idTest`)
    REFERENCES `testverktyg`.`Test` (`idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `testverktyg`.`QuestionOption`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `testverktyg`.`QuestionOption` (
  `idQuestionOption` INT(11) NOT NULL AUTO_INCREMENT,
  `QuestionOption` VARCHAR(45) NOT NULL,
  `trueFalse` TINYINT(1) NOT NULL,
  `Question_idQuestion` INT(11) NOT NULL,
  PRIMARY KEY (`idQuestionOption`),
  INDEX `fk_Option_Question1_idx` (`Question_idQuestion` ASC),
  CONSTRAINT `fk_Option_Question1`
    FOREIGN KEY (`Question_idQuestion`)
    REFERENCES `testverktyg`.`Question` (`idQuestion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `testverktyg`.`Response`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `testverktyg`.`Response` (
  `idResponse` INT(11) NOT NULL AUTO_INCREMENT,
  `response` VARCHAR(45) NOT NULL,
  `Person_pNr` VARCHAR(12) NOT NULL,
  `Question_idQuestion1` INT(11) NOT NULL,
  PRIMARY KEY (`idResponse`, `Question_idQuestion1`),
  INDEX `fk_Response_Person1_idx` (`Person_pNr` ASC),
  INDEX `fk_Response_Question1_idx` (`Question_idQuestion1` ASC),
  CONSTRAINT `fk_Response_Question1`
    FOREIGN KEY (`Question_idQuestion1`)
    REFERENCES `testverktyg`.`Question` (`idQuestion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `testverktyg`.`Test_has_Person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `testverktyg`.`Test_has_Person` (
  `Test_idTest` INT(11) NOT NULL,
  `Person_pNr` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`Test_idTest`, `Person_pNr`),
  INDEX `fk_Test_has_Person_Person1_idx` (`Person_pNr` ASC),
  INDEX `fk_Test_has_Person_Test1_idx` (`Test_idTest` ASC),
  CONSTRAINT `fk_Test_has_Person_Person1`
    FOREIGN KEY (`Person_pNr`)
    REFERENCES `testverktyg`.`Person` (`pNr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Test_has_Person_Test1`
    FOREIGN KEY (`Test_idTest`)
    REFERENCES `testverktyg`.`Test` (`idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
