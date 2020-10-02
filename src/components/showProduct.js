
import React from 'react'
import '../css/reset.css';

import '../css/product.css'
import api from '../api';

 
export default class ShowProduct extends React.Component{
    state = {
        produtos:[]
    }
    componentDidMount(){
       api('http://localhost:4000/produto','GET',null)
       .then((res)=>res.json())
       .then(res=>{
           this.setState({
               produtos:res
           })
       })
    }
    
    /* 
        i need  code in js that when the screen is at any value or size, show a specific number 
        of imgs    
            window.screen.height;
            window.screen.width;
    */
    
    render(){
        return(
            <div className='container2'>
                <div className='products'>
                    <div className='title-product'>
                        <p>aikido</p>
                        <div className='line'></div>
                    </div>
                        {this.state.produtos.map(produto=>(
                            <div className='all-product'>
                                <div key={produto.id}>
                                    <div className='product'>
                                        <div className='imag-product'>
                                            <img src='{img}'></img>
                                        </div>
                                        <div className='infos-prooduct'>
                                            <div className='titulo'>
                                                <p>{produto.nomeProduto}</p>
                                            </div>
                                            <div className='preco'>
                                                <p>{produto.valorVarejo}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        )
        
    }
   /*
   render(){
    return(
        <div className='container2'>
            <div className='products'>
                <div className='title-product'>
                    <p>aikido</p>
                    <div className='line'></div>
                </div>
                
                    <div className='all-product'>
                        <div key='1'>
                            <div className='product'>
                                <div className='imag-product'>
                                    <img src='{img}'></img>
                                </div>
                                <div className='infos-prooduct'>
                                    <div className='titulo'>
                                        <p>123</p>
                                    </div>
                                    <div className='preco'>
                                        <p>123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='all-product'>
                        <div key='1'>
                            <div className='product'>
                                <div className='imag-product'>
                                    <img src='{img}'></img>
                                </div>
                                <div className='infos-prooduct'>
                                    <div className='titulo'>
                                        <p>123</p>
                                    </div>
                                    <div className='preco'>
                                        <p>123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='all-product'>
                        <div key='1'>
                            <div className='product'>
                                <div className='imag-product'>
                                    <img src='{img}'></img>
                                </div>
                                <div className='infos-prooduct'>
                                    <div className='titulo'>
                                        <p>123</p>
                                    </div>
                                    <div className='preco'>
                                        <p>123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='all-product'>
                        <div key='1'>
                            <div className='product'>
                                <div className='imag-product'>
                                    <img src='{img}'></img>
                                </div>
                                <div className='infos-prooduct'>
                                    <div className='titulo'>
                                        <p>123</p>
                                    </div>
                                    <div className='preco'>
                                        <p>123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='all-product'>
                        <div key='1'>
                            <div className='product'>
                                <div className='imag-product'>
                                    <img src='{img}'></img>
                                </div>
                                <div className='infos-prooduct'>
                                    <div className='titulo'>
                                        <p>123</p>
                                    </div>
                                    <div className='preco'>
                                        <p>123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
            
    )
    
}
 */
}
