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
import TickerTable from './TickerTable';
import { Spinner } from './Spinner';
import ExchangeScoreCards from './ExchangeScoreCards';
import ExchangeIdTable from './ExchangeIdTable';

const transition = css`
    transition: transform 0.45s;
`;

const Card = styled.div`
    overflow: hidden;
    position: relative;
    width: 780px;
    max-width: 900px;
    /* margin: 0 auto; */
`;
const Row = styled.div`
    position: relative;
`;
const Underline = styled.div`
    position: relative;
    left: 0;
    bottom: 0;
    top: 3em;
    width: 390px;
    height: 8px;
    background: #e47656;
    transform: translateX(${p => (p.active === 0 ? 0 : p.active * 100)}%);
    ${transition};
`;

const Button = styled.button`
    position: relative;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid ${rgba('white', 0.25)};
    ${props =>
        props.borderTop
            ? css`
                  border-top-left-radius: 10px;
              `
            : css`
                  border-top-right-radius: 10px;
              `}
    color: ${p => rgba('white', p.active ? 1 : 0.25)};
    font-size: 20px;
    background: #5b6f7c;
    height: 2em;
    width: 100%;
    opacity: 0.8;
    backdrop-filter: blur(20px);
    @media (max-width: 768px) {
        display: ${props => (props.hide ? 'none' : null)};
    }
`;

const Content = styled.div`
    height: 90%;
    display: flex;
    justify-content: space-between;
    transform: translate(${p => (p.active === 0 ? 0 : `-${p.active * 820}px`)});
    ${transition};
`;

const Tab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 780px;
    margin: 2em 2em 0 2em;
    @media (max-width: 768px) {
        display: ${props => (props.hide ? 'none' : null)};
    }
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    border-radius: 20px;
    height: 90vh;
    margin: 0 auto;
`;

const tabs = ['volumes', 'tickers'];

const ExchangeVolume = ({
    getExchangeVolume,
    getExchangeById,
    exchangeVolumes: { exchangeVolumeLoad, params },
    exchanges: { exchanges }
}) => {
    const [param, setParam] = useState('gdax');

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getExchangeVolume(param);
            getExchanges();
            getExchangeById(param);
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

    const [active, setActive] = useState(0);

    const Tabs = ({ active, setActive }) => (
        <Row>
            <Underline active={active} />
            <div style={{ display: 'flex' }}>
                <Button
                    active={active === 0}
                    onClick={() => setActive(0)}
                    hide={true}
                    borderTop={true}
                >
                    {tabs[0]}
                </Button>
                <Button
                    active={active === 1}
                    onClick={() => setActive(1)}
                    hide={true}
                >
                    {tabs[1]}
                </Button>
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
                                <TickerTable param={param} />
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
    getExchangeById: PropTypes.func.isRequired,
    exchangeVolumeLoad: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    getExchanges: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    exchangeVolumes: state.exchangeVolumes,
    exchanges: state.exchanges
});
export default connect(mapStateToProps, {
    getExchanges,
    getExchangeVolume,
    getExchangeById
})(withRouter(ExchangeVolume));
