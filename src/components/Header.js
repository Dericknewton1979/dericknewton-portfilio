import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Mylogo from "../app/assets/img/Mylogo.PNG";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={Mylogo} alt="derick logo" className="" />
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/Experience">
              Experience
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/Projects">
              Projects
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/Contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
