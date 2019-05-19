import React from 'react';

const InputFields = (props) => {
  return (
    <>
  <form class="ui form">
    <div>
    <h1 class="ui header">Cooper Test</h1>
    <p>Please log in or register to save data and get some statistics.</p>
      <div class="three fields">
        <div class="field">
          <label>Distance</label>
          <input id="distance" onChange={props.inputChangeHandler} type="text" placeholder="Distance km" />
        </div>
        <div class="field">
          <label>Age</label>
          <input id="age" onChange={props.inputChangeHandler} type="text"  placeholder="Age year" />
        </div> 
        <div class="field">
          <label>Gender</label>
          <div class="field">
          <select id="gender" onChange={props.inputChangeHandler} class="ui fluid search dropdown">
          <option value="male">Male</option>
          <option value="female">Female</option>
          </select>
          </div>
        </div>
      </div>
    </div>
</form>


    </>
  )
}

export default InputFields;