import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  checkUser = () => {
    console.log(Accounts.userId());
  }

  logout = () => {
    Accounts.logout();
  }
  onSubmit = (e) => {
    e.preventDefault();

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    Accounts.createUser({ email, password }, (err) => {
      console.log(err);
    });


  }

  render() {
    return (
      <div>
        <h1>Join Short Link</h1>

        {this.state.error ? <p> {this.state.error} </p> : null}
        <button onClick={this.checkUser}> Check user </button>
        <button onClick={this.logout}> Logout </button>
        <form onSubmit={this.onSubmit}>
          <input type="email" name="email" ref="email" placeholder="Email" />
          <input type="password" name="password" ref="password" placeholder="Password" />
          <button>Create Account</button>
        </form>

        <Link to="/login"> Have an account? </Link>
      </div>
    );
  }
}
