import React, { Component } from 'react'

import Axios from 'axios';
import API from '../../API'
import MakeOffer from "./MakeOffer.js"

export default class MakeOfferParent extends Component {

    state = {offer:{price:"",time:"",location:"",description:""}}


    handleChange = (e) => {
        e.preventDefault();
        this.setState({offer:{...this.state.offer,[e.target.id]: e.target.value}})
        console.log(this.state);
        
    }

    // handleUrl = (e) => {
    //     e.preventDefault();
    //     this.setState({galleries: this.state.categories.concat(e.target.value)})
    //     console.log(this.state);
    // }

    // handleCategories = (e) => {
    //     // e.preventDefault();
    //     this.setState({categories: this.state.categories.concat(e)})
    //     console.log(this.state);
    // }

    handleSubmit = () =>{
        Axios.post(`${API.url}/api/v1/offers`, {offer: this.state.offer}
                    ,{headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
            console.log(r);
            
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
