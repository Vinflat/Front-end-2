import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import BusinessStatisticsPage from "../table-list/BusinessStatisticsPage"

const BusinessStatistics = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <BusinessStatisticsPage/>
      </div>
    </div>
  )
}

export default BusinessStatistics