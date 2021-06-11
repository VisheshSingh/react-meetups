import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetup) => {
    console.log(enteredMeetup);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
};

export default NewMeetupPage;
