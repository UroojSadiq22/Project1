import './App.css';
import Navbar from "./same/Navbar/navbar";
import About from "./feature/about";
import Home from "./feature/home";
import Services from './feature/services'
import Projects from './feature/projects';
import Clients from './feature/clients'
import Contact from './feature/contact'
import Footer from './same/Footer'

const App = () =>{
  return(<>
  
  <Navbar/>
  <Home/>
  <About/>
  <Services/>
  <Projects/>
  <Clients/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default App;
