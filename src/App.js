import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch data from the Express server
    fetch("http://localhost:5000/api/names")
      .then((response) => response.json())
      .then((data) => {
        setNames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div id="container">
      {names.map((name, index) => (
        <h1 key={index} id={`class${index + 1}`}>
          {name.charAt(0).toUpperCase()}
        </h1>
      ))}
    </div>
  );
}
export default App;
