// import { STATES } from 'mongoose';
import React, { useState, useEffect } from 'react';
// import {useDispatch} from "react-redux";
// import {Redirect, useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";



const Header = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUser()
    }, [])
    function getUser() {
        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user)
    }
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {user ? (
                <div>
                    <div className="navbar-brand"><Link to="/alljournals" className={window.location.pathname === "/alljournals" ? "nav-link active" : "nav-link"}>jot</Link></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/alljournals" className={window.location.pathname === "/alljounsals" ? "nav-link active" : "nav-link"}>Home/AllJournals</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/allentries" className={window.location.pathname === "/allentries" ? "nav-link active" : "nav-link"}>AllEntries</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/createentry" className={window.location.pathname === "/createentry" ? "nav-link active" : "nav-link"}>CreateEntry</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/quotes" className={window.location.pathname === "/quotes" ? "nav-link active" : "nav-link"}>Quotes</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/entrypage" className={window.location.pathname === "/entrypage" ? "nav-link active" : "nav-link"}>EntryPage</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/about" className={window.location.pathname === "/entries" ? "nav-link active" : "nav-link"}>About</Link>
                            </li>
                            <li>
                                <button className="btn btn-primary" onClick={logout}> logout</button>
                            </li>
                        </ul>
                    </div>
                </div>) : (<div><a href="/login"><button className="btn btn-light " >login</button></a></div>)}

        </nav>
    )
    return (









        <nav className="navbar navbar-light bg-light ">
            {/* <div className="row col-12 d-flex "> */}
            {/* <span className="h3">The-JAMM</span> */}
            {user ? (
                <div>



                    {/* TO FIX START */}
                    <span className="navbar-brand">
                        <Link to="/alljournals" className={window.location.pathname === "/alljournals" ? "nav-link active" : "nav-link"}>jot</Link>

                    </span>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    {/* <div className="collapse navbar-collapse text-black" id="navbarNavAltMarkup"> */}
                    <ul className="navbar-nav">
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <Link to="/alljournals" className={window.location.pathname === "/alljounsals" ? "nav-link active" : "nav-link"}>Home/AllJournals</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <Link to="/allentries" className={window.location.pathname === "/allentries" ? "nav-link active" : "nav-link"}>AllEntries</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <Link to="/createentry" className={window.location.pathname === "/createentry" ? "nav-link active" : "nav-link"}>CreateEntry</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <Link to="/quotes" className={window.location.pathname === "/quotes" ? "nav-link active" : "nav-link"}>Quotes</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <Link to="/entrypage" className={window.location.pathname === "/entrypage" ? "nav-link active" : "nav-link"}>EntryPage</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <Link to="/about" className={window.location.pathname === "/entries" ? "nav-link active" : "nav-link"}>About</Link>
                        </li>
                    </ul>
                    {/* </div> */}

                    {/* TO FIX END */}





                    <button className="btn btn-primary" onClick={logout}> logout</button>
                    <h6 >{user.name}</h6>
                </div>
            ) : (

                <div className="ml-auto"> <button className="btn btn-light " >login/register</button></div>
            )}
            {/* </div> */}
        </nav >


    )
}
export default Header;