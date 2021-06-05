import React, { Component } from 'react';
import '../css/Register.scoped.css';
import $ from "jquery";
import '../css/login.scoped.css';
import history from "../history";
import Function from "../function";
import { Link } from 'react-router-dom';
class Forgot extends Component {
  a = new Function();
  constructor(props) {
    super(props);
    this.state = {
      form:null,
      email: null,
      password: null,
      confirm: null,
      code: null
    }
  }
  createForm = () => {
    const formData = new FormData();
    formData.append('email', this.state.email);
    return formData;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password == this.state.confirm) {
      const form = this.createForm();
      form.append("method", "POST");
      form.append('status', "send_forgot");
      console.log(form);
      this.a.Register(form);
      setTimeout(()=>{
        if(JSON.parse(localStorage.getItem("code"))==0)
        alert("Account does not exist");
        else
        $("#con").show();
      }, 3000)
      

    }

  }
  changePassword=(event)=>{
    event.preventDefault();
    if(this.state.password==this.state.confirm){
      const form = this.createForm();
      form.append("password", this.state.password);
      form.append('status', "change");
      this.a.Register(form);
      setTimeout(()=>{
        history.push('/login');
        window.location.reload();
      },500);
    }
    else
    alert("Password does not match!");
  }
  create = (event) => {
    event.preventDefault();
    let code = JSON.parse(localStorage.getItem("code"));
    
    if (this.state.code == code) {
      $("#con").hide();
      this.setState({
        form:<form className="register-form" onSubmit={this.changePassword} id="register-form">
                <div className="form-group">
                  <label htmlFor="password"><i className="zmdi zmdi-password" /></label>
                  <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} placeholder="Your Password" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password"><i className="zmdi zmdi-password" /></label>
                  <input type="password" name="confirm" onChange={this.handleInputChange} placeholder="Your Password Confirm" required />
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Send" />
                </div>
              </form>
      })
    }
    else {
      alert("Mã xác thực không đúng!")
    }
  }
  componentDidMount(){
    this.setState({
      form:<form className="register-form" onSubmit={this.handleSubmit} id="register-form">
              <div className="form-group">
                <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                <input type="email" name="email" id="email" onChange={this.handleInputChange} placeholder="Your Email" required />
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Send" />
              </div>
            </form>
    })
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
                <h2 className="form-title">Forgot password</h2>
                {this.state.form}
              </div>
              <div className="signup-image">
                <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                <Link to="/login" className="signup-image-link">Go back login page?</Link>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;
