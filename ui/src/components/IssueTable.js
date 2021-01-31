import React, {Component} from 'react';
import IssueRow from './IssueRow.js';

export default class IssueTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        issues: [],
      };
    }
  
    render() {
      const style = { border: "1px solid silver", padding: 4 };
      const issueRows = this.props.issues.map((issue) => (
        <IssueRow key={issue.id} rowStye={style} issue={issue} />
      ));
      return (
        <table className="bordered-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Created</th>
              <th>Effort</th>
              <th>Due Date</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{issueRows}</tbody>
        </table>
      );
    }
  }

//   /**EXAMPLE WITH THIS.PROPS.CHILDREN */
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