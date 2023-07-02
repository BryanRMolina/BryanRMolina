import React from "react";
import {BrowserRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import './login.css'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
    <div className='header'>
        <div className='logo'>
            <h2>C<span>T</span></h2>
        </div>
        <ul>
            <BrowserRouter>
                <li><Link className= 'link' > Home </Link></li>
                <li><Link className= 'link' > About </Link></li>
                {
                    isAuthenticated ?
                    <li><Link className= 'link'  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Deslogueaer</Link></li>
                    :
                    <li><Link className= 'link'  onClick={() => loginWithRedirect()}> BOTON DE PRUEBA </Link></li>  
                }
            </BrowserRouter>
        </ul>
    </div>
    <div className='container'>
        <h2>Please {

            isAuthenticated && <span>{user.name}</span>

            }</h2>
        <div className='buttonn'>
            {
                isAuthenticated ? <button className='login'  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Deslogueo </button>
                :
                <button className='readmore'  onClick={() => loginWithRedirect()} >Read More </button>
            }
        </div>
    </div>
    </>
  )
}

export default Login