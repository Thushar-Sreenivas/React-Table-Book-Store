
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CollapsibleTable from "../container/adminTableCollapisble";
import React, { useState, useEffect, useContext } from "react";
import URLContext from "../Context";
import Axios from "axios";
import AdminHeader from "../component/AdminHeader";
import AdminTable from "../component/Table";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
  },

  card: {
    // backgroundColor: "#181A1B",
    backgroundColor: "#172b4d",

    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    width: "auto",
    height: "auto",
    margin: "70px 50px 100px 50px",
    // padding: '40px',
    borderRadius: "15px",
    boxShadow:
      "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
    cursor: "pointer",
  },
});

export default function BookStore() {
  const [book, setBook] = useState([]);
  const [bookURL] = useContext(URLContext);

  async function getBookAsync() {
    try {
      let response = await Axios.get(`${bookURL}`);
      setBook(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getBookAsync();
  }, [bookURL]);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {/* <CardHeader>
        <h1>Card tables</h1>
      </CardHeader> */}
      <AdminHeader book={book} />
      <CardContent className={classes.card}>
        {/* <CollapsibleTable book={book} /> */}
        <AdminTable book={book} />
      </CardContent>
    </Card>
  );
}






// import React, { useState, useEffect, useContext } from "react";
// import Axios from "axios";
// import CollapsibleTable from "../container/adminTableCollapisble";
// import { AddBookHandler } from "../component/AddBook";
// import EditIcon from "@material-ui/icons/Edit";
// import SimpleSelect from "../component/sort";
// import URLContext from "../Context";
// import SimpleCard from "../component/Card";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   background: {
//     backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
//   },
//   // backgroundColor: {
//   //   backgroundColor: "#172b4d",
//   // },
// });

// function BookStore() {
//   const [book, setBook] = useState([]);
//   const [bookURL] = useContext(URLContext);
//   const classes = useStyles()
  
//   async function getBookAsync() {
//     try {
//       let response = await Axios.get(`${bookURL}`);
//       setBook(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
//   useEffect(() => {
//     getBookAsync();
//   }, [bookURL]);

//   return (
//     <div className={classes.background}>
//       {/* <SimpleSelect />
//         <AddBookHandler /> */}
//       <SimpleCard />
//       {/* <CollapsibleTable book={book} /> */}
//     </div>
//   );
// }

// export default BookStore;