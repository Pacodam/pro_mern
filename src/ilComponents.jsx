//import React, {Component} from 'react';
//import {Fragment} from 'react';

const issues = [
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

class IssueFilter extends React.Component {
  render() {
    return <div>IssueFilter placeholder</div>;
  }
}

/**EXAMPLE WITH DYNAMIC COMPOSITION */
class IssueTable extends React.Component {
    render() {
      const style = { border: "1px solid silver", padding: 4 };
      const issueRows = issues.map(issue => <IssueRow key={issue.id} rowStye={style} issue={issue} />)
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
  }
  
  class IssueRow extends React.Component {
    render() {
      const issue = this.props.issue;
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
  render() {
    return <div>IssueAdd placeholder</div>;
  }
}
class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>IssueList tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById("contents"));
