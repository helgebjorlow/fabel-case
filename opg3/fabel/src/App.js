import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './home';
import { Login } from './login';
import { Minside } from './minside';
import { NoMatch } from './nomatch';


function App() {
    return ( 
      <React.Fragment>
        <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/minside" component={Minside} />
          <Route component={NoMatch} />
        </Switch>
        </Router>
        </React.Fragment>
    );
}

export default App;