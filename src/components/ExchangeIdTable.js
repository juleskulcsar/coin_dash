import React, { useEffect } from 'react';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';

import { Spinner } from './Spinner';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 8px;
    justify-content: space-around;
    height: 90%;
    overflow: scroll;
    border-bottom: 1px solid white;
    border-radius: 10px;
    margin: 0 auto;
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
    border-bottom: none;
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
    background: #5b6f7c;
    position: sticky;
    top: 0;
    height: 2em;
`;

const TR = styled.tr`
    color: white;
`;

const TableHead = styled.thead`
    color: #ffffff;
`;

const ExchangeIdTable = ({ exchanges }) => {
    return (
        <Wrapper>
            {exchanges.length < 1 ? (
                <Spinner />
            ) : (
                <TableWrapper>
                    <Table>
                        <TableHead>
                            <TR>
                                <TH>Name</TH>
                                <TH>Id</TH>
                            </TR>
                        </TableHead>
                        {exchanges.map((elem, i) => {
                            return (
                                <TR key={i}>
                                    <TD color={true}>{elem.name}</TD>
                                    <TD>{elem.id}</TD>
                                </TR>
                            );
                        })}
                    </Table>
                </TableWrapper>
            )}
        </Wrapper>
    );
};

export default ExchangeIdTable;
