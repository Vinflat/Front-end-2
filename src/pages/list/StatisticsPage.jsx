import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Statistics from "../table-list/Statistics"

const StatisticsPage = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <Statistics/>
      </div>
    </div>
  )
}

export default StatisticsPage