import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url: any, header: any) => {
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
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
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

export const useToggle = (initialState: any) => {
  const [Toggle, setToggle] = useState(initialState);
  const ToggleState = () => {
    setToggle((cu: any) => !cu);
  };
  return { Toggle, ToggleState };
};
