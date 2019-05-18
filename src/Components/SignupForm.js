import React from 'react';

const SignupForm = (props) => {
  return (
    <form id="signup-form">
      <div>
        <label>Email</label>
        <input id="email" onChange={props.inputChangeHandler}></input>
      </div>

      <div>
        <label>Password</label>
        <input id="password" onChange={props.inputChangeHandler}></input>
      </div>
      <div>
        <label>Password Confirmation</label>
        <input id="password_confirmation" onChange={props.inputChangeHandler}></input>
      </div>
      <button onClick={(e) => props.signupHandler(e)} id="submit">Submit</button>
    </form>
  )
}

export default SignupForm;