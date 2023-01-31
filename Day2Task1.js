/* Create a function which returns the squares of all the elements without using the map method */

var arrelement = [10,20,30,40];
var res=[];
function squareofArray(arrelement)
    {
        
        for(var i=0; i< arrelement.length; i++)
        {
            res.push(Math.pow(arrelement[i],2));
        }
    }
squareofArray(arrelement);
console.log("******************************");
    console.log("Square of the array " + res);
    console.log("******************************");

/****** Task 2 */
/* function which takes in a string which holds a phoneNumber and returns the masked version */

var phoneNo="1234567891";
//Output : 12345***91
var regex = /\d/g;
var res1="";
function maskNumber(phoneNo)
{
     var firstSet= phoneNo.substring(0,5);
    var maskSet= phoneNo.substring(5,8);
    var secondSet= phoneNo.substring(8,10);
    var maskString ='*';
    res1 = firstSet + maskSet.replace(regex,'*')+secondSet ;
 
     }

 maskNumber(phoneNo);
 console.log(res1);
   


    
