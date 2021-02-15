import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
    list-style: none;
    list-style-image: url(../images/active_currencies.png);
    width: 60%;
`;

const StyledList = styled.li`
    text-align: left;
    font-size: 20px;
    line-height: 1.7;
    padding: 5px;
    color: #eff1f2;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    ::marker {
        color: #e8431b;
    }
`;

const GlobalList = globalDataLoad => {
    return (
        <>
            <StyledUl>
                <StyledList>
                    <span
                        className='material-icons'
                        style={{ paddingRight: '2em' }}
                    >
                        monetization_on
                    </span>{' '}
                    Active crypto currencies:{' '}
                    <span
                        style={{
                            color: '#9ec9c1',
                            fontWeight: 'bold'
                        }}
                    >
                        {globalDataLoad.globalDataLoad.active_cryptocurrencies}
                    </span>
                </StyledList>
                <StyledList>
                    <span
                        className='material-icons'
                        style={{ paddingRight: '2em' }}
                    >
                        storefront
                    </span>{' '}
                    Markets:{' '}
                    <span
                        style={{
                            color: '#9ec9c1',
                            fontWeight: 'bold'
                        }}
                    >
                        {globalDataLoad.globalDataLoad.markets}
                    </span>
                </StyledList>
                <StyledList>
                    <span
                        className='material-icons'
                        style={{ paddingRight: '2em' }}
                    >
                        local_convenience_store
                    </span>{' '}
                    Market cap change USD 24h:{' '}
                    <span
                        style={{
                            color: '#9ec9c1',
                            fontWeight: 'bold'
                        }}
                    >
                        {globalDataLoad.globalDataLoad.market_cap_change_percentage_24h_usd.toFixed(
                            2
                        )}
                        %
                    </span>
                </StyledList>
                <StyledList>
                    <span
                        className='material-icons'
                        style={{ paddingRight: '2em' }}
                    >
                        call_missed_outgoing
                    </span>{' '}
                    Ongoing icos:{' '}
                    <span
                        style={{
                            color: '#9ec9c1',
                            fontWeight: 'bold'
                        }}
                    >
                        {globalDataLoad.globalDataLoad.ongoing_icos}
                    </span>
                </StyledList>
                <StyledList>
                    <span
                        className='material-icons'
                        style={{ paddingRight: '2em' }}
                    >
                        cancel_presentation
                    </span>{' '}
                    Ended icos:{' '}
                    <span
                        style={{
                            color: '#9ec9c1',
                            fontWeight: 'bold'
                        }}
                    >
                        {globalDataLoad.globalDataLoad.ended_icos}
                    </span>
                </StyledList>
                <StyledList>
                    <span
                        className='material-icons'
                        style={{ paddingRight: '2em' }}
                    >
                        upcoming
                    </span>{' '}
                    Upcoming icos:{' '}
                    <span
                        style={{
                            color: '#9ec9c1',
                            fontWeight: 'bold'
                        }}
                    >
                        {globalDataLoad.globalDataLoad.upcoming_icos}
                    </span>
                </StyledList>
            </StyledUl>
        </>
    );
};

export default GlobalList;
