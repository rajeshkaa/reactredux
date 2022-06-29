//  import Cake from './components/Cake';

// import Ice from './components/icecontainer';

// import NewCake from './components/Newcake';

// import Hookscakecontainer from './components/Hookscakecontainer';

import './App.css';

import {Provider} from 'react-redux'

import store from './redux/store';

// import Itemcontainer from './components/itemcontainer';

import UserContainer from './components/usercontainer'

// import MuiDialog from './'
function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <UserContainer/>
    {/* <Itemcontainer cake/>
    <Itemcontainer/>
      <Hookscakecontainer/>
      <Cake/>
      <Ice/>
      <NewCake/> */}
    </div>
    </Provider>
  );
}

export default App;
