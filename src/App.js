import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/style.css';



import Home from './pages/Home'
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ContactPage from './pages/ContactPage';
import ContactDetails from './pages/ContactDetails';
import NavBar from './cmps/NavBar';
const history = createBrowserHistory();

// history={history}
function App() {
  return (
    <main>
        <Router  history={history}>
            <NavBar/>
            <Switch>
                <Route component={Home} path="/" exact></Route>
                <Route component={ContactPage} path="/contact" exact></Route>
                <Route component={ContactDetails} path="/contact/:id" ></Route>
                <Route component={ContactDetails} path="/contact/new" ></Route>
                {/* <Route component={BookApp} path="/books" exact></Route>
                <Route component={BookPage} path="/books/:id" exact></Route>
                <Route component={About} path="/about" exact></Route> */}
            </Switch>
        </Router>
    </main>
)
}

export default App;
