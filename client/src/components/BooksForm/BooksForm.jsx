import React, { useState, useEffect } from "react";

const BooksForm = ({ onAddBook, selectedBook, clearSelectedBook }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    category: "",
    status: "available",
    copies: 0,
    active: true,
    image: ""
  });

  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
      setShowForm(true);
    }
  }, [selectedBook]);

  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm && selectedBook) {
      clearSelectedBook();
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBook(formData);
    setFormData({
      id: null,
      title: "",
      category: "",
      status: "available",
      copies: 0,
      active: true,
      image: ""
    });
    setShowForm(false);
  };

  return (
    <div className="container mt-3 mb-3 p-4">
      <button className="btn btn-primary mb-2" onClick={toggleForm}>
        {showForm ? "Cancel" : "Add Book"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="card p-3 mb-4">
          <div className="form-label">
            <label className="form-label">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-label">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              className="form-select"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Adventure">Adventure</option>
              <option value="Story">Story</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantic">Romantic</option>
              <option value="Comedy">Comedy</option>
              <option value="Comics">Comics</option>
            </select>
          </div>

          <div className="form-label">
            <label className="form-label">Status</label>
            <select name="status" value={formData.status} className="form-select" onChange={handleChange}>
              <option value="available">Available</option>
              <option value="not available">Not Available</option>
              <option value="coming soon">Coming Soon</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Copies</label>
            <input name="copies" type="number" className="form-control" value={formData.copies} onChange={handleChange}/>
          </div>

          <div className="mb-3 form-check">
            <label className="form-label-label">Active</label>
            <input name="active" type="checkbox" checked={formData.active} onChange={handleChange} className="form-check-input"/>
          </div>

          <div className="mb-3">
            <label className="form-label">Book cover Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="form-control"/>
            {formData.image && (
              <img src={formData.image} alt="Preview" style={{ maxWidth: "100px", marginTop: "10px" }}/>
              )}
          </div>
          <button type="submit" className="btn btn-dark">
            {formData.id != null ? "Update Book" : "Save Book"}
          </button>
        </form>
      )}
    </div>
  );
};

export default BooksForm;
