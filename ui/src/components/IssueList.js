import React, {Component} from 'react';
import IssueFilter from './IssueFilter';
import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';
import IssueDataService from '../services/issue.service';

//const api = window.ENV.UI_API_ENDPOINT; //TODO: environment variables

export default class IssueList extends Component {
    constructor() {
      super();
      this.state = { issues: [] };
      //this.createIssue = this.createIssue.bind(this);
      this.loadData = this.loadData.bind(this);
    }
  
    componentDidMount() {
      this.loadData();
    }
  
    
    // async loadData() {
    //   await fetch(api + "/issues")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.setState({ issues: data.issues });
    //     });
    // }
  
    createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date().toDateString();
      //take a look at inmutable.js for making copys of objects
      const newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      //this.setState({ issues: newIssueList });
      this.addIssue(issue);
      this.loadData();
    }
  
    // async addIssue(issue) {
    //   await fetch(api + "/issue", {
    //     method: "POST",
    //     body: JSON.stringify(issue),
    //     headers: { "Content-type": "application/json; charset=UTF-8" },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json))
    //     .catch((err) => console.log(err));
    // }
  
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