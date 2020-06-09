import React, { useState, useContext } from "react";
import Axios from "axios";
import qs from "qs";
import TextField from "@material-ui/core/TextField";
import {  makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { closeModalContext, closeAddContext } from "../Context";
import TableCell from "@material-ui/core/TableCell";
import { Tooltip } from "@material-ui/core";
import { URLContext } from "../Context";
// import SortBook from "./SortBook";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    alignItems: "center",
  },
});

export default function AddUpdateBook({
  req = "post",
  ISBN,
  book_title,
  author,
  category,
  publisher,
  synopsis,
  price,
  stack_count,
  onChange,
}) {
  const classes = useStyles();

  const [book, setBook] = useState({
    ISBN: null,
    book_title: "",
    author: "",
    publisher: "",
    category: "",
    price: null,
    synopsis: "",
    stack_count: null,
  });

  const [urlParam, setURLParam] = useContext(URLContext);
  if (ISBN) setURLParam(`http://localhost:3000/book/${ISBN}`);

  const [url, setURL] = useContext(URLContext);

  function handleChange(event) {
    const value = event.target.value;
    setBook({
      ...book,
      [event.target.name]: value,
    });
  }

  function onSubmitHandler(event) {
    Axios({
      method: req,
      url: urlParam,
      headers: {
        head: "good",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ISBN: book.ISBN,
        book_title: book.book_title,
        author: book.author,
        publisher: book.publisher,
        category: book.category,
        price: book.price,
        synopsis: book.synopsis,
        stack_count: book.stack_count,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    onChange(false);

    setTimeout(
      () => setURL("http://localhost:3000/book/?sort=book_title"),
      400
    );
  }

  return (
    <TableCell className={classes.container}>
      <TextField
        className={classes.item}
        label="ISBN"
        name="ISBN"
        defaultValue={ISBN}
        onChange={handleChange}
        required
      />

      <TextField
        className={classes.item}
        label="Book Title"
        name="book_title"
        defaultValue={book_title}
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.item}
        label="Author"
        name="author"
        defaultValue={author}
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.item}
        label="Category"
        name="category"
        defaultValue={category}
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.item}
        label="Publisher"
        name="publisher"
        defaultValue={publisher}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        label="Synopsis"
        name="synopsis"
        defaultValue={synopsis}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        label="Price"
        name="price"
        defaultValue={price}
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.item}
        label="Stack Count"
        name="stack_count"
        defaultValue={stack_count}
        onChange={handleChange}
        required
      />
      <Tooltip title="Done">
        <CheckCircleOutlineIcon onClick={onSubmitHandler} />
      </Tooltip>
    </TableCell>
  );
}
