




// db.test.aggregate([
//     { $match : { gender : "Male", age : { $lt : 30 } } },
//     { $project : {name : 1, gender : 1, age : 1} }
// ])


// db.test.aggregate([
//     { $match : { gender : "Male" } }, 
//     { $match : { age : { $lt : 30 } } },
//     { $project : { name : 1, gender : 1, age : 1 } }
// ])

// $addFields 
// db.test.aggregate([
//     { $match : { gender : "Female"} }, 
//     { $addFields : { jisan : "Jisan Khan", wife : "Nobody Knows" } },
//     { $project : { name : 1, jisan : 1, wife : 1 } }
// ])

// make a new collection of the aggregate data 

// db.test.aggregate([
//   { $match : { gender : "Male"} }, 
//   { $project : { name : 1 } },
//   { $addFields : { course : "Programming Hero", level : "level-2" } },
//   { $out : "Male Students" }
// ])



// db.test.aggregate([
//     { $match : { gender : "Female" } }, 
//     { $project : { name : 1 } },
//     { $addFields: { course : "Programming Hero", level : "level-1" } },
//     { $out : "Female Students" }
// ])




// merge with actual data
// /*db.test.aggregate([
//     { $match : { gender : "Male" } }, 
//     { $project : { name : 1 } },
//     { $addFields : { bossName : "Jisan Khan" } },
//     { $merge : "test" }
// ])*/

// db.test.aggregate([
//     { $match : { gender : "Female" } }, 
//     { $addFields: { bossName : "Jisan Mia"} },
//     { $merge : "test" }
// ])





















