import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import User from "./User";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [error, setError] = useState("");

  // Fetch data from the server on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch data. Please check the server.");
      });

    // Check if user is already logged in
    const storedIsAdmin = localStorage.getItem("isAdmin");
    if (storedIsAdmin) {
      setIsAdmin(JSON.parse(storedIsAdmin));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data) {
      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setIsAdmin(user.isadmin);
        localStorage.setItem("isAdmin", JSON.stringify(user.isadmin));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Data not loaded. Please try again later.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(null);
    setEmail("");
    setPassword("");
  };

  if (isAdmin === true) {
    return (
      <div>
        <Admin />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else if (isAdmin === false) {
    return (
      <div>
        <User />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
