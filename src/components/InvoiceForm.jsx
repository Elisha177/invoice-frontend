/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const InvoiceForm = (onSubmit) => {

    const [form, setForm] = useState({
        invoiceNumber: '',
        clientName: '',
        date: '',
        amount: '',
        status: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(form);
        onSubmit(form);
        setForm({invoiceNumber: '', clientName: '', date: '', amount: '', status: ''})
    }

    return (
        <div className='p-6'>
            <form className=' bg-white p-4 text-center shadow-md rounded' onSubmit={handleSubmit}>
                <h1 className=' text-xl mb-4'>InvoiceForm</h1>
                <input
                    type='text'
                    placeholder='Invoice Number'
                    value={form.invoiceNumber}
                    onChange={(e) => setForm({ ...form, invoiceNumber: e.target.value })}
                    className=' border p-2 mb-4 w-full'
                />
                <input
                    type="text"
                    placeholder="Client Name"
                    value={form.clientName}
                    onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className="border p-2 mb-4 w-full"
                />
                <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="border p-2 mb-4 w-full"
                >
                    <option value="">Status</option>
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Pending">Pending</option>
                </select>
                <button className=" bg-gray-900 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    )
}

export default InvoiceForm