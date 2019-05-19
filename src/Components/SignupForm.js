import React from 'react';

const SignupForm = (props) => {
  return (
    // <form id="signup-form">
    //   <div>
    //     <label>Email</label>
    //     <input id="email" onChange={props.inputChangeHandler}></input>
    //   </div>

    //   <div>
    //     <label>Password</label>
    //     <input id="password" onChange={props.inputChangeHandler}></input>
    //   </div>
    //   <div>
    //     <label>Password Confirmation</label>
    //     <input id="password_confirmation" onChange={props.inputChangeHandler}></input>
    //   </div>
    //   <button onClick={(e) => props.signupHandler(e)} id="submit">Submit</button>
    // </form>



<form class="ui form" >
      <div>
        <h1 class="ui header">Sign in</h1>
        <p>Please register with e-mail, password and password confirmation.</p>
          <div class="field">
            <label>E-mail</label>
            <input id="email" onChange={props.inputChangeHandler} type="text" placeholder="E-mail" />
          </div>
          <div class="field">
            <label>Password</label>
            <input id="password" onChange={props.inputChangeHandler} type="text" placeholder="Password" />
          </div> 
          <div class="field">
            <label>Password confirmation</label>
            <input id="password_confirmation" onChange={props.inputChangeHandler} type="text" placeholder="Password confirmation" />
          </div> 
          <div class="field">
            <button class="ui button" onClick={(e) => props.loginHandler(e)} id="submit">Submit</button>
          </div> 
      </div>
    </form>
  )
}

export default SignupForm;