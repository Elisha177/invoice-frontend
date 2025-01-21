/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ invoices = [] }) => {
  // Early return if invoices is null or undefined
  if (!invoices) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">Loading...</h1>
      </div>
    );
  }

  // If invoices is empty array
  if (invoices.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">No Invoices Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Invoices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {invoices.map((invoice) => (
          <div 
            key={invoice.invoiceNumber || Math.random()} 
            className="bg-white shadow-md rounded p-4"
          >
            <h2 className="text-lg font-bold mb-2">
              Invoice #{invoice.invoiceNumber}
            </h2>
            <p><strong>Client:</strong> {invoice.clientName}</p>
            <p><strong>Date:</strong> {invoice.date}</p>
            <p><strong>Amount:</strong> ${invoice.amount}</p>
            <p><strong>Status:</strong> {invoice.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add PropTypes for type checking
Home.propTypes = {
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      invoiceNumber: PropTypes.string,
      clientName: PropTypes.string,
      date: PropTypes.string,
      amount: PropTypes.number,
      status: PropTypes.string
    })
  )
};

export default Home;