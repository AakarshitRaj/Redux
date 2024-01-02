import {createStore} from 'redux'
import rootReducer from './rootReducer';
// import cakeReducer from './cakes/cakeReducer'
// import iceCreamReducer from './icecream/icecreamReducer';

const store=createStore(rootReducer)



export default store;



