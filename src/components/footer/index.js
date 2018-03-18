import React from 'react';
import { Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

const Footer  = () => {
  return (
    <Navbar>
      <NavbarGroup>
          <NavbarHeading>16/03/2018</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align="right">
          <p className="pt-minimal">Mike Velluet</p>
      </NavbarGroup>
    </Navbar>
  )
}



export default Footer;