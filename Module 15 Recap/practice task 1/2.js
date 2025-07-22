

// 2. Find documents where the favorite color is either "Maroon" or "Blue." 

// db.pt1.find({
//     $or: [
//         { favoutiteColor : "Maroon" }, 
//         { favoutiteColor : "Blue" }
//     ]
// }).project({
//     favoutiteColor : 1
// })


// solution 2 
db.pt1.find({
    favoutiteColor : { $in : ["Maroon", "Blue"]}
}).project({
    favoutiteColor : 1
})





