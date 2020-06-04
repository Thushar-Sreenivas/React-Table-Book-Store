import React, { useState, useEffect } from 'react';
import SimpleTable from './container/adminTable';
import AdminTableEditable from './container/adminTableEditable'
import Axios from 'axios';
import CollapsibleTable from './container/adminTableCollapisble';
import EnhancedTable from './container/adminTableSortable';
import MaterialTableDemo from './container/adminTableEditable';
import MaterialTable from 'material-table';
import { AddBookHandler } from './component/AddBook';

function App() {
  const [book, setBook] = useState([])
  const [bookURL, setBookURL] = useState('http://localhost:3000/book/')
  
  async function getBookAsync() {
    try {
      let response = await Axios.get(`${bookURL}`)
      setBook(response.data);
    }
    catch(error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getBookAsync()
   },[]);
  

  return (
    <div className="App">
      {/* <MaterialTable /> */}
      {/* <MaterialTableDemo book={book}/> */}
      {/* <EnhancedTable book={book}/> */}
      {/* <button onClick={filterChangeHandler} >Filter</button> */}
      <button>Add Book</button>
      <AddBookHandler />
      <CollapsibleTable book={book} />
      {/* <SimpleTable book={book} /> */}
    </div>
  );
}

export default App;
