import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <>
        <Link to="/dashbourd">Dashbourd</Link> - 
        <Link to="/about-us">About us</Link>
      </>
    )
  }
}

export default Navbar
