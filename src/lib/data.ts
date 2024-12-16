import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI!;

const client = new MongoClient(MONGODB_URI);

const fetchData = async () => {
  try {
    await client.connect();
    const db = client.db("musicalInstruments");
    const coll = db.collection("pianokeys");
    const data = await coll.find({}).toArray();

    return data;
  } finally {
    await client.close();
  }
};

export default fetchData;
