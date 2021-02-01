import React, { Fragment, useState, useEffect } from 'react';
import { Link as RouterDomLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = ({ isActive, children, ...props }) => {
    return <RouterDomLink {...props}>{children}</RouterDomLink>;
};

const StyledLink = styled(Link)`
  /* color: ${p => (p.isActive ? '#9C4526' : 'white')}; */
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${p => (p.isActive ? 'bold' : 'normal')};
  text-decoration: none;
`;

const LogoLink = styled(Link)`
    float: left;
    color: white;
    text-decoration: none;
`;

const Menu = styled.nav`
    display: ${p => (p.open ? 'block' : 'none')};
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;

    @media (min-width: 768px) {
        display: flex;
        background: none;
        left: initial;
        top: initial;
        margin: auto 0 auto auto;
        border-bottom: none;
        position: relative;
        width: initial;
    }
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    color: white;
    > div {
        height: 3px;
        margin: 5px 0;
        width: 100%;
        background: white;
    }
    @media (min-width: 768px) {
        display: none;
    }
`;
const HeaderWrapper = styled.div`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    justify-content: space-between;
    background: #2d363d;
    opacity: 0.95;
    border-bottom: 1px solid #682e19;
    border-width: thin;
    z-index: 10;
    /* opacity: 0.7; */
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    z-index: 500;
`;

const StyledList = styled.li`
    > a {
        position: relative;
        /* color: #bfbdbc; */
        color: ${props => (props.isActive ? '#9C4526' : 'white')};
        text-decoration: none;
    }
    > a:hover {
        color: #8e8c89;
    }
    > a:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #ad4d2a;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }
    > a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`;

const StyledNav = styled.nav`
    background: #2a2927;
`;

const Navbar = props => {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const pathnameLocation = () => {
        if (pathname.startsWith('/dashboard')) {
            return true;
        }
    };
    const authLinks = (
        <HeaderWrapper>
            <h1>
                <LogoLink to='/' logo='true'>
                    coin_<span style={{ color: '#F16350' }}>D</span>ash
                </LogoLink>
            </h1>
            <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledUl>
                    <StyledList isActive={pathname === '/'}>
                        <StyledLink isActive={pathname === '/'} to='/'>
                            <span>dashboard</span>
                        </StyledLink>
                    </StyledList>
                    <StyledList isActive={pathname === '/coinlist'}>
                        <StyledLink
                            isActive={pathname === '/coinlist'}
                            to='/coinlist'
                        >
                            <span>coin list</span>
                        </StyledLink>
                    </StyledList>
                </StyledUl>
            </Menu>
        </HeaderWrapper>
    );

    return <StyledNav>{<Fragment>{authLinks}</Fragment>}</StyledNav>;
};

export default connect()(Navbar);
