import React from 'react';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import Greeting from './hooks/Greeting'
import Router1 from './hooks/Router1'
import Router2 from './hooks/Router2'
import Test from './hooks/test/Test'
// "start": "react-app-rewired start",
//     "build": "react-app-rewired build",
//     "test": "react-app-rewired test",
//     "eject": "react-scripts eject"
function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch><Route path='/login' component={Router1}></Route>
            <Route path='/greet' component={Greeting}></Route>

            <Route path='/router2' component={Router2}></Route>
            <Route path='/test' component={Test}></Route>
              <Redirect to='/test'></Redirect>

          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
