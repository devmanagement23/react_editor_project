import './App.css';
import About from './components/About';
import Navbar from './components/NavbarComponent';
import TextFormComponent from './components/TextFormComponent';

function App() {
  return (
    <>
    
      <Navbar title="TextEditoR" abouttext="About-us"/>
      
      <About/>

      <div className='container my-3'>
      <TextFormComponent heading="Enter text to edit"/>
      </div>
      

    </>
    
  );
}

export default App;
