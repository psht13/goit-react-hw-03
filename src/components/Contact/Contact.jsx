import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

import css from './Contact.module.css'

const Contact = ({ name, number }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactTextContent}>
        <p>
          <FaUser className={css.icon}/> <span>{name}</span>
        </p>
        <p>
          <BsTelephoneFill className={css.icon}/> <span>{number}</span>
        </p>
      </div>
      <div className={css.contactControls}>
        <button type="button">Delete</button>
      </div>
    </div>
  );
};

export default Contact;
