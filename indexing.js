



// db.test.find({ email : "gofffrye@flexigen.com"}).explain("executionStats")



// db.massiveData.createIndex({email : 1});
// db.massiveData.dropIndex({email : 1})

// db.massiveData.find({})

// db.massiveData.createIndex({about : "text"})

db.massiveData.find({ $text : { $search : "dolor"}})











