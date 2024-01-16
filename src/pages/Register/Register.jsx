import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();



  const handleClick = (e)=>{
    e.preventDefault();
      if(password.current.value !== passwordAgain.current.value){
        console.log("possword does not match")
      }
      else{
        try{
          const user ={
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
          }
          axios.post("/auth/register", user);
          navigate("/login");
        }catch(err){
          console.log(err);
        }
      }
  }
  // console.log("username.current.value");

  

  return (
    <div>
      <form onSubmit={handleClick}> 
        <h2>Register here</h2>
        <input id='username' placeholder='username' type='text' ref={username} required/>
        <input id='email' placeholder='eamil' type='email' ref={email} required/>
        <input id='password' placeholder='password' type='password' ref={password} minLength='8'/>
        <input id='password' placeholder='password again' type='password' ref={passwordAgain}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Register;
