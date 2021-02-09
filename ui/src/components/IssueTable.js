import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import {
  Button,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
  Table,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const IssueRow = withRouter(
  ({ issue, location: { search }, closeIssue, deleteIssue, index }) => {
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
    const editTooltip = (
      <Tooltip id="edit-tooltip" placement="top">
        Edit Issue
      </Tooltip>
    );

    function onClose(e) {
      e.preventDefault();
      closeIssue(index);
    }
    function onDelete(e) {
      e.preventDefault();
      deleteIssue(index);
    }

    // const closeIssue = (id) => {
    //   console.log("close", id);
    // };
    // const deleteIssue = (id) => {
    //   console.log("delete", id);
    // };

    const tableRow = (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{new Date(issue.created).toLocaleDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? new Date(issue.due).toLocaleDateString() : ""}</td>
        <td>{issue.title}</td>
        <td>
          <LinkContainer to={`/edit/${issue.id}`}>
            <OverlayTrigger delayShow={1000} overlay={editTooltip}>
              <Button bsSize="xsmall">
                <Glyphicon glyph="edit" />
              </Button>
            </OverlayTrigger>
          </LinkContainer>{" "}
          <OverlayTrigger delayShow={1000} overlay={closeTooltip}>
            <Button bsSize="xsmall" onClick={onClose}>
              <Glyphicon glyph="remove" />
            </Button>
          </OverlayTrigger>{" "}
          <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
            <Button bsSize="xsmall" onClick={onDelete}>
              <Glyphicon glyph="trash" />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    );

    return <LinkContainer to={selectLocation}>{tableRow}</LinkContainer>;
  }
);

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
    <Table bordered condensed hover responsive>
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
    </Table>
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
