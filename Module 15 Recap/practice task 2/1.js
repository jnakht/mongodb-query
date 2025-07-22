

// 1. Retrieve the count of individuals who are active (isActive: true) for each
// gender.
db.massiveDataAgain.aggregate([
    { $match : { isActive : true } },
    { $group : { _id : "$gender", isActiveCount : { $sum : 1 } } },
])
