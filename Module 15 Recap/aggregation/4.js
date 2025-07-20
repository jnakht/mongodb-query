

// db.test.aggregate([
//     { $unwind : "$friends" },
//     { $group: { _id : "$friends", count : { $sum : 1 } } }    
// ])


// db.test.aggregate([
//     { $unwind : "$friends" },
//     { $group : {
//         _id : "$friends",
//         count : { $sum : 1}
//     }},
//     { $group : { _id : null, totalFriends : { $sum : "$count"} } }
// ])


db.test.aggregate([
    { $unwind : "$interests" }, 
    { $group : { _id : "$age", interestsArrayOfThatAge : { $push : "$interests" } } }
])















