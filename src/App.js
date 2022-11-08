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


function App() {
  const [token, setToken] = useState();
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
          </Route>
        </Routes>
      </BrowserRouter>

  );
}
export default App;
