import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router'


export const PublicRouter = ({
    isAuthenticated,  //info si esta autenticado
    component: Component, //que componentes 
    ...rest  //historial
}) => {
    return (
        <Route {...rest}
            component = {(props) =>(
                (isAuthenticated) 
                ?(<Redirect to="/"/>)
                :(<Component {...props}/>)
            )}
        
        
        />
    )
}

PublicRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired

}
