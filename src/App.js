import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './views/Nav/'
import Home from './views/Home'
import Report from './views/Report'
import Documents from './views/Documents'
import DataDisplay from './views/DataDisplay'
 
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/documents">
            <Documents />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id">
            <DataDisplay/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
