import "./navbar.scss";
import * as React from "react";
import { Logout } from "../../services/AuthService";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NavbarMenu from "../menu/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#004AAD",
            }}
          >
            Vinflat
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              component={Link}
              to="/"
              sx={{
                my: 2,
                display: "block",
                color: "#888",
                fontFamily: "Nunito",
                textDecoration: "none",
              }}
            >
              Trang ch???
            </Button>
            <NavbarMenu
              title="T??i ch??nh"
              items={[
                { name: "Thu /chi", link: "/money" },
                { name: "Phi???u thu", link: "/money/income" },
                { name: "Phi???u chi", link: "/money/outcome" },
                // { name: "C??i ?????t phi???u thu", link: "/money/setting-collect" },
                // { name: "C??i ?????t phi???u chi", link: "/money/setting-spend" },
                { name: "Th???ng k?? kinh doanh", link: "/money/statistics" },
              ]}
            />
            <NavbarMenu
              title="Kh??ch thu??"
              items={[
                { name: "Danh s??ch h???p ?????ng", link: "/contract/list" },
                { name: "Danh s??ch kh??ch thu??", link: "/renter/list" },
              ]}
            />
            <NavbarMenu
              title="Danh s??ch"
              items={[
                { name: "T??i kho???n", link: "/users" },
                { name: "Danh s??ch t??a nh??", link: "/building/list" },
                { name: "Ph??ng", link: "/flat/list" },
              ]}
            />
            <NavbarMenu
              title="??i???n n?????c"
              items={[{ name: "Danh s??ch ch???t ??i???n n?????c", link: "/ew" }]}
            />
            <NavbarMenu
              title="B??o c??o"
              items={[
                { name: "B??o c??o t???ng h???p hi???n tr???ng thu??", link: "/report/rent-status" },
                { name: "B??o c??o s??? d???ng ??i???n n?????c", link: "/report/ew" },
              ]}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="C??i ?????t">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <AccountCircleOutlinedIcon className="icon" />
                <Typography textAlign="center" sx={{ ml: 1 }}>
                  H??? s??
                </Typography>
              </MenuItem>
              <MenuItem onClick={Logout}>
                <ExitToAppIcon className="icon" />
                <Typography textAlign="center" sx={{ ml: 1 }}>
                  ????ng xu???t
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
