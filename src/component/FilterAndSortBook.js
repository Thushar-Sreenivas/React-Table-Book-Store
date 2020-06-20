import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { URLContext } from "../Context";
import CancelIcon from "@material-ui/icons/Cancel";
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
  },
}));

export default function FilterAndSortBook({ book }) {
  const classes = useStyles();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [url, setURL] = useContext(URLContext);
  let cancelToggle = true;
  let mySetFilter = new Set();

  book.map((row) => {
    mySetFilter.add(row.category);
  });
  let filterBook = Array.from(mySetFilter);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const onSubmitHandler = () => {
    // console.log("onSubmitHandler -> cancelToggle", props);
    // if (props) {
    //   setURL(`http://localhost:3000/book/?sort=${sort}&cat=`);
    //   console.log("onSubmitHandler -> setURL cancel", setURL);
    // }
    setURL(`http://localhost:3000/book/?sort=${sort}&cat=${filter}`);
  };

  

  const clearFilter = () => {
    setURL(`http://localhost:3000/book/?sort=${sort}&cat=`);
    setFilter('')
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.dropDown} id="demo-simple-select-label">
          Sort {sort}
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
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.dropDown} id="demo-simple-select-label">
          Filter {filter}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-filter"
          className={classes.dropDown}
          value={filter}
          onChange={handleFilterChange}
          renderValue={onSubmitHandler}
        >
          {filterBook.map((row) => (
            <MenuItem key={row} value={row}>
              {/* <MenuItem key={row.ISBN} value={row.category}> */}
              {row}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CancelIcon
        style={{ marginTop: "24px", marginLeft: "8px" }}
        color="primary"
        onClick={clearFilter}
      />
    </>
  );
}
