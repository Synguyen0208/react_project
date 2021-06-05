import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import "../../css/chat.css";
// import history from "../../history";
import Chat_card from "./chat_card";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data_mess: [],
      mess: null,
      chat_card: null
    }
  }
  getData = () => {
    axios({
      method: 'GET',
      data: { text: "jjjj" },
      url: 'http://localhost/react-backend/message.php',
      //timeout: 4000, // 4 seconds timeout          
    })
      .then(response => {
        // this.data = response.data;
        this.setState({ data_mess: response.data });
        console.log(response.data);
      })
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.getData();
  }
  sub = () => {
    let email = JSON.parse(localStorage.getItem("user")).email;
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
  getCard = (email, user, image) => {
    this.setState({
      chat_card: <Chat_card email={email} user={user} image={image} />
    })
  }
  render() {
    return (
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
            <div className="container-fluid h-100" style={{ background: "#7F7FD5", background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)" }}>
              <div className="row justify-content-center h-100">
                <div class="col-md-4 chat" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
                  <div className="card" style={{ height: "500px", borderRadius: "15px !important", backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <div className="card-header msg_head">
                      <div className="d-flex bd-highlight">
                        <div className="user_info">
                          <span>Chat with Customer</span>
                        </div>
                      </div>
                    </div>
                    {this.state.data_mess.map(e => {
                      return (<div onClick={() => this.getCard(e.email, e.user, e.image)} className="row" style={{ marginTop: "1rem" }} >
                        <div className="img_cont" style={{ marginLeft: "1rem" }}>
                          <img src={e.image}
                            className="rounded-circle user_img" />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <span>Chat with {e.user}</span>
                        </div>
                      </div>
                      )
                    })}
                  </div>
                </div>
                {this.state.chat_card}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default Chat;