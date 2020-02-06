import React, { Component } from 'react'

import Axios from 'axios';
import API from '../../../API'
import AddNewService from "./AddNewService.js"
import history from '../../../history';

export default class AddNewServiceParent extends Component {

    state = {service:{name:"",price_range:"",location:"",description:""},categories:[],galleries:[], c_loaded:[]}

    componentWillMount(){
        Axios.get(`${API.url}/api/v1/categories`)
        .then(r=>{
            console.log(r.data);
            
            const categories = r.data.map(e=>{
                return [e.category.id, e.category.name]
            })
            console.log(categories);
            
            this.setState({c_loaded: categories})
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({service:{...this.state.service,[e.target.id]: e.target.value}})
        console.log(this.state);
        
    }

    handleUrl = (e) => {
        e.preventDefault();
        this.setState({galleries: this.state.categories.concat(e.target.value)})
        console.log(this.state);
    }

    handleCategories = (e) => {
        // e.preventDefault();
        this.setState({categories: this.state.categories.concat(e)})
        console.log(this.state);
    }

    handleSubmit = () =>{
        Axios.post(`${API.url}/api/v1/services`, {service: this.state.service, categories: this.state.categories, galleries: this.state.galleries}
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
                    <AddNewService handleChange={this.handleChange} handleSubmit={this.handleSubmit} 
                                    categories={this.state.c_loaded} handleCategories={this.handleCategories} 
                                    handleUrl={this.handleUrl}
                                    />
            </div>
        )
    }
}
