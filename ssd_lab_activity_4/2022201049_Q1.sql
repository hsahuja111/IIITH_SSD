
DROP procedure IF EXISTS `2022201049_Q1`;
;

DELIMITER $$
USE `COMPANY`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `2022201049_Q1`(IN A INT,IN B INT,OUT SUM int)
BEGIN
   SELECT (A+B) into SUM;
END$$

DELIMITER ;


set @SUM = 0;
call 2022201049_Q1(20, 40, @SUM);
select @SUM;





























