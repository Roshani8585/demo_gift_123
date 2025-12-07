import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: 20 }}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={submit} style={styles.button}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 350,
    background: "white",
    padding: 25,
    borderRadius: 15,
    textAlign: "center",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)"
  },
  input: {
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    borderRadius: 10,
    border: "1px solid #ddd"
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#ff4d94",
    color: "white",
    borderRadius: 10,
    fontSize: 16,
    cursor: "pointer",
    border: "none"
  }
};
