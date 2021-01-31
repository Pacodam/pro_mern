import React, {Component} from 'react';

export default class IssueFilter extends Component {
    render() {
      return (
      <div>
      {/*example of query parameters */}
      <a href="/#/issues">All Issues</a>
      {' | '}
      <a href="/#/issues?status=New">New Issues</a>
      {' | '}
      <a href="/#/issues?status=Assigned">Assigned Issues</a>
      </div>
      )
  }
}

