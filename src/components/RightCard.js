import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled, { css, keyframes } from 'styled-components';
import { rgba, modularScale } from 'polished';

const Card = styled.div`
    position: relative;
    width: 17em;
    height: 50%;
    max-height: 40vh;
    margin-top: 3em;
    overflow: hidden;
    border-radius: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0 4px 15px ${rgba('black', 0.1)};
    filter: drop-shadow(1px 4px 12px #101820);
    opacity: 0.9;

    border: 1px solid rgb(235, 233, 233, 0.3);
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

const RightCard = ({ coinDataLoad }) => {
    return (
        <Card>
            <Scrollbars>
                <ListWrapper>
                    <List>
                        <li>
                            <Paragraph>Symbol: {coinDataLoad.symbol}</Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Website: {coinDataLoad.links.homepage[0]}
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Market Cap: Rank #{coinDataLoad.market_cap_rank}
                            </Paragraph>
                        </li>
                        <li>
                            {coinDataLoad.market_data
                                .market_cap_change_percentage_24h < 0 ? (
                                <Paragraph>
                                    Market Cap 24h:{' '}
                                    <span
                                        style={{
                                            color: '#E8431B'
                                        }}
                                    >
                                        {coinDataLoad.market_data.market_cap_change_percentage_24h.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </Paragraph>
                            ) : (
                                <Paragraph>
                                    Market Cap 24h:{' '}
                                    <span
                                        style={{
                                            color: '#56a192'
                                        }}
                                    >
                                        {coinDataLoad.market_data.market_cap_change_percentage_24h.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#56a192'
                                        }}
                                    >
                                        trending_up
                                    </span>
                                </Paragraph>
                            )}
                        </li>
                        <li>
                            <Paragraph>
                                Genesis Date: {coinDataLoad.genesis_date}
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Liquidity Score: {coinDataLoad.liquidity_score}
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                High 24h:{' '}
                                {coinDataLoad.market_data.high_24h.usd}
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Low 24h: {coinDataLoad.market_data.low_24h.usd}
                            </Paragraph>
                        </li>
                    </List>
                </ListWrapper>
            </Scrollbars>
        </Card>
    );
};

export default RightCard;
