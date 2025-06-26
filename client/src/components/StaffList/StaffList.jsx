import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const StaffList = ({staffList, onEditStaff, onDeleteStaff }) =>{

    const actionBodyTemplate = (rowData) => (
        <div className='flex gap-2'>
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-info" onClick={() => onEditStaff(rowData)} />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => onDeleteStaff(rowData.id)} />
        </div>
    );

    return(
         <DataTable value={staffList} paginator rows={10} className="p-datatable-gridlines">
                    <Column field="firstName" header="First Name" />
                    <Column field="lastName" header="Last Name" />
                    <Column field="phone" header="Phone" />
                    <Column field="email" header="Email" />
                    <Column header="Actions" body={actionBodyTemplate} />
                </DataTable>
    )
}

export default StaffList;