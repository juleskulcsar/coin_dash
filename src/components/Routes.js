import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import TopChart from './TopChart';
import CoinList from './CoinList';
import Exchanges from './Exchanges';
import ExchangeVolume from './ExchangeVolume';

const Container = styled.div`
    background: #2d363d;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0 1em 0 0;
    width: 80%;
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0 0 0 0;
    }
`;

const Routes = () => {
    return (
        <Container>
            <Route exact path='/' component={TopChart} />
            <Route exact path='/coinlist' component={CoinList} />
            <Route exact path='/exchanges' component={Exchanges} />
            <Route exact path='/volumes' component={ExchangeVolume} />
            {/* <Route component={NotFound} /> */}
        </Container>
    );
};

export default Routes;
