import React from 'react'

const register = () => {
  return (
    <div>
      <form>
        <h2>Register here</h2>
        <input id='username' placeholder='username' type='text' required/>
        <input id='email' placeholder='eamil' type='email' required/>
        <input id='password' placeholder='password' type='password' minLength='8'/>
        <input id='password' placeholder='password again' type='password'/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default register
