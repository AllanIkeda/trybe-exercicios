import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers/index';


const store = createStore(rootReducer, composeWithDevTools());

export default store;