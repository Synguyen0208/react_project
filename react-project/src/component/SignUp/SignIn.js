import React, { Component } from 'react';
import '../css/Register.scoped.css';
// import $ from "jquery";
import Function from "../function";
import history from "../history";
import "../css/material-design-iconic-font.min.css";
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:null,
            password:null
        }
    }
    createForm=()=>{
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('status', "login");
        return formData;
    }
    handleSubmit =(event)=>{
        let a=new Function();
        event.preventDefault();
        const form = this.createForm();
        a.Register(form);
        
        setTimeout(this.check, 1000);
    }
    check=()=>{
        if(JSON.parse(localStorage.getItem("code")==0))
                alert("Thông tin đăng nhập không đúng!");
        else{
            localStorage.setItem("user", JSON.stringify(this.state));
            history.push('/');
            window.location.reload();
        }
        
    }

    handleInputChange = (event) => {
        let value = event.target.value;

        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    signup=(response)=>{
        let res=response.profileObj;
        const formData = new FormData();
        formData.append('phone', null);
        formData.append('email', res.email);
        formData.append('user', res.name);
        formData.append('image', res.imageUrl);
        formData.append('password', null);
        formData.append("method", "POST");
        formData.append('status', "register");
        localStorage.setItem("user", JSON.stringify(response.profileObj));
        axios({
            method: 'POST',
            data: formData,
            url: 'http://localhost/react-backend/account.php',
            timeout: 4000,    // 4 seconds timeout          
        })
            .then(response => {
                localStorage.setItem("res1", response.data);
                console.log(response);
                history.push('/');
                window.location.reload();
            });
       
    };
    signupFace=(response)=>{
    localStorage.setItem("user", JSON.stringify(response));
    const formData = new FormData();
    formData.append('phone', null);
    formData.append('email', response.email);
    formData.append('user', response.name);
    formData.append('image', response.picture.data.url);
    formData.append('password', null);
    formData.append("method", "POST");
    formData.append('status', "register");
    axios({
        method: 'POST',
        data: formData,
        url: 'http://localhost/react-backend/account.php',
        timeout: 4000,    // 4 seconds timeout          
    })
        .then(response => {
            history.push('/');
            console.log(response);
            window.location.reload();
        })
        };
    render() {
        return (
            <div>
                {/* Sing in  Form */}
                <section className="sign-in">
                    <div className="container">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure><img src="images/signin-image.jpg" alt="sign up image" /></figure>
                                <Link to="/register" className="signup-image-link">Create an account</Link>
                                <Link to="/forgot" className="signup-image-link">Forgor password</Link>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">Sign In</h2>
                                <form className="register-form" onSubmit={this.handleSubmit} id="login-form">
                                    <div className="form-group">
                                        <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                                        <input type="text" name="email" onChange={this.handleInputChange} id="your_name" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                                        <input type="password" name="password" id="your_pass" onChange={this.handleInputChange} placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                        <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" />
                                    </div>
                                </form>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                    <li><FacebookLogin
                                            appId="973240183442666"
                                            cssClass="google"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            callback={this.signupFace} />
                                         </li>
                                        <li><GoogleLogin
                                            clientId="392057758323-he2vhsi1ml0glm4ur3ng2tbu4hgrajeg.apps.googleusercontent.com"
                                            buttonText="Login with Google"
                                            style={{width:"2rem"}}
                                            onSuccess={this.signup}
                                            onFailure={this.signup} ></GoogleLogin>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default SignIn;