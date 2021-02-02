import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import styled, { css, keyframes } from 'styled-components';
import { rgba, modularScale } from 'polished';

const breatheAnimation = keyframes`
 0% { height: 0; width: 0; }
 100% { height: 290px; width: 300px; opacity: 0.9; }
 `;

const Card = styled.div`
    position: relative;
    width: 280px;
    height: 250px;
    margin: 2rem;
    overflow: hidden;
    border-radius: 1rem;
    background: white;
    padding-top: 7rem;
    padding-bottom: 1rem;
    /* box-shadow: 0 4px 15px ${rgba('black', 0.05)};
    filter: drop-shadow(1px 4px 12px black);
    opacity: 0.9; */

    box-shadow: 0 4px 15px ${rgba('black', 0.05)};
    filter: drop-shadow(1px 4px 12px #101820);
    opacity: 0.9;

    /* border: 1px solid rgb(235, 233, 233); */
    border: 1px solid #cbcdcf;
    background: linear-gradient(
        111.29deg,
        rgba(34, 41, 46, 0.53) -1.83%,
        rgba(27, 32, 37, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);

    animation-name: ${breatheAnimation};
    animation-duration: 0.8s;
    animation-iteration-count: 1;
    color: white;
`;

const Topbar = styled.div`
    position: absolute;
    bottom: 62em;
    left: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 800px;
    height: 800px;
    transform: translate(-50%, 86%);
    border-radius: 50%;
    /* background: linear-gradient(90deg, #8000e0 20%, #01ced8 70%); */
    box-shadow: 0 4px 15px ${rgba('black', 0.1)};
    filter: drop-shadow(1px 4px 12px #101820);
    opacity: 0.9;

    /* border: 1px solid rgb(235, 233, 233); */
    background: linear-gradient(
        111.29deg,
        rgba(189, 197, 203, 0.53) -1.83%,
        rgba(27, 32, 37, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    /* backdrop-filter: blur(70px); */
`;
const Arrow = styled.div`
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    /* background: #fca45e; */
    background: white;
`;

const TopIcon = styled.div`
    color: ${props => rgba('white', props.isActive ? 0.85 : 0.5)};
    height: 3rem;
    width: 3rem;
    padding: 0 2rem;
    transform: ${props =>
        props.isActive ? `scale(2) translateY(8px)` : `scale(1) translateY(0)`};
`;

const Image = styled.img`
    height: 3.5em;
    margin-top: 1em;
    filter: drop-shadow(1px 4px 12px #22292e);
`;

const ListWrapper = styled.div`
    position: relative;
    align-self: center;
    left: 1rem;
    margin: auto;
`;

const CoinItem = props => {
    return (
        <Card>
            <Topbar>
                {/* <Arrow /> */}
                <TopIcon>
                    <Image src={props.image}></Image>
                </TopIcon>
            </Topbar>
            <Scrollbars>
                <ListWrapper>
                    <p>Name: {props.name}</p>
                    <p>Current Price: {props.current_price} USD</p>
                    <p>
                        Circulating Supply:{' '}
                        {Math.round(props.circulating_supply)}
                    </p>
                    <p>Total Supply: {Math.round(props.total_supply)}</p>
                    <p>Total Volume: {props.total_volume}</p>
                </ListWrapper>
            </Scrollbars>
        </Card>
    );
};

export default CoinItem;
