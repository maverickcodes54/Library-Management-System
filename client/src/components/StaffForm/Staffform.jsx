import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const StaffForm=({onAddStaff, selectedStaff, clearSelectedStaff})=>{
    const [formData, setFormData] = useState({
        id : '',
        firstName : '',
        lastName : '',
        phone : '',
        email : '',
        position : ''
    })

    const [showForm,setShowForm] = useState(null);

    useEffect(() => {
            if (selectedStaff) {
                setFormData(selectedStaff);
            }
        }, [selectedStaff]);

    const toggleForm=()=>{
        setShowForm(!showForm);
        if(!showForm && selectedStaff){
            clearSelectedStaff();
        }
    };

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddStaff(formData);
        setFormData({id:null, firstName : '', lastName :'', phone :'', email:''})
    };

    return(
        <div className='container mt-4 mb-4 p-4 '>
            <button className='btn btn-dark mb-2' onClick={toggleForm}>
                {showForm ? 'Cancel' : 'Add Staff'}
            </button>

            {showForm && (
                <form onSubmit={handleSubmit} className='p-fluid mb-4'>
                    <div className='field'>
                        <label> First Name</label>
                        <InputText name='firstName' value={formData.firstName} onChange={handleChange} required/>
                    </div>
                    <div className='field'>
                        <label>Last Name</label>
                        <InputText name='lastName' value={formData.lastName} onChange={handleChange}/>
                    </div>
                    <div className='field'>
                        <label>Phone</label>
                        <InputText name='phone' value={formData.phone} onChange={handleChange}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <InputText name='email' value={formData.email} onChange={handleChange} />
                    </div>
                        <Button type="submit" label={formData.id ? "Update" : "Add"} className="mt-2" />
                    
                </form>
            )}
        </div>
    )
}

export default StaffForm;