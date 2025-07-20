



// db.test.aggregate([
//   { $bucket : {
//         groupBy : "$age",
//         boundaries : [0, 21, 41, 61],
//         default : "ageMoreThan60",
//         output: {
//             count : { $sum : 1 },
//             personName : { $push : "$name" },
//             personAge : { $push : "$age"}
//         }
//     }   } 
// ])




db.test.aggregate([
    {
        $bucket : {
            groupBy: "$age",
            boundaries: [0, 21, 41, 61],
            default: "ageMoreThan60",
            output: {
                count: { $sum : 1 },
                docArray: { $push : "$$ROOT"}
            }
        }
    }, 
    {
        $sort : { count : -1 }
    },
    {
        $limit: 2
    },
    {
        $project : {
            count : 1,
        }
    }
])




