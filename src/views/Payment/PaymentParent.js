import React, { Component } from 'react'
import Payment from "./Payment"
import Axios from 'axios'
import API from '../../API'
import history from '../../history';

var moment = require('moment');

export default class PaymentParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             service_id: 0,
             offer_id: 0,
             payment: {reciept_url:"", price:null, time:moment(Date()).format("MMMM DD, YYYY hh:mm")}
        }
    }

    handleSubmit = () => {
        Axios.post(`${API.url}/api/v1/services/${this.state.service_id}/offers/${this.state.offer_id}/payments`, {payment:this.state.payment},
        {headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
            console.log(r);
            history.push("/my-offers")
        })
        .catch(e=>{
            console.log(e);
        })
    }

    handleChangeDate = (e) => {
        this.setState({payment:{...this.state.payment, time:moment(e).format("MMMM DD, YYYY hh:mm")}})
    }
    handleChange = (e,date) => {
        e.preventDefault()
        this.setState({payment:{...this.state.payment, [e.target.id]: e.target.value}})
    }
    
    componentDidMount(){
        const params = this.props.location.state 
        this.setState({service_id: params.service_id, offer_id: params.offer_id})
        console.log(params);        
    }
    render() {
        return (
            <div>
                <Payment handleChangeDate={this.handleChangeDate} handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} time={this.state.payment.time}/>
            </div>
        )
    }
}
