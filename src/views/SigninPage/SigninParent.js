import React, { Component } from 'react'
import Signin from './Signin'
import Axios from 'axios';
import API from '../../API'
import history from '../../history';

export default class SigninParent extends Component {
    state = {email:"", password:""}
    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.type]: e.target.value})
        console.log(this.state);
        
    }

    handleSubmit = () =>{
        Axios.post(`${API.url}/login`, {user: this.state})
        .then(r=>{
            localStorage.setItem("token", r.data.token)
            localStorage.setItem("user_type", r.data.user_type)
            if (localStorage.token) {
                // history.push("/")
                history.push("/")
            }
        })
        .catch(e=>{
            //alert
        })
    }
    render() {
        return (
            <div>
                <Signin handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
