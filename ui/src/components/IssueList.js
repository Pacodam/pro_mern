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

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;
    const {
      location: { search },
    } = this.props;
    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    //parsing the query string
    const {
      location: { search },
    } = this.props;
    const params = new URLSearchParams(search);

    const vars = {};
    if (params.get("status")) vars.status = params.get("status");

    await IssueDataService.getAll(vars)
      .then((response) => {
        //console.log("response", response);
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
        //console.log(response.data);
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
