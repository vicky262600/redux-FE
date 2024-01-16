import React, { useRef } from 'react';
// import { update } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/apiCalls';


const Login = () => {
  const email = useRef();
  const password = useRef();
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    const userCridentials = {
      email: email.current.value,
      password: password.current.value
    }
    e.preventDefault();
    // dispatch(update(userCridentials))
    updateUser(userCridentials, dispatch)
  }

  return (
    <div>
      <h3>
        Login
      </h3>
      <form onSubmit={handleSubmit}>
      <label for="username">username:</label>
      <input type='text' id='username' placeholder='email' ref={email} required/>
      <label for="password">password:</label>
      <input id='password' type='password' placeholder='password' ref={password} required/>
      <button type='submit'> submit </button>
      </form>

      <h3>{user.username}</h3>
    </div>
  )
}

export default Login
