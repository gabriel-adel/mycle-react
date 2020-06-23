
import React from 'react';
import {Route,Switch} from 'react-router-dom'
import PrivateRouter from './privateRouts'

import Home from './pages/Home'
import Error from './pages/Error'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import Cadastro from './pages/Cadastro'
import Header from './components/header'
import Footer from './components/footer'
import Login from './pages/Login';
import DadosClientes from './pages/Dados'

import Teste from './pages/Teste'



function App() {
  

  return (
    <>
    <Header />
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/product/' component={Product} />
        <Route exact path='/product/:fuckYou' component={SingleProduct} />
        <Route exact path='/cadastro/' component={Cadastro} />
        <Route exact path='/login/' component={Login} />
        <PrivateRouter path='/dadosClientes' component={DadosClientes} />
        <PrivateRouter path='/teste' component={Teste} />
        
        <Route component={Error} />
      </Switch>
    <Footer />
    </>
  );
}

export default App;

/*
<Route exact path='/teste/' component={Teste} />
        
        */
/* 
import React from 'react'
import Routes from './routes'
const App =()=><Routes/>;
export default  App;
*/