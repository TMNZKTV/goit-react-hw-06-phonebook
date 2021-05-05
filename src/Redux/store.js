import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "../Redux/Phonebook/phonebook-reducer";

const roodReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = createStore(roodReducer, composeWithDevTools());
export default store;
