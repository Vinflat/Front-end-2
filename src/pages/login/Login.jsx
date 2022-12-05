import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

import "./login.scss";

async function loginUser(credentials) {
  return fetch(
    "https://webapp-133769420727.azurewebsites.net/api/auth/management/v1/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());
}

const Img = styled("img")({
  margin: "auto",
  display: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  //const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  return (
    <div className="login">
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elelvation={2} sx={{ padding: 5 }}>
            <Grid item>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar sx={{ width: 150, height: 150 }}>
                  <Img alt="complex" src="https://iili.io/HCM6oy7.png" />
                </Avatar>
              </Box>
            </Grid>

            <form onSubmit={handleLogin}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="text"
                    fullWidth
                    label="Tên tài khoản"
                    placeholder="Nhập tên tài khoản"
                    variant="outlined"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Mật khẩu"
                    placeholder="********"
                    variant="outlined"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePassVisibilty}
                            aria-label="toggle password"
                            edge="end"
                          >
                            {values.showPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item>
                  <Button
                    className="login"
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                    Đăng nhập
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
    // <div className="login">
    //   <form onSubmit={handleLogin}>
    //     <label>Username</label>
    //     <input
    //       type="text"
    //       placeholder="Enter your username"
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       placeholder="Enter your password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
