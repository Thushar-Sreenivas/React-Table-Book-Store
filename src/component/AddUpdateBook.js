import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import qs from "qs";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { closeModalContext, closeAddContext } from "../Context";
import TableCell from "@material-ui/core/TableCell";
import { Tooltip } from "@material-ui/core";
import { URLContext } from "../Context";
// import SortBook from "./SortBook";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, watch, errors } = useForm();

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

  // const [urlParam, setURLParam] = useContext(URLContext);
  let urlParam = "http://localhost:3000/book/";
  if (ISBN) urlParam = `http://localhost:3000/book/${ISBN}`;

  const [url, setURL] = useContext(URLContext);

  function handleChange(event) {
    const value = event.target.value;
    setBook({
      ...book,
      [event.target.name]: value,
    });
  }

  const onSubmitHandler = (book) =>  {
    console.log("Register", book);
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
      console.log("Book",book);
    setTimeout(
      () => setURL("http://localhost:3000/book/?sort=book_title"),
      400
    );
  }

  useEffect(() => {
    setURL("http://localhost:3000/book/?sort=book_title&cat=");
  }, [onSubmitHandler]);
  
  return (
    <TableCell className={classes.container}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          className={classes.item}
          label="ISBN"
          name="ISBN"
          defaultValue={ISBN}
          // value={ISBN}
          // onChange={handleChange}
          inputRef={register}
          required
        />
        {errors.ISBN && <span>This field is required</span>}
        {/* <input
          type="string"
          name="patient_name"
          // id="patient_name"
          // placeholder="Name"
          inputRef={register({ required: true })}
        /> */}
        <TextField
          className={classes.item}
          label="Book Title"
          name="book_title"
          defaultValue={book_title}
          // onChange={handleChange}
          inputRef={register}
          required
        />
        {errors.book_title && <span>This field is required</span>}
        <TextField
          className={classes.item}
          label="Author"
          name="author"
          defaultValue={author}
          // onChange={handleChange}
          inputRef={register}
          required
        />
        {errors.author && <span>This field is required</span>}

        <TextField
          className={classes.item}
          label="Category"
          name="category"
          defaultValue={category}
          // onChange={handleChange}
          inputRef={register}
          required
        />
        {errors.category && <span>This field is required</span>}
        <TextField
          className={classes.item}
          label="Publisher"
          name="publisher"
          defaultValue={publisher}
          // onChange={handleChange}
          inputRef={register}
        />
        <TextField
          className={classes.item}
          label="Synopsis"
          name="synopsis"
          defaultValue={synopsis}
          // onChange={handleChange}
          inputRef={register}
        />
        <TextField
          className={classes.item}
          label="Price"
          name="price"
          defaultValue={price}
          // onChange={handleChange}
          inputRef={register}
          required
        />
        {errors.price && <span>This field is required</span>}

        <TextField
          className={classes.item}
          label="Stack Count"
          name="stack_count"
          defaultValue={stack_count}
          // onChange={handleChange}
          inputRef={register}
          required
        />
        {errors.stack_count && <span>This field is required</span>}

        <Tooltip title="Submit">
          <TextField type="submit" />
        </Tooltip>
      </form>
    </TableCell>
  );
}
