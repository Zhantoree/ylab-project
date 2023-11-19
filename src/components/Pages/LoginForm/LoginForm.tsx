import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './LoginForm.scss'
import emailImg from '../../../assets/email.png'
import passwordImg from '../../../assets/password.png'

const LoginForm = () => {
    const [remember, setRemember] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPass, setShowPass] = useState<boolean>(false)
    return (
        <div className="login">
            <div className="container">
                <div className="login__title">
                    Login
                </div>
                <div className="login__email">
                    <input type="email" value={email} onChange={e => setEmail(e.currentTarget.value)}
                           placeholder="Email"/>
                    <img className="icon" src={emailImg} alt="icon"/>
                </div>
                <div className="login__password">
                    <input type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.currentTarget.value)}
                           placeholder="Password"/>
                    <img className="icon" src={passwordImg} alt="icon"/>
                </div>
                <div className="login__show"  onClick={() => setShowPass(!showPass)}>
                    <input type="checkbox" name="remember" checked={showPass}/>
                    <label htmlFor="remember">Show password</label>
                </div>
                <div className="login__subtitle">
                    <div className="login__checkbox" onClick={() => setRemember(!remember)}>
                        <input type="checkbox" name="remember" checked={remember}/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className="login__forgot">
                        Forgot Password?
                    </div>
                </div>
                <button className="login__button">
                    Login
                </button>
                <div className="login__register">
                    Don't have an account? <NavLink to={'/register'}><span>Register</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;