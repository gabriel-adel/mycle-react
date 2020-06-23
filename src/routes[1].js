import React from 'react'
import Home from './pages/Home'
import Error from './pages/Error'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import Cadastro from './pages/Cadastro'
import Header from './components/header'
import Footer from './components/footer'
import Login from './pages/Login';
import Teste from './pages/Teste'

import Login2 from './components/login';

import {Route,Switch,BrowserRouter,Redirect} from 'react-router-dom'
const PrivateRouter = ({component:Component, ... rest})=>(
    <Route 
      {...rest} 
      render={props => 
        Login2.login()?(
          <Component {... props} />
        ):(
          <Redirect to={{pathname:'/',state:{from:props.location}}}/>
        )
      }
    />
  )


const Routes = () =>(
    <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path='/'  component={Home} />
                <Route exact path='/product/' component={Product} />
                <Route exact path='/product/:fuckYou' component={SingleProduct} />
                <Route exact path='/cadastro/' component={Cadastro} />
                <Route exact path='/login/' component={Login} />
                <PrivateRouter path='/teste/' component={Teste} />
                
                <Route component={Error} />
            </Switch>
        <Footer />
    </BrowserRouter>
)
export default Routes;