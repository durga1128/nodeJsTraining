/* Read from 3 files and add all the 
contents of 3 files into file4 using writeFile and readFile */

const fs=require("fs");
var myData1,myData2,myData3,myData4;

fs.readFile("./Files/File1.txt",function(err,data){
    console.log("File 1 read operation complete");
    if(err)
    {
        console.log("Error reading file 2",err);
    }
    else
    {
        myData1=data.toString()
        console.log("Successfully read the file 1 with the data", data.toString());
        
    }

fs.readFile("./Files/File2.txt",function(err,data){
    console.log("File read operation complete of file2");
    if(err)
    {
        console.log("Error reading file 1",err);
    }
    else
    {
        myData2=data.toString()
        console.log("Successfully read the file 2 with the data");
        
    }


fs.readFile("./Files/File3.txt",function(err,data){
    console.log("File read operation complete of file3");
    if(err)
    {
        console.log("Error reading file 1",err);
    }
    else
    {
        myData3=data.toString()
        console.log("Successfully read the file 3 with the data");
    }

myData4=myData1+ "," + myData2 +"," + myData3
fs.writeFile("./File4.txt",myData4,(err,data)=>
{
    if(err)
    {
        console.log("Error in writing File")
}
else
{
    console.log("File Write Successfully")
}
            })
         })
    })
})