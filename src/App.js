import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './Components/Layout/Navbar'
import Logs from './Components/logs/Logs'
import AddBtn from './Components/Layout/AddBtn'
import AddLogModal from './Components/logs/AddLogModal'
import EditLogModal from './Components/logs/EditLogModal'
import AddTechModal from './Components/techs/AddTechModal'
import TechListModal from './Components/techs/TechListModal'
import store from './App/store';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
    // eslint-disable-next-line
  }, [])
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className = "container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </div>
    </Provider>
  );
}

export default App;
