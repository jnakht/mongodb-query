
const collection = db.getCollection("test");

// collection.aggregate(
//     { $match : { gender : "Male", age : { $lt : 30} } },
//     { $project : { name : 1, age : 1, gender : 1} }
// )
// the same code can be written in three stages, but as stages increase, the complexity of the code also increases(time complexitu)
// collection.aggregate(
//     { $match : { gender : "Male" } },
//     { $match : { age : { $lt : 30 } } },
//     { $project : { name : 1, age : 1, gender : 1 } }
// )



// will give no data, since in the first stage, age is absent and in the second stage, how will it perform operation on age if it is absent
// collection.aggregate(
//     { $project : { name : 1, gender : 1 } },
//     { $match : { gender: "Male", age : { $lt : 30} } }
// )


// $addField 
// collection.aggregate(
//     { $match: { gender: "Male" } },
//     { $addFields: { course: "Level-2", eduTech : "Programming Hero" } },
//     { $project : { course : 1, eduTech : 1 } }
// )

// making some data another  collection 
// collection.aggregate( 
//     { $match : { gender : "Male" } }, 
//     { $addFields: { course : "Level - 2", eduTech : "Programming Hero" } },
//     { $project : { gender : 1, course : 1, eduTech : 1 } },
//     { $out : "PH-students" }
// )

// collection.aggregate( 
//     { $match : { gender : "Male" } }, 
//     { $addFields: { course : "Level - 2", eduTech : "Programming Hero" } },
//     { $out : "PH-students" }
// )


// adding in the original database
// collection.aggregate( 
//     { $match : { gender : "Male" } }, 
//     { $addFields: { course : "Level - 2", eduTech : "Programming Hero", salary : 500 } },
//     { $merge : "test" }
// )



// $group 
// collection.aggregate(
//     { $group : { _id : "$gender", count : { $sum : 1} } }    
// )


// collection.aggregate(
//     { $group : { _id : "$age", number_of_person : { $sum : 1 } } }    
// )

// collection.aggregate(
//     { $group : { _id : "$address.country",  count : { $sum : 1 } } }
// )

// collection.aggregate(
//     { $group : { _id : "$address.country", count : { $sum : 1 },  nameDekhan : { $push : "name" } } }
// )

// collection.aggregate(
//     { $group : { _id : "$address.country", count : { $sum : 1 }, nameArray : { $push : "$name" } } }    
// )


// collection.aggregate(
//     { $group : { _id : "$address.country", count : { $sum : 1 }, fullDoc : { $push : "$$ROOT"} } }, 
//     { $project : { count : 1, "fullDoc.email" : 1, "fullDoc.phone" : 1, "fullDoc.gender" : 1, "fullDoc.age" : 1 } }
// )


// collection.aggregate(
//     { $group : { 
//         _id : null, 
//         count :  { $sum : 1 }, 
//         totalSalary : { $sum : "$salary" }, 
//         maxSalary : { $max : "$salary" }
//     } } 
    
// )

// collection.aggregate( 
//     { $group : { 
//         _id : null,
//         count : { $sum : 1 }, 
//         totalSalary : { $sum : "$salary" }, 
//         maxSalary : { $max : "$salary" },
//         minSalary : { $min : "$salary" },
//         avgSalary : { $avg : "$salary" }
//     } }, 
//     { $project : {
//         count : 1, 
//         totalSalary : "$totalSalary",
//         maximumSalary : "$maxSalary",
//         minimumSalary : "$minSalary",
//         averageSalary : "$avgSalary",
//         rangeOnMinAndMax : { $subtract : [ "$maxSalary", "$minSalary" ] }
//     }}
// )



// $unwind 
// collection.aggregate( 
//     { $unwind : "$friends" },
//     { $group : { _id : "$friends", count : { $sum : 1 } } }
// )


// find common interests based on age field 
// collection.aggregate( 
//   // { $unwind : "$interests" }, 
//     { $group : { _id : "$age", interestIn : { $push : "$interests" } } }
// )

// $bucket 
// collection.aggregate([
//     { $bucket : {
//         groupBy : "$age",
//         boundaries : [20, 40, 60, 80],
//         default : "age from 80 to greater",
//         output : {
//             count : { $sum : 1},
//             // allName : { $push : "$name"}, 
//             allPersonOfRange : { $push : "$$ROOT"}
//         }
//     } }
// ])

// collection.aggregate([
//     { $bucket : {
//         groupBy : "$age",
//         boundaries : [20, 40, 60, 80],
//         default : "age from 80 to greater",
//         output : {
//             count : { $sum : 1},
//             // allName : { $push : "$name"}, 
//             allPersonOfRange : { $push : "$$ROOT"}
//         }
//     } },
//     { $sort : { count : -1 } },
//     { $project : { count : 1 } }
// ])


// $facet 
collection.aggregate(
    { $facet : {
        "friendsCount": [
            { $unwind : "$friends" },
            { $group : {
                _id : "$friends",
                count : { $sum : 1 } 
            } }
        ],
        "educationCount": [
            { $unwind : "$education" },
            { $group: {
                _id : "$education",
                count : { $sum : 1 }
            }}
        ],
        "skillsCount": [
            { $unwind : "$skills" },
            { $group : {
                _id: "$skills",
                count : { $sum : 1 }
            }}
        ]
    }}    
)

















