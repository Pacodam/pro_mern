import React, {Component} from 'react';



// const dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

// function jsonDateReviver(key, value) {
//   if (dateRegex.test(value)) return new Date(value);
//   return value;
// }

export default class IssueRow extends Component {
  render() {
    //     The recommended string format for transferring Date objects in a JSON is the ISO 8601 format. It is
    // concise and widely accepted. It is also the same format used by JavaScript Date’s toJSON() method. In this
    // format, a date such as 26 January 2019, 2:30 PM UTC would be written as 2019-01-26T14:30:00.000Z. It
    // is easy and unambiguous to convert a date to this string using either the toJSON() or the toISOString()
    // methods of Date, as well as to convert it back to a date using new Date(dateString).
    const issue = this.props.issue;
    // console.log(issue.created);
    // console.log(typeof issue.created);
    // console.log("estoc:", new Date(issue.created).toLocaleDateString())
    // console.log(new Date().toJSON());
    // console.log(new Date().toTimeString());
    // console.log(new Date().toLocaleDateString());
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{new Date(issue.created).toLocaleDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? new Date(issue.due).toLocaleDateString() : ""}</td>
        <td>{issue.title}</td>
        <td><a href={`/#/edit/${issue.id}`}>Edit</a></td>
      </tr>
    );
  }
}