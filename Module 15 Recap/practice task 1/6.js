// db.pt1.find({email : "amccurry3@cnet.com"})
    
//   6. Add a new language "Spanish" to the list of languages spoken by the
// person. 

db.pt1.updateOne(
    { email : "amccurry3@cnet.com" }, 
    { $push : { "languages" : 'Spanish' } }
)

































