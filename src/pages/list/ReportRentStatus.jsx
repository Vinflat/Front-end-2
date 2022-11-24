import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import RentStatus from "../table-list/RentStatus"

const ReportRentStatus = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* renter list */}
        <RentStatus/>
      </div>
    </div>
  )
}

export default ReportRentStatus