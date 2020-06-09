import React, { useState, useContext } from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { URLContext } from "../Context";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: "20px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropDown: {
    color: "white",
    // marginLeft: '20px',
  },
}));

export default function FilterAndSortBook({ book }) {
  const classes = useStyles();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [url, setURL] = useContext(URLContext);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const onSubmitHandler = () => {
    setURL(`http://localhost:3000/book/?sort=${sort}&cat=${filter}`);
  };
  const sortandfilterSubmit = () => {
    setURL(`http://localhost:3000/book/?sort=${sort}&cat=${filter}`);
  };

  const onSumbitHandler = () => {
    setURL(`http://localhost:3000/book/?cat=${filter}`);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.dropDown} id="demo-simple-select-label">
          Sort
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.dropDown}
          value={sort}
          onChange={handleSortChange}
          renderValue={onSubmitHandler}
        >
          <MenuItem value="book_title">Book Title</MenuItem>
          <MenuItem value="ISBN">ISBN</MenuItem>
          <MenuItem value="price">Price</MenuItem>
        </Select>
      </FormControl>
      {/* <CheckCircleOutlineIcon onClick={onSubmitHandler} /> */}

      <FormControl className={classes.formControl}>
        <InputLabel className={classes.dropDown} id="demo-simple-select-label">
          Filter
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-filter"
          className={classes.dropDown}
          value={filter}
          onChange={handleFilterChange}
          renderValue={onSubmitHandler}
        >
          {book.map((row) => (
            <MenuItem key={row.ISBN} value={row.category}>
              {row.category}
            </MenuItem>
          ))}
        </Select>
        {/* <CheckCircleOutlineIcon onClick={onSumbitHandler} /> */}
      </FormControl>
    </>
  );
}
