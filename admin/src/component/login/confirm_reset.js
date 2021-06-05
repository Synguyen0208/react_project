import React , {Component} from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import Function from "../component_small/function";
// import history from '../history';
import history from "../Layout/history";
class Confirm1 extends Component {
  call=new Function();
  constructor(props) {
    super(props);
    this.state={
      code:null
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
    if(this.state.code==JSON.parse(localStorage.getItem("code")))
    {
      history.push("/reset/:email="+this.props.match.params.email.split("=")[1]);
      window.location.reload();
    }
    else
    alert("The authentication code is incorrect!")
        
        
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
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Confirm Account</h3></div>
                        <div className="card-body">
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="small mb-1" htmlFor="inputPassword">Enter your code to confirm your account!</label>
                                  <input className="form-control py-4" id="inputPassword" name="code" type="number" onChange={this.hanleChange} placeholder="Enter code" required />
                                </div>
                              </div>
                              <span style={{color: 'red', marginLeft: '1rem'}}>{/*?php echo $_SESSION['errcode']?*/}</span>
                            </div>
                            <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block" type="submit" name="confirm">Send</button></div>
                          </form>
                        </div>
                        <div className="card-footer text-center">
                          <Link className="small" to ="/register">Go to create account</Link>
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

export default Confirm1;