import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';

import Header from './components/header';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Router>
    </AuthProvider>
  );
}

export default App;
