import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          // Handle non-200 status codes
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          setError(error.message);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Abort the ongoing request if the component unmounts or if a new request is made
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
