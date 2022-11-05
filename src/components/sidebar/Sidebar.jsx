import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HomeOutlinedIcno from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Link } from "react-router-dom";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Vinflat</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* LIST */}
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/buildings" style={{ textDecoration: "none" }}>
            <li>
              <ApartmentOutlinedIcon className="icon" />
              <span>Buildings</span>
            </li>
          </Link>
          <Link to="/apartments" style={{ textDecoration: "none" }}>
            <li>
              <HomeOutlinedIcno className="icon" />
              <span>Apartments</span>
            </li>
          </Link>
          {/* RENTER */}
          <p className="title">RENTER</p>
          <Link to="/contracts" style={{ textDecoration: "none" }}>
            <li>
              <ArticleOutlinedIcon className="icon" />
              <span>Danh sách hợp đồng</span>
            </li>
          </Link>
          <Link to="/renters" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Danh sách khách thuê</span>
            </li>
          </Link>
          {/* TÀI CHÍNH */}
          <p className="title">TÀI CHÍNH</p>
          <li>
            <AddCardOutlinedIcon className="icon" />
            <span>Thu/ chi</span>
          </li>
          <li>
            <NoteAltOutlinedIcon className="icon" />
            <span>Phiếu thu</span>
          </li>
          <li>
            <NoteAltOutlinedIcon className="icon" />
            <span>Phiếu chi</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Cài đặt hóa đơn thu</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Cài đặt hóa đơn chi</span>
          </li>
          <li>
            <ReceiptLongOutlinedIcon className="icon" />
            <span>Hóa đơn</span>
          </li>
          <li>
            <LeaderboardOutlinedIcon className="icon" />
            <span>Thống kê kinh doanh</span>
          </li>
          <p className="title">ĐIỆN NƯỚC</p>
          <li>
            <FactCheckOutlinedIcon className="icon" />
            <span>Danh sách chốt điện nước</span>
          </li>
          <p className="title">BÁO CÁO</p>
          <li>
            <SummarizeOutlinedIcon className="icon" />
            <span>Tổng hợp hiện trạng thuê</span>
          </li>
          <li>
            <DynamicFormOutlinedIcon className="icon" />
            <span>Báo cáo sử dụng điện nước</span>
          </li>
          <p className="title">CÀI ĐẶT CHUNG</p>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
