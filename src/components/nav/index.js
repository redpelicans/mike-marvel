import React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button } from '@blueprintjs/core';

const Nav  =({ changePage }) => {
  return (
    <Navbar>
      <NavbarGroup>
          <NavbarHeading>Marvel</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align="right">
          <NavbarDivider />
          <Button className="pt-minimal" iconName="home" onClick={() => changePage('')}>Home</Button>
      </NavbarGroup>
    </Navbar>
  )
}

export default Nav;