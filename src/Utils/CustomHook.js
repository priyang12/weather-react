import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, header) => {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url !== "") {
          setLoading(true);
          if (header) {
            const { data } = await axios.get(`${url}`, {
              headers: {
                "X-CSCAPI-KEY": `${process.env.REACT_APP_CountryAPIkey}`,
              },
            });
            setData(data);
          } else {
            const { data } = await axios.get(url);
            setData(data);
          }

          setError(null);
        }
      } catch (Error) {
        const ErrMessage = "Server Error";
        setError(Error.Response?.Data.message || ErrMessage);
        setData(null);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };
    fetchData();
  }, [url, header]);

  return { Loading, Data, Error };
};

export const useToggle = (initialState) => {
  const [Toggle, setToggle] = useState(initialState);
  const ToggleState = () => {
    setToggle((cu) => !cu);
  };
  return { Toggle, ToggleState };
};
