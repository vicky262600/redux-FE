import React from 'react'


const Login = () => {
  return (
    <div>
      <h3>
        Login
      </h3>
      <form>
      <label for="username">username:</label>
      <input type='text' id='username' placeholder='email' required/>
      <label for="password">password:</label>
      <input id='password' type='password' placeholder='password' required/>
      <button type='submit'> submit </button>
      </form>
    </div>
  )
}

export default Login