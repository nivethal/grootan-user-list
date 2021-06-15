import React, { useState,useContext } from 'react'
import {UserContext} from '../Context'

export default function Login() {
    const {logindata}=useContext(UserContext)
    const [login, setLogin] = logindata

    const [formdata, setFormdata] = useState({})
    const [msg, setMsg] = useState({})

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = formdata
        const { user, pass} = login
        if (!username || username === "") {
            setMsg({ username: "Enter your username!" })
        } else if (!password || password === "") {
            setMsg({ password: "Enter your password!" })
        } else {
            setMsg({})
            if (user !== username) setMsg({ username: "Wrong username!" })
            else if (pass !== password) setMsg({ password: "Wrong password!" })
            else {
                let login = { user: "nivetha", pass: "niviL03!", access: true }
                localStorage.setItem("key", JSON.stringify(login))
                setLogin(login)
                setMsg({status:"Success"})
            }
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 m-auto">
                    <h4 className="text-center text-primary m-3">Login</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text"
                                placeholder="Username"
                                name="username"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <small className="text-danger m-2">{msg.username ? msg.username : ""}</small>
                        </div>
                        <div className="form-group">
                            <input type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <small className="text-danger m-2">{msg.password ? msg.password : ""}</small>
                        </div>
                        <div className="form-group text-center mb-3">
                            <input type="submit"
                                value="Login"
                                className="btn btn-md btn-success"
                            />
                        </div>
                        <div className="text-center">
                        <small className="text-success">{msg.status ? msg.status : ""}</small>
                          <i class="fa fa-check-circle"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
