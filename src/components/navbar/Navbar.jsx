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
              Trang chủ
            </Button>
            <NavbarMenu
              title="Tài chính"
              items={[
                { name: "Thu /chi", link: "/money" },
                { name: "Phiếu thu", link: "/money/income" },
                { name: "Phiếu chi", link: "/money/outcome" },
                // { name: "Cài đặt phiếu thu", link: "/money/setting-collect" },
                // { name: "Cài đặt phiếu chi", link: "/money/setting-spend" },
                { name: "Thống kê kinh doanh", link: "/money/statistics" },
              ]}
            />
            <NavbarMenu
              title="Khách thuê"
              items={[
                { name: "Danh sách hợp đồng", link: "/contract/list" },
                { name: "Danh sách khách thuê", link: "/renter/list" },
              ]}
            />
            <NavbarMenu
              title="Danh sách"
              items={[
                { name: "Tài khoản", link: "/users" },
                { name: "Danh sách tòa nhà", link: "/building/list" },
                { name: "Phòng", link: "/flat/list" },
              ]}
            />
            <NavbarMenu
              title="Điện nước"
              items={[{ name: "Danh sách chốt điện nước", link: "/ew" }]}
            />
            <NavbarMenu
              title="Báo cáo"
              items={[
                { name: "Báo cáo tổng hợp hiện trạng thuê", link: "/report/rent-status" },
                { name: "Báo cáo sử dụng điện nước", link: "/report/ew" },
              ]}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cài đặt">
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
                  Hồ sơ
                </Typography>
              </MenuItem>
              <MenuItem onClick={Logout}>
                <ExitToAppIcon className="icon" />
                <Typography textAlign="center" sx={{ ml: 1 }}>
                  Đăng xuất
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
