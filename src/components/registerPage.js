import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
//to connect our store with the registerPage
import { connect } from 'react-redux';

import { registerUserAction } from '../actions/authenticationActions';

class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };

    this.props.dispatch(registerUserAction(data));
  }

  render() {
    let message, isSuccess;

    //checking the response from the server if it exists
    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }
    
    return (
      <div>
        <h3>RegisterPage</h3>
        {!isSuccess ? <div>{message}</div> : browserHistory.push('login')}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

//on state change ,able to subscribe(map) it to our props
const mapStateToProps = (response) => ({
  response
});

//connect it with the registerPage component at the end
export default connect(mapStateToProps)(RegisterPage);