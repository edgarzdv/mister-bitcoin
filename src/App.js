import React from 'react';
import './App.css';
import './assets/style.css';

import Home from './pages/Home'
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ContactPage from './pages/ContactPage';
import ContactDetails from './pages/ContactDetails';
import NavBar from './cmps/NavBar';
import ContactEdit from './cmps/ContactEdit';

const history = createBrowserHistory();

function App() {
    return (
        <main>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route component={Home} path="/" exact></Route>
                    <Route component={ContactPage} path="/contact" exact></Route>
                    <Route component={ContactEdit} path="/contact/new/" exact></Route>
                    <Route component={ContactEdit} path="/contact/edit/:id" exact></Route>
                    <Route component={ContactDetails} path="/contact/details/:id" ></Route>
                </Switch>
            </Router>
        </main>
    )
}

export default App;
