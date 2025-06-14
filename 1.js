


// db.getCollection("test").insertOne({ name: "Complete MERN Stack"})

// db.getCollection("test").insertMany([
//     {name: "Crash Course on Devops"},
//     {name: "Complete AI Development"}
//     ])


// db.getCollection("test").deleteMany({})


// db.getCollection("test").findOne({age: 17})

// db.getCollection("test").find({age: 17})

// db.getCollection("test").findOne({company: "Demimbu"})

// db.getCollection("test").find({company: "Demimbu"})

// db.getCollection('test').find({gender: "Male"})

// db.getCollection('test').find({gender: "Female"})


// db.getCollection("test").find({gender: "Female"}, {name: 1, email: 1, phone: 1, gender: 1})

const collection = db.getCollection("test");

// collection.find({gender: "Female"}).project({name: 1, email: 1, phone: 1})


// collection.findOne({gender: "Female"}).project({name: 1, email: 1, phone: 1}) //error

































