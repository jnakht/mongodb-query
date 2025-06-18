
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
collection.aggregate( 
    { $match : { gender : "Male" } }, 
    { $addFields: { course : "Level - 2", eduTech : "Programming Hero", salary : 500 } },
    { $merge : "test" }
)



















