import { useContext, useEffect, useState } from 'react';
import './LoginPage.css';
import Header from '../../components/Header/Header'
import icon from "../../assets/icon.png";
import { useNavigate } from "react-router-dom"


function Signup(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
    <>
        <Header/>
        <div className="login-container">
            <div className = "login-form-container">
            <img src={icon} alt="stack overflow" className="login-logo" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                <h4>Username</h4>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => {
                    setName(e.target.value);
                    }}
                />
                </label>
         
                <label htmlFor="password">
                    <h4>Password</h4>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    />
                </label>
                <button type="submit" className="auth-btn">
                    Log in
                </button>
            </form>
            <p>
            Don't have an account?
            <button
                type="button"
                className="handle-switch-btn"
                onClick= {()=> navigate('/signup')}
            >
                sign up
            </button>
            </p>
            </div>
        </div>
    </>
    );
}

export default Signup;