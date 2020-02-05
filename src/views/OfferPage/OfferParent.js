import React, { Component } from 'react'
import OfferContainer from "./Sections/OfferContainer.js"
import Axios from 'axios'
import API from '../../API'

export default class OfferParent extends Component {
    state = {offers: {}}
    componentWillMount(){
        Axios.get(`${API.url}/api/v1/user_offers`, {headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
            this.setState({offers: r.data})
        })
        .catch(e=>{
            console.log(e);
        })
    }

    handleAction = (service_id, offer_id) => {
        Axios.get(`${API.url}/api/v1/services/${service_id}/offers/${offer_id}/decline_offer`, {headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
            const offers = this.state.offers.map(e=>{
                if (e.offer.id == r.data.id) {
                    e.offer = r.data
                    return e
                }
                return e
            })
            this.setState({offers: offers})
        })
        .catch(e=>{
            console.log(e);
        })
        
    }
    render() {
        return (
            <div>
                <OfferContainer offers={this.state} handleAction={this.handleAction}/>
            </div>
        )
    }
}
