<<<<<<< HEAD
import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {link, useHistory} from 'react-router-dom'

function Header() {
    let user = JSON.parse(localStorage.getItem('user'))
console.log (user);

const history=useHistory();
    function logOut()
    {
localStorage.clear();
history.push('/login')

    }
    return(
        <nav class="navbar navbar-dark bg-primary">
            
            <span className="h3">JOT IT DOWN </span>
            
            <nav>
                
<NavDropdown title={user && user.name} >

                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </nav>
           
=======
// import { STATES } from 'mongoose';
 import React,{ useState} from 'react';
// import {useDispatch} from "react-redux";
// import {Redirect, useHistory} from "react-router-dom";
const Header = ()=> {
    const[user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const logout = ()=>{
        localStorage.clear();
        window.location.href="/login";
    }
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white align-self-center">
            <span className="h3 align-self-center">The-JAMM</span>
            {user ? (
                <div className="profile-head align-right">
                    
                    <button className="btn btn-primary" style={{float: "right"}} onClick={logout}> logout</button>
                    <h6 className="display-flex-end">{user.name}</h6>
                 </div>
            ) : (
                <div className="ml-auto"> <button className="btn btn-light display-flex-end" >login/register</button></div>
            )}
            </div>
>>>>>>> arjunbranch
        </nav>
       
        
    )
}
export default Header;