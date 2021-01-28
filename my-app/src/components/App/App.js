import React, {useEffect, useState} from 'react';

import {simulateDataLoading} from "../../lib/loadData";
import Head from "../Head/Head";
import AllCurrencies from "../AllCurrencies/AllCurrencies";
import Loader from "../Loader/Loader";
import {CONST} from "../../lib/constantes";
import './App.css';

function App () {
    const [status, setStatus] = useState('pending');
    const [data, setData] = useState({
        timestamp: new Date(),
        rates: {}
    });

    useEffect(()=>{
        simulateDataLoading(2000).then((json) => {
            setData({
                ...json,
                timestamp: new Date(json.timestamp * 1000)
            })
            setStatus(CONST.LOADED)
        })
    }, []);

    return (
        <>
            {status === CONST.PENDING ? <Loader/> : null}
            <div className='body'>
                <Head
                    date={data.timestamp}
                ><title>List Of Currencies</title></Head>
                <AllCurrencies
                    allRates={data.rates}
                />
            </div>
        </>
    )
}

export default App;