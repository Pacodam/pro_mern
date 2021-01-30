import React, { Component } from "react";
import IssueFilter from "./IssueFilter";
import IssueTable from "./IssueTable";
import IssueAdd from "./IssueAdd";
import IssueDataService from "../services/issue.service";

//const api = window.ENV.UI_API_ENDPOINT; //TODO: environment variables

export default class IssueList extends Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    await IssueDataService.getAll()
      .then((response) => {
        console.log("response", response);
        if (response.data) {
          this.setState({
            issues: response.data,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async addIssue(issue) {
    await IssueDataService.create(issue)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //received from IssueAdd (child)
  createIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date().toDateString();
    //take a look at inmutable.js for making copys of objects
    console.log("issue:", issue);
    this.addIssue(issue);
    this.loadData();
  }

  render() {
    return (
      <React.Fragment>
        <h1>IssueList tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </React.Fragment>
    );
  }
}
