import React from 'react'
import { Redirect } from 'react-router-dom';
/* 
export default class RedirectTo extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            redirectToReference:false
        }
    }    
    redirectTos = (props) =>{
        
        const redirectToReference = this.state.redirectToReference
        //const propsBoolean = this.props.boolean 
        //console.log(propsBoolean)
        this.setState({
            redirectToReference:true
        })
        if(redirectToReference === true){
            //return(<Redirect to={this.props.redirect}/>)
            return(<Redirect to='/'/>)
        }
    }
}
*/

export default function RedirectTo(props){
    const redirectTo = props.propsBoolean
    if(redirectTo === true){
        return<Redirect to={props.redirect}/>
    }

}
