import React from 'react';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import Greeting from './hooks/Greeting'
import Router1 from './hooks/Router1'
import Router2 from './hooks/Router2'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>

            <Route path='/greet' component={Greeting}></Route>
            <Route path='/' component={Router1}></Route>
            <Route path='/router2' component={Router2}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
