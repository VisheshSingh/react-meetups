import styles from './MeetupDetails.module.css';

const MeetupDetails = ({ title, address, description, image }) => {
  return (
    <section className={styles.details}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetails;
