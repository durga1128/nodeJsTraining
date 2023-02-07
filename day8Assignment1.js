
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });

var entries =[{"empId":203},
{"empId":204},
{"empId":205}]

// 103,104,105,107,108 
async function run() {

    try {
        var client = await mongoClient.connect()
        var dbName = client.db("dxcDb");
        var collName = dbName.collection("employees");
        var delObj={"empId":102};
        collName.deleteMany({"empId":103},
        {"empId":104})
        //collName.deleteOne(delObj),
        
        .then((res) => {
          console.log("Response of deletemany: deleted Count:", res.deletedCount);
        })
        .catch((err) => {
            console.log("Error doing the delete many operation", err);
        })
    }
    catch (err) {
        if(res.result.insertedCount >0)
        {
            console.log("Response of Deletemany count", res.result.deletedCount)
        }
        console.log("Error", err)
    }

}
run();
