import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: '1',
    title: "Maharaja's Palace",
    image:
      'https://th.bing.com/th/id/R4d416942350741fe4694a41aa903ae65?rik=9TCtjGt3D7QAsg&pid=ImgRaw',
    description: '1234 Akbar Boulevard, Lanedale Ave, MN',
  },
  {
    id: '2',
    title: 'Mountain hill',
    image:
      'https://th.bing.com/th/id/R7ad59abe9def20772a3d4c8af5b6697b?rik=5%2bpRSbeR8kMdaw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f02%2f18%2f290843-mountain-lake-forest.jpg&ehk=Z%2bMO3dJY55GYXvgPWd%2blXHjTSuoJQUj5S%2b1Wzq9CK7M%3d&risl=&pid=ImgRaw',
    description: 'Barring Mountain Hill, Seaport Cliff, TX',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
