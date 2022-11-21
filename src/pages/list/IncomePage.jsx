import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Income from "../table-list/Income"

const IncomePage = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <Income/>
      </div>
    </div>
  )
}

export default IncomePage