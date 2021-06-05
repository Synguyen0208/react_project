import React, { Component } from 'react';
import "./register.css";
import {Link} from 'react-router-dom';
import Function from "../component_small/function";
import history from "../Layout/history";
class Register extends Component {
  call=new Function();
  constructor(props) {
    super(props);
    this.state={
      email:null,
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
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    const data={
      email: this.state.email,
      password:this.state.password
    }
    setTimeout(localStorage.setItem("form", JSON.stringify(data)), 500);
    
    return formData;
}
handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.password==this.state.confirm){
        const form = this.createForm();
        form.append('status', "");
        this.call.callAPI("http://localhost/react-backend/account_admin.php", form, "POST");
        setTimeout(() => {
          history.push("confirm");
        window.location.reload();
        }, 4000);
        
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
                  <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                      <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                            <input className="form-control py-4" id="inputEmailAddress" name="email" onChange={this.hanleChange} type="email" aria-describedby="emailHelp" placeholder="Enter email address" required />
                          </div>
                          <div className="form-row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                <input className="form-control py-4" id="inputPassword" name="password" onChange={this.hanleChange} type="password" placeholder="Enter password" required />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="small mb-1" htmlFor="inputConfirmPassword">Confirm Password</label>
                                <input className="form-control py-4" id="inputConfirmPassword" name="confirm" onChange={this.hanleChange} type="password" placeholder="Confirm password" required />
                              </div>
                            </div>
                            <span style={{ color: 'red', marginLeft: '1rem' }}>{/*?php echo $_SESSION['err']?*/}</span>
                          </div>
                          <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block" type="submit" name="register">Create Account</button></div>
                        </form>
                      </div>
                      <div className="card-footer text-center">
                        <Link className="small" to="/login">Have an account? Go to login</Link>
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

export default Register;
