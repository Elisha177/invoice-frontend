import { Route } from "react-router"
import Navbar from "./components/Navbar"
import { Routes } from "react-router"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import InvoiceForm from "./components/InvoiceForm"
import { useState } from "react"


function App() {

  const [invoices, setInvoices] = useState([]);

  const addInvoice = (newInvoice) => {
    setInvoices((prevInvoices) => [...prevInvoices, newInvoice])
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home invoices={invoices} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/invoices/new" element={<InvoiceForm onSubmit = {addInvoice} />} />
      </Routes>
    </div>
  )
}

export default App
