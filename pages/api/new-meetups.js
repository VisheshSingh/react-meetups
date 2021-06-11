const { MongoClient } = require('mongodb');

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(data);

    console.log(process.env.MONGO_USER);

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.gvoli.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const results = await meetupCollection.insertOne(data);
    console.log(results);
    client.close();

    res.status(201).json({ message: 'Meetup created!' });
  }
}

export default handler;
