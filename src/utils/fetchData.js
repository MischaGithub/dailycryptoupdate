/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from 'react';

const fetchData = (param) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const baseURL = 'https://api.coingecko.com/api/v3';

  const fetchCoinData = async (param) => {
    try {
      setLoading(true);
      const res = await fetch(`${baseURL}/${param}`);
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchCoinData(param);
      window.scrollTo(0, 0);
    }

    return () => (mounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, loading, error };
};

export default fetchData;
