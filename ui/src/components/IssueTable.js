import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Button, Glyphicon, Tooltip, OverlayTrigger } from "react-bootstrap";

const IssueRow = withRouter(({ 
  issue, 
  location: { search },
closeIssue,
deleteIssue,
index
 }) => {
  const selectLocation = { pathname: `/issues/${issue.id}`, search };
  const closeTooltip = (
    <Tooltip id="close-tooltip" placement="top">
      Close Issue
    </Tooltip>
  );
  const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">
      Delete Issue
    </Tooltip>
  );

  // const closeIssue = (id) => {
  //   console.log("close", id);
  // };
  // const deleteIssue = (id) => {
  //   console.log("delete", id);
  // };

  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{new Date(issue.created).toLocaleDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? new Date(issue.due).toLocaleDateString() : ""}</td>
      <td>{issue.title}</td>
      <td>
        <Link to={`/edit/${issue.id}`}>Edit</Link>
        {" | "}
        <NavLink to={selectLocation}>Select</NavLink>
        {" | "}
        <button type="button" onClick={() => {closeIssue(index)}}>Close</button>
        {" | "}
        <button type="button" onClick={() => {deleteIssue(index)}}>Delete</button>
      </td>
     
    </tr>
  );
});

export default function IssueTable({ issues, closeIssue, deleteIssue }) {

    // console.log(this.props.issues);
    // console.log(this.state.issues);
    const issueRows = issues.map((issue, index) => (
      <IssueRow 
         key={issue.id} 
         issue={issue}
         closeIssue={closeIssue}
         deleteIssue={deleteIssue}
         index={index} 
         />
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

// export default function IssueTable({ issues }) {

//   console.log(issues)

//   const issueRows = issues.map(issue => (
//     <IssueRow key={issue.id} issue={issue} />
//   ));

//   return (
//     <table className="bordered-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Status</th>
//           <th>Owner</th>
//           <th>Created</th>
//           <th>Effort</th>
//           <th>Due Date</th>
//           <th>Title</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {issueRows}
//       </tbody>
//     </table>
//   );
// }
