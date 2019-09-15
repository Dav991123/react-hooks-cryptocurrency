import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';

const List = (props) => {
    const { history } = props;
    console.log(props.match.params)
    const [loading, setSloading] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(
        props.match.params.id ? +props.match.params.id : 1
    );
    const [error, setError]= useState('');
    
    const fetchCurrencies = async () => {
        setSloading(true)
        try {
            const response = await fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`);
            if(response.ok) {
                const data = await response.json();
                setSloading(false);
                setCurrencies(data.currencies);
                setTotalPages(data.totalPages)
                
            }else {
                const error = await response.json();
                throw new Error(error.errorMessage);
            }

        }catch(error) {
            setSloading(false);
            setError('Currency with given id not found.')
        }
    }
    
    const handlePaginationClick = (direction) => {
        let nextPage = page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
        setPage(nextPage);
    }

    useEffect(() => {
        fetchCurrencies();
        history.push(`/page/${page}`)
    },[page]); //i love you hooks tanks react js ))

    if(loading) {
        return <div className="loading-container"><Loading /></div>
    }
    if(error) {
        return <div className="error">{error}</div>
    }

    return (
        <div>
            <Table currencies={currencies}/>
            <Pagination 
                page={page}
                totalPages={totalPages}
                handlePaginationClick={handlePaginationClick}
            />
        </div>
    )
}
export default List;