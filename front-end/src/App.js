import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getCurrentUser } from './services/authService';
import ProtectedRoute from './components/common/protectedRoute';
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
    const { user } = this.state;
    
    return <React.Fragment>
      <ToastContainer />
      <NavBar user={ user } />
      <Switch>
        <Route path='/signUp' component={ SignUpForm } />
        <Route path='/logIn' component={ LogInForm } />
        <Route path='/profile' component={ Profile } />
        <Route path='/notFound' component={ NotFound } />
        <ProtectedRoute path='/tasks/:_id' component={ TaskForm } />
        <Route path='/tasks' component={ Tasks } />
        <Redirect path='/' to='/tasks' />
        <Redirect to='/notFound' />
      </Switch>
    </React.Fragment>
  }
}

export default App;
