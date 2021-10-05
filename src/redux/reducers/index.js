// import { combineReducers } from 'redux';
// import userReducer from './userReducer';
// const allReducers = combineReducers({
// 	users: userReducer
// });

// export default allReducers;

import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
const allReducers = combineReducers({
	users: fetchReducer
});

export default allReducers;
