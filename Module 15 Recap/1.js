




// db.getCollection('test').insertMany([
//     {name: "Web Dev Level 1"},
//     {name: "Web Dev Level 2"}
//     ])

const collection = db.getCollection("test");

// collection.findOne({age: 17})
// collection.findOne({company: "Demimbu"})

// collection.find({age: 17})
// collection.find({company: null})
// collection.find({gender: "Male"})
// collection.find({gender: "Female"})


// field filtering
// collection.find({gender: "Male"}, { name: 1, gender: 1, email: 1 })

// collection.findOne({gender: "Male"}, { name: 1 })


// project dont work with fineOne
// collection.findOne({gender: "Male"}).project({name: 1})
// but works with findMany() 
collection.find(
    {gender: "Male"}
).project({name: 1})














