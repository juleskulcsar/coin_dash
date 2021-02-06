import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled, { css, keyframes } from 'styled-components';
import { rgba, modularScale } from 'polished';

const Card = styled.div`
    position: relative;
    width: 17em;
    height: 20em;
    margin-top: 4em;
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
        rgba(34, 41, 46, 0.53) -1.83%,
        rgba(27, 32, 37, 0) 189.95%
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

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const VolumeRightCard = ({ exchange }) => {
    return (
        <Card>
            <Scrollbars>
                <ListWrapper>
                    <List>
                        <li>
                            <Paragraph>Name: {exchange.name}</Paragraph>
                        </li>
                    </List>
                </ListWrapper>
            </Scrollbars>
        </Card>
    );
};

export default VolumeRightCard;
