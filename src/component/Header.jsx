import React  from "react";
import { withRouter } from "react-router";
import {Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {

    render() {
        let { location } = this.props;
        return (
            <div className="header-container">
                <div className="container">
                    <header className="header">
                        <Navbar collapseOnSelect expand="lg p-0" >
                            <Navbar.Brand>
                                <Link to="/" className="logo">
                                    Logo
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Item className="nav-list">
                                        <Link to="/"
                                              data-name="Home"
                                              className={`nav-item ${location.pathname === "/"? "is-active": ""}`}>
                                            Home
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-list">
                                        <Link to="/recipe-page"
                                              data-name="Recipe"
                                              className={`nav-item ${location.pathname === "/recipe-page"? "is-active": ""}`}>
                                            Recipe
                                        </Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </header>
                </div>
            </div>
        );
    }
}


export default withRouter(Header);