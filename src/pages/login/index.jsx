import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../style";
import { Style, Box } from "./style";

function Login({ user, setUser }) {
  const navigate = useNavigate();

  function submit() {
    if (user.name && user.lastname) {
      navigate("/");
    }
  }

  return (
    <Style>
      <Box>
        <h2>Login</h2>
        <Input
          placeholder="Ism"
          value={user.name}
          onChange={(e) => setUser((p) => ({ ...p, name: e.target.value }))}
        />
        <Input
          placeholder="Familiya"
          value={user.lastname}
          onChange={(e) => setUser((p) => ({ ...p, lastname: e.target.value }))}
        />
        <Button onClick={submit}>Kirish</Button>
      </Box>
    </Style>
  );
}

export default Login;
