import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import styled, { css, keyframes } from 'styled-components';
import { rgba, modularScale } from 'polished';

const Card = styled.div`
    position: relative;
    width: 14em;
    height: 7em;
    margin: 2rem;
    overflow: hidden;
    border-radius: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0 4px 15px ${rgba('black', 0.1)};
    filter: drop-shadow(1px 4px 12px #101820);
    opacity: 0.9;

    border: 1px solid rgb(235, 233, 233);
    background: linear-gradient(
        111.29deg,
        rgba(255, 255, 255, 0.53) -1.83%,
        rgba(255, 255, 255, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
`;

const Topbar = styled.div`
    position: absolute;
    bottom: 52em;
    left: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 800px;
    height: 800px;
    transform: translate(-50%, 86%);
    border-radius: 50%;
    background: rgb(21, 49, 68);
    background: linear-gradient(
        158deg,
        rgba(21, 49, 68, 1) 8%,
        rgba(0, 62, 65, 1) 94%
    );
`;

const Image = styled.img`
    height: 2em;
    margin-left: 10px;
    filter: drop-shadow(1px 4px 12px #1d1562);
`;

const ListWrapper = styled.div`
    position: relative;
    align-self: center;
    left: 1rem;
    margin: auto;
    overflow: hidden;
`;

const Paragraph = styled.p`
    color: white;
    line-height: 1.6;
    font-size: ${props => (props.tes ? '20px' : '15px')};
    font-weight: ${props => (props.tes ? 'bold' : null)};
    padding-left: 1em;
`;

const ScoreCard = props => {
    return (
        <Card>
            {/* <Image src={props.image} /> */}
            <Scrollbars>
                <ListWrapper>
                    <div style={{ display: 'flex', height: 'fit-content' }}>
                        <Paragraph>{props.icon}</Paragraph>
                        <Paragraph>{props.text}</Paragraph>
                    </div>
                    <div style={{ display: 'flex', height: 'fit-content' }}>
                        <Paragraph tes={true}>{props.symbolIs}</Paragraph>
                        <Paragraph tes={true}>{props.value}</Paragraph>
                    </div>
                </ListWrapper>
            </Scrollbars>
        </Card>
    );
};

export default ScoreCard;
