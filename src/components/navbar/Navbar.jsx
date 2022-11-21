import "./navbar.scss";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Logout } from "../../services/AuthService";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);
  const hadleAvatarClick = (event) =>{
    setIsOpenAccountMenu(event.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setIsOpenAccountMenu(null);
  }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}

          {/* <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div> */}
          {/* <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div> */}
          {/* <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div> */}
          {/* <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <img
              onClick={hadleAvatarClick}
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            </div>
            <Menu
              id="menu-appbar"
              anchorEl={isOpenAccountMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(isOpenAccountMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={'log-out'} onClick={Logout}>
                <Typography textAlign="center">Đăng xuất</Typography>
              </MenuItem>
            </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
