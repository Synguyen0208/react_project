import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import "./chat.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mess: null
    }
  }
  getData = () => {
    axios({
      method: 'GET',
      data: { text: "jjjj" },
      url: 'http://localhost/react-project/test.php',
      //timeout: 4000, // 4 seconds timeout          
    })
      .then(response => {
        // this.data = response.data;
        this.setState({ data: response.data });
        // console.log(response.data);
      })
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.getData();
  }
  sub = () => {
    let fr = new FormData;
    fr.append("mess", this.state.mess);
    fr.append("id_from", "1");
    fr.append("id_to", "2");
    axios({
      method: 'POST',
      data: fr,
      url: 'http://localhost/react-project/test.php',
      //timeout: 4000, // 4 seconds timeout          
    })
      .then(response => {

        this.setState({ data: response.data });
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
        <div class="container-fluid h-100">
          <div class="row justify-content-center h-100">
            <div class="col-md-8 col-xl-6 chat">
              <div class="card">
                <div class="card-header msg_head">
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        class="rounded-circle user_img" />
                      <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                      <span>Chat with Khalid</span>
                      <p>1767 Messages</p>
                    </div>
                    <div class="video_cam">
                      <span><i class="fas fa-video"></i></span>
                      <span><i class="fas fa-phone"></i></span>
                    </div>
                  </div>
                  <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                  <div class="action_menu">
                    <ul>
                      <li><i class="fas fa-user-circle"></i> View profile</li>
                      <li><i class="fas fa-users"></i> Add to close friends</li>
                      <li><i class="fas fa-plus"></i> Add to group</li>
                      <li><i class="fas fa-ban"></i> Block</li>
                    </ul>
                  </div>
                </div>
                <div class="card-body msg_card_body">
                  {this.state.data.length > 0 && this.state.data.map(e => {
                    if (e.from_id == "1") {
                      return (<div class="d-flex justify-content-start mb-4">
                        <div class="img_cont_msg">
                          <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            class="rounded-circle user_img_msg" />
                        </div>
                        <div class="msg_cotainer">
                          {e.mess}
                          <span class="msg_time">8:40 AM, Today</span>
                        </div>
                        
                      </div>)
                    }
                    else
                      return (<div class="d-flex justify-content-end mb-4">
                        <div class="msg_cotainer_send">
                          {e.mess}
                          <span class="msg_time_send">8:55 AM, Today</span>
                        </div>
                        
                        <div class="img_cont_msg">
                          <img src="" class="rounded-circle user_img_msg" />
                        </div>
                      </div>)
                  })}

                </div>
                <div class="card-footer">
                  <div class="input-group">
                    <div class="input-group-append">
                      <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                    </div>
                    <form>
                    <textarea onChange={this.change} name="mess" class="form-control type_msg"
                      placeholder="Type your message..."></textarea>
                      </form>
                    <div class="input-group-append">
                      <span onClick={this.sub} class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
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
export default App;