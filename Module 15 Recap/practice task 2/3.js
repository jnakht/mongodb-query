

// 3. Find the average age of individuals for each favorite fruit, then sort the
// results in descending order of average age.

db.massiveDataAgain.aggregate([
    { $group : { 
        _id : "$favoriteFruit", 
        count : { $sum : 1 }, 
        averageAge : { $avg : "$age" },
    } }, 
    { $sort : { averageAge : -1 } }
])








