import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PaymentSetting from "../table-list/PaymentSetting"

const PaymentSettingPage = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <PaymentSetting/>
      </div>
    </div>
  )
}

export default PaymentSettingPage