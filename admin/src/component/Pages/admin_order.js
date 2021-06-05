import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/styles.css";
import $ from "jquery";
import axios from "axios";
import Function from "../component_small/function";
import DataTables from "../component_small/dataTable";
import Modal_Data from '../Modal/modal_Data';
import Modal_Form from '../Modal/modal_Form';
import history from "../Layout/history";
class Admin_Order extends Component {
    a = new Function();
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            data: [],
            status:[],
            statusChange:null
        }
    }
    callAPI = (form) => {
        this.a.callAPI("http://localhost/react-backend/order_status.php", form, "POST");
        $("#myModal").hide();
    }
    change = (id1, status) => {
        this.setState({
            id:id1
        });
        $("#myModal").show();
    }
    close=()=>{
        $("#myModal").hide();
    }
    hanldeChange=(e)=>{
        this.setState({
            statusChange:e.target.value
        })
    }
    submit=()=>{
        const form=new FormData;
        form.append("id", this.state.id);
        form.append("status", this.state.statusChange);
        this.callAPI(form);
    }
    getData=()=>{
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-backend/order.php',
        })
            .then(response => {
                this.setState({ data: response.data });
            })
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-backend/order_status.php',
        })
            .then(response => {
                this.setState({ status: response.data });
                // console.log(response.data)
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
    go() {
        history.push('/admin_account');
        window.location.reload();
    }
    render() {
        var table = null;
        if (this.state.data.length > 0) {
            table = <DataTables change={this.change} detail={this.props.click} delete="none" view="1" data={this.state.data} />;
        }
        return (
            <div>

                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-table mr-1"></i>
                        DataTable Account Admin
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            {table}
                        </div>
                    </div>
                </div>
                <div id="myModal" style={{ display: "none", width:"50%", left:"26%" }} className="modal">
                    <div className="modal-content">
                        <button onClick={this.close}> <h3>Đóng</h3> </button>
                        
                            <div className="modal-header">
                                <h1> Update status order </h1></div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                        <label for="">Choose status order</label><br />
                                            <select name="status" onChange={this.hanldeChange} id="">
                                                {
                                                this.state.status.map(e=>{
                                                    return <option value={e.id}>{e.status}</option>
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.submit} style={{ backgroundColor: "#007bff" }} id="add" value="add" className="btn btnprimary btn-lg" name="add">
                                    Update </button> </div>
                        
                    </div>
                </div >
                
            </div>
        );
    }
}


export default Admin_Order
    ;