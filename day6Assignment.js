const express=require("express");//module to be installed
const path=require("path");
const bodyParser=require("body-parser");//module to be installed
const morgan=require("morgan");//module to be installed
// logging of the requests -- morgan

    const fs=require("fs");
const { Stream } = require("stream");

const port=3000;
var empArr = [{ empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
{ empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
{ empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
{ empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
{ empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
{ empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
{ empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]
var wStream=fs.createWriteStream(path.join(__dirname,"log","serverLog.txt"),{flags:"a"});


var app=express();
app.use(morgan('combined', {stream: wStream}))      

app.use(bodyParser.urlencoded({extended:false}))    
app.use(bodyParser.json())

    // app.use(morgan('common', {
    //     stream: fs.createWriteStream('./access.log', {flags: 'a'})
    // }));

app.use((request,response,next)=>{
    console.log("Inside the first custom middleware");
    var now=new Date().toString();
    wStream.write(`Request Method : ${request.method}; Request url:${request.url}; Date: ${now}`);
    next();
})

app.use(express.static(path.join(__dirname,"public","files")));
app.use(express.static(path.join(__dirname,"public","images")));

app.use((request,response,next)=>{
    console.log("Inside the first custom middleware");
    if(request.method == "PUT")
    {
        response.send("PUT request received");

    }
    else
    {
        next();
    }
})
app.use((request,response,next)=>{
    console.log("New middleware");
    next();
})

app.use((request,response,next)=>{
    request.userName="asha";
    next();
})

app.use((request,response,next)=>{
    setTimeout(()=>{
        request.password="asha";
    },5000)
    next();
})
app.use((request,response,next)=>{
    console.log("Password",request.password);// asha or ud
  
    next();
})



console.log("Express example");
app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})
