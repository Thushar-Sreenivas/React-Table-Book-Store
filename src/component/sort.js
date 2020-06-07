import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import URLContext from '../Context';
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');
  
  const [url, setURL] = useContext(URLContext)
  console.log("SimpleSelect -> url", url)
  
  const handleChange = (event) => {
    setSort(event.target.value);
  };
    console.log("SimpleSelect -> sort", sort);
  const onSumbitHandler = () => {
    setURL(`http://localhost:3000/book/?sort=${sort}`);
  }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value="book_title">Book Title</MenuItem>
          <MenuItem value="ISBN">ISBN</MenuItem>
          <MenuItem value='price'>Price</MenuItem>
        </Select>
        <CheckCircleOutlineIcon onClick={onSumbitHandler} />
      </FormControl>
      <p>{sort}</p>
    </div>
  );
      }