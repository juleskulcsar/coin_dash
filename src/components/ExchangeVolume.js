import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { getExchangeVolume } from '../actions/exchangeVolume';
import { getExchanges } from '../actions/exchanges';
import { getExchangeById } from '../actions/exchangesById';
import Chart_Component2 from './Chart_Component2';
import ScoreCard from './ScoreCard';
import TickerTable from './TickerTable';
import { Spinner } from './Spinner';
import ExchangeScoreCards from './ExchangeScoreCards';

const transition = css`
    transition: transform 0.45s;
`;

const Card = styled.div`
    overflow: hidden;
    position: relative;
    width: 850px;
    margin: 2rem 0 0 3rem;
    /* height: 400px; */
`;
const Row = styled.div`
    display: flex;
    position: relative;
`;
const Underline = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    top: 2.5em;
    width: 425px;
    height: 8px;
    background: #e47656;
    transform: translateX(${p => (p.active === 0 ? 0 : p.active * 100)}%);
    ${transition};
`;

const Button = styled.button`
    flex: 1 1 33.33%;
    border-bottom: 1px solid ${rgba('white', 0.25)};
    color: ${p => rgba('white', p.active ? 1 : 0.25)};
    font-size: 20px;
    background: #5b6f7c;
    height: 2em;
    opacity: 0.8;
    backdrop-filter: blur(20px);
    border-radius: 4px;
    @media (max-width: 768px) {
        display: ${props => (props.hide ? 'none' : null)};
    }
`;

const Content = styled.div`
    /* position: relative; */
    /* top: 2em; */
    height: 100%;
    display: flex;
    transform: translate(${p => (p.active === 0 ? 0 : `-${p.active * 850}px`)});
    ${transition};
    justify-content: space-between;
`;

const Tab = styled.div`
    width: 780px;
    height: 90vh;
    margin: 2em 2em 0 2em;
    /* @media (max-width: 768px) {
        display: ${props => (props.hide ? 'none' : null)};
    } */
`;

const Panel = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    /* top: 0.5em; */
    border-radius: 20px;
`;
const ScoreCardWrapper = styled.div`
    display: flex;
    /* flex: 1; */
    position: relative;
    top: 1em;
    border-radius: 20px;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const tabs = ['volumes', 'tickers'];

const ExchangeVolume = ({
    getExchangeVolume,
    getExchangeById,
    exchangeVolumes: { exchangeVolumeLoad, params },
    exchanges: { exchanges },
    exchange: { exchange }
}) => {
    useEffect(() => {
        getExchangeVolume(params);
    }, [getExchangeVolume]);
    useEffect(() => {
        getExchanges();
    }, []);
    useEffect(() => {
        getExchangeById();
    }, []);

    const idList = [];
    for (let i = 0; i < exchanges.length; i++) {
        idList.push(exchanges[i].id);
    }
    let idIndex = idList.indexOf('aax');
    console.log('id: ', idIndex);

    const [active, setActive] = useState(0);

    const Tabs = ({ active, setActive }) => (
        <Row>
            <Underline active={active} />
            {tabs.map((tab, index) => (
                <Button
                    active={active === index}
                    onClick={() => setActive(index)}
                    hide={true}
                >
                    {tab}
                </Button>
            ))}
        </Row>
    );

    return (
        <>
            {exchanges.length == 0 ? (
                <Spinner />
            ) : (
                <Card>
                    <Tabs active={active} setActive={setActive} />
                    <Content active={active}>
                        <Tab>
                            <ExchangeScoreCards />
                            <Chart_Component2
                                values={exchangeVolumeLoad[0]}
                                dates={exchangeVolumeLoad[1]}
                                params={params.id}
                            />
                        </Tab>
                        <Tab hide={true}>
                            <TickerTable exchange={exchange} />
                        </Tab>
                    </Content>
                </Card>
            )}
        </>
    );
};

ExchangeVolume.propTypes = {
    getExchangeVolume: PropTypes.func.isRequired,
    exchangeVolumeLoad: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    getExchanges: PropTypes.func.isRequired,
    getExchangeById: PropTypes.func.isRequired,
    exchange: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    exchangeVolumes: state.exchangeVolumes,
    exchanges: state.exchanges,
    exchange: state.exchange
});
export default connect(mapStateToProps, {
    getExchanges,
    getExchangeVolume,
    getExchangeById
})(withRouter(ExchangeVolume));
