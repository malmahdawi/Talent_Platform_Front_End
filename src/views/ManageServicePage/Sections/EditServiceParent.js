import React, { Component } from 'react'

import Axios from 'axios';
import API from '../../../API'
import EditService from "./EditService.js"
import history from '../../../history';

export default class EditServiceParent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            service:[]
        }
    }
    

    componentDidMount(){
        console.log(this.props.location.state.service_obj.service);
        
        const {service_obj}= this.props.location.state
        this.setState({service: service_obj.service}, function () {
            // console.log(this.state);
        });
        console.log(this.state);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({service:{...this.state.service,[e.target.id]: e.target.value}})
        console.log(this.state);
        
    }



    handleSubmit = () =>{
        Axios.put(`${API.url}/api/v1/services/${this.state.service.id}`, {service: this.state.service, categories: this.state.categories, galleries: this.state.galleries}
                    ,{headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
            console.log(r);
            history.push("/my-services")
        })
        .catch(e=>{
            //alert
        })
    }
    render() {
        return (
            <div>
                    <EditService handleChange={this.handleChange} handleSubmit={this.handleSubmit} 
                                    service={this.state.service} 
                                    />
            </div>
        )
    }
}
