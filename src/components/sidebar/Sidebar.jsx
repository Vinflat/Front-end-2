import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
// import HomeOutlinedIcno from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
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
              <span>Dashboard</span>
            </li>
          </Link>
          {/* TÀI CHÍNH */}
          <p className="title">TÀI CHÍNH</p>
          <Link to="/receipts&payments" style={{ textDecoration: "none" }}>
            <li>
              <AddCardOutlinedIcon className="icon" />
              <span>Receipts/ payments</span>
            </li>
          </Link>
          <Link to="/receiptbill" style={{ textDecoration: "none" }}>
          <li>
            <NoteAltOutlinedIcon className="icon" />
            <span>Receipt Bill</span>
          </li>
          </Link>
          <Link to="/paymentbill" style={{ textDecoration: "none" }}>
          <li>
            <NoteAltOutlinedIcon className="icon" />
            <span>Payment Bill</span>
          </li>
          </Link>
          <Link to="/receiptsetting" style={{ textDecoration: "none" }}>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Receipt Setting </span>
          </li>
          </Link>
          <Link to="/paymentsetting" style={{ textDecoration: "none" }}>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Payment Setting </span>
          </li>
          </Link>
          <Link to="/bills" style={{ textDecoration: "none" }}>
          <li>
            <ReceiptLongOutlinedIcon className="icon" />
            <span>Bill</span>
          </li>
          </Link>
          
          <Link to="/businessStatistics" style={{ textDecoration: "none" }}>
          <li>
            <LeaderboardOutlinedIcon className="icon" />
            <span>Business statistics</span>
          </li>
          </Link>
          {/* RENTER */}
          <p className="title">RENTER</p>
          <Link to="/contracts" style={{ textDecoration: "none" }}>
            <li>
              <ArticleOutlinedIcon className="icon" />
              <span>Contract List</span>
            </li>
          </Link>
          <Link to="/renters" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>List of renters</span>
            </li>
          </Link>

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
          {/* <Link to="/apartments" style={{ textDecoration: "none" }}>
            <li>
              <HomeOutlinedIcno className="icon" />
              <span>Apartments</span>
            </li>
          </Link> */}
          <Link to="/flats" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomOutlinedIcon className="icon" />
              <span>Flats</span>
            </li>
          </Link>

          <p className="title">ELECTRICAL & WATER</p>
          <Link to="/electrict&waterreport" style={{ textDecoration: "none" }}>
            <li>
              <FactCheckOutlinedIcon className="icon" />
              <span>List of electricity and water reports</span>
            </li>
          </Link>
          <p className="title">BÁO CÁO</p>
          <li>
            <SummarizeOutlinedIcon className="icon" />
            <span>Summary of rental status</span>
          </li>

          <li>
            <DynamicFormOutlinedIcon className="icon" />
            <span>Electricity and water usage report</span>
          </li>

          <p className="title">GENERAL SETTINGS</p>
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
