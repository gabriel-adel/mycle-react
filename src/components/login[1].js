import React from 'react'
import '../css/reset.css'
import '../css/form.css'
import api from '../api'
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            usuario:'',
            senha:'',
            redirectToReference:false,
            authenticate:''
        }
        this.myChangeHandler.bind(this)
        this.login.bind(this)
    }
    
    myChangeHandler = (e) =>{
        let nam = e.target.name;
        let val = e.target.value;
        
        this.setState({[nam]:val});
    }
    
    login = (e) =>{
        /* */
        const body = JSON.stringify({
            usuario: this.state.usuario,
            senha: this.state.senha,
        }) 
        api('http://localhost:4000/login','POST',body)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({redirectToReference:true});
            localStorage.setItem('authenticated',res.token);
            
        })
        e.preventDefault();
    }

    render(){
        const redirectToReference = this.state.redirectToReference;
        if(redirectToReference === true){
            return <Redirect to='/'/>
        }
        
        
        
        return(
            
            <div className='container2'>
                
                <div>
                    <form method='POST' onSubmit={this.login}>
                        <input type='text' name='usuario' onChange={this.myChangeHandler} className='input-form' placeholder='login'/>
                        <input type='password' name='senha' onChange={this.myChangeHandler} className='input-form' placeholder='******'/>
                        <input type='submit' className='input-button' />
                    </form>
                </div>
            </div>
        )
    }
}