import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGlobalData } from '../actions/globalData';
import { Spinner } from './Spinner';

const GlobalData = ({
    getGlobalData,
    globalData: { globalDataLoad, loading }
}) => {
    useEffect(() => {
        getGlobalData();
    }, []);

    console.log('globalDataLoad in component: ', globalDataLoad);

    return <>{loading ? <Spinner /> : <p>test</p>}</>;
};

GlobalData.propTypes = {
    getGlobaldata: PropTypes.func.isRequired,
    globalDataLoad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    globalData: state.globalData
});
export default connect(mapStateToProps, { getGlobalData })(
    withRouter(GlobalData)
);
