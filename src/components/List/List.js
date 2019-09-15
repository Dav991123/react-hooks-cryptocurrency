import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Table from './Table';

const List = (props) => {
    const [loading, setSloading] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [error, setError]= useState('');
    
    const fetchCurrencies = async () => {
        setSloading(true)
        try {
            const response = await fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`);
            if(response.ok) {
                const data = await response.json();
                setSloading(false);
                setCurrencies(data.currencies);
            }else {
                const error = await response.json();
                throw new Error(error.errorMessage);
            }

        }catch(error) {
            setSloading(false);
            setError('Currency with given id not found.')
        }
    }
    useEffect(() => {
        fetchCurrencies();
    },[]);

        if(loading) {
            return <div>Loading ..</div>
        }
        if(error) {
            return <div className="error">{error}</div>
        }

    return (
        <div>
            <Table currencies={currencies}/>
        </div>
    )
}
export default List;