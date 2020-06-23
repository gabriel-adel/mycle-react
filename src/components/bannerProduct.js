
import React from 'react'
import '../css/reset.css';
import '../css/home.css';
import api from '../api';

 
export default class BannerProduct extends React.Component{
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
    
    
    render(){
        return(
            <div className='container2'>
                <div className='products'>
                    <div className='title-product'>
                        <p>aikido</p>
                        <div className='line'></div>
                    </div>
                        <div className='all-product'>
                        {this.state.produtos.map(produto=>(
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
                        ))}
                    </div>
                </div>
            </div>
        )
        
    }
}
