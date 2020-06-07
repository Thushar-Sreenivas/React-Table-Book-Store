import React, { useState } from 'react'
import AddUpdateBook from './AddUpdateBook'
import AddIcon from "@material-ui/icons/Add";

 function AddBook () {
    let [addBook, setAddBook] = useState(false);
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