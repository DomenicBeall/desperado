import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';

import AuthRoute from './context/AuthRoute';
import AntiAuthRoute from './context/AntiAuthRoute';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Route exact path="/" component={Home} />
        <AntiAuthRoute exact path="/login" component={Login} />
      </Router>
    </AuthProvider>
  );
}

export default App;
