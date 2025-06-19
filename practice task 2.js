



// practice problem part II 





const collection = db.massiveData;

// problem 1 
// collection.aggregate([
//     { $match : { isActive : true } },
//     { $group : { _id : "$gender", count : { $sum : 1 } } }
// ])

// problem 2 
// collection.aggregate([
//     { $match : { isActive : true, favoriteFruit : "banana" } }, 
//     { $project : { name : 1, email : 1 } }
// ])

// problem 3 
// collection.aggregate([
//     { $group : { _id : "$favoriteFruit", avgAge : { $avg : "$age" }} },
//     { $sort : { avgAge : -1 } }
// ])

// problem 4 
// collection.aggregate([
//     { $unwind : "$friends" },
//     { $match : { "friends.name" : /^W/ } },
//     { $group : { _id : null, uniqueFriends : { $addToSet : "$friends.name"} } }
// ]) 


// problem 5 , not solved yet
// collection.aggregate([
//     { $facet : {
//         // pipeline 1 
//         "ageBelowThirty" : [
//             { $match : { age : { $lte : 30 } } },
//             { $bucket: {
//                   groupBy: "$age",
//                   boundaries: [0, 10, 20, 30 ],
//                   default: "ageOnThirty",
//                   output: {
//                     individuals : { $push : "$$ROOT" },
//                     count : { $sum : 1 }
//                   }
//                 }},
//                 { $unwind : "$individuals" },
//                 { $sort : { "individuals.age" : 1 } },
//                 { $group : { _id : "_id",} }
                
//         ],
//         "ageAboveThirty": [
//             { $match : { age : { $gt : 30 } } }, 
//             { $bucket: {
//                   groupBy: "$age",
//                   boundaries: [ 31, 41, 51, 61, 71, 81, 100, 200 ],
//                   default: "other",
//                   output: {
//                     "count": { $sum: 1 }
//                   }
//                 }},
//                 { $sort : { age : 1 } }
//         ]
//     }}    
// ])


// problem 6 
collection.aggregate([
    
    { $group : { _id : "company", totalBalance : { $sum : "$balance" } } }    
])
















