import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getCoins } from '../actions/coinsList';
import CoinItem from './CoinItem';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
    overflow: scroll;
    margin-top: 1em;
`;

const Dropdown = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledSelect = styled.select`
    padding: 4px 8px;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 1em;
    margin-bottom: 8px;
    margin-right: 1em;
    box-sizing: border-box;
    height: 40px;
    background: transparent;
    color: #bfbdbc;
    :focus {
        outline: none !important;
    }
`;

const Input = styled.input.attrs(props => ({
    type: props.num ? 'number' : null
}))`
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
    :focus {
        outline: none !important;
    }
    :hover {
        background: ${props => (props.submitProfile ? '#34170d' : null)};
    }
`;

const Label = styled.label`
    background: #44535d;
    align-self: center;
    color: white;
    padding: 10px 20px 10px 20px;
    margin-bottom: 8px;
`;

const CoinListDropdown = ({ getCoins, coinsList: { coinsListData } }) => {
    useEffect(() => {
        getCoins();
    }, [getCoins]);

    // console.log('coinsListData in dropdown', coinsListData);

    const [val, setVal] = useState('');

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
                    <Label>{coinsListData[0].id}</Label>
                    <Input num={true} onChange={e => setVal(e.target.value)} />
                    <span
                        style={{
                            color: 'white',
                            fontSize: '2em',
                            marginTop: '5px'
                        }}
                        class='material-icons'
                    >
                        compare_arrows
                    </span>
                    <Label>USD</Label>
                    <Input value={val * coinsListData[0].current_price} />
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
