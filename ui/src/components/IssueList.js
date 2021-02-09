import React, { Component } from "react";
import IssueFilter from "./IssueFilter";
import IssueTable from "./IssueTable";
//import IssueAdd from "./IssueAdd";
import IssueDataService from "../services/issue.service";
import DeletedIssueService from "../services/deleted_issue.service";
import IssueDetail from "./IssueTable";
import { Route } from "react-router-dom";
import Toast from "./specControllers/Toast";

import { Label, Panel } from "react-bootstrap";

//const api = window.ENV.UI_API_ENDPOINT; //TODO: environment variables

export default class IssueList extends Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      toastVisible: false,
      toastMessage: " ",
      toastType: "success",
    };

    // this.createIssue = this.createIssue.bind(this);
    this.loadData = this.loadData.bind(this);
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showSuccess.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
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

  // async addIssue(issue) {
  //   await IssueDataService.create(issue)
  //     .then((response) => {
  //       //console.log(response.data);
  //       //TODO: after refactoring fetching to better way of work, end toasts in the rest of places
  //       this.showSuccess("Issue created");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       this.showError("Problem creating new issue");
  //     });
  // }

  // //received from IssueAdd (child)
  // createIssue(issue) {
  //   issue.id = this.state.issues.length + 1;
  //   issue.created = new Date().toDateString();
  //   //take a look at inmutable.js for making copys of objects
  //   this.addIssue(issue);
  //   this.loadData();
  // }

  async closeIssue(index) {
    const issue = this.state.issues[index];
    //TODO: statuses as enum list
    issue.status = "Closed";
    await IssueDataService.update(issue._id, issue)
      //TODO: in book, the response is the object modified
      .then((response) => {
        this.setState((prevState) => {
          const newList = [...prevState.issues];
          //TODO: in book, the response is the object modified
          //newList[index] = data.issueUpdate;
          newList[index] = issue;
          return { issues: newList };
          //console.log(response.data);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async deleteIssue(index) {
    const _id = this.state.issues[index]._id;
    let responseIssue = {};

    await IssueDataService.delete(_id)
      .then((response) => {
        console.log(response.data);
        responseIssue = response.data;
      })
      .catch((e) => {
        console.log(e);
      });

    if (responseIssue !== undefined) {
      await DeletedIssueService.create(responseIssue)
        .then((response) => {
          console.log(response.data);
          //TODO better set state
          this.loadData();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "success",
    });
  }
  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "danger",
    });
  }
  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const { issues } = this.state;
    console.log("this.props", this.props);
    const { match } = this.props;
    console.log("match", match);
    const { toastVisible, toastMessage, toastType } = this.state;

    return (
      <React.Fragment>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Filter</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <IssueFilter />
          </Panel.Body>
        </Panel>
        <IssueTable
          issues={issues}
          closeIssue={this.closeIssue}
          deleteIssue={this.deleteIssue}
        />

       {/* <IssueAdd createIssue={this.createIssue} /> */}

        <Route path={`${match.path}/:id`} component={IssueDetail} />
        <Toast
showing={toastVisible}
onDismiss={this.dismissToast}
bsStyle={toastType}
>
{toastMessage}
</Toast>
      </React.Fragment>
    );
  }
}
