




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
// collection.find(
//     {gender: "Male"}
// ).project({name: 1})




// operators 
// collection.find({age : { $gt : 30 } } )
// collection.find({age : { $gte : 30 } })

// collection.find({ age : { $lt : 30 } } ).project({age: 1})

// collection.find( { age : { $lte : 30 } } ).sort({ age: 1 } ).project( { age : 1 } )

// collection.find( { gender: { $eq : "Male" } } ).project( { gender : 1 } )

// collection.find({ gender : { $ne : "Female" } } ).project( { gender : 1} )




































