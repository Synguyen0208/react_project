import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
class Chat_card extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentWillMount() {

    }
    getData=()=>{
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-backend/test.php?email='+this.props.email,
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
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	timer() {
		this.getData();
	}
    sub = () => {
        let fr = new FormData;
        fr.append("mess", this.state.mess);
        fr.append("email", this.props.email);
        fr.append("status", "admin");
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
    render() {
        return (
            <div className="col-md-8 col-xl-6 chat" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
                  <div className="card" style={{ height: "500px", borderRadius: "15px !important", backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <div className="card-header msg_head">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img src={this.props.image}
                            className="rounded-circle user_img" />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <span>Chat with {this.props.user}</span>
                          <p>ACTIVE NOW</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body msg_card_body">
                      {this.state.data.length > 0 && this.state.data.map(e => {
                        if (e.status == "From") {
                          return (<div className="d-flex justify-content-start mb-4">
                            <div className="img_cont_msg">
                              <img src={this.props.image}
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
                              <img src="https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png" className="rounded-circle user_img_msg" />
                            </div>
                          </div>)
                      })}

                    </div>
                    <div className="card-footer">
                      <div className="input-group">
                        <div className="input-group-append">
                          <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                        </div>
                        <form>
                          <textarea onChange={this.change} name="mess" className="input-group-text"
                            placeholder="Type your message..."></textarea>
                        </form>
                        <div className="input-group-append">
                          <span onClick={this.sub} className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
        );
    }
}



export default Chat_card;