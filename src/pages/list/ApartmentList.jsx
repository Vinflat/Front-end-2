import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Apartment from "../table-list/Apartment"

const ApartmentList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* apartment list */}
        <Apartment/>
      </div>
    </div>
  )
}

export default ApartmentList