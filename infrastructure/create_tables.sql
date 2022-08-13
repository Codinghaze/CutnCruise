CREATE SCHEMA `customers` ;

CREATE TABLE `customers`.`Customers` (
  `idCustomers` INT NOT NULL AUTO_INCREMENT,
  `nameCustomers` NVARCHAR(45) NOT NULL,
  `phoneCustomers` NVARCHAR(12) NOT NULL,
  `emailCustomers` NVARCHAR(45) NOT NULL,
  `activeCustomers` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idCustomers`),
  UNIQUE INDEX `idCustomers_UNIQUE` (`idCustomers` ASC) VISIBLE
  );
