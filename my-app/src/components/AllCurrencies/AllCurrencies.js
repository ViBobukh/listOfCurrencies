import React from "react";
import PropTypes from 'prop-types';

import Currencies from "./Currencies";
import './AllCurrencies.css';

function AllCurrencies({allRates}) {
    return (
        <>
            <div className="caption">
                <h3>Type of currency</h3>
                <h3>Course</h3>
            </div>
            <Currencies allRates={allRates}/>
        </>
    )
}

AllCurrencies.propTypes = {
    allRates: PropTypes.object
}

export default AllCurrencies;