import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopChart from './TopChart';
import CoinList from './CoinList';

const Routes = () => {
    return (
        <div
            className='container'
            style={{
                background: '#2d363d',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
                // width: '60%',
                padding: '0 1em 0 0'
            }}
        >
            {/* <Switch> */}
            <Route exact path='/' component={TopChart} />
            <Route exact path='/coinlist' component={CoinList} />
            {/* <Route component={NotFound} /> */}
            {/* </Switch> */}
        </div>
    );
};

export default Routes;
