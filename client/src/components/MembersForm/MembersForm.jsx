import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MembersForm = ({ onAddMember, selectedMember, clearSelectedMember }) => {
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        email: '',
        phone: '',
        active: true,
        paymentStatus: 'Paid'
    });

    useEffect(() => {
        if (selectedMember) {
            setFormData(selectedMember);
        }
    }, [selectedMember]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMember(formData);
        setFormData({ id: null, name: '', email: '', phone: '', active: true, paymentStatus: 'Paid' });
    };

    return (
        <form onSubmit={handleSubmit} className="p-fluid mb-4">
            <div className="field">
                <label>Name</label>
                <InputText name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="field">
                <label>Email</label>
                <InputText name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="field">
                <label>Phone</label>
                <InputText name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="field">
                <label>Payment Status</label>
                <select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="p-inputtext">
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                </select>
            </div>
            <Button type="submit" label={formData.id ? "Update" : "Register"} className="mt-2" />
        </form>
    );
};

export default MembersForm;
