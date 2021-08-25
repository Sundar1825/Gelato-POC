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
        <NavLink to='/'>
          <img object-fit="contain" width="100" height="80" src={require('../../images/Gelato.png')} alt='logo' align="left"/>
          <h1>Gelato Explorer</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/newtask' activeStyle>
            New Task
          </NavLink>
          <NavLink to='/taskhistory' activeStyle>
            Task History
          </NavLink>
          <NavLink to='/funds' activeStyle>
            Funds
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Connect</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
