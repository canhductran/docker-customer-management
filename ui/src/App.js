import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Header from './components/header/HeaderComponent.jsx';

import CreateCustomerRecordPage from './pages/create-customer-record-page/CreateCustomerRecordPage.jsx';
import SearchCustomerRecordsPage from './pages/search-customer-records-page/SearchCustomerRecordsPage.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={CreateCustomerRecordPage}/>
        <Route exact path='/searchcustomers' component={SearchCustomerRecordsPage}/>
      </Switch>
    </div>
  );
}

export default App;
