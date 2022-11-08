import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ElectrictandWaterReport from "../table-list/ElectrictandWaterReport"

const ElectrictandWaterReportList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* ElectrictandWaterReport list */}
        <ElectrictandWaterReport/>
      </div>
    </div>
  )
}

export default ElectrictandWaterReportList