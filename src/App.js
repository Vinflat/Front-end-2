import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
// import ApartmentList from "./pages/list/ApartmentList";
import BuildingList from "./pages/list/BuildingList";
import RenterList from "./pages/list/RenterList";
import ContractList from "./pages/list/ContractList";
import FlatList from "./pages/list/FlatList";
import ReceiptsandPaymentsList from "./pages/list/ReceiptsandPaymentsList";
import ElectrictandWaterReportList from "./pages/list/ElectrictandWaterReportList";
import BusinessStatistics from "./pages/list/BusinessStatistics";
import ReceiptBillList from "./pages/list/ReceiptBillList";
import PaymentBillList from "./pages/list/PaymentBillList";
import BillListPage from "./pages/list/BillListPage";
import PaymentSettingPage from "./pages/list/PaymentSettingPage";
import ReceiptSettingPage from "./pages/list/ReceiptSettingPage";
import { useToken } from "./services/AuthService";

function App() {
  const {token, setToken} = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          {/* <Route path="apartments">
              <Route index element={<ApartmentList />} />
              <Route path=":productId" element={<Single />} />
            </Route> */}
          <Route path="buildings">
            <Route index element={<BuildingList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="flats">
            <Route index element={<FlatList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="renters">
            <Route index element={<RenterList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="contracts">
            <Route index element={<ContractList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="receipts&payments">
            <Route index element={<ReceiptsandPaymentsList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="electrict&waterreport">
            <Route index element={<ElectrictandWaterReportList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="businessStatistics">
            <Route index element={<BusinessStatistics />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="receiptbill">
            <Route index element={<ReceiptBillList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="paymentbill">
            <Route index element={<PaymentBillList />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="bills">
            <Route index element={<BillListPage />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="paymentsetting">
            <Route index element={<PaymentSettingPage />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="receiptsetting">
            <Route index element={<ReceiptSettingPage />} />
            <Route path=":productId" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
