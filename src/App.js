import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import AccountantList from './components/AccountantList';

function App() {
  const [accountants, setAccountants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch accountants based on the search term
  const searchAccountants = (term) => {
    setLoading(true);
    setSearchTerm(term);
    if (term) {
      axios
        .get(`http://localhost:3001/accountants?q=${term}`)
        .then((response) => {
          setAccountants(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching accountants:', error);
          setLoading(false);
        });
    } else {
      // Clear the results when the search term is empty
      setAccountants([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    searchAccountants('');
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-semibold text-center">Chartered Accountants</h1>
      <SearchBar onSearch={searchAccountants} />
      {searchTerm && !loading && <AccountantList accountants={accountants} />}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
