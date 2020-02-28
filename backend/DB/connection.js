
const mongoClient = require("mongodb").MongoClient;
const URI = "mongodb+srv://dbUser: dbUser>@cluster0-ob7aj.mongodb.net/test?retryWrites=true&w=majority";

const connectMongoDB = async () => {
  console.log("connecting")
  await mongoClient.connect(URI);
}

module.exports = connectMongoDB;
