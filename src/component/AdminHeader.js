import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SortBook from "./SortBook";
import FilterBook from "./Filter";
// import { AddBookHandler } from "./AddBook";
import AddUpdateBook from "../component/AddUpdateBook";
import AddBook from "./AddBook";
import { closeAddContext } from "../Context";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  card: {
    display: "flex",
    // backgroundColor: "#11cdef",
    // backgroundColor: "#172b4d",
    background: 'rgb(86,103,221)',
    background: 'linear-gradient(90deg, rgba(86,103,221,1) 0%, rgba(94,203,247,1) 100%)',
    color: 'black',
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    width: "auto",
    height: "auto",
    // margin: "50px 700px 10px 700px",
    // padding: '40px',
    // borderRadius: "15px",
    boxShadow:
      "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
    boxShadow: "6px 10px 5px -1px rgba(23,43,77,0.84)",
    cursor: "pointer",
  },
});

export default function AdminHeader({book}) {
  const classes = useStyles();
  const addCloseHook = useState(false)
  return (
    <closeAddContext.Provider value={addCloseHook}>
      <Card className={classes.card}>
        <SortBook  />
        <FilterBook book={book} />
        <AddBook />
      </Card>
    </closeAddContext.Provider>
  );
}
