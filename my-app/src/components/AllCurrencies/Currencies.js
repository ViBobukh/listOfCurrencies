import React from "react";
import PropTypes from "prop-types";
import getSymbolFromCurrency from 'currency-symbol-map';

import './AllCurrencies.css';

function Currencies({allRates}) {
    let currencies = Object.entries(allRates).map(([key, value]) => {
        let symbolCurrency = getSymbolFromCurrency(key);
        return (
            <div key={key} className='listOfCurrencies'>
                <p>{key}</p>
                <p>{`${symbolCurrency ? symbolCurrency : " "} ${value}`}</p>
            </div>
        )
    });
    return (
        <>
            {currencies}
        </>
    )
}

Currencies.propTypes = {
    allRates: PropTypes.object
}

export default Currencies;