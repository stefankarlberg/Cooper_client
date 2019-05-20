import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import { authenticate } from './Modules/Auth';
import { register } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      renderInputFields: false,
      renderSignupForm: false,
      authenticated: false,
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
      entrySaved: false,
      renderIndex: false
    }
  }
  
  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
      if (resp.authenticated === true) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ message: resp.message, renderLoginForm: false })
      }
  }

  async onSignup(e) {
    e.preventDefault();
    let resp = await register(this.state.email, this.state.password, this.state.password_confirmation)
      if (resp.authenticated === true) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ message: resp.message, renderSignupForm: false })
      }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
  this.setState({ updateIndex: false });
  }




  render() {
    let renderMenuItemShowPastEntries;
    let renderMenuItemShowInputFields;
    let renderMenuItemLogin;
    let renderMenuItemSignup;
    let renderMenuItemWelcome
    let renderInputFields
    let renderMenuItemLogout
    let renderWelcomeUser
    let renderLogin
    let renderLoginForm;
    let user;
    let performanceDataIndex;
    let renderSignup;
    let renderLogout
    let message

    


  renderMenuItemShowInputFields= (
    <a id="cooper" class="ui item" onClick={() => this.setState({ renderIndex: false, renderInputFields: true, renderSignupForm: false, renderLoginForm: false })}>
    Cooper Test
    </a>
    )

  renderMenuItemShowPastEntries= (
    <a d="stat" class="ui item" onClick={() => this.setState({ renderIndex: true, renderInputFields: false, renderSignupForm: false, renderLoginForm: false })}>
    Statistics
    </a>
  )

  renderMenuItemLogin = (
    <a id = "login" class="ui item" onClick={() => this.setState({ renderIndex: false, renderInputFields: false, renderLoginForm: true, renderSignupForm: false})}>
    Sign in
    </a>
  )

  renderMenuItemSignup= (
    <a id = "signup" class="ui item" onClick={() => this.setState({ renderIndex: false, renderInputFields: false, renderSignupForm: true, renderLoginForm: false })}>
    Register
    </a>
  )

  renderMenuItemLogout= (
    <a class="ui item" onClick={() => this.setState({ authenticated: false, renderIndex: false, renderInputFields: false, renderSignupForm: true, renderLoginForm: false })}>
    Log out
    </a>
  )

  if (this.state.authenticated === true) {
  user = JSON.parse(sessionStorage.getItem('credentials')).uid
  renderWelcomeUser= (
    <p class="ui item">
     Hi {user}
    </p>
  )}
 
  if (this.state.renderIndex === true) {
    performanceDataIndex = (
      <>
      <DisplayPerformanceData
        updateIndex={this.state.updateIndex}
        indexUpdated={this.indexUpdated.bind(this)}
      />
      {/* <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button> */}
    </>
      )
  }

  // Log in
  if (this.state.authenticated === false && this.state.renderLoginForm === true) {
    renderLoginForm = (
      <>
        <LoginForm 
          loginHandler={this.onLogin.bind(this)}
          inputChangeHandler={this.onChange.bind(this)}
        />
      </>
    )
  } 

   // Input fields
   if (this.state.renderInputFields === true) {
    renderInputFields = (
        <InputFields 
        inputChangeHandler={this.onChange.bind(this)}
        />
      )
    } 

    // Sign up
  if (this.state.renderSignupForm === true) {
      renderSignup = (
        <SignupForm
        inputChangeHandler={this.onChange.bind(this)}
        signupHandler={this.onSignup.bind(this)}
        />
      )
    } else {
      message = (
        this.state.message
      )
      this.state.message = ''
    }
    
  

    return (
      <div class="ui raised very padded text container segment craft_top">
          <div>
      <div class="ui secondary pointing menu craft_bottom">
      <a class="active item">
        Home
      </a>
      { renderMenuItemShowInputFields }
      { this.state.authenticated ? renderMenuItemShowPastEntries : null }
    
      <div class="right menu">
     
     
      { this.state.authenticated ? renderWelcomeUser : null }
      { this.state.authenticated ? null : renderMenuItemWelcome }
      { this.state.authenticated ? null : renderMenuItemLogin }
      { this.state.authenticated ? null : renderMenuItemSignup }
      { this.state.authenticated ? renderMenuItemLogout : null }
      </div>
    </div>

    </div>
      <div>
        {message}
        {renderInputFields}
        {renderLoginForm}
        {renderSignup}
        {performanceDataIndex}
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={this.entryHandler.bind(this)}
        />  
       

      </div>
      </div>
    );
  }
}


export default App;