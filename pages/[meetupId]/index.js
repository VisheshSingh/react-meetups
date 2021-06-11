import MeetupDetails from '../../components/meetups/MeetupDetails';

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

export const getStaticPaths = () => {
  return {
    paths: [{ params: { meetupId: '1' } }, { params: { meetupId: '2' } }],
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const meetupId = params.meetupId;
  return {
    props: {
      meetup: {
        id: meetupId,
        title: 'Hillstation house',
        image: 'https://wallpapercave.com/wp/wp2337103.jpg',
        address: 'Wonder Garden hills, Bellford, LN',
        description: 'a beautiful fort in the middle of greenlands',
      },
    },
  };
};

export default MeetupDetailPage;
