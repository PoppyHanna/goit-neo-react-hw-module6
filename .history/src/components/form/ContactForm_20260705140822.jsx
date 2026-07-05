import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoPersonAddSharp } from "react-icons/io5";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
  number: Yup.string()
    .required("Phone number is required")
    .min(3, "Phone number must be at least 3 characters")
    .max(15, "Phone number must not exceed 15 characters"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.box}>
          <label htmlFor="number">Phone Number:</label>
          <Field type="text" id="number" name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.button}>
          Add Contact <IoPersonAddSharp />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
