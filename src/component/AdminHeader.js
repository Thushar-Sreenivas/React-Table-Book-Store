import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  card: {
    display: 'flex',
    backgroundColor: "#172b4d",
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    width: "auto",
    height: "auto",
    // margin: "500px 50px 100px 50px",
    // padding: '40px',
    borderRadius: "15px",
    boxShadow:
      "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
    cursor: "pointer",
  },
});

export default function AdminHeader() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <h1>Admin Table</h1>
        <h1>Sort</h1>
        <h1>Filter</h1>
        <h1>Add</h1>
      </CardContent>
    </Card>
  );
}
