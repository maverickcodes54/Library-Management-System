import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const MembersList = ({ members, onEdit, onDelete }) => {
    const actionBodyTemplate = (rowData) => (
        <div className="flex gap-2">
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-info" onClick={() => onEdit(rowData)} />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => onDelete(rowData.id)} />
        </div>
    );

    return (
        <DataTable value={members} paginator rows={5} className="p-datatable-gridlines">
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="phone" header="Phone" />
            <Column field="paymentStatus" header="Payment Status" />
            <Column header="Actions" body={actionBodyTemplate} />
        </DataTable>
    );
};

export default MembersList;
