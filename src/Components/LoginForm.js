import React from 'react';

const LoginForm = (props) => {
  return (
    <form class="ui form" >
      <div>
        <h1 class="ui header">Sign in</h1>
        <p>Please sign in with your e-mail and password.</p>
          <div class="field">
            <label>E-mail</label>
            <input id="email" onChange={props.inputChangeHandler} type="text" placeholder="E-mail" />
          </div>
          <div class="field">
            <label>Password</label>
            <input id="password" onChange={props.inputChangeHandler} type="text" placeholder="Password" />
          </div> 
          <div class="field">
            <button class="ui button" onClick={(e) => props.loginHandler(e)} id="submit">Submit</button>
          </div> 
      </div>
    </form>
  )
}

export default LoginForm;