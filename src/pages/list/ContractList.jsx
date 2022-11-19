import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Contract from "../table-list/Contract"

const ContractList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* contract list */}
        <Contract/>
      </div>
    </div>
  )
}

export default ContractList