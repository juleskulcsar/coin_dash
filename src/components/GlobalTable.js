import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    /* top: 2rem; */
    justify-content: space-around;
    height: 100%;
    overflow: scroll;
    border: 1px solid transparent;
    border-radius: 20px;
`;

const TableWrapper = styled.div`
    box-shadow: 0 4px 15px ${rgba('black', 0.1)};
    filter: drop-shadow(1px 4px 12px #101820);
    opacity: 0.9;
    background: linear-gradient(
        111.29deg,
        rgba(108, 114, 119, 0.53) -1.83%,
        rgba(45, 54, 61, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
`;

const Table = styled.table`
    border-radius: 5px;
    font-size: 13px;
    font-weight: normal;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    /* height: 70%; */
    overflow: scroll;
    @media (max-width: 768px) {
        display: none;
    }
`;

const TD = styled.td`
    text-align: center;
    font-size: 13px;
    padding: 8px;
    color: ${props => (props.color ? '#bacdca' : null)};
`;

const TH = styled.th`
    text-align: center;
    padding: 8px;
    color: #ffffff;
    /* background: #5b6f7c; */
    background: linear-gradient(
        111.29deg,
        rgba(34, 41, 46, 1) -1.83%,
        rgba(27, 32, 37, 0.9) 189.95%
    );
    position: sticky;
    top: 0;
    height: 2em;
`;

const TR = styled.tr`
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const TableHead = styled.thead`
    color: #ffffff;
    border-bottom: 1px solid white;
`;

const GlobalTable = coins => {
    console.log('coins in globaltable: ', coins.coins);
    return (
        <Wrapper>
            {coins.length < 1 ? (
                <Spinner />
            ) : (
                <TableWrapper>
                    <Table>
                        <TableHead>
                            <TR>
                                <TH>Coin</TH>
                                <TH>Total Volume</TH>
                                <TH>Total Market Cap</TH>
                            </TR>
                        </TableHead>
                        <tbody>
                            {coins.coins.map((elem, i) => {
                                return (
                                    <TR>
                                        <TD color='true'>{elem.coin}</TD>
                                        <TD color='true'>{elem.volume}</TD>
                                        <TD color='true'>{elem.marketCap}</TD>
                                    </TR>
                                );
                            })}
                        </tbody>
                    </Table>
                </TableWrapper>
            )}
        </Wrapper>
    );
};

export default GlobalTable;

// GlobalTable.propTypes = {
//     // getExchangeVolume: PropTypes.func.isRequired,
//     getExchangeById: PropTypes.func.isRequired,
//     exchange: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     exchange: state.exchange
// });
// export default connect(mapStateToProps, {
//     getExchangeById
//     // getExchangeVolume
// })(GlobalTable);
