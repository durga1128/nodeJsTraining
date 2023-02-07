const express=require("express");//module to be installed
const path=require("path");
const bodyParser=require("body-parser");//module to be installed

const morgan=require("morgan");//module to be installed
// logging of the requests -- morgan


const fs=require("fs");

const port=3000;
var prdArr = [{ productId: 101, productName: "Asha", quantity: 2, deptId: "D1" },
{ productId: 102, productName: "Gaurav", quantity: 2000, deptId: "D1" },
{ productId: 103, productName: "Karan", quantity: 2000, deptId: "D2" },
{ productId: 104, productName: "Kishan", quantity: 3000, deptId: "D1" },
{ empproductIdId: 105, productName: "Keshav", quantity: 3500, deptId: "D2" },
{ productId: 106, productName: "Pran", quantity: 4000, deptId: "D3" },
{ productId: 107, productName: "Saurav", quantity: 3800, deptId: "D3" }]
var wStream=fs.createWriteStream(path.join(__dirname,"log","serverLog.txt"),{flags:"a"});


var app=express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/products",(request,response)=>{
    // return an empArr
    // implicitly set the content-type 
    // no stringify required for sending json data
    response.send(prdArr);
})

app.post("/products/",(request,response)=>{
    var insertArr=request.body;
    var lenOfArr= prdArr.length;
    if(insertArr[0] !=null)
    {
        prdArr[lenOfArr] = insertArr[0];
        empArr.push(request.body);   
        response.send("Product Details added successfully")     
    }     
    else
    {
        response.statusCode=401;
        response.send("Product Details Not added")
    }
    
  })

  
  app.patch("/products/",(request,response)=>{
    var prdUpdate = request.body;
    var pos = prdArr.findIndex(item => item.productId == prdUpdate[0].prdUpdate) 
    if(pos >=0)  
    {
        prdArr[pos]= prdUpdate;   
        empArr.push(request.body);
        response.send("Product Details added successfully")  
    }
    else{
        response.statusCode=401;
        response.send("Error in product detail update") 
    }
    
  })


app.delete("/products",(request,response)=>{
    var deleteObj = request.body;

  var pos = prdArr.findIndex(item => item.productId == deleteObj[0].prdUpdate) 
    if(pos >=0)  
    {
           
        prdArr.splice(pos,1);
        response.send("Product Details delted successfully")  
    }
    else{
        response.statusCode=401;
        response.send("Error in product detail delete") 
    }
})  


console.log("Express example");
app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})
