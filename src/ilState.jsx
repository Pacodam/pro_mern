//import React, {Component} from 'react';
//import {Fragment} from 'react';

const initialIssues = [
    {
      id: 1,
      status: "New",
      owner: "Ravan",
      effort: 5,
      created: new Date("2018-08-15"),
      due: undefined,
      title: "Error in console when clicking Add",
    },
    {
      id: 2,
      status: "Assigned",
      owner: "Eddie",
      effort: 14,
      created: new Date("2018-08-16"),
      due: new Date("2018-08-30"),
      title: "Missing bottom border on panel",
    },
  ];

//   const sampleIssue = {
//       status: 'New',
//       owner: 'Pieta',
//       title: 'Completion data should be optional'
//   }
  
  class IssueFilter extends React.Component {
    render() {
      return <div>IssueFilter placeholder</div>;
    }
  }
  
  /**stateless component (no constructor, no state, only props), method 1 */
  function IssueTable(props){
      const style = { border: "1px solid silver", padding: 4 };
        const issueRows = props.issues.map(issue => <IssueRow key={issue.id} rowStye={style} issue={issue} />)
        return (
          <table className="bordered-table">
            <thead>
              <tr>
                <th >ID</th>
                <th >Status</th>
                <th >Owner</th>
                <th >Created</th>
                <th >Effort</th>
                <th >Due Date</th>
                <th >Title</th>
              </tr>
            </thead>
            <tbody>
            {issueRows}
            </tbody>
          </table>
        );
  }
 
    /**
     * stateless component, using arrow function
     */
    const IssueRow = (props) => {
        const issue = props.issue;
        return (
          <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.owner}</td>
            <td>{issue.created.toDateString()}</td>
            <td>{issue.effort}</td>
            <td>{issue.due ? issue.due.toDateString() : ""}</td>
            <td>{issue.title}</td> 
          </tr>
        );
    }

  // /**EXAMPLE WITH THIS.PROPS.CHILDREN */
  // class IssueTable extends React.Component {
  //   render() {
  //     const style = { border: "1px solid silver", padding: 4 };
  //     return (
  //       <table style={{ borderCollapse: "collapse" }}>
  //         <thead>
  //           <tr>
  //             <th style={style}>ID</th>
  //             <th style={style}>Title</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <IssueRow rowStyle={style} issue_title="todo1" issue_id={1}>
  //             Error in console when clicking Add
  //           </IssueRow>
  //           <IssueRow rowStyle={style} issue_title="todo2" issue_id={2}>
  //             <div>
  //               Missing <b>bottom</b> border on panel
  //             </div>
  //           </IssueRow>
  //         </tbody>
  //       </table>
  //     );
  //   }
  // }
  
  // class IssueRow extends React.Component {
  //   render() {
  //     const rowStyle = this.props.rowStyle;
  //     return (
  //       <tr>
  //         <td style={rowStyle}>{this.props.issue_id}</td>
  //         <td style={rowStyle}>{this.props.children}</td>
  //       </tr>
  //     );
  //   }
  // }
  /**EXAMPLE WITH THIS.PROPS */
  // class IssueTable extends React.Component {
  //     render() {
  //         const style = {border: "1px solid silver", padding: 4};
  //       return (
  //         <table style={{borderCollapse : "collapse"}}>
  //           <thead>
  //             <tr>
  //               <th style={style}>ID</th>
  //               <th style={style}>Title</th>
  //             </tr>
  //              </thead>
  //             <tbody>
  //               <IssueRow style={style} issue_title="todo1" issue_id={1} />
  //               <IssueRow style={style} issue_title="todo2" issue_id={2} />
  //             </tbody>
  //         </table>
  //       );
  //     }
  //   }
  
  //   class IssueRow extends React.Component {
  //     render() {
  //         const style = this.props.rowStyle;
  //       return (
  //         <tr>
  //           <td style={style}>{this.props.issue_id}</td>
  //           <td style={style}>{this.props.issue_title}</td>
  //         </tr>
  //       );
  //     }
  //   }
  
  class IssueAdd extends React.Component {
    constructor(){
        super();
        // setTimeout(() => {
        //     this.props.createIssue(sampleIssue);
        // }, 2000);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //at this point, we are using the conventional way of taking user
    //  input, using named inputs and getting their value using the value 
    //  property of the DOM element. react has another way of dealing with user
    //   input by way of controlled components, where the value of the input is 
    //   tied to a state variable. We’ll explore this in later chapters
    handleSubmit(e){
      e.preventDefault();
      const form = document.forms.issueAdd;
      const issue = {
          owner: form.owner.value, title: form.title.value, status: 'New'}

      this.props.createIssue(issue);
      form.owner.value = ""; form.title.value = "";
    }
    render() {
      return (
       <form name="issueAdd" onSubmit={this.handleSubmit}>
         <input type="text" name="owner" placeholder="Owner" required={true} />
         <input type="text" name="title" placeholder="Title" required={true} />
         <button>Add</button>
       </form>
      )
    }
  }

  class IssueList extends React.Component {
    constructor(){
        super();
        this.state = {issues : []};
       this.createIssue = this.createIssue.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
            this.setState({issues : initialIssues});
        }, 500);
    }

    createIssue(issue) {
        issue.id = this.state.issues.length + 1;
        issue.created = new Date();
        //take a look at inmutable.js for making copys of objects
        const newIssueList = this.state.issues.slice();
        newIssueList.push(issue);
        this.setState({ issues : newIssueList});
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
  
  const element = <IssueList />;
  
  ReactDOM.render(element, document.getElementById("contents"));
  