import React, { useEffect } from "react";

function GetData() {
  // using state management, manage
  // error, loading and success states

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/2"
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // call the fetch data function when the
  // page loads

  // Here is the basic data boilerplate
  return (
    <>
      {/* do not edit the code below this line */}
      {loading && <h2>Loading...</h2>}
      {error && <h2>unable to fetch the details</h2>}
      {!loading && !error && (
        <>
          <h2>Name: {data.name}</h2>
          <h2>Email: {data.email}</h2>
          <h2>Username: {data.username}</h2>
        </>
      )}
    </>
  );
}

export default GetData;
