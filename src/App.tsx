import React from 'react';
import './styles/App.scss';
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/Pages/LoginForm/LoginForm";
import RegisterForm from "./components/Pages/RegisterForm/RegisterForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
