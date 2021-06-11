import MeetupDetails from '../../components/meetups/MeetupDetails';
import { MongoClient, ObjectID } from 'mongodb';

const MeetupDetailPage = ({ meetup }) => {
  return (
    <MeetupDetails
      title={meetup.title}
      image={meetup.image}
      address={meetup.address}
      description={meetup.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.gvoli.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() },
  }));
  client.close();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const meetupId = params.meetupId;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.gvoli.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetup = await meetupCollection.findOne({ _id: ObjectID(meetupId) });
  client.close();

  return {
    props: {
      meetup: {
        id: meetupId,
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
      },
    },
  };
};

export default MeetupDetailPage;
