import React, { Fragment, useState } from 'react';
import { Link as RouterDomLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';

const Link = ({ isActive, children, ...props }) => {
    return <RouterDomLink {...props}>{children}</RouterDomLink>;
};

const StyledLink = styled(Link)`
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
    }
`;

const MobileMenuIcon = styled.div`
    margin: auto 2em auto auto;
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
    padding: 0 16px;
    position: fixed;
    top: 0;
    background: #2d363d;
    opacity: 0.95;
    border-bottom: 1px solid #682e19;
    border-width: thin;
    z-index: 10;
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    margin: auto 1em auto auto;
    @media (max-width: 768px) {
        padding: 1em 2em;
        flex-direction: column;
        background: gray;
        width: 30%;
        z-index: 500;
        margin-left: auto;
        margin-top: 0;
        font-size: 20px;
        border-radius: 20px;
        box-shadow: 0 4px 15px ${rgba('black', 0.1)};
        filter: drop-shadow(1px 4px 12px #101820);
        border: 1px solid rgb(235, 233, 233);
        background: linear-gradient(
            111.29deg,
            rgba(34, 41, 46, 0.53) -1.83%,
            rgba(27, 32, 37, 0) 189.95%
        );
        box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(70px);
    }
`;

const StyledList = styled.li`
    > a {
        position: relative;
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
                        <StyledLink
                            onClick={() => setMenuOpen(!menuOpen)}
                            isActive={pathname === '/'}
                            to='/'
                        >
                            <span>dashboard</span>
                        </StyledLink>
                    </StyledList>
                    <StyledList isActive={pathname === '/coinlist'}>
                        <StyledLink
                            onClick={() => setMenuOpen(!menuOpen)}
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
