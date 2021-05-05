import types from "./phonebook-types";
import { v4 as uuidv4 } from "uuid";

const addContact = (data) => ({
  type: types.ADD,
  payload: {
    name: data.name,
    number: data.number,
    id: uuidv4(),
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
