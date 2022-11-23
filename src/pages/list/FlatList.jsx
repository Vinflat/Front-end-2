import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Flat from "../table-list/Flat"

const ApartmentList = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* Flat list */}
        <Flat/>
      </div>
    </div>
  )
}

export default ApartmentList