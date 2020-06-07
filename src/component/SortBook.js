import React,{useState, useContext} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {URLContext} from '../Context';
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

export default function SortBook() {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');
  const [url, setURL] = useContext(URLContext)
  
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  
  const onSubmitHandler = () => {
    setURL(`http://localhost:3000/book/?sort=${sort}`);
  }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.dropDown} id="demo-simple-select-label">
          Sort
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.dropDown}
          value={sort}
          onChange={handleChange}
          renderValue={onSubmitHandler}
        >
          <MenuItem value="book_title">Book Title</MenuItem>
          <MenuItem value="ISBN">ISBN</MenuItem>
          <MenuItem value="price">Price</MenuItem>
        </Select>
      </FormControl>
      {/* <CheckCircleOutlineIcon onClick={onSubmitHandler} /> */}
    </div>
  );
      }