import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ElectrictandWater from "../table-list/ElectrictandWater"

const ElectrictandWaterList = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* ElectrictandWaterReport list */}
        <ElectrictandWater/>
      </div>
    </div>
  )
}

export default ElectrictandWaterList