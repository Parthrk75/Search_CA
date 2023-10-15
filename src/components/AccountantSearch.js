// components/AccountantSearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccountantSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      // Fetch accountants based on the search term
      setIsLoading(true);
      axios.get(`http://localhost:3001/accountants?q=${searchTerm}`)
        .then(response => {
          setSearchResults(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching accountants:', error);
          setIsLoading(false);
        });
    } else {
      // Clear the results if the search term is empty
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Chartered Accountants"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      <ul>
        {searchResults.map(accountant => (
          <li key={accountant.id}>{accountant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AccountantSearch;
