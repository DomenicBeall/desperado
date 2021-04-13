import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

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
