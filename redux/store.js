import { configureStore } from 'redux';
import tasksReducer from './reducers';

const store = configureStore(tasksReducer);

export default store;
