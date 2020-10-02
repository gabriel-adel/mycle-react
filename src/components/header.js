import React from 'react'
import {Link} from 'react-router-dom'
import '../css/reset.css';
import '../css/header.css';
import logo from '../img/logo2.png'
import Logout from './logout'
import { AiFillShopping } from 'react-icons/ai';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.funcaoTeste();
    //    this.handleClick = this.handleClick.bind(this);
    }
    funcaoTeste() {
        var share =  document.getElementsByClassName('shareText')[0];
        console.log(share)
    }
    render(){
        return (
        <header>
        <div className='header-background'>
            <div className='container'>
                <div class='content-header-top'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt='logo mycle' />
                        </Link>
                    </div>
                    
                    <div className='share'>
                        <form className='form-share' >
                            <input type='text' className='shareText' placeholder='o que esta procurando?'/>
                        </form>
                    </div>
                    
                    <div className='carrinho'>
                        <div className=''>
                            <AiFillShopping className='shop-icon' />
                        </div>
                    </div>
                    
                </div>
            </div>
                <div className='menu'>
                    <div className='container'>
                    
                        <div className='dropdown'>
                            <button className='dropbtn'>karate </button>
                            <div className='dropdown-content'>
                                <Link to='/'><p>karate</p></Link>
                                <Link to='/'><p>karate infantil</p></Link>
                                
                            </div>
                        </div>
                        <div className='dropdown'>
                            <button className='dropbtn'>aikido</button>
                            <div className='dropdown-content'>
                                <Link to='/'><p>aikido</p></Link>
                                <Link to='/'><p>aikido infantil</p></Link>
                            </div>
                        </div>
                        <div className='dropdown'>
                            <Link to='/'><button className='dropbtn'>faixas</button></Link>
                        </div>
                        <div className='dropdown'>
                            <button className='dropbtn'>conta</button>
                            <div className='dropdown-content'>
                                <Link to='/login'><p>login</p></Link>
                                <Link to='/cadastro'><p>cadastro</p></Link>
                                <Logout/>
                                <Link to='/dadosClientes'><p>dados</p></Link>
                                <Link to='/'><p>pedidos</p></Link>
                            </div>
                        </div>
                        <div className='dropdown'>
                            <button className='dropbtn'>admin </button>
                            <div className='dropdown-content'>
                                <Link to='/'><p>teste1</p></Link>
                                <Link to='/'><p>teste1</p></Link>
                                <Link to='/'><p>teste1</p></Link>
                                <Link to='/'><p>teste1</p></Link>
                                <Link to='/'><p>teste1</p></Link>
                            </div>
                        </div>
                    
                    </div>
                </div>
            
        </div>
        </header>
        );
    }
}
 