import React, { useState, useContext } from 'react'
import AddUpdateBook from './AddUpdateBook'
import AddIcon from "@material-ui/icons/Add";
import { closeAddContext } from "../Context";
import Card from "@material-ui/core/Card";
import { Tooltip } from '@material-ui/core';

 function AddBook () {
    let [addBook, setAddBook] = useContext(closeAddContext) 
    // let [addBook, setAddBook] = useState(false);
    return (
      <>
        {addBook ? (
          <AddUpdateBook />
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