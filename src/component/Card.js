import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CollapsibleTable from "../container/adminTableCollapisble";
import React, { useState, useEffect, useContext } from "react";
import URLContext from "../Context";
import Axios from "axios";
import AdminHeader from "./AdminHeader";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  card: {
    // backgroundColor: "#181A1B",
    backgroundColor: "#172b4d",
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    width: "auto",
    height: "auto",
    margin: "500px 50px 100px 50px",
    // padding: '40px',
    borderRadius: "15px",
    boxShadow:
      "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
    cursor: "pointer",
  },
});

export default function SimpleCard() {
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
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader>
        <h1>Card tables</h1>
      </CardHeader>
      <AdminHeader />
      <CardContent className={classes.card}>
        <CollapsibleTable book={book} />
      </CardContent>
    </Card>
  );
}
