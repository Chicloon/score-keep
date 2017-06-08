import React from 'react';
// import { Link } from 'react-router-dom';

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count: 0,
    };
  }

  logOut = () => {
    this.props.history.push('/');
  }


  render() {
    
    return (
      <div>
      <h1> Your links </h1>
        <p>{this.state.count}</p>
        
        <button onClick={this.logOut} > Logout</button>
      </div>
    );
  }
}
