import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "./card";
import axios from "axios";

class Show extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            category:[],
            id:1
        }
    }

    getData=()=>{
        axios({
            method: 'GET',
            data:{text:"jjjj"},
            url: 'http://localhost/react-backend/product.php',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({data:response.data});
             console.log(response);
          })        
          .catch(error => console.error('timeout exceeded'));
          axios({
            method: 'GET',
            data:{text:"jjjj"},
            url: 'http://localhost/react-backend/category.php',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({category:response.data});
             console.log(response);
          })        
          .catch(error => console.error('timeout exceeded'));
    }
    componentDidMount() {
        // window.location.reload();
		this.intervalId = setInterval(this.timer.bind(this), 1000);
		this.getData();
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	timer() {
		this.getData();
	}
      item=(industry)=>{
        this.setState({id:industry});
    }
    submit=(event)=>{
        event.preventDefault();
    }
    render() {
        let data2=[];
        if(this.state.data.length>0){
            
            for (let index = 0; index < this.state.data.length; index++) {
                if(this.state.data[index].industry_id==this.state.id){
                    let data={
                        id:this.state.data[index].id,
                        name:this.state.data[index].name,
                        title:this.state.data[index].title,
                        image1:this.state.data[index].image1,
                        price:this.state.data[index].price,
                        sell_price:this.state.data[index].sell_price,
                        ED:this.state.data[index].ED,
                        MFG:this.state.data[index].MFG,
                        mass:this.state.data[index].mass,
                        num:this.state.data[index].num,
                        star:this.state.data[index].star,
                    }
                    let star=5;
                    if(this.state.data[index].star!=null)
                    star=this.state.data[index].star;
                    data2.push(<Card data={data} star={star} review="5"></Card>);
                }
            }
            
        }
    

        return (
            <div class="product-info">
                <form onSubmit={this.submit}>
                <div class="nav-main">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        {this.state.category.map(e=>{
                            return <li class="nav-item"><button style={{backgroundColor: "black",color: "orange",fontSize: "0.7rem"}} onClick={()=>this.item(e.id)} type="submit" class="btn btn-submit"  
                            ><b>{e.industry}</b></button></li>
                        })}
                    </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="man" role="tabpanel">
                        <div class="tab-single">
                            <div class="row">
                                {data2}
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}


export default Show;