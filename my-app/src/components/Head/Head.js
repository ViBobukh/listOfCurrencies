import React from 'react';
import PropTypes from "prop-types";

import './Head.css';

function Head({date}) {
    return (
        <header>
            <h1>
                List Of Currencies
            </h1>
            <h2>
                {date.toDateString()}
            </h2>
        </header>
    )
}

Head.propTypes = {
    date: PropTypes.object
}

export default Head;