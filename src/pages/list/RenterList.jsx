import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Renter from "../table-list/Renter"

const ApartmentList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* renter list */}
        <Renter/>
      </div>
    </div>
  )
}

export default ApartmentList