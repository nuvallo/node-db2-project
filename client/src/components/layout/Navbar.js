import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Node DB2 Project</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Vehicles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
