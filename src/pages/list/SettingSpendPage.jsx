import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SettingSpend from "../table-list/SettingSpend"

const SettingSpendPage = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <SettingSpend/>
      </div>
    </div>
  )
}

export default SettingSpendPage