
const collection = db.getCollection("orders");

collection.aggregate([
    { $lookup: {
           from: "test",
           localField: "userId",
           foreignField: "_id",
           as: "user"
         }}
])




