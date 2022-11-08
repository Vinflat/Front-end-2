import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ReceiptSetting from "../table-list/ReceiptSetting"

const ReceiptSettingPage = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <ReceiptSetting/>
      </div>
    </div>
  )
}

export default ReceiptSettingPage