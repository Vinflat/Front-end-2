import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PaymentBill from "../table-list/PaymentBill"

const PaymentBillList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* Business Statistics Page */}
        <PaymentBill/>
      </div>
    </div>
  )
}

export default PaymentBillList