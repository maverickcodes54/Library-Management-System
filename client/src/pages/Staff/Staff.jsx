import React, { useState } from "react";
import StaffForm from '../../components/StaffForm/StaffForm';
import StaffList from '../../components/StaffList/StaffList';


const Staff =()=>{

    const [staff, setStaff] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null);

//form getting add, update
    const handleAddStaff = (staff) =>{
        if(staff.id != null){
            setStaff(prev => prev.map(s => (s.id === staff.id ? staff : s)));
        }else{
            staff.id = Date.now();
            setStaff(prev => [...prev, staff]);
        }
        setSelectedStaff(null);
    };

    //edit method
    const handleEditStaff = (staff) => {
        setSelectedStaff(staff);
    };

    //delete staff
    const handleDeleteStaff = (id) =>{
        setStaff(prev => prev.filter(s=> s.id !==id));
    };

    return(
        <div className="card">
            <StaffForm onAddStaff={handleAddStaff} selectedStaff={selectedStaff} clearSelectedStaff={() => setSelectedStaff(null)} />
            <StaffList staffList={staff} onEditStaff={handleEditStaff} onDeleteStaff = {handleDeleteStaff} />
        </div>
    )
}

export default Staff;