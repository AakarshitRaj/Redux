import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer';
// import cakeReducer from './cakes/cakeReducer'
// import iceCreamReducer from './icecream/icecreamReducer';
import logger from 'redux-logger';

const store=createStore(rootReducer)



export default store;



