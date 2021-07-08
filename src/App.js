// import './App.css';
//import { Link } from 'react-router';
//import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Parent from './components/Parent';
import Products from './components/Products';
import UseEffectParent from './components/UseEffectParent';
import Api from './components/api';

function App() {
  return (
    <div className="App">

      <Router>

        <Nav />

        <Route path='/' exact>
          <Parent />
        </Route>
        <Route path='/contactUs'>
          <h1> CONTACT US! </h1>
          <p>I'll make your pawn structure look like your grandmother's teeth</p>
        </Route>
        <Route path='/products/:id'>
          <Products />
        </Route>
        <Route path='/useEffect'>
          <UseEffectParent />
        </Route>
        <Route path='/api'>
          <Api />
        </Route>

        <h6>Footer</h6>

      </Router>

    </div>
  );
}

export default App;
