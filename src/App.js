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
import jwt_decode from "jwt-decode";

function App() {
  const [token, setToken] = useState();
  // const [username, setUsername] = useState('');
  // const [role, setRole] = useState('');

    const setUser= (tokenString)=>{
    localStorage.setItem("token", tokenString)
    setToken(tokenString)
    const decoded= jwt_decode(tokenString)
    console.log('decoded jwt', JSON.stringify(decoded, null, 2))
    const role=decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    const email =decoded[ "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
    const username =decoded[ "http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor"]
    alert(`Role:${role}\n Username: ${username}\nEmail: ${email}} `)
    //return({role: role, email: email, username: username})
  }
  // Để dễ test flow login do chưa có logout, comment lại khi có logout, logout nhớ localStorage.removeItem('token')
  localStorage.removeItem('token')
  
  const storedToken=localStorage.getItem('token')
  if(storedToken&&storedToken.length>0){
    //Todo: 
    // có thể setState cho token
    // setToken(localToken)
  }
  if (!token || token.length==0) {
    return <Login setToken={setUser} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login setToken={setUser}/>} />
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
