import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetup) => {
    const res = await fetch(`/api/new-meetups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredMeetup),
    });
    const data = await res.json();
    console.log(data);
    router.push('/');
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
};

export default NewMeetupPage;
