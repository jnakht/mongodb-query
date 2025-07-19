
const collection = db.getCollection("test");

// collection.updateOne( 
//     { _id : ObjectId("6406ad63fc13ae5a40000069") },
//     { $unset : {
//         phone : 1
//     }}
// )

// collection.updateOne( 
//     { _id : ObjectId("6406ad63fc13ae5a40000069") }, 
//     { $pop : {
//         friends : 1
//     }}
// )

// collection.updateOne( 
//     { _id : ObjectId("6406ad63fc13ae5a40000069") }, 
//     { $pop : {
//         friends : -1
//     }}
// )

// collection.updateOne( 
//     { _id : ObjectId("6406ad63fc13ae5a40000069")},
//     { $pull : {
//         friends : "Mir Hussain"
//     }}
// )


// removes from all places
// collection.updateOne( 
//     { _id : ObjectId("6406ad63fc13ae5a40000069")},
//     { $pull : {
//         interests : "Writing"
//     }}
// )

// collection.updateOne( 
//     { _id : ObjectId("6406ad63fc13ae5a40000069")},
//     { $pullAll : {
//         interests : [[ "Gaming" ], 	[ "Gaming", "Writing", "Reading" ], [ "Gaming", "Writnig", "Reading" ]]
//     } }
// )




