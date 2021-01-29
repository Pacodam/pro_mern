import React, {Component} from 'react';

export default class IssueAdd extends Component {
    constructor() {
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
    handleSubmit(e) {
      e.preventDefault();
      const form = document.forms.issueAdd;
      const issue = {
        owner: form.owner.value,
        title: form.title.value,
        status: "New",
      };
  
      this.props.createIssue(issue);
      form.owner.value = "";
      form.title.value = "";
    }
    render() {
      return (
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" required={true} />
          <input type="text" name="title" placeholder="Title" required={true} />
          <button>Add</button>
        </form>
      );
    }
  }