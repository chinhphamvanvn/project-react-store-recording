import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img style={{width: "35px"}} src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                       <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                       </span>
                    </ButtonContainer>
                </Link>
            </nav>
        )
    }
}
