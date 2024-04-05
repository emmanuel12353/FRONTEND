import React from "react";

import UBA from './UBA-logo-2.gif'
class Navbar extends React.Component {
    render() {
      return (
        <div className="bg-light">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={UBA} width=" 100px" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active fw-bolder" href="#">Home </a>
      <a className="nav-item nav-link fw-bolder" href="#">log out</a>
    </div>
  </div>
</nav>
</div>
        </div>
      
      );
    }
  }
export default Navbar;
