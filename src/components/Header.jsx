import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context'

export default function Header() {
  const { logindata } = useContext(UserContext)
  const [login] = logindata
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/users">GROOTAN</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/users"><i class="fa fa-home"></i> HOME</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              {
                login ?
                login.access ?
                <Link className="nav-link" to="/logout">LOGOUT <i class="fa fa-sign-out"></i></Link>
                :
                <Link className="nav-link" to="/">LOGIN <i class="fa fa-sign-out"></i></Link>
                :
                ""
              }
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
