
// 5. Use $facet to separate individuals into two facets based on their age:
// those below 30 and those above 30. Then, within each facet, bucket the
// individuals into age ranges (e.g., 20-25, 26-30, etc.) and sort them by
// age within each bucket.

db.massiveDataAgain.aggregate([
    { $facet : {
        // pipeline 1 
        "ageBelowThirty": [
            //stage 1 
            { $match : { age : { $lt : 30 } } }, 
            { $bucket: {
                  groupBy: "$age",
                  boundaries: [ 0, 10, 20, 30 ],
                  default: "ageOfThirty",
                  output: {
                    "count": { $sum: 1 },
                    // "allPersonOfRange" : { $push: "$name" }
                  }
                }},
                { $sort : { _id : 1 } }
        ],
        // pipeline 2 
        "ageAboveThirty": [
            //stage 1 
            { $match : { age : { $gt : 30 } } },
            { $bucket: {
                  groupBy: "$age",
                  boundaries: [31, 41, 51, 61, 71, 81, 91, 101, 400 ],
                  default: "ageOThirty",
                  output: {
                    "count": { $sum: 1 },
                  }
                }},
                { $sort : { _id : 1 } }
        ]
    }}    
])






















