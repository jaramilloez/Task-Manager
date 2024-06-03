import { Route, Switch, Redirect } from 'react-router-dom';
import Admin from './components/admin';
import SignUp from './components/signUp';
import LogInForm from './components/logInForm';
import ATask from './components/aTask';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import Tasks from './components/tasks';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/aTask/:id/:title' component={ ATask } />
        <Route path='/admin' component={ Admin } />
        <Route path='/signUp' component={ SignUp } />
        <Route path='/logIn' component={ LogInForm } />
        <Route path='/notFound' component={ NotFound } />
        <Route path='/' exact component={ Tasks } />
        <Redirect to='/notFound' />
      </Switch>
    </div>
  );
}

export default App;