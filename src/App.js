import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContextProvider from './contexts/Context';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './tracks/Lyrics';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/lyrics/track/:id' component={Lyrics} />
          </Switch>
        </div>

      </Router>
    </ContextProvider>
  );
}

export default App;
