import react from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Emotes from './Emotes';
import Panels from './Panels';
import Badges from './Badges';
import Illustrations from './Illustrations';
import Prices from './Prices';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
         <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Emotes" component={Emotes} />
            <Route path="/Panels" exact component={Panels} />
            <Route path="/Badges" exact component={Badges} />
            <Route path="/Illustrations" exact component={Illustrations} />
            <Route path="/Prices" exact component={Prices} />
          </Switch>
          
      </div>
      <div>
       
      </div>
    </Router>
  );
}

export default App;