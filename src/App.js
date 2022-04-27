import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Adventure from "./pages/Adventure";
import Drama from "./pages/Drama";
import Fiction from "./pages/Fiction";
import Main from "./pages/Main";
import Philosophy from "./pages/Philosophy";
import Politics from "./pages/Politics";
import History from "./pages/History";
import Humor from "./pages/Humor";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/fiction" component={Fiction} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/drama" component={Drama} />
          <Route path="/history" component={History} />
          <Route path="/philosophy" component={Philosophy} />
          <Route path="/politics" component={Politics} />   
          <Route path="/humor" component={Humor} />   
        </Switch>
      </Router>
    </div>
  );
}

export default App;
