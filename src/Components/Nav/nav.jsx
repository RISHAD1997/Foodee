import React from 'react'
import styled from 'styled-components';
import { ImSpoonKnife } from "react-icons/im";
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <Navbar>
         <Link to={'/'}> <ImSpoonKnife />Foodee</Link>
          </Navbar>
    </div>
  )
}

const Navbar = styled.div`
padding:5px;
margin-bottom:10px;
`

const Link = styled(NavLink) `
  text-decoration: none;
  font-family: 'Pacifico', cursive;
  color: black;
`;

export default Nav