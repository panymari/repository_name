import { useState, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const getData = useCallback(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setIsError(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  }, [url]);
  return { isLoading, isError, data, getData };
};
export default useFetch;
