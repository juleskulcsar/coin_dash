import React, { useState } from 'react';
import { Link as RouterDomLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';
import CoinGecko from '../images/CoinGecko.png';

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
    width: 14em;
    background: gray;
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
        color: #e47656;
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

const Logo = styled.img`
    height: 6em;
    width: 6em;
    margin-left: 3em;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => (props.square ? null : '50%')};
    padding: 0.5em;
    background: #44535d;
`;

const CoinGeckoLogo = styled.img`
    height: 1.5em;
    width: 1.5em;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    vertical-align: middle;
`;

const Paragraph = styled.p`
    color: white;
    line-height: 1.6;
    font-size: 15px;
    position: absolute;
    bottom: 0;
`;
const ExternalLink = styled.a`
    text-decoration: none;
    line-height: 1.6;
    color: white;
`;
const CoinGeckoWrapper = styled.div`
    text-align: center;
`;

const SideBar = () => {
    return (
        <>
            <StyledDiv>
                <Logo src={logo} />
                <StyledUl>
                    <StyledList>
                        <StyledLink to={`/`}>
                            <span
                                style={{
                                    paddingRight: '1em',
                                    marginTop: '1em'
                                }}
                                className='material-icons'
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
                                className='material-icons'
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
                                className='material-icons'
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
                                className='material-icons'
                            >
                                equalizer
                            </span>
                            Volumes
                        </StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to={`/global-data`}>
                            <span
                                style={{
                                    paddingRight: '1em',
                                    marginTop: '1em'
                                }}
                                className='material-icons'
                            >
                                public
                            </span>
                            Global Data
                        </StyledLink>
                    </StyledList>
                </StyledUl>
                <CoinGeckoWrapper>
                    <ExternalLink
                        href='https://www.coingecko.com/'
                        target='_blank'
                    >
                        <Paragraph>
                            Data from CoinGecko{' '}
                            <CoinGeckoLogo src={CoinGecko} square={true} />
                        </Paragraph>
                    </ExternalLink>
                </CoinGeckoWrapper>
            </StyledDiv>
        </>
    );
};

export default SideBar;
