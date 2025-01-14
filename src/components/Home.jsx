/* eslint-disable no-unused-vars */
import React from 'react';

const Home = (invoices ) => {
  if (!Array.isArray(invoices)) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">No Invoices Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Invoices</h1>
      {/* Display list of invoices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {invoices.map((invoice, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h2 className="text-lg font-bold mb-2">Invoice #{invoice.invoiceNumber}</h2>
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

export default Home;
