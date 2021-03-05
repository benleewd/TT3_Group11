import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import APIService from "../services/APIService";

  
class Test extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      data: null
    }
  }

  render(){
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <div>
                <input name="username" onChange={this.handleChange}></input>
                <button onClick={()=>this.handleSubmit("Group11", "r3tdgoOz53DcBbC")}> Testing</button>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 >Simple Table</h4>
              <p >
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Name", "Country", "City", "Salary"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                  ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="primary">
              <h4>
                Table on Plain Background
              </h4>
              <p>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Name", "Country", "City", "Salary"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                  [
                    "4",
                    "Philip Chaney",
                    "$38,735",
                    "Korea, South",
                    "Overland Park"
                  ],
                  [
                    "5",
                    "Doris Greene",
                    "$63,542",
                    "Malawi",
                    "Feldkirchen in Kärnten"
                  ],
                  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
  handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value, error: '' });
	};

  handleSubmit(username, password) {
    // let data = APIService.login(username, password).then(function(result) {
    //   console.log(result);
    //   return result;
    // });
    let login = APIService.login(username, password);
    login.then(res => {
      console.log(res)
      this.setState({'data': res})
    });
    console.log(localStorage.getItem('accountKey'));
    console.log(this.state);
  }
}

export default Test;