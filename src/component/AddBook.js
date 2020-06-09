import React, { useState, useContext } from 'react'
import AddUpdateBook from './AddUpdateBook'
import AddIcon from "@material-ui/icons/Add";
import { closeAddContext } from "../Context";
import Card from "@material-ui/core/Card";
import { Tooltip } from '@material-ui/core';
import { URLContext } from "../Context";

 function AddBook () {
    let [addBook, setAddBook] = useState(false);
      const [url, setURL] = useContext(URLContext);

    // let [addBook, setAddBook] = useState(false);
    // const [editingBook, seteditingBook] = 

    function handleChange(newValue) {
      setAddBook(newValue);
      // setTimeout(
      //   () => setURL("http://localhost:3000/book/?sort=book_title"),
      //   1000
      // );
    }
    return (
      <>
        {addBook ? (
          <AddUpdateBook onChange={handleChange} />
        ) : (
          <Tooltip title="Add Book">
            <AddIcon
              style={{ marginTop: "24px", marginLeft: "8px" }}
              color="#172b4d"
              onClick={() => setAddBook(true)}
            />
          </Tooltip>
        )}
      </>
    );
}

export default AddBook