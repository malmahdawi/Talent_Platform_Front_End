import React, { Component } from 'react'
import Signup from './Signup'
import Axios from 'axios';
import API from '../../API'
import history from '../../history';

export default class SignupParent extends Component {
    state = {user:{username: "",email: "", password: ""}, role_id: 0}
    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        
        this.setState({user: {...this.state.user, [e.target.id]: e.target.value}})
        console.log(this.state);
    }

    handleRole = (e) => {
        this.setState({role_id: e.target.value})
        console.log(this.state);
    }

    handleSubmit = () =>{
        Axios.post(`${API.url}/signup`, {user: this.state.user, role_id: this.state.role_id})
        .then(r=>{
            console.log(r.data);
            history.push("/")
        })
        .catch(e=>{
            //alert
        })
    }
    render() {
        return (
            <div>
                <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleRole={this.handleRole}/>
            </div>
        )
    }
}
