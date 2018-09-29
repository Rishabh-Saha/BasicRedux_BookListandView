import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

//Any key(books,activeBook) that we provide to combineReducers end up as a key on our global state.
const rootReducer = combineReducers({ // Here we set the application state
	books: BooksReducer,
	activeBook: ActiveBookReducer 
});

export default rootReducer;
