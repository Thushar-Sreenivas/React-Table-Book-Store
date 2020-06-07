import React, { useState, useContext } from "react";
import Axios from "axios";
import qs from "qs";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { closeModalContext, closeAddContext } from "../Context";
import TableCell from "@material-ui/core/TableCell";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'spaceEvenly',
    // alignContent: 'center',
    alignItems: 'center',
  },
  item: {
    // flexBasis: '10px'
    // padding: '10px',
    // margin: '20px',
  }
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

  let urlParam = "http://localhost:3000/book/";
  if (ISBN) urlParam = `http://localhost:3000/book/${ISBN}`;
  const [editing, setEditing] = useContext(closeModalContext);
  const [add, setAdd] = useContext(closeAddContext)
  
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
      setEditing(false)
      setAdd(false)
    // event.preventDefault();
  }

  return (
    <TableCell className={classes.container}>
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="ISBN"
        name="ISBN"
        defaultValue={ISBN}
        onChange={handleChange}
        // fullWidth='true'
      />
      
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="Book Title"
        name="book_title"
        defaultValue={book_title}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="author"
        name="author"
        defaultValue={author}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="category"
        name="category"
        defaultValue={category}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="publisher"
        name="publisher"
        defaultValue={publisher}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="synopsis"
        name="synopsis"
        defaultValue={synopsis}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="price"
        name="price"
        defaultValue={price}
        onChange={handleChange}
      />
      <TextField
        className={classes.item}
        // id="standard-basic"
        label="stack_count"
        name="stack_count"
        defaultValue={stack_count}
        onChange={handleChange}
      />
      <Tooltip title="Done">
      <CheckCircleOutlineIcon onClick={onSubmitHandler} />
      </Tooltip>
    </TableCell>
  );
}

