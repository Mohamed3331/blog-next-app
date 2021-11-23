import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

function ContactForm() {

  const [requestStatus, setRequestStatus] = useState()

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setRequestStatus('pending');

    setTimeout(() => {
      setRequestStatus('success');
    }, 2000);
  }

  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending Message...',
      message: 'Your message is on its way.'
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success Message',
      message: 'Message Sent.'
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can i Help you, Darling?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' required />
          </div>

        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Message</label>
          <textarea id="message" rows="10"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
    </section>
  );
}

export default ContactForm;
