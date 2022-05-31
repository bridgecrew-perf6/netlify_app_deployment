
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter , Routes , Route , Link} from "react-router-dom"

function App() {
  const baseurl = process.env.REACT_APP_BASE_URL
  return (
    <BrowserRouter className="App">
      <h1 className='app'> Base Url : { baseurl}</h1>
      <div style={{display:"flex" , alignItems:"center" , }}>
        <h2 style={{margin:"20px"}}>
          <Link to={"/"}>Home</Link>
        </h2>
        <h2 style={{ margin: "20px" }}>
          <Link to={"/about"}>about</Link>
        </h2>

        <h2 style={{ margin: "20px" }}>
          <Link to={"/contact"}>Contact</Link>
        </h2>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
