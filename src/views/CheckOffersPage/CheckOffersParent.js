import React, { Component } from 'react'
import Axios from 'axios';
import CheckOffersContainer from "./Senctions/CheckOffersContainer.js"
import API from "../../API"

export default class CheckOffersParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            offers: [],
            service_id: 0
        }
    }
    

    componentDidMount(){
        const {offers} = this.props.location.state
        this.setState({offers: offers})
        console.log(this.state);
        
        const {service_id} = this.props.location.state
        this.setState({service_id: service_id})
        console.log(this.state);
    }

    handleAction = (trigger, id) => {
        // console.log(e.target);
        console.log(trigger);
        console.log(id);
        
        if (trigger == 0) {
            Axios.get(`${API.url}/api/v1/services/${this.state.service_id}/offers/${id}/accept_offer`, {headers: {"Authorization": `Bearer ${localStorage.token}`}})
            .then(r=>{

                const offers = this.state.offers.map(e=>{
                    if (e.id == r.data.id) {
                        return r.data
                    }
                    return e
                })
                this.setState({offers: offers})
            })
            .catch(e=>{
                console.log(e);
            })
        }else if (trigger == 1) {
            Axios.get(`${API.url}/api/v1/services/${this.state.service_id}/offers/${id}/decline_offer`, {headers: {"Authorization": `Bearer ${localStorage.token}`}})
            .then(r=>{
                const offers = this.state.offers.map(e=>{
                    if (e.id == r.data.id) {
                        return r.data
                    }
                    return e
                })
                this.setState({offers: offers})
            })
            .catch(e=>{
                console.log(e);
            })
        }
        
    }
    
    render() {
        return (
            <div>
                <CheckOffersContainer offers={this.state.offers} handleAction={this.handleAction}/>
            </div>
        )
    }
}
