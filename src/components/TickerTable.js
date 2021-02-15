import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';
import { Spinner } from './Spinner';
import { getExchangeById } from '../actions/exchangesById';

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

const TickerTable = ({ exchange: { exchange }, param }) => {
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getExchangeById(param);
        }
        return function cleanup() {
            mounted = false;
        };
    }, [param, getExchangeById]);

    return (
        <Wrapper>
            {Object.keys(exchange).length < 1 ? (
                <Spinner />
            ) : (
                <TableWrapper>
                    <Table>
                        <TableHead>
                            <TR>
                                <TH>Base</TH>
                                <TH>Target</TH>
                                <TH>Volume</TH>
                                <TH>Converted Vol</TH>
                                <TH>Bid ask spread %</TH>
                                <TH>Anomaly</TH>
                                <TH>Stale</TH>
                                <TH>Last fetched</TH>
                            </TR>
                        </TableHead>
                        <tbody>
                            {exchange.tickers.map((elem, i) => {
                                return (
                                    <TR key={i}>
                                        <TD color='true'>{elem.base}</TD>
                                        <TD>{elem.target}</TD>
                                        <TD>{elem.volume.toFixed(2)}</TD>
                                        <TD>
                                            {elem.converted_volume.btc.toFixed(
                                                2
                                            )}
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
                        </tbody>
                    </Table>
                </TableWrapper>
            )}
        </Wrapper>
    );
};

TickerTable.propTypes = {
    getExchangeById: PropTypes.func.isRequired,
    exchange: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    exchange: state.exchange
});
export default connect(mapStateToProps, {
    getExchangeById
})(TickerTable);
