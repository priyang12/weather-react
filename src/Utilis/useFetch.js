import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, header) => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url !== '') {
          setloading(true);
          if (header) {
            const { data } = await axios.get(`${url}`, {
              headers: {
                'X-CSCAPI-KEY': `${process.env.REACT_APP_CountryAPIkey}`,
              },
            });
            setdata(data);
          } else {
            const { data } = await axios.get(url);
            setdata(data);
          }
          console.log('API CALL');
          seterror(null);
          setTimeout(() => {
            setloading(false);
          }, 1000);
        }
      } catch (error) {
        seterror(error.response?.data);
        setdata(null);
        setloading(false);
      }
    };
    fetchData();
  }, [url, header]);

  return { loading, data, error };
};
