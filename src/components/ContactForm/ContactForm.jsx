import css from './ContactForm.module.css';

import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
  return (
    <div>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={() => {}}>
        <Form className={css.form}>
          <label>
            <span>Name</span>
            <Field type="text" name="name" />
          </label>
          <label>
            <span>Number</span>
            <Field type="text" name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
