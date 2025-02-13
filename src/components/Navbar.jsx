import { Link } from "react-router-dom"; // Make sure to use react-router-dom
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black shadow-md'}`}>
      <h1 className="text-xl font-bold">Invoice Management</h1>
      <div>
        <Link className="mr-4 hover:underline" to="/">Home</Link>
        <Link className="mr-4 hover:underline" to="/login">Login</Link>
        <Link className="mr-4 hover:underline" to="/signup">Signup</Link>
        <Link className="hover:underline" to="/invoices/new">New Invoice</Link>
      </div>
      <button onClick={toggleTheme} className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;