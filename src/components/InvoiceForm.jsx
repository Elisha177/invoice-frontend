/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Home = ({ invoices = [] }) => {

  // Function to generate PDF for a specific invoice
  const handleGeneratePDF = (invoice) => {
    const doc = new jsPDF();
    doc.text(`Invoice Details - ${invoice.invoiceNumber}`, 10, 10);

    const data = [
      ["Invoice Number", invoice.invoiceNumber],
      ["Client Name", invoice.clientName],
      ["Date", invoice.date],
      ["Amount", invoice.amount],
      ["Status", invoice.status],
    ];

    doc.autoTable({
      body: data,
      startY: 20,
    });

    doc.save(`invoice_${invoice.invoiceNumber}.pdf`);
  };

  // Function to generate Excel for a specific invoice
  const handleGenerateExcel = (invoice) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([invoice]);

    XLSX.utils.book_append_sheet(wb, ws, "Invoice Details");
    XLSX.writeFile(wb, `invoice_${invoice.invoiceNumber}.xlsx`);
  };

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

            {/* PDF and Excel Buttons */}
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mr-2"
                onClick={() => handleGeneratePDF(invoice)}
              >
                PDF
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => handleGenerateExcel(invoice)}
              >
                Excel
              </button>
            </div>
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