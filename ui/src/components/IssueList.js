import React, { Component } from "react";
import IssueFilter from "./IssueFilter";
import IssueTable from "./IssueTable";
import IssueAdd from "./IssueAdd";
import IssueDataService from "../services/issue.service";
import IssueDetail from "./IssueTable";
import { Route } from "react-router-dom";
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
    console.log("in did update");
    const {
      location: { search: prevSearch },
    } = prevProps;
    const {
      location: { search },
    } = this.props;
    if (prevSearch !== search) {
      this.loadData();
      console.log("loading data in did update");
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

    const effortMin = parseInt(params.get("effortMin"), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get("effortMax"), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;

    await IssueDataService.getAll(vars)
      .then((response) => {
        console.log("response", response);
        if (response.data) {
          this.setState({
            issues: response.data,
          });
          // console.log(response.data);
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
    this.addIssue(issue);
    this.loadData();
  }

  componentDidMount;

  render() {
    const { issues } = this.state;

    const { match } = this.props;

    return (
      <React.Fragment>
        <h1>IssueList tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <hr />
        <Route path={`${match.path}/:id`} component={IssueDetail} />
      </React.Fragment>
    );
  }
}
