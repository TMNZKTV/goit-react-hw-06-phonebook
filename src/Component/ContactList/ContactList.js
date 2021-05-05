import React from "react";
import styles from "../ContactList/ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../../Redux/Phonebook/phonebook-actions";

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ul className={styles.contacts}>
      {items.map(({ id, name, number }) => {
        return (
          <li className={styles.contacts__item} key={id}>
            <span>
              {name} : {number}
            </span>
            <button
              className={styles.contacts__button}
              onClick={() => onDeleteContact(id)}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

const getVisibleItems = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allItems.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ phonebook: { items, filter } }) => ({
  items: getVisibleItems(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
