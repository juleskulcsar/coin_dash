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
    max-width: 800px;
    border-radius: 20px;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 24em;
    }
`;

const Image = styled.img`
    height: 2em;
    margin: 10px 10px 0 10px;
    filter: drop-shadow(1px 4px 12px #1d1562);
    @media (max-width: 768px) {
        padding: 0;
        margin: 0;
    }
`;

const Paragraph = styled.p`
    color: white;
    line-height: 1.6;
    font-size: 30px;
    padding-right: 1em;
    @media (max-width: 768px) {
        font-size: 20px;
        padding: 0;
        margin: 0;
    }
`;

const TopScoreCards = ({ getCoinData, coinData: { coinDataLoad }, param }) => {
    useEffect(() => {
        getCoinData(param.coin);
    }, [getCoinData, param.coin]);

    console.log('coinDataLoad: ', coinDataLoad);

    const icons = [
        <i className='fas fa-parachute-box'></i>,
        <span className='material-icons'>loop</span>,
        <span className='material-icons'>monetization_on</span>
    ];

    return (
        <>
            {Object.keys(coinDataLoad).length == 0 ? (
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
                            Price{' '}
                            <span
                                style={{ color: '#bacdca', fontSize: '30px' }}
                            >
                                ${coinDataLoad.market_data.current_price.usd}
                            </span>
                        </Paragraph>
                        {coinDataLoad.market_data.price_change_percentage_24h <
                        0 ? (
                            <Paragraph>
                                24h:{' '}
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
                                        color: '#E8431B'
                                        // fontSize: '30px'
                                    }}
                                >
                                    trending_down
                                </span>
                            </Paragraph>
                        ) : (
                            <Paragraph>
                                24h:{' '}
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
                                        color: '#56a192'
                                        // fontSize: '30px'
                                    }}
                                >
                                    trending_up
                                </span>
                            </Paragraph>
                        )}
                    </ScoreCardWrapper>

                    <ScoreCardWrapper>
                        <ScoreCard
                            text={`All time high: ${coinDataLoad.market_data.ath_date.usd.slice(
                                0,
                                10
                            )}  `}
                            value={coinDataLoad.market_data.ath.usd}
                            icon={icons[0]}
                            symbolIs={'$'}
                            transparent={false}
                            margin={true}
                        />
                        <ScoreCard
                            text={`All time low: ${coinDataLoad.market_data.atl_date.usd.slice(
                                0,
                                10
                            )}   `}
                            value={coinDataLoad.market_data.atl.usd}
                            icon={icons[2]}
                            symbolIs={'$'}
                            transparent={false}
                            margin={true}
                        />
                        <ScoreCard
                            text={'Circulating supply:   '}
                            value={coinDataLoad.market_data.circulating_supply}
                            icon={icons[1]}
                            symbolIs={''}
                            transparent={false}
                        />
                    </ScoreCardWrapper>
                </>
            )}
        </>
    );
};

TopScoreCards.propTypes = {
    getCoinData: PropTypes.func.isRequired
    // coinDataLoad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    coinData: state.coinData
});
export default connect(mapStateToProps, { getCoinData })(
    withRouter(TopScoreCards)
);
