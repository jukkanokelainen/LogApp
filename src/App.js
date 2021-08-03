import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      App
    </div>
  );
}

export default App;
