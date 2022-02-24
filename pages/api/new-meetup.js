import { MongoClient } from "mongodb";

// will accessed when user requests /api/new-meetup

async function handler(req, res) {
  // only runs for post request
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    // mongodb connection
    const client = await MongoClient.connect(
      "mongodb+srv://sam:Zxcvbnm-321@nextjs-practice.wbu0y.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup entered to DB" });
  }
}

export default handler;
