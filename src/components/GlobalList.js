import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';
import { Spinner } from './Spinner';

const StyledUl = styled.ul`
    margin-left: 2em;
    list-style: square outside none;
`;

const StyledList = styled.li`
    text-align: left;
    font-size: 20px;
    line-height: 1.7;
    padding: 5px;
    color: #eff1f2;
    ::marker {
        color: #e8431b;
    }
`;

const GlobalList = globalDataLoad => {
    console.log('global list: ', globalDataLoad);
    return (
        <>
            <StyledUl>
                <StyledList>
                    Active crypto currencies:{' '}
                    {globalDataLoad.globalDataLoad.active_cryptocurrencies}
                </StyledList>
                <StyledList>
                    Markets: {globalDataLoad.globalDataLoad.markets}
                </StyledList>
                <StyledList>
                    Market cap change USD 24h:{' '}
                    {globalDataLoad.globalDataLoad.market_cap_change_percentage_24h_usd.toFixed(
                        2
                    )}
                    %
                </StyledList>
                <StyledList>
                    Ongoing icos: {globalDataLoad.globalDataLoad.ongoing_icos}
                </StyledList>
                <StyledList>
                    Ended icos: {globalDataLoad.globalDataLoad.ended_icos}
                </StyledList>
                <StyledList>
                    Upcoming icos: {globalDataLoad.globalDataLoad.upcoming_icos}
                </StyledList>
            </StyledUl>
        </>
    );
};

export default GlobalList;
