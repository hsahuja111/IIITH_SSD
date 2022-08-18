use COMPANY;
SELECT 
    dep.Mgr_ssn,count(*) as 'No of Dependents',dep.Dnumber 
FROM
   (SELECT 
                    Dnumber
                FROM
                    DEPT_LOCATIONS 
                GROUP BY Dnumber
                HAVING COUNT(Dlocation) >= 2)  dl 
	INNER JOIN DEPARTMENT dep ON dl.Dnumber = dep.Dnumber
    INNER JOIN DEPENDENT dt ON dt.Essn = dep.Mgr_ssn
	group by dep.Mgr_ssn,dep.Dnumber;

