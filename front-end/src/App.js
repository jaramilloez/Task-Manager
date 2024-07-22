import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getCurrentUser } from './services/authService';
import Profile from './components/profile';
import SignUpForm from './components/signUpForm';
import LogInForm from './components/logInForm';
import TaskForm from './components/taskForm';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import Tasks from './components/tasks';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {};
  
  componentDidMount() {
    try {
      const user = getCurrentUser();
      this.setState({ user });
    } catch (ex) {
      
    }
  }
  
  render() {
    return <React.Fragment>
      <ToastContainer />
      <NavBar user={ this.state.user } />
      <Switch>
        <Route path='/profile' component={ Profile } />
        <Route path='/signUp' component={ SignUpForm } />
        <Route path='/logIn' component={ LogInForm } />
        <Route path='/notFound' component={ NotFound } />
        <Route path='/:_id' component={ TaskForm } />
        <Route path='/' component={ Tasks } />
        <Redirect to='/notFound' />
      </Switch>
    </React.Fragment>
  }
}

export default App;
