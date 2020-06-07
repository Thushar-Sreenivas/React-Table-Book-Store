import React, { useState, useContext } from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import URLContext from "../Context";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropDown: {
    color: "white",
  },
}));

export default function FilterBook({book}) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");
  const [url, setURL] = useContext(URLContext);
  // console.log("FilterBook -> url", url)
 const onSumbitHandler = () => {
   setURL(`http://localhost:3000/book/?cat=${filter}`);
 };
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setURL(`http://localhost:3000/book/?cat=${filter}`);
    // onSumbitHandler()
  };
  // console.log("FilterBook -> sort", sort);
 
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.dropDown} id="demo-simple-select-label">
          Filter
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-filter"
          value={filter}
          onChange={handleFilterChange}
        >
          {book.map((row) => (
              <MenuItem value={row.category}>{row.category}</MenuItem>
          ))}
        </Select>
        <CheckCircleOutlineIcon onClick={onSumbitHandler} />
      </FormControl>
      <p>{filter}</p>
    </div>
  );
}
