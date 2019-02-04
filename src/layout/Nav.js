import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    // REMOVE LS TOKEN; UPDATE PARENT STATE
    localStorage.removeItem('serverToken')
    this.props.updateUser();
  }

  render() {
    let links = '';
    if(this.props.user){
      links = (
          <span>
            <a onClick={this.handleLogout}>Logout</a>
            <Link to="/profile">Profile</Link>
          </span>
        );
    }
    else {
      links = (
          <span>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link> 
          </span>
        );
    }
    return(
        <div>
          <div className="nav-wrapper">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/result">Today's Mood</Link> 
            {links}
          </nav>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Don't Be Salty!</h1>
          </header>
        </div>
        </div>
      );
  }
}

export default Nav;
