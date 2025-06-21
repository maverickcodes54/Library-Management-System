import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";

const BooksList = ({ books = [], onEditBook, onToggleActive }) => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.CONTAINS },
    category: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS }
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      global: { value, matchMode: FilterMatchMode.CONTAINS }
    }));
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Search..."
        />
      </div>
    );
  };

  const imageBodyTemplate = (rowData) =>
    rowData.image ? (
      <img
        src={rowData.image}
        alt={rowData.title}
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
    ) : (
      <span className="text-muted">No Image</span>
    );

  const statusBodyTemplate = (rowData) => {
    const severity =
      rowData.status === "available"
        ? "success"
        : rowData.status === "not available"
        ? "danger"
        : "warning";

    return <Tag value={rowData.status} severity={severity} />;
  };

  const isActiveBodyTemplate = (rowData) => (
    <InputSwitch
      checked={rowData.active}
      onChange={(e) => onToggleActive(rowData.title, e.value)}
    />
  );

  const editButtonTemplate = (rowData) => (
    <Button
      icon="pi pi-pencil"
      rounded
      outlined
      onClick={() => onEditBook(rowData)}
    />
  );

  const header = renderHeader();

  return (
    <div className="card mt-4">
      <DataTable
        value={books}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        globalFilterFields={["title", "category", "status"]}
        header={header}
        emptyMessage="No books found."
        responsiveLayout="scroll"
      >
        <Column field="title" header="Title" filter style={{ minWidth: "10rem" }} />
        <Column header="Image" body={imageBodyTemplate} style={{ width: "6rem" }} />
        <Column field="category" header="Category" filter style={{ minWidth: "8rem" }} />
        <Column field="status" header="Status" body={statusBodyTemplate} filter style={{ minWidth: "8rem" }} />
        <Column field="copies" header="Copies" style={{ minWidth: "4rem" }} />
        <Column header="Active" body={isActiveBodyTemplate} style={{ minWidth: "4rem" }} />
        <Column header="Edit" body={editButtonTemplate} style={{ minWidth: "6rem" }} />
      </DataTable>
    </div>
  );
};

export default BooksList;
