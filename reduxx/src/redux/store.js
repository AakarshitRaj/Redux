import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer';
// import cakeReducer from './cakes/cakeReducer'
// import iceCreamReducer from './icecream/icecreamReducer';


//import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
//devtool version is not compatible

import logger from 'redux-logger';

const store=createStore(rootReducer,applyMiddleware(logger))



export default store;



