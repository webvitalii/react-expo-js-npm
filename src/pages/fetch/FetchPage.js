import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

function FetchPage() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const [fetchData, setFetchData] = useState([]);
  const [fetchIsLoading, setFetchIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [axiosData, setAxiosData] = useState([]);
  const [axiosIsLoading, setAxiosIsLoading] = useState(true);
  const [axiosError, setAxiosError] = useState(null);

  const {
    data: customData,
    isLoading: customIsLoading,
    error: customError,
  } = useFetch(apiUrl);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          setFetchIsLoading(false);
          setFetchData(Array.isArray(data) ? data : []);
        },
        (error) => {
          setFetchIsLoading(false);
          setFetchError(error);
        }
      );

    axios.get(apiUrl).then(
      (data) => {
        setAxiosIsLoading(false);
        setAxiosData(Array.isArray(data.data) ? data.data : []);
      },
      (error) => {
        setAxiosIsLoading(false);
        setAxiosError(error);
      }
    );
  }, [apiUrl]);

  const dataRender = (userList, isLoading, error) => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {userList?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <section className="user-list-page">
      <h3>User list page</h3>

      <h3 className="fx-h3">fetch:</h3>
      {dataRender(fetchData, fetchIsLoading, fetchError)}

      <h3 className="fx-h3">axios:</h3>
      {dataRender(axiosData, axiosIsLoading, axiosError)}

      <h3 className="fx-h3">useFetch custom hook:</h3>
      {dataRender(customData, customIsLoading, customError)}
    </section>
  );
}

export default FetchPage;
