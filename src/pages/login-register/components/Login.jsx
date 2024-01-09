import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { currentUser } = useSelector((store) => {
        return {
            currentUser: store.currentUser.currentUser,
        }
    })

    const Login = () => {
        const user = {
            "userName": userName,
            "password": password
        }
        dispatch(login(user))
    }

    const redirectoAction = () => {
        navigate("/");
    }



    return (
        <>
            {
                currentUser == null ? <div id="lg1" className="tab-pane active">
                    <div className="login-form-container">
                        <div className="login-register-form">
                            <div>
                                <div className="login-input-box">
                                    <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='User Name' />
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                </div>

                                <div className="button-box">
                                    <div className="login-toggle-btn">
                                        <input type="checkbox" />
                                        <label>Remember me</label>
                                        <a >Forgot Password?</a>
                                    </div>
                                    <div className="button-box">
                                        <button onClick={() => Login()} className="login-btn btn" >
                                            <span>Login</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                    redirectoAction()
            }
        </>
    )
}

export default Login