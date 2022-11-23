import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ReceiptsandPayments from "../table-list/ReceiptsandPayments"

const MoneyPage = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        {/* Receipts and Payments list */}
        <ReceiptsandPayments/>
      </div>
    </div>
  )
}

export default MoneyPage