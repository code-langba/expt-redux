// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);
// export default store;
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
