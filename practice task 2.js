



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






