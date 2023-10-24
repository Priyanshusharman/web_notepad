import React from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigation=useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigation("/login");
    // window.location.pathname = "/login";
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Digital Notes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            {/* {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className='btn btn-primary mx-1' to="/login">Login</Link>
        <Link className='btn btn-primary mx-1' to="signup">signup</Link> </form> : <button className="btn btn-primary" onClick={logout}>Logout</button>} */}
            <form className="d-flex" role="search">
              <Link className='btn btn-primary mx-1' to="/login" disabled={localStorage.getItem('token')} hidden={localStorage.getItem('token')}>Login</Link>
              <Link className='btn btn-primary mx-1' to="signup" disabled={localStorage.getItem('token')} hidden={localStorage.getItem('token')} >signup</Link> </form>
            <button className="btn btn-primary" onClick={logout} disabled={!localStorage.getItem('token')} hidden={!localStorage.getItem('token')}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
