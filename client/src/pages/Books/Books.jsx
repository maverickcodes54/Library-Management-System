import React, { useState } from "react";
import BooksForm from "../../components/BooksForm/BooksForm";
import BooksList from "../../components/BooksList/BooksList";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Add or update book
  const handleAddOrUpdateBook = (book) => {
    if (selectedBook) {
      setBooks((prevBooks) =>
        prevBooks.map((b) => (b.id === selectedBook.id ? { ...book, id: selectedBook.id } : b))
      );
      setSelectedBook(null);
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleClearSelectedBook = () => {
    setSelectedBook(null);
  };

  const handleToggleActive = (title, newValue) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.title === title ? { ...b, active: newValue } : b))
    );
  };

  return (
    <div className="container">
      <BooksForm onAddBook={handleAddOrUpdateBook} selectedBook={selectedBook} clearSelectedBook={handleClearSelectedBook}/>
      <BooksList books={books} onEditBook={handleEdit} onToggleActive={handleToggleActive}/>
    </div>
  );
};

export default Books;
