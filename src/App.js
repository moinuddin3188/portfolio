import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Home/>
      <Projects/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
