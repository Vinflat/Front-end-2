import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ReportEW from "../table-list/ReportEW"

const ReportEWPage = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* renter list */}
        <ReportEW/>
      </div>
    </div>
  )
}

export default ReportEWPage