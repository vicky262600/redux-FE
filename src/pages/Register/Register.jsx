// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
  // const username = useRef();
  // const email = useRef();
  // const password = useRef();
  // const passwordAgain = useRef();
  // const navigate = useNavigate();



  // const handleClick = (e)=>{
  //   e.preventDefault();
  //     if(password.current.value !== passwordAgain.current.value){
  //       console.log("possword does not match")
  //     }
  //     else{
  //       try{
  //         const user ={
  //           username: username.current.value,
  //           email: email.current.value,
  //           password: password.current.value
  //         }
  //         axios.post("/auth/register", user);
  //         navigate("/login");
  //       }catch(err){
  //         console.log(err);
  //         console.log("err")
  //       }
  //     }
  // }
  // console.log("username.current.value");

  

//   return (
//     <div>
//       <form onSubmit={handleClick}> 
//         <h2>Register here</h2>
//         <input id='username' placeholder='username' type='text' ref={username} required/>
//         <input id='email' placeholder='eamil' type='email' ref={email} required/>
//         <input id='password' placeholder='password' type='password' ref={password} minLength='8'/>
//         <input id='passwordAgain' placeholder='password again' type='password' ref={passwordAgain}/>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default Register;
import axios from 'axios'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import { loginCall } from '../apiCalls'
// import {AuthContext} from '../context/AuthContext'
// import { useContext } from 'react'


const Loginn = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightpink;
`
const Card = styled.div`
  width: 50%;
  min-height: 570px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  `
  const Left = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  flex: 1;
  padding: 40px;
  gap: 30px;
  `
  const Title = styled.div`
  font-size: 75px;
  `
  const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  `
  
  const Disc = styled.p`
  
  `
  const Spam = styled.span`
  font-size: 14px;
  padding-bottom: 15px; 
  cursor: pointer;
  `
  const Button = styled.button`
  border: none;
  width: 50%;
  padding: 10px;
  color: purple;
  background-color: white;
  cursor: pointer;
  font-weight: bold;  
  `
  const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 40px;
  justify-content: center;
  gap: 50px;
  background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("https://user-images.githubusercontent.com/145147066/269408179-6737fb80-f3b8-433e-ab97-b45d131e8f8c.jpeg");
  background-size: cover;
  `
  const LoginTitle = styled.h1`
  color: #555;
  `
  const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  `
  const Buttonlogin = styled.button`
  width: 50%;
  padding: 10px;
  color: purple;
  border: none;
  background-color: #938eef;
  cursor: pointer;
  font-weight: bold; 
`  

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
      if(password.current.value !== passwordAgain.current.value){
        console.log("possword does not match")
        alert("passwords don't match!")
      }
      else{
        try{
          const user ={
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
          }
          axios.post("https://redux-server-chi.vercel.app/api/auth/register", user);
          navigate("/login");
        }catch(err){
          console.log(err);
          console.log("err")
        }
      }
  };

  return (
    <Loginn>
        <Card>
        <Left onSubmit={handleClick}>
            <LoginTitle>Register</LoginTitle>
            <Input type='text' placeholder= "Username" ref={username} required/>
            <Input type='email' placeholder= "Email" ref={email} required/>
            <Input type='password' placeholder= "password" ref={password} minLength="6" required/>
            <Input type='password' placeholder= "Password Again" ref={passwordAgain} minLength="6" required/>
            <Buttonlogin type='submit'>Register</Buttonlogin>
        </Left>
        <Right>        
            <Title><b>RIRA.</b></Title>
            <Text>
              <Disc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia! Soluta fugiat ad rerum aperiam possimus sunt ex corporis obcaecati dolores hic quos, accusamus ea exercitationem saepe earum blanditiis minus! </Disc>
              <Spam>Do you have an account?</Spam>
              {/* react router established */}
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </Text>
        </Right>
        </Card>
    </Loginn>
  )
}

export default Register