/* find the highest salry in the array of object */

var arrObj=[ {empId:101,empName:"Sara",Salary:"10000"},
    {empId:102,empName:"Keshav",Salary:"30000"},
    {empId:103,empName:"Saurabh",Salary:"40000"},
    {empId:104,empName:"Giri",Salary:"5000"},
    {empId:105,empName:"Saraansh",Salary:"60000"},
    {empId:106,empName:"Puja",Salary:"45000"},
    {empId:107,empName:"Neha",Salary:"55000"}]

    var highSalaryObj= arrObj.sort((a,b) => a.Salary >b.Salary ? -1 : +1)[0]

    console.log("High Salary :", highSalaryObj);