import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
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
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/buildings" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Buildings</span>
            </li>
          </Link>
          <Link to="/apartments" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Apartments</span>
            </li>
          </Link>
          {/* RENTER */}
          <p className="title">RENTER</p>
          <Link to="/contracts" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
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
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Thu/ chi</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Phiếu thu</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Phiếu chi</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Cài đặt hóa đơn thu</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Cài đặt hóa đơn chi</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Hóa đơn</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Thống kê kinh doanh</span>
          </li>
          <p className="title">ĐIỆN NƯỚC</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Danh sách chốt điện nước</span>
          </li>
          <p className="title">BÁO CÁO</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Tổng hợp hiện trạng thuê</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
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
