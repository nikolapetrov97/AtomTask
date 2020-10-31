import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Albums from './pages/Albums/Albums';
import Favourites from './pages/Favourites/Favourites';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/albums" exact component={Albums} />
          <Route path="/favourites" exact component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
