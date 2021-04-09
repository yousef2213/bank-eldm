import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import Singup from './pages/Singup';
import ContactUs from './pages/ContactUs';
import Blood from './pages/Blood';
import About from './components/About';
import Com from './components/Com';
import Single from './components/Single';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Sign-up" component={Singup} />
        <Route path="/about" component={About} />
        <Route path="/Single/:id" component={Single} />
        <Route path="/سياسة-الخصوصية" component={Com} />
        <Route path="/المتبرعين/:city/:type" component={Blood} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
