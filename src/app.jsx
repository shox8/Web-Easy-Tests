import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Tests from "./pages/tests";
import { Web } from "./style";

function App() {
  const [user, setUser] = useState({});
  return (
    <Web>
      <Routes>
        <Route path="/" element={<Tests user={user} />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </Web>
  );
}

export default App;
