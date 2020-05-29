import React, { useState, useEffect } from 'react';
import SimpleTable from './container/adminTable';
import AdminTableEditable from './container/adminTableEditable'
import Axios from 'axios';
import CollapsibleTable from './container/adminTableCollapisble';
import EnhancedTable from './container/adminTableSortable';
import MaterialTableDemo from './container/adminTableEditable';
import MaterialTable from 'material-table';

function App() {
  const [book, setBook] = useState([])
  const [filterCategory, setFilterCategory] = useState('http://localhost:3000/book/')
  async function getBookAsync() {
    try {
      let response = await Axios.get(`${filterCategory}`)
      setBook(response.data);
    }
    catch(error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getBookAsync()
   },[filterCategory]);
  
  function filterChangeHandler() {
    // console.log("Clicked");
    setFilterCategory('http://localhost:3000/book/Motivation')
  }
   
  return (
    <div className="App">
      {/* <MaterialTable /> */}
      <MaterialTableDemo book={book}/>
      {/* <EnhancedTable book={book}/> */}
      <button onClick={filterChangeHandler} >Filter</button>
      <CollapsibleTable book={book} />
      {/* <SimpleTable book={book} /> */}
    </div>
  );
}

export default App;
