import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }


  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      error: 'Something went wrong.',
    });
  }
  
  render() {
      return (
      <div>
        <h1>Join Short Link</h1>
        
        {this.state.error ? <p> {this.state.error} </p>: null}
        
        <form onSubmit={this.onSubmit}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password"/>
        <button>Create Account</button>
        </form>
        
        <Link to="/login"> Have an account? </Link>
      </div>
    );
  }
}
