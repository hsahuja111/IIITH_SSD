
USE `CUSTOMER_DB`;
DROP procedure IF EXISTS `CUSTOMER_DB`.`2022201049_Q4`;
;

DELIMITER $$
USE `CUSTOMER_DB`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `2022201049_Q4`()
BEGIN
	declare ename varchar(40);
	declare city varchar(35); 
    declare country varchar(20); 
    declare egrade decimal(12,2);
    declare v_finished integer default 0;
	declare c1 cursor for select CUST_NAME, CUST_CITY,CUST_COUNTRY,GRADE from customer where AGENT_CODE like 'A00%';
	declare continue handler for NOT FOUND set v_finished=1;
	open c1;
	get_emp: LOOP
		fetch c1 into ename,city,country,egrade ;
		if v_finished=1 then 
			leave get_emp;
		end if;
		select ename,city,country,egrade;
	END LOOP get_emp;
	close c1;
	
END$$

DELIMITER ;
;


call CUSTOMER_DB.2022201049_Q4();
