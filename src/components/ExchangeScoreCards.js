import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ScoreCard from './ScoreCard';
import { Spinner } from './Spinner';
import { getExchanges } from '../actions/exchanges';

const ScoreCardWrapper = styled.div`
    display: flex;
    position: relative;
    top: 1em;
    margin: 1em 1em 1em 0;
    width: 100%;
    border-radius: 20px;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const icons = [
    <i className='fas fa-parachute-box'></i>,
    <span className='material-icons'>loop</span>,
    <span className='material-icons'>monetization_on</span>
];

const ExchangeScoreCards = ({
    getExchanges,
    exchanges: { exchanges },
    param
}) => {
    useEffect(() => {
        getExchanges();
    }, []);

    const idList = [];
    for (let i = 0; i < exchanges.length; i++) {
        idList.push(exchanges[i].id);
    }
    const id = idList.indexOf(param);

    console.log('exchanges[id]: ', exchanges);
    console.log('id is: ', id);
    console.log('param is: ', param);

    return (
        <>
            {exchanges.length < 1 ? (
                <Spinner />
            ) : (
                <ScoreCardWrapper>
                    <ScoreCard
                        text={`${exchanges[id].name} Vol 24h:   `}
                        value={exchanges[id].trade_volume_24h_btc.toFixed(2)}
                        icon={icons[0]}
                        symbolIs={'btc'}
                        transparent={true}
                    />
                    <ScoreCard
                        text={`${exchanges[id].name} Vol Normalized 24h:   `}
                        value={exchanges[
                            id
                        ].trade_volume_24h_btc_normalized.toFixed(2)}
                        icon={icons[1]}
                        symbolIs={'btc'}
                        transparent={true}
                    />
                </ScoreCardWrapper>
            )}
        </>
    );
};

ExchangeScoreCards.propTypes = {
    getExchanges: PropTypes.func.isRequired,
    exchanges: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    exchanges: state.exchanges
});

export default connect(mapStateToProps, { getExchanges })(ExchangeScoreCards);
