import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header />
      <Navbar />
      <Router>
        <Switch>          
          <Route path="/profile"><div><p>This is profile page</p></div></Route>
          <Route path="/contact"><div><p>This is contact page</p></div></Route>
          <Route path="/application"><div><p>This is application page</p></div></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;