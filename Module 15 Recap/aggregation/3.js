


// db.test.aggregate([
//     { $group : { 
//         _id : null, 
//         numberOfDoc : { $sum : 1 },
//         totalSalary : { $sum : "$salary" }
//     } }  
// ])

// db.test.aggregate([
//     { $group : { 
//         _id : null, 
//         docCount : { $sum : 1 },
//         totalSalary : { $sum : "$salary" },
//         maxSalary : { $max : "$salary" },
//         minSalary : { $min : "$salary" },
//         avgSalary : { $avg : "$salary" }
//     } },
//     { $project : {
//         totalSalary : 1,
//         maxSalary : 1,
//         minimumSalary : "$minSalary",
//         averageSalary : "$avgSalary",
//         range : { $subtract: ["$maxSalary", "$minSalary"]}
//     } }
// ])


db.test.aggregate([
    { $group : { 
        _id : null,
        docCount : { $sum : 1 },
        totalSalary : { $sum : "$salary" },
        maxSalary : { $max : "$salary" },
        minSalary : { $min : "$salary"},
        avgSalary : { $avg : "$salary" }
    } }, 
    { $project: {
        totalDocument : "$docCount",
        totalSalary : 1,
        maximumSalary : "$maxSalary",
        minimumSalary : "$minSalary",
        averageSalary : "$avgSalary",
        salaryRange : { $subtract : ['$maxSalary', '$minSalary']}
    } }
])


