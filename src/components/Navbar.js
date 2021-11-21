import React from 'react'
import Bars from '../images/bars.svg';

import styled,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import { menuData } from '../data/MenuData';
const Nav=styled.nav`
height: 60px;
background: #000;
justify-content: space-between;
padding: 1 rem 2rem;
z-index: 100;
positin: fixed;
width: 100%;
display: flex;

`;
const NavLink =css `
color: #fff;
display: flex;
align-items: center; 
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`
const Logo =styled(Link)`
${NavLink}
font-style: italic;
`;
const MenuBars= styled.i`
display: none;

@media screen and (max-width: 768px){
    display: block;
    background-image: url(${Bars});
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);
}
`;

const NavMenu= styled.div`
display: flex;
align-items: center;
margin-right: -48px;
@media screen and (max-width: 768px){
    display:none;

}
`;
const NavMenuLinks =styled(Link)`
${NavLink}
`;
const NavBtn =styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px){
    display:none;
`;
const Navbar = ({toggle}) => {
    
    return (
        <Nav>
            <Logo to="/">AquaCulture</Logo>
            <MenuBars onClick={toggle}/>
             <NavMenu>
                 {menuData.map((item,index)=> (
                    <NavMenuLinks to={item.link} key={index}>{item.title} 
                    </NavMenuLinks>
                 ))}
             </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;
