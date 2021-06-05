import React, { Component } from 'react';
import '../css/Register.scoped.css';
import $ from "jquery";
import '../css/login.scoped.css';
import history from "../history";
import Function from "../function";
import { Link } from 'react-router-dom';
class Register extends Component {
  a = new Function();
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      email: null,
      user: null,
      password: null,
      confirm: null,
      code: null
    }
  }
  createForm = () => {
    const formData = new FormData();
    formData.append('phone', this.state.phone);
    formData.append('email', this.state.email);
    formData.append('user', this.state.user);
    formData.append('password', this.state.password);

    return formData;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password == this.state.confirm) {
      const form = this.createForm();
      form.append("method", "POST");
      form.append('status', "send");
      console.log(form);
      this.a.Register(form);
      setTimeout(()=>{
        if(JSON.parse(localStorage.getItem("code"))==0)
        alert("Phone number or email already exists!");
        else
        $("#con").show();
      }, 3000)
      

    }

  }
  create = (event) => {
    event.preventDefault();
    let code = JSON.parse(localStorage.getItem("code"));
    if (this.state.code == code) {
      const form = this.createForm();
      form.append("method", "POST");
      form.append('status', "in");
      console.log(form);
      this.a.Register(form);
      setTimeout(()=>{
          history.push('/login');
          window.location.reload();
      },500)
      
    }
    else {
      alert("The authentication code is incorrect!")
    }
  }
  componentDidMount(){
    localStorage.removeItem("code");
  }
  handleInputChange = (event) => {
    let value = event.target.value;

    let name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  hide = () => {
    $("#con").hide();
  }
  render() {
    return (
      <div className="main">
        {/* <input type="checkbox"></input> */}
        {/* Sign up form */}
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-form">
                <h2 className="form-title">Sign Up</h2>
                <form className="register-form" onSubmit={this.handleSubmit} id="register-form">
                  <div className="form-group">
                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input type="text" name="user" id="name" onChange={this.handleInputChange} placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                    <input type="email" name="email" id="email" onChange={this.handleInputChange} placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                    <input type="phone" name="phone" id="email" onChange={this.handleInputChange} placeholder="Your Phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                    <input type="password" name="password" id="pass" onChange={this.handleInputChange} placeholder="Password" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                    <input type="password" name="confirm" id="re_pass" onChange={this.handleInputChange} placeholder="Repeat your password" required />
                  </div>
                  <div className="form-group">
                    <input type="checkbox" name="agree-term" required />
                    <label htmlFor="agree-term" className="label-agree-term"><span><span /></span> I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                  </div>
                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                
                <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                <Link to="/login" className="signup-image-link">I am already member</Link>
              </div>
            </div>
          </div>
        </section>
        <div class="modal" id="con" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" style={{backgroundColor: "#00ccff"}}>
                <h5 class="modal-title">Verification code</h5>
                <button type="button" style={{backgroundColor:"#00ffcc"}} onClick={this.hide} class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.create}>
                <div class="modal-body">
                  <label for="" style={{position:"none"}}> Code </label><br /><br />
                  <input type="text" name="code" onChange={this.handleInputChange} required /> <br />
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Save changes</button>
                  {/* <button onClick={()=> history.push("/signUp")}>Click me!</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Sing in  Form */}
      </div>
    );
  }
}

export default Register;
