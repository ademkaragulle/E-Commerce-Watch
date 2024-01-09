import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SignUp } from '../../../store/slices/userSlice'

function Register() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const dispatch = useDispatch();
    const Login = () => {
        const newUSer = {
            "userName": userName,
            "email": email,
            "password": password
        }
        dispatch(SignUp(newUSer))
    }

    return (
        <div id="lg2" className="tab-pane">
            <div className="login-form-container">
                <div className="login-register-form">
                    <div >
                        <div className="login-input-box">
                            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="user-name" placeholder="User Name" />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="user-password" placeholder="Password" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} name="user-email" placeholder="Email" type="email" />
                        </div>
                        <div className="button-box">
                            <button onClick={() => Login()} className="register-btn btn" type="submit">
                                <span>Register</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register