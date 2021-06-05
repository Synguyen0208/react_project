import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Function from '../component_small/function';
import history from "../Layout/history";
class Forgot extends Component {
  call=new Function();
  constructor(props) {
    super(props);
    this.state={
      email:null
    }
  }
  hanleChange=(event)=>{
    var nam=event.target.name;
    var val=event.target.value;
    this.setState({
      [nam]: val
  });
  }
  handleSubmit = (event) => {
    event.preventDefault();
      const form = new FormData;
      form.append("email", this.state.email);
      form.append('status', "sendReset");
      this.call.callAPI("http://localhost/react-backend/account_admin.php", form, "POST");
      setTimeout(() => {
        if(JSON.parse(localStorage.getItem("code"))=="0")
        alert("Account does not exist!");
        else{
          history.push("/confirm_reset/:email="+this.state.email);
          window.location.reload();
        }
      }, 4000);
    }       
  render() {
    return (
      <div>
 <div style={{ backgroundColor: "#2196F3" }} id="layoutAuthentication">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                      <div className="card-body">
                        <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                        <form >
                          <div className="form-group">
                            <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                            <input className="form-control py-4" id="inputEmailAddress" name="email" onChange={this.hanleChange} type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                          </div>
                          <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                            <Link className="small" to ="/login">Return to login</Link>
                            <button className="btn btn-primary" onClick={this.handleSubmit} name="reset">Reset password</button>
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
      </div>
      </div>
    );
  }
}


export default Forgot;