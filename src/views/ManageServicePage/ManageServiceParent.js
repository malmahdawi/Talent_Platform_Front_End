import React, { Component } from 'react'
import ManageServiceContainer from "./Sections/ManageServiceContainer.js"
import Axios from 'axios'
import API from '../../API'


export default class ManageServiceParent extends Component {
    state = {services: []}
    componentDidMount(){
        Axios.get(`${API.url}/api/v1/user_services`, {headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
            this.setState({services: r.data})
        })
        .catch(e=>{
            console.log(e);
        })
    }
    render() {
        return (
            <div>
                <ManageServiceContainer services={this.state}/>

            </div>
        )
    }
}
