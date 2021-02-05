import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';
import { getExchanges } from '../actions/exchanges';
import { Spinner } from './Spinner';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 2rem;
    justify-content: space-around;
    height: 90vh;
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

const UrlLink = styled.a`
    float: left;
    color: white;
    text-decoration: none;
    :hover {
        color: #ef7b5f;
    }
`;

const TickerTable = props => {
    const tableEntries = props.exchanges.map((elem, i) => {
        return (
            <TR key={i}>
                <TD color={true}>{elem.base}</TD>
                <TD>{elem.target}</TD>
                <TD>{elem.volume}</TD>
                <TD>{elem.converted_volume}</TD>
                <TD>{elem.bid_ask_spread_percentage}</TD>
                <TD> {elem.is_anomaly}</TD>
                <TD>{elem.is_stale}</TD>
                <TD>{elem.last_fetch_at}</TD>
            </TR>
        );
    });

    return (
        <Wrapper>
            {props.exchanges.length == 0 ? (
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
                        {tableEntries}
                    </Table>
                </TableWrapper>
            )}
        </Wrapper>
    );
};

export default TickerTable;
