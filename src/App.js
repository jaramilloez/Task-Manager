import { Route, Switch, Redirect } from 'react-router-dom';
import Admin from './components/admin'
import SignUp from './components/signUp'
import LogIn from './components/logIn'
import ATask from './components/aTask'
import NotFound from './components/notFound'
import NavBar from './components/navBar'
import './App.css';
import Tasks from './components/tasks'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/logIn' component={LogIn} />
        <Route path='/aTask/:id' component={ATask} />
        <Route path='/notFound' component={NotFound} />
        <Route path='/' exact component={Tasks} />
        <Redirect to='/notFound' />
      </Switch>
    </div>
  );
}

export default App;