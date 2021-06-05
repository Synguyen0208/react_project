import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import "../css/chat.scoped.css";
import history from "../../history";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mess: null
    }
  }
  getData = () => {
      let email=JSON.parse(localStorage.getItem("user")).email;
      console.log(email);
    axios({
      method: 'GET',
      data: { text: "jjjj" },
      url: 'http://localhost/react-backend/test.php?email='+email,
      //timeout: 4000, // 4 seconds timeout          
    })
      .then(response => {
        // this.data = response.data;
        this.setState({ data: response.data });
        // console.log(response);
      })
  }
  componentDidMount() {
    if(localStorage.getItem("user")){
        this.intervalId = setInterval(this.timer.bind(this), 1000);
        this.getData();
    }
    else{
        alert("Vui lòng đăng nhập");
        history.push("/");
        window.location.reload();
    }
  }
  sub = () => {
    let email=JSON.parse(localStorage.getItem("user")).email;
    let fr = new FormData;
    fr.append("mess", this.state.mess);
    fr.append("email", email);
    fr.append("status", "user");
    axios({
      method: 'POST',
      data: fr,
      url: 'http://localhost/react-backend/test.php',
      //timeout: 4000, // 4 seconds timeout          
    })
      .then(response => {

        // this.setState({ data: response.data });
        // console.log(response.data);
      })
  }
  change = (e) => {
    var nam = e.target.name;
    var val = e.target.value;
    this.setState({
      [nam]: val
    })
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  timer() {
    this.getData();
  }
  render() {
    return (
      <div>
        <div className="container-fluid h-100"  style={{background:"#7F7FD5", background:"linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)"}}>
          <div className="row justify-content-center h-100">
            <div className="col-md-8 col-xl-6 chat" style={{marginTop:"5rem", marginBottom:"10rem"}}>
              <div className="card">
                <div className="card-header msg_head">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        className="rounded-circle user_img" />
                      <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                      <span>Chat with Forever Beautiful Shop</span>
                      <p>ACTIVE NOW</p>
                    </div>
                  </div>
                </div>
                <div className="card-body msg_card_body">
                  {this.state.data.length > 0 && this.state.data.map(e => {
                    if (e.status== "To") {
                      return (<div className="d-flex justify-content-start mb-4">
                        <div className="img_cont_msg">
                          <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            className="rounded-circle user_img_msg" />
                        </div>
                        <div className="msg_cotainer">
                          {e.mess}
                          <span className="msg_time">8:40 AM, Today</span>
                        </div>
                        
                      </div>)
                    }
                    else
                      return (<div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send">
                          {e.mess}
                          <span className="msg_time_send">8:55 AM, Today</span>
                        </div>
                        
                        <div className="img_cont_msg">
                          <img src={e.image} className="rounded-circle user_img_msg" />
                        </div>
                      </div>)
                  })}

                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <div className="input-group-append">
                      <span style={{height:"3rem"}} className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                    </div>
                    <form>
                    <textarea onChange={this.change} style={{width:"30rem", height:"3rem"}} name="mess" className="input-group-text"
                      placeholder="Type your message..."></textarea>
                      </form>
                    <div className="input-group-append">
                      <span onClick={this.sub} style={{height:"3rem"}} className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;