import React, { Component } from 'react'

import Axios from 'axios';
import API from '../../API'
import MakeOffer from "./MakeOffer.js"
import history from '../../history';

export default class MakeOfferParent extends Component {

    state = {offer:{price:"",time:"",location:"",description:""}, service_id:0}

    componentDidMount(){
        const {service_id} = this.props.location.state
        this.setState({service_id: service_id})
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({offer:{...this.state.offer,[e.target.id]: e.target.value}})
        console.log(this.state);
    }


    handleSubmit = () =>{
        Axios.post(`${API.url}/api/v1/services/${this.state.service_id}/offers`, {offer: this.state.offer}
                    ,{headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
            console.log(r);
            history.push("/my-offers")
        })
        .catch(e=>{
            //alert
        })
    }
    render() {
        return (
            <div>
                    <MakeOffer handleChange={this.handleChange} 
                                   handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
