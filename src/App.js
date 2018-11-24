import React from 'react';
import Home from "./pages/home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
