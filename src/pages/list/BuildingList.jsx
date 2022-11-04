import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Building from "../table-list/Building"

const BuildingList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* building list */}
        <Building/>
      </div>
    </div>
  )
}

export default BuildingList