import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
//dashboard
import Home from "./pages/home/Home";
//auth
import Login from "./pages/login/Login";
// finance
import MoneyPage from "./pages/list/MoneyPage";
import IncomePage from "./pages/list/IncomePage";
import OutcomePage from "./pages/list/OutcomePage";
import SettingSpendPage from "./pages/list/SettingSpendPage";
import SettingCollectPage from "./pages/list/SettingCollectPage";
import StatisticsPage from "./pages/list/StatisticsPage";
//renter
import ContractList from "./pages/list/ContractList";
import RenterList from "./pages/list/RenterList";
import { useToken } from "./services/AuthService";
//list
import List from "./pages/list/List";
import BuildingList from "./pages/list/BuildingList";
import FlatList from "./pages/list/FlatList";
//ew
import ElectrictandWaterList from "./pages/list/ElectrictandWaterList";
//report
import ReportRentStatus from "./pages/list/ReportRentStatus";
import ReportEWPage from "./pages/list/ReportEWPage";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          {/* finance */}
          <Route path="money">
            <Route index element={<MoneyPage />} />
          </Route>
          <Route path="money/income">
            <Route index element={<IncomePage />} />
          </Route>
          <Route path="money/outcome">
            <Route index element={<OutcomePage />} />
          </Route>
          <Route path="money/setting-spend">
            <Route index element={<SettingSpendPage />} />
          </Route>
          <Route path="money/setting-collect">
            <Route index element={<SettingCollectPage />} />
          </Route>
          <Route path="money/statistics">
            <Route index element={<StatisticsPage />} />
          </Route>

          {/* renter */}
          <Route path="contract/list">
            <Route index element={<ContractList />} />
          </Route>
          <Route path="renter/list">
            <Route index element={<RenterList />} />
          </Route>

          {/* list */}
          <Route path="users">
            <Route index element={<List />} />
          </Route>
          <Route path="building/list">
            <Route index element={<BuildingList />} />
          </Route>
          <Route path="flat/list">
            <Route index element={<FlatList />} />
          </Route>

          {/* ELECTRICAL & WATER */}
          <Route path="ew">
            <Route index element={<ElectrictandWaterList />} />
          </Route>

          {/* Report */}
          <Route path="report/rent-status">
            <Route index element={<ReportRentStatus />} />
          </Route>
          <Route path="report/ew">
            <Route index element={<ReportEWPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
