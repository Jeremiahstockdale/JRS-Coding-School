var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    mydb.createCollection("peppers",
        (err, res) => {
            if (err) {
                throw err;
            }

            console.log("Collection Created!")
            db.close();
        }
    )
})