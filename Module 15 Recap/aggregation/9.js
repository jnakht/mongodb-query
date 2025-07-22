


// db.massiveDataAgain.find({"_id" : ObjectId("654dbf20ac03b4ef85f27a88")}).explain("executionStats")
// db.massiveDataAgain.find({"email" : "gofffrye@flexigen.com"}).explain("executionStats")


// db.massiveDataAgain.createIndex({email : 1}) // email : 1, means ascending order, email : -1 means descending 

// db.massiveDataAgain.dropIndex({email : 1})



//boro kono text field thakle tar upor search index kora hoy jate ekta word kon doc e ace segula doc ber korbo, faster hoy
// db.massiveDataAgain.createIndex({ about : 'text'})

// ekhon search korbo kon kon doc e dolor word ta ace 
db.massiveDataAgain.find({ '$text' : { $search : 'dolor'} }).project({about : 1})

















