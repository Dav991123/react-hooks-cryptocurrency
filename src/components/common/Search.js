import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../config';
import './Search.css';
const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = async (e) => {
        const searchQuery = e.target.value;
        setSearchQuery(searchQuery);
        setLoading(true);
        if(!searchQuery) {
            return false;
        }
        try {
            const response = await fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`);
            const data = await response.json();
            setLoading(false);
            setSearchResults(data);
        }catch(error) {

        }
    }
   
    const handleRedirect = (currencyId) => {
        setSearchQuery('');
        setSearchResults([]);
        console.log(currencyId);
        props.history.push(`/currency/${currencyId}`)

    }
    const renderSearchResults = () => {
        if(!searchQuery) {
            return ''
        }
        if(searchResults.length > 0) {
            return (
                <div className="Search-result-container">
                    {
                       searchResults.map(result => (
                           <div
                            key={result.id}
                            className="Search-result"
                            onClick={() => handleRedirect(result.id)}
                           >
                                {result.name} ({result.symbol})
                            </div>
                       )) 
                    }
                </div>
            )
        }
           
       return (
           <div className="Search-result-container">
                <div className="Search-no-result">
                    No results found.
                </div>
           </div>
       )
      
    }
    return (
        <div className="Search">
            <div>
                <span className="Search-icon" />
                <input 
                    type="text"
                    placeholder="Currency name"
                    className="Search-input"
                    onChange={handleChange}
                    value={searchQuery}
                />
            </div>
            {renderSearchResults()}
        </div>
    )
}
export default withRouter(Search);