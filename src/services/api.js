import axios from 'axios';

// Base URL for the backend API
const API = axios.create({
  baseURL: 'https://invoice-backend-oq4s.onrender.com', // Replace with your backend server URL if different
});

// Add an invoice
export const createInvoice = (invoiceData) => API.post('/invoices', invoiceData);

// Get all invoices
export const getInvoices = () => API.get('/invoices');

// Get a specific invoice by ID
export const getInvoiceById = (id) => API.get(`/invoices/${id}`);

// Update an invoice by ID
export const updateInvoice = (id, updatedData) => API.put(`/invoices/${id}`, updatedData);

// Delete an invoice by ID
export const deleteInvoice = (id) => API.delete(`/invoices/${id}`);

// User login
export const loginUser = (userData) => API.post('/auth/login', userData);

// User signup
export const signupUser = (userData) => API.post('/auth/signup', userData);
