import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import CollapsibleTable from "../container/adminTableCollapisble";
import { AddBookHandler } from "../component/AddBook";
import EditIcon from "@material-ui/icons/Edit";
import SimpleSelect from "../component/sort";
import URLContext from "../Context";
import SimpleCard from "../component/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  background: {
    backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
  },
  // backgroundColor: {
  //   backgroundColor: "#172b4d",
  // },
});

function BookStore() {
  const [book, setBook] = useState([]);
  const [bookURL] = useContext(URLContext);
  const classes = useStyles()
  
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
    <div className={classes.background}>
      {/* <SimpleSelect />
        <AddBookHandler /> */}
      <SimpleCard />
      {/* <CollapsibleTable book={book} /> */}
    </div>
  );
}

export default BookStore;
