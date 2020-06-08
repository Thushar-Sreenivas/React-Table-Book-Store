import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React, { useState, useEffect, useContext } from "react";
import { URLContext } from "../Context";
import Axios from "axios";
import AdminHeader from "../component/AdminHeader";
import AdminTable from "../component/Table";
import { closeModalContext } from "../Context";
import AddBook from "../component/AddBook";
const useStyles = makeStyles({
  root: {
    minWidth: 275,

    // background:
    //   "linear-gradient(90deg, rgba(86,103,221,1) 0%, rgba(94,203,247,1) 100%)",
    // backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
  },

  card: {
    // backgroundColor: "#181A1B",
    backgroundColor: "#172b4d",
    // background: "rgb(86,103,221)",
    // background:
    //   "linear-gradient(90deg, rgba(86,103,221,1) 0%, rgba(94,203,247,1) 100%)",

    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    width: "auto",
    height: "auto",
    margin: "70px 50px 100px 50px",
    // padding: '40px',
    borderRadius: "15px",
    boxShadow:
      "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
    cursor: "pointer",
  },
});

export default function BookStore() {
  const [book, setBook] = useState([]);
  const [bookURL] = useContext(URLContext);

  useEffect(() => {
    async function getBookAsync() {
      try {
        let response = await Axios.get(`${bookURL}`);
        setBook(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getBookAsync();
  }, [bookURL]);
  const classes = useStyles();
  const modalCloseHook = useState(false);
  return (
    <closeModalContext.Provider value={modalCloseHook}>
      <AdminHeader book={book} />
      <Card className={classes.root}>
        <CardContent className={classes.card}>
          {/* <AdminHeader book={book} /> */}
          {/* <AddBook /> */}
          <AdminTable book={book} />
        </CardContent>
      </Card>
    </closeModalContext.Provider>
  );
}
