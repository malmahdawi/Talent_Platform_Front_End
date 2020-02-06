import React, { Component } from 'react'
import Axios from 'axios'
import API from '../../API'

import ServiceContainer from './Sictions/ServiceContainer';

export default class ServiceParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             categories:[],
             all_services:[]
        }
    }
    componentWillMount(){
        Axios.get(`${API.url}/api/v1/categories`)
        .then(r=>{
            console.log(r.data);
            this.setState({categories: r.data})
        })
        .catch(e=>{

        })
        Axios.get(`${API.url}/api/v1/services`)
        .then(r=>{
            console.log(r.data);
            this.setState({all_services: r.data})
        })
        .catch(e=>{

        })
    }

    
    render() {
        let categories = [["All", this.state.all_services]]
        this.state.categories.map(c=>{
            categories.push([c.category.name, c.services])
        })
        
        return (
            <div>
                <ServiceContainer contents={categories}/>
            </div>
        )
    }
}
