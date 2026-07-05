import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { GiRotaryPhone } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <div>
        <p className={css.name}>
          <FiUser className={css.icon} /> {contact.name}
        </p>
        <p className={css.number}>
          <GiRotaryPhone className={css.icon} /> {contact.number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={css.button}
      >
        Delete <RiDeleteBin5Line className={css.trash} />
      </button>
    </div>
  );
};

export default Contact;
