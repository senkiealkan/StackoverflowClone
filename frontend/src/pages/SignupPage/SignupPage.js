import { useContext, useEffect, useState } from 'react';
import './SignupPage.css';
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
        <div className="signup-container">
            <div className="signup-stack-info-container">
            <h1>Join the Stack Overflow community</h1>
                <p>Get unstuck — ask a question</p>
                <p>Unlock new privileges like voting and commenting</p>
                <p>Save your favorite tags, filters, and jobs</p>
                <p>Earn reputation and badges</p>
                <p style={{ fontSize: "13px", color: "#666767" }}>
                    Collaborate and share knowledge with a private group for
                </p>
                <p style={{ fontSize: "13px", color: "#007ac6" }}>
                    Get Stack Overflow for Teams free for up to 50 users.
                </p>
            </div>
            <div className = "signup-form-container">
            <img src={icon} alt="stack overflow" className="signup-logo" />
            <form onSubmit={handleSubmit}>
            <h2 className="signup-form-title">Create your account</h2>
            <p className="signup-form-description">By clicking “Sign up”, you agree to our terms of service and acknowledge you have read our privacy policy.</p>
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
                    Sign up
                </button>
            </form>
            <p>
            Already have an account?
            <button
                type="button"
                className="handle-switch-btn"
                onClick= {()=> navigate('/login')}
            >
                Log in
            </button>
            </p>
            </div>
        </div>
    </>
    );
}

export default Signup;