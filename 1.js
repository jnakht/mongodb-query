
// Data insertion
// db.getCollection("test").insertOne({ name: "Complete MERN Stack"})

// db.getCollection("test").insertMany([
//     {name: "Crash Course on Devops"},
//     {name: "Complete AI Development"}
//     ])





// data deletion 

// db.getCollection("test").deleteMany({})





// findOne, findMany 

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






// operators

// collection.find({gender: {$eq: "Female"}})


// collection.find({age: { $eq: 17}})

// collection.find({salary: { $eq: 220}}).project({name: 1})
// collection.find({age: { $ne : 12 }})

// collection.find({age: { $gt : 18 }})

// collection.find({age: { $gt : 30 }})

// collection.find({age: { $gte: 30}}).sort({age: 1})

// lte, lt 






// implicit and 
// collection.find({gender: "Female", age: { $gte: 18, $lte: 30 }}, {gender: 1, age: 1}).sort({age: 1})




//  $in, $nin 
// collection.find({gender: "Female", age: { $in : [18, 20, 22, 24, 26, 28, 30]}}, {gender: 1, age: 1}).sort({age: 1})

// collection.find({gender: "Female", age: { $nin : [18, 20, 22, 24, 26, 28, 30]}}, {gender: 1, age: 1}).sort({age: 1})

// collection.find({gender: "Female", age: { $gte: 18, $lte: 30}, interests: { $in : ["Cooking", "Gaming"]}}, { age: 1, gender: 1, interests: 1}).sort({age: 1})







// explicit and, $and 
// age must be (less than or equal to 30) and (age must not be 15) 

// collection.find(
//     { age: { $lte: 30, $ne: 15}}
// ).project(
//     {age: 1}
// ).sort({age: 1})

// error 
// collection.find(
//     { age: { $lte: 30}, age: { $ne: 30}}
// ).project(
//     {age: 1}
// ).sort({age: 1})

// collection.find( 
//     {$and: [
//         {age: { $ne: 15}},
//         {age: { $lte: 30}}
//         ]}
// ).project(
//     {age: 1}
// ).sort(
//     {age: 1}
// )

// explicit or , $or 
// collection.find( 
//     {$or: [
//         { gender: "Female"},
//         {age: { $ne: 15}},
//         {age: { $lte: 30}}
//     ]}
// ).project(
//     {gender: 1, age: 1}
// ).sort({age: 1})

// interest in Travelling or Cooking 
// collection.find({
//     $or: [
//       {interests: "Travelling"}, 
//       {interests: "Cooking"}
//     ]
// }).project(
//     {interests: 1}
// )

// must have skills Javascript or Python 
// collection.find({
//     $or : [
//         {"skills.name" : "JAVASCRIPT"},
//         {"skills.name" : "PYTHON"}
//     ]
// }).project(
//     {skills: 1}
// )
// the upper code is same as: 
// collection.find({
//     "skills.name" : { 
//         $in : ["JAVASCRIPT", "PYTHON"]}
    
// }).project(
//     {skills: 1}
// )




// check if a field exists or not 
// collection.find({age: {$exists: true}})
// collection.find({age: {$exists : false}})
// collection.find({company: {$exists: true}}) // identifies as exits even if the filed has null valu 



/*check the type of a field*/
// collection.find({age: { $type : "string"}})
// collection.find({age: { $type : "number"}})
// collection.find({company: { $type : "null"}})




// finding size of an array 
// returns the data where number of friends are 4 
// collection.find(
//     {friends : { $size: 4}
// }).project({friends: 1})

// collection.find(
//     {friends: { $size: 0}
// }).project(
//     {friends : 1}
// )















































