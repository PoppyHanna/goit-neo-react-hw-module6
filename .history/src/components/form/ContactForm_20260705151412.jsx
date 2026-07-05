import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoPersonAddSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required(),
  number: Yup.string().min(3).max(15).required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" className={styles.input} />
        <ErrorMessage name="name" component="div" />

        <Field name="number" placeholder="Number" className={styles.input} />
        <ErrorMessage name="number" component="div" />

        <button type="submit" className={styles.button}>
          Add Contact <IoPersonAddSharp />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;