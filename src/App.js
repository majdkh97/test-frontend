import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Favorite from './components/Favorite';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/favorite'>
            <Favorite />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
