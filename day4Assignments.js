/* 
Finish all the previous assignments and push it to git
1. Create a module which will take in a file and create a copy of the file
2. Clone a directory and its child files
cloneDirectory(path to a directory); return me the cloned directory name
3. Function to Check for existence of a file
doesFileExist(pathtothefile); return a boolean value
*/

var fs = require("fs");
var path= require("path")

fs.copyFile("Day4TestFile.txt","./Files/Day4TestFile.txt",(err) =>

{
    if(err)
    {
        console.log("Error in copying file")
    }
    else{
    console.log("File Copied Successfully")
    }
})



/* 2. Clone a directory and its child files */
var srcDir="./Files";
fs.mkdir(path.join(srcDir + 'copy'), (err)=>
{
    if(err)
    {
        console.log("Directory Not created")
    }
    else
    {
        console.log("Source Directory created")
        var destDir= srcDir + 'copy';
        fs.cp(srcDir,destDir, { recursive : true }, (err) =>
    {
    if(err)
    {
        console.log("Error in cloning file")
    }
    else
    {
        console.log("Directory copied Successfully")
        return destDir;
    }
    })
    }
})




/* 3. Function to Check for existence of a file
doesFileExist(pathtothefile); return a boolean value
*/

fs.stat("day4TestFile.txt",(err,data)=>
{
    if(err)
    {
        console.log("File Not exists")
        return false;
    }
    else
    {
        console.log("File Exists", data.isFile())
        return data.isFile();
    }
})


