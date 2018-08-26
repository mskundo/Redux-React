import React, { Component } from 'react';
import logo from './logo.svg';
import CustomerList from './components/CustomerList'
import AddCustomer from './components/AddCustomer'
import './App.css';
import { HashRouter, NavLink, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Customer</h1>
        </header>
        
         <HashRouter>
            <div>
                <div className="header">
                    <ul>
                        <li><NavLink exact to='/'>List Customer</NavLink></li>
                        <li><NavLink to='/Add'>Add Customer</NavLink></li>
                    </ul>
                </div>
                <div className="content">
               
                    <Route exact path="/" component={CustomerList}></Route>
                    <Route path="/Add" component={AddCustomer}></Route>
                </div>
            </div>
            </HashRouter>
            
      </div>
    );
  }
}

export default App;