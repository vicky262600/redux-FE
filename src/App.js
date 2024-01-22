import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
// import Register from "./pages/Register/Register";
// import {
//   Routes,
//   Route
// } from "react-router-dom";

// function App() {
//   return (
//     // <Login/>
//     // <Register/>
//     <Routes>
//       <Route path="/register" element={<Register />} />    
//     </Routes>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state)=> state.user.userInfo)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Login/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={user ? <Home/> : <Login/>} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
