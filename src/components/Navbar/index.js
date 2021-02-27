import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/text' activeStyle>
            Text
          </NavLink>
          <NavLink to='/image' activeStyle>
            Image
          </NavLink>
          <NavLink to='/video' activeStyle>
            Video
          </NavLink>
          <NavLink to='/table' activeStyle>
            Table
          </NavLink>
          <NavLink to='/email' activeStyle>
            Email
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;