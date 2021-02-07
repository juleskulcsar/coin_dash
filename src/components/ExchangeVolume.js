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
import VolumeRightCard from './VolumeRightCard';
import ExchangeIdTable from './ExchangeIdTable';

const transition = css`
    transition: transform 0.45s;
`;

const Card = styled.div`
    overflow: hidden;
    position: relative;
    width: 850px;
    /* margin: 2rem 0 0 3rem; */
    /* height: 400px; */
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; */
`;
const Row = styled.div`
    /* display: flex; */
    position: relative;
`;
const Underline = styled.div`
    position: relative;
    left: 0;
    bottom: 0;
    top: 3em;
    width: 425px;
    height: 8px;
    background: #e47656;
    transform: translateX(${p => (p.active === 0 ? 0 : p.active * 100)}%);
    ${transition};
`;

const Button = styled.button`
    position: relative;
    right: 0;
    bottom: 0;
    /* flex: 1 1 33.33%; */
    border-bottom: 1px solid ${rgba('white', 0.25)};
    color: ${p => rgba('white', p.active ? 1 : 0.25)};
    font-size: 20px;
    background: #5b6f7c;
    height: 2em;
    width: 100%;
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
    height: 90%;
    display: flex;
    justify-content: space-between;
    transform: translate(${p => (p.active === 0 ? 0 : `-${p.active * 850}px`)});
    ${transition};
`;

const Tab = styled.div`
    width: 780px;
    /* height: 100%; */
    margin: 2em 2em 0 2em;
    /* @media (max-width: 768px) {
        display: ${props => (props.hide ? 'none' : null)};
    } */
    /* height: 90%; */
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    /* top: 0.5em; */
    border-radius: 20px;
    height: 98vh;
    margin: 0 auto;
`;

const tabs = ['volumes', 'tickers'];

const ExchangeVolume = ({
    getExchangeVolume,
    getExchangeById,
    exchangeVolumes: { exchangeVolumeLoad, params },
    exchanges: { exchanges },
    exchange: { exchange }
}) => {
    const [param, setParam] = useState('aax');

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getExchangeVolume(param);
            getExchangeById(param);
            getExchanges();
        }
        return function cleanup() {
            mounted = false;
        };
    }, [param]);

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
            <div style={{ display: 'flex' }}>
                {tabs.map((tab, index) => (
                    <Button
                        active={active === index}
                        onClick={() => setActive(index)}
                        hide={true}
                    >
                        {tab}
                    </Button>
                ))}
            </div>
        </Row>
    );

    const handleClick = id => {
        setParam(id);
    };

    return (
        <>
            {exchangeVolumeLoad.length < 1 ? (
                <Spinner />
            ) : (
                <Wrapper>
                    <ExchangeIdTable
                        handleClick={handleClick}
                        exchanges={exchanges}
                        params={params}
                    />
                    <Card>
                        <Tabs active={active} setActive={setActive} />
                        <Content active={active}>
                            <Tab>
                                <ExchangeScoreCards param={param} />
                                <Chart_Component2 param={param} />
                            </Tab>
                            <Tab hide={true}>
                                <TickerTable
                                    param={param}
                                    exchange={exchange}
                                />
                            </Tab>
                        </Content>
                    </Card>
                </Wrapper>
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
