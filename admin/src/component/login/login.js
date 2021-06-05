import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Function from '../component_small/function';
import { Link } from 'react-router-dom';
import history from '../Layout/history';
class Login extends Component {
  a=new Function;
  constructor(props) {
    super(props);
    this.state={
      email:null,
      password:null
    }
  }
  hanleChange=(event)=>{
    var nam=event.target.name;
    var val=event.target.value;
    this.setState({
      [nam]: val
  });
  }
  submit=(event)=>{
    event.preventDefault();
    const form=new FormData();
    form.append("email", this.state.email);
    form.append("password", this.state.password);
    form.append("status", "login");
    this.a.callAPI("http://localhost/react-backend/account_admin.php", form, "POST");
    setTimeout(() => {
      if(JSON.parse(localStorage.getItem("code"))=="1"){
        localStorage.setItem("account", JSON.stringify(this.state));
        history.push('/');
        window.location.reload();                                                                                                                                                                                       
      }
      if(JSON.parse(localStorage.getItem("code"))=="2"){
        history.push('/notAccept');
        window.location.reload();                                                                                                                                                                                       
      }
      if(JSON.parse(localStorage.getItem("code"))=="0"){
        alert("Account does not exist!");                                                                                                                                                                                 
      }
    }, 1000);
  }
  render() {
    return (
      <div style={{backgroundColor:"#2196F3"}} id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                    <div className="card-body">
                      <form onSubmit={this.submit}>
                        <div className="form-group">
                          <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                          <input className="form-control py-4" onChange={this.hanleChange} id="inputEmailAddress" name="email" type="email" placeholder="Enter email address" />
                        </div>
                        <div className="form-group">
                          <label className="small mb-1" htmlFor="inputPassword">Password</label>
                          <input className="form-control py-4" id="inputPassword" onChange={this.hanleChange} name="password" type="password" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                            <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                          </div>
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to="/forgot">Forgot Password?</Link>
                          <button className="btn btn-primary" type="submit" name="login">Login</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center">
                    <Link className="small" to="/register">Need an account? Sign up!</Link>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

      </div>
    );
  }
}


export default Login;


