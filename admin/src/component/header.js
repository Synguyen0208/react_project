import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:null
        }

    }
    componentDidMount(){
        const form=new FormData;
        form.append("status", "image");
        form.append("email", JSON.parse(localStorage.getItem("account")).email);
        axios({
            method: 'POST',
            data: form,
            url: 'http://localhost/react-backend/account_admin.php',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ image: response.data.image });
                console.log(response.data)
            })
    }
show=()=>{
    alert(document.getElementById("drop").style.display);
    if(document.getElementById("drop").style.display=="none")
    document.getElementById("drop").style.display="block";
    else
    document.getElementById("drop").style.display="none";
}
logout=()=>{
    localStorage.removeItem("account");
    window.location.reload();
}

    render() {
        return (
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
            
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            <ul className="navbar-nav ml-auto ml-md-0">
                <img style={{ verticalAlign: "middle",width: "2rem",height: "2rem", borderRadius: "50%", marginRight:"1rem", marginTop:"0.25rem" }} src={this.state.image}></img>
                <button className="btn btn-primary" onClick={this.logout} name="logout">Logout</button> 
            </ul>
        </nav>
        );
    }
}



export default Header;