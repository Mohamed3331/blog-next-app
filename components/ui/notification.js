import ReactDOM from 'react-dom';

import classes from './notification.module.css';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'pending') {
    statusClasses = classes.error;
  }

  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${statusClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
}

export default Notification;
