import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getCoins } from '../actions/coinsList';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
    margin-top: 1em;
    height: 5vh;
    @media (max-width: 768px) {
        position: relative;
        /* top: 23em; */
        width: 300px;
    }
`;

const Dropdown = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        /* position: relative;
        top: 25em; */
    }
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
    @media (max-width: 768px) {
        position: relative;
        /* bottom: 25em; */
        width: 300px;
    }
`;

const Input = styled.input.attrs(props => ({
    type: props.num ? 'number' : null
}))`
    padding: 4px 8px;
    border: 1px solid rgb(235, 233, 233, 0.3);
    border-left: 1px solid transparent;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 1em;
    margin-bottom: 8px;
    box-sizing: border-box;
    height: 40px;
    background: transparent;
    color: #bfbdbc;
    :focus {
        outline: none !important;
    }
    width: 50%;
`;

const Label = styled.label`
    background: #44535d;
    align-self: center;
    color: white;
    padding: 10px 20px 10px 20px;
    margin-bottom: 8px;
    border: 1px solid rgb(235, 233, 233, 0.1);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

const TestDiv = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        display: none;
    }
`;

const CoinListDropdown = ({
    getCoins,
    coinsList: { coinsListData },
    onChange,
    coin
}) => {
    useEffect(() => {
        getCoins();
    }, [getCoins]);

    const [val, setVal] = useState('');

    const clickHandler = params => {
        onChange(params);
    };

    const idList = [];
    for (let i = 0; i < coinsListData.length; i++) {
        idList.push(coinsListData[i].id);
    }
    const id = idList.indexOf(coin);

    return (
        <Wrapper>
            {coinsListData.length == 0 ? (
                <Spinner />
            ) : (
                <Dropdown>
                    <StyledSelect onChange={e => clickHandler(e.target.value)}>
                        {coinsListData.map((item, index) => (
                            <option key={index} id={item.id}>
                                {item.id}
                            </option>
                        ))}
                    </StyledSelect>
                    <TestDiv>
                        <Label>{coinsListData[id].symbol}</Label>
                        <Input
                            num={true}
                            onChange={e => setVal(e.target.value)}
                        />
                        <span
                            style={{
                                color: 'white',
                                fontSize: '1.5em',
                                marginTop: '5px'
                            }}
                            className='material-icons'
                        >
                            compare_arrows
                        </span>
                        <Label>USD</Label>
                        <Input
                            value={val * coinsListData[id].current_price}
                            readOnly
                        />
                    </TestDiv>
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
