// db.pt1.find({email : "amccurry3@cnet.com"}) 


// 7. Remove the skill with the name "Kotlin" from the skills array. 
db.pt1.updateOne(
    { email : 'amccurry3@cnet.com' },
    { $pull : {
        skills : { name : "KOTLIN" }
    }}
)