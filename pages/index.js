import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.gvoli.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        image: m.image,
        address: m.address,
        description: m.description,
        id: m._id.toString(),
      })),
    },
  };
}

export default HomePage;
