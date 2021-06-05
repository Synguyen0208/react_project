import React, { Component } from 'react';
import "./register.css";
import {Link} from 'react-router-dom';
import history from "../Layout/history";
import Function from '../component_small/function';
class Reset extends Component {
  call = new Function();
  constructor(props) {
    super(props);
    this.state={
      password:null,
      confirm:null
    }
  }
  hanleChange=(event)=>{
    var nam=event.target.name;
    var val=event.target.value;
    this.setState({
      [nam]: val
  });
  }
  createForm=()=>{
    const formData = new FormData();
    formData.append('email', this.props.match.params.email.split("=")[1]);
    formData.append('password', this.state.password);
    return formData;
}
handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.password==this.state.confirm){
        const form = this.createForm();
        form.append('status', "reset");
        this.call.callAPI("http://localhost/react-backend/account_admin.php", form, "POST");
        setTimeout(() => {
          history.push("/login");
        window.location.reload();
        }, 500);
    }
    else
    alert("Mật khẩu không trùng khớp!");
    
}
  render() {
    return (
      <div style={{ backgroundColor: "#2196F3" }} id="layoutAuthentication">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                      <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <label className="small mb-1" htmlFor="inputPassword">New Password</label>
                            <input className="form-control py-4" id="inputPassword" name="password" onChange={this.hanleChange} type="password" placeholder="Enter password" />
                          </div>
                          <div className="form-group">
                            <label className="small mb-1" htmlFor="inputPassword">Confirm New Password</label>
                            <input className="form-control py-4" id="inputPassword" name="confirm" onChange={this.hanleChange} type="password" placeholder="Enter password" />
                            <span style={{ color: 'red' }}>{/*?php echo $_SESSION['err2']?*/}</span>
                          </div>
                          <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                            <button className="btn btn-primary" type="submit" name="resetpassword">Reset password</button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center">
                        <Link className="small" to ="/login">Go to login page!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;