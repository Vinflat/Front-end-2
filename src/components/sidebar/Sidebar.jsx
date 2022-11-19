import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
// import HomeOutlinedIcno from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
// import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon className="icon" />
              <span>Trang chủ</span>
            </li>
          </Link>
          {/* TÀI CHÍNH */}
          <p className="title">TÀI CHÍNH</p>
          <Link to="/receipts&payments" style={{ textDecoration: "none" }}>
            <li>
              <AddCardOutlinedIcon className="icon" />
              <span>Thu /chi</span>
            </li>
          </Link>

          <Link to="/bills" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongOutlinedIcon className="icon" />
              <span>Phiếu Thu</span>
            </li>
          </Link>

          <Link to="/bills" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongOutlinedIcon className="icon" />
              <span>Phiếu Chi</span>
            </li>
          </Link>

          <Link to="/bills" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongOutlinedIcon className="icon" />
              <span>Cài Đặt Phiếu Thu</span>
            </li>
          </Link>

          <Link to="/bills" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongOutlinedIcon className="icon" />
              <span>Cài Đặt Phiếu Chi</span>
            </li>
          </Link>

          <Link to="/businessStatistics" style={{ textDecoration: "none" }}>
            <li>
              <LeaderboardOutlinedIcon className="icon" />
              <span>Thống kê kinh doanh</span>
            </li>
          </Link>
          {/* RENTER */}
          <p className="title">KHÁCH THUÊ</p>
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

          {/* LIST */}
          <p className="title">DANH SÁCH</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxOutlinedIcon className="icon" />
              <span>Tài Khoản</span>
            </li>
          </Link>
          <Link to="/buildings" style={{ textDecoration: "none" }}>
            <li>
              <ApartmentOutlinedIcon className="icon" />
              <span>Tòa Nhà</span>
            </li>
          </Link>
          {/* <Link to="/apartments" style={{ textDecoration: "none" }}>
            <li>
              <HomeOutlinedIcno className="icon" />
              <span>Apartments</span>
            </li>
          </Link> */}
          <Link to="/flats" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomOutlinedIcon className="icon" />
              <span>Phòng</span>
            </li>
          </Link>

          <p className="title">ĐIỆN NƯỚC</p>
          <Link
            to="/electrictandwaterreport"
            style={{ textDecoration: "none" }}
          >
            <li>
              <FactCheckOutlinedIcon className="icon" />
              <span>Danh sách báo cáo điện nước</span>
            </li>
          </Link>
          <p className="title">BÁO CÁO</p>
          <li>
            <SummarizeOutlinedIcon className="icon" />
            <span>Báo cáo tổng hợp hiện trạng thuê</span>
          </li>

          <li>
            <DynamicFormOutlinedIcon className="icon" />
            <span>Báo cáo sử dụng điện nước</span>
          </li>

          <p className="title">CÀI ĐẶT</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Hồ Sơ</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
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
