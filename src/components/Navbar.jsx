
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 text-black flex justify-between items-center">
      <h1 className="text-xl font-bold">Invoice Management</h1>
      <div>
        <Link className="mr-4 hover:underline" to="/">Home</Link>
        <Link className="mr-4 hover:underline" to="/login">Login</Link>
        <Link className="mr-4 hover:underline" to="/signup">Signup</Link>
        <Link className="hover:underline" to="/invoices/new">New Invoice</Link>
      </div>
    </nav>
  );
};

export default Navbar;
