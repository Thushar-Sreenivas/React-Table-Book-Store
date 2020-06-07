import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import TextField from "@material-ui/core/TextField";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { AddBookHandler } from "../component/AddBook";
import SimpleSelect from "../component/sort";
// const useRowStyles = makeStyles({
//   root: {
//     '& > *': {
//       borderBottom: 'unset',
//     },
//   },
// });

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#172b4d",
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 21,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTextField = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 41,
    padding: 20,
    margin: 20,
    display: "inlineBlock",
  },
}))(TextField);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = useState(false);
  const classes = useStyles();
  let counter = 1;

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            color="primary"
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <StyledTableCell component="th" scope="row">
          {props.counter}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.book_title}
        </StyledTableCell>
        <StyledTableCell align="right">{row.ISBN}</StyledTableCell>
        <StyledTableCell align="right">{row.author}</StyledTableCell>
        <StyledTableCell align="right">{row.publisher}</StyledTableCell>
        <StyledTableCell align="right">{row.category}</StyledTableCell>
        <StyledTableCell align="right">{row.price}</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={9}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Book Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No</StyledTableCell>
                    <StyledTableCell>Book Title</StyledTableCell>
                    <StyledTableCell align="right">ISBN</StyledTableCell>
                    <StyledTableCell align="right">Author</StyledTableCell>
                    <StyledTableCell align="right">Category</StyledTableCell>
                    <StyledTableCell align="right">Publisher</StyledTableCell>
                    <StyledTableCell align="center">Synopsis</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Stack Count</StyledTableCell>
                    <StyledTableCell align="right">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                {editing ? (
                  <AddBookHandler
                    req="put"
                    ISBN={row.ISBN}
                    book_title={row.book_title}
                    author={row.author}
                    category={row.category}
                    publisher={row.publisher}
                    synopsis={row.synopsis}
                    price={row.price}
                    stack_count={row.stack_count}
                  />
                ) : (
                  <TableBody>
                    <StyledTableCell align="right">
                      {props.counter}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.book_title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.ISBN}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.author}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.category}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.publisher}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.synopsis}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.stack_count}
                    </StyledTableCell>
                    <EditOutlinedIcon
                      style={{ marginTop: "24px", marginLeft: "10px" }}
                      onClick={() => setEditing(true)}
                    />
                    <DeleteOutlinedIcon
                      style={{ marginTop: "24px", marginLeft: "10px" }}
                    />
                  </TableBody>
                )}
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };



export default function CollapsibleTable({ book }) {
  let counter = 1;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Book Title</StyledTableCell>
            <StyledTableCell align="right">ISBN</StyledTableCell>
            <StyledTableCell align="right">Author</StyledTableCell>
            <StyledTableCell align="right">Publisher</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {book.map((row) => (
            <Row key={row.ISBN} row={row} counter={counter++} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
