import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled, { css, keyframes } from 'styled-components';
import { rgba, modularScale } from 'polished';

const Card = styled.div`
    position: relative;
    width: ${props => (props.transparent ? '20em' : '100%')};
    height: ${props => (props.transparent ? '5em' : '6em')};
    margin-right: ${props => (props.margin ? '1em' : '0')};
    overflow: hidden;
    border-radius: 1rem;
    /* padding-top: 1rem;
    padding-bottom: 1rem; */
    box-shadow: 0 4px 15px ${rgba('black', 0.1)};
    filter: drop-shadow(1px 4px 12px #101820);
    opacity: 0.9;
    ${props =>
        props.transparent
            ? css`
                  background: linear-gradient(
                      111.29deg,
                      rgba(255, 255, 255, 0.1) -1.83%,
                      rgba(255, 255, 255, 0) 189.95%
                  );
              `
            : css`
                  background: linear-gradient(
                      111.29deg,
                      rgba(255, 255, 255, 0.43) -1.83%,
                      rgba(255, 255, 255, 0) 189.95%
                  );
              `}
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
    @media (max-width: 768px) {
        width: 80%;
        height: 4em;
        margin: 10px;
    }
`;

const ListWrapper = styled.div`
    position: relative;
    align-self: center;
    left: 1rem;
    overflow: hidden;
`;

const Paragraph = styled.p`
    color: white;
    font-size: ${props =>
        props.tes ? '20px' : props.transparent ? '25px' : '15px'};
    font-weight: ${props => (props.tes ? 'bold' : null)};
    padding-left: 1em;
    margin: 10px 0 10px 0;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const ScoreCard = props => {
    return (
        <Card transparent={props.transparent} margin={props.margin}>
            <Scrollbars>
                <ListWrapper>
                    <div style={{ display: 'flex' }}>
                        <Paragraph>{props.icon}</Paragraph>
                        <Paragraph>{props.text}</Paragraph>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Paragraph tes={true}>{props.symbolIs}</Paragraph>
                        <Paragraph transparent={props.transparent} tes={true}>
                            {props.value}
                        </Paragraph>
                    </div>
                </ListWrapper>
            </Scrollbars>
        </Card>
    );
};

export default ScoreCard;
