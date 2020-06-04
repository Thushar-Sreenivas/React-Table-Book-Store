import React, { useState } from 'react'
import Axios from 'axios';
import qs from 'qs'
export function AddBookHandler({ISBN}) {
  const [book, setBook] = useState({
    ISBN: null,
    book_title: "",
    author: "",
    publisher: "",
    category: "",
    price: null,
    synopsis: "",
    stack_count: null,
  })

  

  function handleChange(event) {
    const value = event.target.value;
    setBook({
      ...book,
      [event.target.name]: value
    });
  } 

  function onSubmitHandler(event) {
    Axios({
      method: 'post',
      url: 'http://localhost:3000/book/',
      headers: {
        'head': 'good',
        'Content-Type': "application/x-www-form-urlencoded" 
      },
      data: qs.stringify({
        ISBN: book.ISBN,
        book_title: book.book_title,
        author: book.author,
        publisher: book.publisher,
        category: book.category,
        price: book.price,
        synopsis: book.synopsis,
        stack_count: book.stack_count
      })
    })
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    event.preventDefault()
  }

    return (
      <div>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="ISBN"><b>ISBN</b></label>
            <input type="number" placeholder="Enter ISBN" name="ISBN" id="ISBN" 
            onChange={handleChange} required></input>

            <label htmlFor="book_title"><b>book_title</b></label>
            <input type="text" placeholder="Enter Book Title" name="book_title" id="book_title" onChange={handleChange} required></input>

            <label htmlFor="author"><b>author</b></label>
            <input type="text" placeholder="Enter author" name="author" id="author" onChange={handleChange} required></input>

            <label htmlFor="publisher"><b>publisher</b></label>
            <input type="text" placeholder="Enter publisher" name="publisher" id="publisher" onChange={handleChange} required></input>
            
            <label htmlFor="category"><b>category</b></label>
            <input type="text" placeholder="Enter category" name="category" id="category" onChange={handleChange} required></input>

            <label htmlFor="price"><b>price</b></label>
            <input type="number" placeholder="Enter price" name="price" id="price" onChange={handleChange} required></input>
            
            <label htmlFor="synopsis"><b>synopsis</b></label>
            <input type="text" placeholder="Enter synopsis" name="synopsis" id="synopsis" onChange={handleChange} required></input>
            
            <label htmlFor="stack_count"><b>stack_count</b></label>
            <input type="number" placeholder="stack_count" name="stack_count" id="stack_count" onChange={handleChange} required></input>

            <input type="submit" value="Submit"></input>
        </form>
        </div>
    )
}

