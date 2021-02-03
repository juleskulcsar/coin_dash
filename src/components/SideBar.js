import React, { useState } from 'react';
import { Link as RouterDomLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = ({ isActive, children, ...props }) => {
    return <RouterDomLink {...props}>{children}</RouterDomLink>;
};

const StyledLink = styled(Link)`
    text-decoration: none;
    line-height: 1.6;
    font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`;

const StyledDiv = styled.div`
    border-left: 1px solid #682e19;
    padding-left: 1em;
    padding-top: 1.5em;
    width: 12em;
    background: gray;
    height: 100vh;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    filter: drop-shadow(1px 4px 12px #101820);
    background: linear-gradient(
        111.29deg,
        rgba(140, 154, 163, 0.53) -1.83%,
        rgba(68, 83, 93, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
`;

const StyledList = styled.li`
    text-align: left;
    font-size: 20px;
    line-height: 1.7;
    padding: 5px;
    > a {
        position: relative;
        color: white;
        text-decoration: none;
    }
    > a:hover {
        color: #ad4d2a;
    }
    > a:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #8e8c89;
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

const SideBar = () => {
    return (
        <>
            <StyledDiv>
                <StyledUl>
                    <StyledList>
                        <StyledLink to={`/`}>
                            <span
                                style={{
                                    paddingRight: '1em',
                                    marginTop: '1em'
                                }}
                                class='material-icons'
                            >
                                dashboard
                            </span>
                            Dashboard
                        </StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to={`/coinlist`}>
                            <span
                                style={{
                                    paddingRight: '1em',
                                    marginTop: '1em'
                                }}
                                class='material-icons'
                            >
                                view_list
                            </span>
                            Crypto Coins
                        </StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to={`/exchanges`}>
                            <span
                                style={{
                                    paddingRight: '1em',
                                    marginTop: '1em'
                                }}
                                class='material-icons'
                            >
                                inventory_2
                            </span>
                            Exchanges
                        </StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to={`/volumes`}>
                            <span
                                style={{
                                    paddingRight: '1em',
                                    marginTop: '1em'
                                }}
                                class='material-icons'
                            >
                                equalizer
                            </span>
                            Volumes
                        </StyledLink>
                    </StyledList>
                </StyledUl>
            </StyledDiv>
        </>
    );
};

export default SideBar;
