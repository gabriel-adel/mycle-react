import React from 'react'
import api from '../api'
export default class DadosClientes extends React.Component{
    constructor(props){
        super(props)
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
    }
    hue = (e)=>{ 
        const body = JSON.stringify({
            id: this.state.nome,
            
        }) 
        api('http://localhost:4000/addCadastro','POST',body)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({response:res});
            //return <Redirect to="/" />
            
        }) 
    }
    render(){
        return(
            <div className='container2'>
                
                <form method='POST' onSubmit={this.sendForm} >
                    <div>

                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='nome' placeholder='nome'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='usuario' placeholder='usuario'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='senha' placeholder='senha'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='email' placeholder='email'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='telefone' placeholder='telefone'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='celular' placeholder='celular'></input>
                       
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='cpf' placeholder='cpf'></input>
                            <input  type='date' onChange={this.myChangeHandler} className='input-form' name='dataNascimento' placeholder='dataNascimento'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='estado' placeholder='estado'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='cidade' placeholder='cidade'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='rua' placeholder='endereco'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='bairro' placeholder='bairro'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='numero' placeholder='numero'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='cep' placeholder='cep'></input>
                            <input  type='text' onChange={this.myChangeHandler} className='input-form' name='complento' placeholder='complento'></input>
                            

                    </div>
                    
                    
                </form>
            </div>
        )
    }
}