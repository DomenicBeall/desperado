import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';

import AuthRoute from './context/AuthRoute';
import AntiAuthRoute from './context/AntiAuthRoute';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (

      <AuthProvider>
        <div className="background" />
        <div className="vignette" />
        <div className="container">
          <Router>
            <Header/>
            <hr/>
            <Route exact path="/" component={Home} />
            <AntiAuthRoute exact path="/login" component={Login} />
            <AntiAuthRoute exact path="/register" component={Register}/>
          </Router>
        </div>
      </AuthProvider>

  );
}

export default App;
