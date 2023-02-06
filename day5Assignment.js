var http = require("http");//core inbuilt module
var fs = require("fs");//core inbuilt module
var path = require("path");//core inbuilt module
var url=require("url");//core inbuilt module
var qs=require("querystring");//core inbuilt module

const port=3000;
var postsArr=[];

var server=http.createServer((request,response)=>{
    console.log("Request object method", request.method);
    console.log("Request object url", request.url);
    var urlObject=url.parse(request.url);
    console.log("Url Object",urlObject);


// ******* Day 5 Assignemnet2 - get /post?postsName=completeassignments ***********

if(request.method == "GET" && urlObject.pathname=="/posts")
{
   
        console.log("Url Object",urlObject.query);
        var qsObject = qs.parse(url.query)
        for(item of Object.keys(qsObject))
        {
            console.log(`${item} : ${qsObject[item]}`)
        }
        var pos=postsArr.findIndex(item => item.postsName == qsObject.postsName)
        console.log(pos)
        if(pos >= 0)
        {
response.end(JSON.stringify(postsArr[pos]));
        }
        else{
response.statusCode=500;
response.end('Data does not exists')
        }
        return;
    }

    if(request.url=="/posts")
    {
        /* ****** Day 5 Assignment ***** */
        if(request.method == "DELETE")
        {
            var postsToBeDeleted="";
            request.on("data",(chunks)=>{
                postsToBeDeleted+=chunks;
            })
            request.on("end",()=>{
                var postsToBeDeletedObj=JSON.parse(postsToBeDeleted);
                var pos=postsArr.findIndex(item => item.postsName == postsToBeUpdatedObj.postsName)
                if(pos >= 0)
                {
                    postsArr.splice(pos,1);
                    response.end(JSON.stringify({msg:"Data Deleted successfully",updatedData:postsArr[pos]}));
                }
                else
                {
                    response.statusCode=401;
                    response.end(JSON.stringify({err:"Posts does not exists to delete"}));
                }
            })
            request.on("errors",(err)=>{
                response.statusCode=500;
                response.end(JSON.stringify({err:err}));
            })
            return;
        }

        
        if(request.method =="PATCH")
        {
            // update an existing record
            //data as part of body section
            var postsToBeUpdated="";
            request.on("data",(chunks)=>{
                postsToBeUpdated+=chunks;
            })
            request.on("end",()=>{
                var postsToBeUpdatedObj=JSON.parse(postsToBeUpdated);
                var pos=postsArr.findIndex(item => item.postsName == postsToBeUpdatedObj.postsName)
                if(pos >= 0)
                {
                    postsArr[pos].status=postsToBeUpdatedObj.status;
                    response.end(JSON.stringify({msg:"Data updated successfully",updatedData:postsArr[pos]}));
                }
                else
                {
                    response.statusCode=401;
                    response.end(JSON.stringify({err:"Posts does not exists to update"}));
                }
            })
            request.on("errors",(err)=>{
                response.statusCode=500;
                response.end(JSON.stringify({err:err}));
            })
            return;
        }
            // select query
            
           
       
        if(request.method == "POST")
        {
            // data is coming in the body section of request
            //insert a new record
            var newPosts="";
            request.on("data",(chunks)=>{
                newPosts+=chunks;
            })
            request.on("end",()=>{
                var newPostsObj=JSON.parse(newPosts);
                var pos=postsArr.findIndex(item => item.postsName == newPostsObj.postsName);
                // pos =-1 if not found or post-0 or positive number if exists
                if(pos ==-1)
                {
                    postsArr.push(newPostsObj);// sync method
                    response.end(JSON.stringify({msg:"New Posts created "}));

                }
                else
                {
                    response.statusCode=401;
                    response.end(JSON.stringify({err:"Posts already exists with the given name"}));
                }
                
              
            })
            request.on("errors",(err)=>{
                // Insertion has failed
                console.log("Error in post request to /posts",err);
                response.statusCode=401;
                response.end(JSON.stringify({err:"Insertion failed"}));
                
            })
            return;

        }
        
    }
    response.end("Response from the server for undeveloped paths");
})

server.listen(port,()=>{
    console.log(`Server has started at port ${port}`);
})




