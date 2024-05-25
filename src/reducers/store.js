
import { createStore, combineReducers } from 'redux';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
  projects: projectsReducer
});

const store = createStore(rootReducer);

export default store;