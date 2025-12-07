// import React, { useState } from "react";

// export default function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "roshani" && password === "roshani") {
//       setLoggedIn(true);
//     } else {
//       alert("Wrong username or password!");
//     }
//   };

//   if (loggedIn) {
//     return (
//       <div style={styles.contentPage}>
//         <h1>Welcome Roshani ❤️</h1>
//         <p>This is the top content you wanted after login.</p>

//         <div style={styles.navBox}>
//           <button style={styles.button}>About Her</button>
//           <button style={styles.button}>Wishes</button>
//           <button style={styles.button}>My Thinking About Her</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2>Login</h2>

//         <input
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           placeholder="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />

//         <button onClick={handleLogin} style={styles.loginBtn}>Login</button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
//   },
//   card: {
//     width: "90%",
//     maxWidth: "350px",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "15px",
//     boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     margin: "10px 0",
//     padding: "10px",
//     borderRadius: "10px",
//     border: "1px solid #ddd",
//   },
//   loginBtn: {
//     width: "100%",
//     padding: "10px",
//     background: "#ff4081",
//     color: "white",
//     border: "none",
//     borderRadius: "10px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   contentPage: {
//     padding: "20px",
//     textAlign: "center",
//   },
//   navBox: {
//     marginTop: "20px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   button: {
//     padding: "10px",
//     background: "#ff4d94",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "16px",
//   },
// };



import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "roshani" && password === "roshani") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <>
      {loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </>
  );
}
