import React , {Component} from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import Function from "../component_small/function";
// import history from '../history';
import history from "../Layout/history";
class NotAccept extends Component {
    back=()=>{
        history.push("/login");
        window.location.reload();
    }
    render() {
        return (
            <div id="layoutAuthentication" style={{backgroundColor:"#2196F3"}}>
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <form method="post" acction="">
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputEmailAddress">SORRY YOUR ACCOUNT DO NOT ACCEPT BY ADMIN</label>
                                            </div>
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="small" onClick={this.back}>Go back to login page</a>
                                            </div>
                                        </form>
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

export default NotAccept;