import { combineReducers } from 'redux';
import { incrementReducer } from './sampleReducers';

// This is the root reducer object for the project.
// For new reducers, add them where combineReducers is.

const reducers = combineReducers({
	incrementReducer,
});

export default reducers;
