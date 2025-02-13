import { Route } from "react-router"
import Navbar from "./components/Navbar"
import { Routes } from "react-router"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import InvoiceForm from "./components/InvoiceForm"
import { useEffect, useState } from "react"
import { useTheme } from "./components/ThemeContext"


function App() {

  const {theme} = useTheme();

  const [invoices, setInvoices] = useState([]);

  const addInvoice = async (newInvoice) => {
    try {
      const response = await fetch("http://localhost:5000/invoices/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInvoice),
      })
      if (!response.ok) {
        throw new Error('Failed to add invoice');
      }

      const savedInvoice = await response.json();
      
      // Update state with the new invoice
      setInvoices(prevInvoices => [...prevInvoices, savedInvoice]);
    } catch (error) {
      console.error("Error adding invoice:", error);
      throw error; // Re-throw to handle in the form component

    }
  }

  useEffect(() => {
    const fetchInvoices = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log("Token being sent:", token);

            if (!token) {
                console.error("No token found. User might not be logged in.");
                return;
            }

            const response = await fetch("http://localhost:5000/invoices/", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token.trim()}`, // Trim any spaces
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json(); // Get detailed error
                console.error("Error from backend:", errorData);

                if (response.status === 401) {
                    console.error("Unauthorized. Token might be invalid or expired.");
                    localStorage.removeItem('token'); // Clear invalid token
                    window.location.href = "/login"; // Redirect to login
                }
                throw new Error('Failed to fetch invoices');
            }

            const data = await response.json();
            console.log("Fetched Invoices:", data); // Verify data structure
            setInvoices(data);
        } catch (error) {
            console.error("Error fetching invoices:", error);
        }
    };

    fetchInvoices();
}, []);


  return (
    <div className={`app ${theme}`}>
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
