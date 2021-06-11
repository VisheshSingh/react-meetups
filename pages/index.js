import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='A huge list of popular React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
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
