




// db.getCollection('test').insertMany([
//     {name: "Web Dev Level 1"},
//     {name: "Web Dev Level 2"}
//     ])

const collection = db.getCollection("test");

// collection.findOne({age: 17})
// collection.findOne({company: "Demimbu"})

// collection.find({age: 17})
// collection.find({company: null})
// collection.find({gender: "Male"})
// collection.find({gender: "Female"})


// field filtering
// collection.find({gender: "Male"}, { name: 1, gender: 1, email: 1 })

// collection.findOne({gender: "Male"}, { name: 1 })


// project dont work with fineOne
// collection.findOne({gender: "Male"}).project({name: 1})
// but works with findMany() 
// collection.find(
//     {gender: "Male"}
// ).project({name: 1})




// operators 
// collection.find({age : { $gt : 30 } } )
// collection.find({age : { $gte : 30 } })

// collection.find({ age : { $lt : 30 } } ).project({age: 1})

// collection.find( { age : { $lte : 30 } } ).sort({ age: 1 } ).project( { age : 1 } )

// collection.find( { gender: { $eq : "Male" } } ).project( { gender : 1 } )

// collection.find({ gender : { $ne : "Female" } } ).project( { gender : 1} )



// implicit and 
// collection.find({ 
//     gender: { $eq : "Female"}, 
//     age : { $gte : 18, $lte : 30 }
// }).sort({
//     age : 1 
    
// }).project({
//     age : 1,
//     gender : 1
// })




//  $in
// collection.find({
//     gender : { $eq : "Female" },
//     age : { $in : [18, 20, 22, 24, 26, 28, 30]}
// }).project({
//     gender : 1,
//     age : 1
// }).sort({
//     age : 1
// })


// $nin
// collection.find({
//     gender : { $eq : "Female" },
//     age : { $nin : [18, 20, 22, 24, 26, 28, 30]},
//     interests : { $in : ["Cooking", "Gaming"]}
// }).project({
//     gender : 1,
//     age : 1,
//     interests : 1
// }).sort({
//     age : 1
// })




// explicit and, implicit and, explicit or, implicit or
// collection.find({
//     $and : [
//         {age : { $ne : 15 } }, 
//         {age : { $lte : 30 } }
//     ]
// }).project({
//     age : 1
// }).sort({
//     age : 1
// })



// collection.find({age : { $ne : 15 }, age : { $lte : 30 } } ) //error

// collection.find({
//     age : { $ne : 15, $lte : 30 } 
    
// } ).project({
//     age : 1
// }).sort({
//     age : 1
// })



// interests in Traveling or interests in Cooking 
// collection.find({
//     $or : [
//         { interests : "Cooking" }, 
//         { interests : "Traveling" },
//     ]
// }).project({
//     interests : 1
// })


// collection.find({
//     $or : [
//         { "skills.name" : "JAVASCRIPT" },
//         { "skills.name" : "PYTHON" }
//     ]
// }).project({
//     skills : 1
// })



// collection.find({
//     "skills.name" : { $in : ["JAVASCRIPT", "PYTHON"] }
// }).project({
//     skills : 1
// })




// collection.find({
//     company : { $exists : false }
// })

// collection.find({
//     company : { $exists : true }
// }).project({
//     company : 1
// })

// collection.find({
//     age : { $exists : false }
// })



// collection.find({
//     email : { $exists : false }
// })

// collection.find({
//     skills : { $exists : false }
// })

// collection.find({
//     age : { $type : "string" }
// })


// collection.find({
//     friends : { $type : "array" }
// })


// collection.find({
//     salary : { $type : "number" }
// })

// collection.find({
//     company : { $type : "null" }
// }).project({
//     company : 1
// })


// collection.find({
//     friends : { $size : 4 }
// }).project({
//     friends : 1
// })

// collection.find({
//     friends : { $size : 4 }
// }).project({
//     friends : 1
// })

// collection.find({
//     friends : { $size : 0 }
// }).project({
//     friends : 1
// })

// only works with array
// collection.find({
//     email : { $size : 24 }
// }).project({
//     email : 1 
// })


// collection.find({
//     interests : ["Gaming", "Cooking", "Writing" ]
// }).project({
//     interests : 1
// })

// collection.find({
//     "interests.2" : "Writing"
// }).project({
//     interests : 1
// })


// collection.find({
//     interests : { $all : ["Travelling", "Cooking"]}
// }).project({
//     interests : 1
// })


// will not work as expected
// collection.find({
//     "skills.name" : "JAVASCRIPT",
//     "skills.level" : "Intermidiate"
// }).project({
//     skills : 1
// })


// collection.find({
//     skills : {
//         name : "JAVASCRIPT",
//         level : "Intermidiate",
//         isLearning : false
//     }
// })


// collection.find({
//     $and : [
//         {"skills.name" : "JAVASCRIPT" }, 
//         {"skills.level" : "Intermidiate" }
//     ]
// }).project({
//     skills: 1
// })


collection.find({
    skills : {
        $elemMatch : {
            name : "JAVASCRIPT",
            level : "Intermidiate"
        }
    }
}).project({
    skills : 1
})





















































