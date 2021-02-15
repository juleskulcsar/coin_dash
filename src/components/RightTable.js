import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled, { css, keyframes } from 'styled-components';
import { rgba, modularScale } from 'polished';

const Card = styled.div`
    position: relative;
    width: 16em;
    height: 40%;
    max-height: 40vh;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 1em;
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
const Table = styled.table`
    color: white;
`;
const TD = styled.td`
    padding: 0.4rem;
`;
const TH = styled.th`
    padding: 0.5rem;
`;

const RightTable = ({ coinDataLoad }) => {
    return (
        <Card>
            <Scrollbars>
                <Table>
                    <tbody>
                        <tr>
                            <TD>Timeframe</TD>
                            <TD>% Change</TD>
                        </tr>
                        <tr>
                            <TD>1h</TD>
                            {coinDataLoad.market_data
                                .price_change_percentage_1h_in_currency.usd <
                            0 ? (
                                <TD>
                                    <span
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {coinDataLoad.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </TD>
                            ) : (
                                <TD>
                                    {coinDataLoad.market_data
                                        .price_change_percentage_1h_in_currency
                                        .usd ? (
                                        <>
                                            <span
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                {coinDataLoad.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            <span
                                                className='material-icons'
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                trending_up
                                            </span>
                                        </>
                                    ) : (
                                        '--'
                                    )}
                                </TD>
                            )}
                        </tr>
                        <tr>
                            <TD>24h</TD>
                            {coinDataLoad.market_data
                                .price_change_percentage_24h_in_currency.usd <
                            0 ? (
                                <TD>
                                    <span
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {coinDataLoad.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </TD>
                            ) : (
                                <TD>
                                    {coinDataLoad.market_data
                                        .price_change_percentage_24h_in_currency
                                        .usd ? (
                                        <>
                                            <span
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                {coinDataLoad.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            <span
                                                className='material-icons'
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                trending_up
                                            </span>
                                        </>
                                    ) : (
                                        '--'
                                    )}
                                </TD>
                            )}
                        </tr>
                        <tr>
                            <TD>7d</TD>
                            {coinDataLoad.market_data
                                .price_change_percentage_7d_in_currency.usd <
                            0 ? (
                                <TD>
                                    <span
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {coinDataLoad.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </TD>
                            ) : (
                                <TD>
                                    {coinDataLoad.market_data
                                        .price_change_percentage_7d_in_currency
                                        .usd ? (
                                        <>
                                            <span
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                {coinDataLoad.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            <span
                                                className='material-icons'
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                trending_up
                                            </span>
                                        </>
                                    ) : (
                                        '--'
                                    )}
                                </TD>
                            )}
                        </tr>
                        <tr>
                            <TD>14d</TD>
                            {coinDataLoad.market_data
                                .price_change_percentage_14d_in_currency.usd <
                            0 ? (
                                <TD>
                                    <span
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {coinDataLoad.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </TD>
                            ) : (
                                <TD>
                                    {coinDataLoad.market_data
                                        .price_change_percentage_14d_in_currency
                                        .usd ? (
                                        <>
                                            <span
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                {coinDataLoad.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            <span
                                                className='material-icons'
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                trending_up
                                            </span>
                                        </>
                                    ) : (
                                        '--'
                                    )}
                                </TD>
                            )}
                        </tr>
                        <tr>
                            <TD>30d</TD>
                            {coinDataLoad.market_data
                                .price_change_percentage_30d_in_currency.usd <
                            0 ? (
                                <TD>
                                    <span
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {coinDataLoad.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </TD>
                            ) : (
                                <TD>
                                    {coinDataLoad.market_data
                                        .price_change_percentage_30d_in_currency
                                        .usd ? (
                                        <>
                                            <span
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                {coinDataLoad.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            <span
                                                className='material-icons'
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                trending_up
                                            </span>
                                        </>
                                    ) : (
                                        '--'
                                    )}
                                </TD>
                            )}
                        </tr>
                        <tr>
                            <TD>60d</TD>
                            {coinDataLoad.market_data
                                .price_change_percentage_60d_in_currency.usd <
                            0 ? (
                                <TD>
                                    <span
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {coinDataLoad.market_data.price_change_percentage_60d_in_currency.usd.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </TD>
                            ) : (
                                <TD>
                                    {coinDataLoad.market_data
                                        .price_change_percentage_60d_in_currency
                                        .usd ? (
                                        <>
                                            <span
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                {coinDataLoad.market_data.price_change_percentage_60d_in_currency.usd.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            <span
                                                className='material-icons'
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                trending_up
                                            </span>
                                        </>
                                    ) : (
                                        '--'
                                    )}
                                </TD>
                            )}
                        </tr>
                        <tr>
                            <TD>1y</TD>
                            {coinDataLoad.market_data
                                .price_change_percentage_1y_in_currency.usd <
                            0 ? (
                                <TD>
                                    <span
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {coinDataLoad.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                    <span
                                        className='material-icons'
                                        style={{
                                            color: '#E8431B',
                                            fontSize: '20px'
                                        }}
                                    >
                                        trending_down
                                    </span>
                                </TD>
                            ) : (
                                <TD>
                                    {coinDataLoad.market_data
                                        .price_change_percentage_1y_in_currency
                                        .usd ? (
                                        <>
                                            <span
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                {coinDataLoad.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                            <span
                                                className='material-icons'
                                                style={{
                                                    color: '#56a192',
                                                    fontSize: '20px'
                                                }}
                                            >
                                                trending_up
                                            </span>
                                        </>
                                    ) : (
                                        '--'
                                    )}
                                </TD>
                            )}
                        </tr>
                    </tbody>
                </Table>
            </Scrollbars>
        </Card>
    );
};

export default RightTable;
