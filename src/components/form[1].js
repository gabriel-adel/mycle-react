import React from 'react'
import '../css/reset.css'
import '../css/form.css'
import api from '../api'
import { Redirect } from 'react-router-dom';


export default class Form extends React.Component{
    //<input type='submit' className='input-button' onClick={this.handleToggle}/>
    constructor(props){
        super(props);
        this.state = {
            isShow:false,
            response:'',
            redirectToReference:false,
            cadastro:{
                nome: '',
                sexo: '',
                usuario: '',
                senha: '',
                cpf: '',
                dataNascimento: '',
                estado:'',
                cidade:'', 
                bairro:'', 
                rua: '',
                numero: '',
                cep: '',
                complemento: '',
                email:'',
                telefone:'', 
                celular: '',
            }
        }

        this.myChangeHandler.bind(this);
        this.handleToggle.bind(this);
        this.sendForm.bind(this);
    }
    
    myChangeHandler = (e) =>{
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]:val});
    }
    handleToggle = (e)=>{
        e.preventDefault();
        this.setState({isShow:!this.state.isShow});
    }

    sendForm = (e) =>{
        const body = JSON.stringify({
            nome: this.state.nome,
            sexo: this.state.sexo,
            usuario: this.state.usuario,
            senha: this.state.senha,
            cpf: this.state.cpf,
            dataNascimento: this.state.dataNascimento,
            estado:this.state.estado,
            cidade:this.state.cidade, 
            bairro:this.state.bairro, 
            rua: this.state.rua,
            numero: this.state.numero,
            cep: this.state.cep,
            complemento: this.state.complemento,
            email:this.state.email,
            telefone: this.state.telefone, 
            celular: this.state.celular,
        }) 
        api('http://localhost:4000/addCadastro','POST',body)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({response:res,redirectToReference:true});
            return <Redirect to="/" />

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
                
                <form method='POST' onSubmit={this.sendForm} >
                    <div>
                        <div className={this.state.isShow?"hidden form":"show form"}>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='nome' placeholder='nome'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='usuario' placeholder='usuario'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='senha' placeholder='senha'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='email' placeholder='email'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='telefone' placeholder='telefone'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='celular' placeholder='celular'></input>
                            <button className='input-button' onClick={this.handleToggle}>proximo</button>
                        </div>

                        <div className={this.state.isShow?"show form":"hidden form"}>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='cpf' placeholder='cpf'></input>
                            <input  type='date' onChange={this.myChangeHandler} className='input-form' name='dataNascimento' placeholder='dataNascimento'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='estado' placeholder='estado'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='cidade' placeholder='cidade'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='rua' placeholder='endereco'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='bairro' placeholder='bairro'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='numero' placeholder='numero'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='cep' placeholder='cep'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='complento' placeholder='complento'></input>
                            <input type='submit' className='input-button' value='enviar'/>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
            
        )
    }
}