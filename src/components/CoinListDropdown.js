import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getCoins } from '../actions/coinsList';
import CoinItem from './CoinItem';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-around; */
    /* width: 70%;
    left: 10em; */
    overflow: scroll;
    /* margin: 2em; */
    /* height: fit-content; */
`;

const Dropdown = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledSelect = styled.select.attrs({ type: 'number' })`
    padding: 4px 8px;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 1em;
    margin-bottom: 8px;
    /* width: 100%; */
    box-sizing: border-box;
    height: 40px;
    background: transparent;
    color: #bfbdbc;
    :focus {
        outline: none !important;
    }
`;

const Input = styled.input`
    padding: 4px 8px;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 1em;
    margin-bottom: 8px;
    box-sizing: border-box;
    height: 40px;
    background: transparent;
    /* color: #bfbdbc; */
    color: ${props => (props.submitProfile ? '#F16350' : '#bfbdbc')};
    cursor: ${props => (props.submitProfile ? 'pointer' : 'default')};
    :focus {
        outline: none !important;
    }
    :hover {
        background: ${props => (props.submitProfile ? '#34170d' : null)};
    }
`;

const CoinListDropdown = ({ getCoins, coinsList: { coinsListData } }) => {
    useEffect(() => {
        getCoins();
    }, [getCoins]);

    console.log('coinsListData in dropdown', coinsListData);

    return (
        <Wrapper>
            {coinsListData.length == 0 ? (
                <Spinner />
            ) : (
                <Dropdown>
                    <StyledSelect>
                        {coinsListData.map(item => (
                            <option id={item.id}>{item.id}</option>
                        ))}
                    </StyledSelect>
                    <p style={{ color: 'white' }}>{coinsListData[0].id}</p>
                    <Input />
                    <p style={{ color: 'white' }}>USD</p>
                    <Input />
                </Dropdown>
            )}
        </Wrapper>
    );
};

CoinListDropdown.propTypes = {
    getCoins: PropTypes.func.isRequired,
    coinsList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    coinsList: state.coinsList
});
export default connect(mapStateToProps, { getCoins })(CoinListDropdown);
