import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Dashboard/>
    </Router>
  );
}

export default App;
