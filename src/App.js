// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
          <Home/>
     <Footer/>
    </div>
  );
}

export default App;