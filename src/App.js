import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'


function App() {
  const [mode,setmode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
     setAlert({msg:message,
     type:type});

     setTimeout(()=>{
       setAlert(null)
     },3000);
  }
  
 const toggleMode = ()=>{
    if(mode === 'light'){
     setmode("dark");
     document.body.style.backgroundColor='#143454';
     showAlert("Dark mode has been enabled",'success');
    }else{
      setmode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled",'success');
    }
  }
  return (
    <>    
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleColorMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">      
     <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
     {/*<About/>*/}
    </div>    
    </>
  );
}

export default App;
