
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  
  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

  }
  const toggleMode = () =>{
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor=' white';
      showAlert("light mode hase been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor=' grey';
      showAlert("dark mode hase been enabled","success"); 
    }

  }
  return (
    <>

      <Navbar  title= "Latter_Conveter" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text for analyze" mode={mode}/>
      {/* <About/> */}
      </div>
  
    </>
  );
}

export default App;

