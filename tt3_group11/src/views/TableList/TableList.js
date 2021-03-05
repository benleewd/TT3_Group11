import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from 'axios';
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {

  const option = {
    headers: {'x-api-key': "dONTGMAVVY8v9A85C3Vs7x7id9yvfXB7dn2Idmj5"}
  };

  function getPastTransactions(){
    let accountKey = localStorage.getItem('accountKey');
    const res1 =  axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", {
      accountKey: accountKey
    }, option).then((response) => {
      console.log(response );
    });
//     const resData = res1.data;
//     if (resData) {
//       console.log(resData);
//       return resData;
//     } else {
//       console.log("Bad response");
//       return resData;
//     }
}

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Transaction History </h4>
            <button onClick = {getPastTransactions}>click</button>
            <p className={classes.cardCategoryWhite}>
              Here is your transaction details
            </p>
          </CardHeader>
          <CardBody>
          <table >
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table> 
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
