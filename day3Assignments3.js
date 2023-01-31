// Create a module -- some functions
/* . A function with arrOfObj as a parameter, searchSalary ; return pos of firstElement which has a particular salary -- arr.findIndex
function f1(arrObj,searchSalary):number
2. Add an obj at a particular index position in the arrOfObj
function addEmp(arrObj,emp,position)=> boolean
3. Remove an obj from the arrOfObj
function removeEmp(arrObj,emp)=> boolean
4. Get a particule emp details from arrObj
function getEmpDetails(arrObj,empId)=> Obj */
var arrObj=[ {empId:101,empName:"Sara",Salary:"10000"},
    {empId:102,empName:"Keshav",Salary:"30000"},
    {empId:103,empName:"Saurabh",Salary:"40000"},
    {empId:104,empName:"Giri",Salary:"5000"},
    {empId:105,empName:"Saraansh",Salary:"60000"},
    {empId:106,empName:"Puja",Salary:"45000"},
    {empId:107,empName:"Neha",Salary:"55000"}]
var f1= function (arrObj,searchSalary)
{
    for(let i=0;i<arrObj.length;i++)
    {
       
                if (arrObj[i].Salary === searchSalary )
        {
            return arrObj[i].empName;
           // break;
        }
    }
    //return -1;
}
console.log ("Emp Name for the Salary : " , f1(arrObj,"55000"))

/* 2. Add an obj at a particular index position in the arrOfObj
function addEmp(arrObj,emp,position)=> boolean */

var empAddObj={empId:108,empName:"test",Salary:"2323"}
function addEmp(arrObj,emp,position)
{
    for(let i=0;i<arrObj.length;i++)
    {
       
                if (i== position)
        {
            arrObj.splice(2,0,empAddObj)
           return arrObj;
        }
}
}
console.log("add emp obj in a position :", addEmp(arrObj,empAddObj,2))


/* 3. Remove an obj from the arrOfObj
function removeEmp(arrObj,emp)=> boolean */

var empRemoveObj={empId:102,empName:"Keshav",Salary:"30000"}
function removeEmp(arrObj,empRemoveObj)
{
    for(let i=0;i<arrObj.length;i++)
    {
        
          if (arrObj[i].empId==empRemoveObj.empId)
        {
            arrObj.splice(i,1)
             return arrObj;
        }
}
}
console.log("Remove emp obj :", removeEmp(arrObj,empRemoveObj))

/* 4. Get a particule emp details from arrObj
function getEmpDetails(arrObj,empId)=> Obj */
function getEmpDetails(arrObj,empId)
{
    for(let i=0;i<arrObj.length;i++)
    {
        
          if (arrObj[i].empId===empId)
        {
            return arrObj[i]
        }
        else{
            console.log("No Emp record Found")
            break;
        }
}
}
console.log("Get Employee Details of Emp Id :", getEmpDetails(arrObj,100))