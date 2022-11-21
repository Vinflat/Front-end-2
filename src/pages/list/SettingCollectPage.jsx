import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SettingCollect from "../table-list/SettingCollect"

const SettingCollectPage = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <SettingCollect/>
      </div>
    </div>
  )
}

export default SettingCollectPage