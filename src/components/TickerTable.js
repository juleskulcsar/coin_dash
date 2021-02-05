import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';
import { getExchangeById } from '../actions/exchangesById';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    /* top: 2rem; */
    justify-content: space-around;
    height: 90%;
    overflow: scroll;
`;

const TableWrapper = styled.div`
    box-shadow: 0 4px 15px ${rgba('black', 0.1)};
    filter: drop-shadow(1px 4px 12px #101820);
    opacity: 0.9;
    background: linear-gradient(
        111.29deg,
        rgba(34, 41, 46, 0.53) -1.83%,
        rgba(27, 32, 37, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
`;

const Table = styled.table`
    border-radius: 5px;
    font-size: 13px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    height: 70%;
    overflow: scroll;
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
    background: #5b6f7c;
    position: sticky;
    top: 0;
`;

const TR = styled.tr`
    color: white;
`;

const TableHead = styled.thead`
    color: #ffffff;
`;

const TickerTable = ({ exchange }) => {
    // useEffect(() => {
    //     getExchangeById();
    // }, []);

    console.log('exchangeById in tickerTable: ', exchange);

    return (
        <Wrapper>
            {exchange.tickers.length < 1 ? (
                <Spinner />
            ) : (
                <TableWrapper>
                    <Table>
                        <TableHead>
                            <TR>
                                <TH>Base</TH>
                                <TH>Target</TH>
                                <TH>Volume</TH>
                                <TH>Converted Volume</TH>
                                <TH>Bid ask spread %</TH>
                                <TH>Is anomaly</TH>
                                <TH>Is stale</TH>
                                <TH>Last fetched</TH>
                            </TR>
                        </TableHead>
                        {exchange.tickers.map((elem, i) => {
                            return (
                                <TR key={i}>
                                    <TD color={true}>{elem.base}</TD>
                                    <TD>{elem.target}</TD>
                                    <TD>{elem.volume.toFixed(2)}</TD>
                                    <TD>
                                        {elem.converted_volume.btc.toFixed(2)}
                                    </TD>
                                    <TD>
                                        {elem.bid_ask_spread_percentage.toFixed(
                                            2
                                        )}
                                    </TD>
                                    <TD> {elem.is_anomaly.toString()}</TD>
                                    <TD>{elem.is_stale.toString()}</TD>
                                    <TD>{elem.last_fetch_at}</TD>
                                </TR>
                            );
                        })}
                    </Table>
                </TableWrapper>
            )}
        </Wrapper>
    );
};

// TickerTable.propTypes = {
//     getExchangeById: PropTypes.func.isRequired,
//     exchange: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     exchange: state.exchange
// });

// export default connect(mapStateToProps, {
//     getExchangeById
// })(TickerTable);

export default TickerTable;
