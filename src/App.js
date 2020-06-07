import React, { useState, useEffect, useContext } from 'react';
import SimpleTable from './container/adminTable';
import AdminTableEditable from './container/adminTableEditable'
import Axios from 'axios';
import CollapsibleTable from './container/adminTableCollapisble';
import EnhancedTable from './container/adminTableSortable';
import MaterialTableDemo from './container/adminTableEditable';
import MaterialTable from 'material-table';
import { AddBookHandler } from './component/AddBook';
import EditIcon from '@material-ui/icons/Edit';
import SimpleSelect from './component/sort';
import URLContext from './Context'
import BookStore from './container/BookStore';
function App() {

  const urlHook = useState("http://localhost:3000/book/");
  return (
    <div className="App">
      <URLContext.Provider value={urlHook}>
        <BookStore />
      </URLContext.Provider>
    </div>
  );
}

export default App;








{/* <URLContext.Provider bookURL={bookURL} setBookURL={setBookURL} > */}
        {/* bookURL={bookURL} setBookURL={setBookURL} */}
        {/* <MaterialTable /> */}
        {/* <MaterialTableDemo book={book}/> */}
        {/* <EnhancedTable book={book}/> */}
        {/* <button onClick={filterChangeHandler} >Filter</button> */}
        {/* <button>Add Book</button> */}
        {/* <SimpleTable book={book} /> */}
        {/* <SimpleSelect />
        <AddBookHandler />
        <CollapsibleTable book={book} /> */}