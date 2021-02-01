import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getCoins } from '../actions/coinsList';
import CoinItem from './CoinItem';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    width: 70%;
    left: 10em;
`;

const CoinList = ({ getCoins, coinsList: { coinsListData } }) => {
    useEffect(() => {
        getCoins();
    }, [getCoins]);

    console.log('coinsListData', coinsListData);

    return (
        <Wrapper>
            {coinsListData.length == 0 ? (
                <Spinner />
            ) : (
                coinsListData.map(item => (
                    <CoinItem
                        image={item.image}
                        id={item.id}
                        current_price={item.current_price}
                        high_24h={item.high_24h}
                        low_24h={item.low_24h}
                        circulating_supply={item.circulating_supply}
                        name={item.name}
                        total_supply={item.total_supply}
                        total_volume={item.total_volume}
                    />
                ))
            )}
        </Wrapper>
    );
};

CoinList.propTypes = {
    getCoins: PropTypes.func.isRequired,
    coinsList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    coinsList: state.coinsList
});
export default connect(mapStateToProps, { getCoins })(withRouter(CoinList));
