import React from 'react';
import SignUp from './components/sign-up';
import LogIn from './components/login';
import { Route, Switch } from 'react-router-dom';
import Movies from './components/movies';
import CompanyInfo from './components/companyInfo';


function App() {
  return (
    <Switch>
      <Route path='/companyInfo' component={CompanyInfo}/>
      <Route path ='/movies' component={Movies}/>
      <Route path='/sign-up' component={SignUp} />
      <Route path='/log-in' component={LogIn} />
      <Route path='/' component={LogIn}/>
    </Switch>
  );
}

export default App;
