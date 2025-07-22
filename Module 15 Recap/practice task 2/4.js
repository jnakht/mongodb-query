
// 4. Retrieve a list of unique friend names for individuals who have at least
// one friend, and include only the friends with names starting with the
// letter "W".

// Hints: Explore how to use regex [ "friends.name": /^W/]{}}
db.massiveDataAgain.aggregate([
    //stage 1 
    { $unwind : "$friends" },
    { $match : { 'friends.name' : /^W/ } },
    { $group : { _id : "$_id", filteredFriends : { $addToSet : "$friends.name" } } }
])


















