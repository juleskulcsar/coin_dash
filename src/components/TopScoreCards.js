import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ScoreCard from './ScoreCard';
import { getCoinData } from '../actions/coinData';
import { Spinner } from './Spinner';

const ScoreCardWrapper = styled.div`
    display: flex;
    position: relative;
    top: 1em;
    border-radius: 20px;
    justify-content: space-between;
`;

const Image = styled.img`
    height: 2em;
    margin: 10px 10px 0 10px;
    filter: drop-shadow(1px 4px 12px #1d1562);
`;

const Paragraph = styled.p`
    color: white;
    line-height: 1.6;
    font-size: 30px;
`;

const TopScoreCards = ({ getCoinData, coinData: { coinDataLoad, coin } }) => {
    useEffect(() => {
        getCoinData(coin);
    }, [getCoinData]);

    console.log('coinDataLoad: ', coinDataLoad);

    const icons = [
        <i className='fas fa-parachute-box'></i>,
        <span className='material-icons'>loop</span>,
        <span className='material-icons'>monetization_on</span>
    ];

    return (
        <>
            {coinDataLoad.length == 0 ? (
                <Spinner />
            ) : (
                <>
                    <ScoreCardWrapper>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Image src={coinDataLoad.image.small} />
                            <Paragraph>{coinDataLoad.name}</Paragraph>
                        </div>
                        <Paragraph>
                            Current Price{' '}
                            <span style={{ color: 'orange', fontSize: '30px' }}>
                                ${coinDataLoad.market_data.current_price.usd}
                            </span>
                        </Paragraph>
                        {coinDataLoad.market_data.price_change_percentage_24h <
                        0 ? (
                            <Paragraph>
                                Price change 24h:{' '}
                                <span
                                    style={{
                                        color: '#E8431B',
                                        fontSize: '30px'
                                    }}
                                >
                                    {coinDataLoad.market_data.price_change_percentage_24h.toFixed(
                                        2
                                    )}
                                    %
                                </span>
                                <span
                                    className='material-icons'
                                    style={{
                                        color: '#E8431B',
                                        fontSize: '30px'
                                    }}
                                >
                                    trending_down
                                </span>
                            </Paragraph>
                        ) : (
                            <Paragraph>
                                <span
                                    style={{
                                        color: '#56a192',
                                        fontSize: '30px'
                                    }}
                                >
                                    {coinDataLoad.market_data.price_change_percentage_24h.toFixed(
                                        2
                                    )}
                                    %
                                </span>
                                <span
                                    className='material-icons'
                                    style={{
                                        color: '#56a192',
                                        fontSize: '30px'
                                    }}
                                >
                                    trending_up
                                </span>
                            </Paragraph>
                        )}
                    </ScoreCardWrapper>

                    <ScoreCardWrapper>
                        <ScoreCard
                            text={'Max supply:   '}
                            value={coinDataLoad.market_data.max_supply}
                            icon={icons[0]}
                            symbolIs={''}
                        />
                        <ScoreCard
                            text={'Circulating supply:   '}
                            value={coinDataLoad.market_data.circulating_supply}
                            icon={icons[1]}
                            symbolIs={''}
                        />

                        <ScoreCard
                            text={'Diluted valuation:   '}
                            value={
                                coinDataLoad.market_data.fully_diluted_valuation
                                    .usd
                            }
                            icon={icons[2]}
                            symbolIs={'$'}
                        />
                    </ScoreCardWrapper>
                </>
            )}
        </>
    );
};

TopScoreCards.propTypes = {
    getCoinData: PropTypes.func.isRequired,
    coinDataLoad: PropTypes.object.isRequired,
    coin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    coinData: state.coinData
});
export default connect(mapStateToProps, { getCoinData })(
    withRouter(TopScoreCards)
);
