import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import User from "../table-list/User"

const List = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* user table list*/}
        <User/>
      </div>
    </div>
  )
}

export default List