import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const authenticated = localStorage.getItem('authenticated');
const PrivateRouter = ({component:Component, ...rest})=>(
    <Route 
      {...rest } 
      render={props => 
        /* */
        authenticated ?(
          <Component {... props} />
        ):(
          <Redirect to={{pathname:'/',state:{from:props.location}}}/>
        )
      }
    />
  )
export default PrivateRouter;