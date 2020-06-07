import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import CollapsibleTable from "../container/adminTableCollapisble";
import { AddBookHandler } from "../component/AddBook";
import EditIcon from "@material-ui/icons/Edit";
import SimpleSelect from "../component/sort";
import URLContext from "../Context";
import SimpleCard from "../component/Card";
function BookStore() {
  const [book, setBook] = useState([]);
  const [bookURL] = useContext(URLContext);
  
  async function getBookAsync() {
    try {
      let response = await Axios.get(`${bookURL}`);
      setBook(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getBookAsync();
  }, [bookURL]);

  return (
    <div className="App">
        {/* <SimpleSelect />
        <AddBookHandler /> */}
        <SimpleCard />
        {/* <CollapsibleTable book={book} /> */}
    </div>
  );
}

export default BookStore;
