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
    height: 100vh;
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

const Exchanges = ({ getExchanges, exchanges: { exchanges } }) => {
    useEffect(() => {
        getExchanges();
    }, []);

    const tableEntries = exchanges.map((elem, i) => {
        return (
            <TR key={i}>
                <TD color={true}>{elem.name}</TD>
                <TD>{elem.id}</TD>
                <TD>{elem.country}</TD>
                <TD>
                    <UrlLink target='_blank' href={elem.url}>
                        {elem.url}
                    </UrlLink>
                </TD>
                <TD color={true}>{elem.trade_volume_24h_btc.toFixed(2)}</TD>
                <TD>{elem.trust_score}</TD>
                <TD>{elem.trust_score_rank}</TD>
            </TR>
        );
    });

    return (
        <Wrapper>
            {exchanges.length == 0 ? (
                <Spinner />
            ) : (
                <TableWrapper>
                    <Table>
                        <TableHead>
                            <TR>
                                <TH>Name</TH>
                                <TH>id</TH>
                                <TH>country</TH>
                                <TH>website</TH>
                                <TH>Trade vol 24h btc</TH>
                                <TH>Trust score</TH>
                                <TH>Trust score rank</TH>
                            </TR>
                        </TableHead>
                        {tableEntries}
                    </Table>
                </TableWrapper>
            )}
        </Wrapper>
    );
};

Exchanges.propTypes = {
    getExchanges: PropTypes.func.isRequired,
    exchanges: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    exchanges: state.exchanges
});
export default connect(mapStateToProps, { getExchanges })(
    withRouter(Exchanges)
);
