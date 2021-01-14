import React, { Component } from 'react';
import * as RBS from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <RBS.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Link to="/">
                    <RBS.Navbar.Brand>Donhyuk Choi</RBS.Navbar.Brand>
                </Link>
                <RBS.Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                <RBS.Navbar.Collapse id="responsive-navbar-nav">
                {/* <RBS.Nav className="ml-auto">
                        <RBS.Nav.Link><Link to="/Project">Projects</Link></RBS.Nav.Link>
                        <RBS.Nav.Link><Link to="/About">About Me</Link></RBS.Nav.Link>
                </RBS.Nav> */}
                </RBS.Navbar.Collapse>
            </RBS.Navbar>
        );
    }
}

export default Navbar;