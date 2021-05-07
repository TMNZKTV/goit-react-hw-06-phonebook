import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phonebook/add', data => ({
    payload: {
        name: data.name,
        number: data.number,
        id: uuidv4(),
    },
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/filter');

export default { addContact, deleteContact, changeFilter };

// const addContact = data => ({
//     type: types.ADD,
//     payload: {
//         name: data.name,
//         number: data.number,
//         id: uuidv4(),
//     },
// });

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });
