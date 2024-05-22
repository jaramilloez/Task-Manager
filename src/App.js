import NavBar from './components/navBar'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Tasks from './components/tasks'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/' component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
