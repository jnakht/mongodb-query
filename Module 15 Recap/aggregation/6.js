




// db.test.aggregate([
//     { $unwind : "$friends" }, 
//     { $group : { _id : "$friends", count : { $sum : 1 } } }
// ])


// $facet 
db.test.aggregate([
    { $facet : {
        // pipeline - 1
        "friendsNameGroupCount": [
            // stage - 1
            { $unwind : "$friends" },
            // stage - 2
            { $group : { _id : "$friends", count : { $sum : 1 } } }
        ],
        // pipeline - 2
        "educationGroupCount": [
            { $unwind: "$education" }, 
            { $group : { _id : "$education", count : { $sum : 1 } } }
        ],
        // pipeline - 3
        "skillsGroupCount": [
            // stage - 1
            { $unwind: "$skills" }, 
            { $group : { _id : "$skills", count : { $sum : 1 } } }
        ]
    }}    
])








