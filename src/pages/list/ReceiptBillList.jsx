import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ReceiptBill from "../table-list/ReceiptBill"

const ReceiptBillList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <ReceiptBill/>
      </div>
    </div>
  )
}

export default ReceiptBillList