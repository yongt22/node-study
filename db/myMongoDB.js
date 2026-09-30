import { MongoClient } from "mongodb";

function MyMongoDB({
  dbName = "apartmentFinder",
  collectionName = "listings",
  defaultUri = "mongodb://localhost:27017",
} = {}) {
  const me = {};
  const URI = process.env.MONGODB_URI || defaultUri;

  const connect = () => {
    const client = new MongoClient(URI);
    const listings = client.db(dbName).collection(collectionName);

    return { client, listings };
  };

  me.getListings = async (query = {}) => {
    const { client, listings } = connect();

    try {
      const data = await listings.find(query).toArray();
      console.log("Data retrieved from MongoDB", data);
      return data;
    } catch (error) {
      console.error("Error retrieving data from MongoDB:", error);
      throw error;
    } finally {
      await client.close();
    }
  };

  return me;
}

const myMongoDB = MyMongoDB();
export default myMongoDB;
