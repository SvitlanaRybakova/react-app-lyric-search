import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContextProvider from './tracks/contexts/Context';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path='/' component={Index} />
          </Switch>
        </div>

      </Router>
    </ContextProvider>
  );
}

export default App;
