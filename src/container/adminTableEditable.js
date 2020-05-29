import React from 'react';
import MaterialTable from 'material-table';
import {cloneDeep} from 'lodash'
export default function MaterialTableDemo({book}) {
  let data = cloneDeep(book)
  console.log("MaterialTableDemo -> Final data", data)
  // data.map(e => console.log("e",e)
  // )
  const [state, setState] = React.useState({
    columns: [
      { title: 'Book Title', field: 'book_title' },
      { title: 'ISBN', field: 'ISBN' },
      { title: 'Author', field: 'author' },
      {title: 'Category',field: 'category'},
      {title: 'Price',field: 'price'},
    ],
    // data: [
    //   { book_title: 'Mehmet', ISBN: 'Baran', author: 'Test', category: 'Test Category', price: 12 },
    //   {
    //     name: 'Zerya Betül',
    //     surname: 'Baran',
    //     birthYear: 2017,
    //     birthCity: 34,
    //   },
    // ],
    data: cloneDeep(book)
    
  });
  console.log("MaterialTableDemo -> data", state.data)
  
  return (
    <MaterialTable
      title="Book Store Admin"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
