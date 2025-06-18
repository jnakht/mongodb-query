
const collection = db.getCollection("test");

// collection.aggregate(
//     { $match : { gender : "Male", age : { $lt : 30} } },
//     { $project : { name : 1, age : 1, gender : 1} }
// )

// will give no data, since in the first stage, age is absent and in the second stage, how will it perform operation on age if it is absent
collection.aggregate(
    { $project : { name : 1, gender : 1 } },
    { $match : { gender: "Male", age : { $lt : 30} } }
)







