import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';
const Loading = ({width, height}) => {
    return (
        <div
            className="Loading" 
            style={{width, height}}
        />
    )
}
Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
}
Loading.defaultProps = {
    width: '53px',
    height: '53px'
}
export default Loading;