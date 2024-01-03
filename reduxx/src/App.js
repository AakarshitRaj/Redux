import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IcecreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';



function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <HookCakeContainer/>
      <CakeContainer/>
      <IcecreamContainer/>
      <NewCakeContainer/> */}
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
