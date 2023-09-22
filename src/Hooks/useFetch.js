import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((error) => setError(error.message));
  }, []);

  //   expose for global use
  return { allData, error };
};

export default useFetch;
