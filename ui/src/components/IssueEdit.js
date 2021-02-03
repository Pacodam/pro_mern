import React, { Component } from "react";
import { Link } from "react-router-dom";
import IssueDataService from "../services/issue.service";
import NumInput from './specControllers/NumInput';
import DateInput from './specControllers/DateInput';
import TextInput from './specControllers/TextInput';

export default class IssueEdit extends Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      idNotFound: true,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //TODO: loadData doesn't need to be binded?
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    console.log("component mount edit")
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id: prevId },
      },
    } = prevProps;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }

  async loadData() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    console.log(id);
    await IssueDataService.get(id)
      .then((response) => {

       const issue = response.data;
    
          issue.created = new Date(issue.created).toDateString();
          issue.due = issue.due !== null ? new Date(issue.due) : '';
          issue.effort = issue.effort != null ? issue.effort.toString() : '';
          issue.owner = issue.owner != null ? issue.owner : '';
          issue.description = issue.description != null ? issue.description : '';
          // console.log("issue due in load data", issue.due)
           console.log("issue", issue);
          this.setState({ issue : issue });
        //   this.setState(prevState => ({
        //     issue : {...prevState.issue},
        // }))

     
          
          //delete then  new Date(issue.created).toLocaleDateString()
        // this.setState({
        //   issue: response.data,
        //   idNotFound : false,
        // });
        // console.log("data:" , response.data);
        console.log("received " , this.state.issue)
      })
      .catch((e) => {
        //TODO: good practices in manage these kind of things
        this.setState({
          idNotFound : true,
        })
        console.log(e); 
      });
  }

  onChange(event, naturalValue) {
      const { name, value : textValue } = event.target;
      const value = naturalValue === undefined ? textValue : naturalValue;
      this.setState(prevState => ({
          issue: { ...prevState.issue, [name] : value},
      }))
  }

  async handleSubmit(e) {
    //TODO e.preventDefault()
      e.preventDefault();
      const { issue } = this.state;

      await IssueDataService.update(issue._id, issue)
      .then((response) => {
        this.setState({issue : issue})
        // this.setState((prevState) => ({
        //   currentTutorial: {
        //     ...prevState.currentTutorial,
        //     published: status,
        //   },
        // }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
      
  render() {
    const {
      issue: { id },
    } = this.state;
    const {
      match: {
        params: { id: propsId },
      },
    } = this.props;
    if (id === null) {
      if (propsId === null) {
        return <h3>{`Issue with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }

    const {
      issue: { title, status },
    } = this.state;
    const {
      issue: { owner, effort, description },
    } = this.state;
    const {
      issue: { created, due },
    } = this.state;

    console.log("due value", this.state.issue.due)
    console.log("due value: ", due);
    console.log("type", typeof due)


    return (
      <div>
      {this.state.idNotFound}
      <form onSubmit={this.handleSubmit}>
        <h3>{`Editing issue: ${id}`}</h3>
        <table>
          <tbody>
            <tr>
              <td>Created:</td>
              <td>{created}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <select name="status" value={status} onChange={this.onChange}>
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Owner:</td>
              <td>
                <TextInput key={id} name="owner" value={owner} onChange={this.onChange} />
              </td>
            </tr>
            <tr>
              <td>Effort:</td>
              <td>
                <NumInput name="effort" value={effort} onChange={this.onChange} key={id} />
              </td>
            </tr>
            <tr>
              <td>Due:</td>
              <td>
                <DateInput name="due" value={due} onChange={this.onChange} />
              </td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>
                <TextInput 
                  key={id}
                  size={50}
                  name="title"
                  value={title}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <TextInput 
                  tag="textarea"
                  key={id}
                  rows={8}
                  cols={50}
                  name="description"
                  value={description}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to={`/edit/${parseInt(id ,10) - 1}`}>Prev</Link>
        {" | "}
        <Link to={`/edit/${parseInt(id ,10) + 1}`}>Next</Link>
      </form>
      </div>
    );
  }
}
