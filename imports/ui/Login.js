import React from 'react';
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login to Short Link</h1>
        Login form here
        <Link to="/signup"> Don't have account? SignUp' </Link>
      </div>
    );
  }
}
