import React, { useState, useContext } from 'react'
import AddUpdateBook from './AddUpdateBook'
import AddIcon from "@material-ui/icons/Add";
import { closeAddContext } from "../Context";

 function AddBook () {
    let [addBook, setAddBook] = useContext(closeAddContext)
    return (
      <>
        {addBook ? (
          <AddUpdateBook />
        ) : (
          <AddIcon color="primary" onClick={() => setAddBook(true)} />
        )}
        
      </>
    );
}

export default AddBook