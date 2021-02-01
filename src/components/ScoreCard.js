import React from 'react';
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
