import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getExchangeVolume } from '../actions/exchangeVolume';
import Chart_Component2 from './Chart_Component2';

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

const ExchangeVolume = ({
    getExchangeVolume,
    exchangeVolumes: { exchangeVolumeLoad, params }
}) => {
    useEffect(() => {
        getExchangeVolume(params);
    }, [getExchangeVolume]);

    console.log('exchangeVolumeLoad: ', exchangeVolumeLoad);

    return (
        <Panel>
            <div>
                <Wrapper>
                    <div
                        style={{
                            padding: '2em',
                            borderRadius: '20px'
                        }}
                    >
                        <div style={{ display: 'block' }}>
                            <Chart_Component2
                                values={exchangeVolumeLoad[0]}
                                dates={exchangeVolumeLoad[1]}
                                params={params.id}
                            />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </Panel>
    );
};

ExchangeVolume.propTypes = {
    getExchangeVolume: PropTypes.func.isRequired,
    exchangeVolumeLoad: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    exchangeVolumes: state.exchangeVolumes
});
export default connect(mapStateToProps, { getExchangeVolume })(
    withRouter(ExchangeVolume)
);
