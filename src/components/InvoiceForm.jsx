/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types'; // Add this import

const InvoiceForm = (props) => {  // Change back to props
    const { onSubmit } = props;  // Destructure inside component
    const navigate = useNavigate();

    const [form, setForm] = useState({
        invoiceNumber: '',
        clientName: '',
        date: '',
        amount: '',
        status: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            ...form,
            amount: Number(form.amount)
        };

        try {
            await onSubmit(formData);
            setForm({
                invoiceNumber: '',
                clientName: '',
                date: '',
                amount: '',
                status: '',
            });
            navigate("/");
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className='p-6'>
            <form className='bg-white p-4 text-center shadow-md rounded' onSubmit={handleSubmit}>
                <h1 className='text-xl mb-4'>InvoiceForm</h1>
                <input
                    type='text'
                    placeholder='Invoice Number'
                    value={form.invoiceNumber}
                    onChange={(e) => setForm({ ...form, invoiceNumber: e.target.value })}
                    className='border p-2 mb-4 w-full'
                    required
                />
                <input
                    type="text"
                    placeholder="Client Name"
                    value={form.clientName}
                    onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                    className="border p-2 mb-4 w-full"
                    required
                />
                <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="border p-2 mb-4 w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className="border p-2 mb-4 w-full"
                    required
                />
                <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="border p-2 mb-4 w-full"
                    required
                >
                    <option value="">Status</option>
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Pending">Pending</option>
                </select>
                <button
                    type='submit'
                    className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
                    Submit
                </button>
            </form>
        </div>
    )
}

// Add PropTypes
InvoiceForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default InvoiceForm;