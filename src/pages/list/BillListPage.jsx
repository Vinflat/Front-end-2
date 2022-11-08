import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Bill from "../table-list/Bill"

const BillListPage = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Bill List Page */}
        <Bill/>
      </div>
    </div>
  )
}

export default BillListPage