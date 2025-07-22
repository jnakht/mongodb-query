


// db.massiveDataAgain.find({"_id" : ObjectId("654dbf20ac03b4ef85f27a88")}).explain("executionStats")
// db.massiveDataAgain.find({"email" : "gofffrye@flexigen.com"}).explain("executionStats")


db.massiveDataAgain.createIndex({email : 1}) // email : 1, means ascending order, email : -1 means descending 





















