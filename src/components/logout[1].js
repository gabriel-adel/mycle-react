import React from 'react'
import { Redirect } from 'react-router-dom';
export default class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirectToReference:false
        }
        this.handlerLogout.bind(this)
    }
    handlerLogout = () =>{
        localStorage.removeItem('authenticated')
        console.log(localStorage.getItem)
        this.setState({redirectToReference:true})
        //history.push('/')
    }
    render(){
        const redirectToReference = this.state.redirectToReference;
        if(redirectToReference === true){
            return <Redirect to='/'/>
        }
        return (<button type='button' onClick={this.handlerLogout}>sair</button>) 
    }
}