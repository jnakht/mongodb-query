


// db.test.aggregate([
//     { $group : { _id : "$age", count : { $sum : 1 } } }  
// ])


// db.test.aggregate([
//     { $group : { _id : "$gender", count : { $sum : 1 } } }  
// ])

// db.test.aggregate([
//     { $group : { _id : "$address.country", count : { $sum : 1 } } }  
// ])


// db.test.aggregate([
//     { $group : { _id : "$course", count : { $sum : 1 } } }
// ])


// db.test.aggregate([
//     { $group : { _id : "$address.country", count : { $sum : 1 }, nameArray : { $push : "$name" } } }
// ])


// db.test.aggregate([
//     { $group : { 
//         _id : "$address.country", 
//         count : { $sum : 1 }, 
//         personArray : { $push : "$$ROOT" } }
//     }, 
//     {
//       $project : { 'personArray.name' : 1, count : "$count", 'personArray.address.country' : 1} 
//     }  
// ])


























