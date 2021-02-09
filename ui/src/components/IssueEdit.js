import React, { Component } from "react";
import { Link } from "react-router-dom";
import IssueDataService from "../services/issue.service";
import NumInput from "./specControllers/NumInput";
import DateInput from "./specControllers/DateInput";
import TextInput from "./specControllers/TextInput";
import { LinkContainer } from "react-router-bootstrap";
import {
  Col,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
  Alert,
} from "react-bootstrap";

export default class IssueEdit extends Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      idNotFound: true,
      showingValidation: false,
      invalidFields: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
    this.dismissValidation = this.dismissValidation.bind(this);
    this.showValidation = this.showValidation.bind(this);
  }

  componentDidMount() {
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
        issue.due = issue.due !== null ? new Date(issue.due) : "";
        issue.effort = issue.effort != null ? issue.effort.toString() : "";
        issue.owner = issue.owner != null ? issue.owner : "";
        issue.description = issue.description != null ? issue.description : "";
        // console.log("issue due in load data", issue.due)
        console.log("issue", issue);
        this.setState({ issue: issue });
        //   this.setState(prevState => ({
        //     issue : {...prevState.issue},
        // }))

        //delete then  new Date(issue.created).toLocaleDateString()
        // this.setState({
        //   issue: response.data,
        //   idNotFound : false,
        // });
        // console.log("data:" , response.data);
        console.log("received ", this.state.issue);
      })
      .catch((e) => {
        //TODO: good practices in manage these kind of things
        //TODO: footer: correlation of prev-next using id
        //TODO: validation alert not working properly (solve dateInput first)
        this.setState({
          idNotFound: true,
        });
        console.log(e);
      });
  }

  onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState((prevState) => ({
      issue: { ...prevState.issue, [name]: value },
    }));
  }

  async handleSubmit(e) {
    //TODO e.preventDefault()
    e.preventDefault();
    this.showValidation();
    const { issue } = this.state;

    await IssueDataService.update(issue._id, issue)
      .then((response) => {
        this.setState({ issue: issue });
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

  onValidityChange(event, valid) {
    const { name } = event.target;
    this.setState((prevState) => {
      const invalidFields = { ...prevState.invalidFields, [name]: !valid };
      if (valid) delete invalidFields[name];
      return { invalidFields };
    });
  }

  showValidation() {
    this.setState({ showingValidation: true });
  }
  dismissValidation() {
    this.setState({ showingValidation: false });
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

    console.log("due value", this.state.issue.due);
    console.log("due value: ", due);
    console.log("type", typeof due);

    const { invalidFields, showingValidation } = this.state;
    let validationMessage;
    if (Object.keys(invalidFields).length !== 0 && showingValidation) {
      validationMessage = (
        <Alert bsStyle="danger" onDismiss={this.dismissValidation}>
          Please correct invalid fields before submitting.
        </Alert>
      );
    }

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>{`Editing issue: ${id}`}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal onSubmit={this.handleSubmit}>
            {/*Created*/}
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Created
              </Col>
              <Col sm={9}>
                <FormControl.Static>{created}</FormControl.Static>
              </Col>
            </FormGroup>

            {/*Status*/}
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Status
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass="select"
                  name="status"
                  value={status}
                  onChange={this.onChange}
                >
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Closed">Closed</option>
                </FormControl>
              </Col>
            </FormGroup>

            {/*Owner*/}
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Owner
              </Col>
              <Col sm={9}>
                <FormControl
                  name="owner"
                  value={owner}
                  onChange={this.onChange}
                  key={id}
                />
              </Col>
            </FormGroup>

            {/*Effort*/}
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Effort
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={NumInput}
                  onValidityChange={this.onValidityChange}
                  name="effort"
                  value={effort}
                  onChange={this.onChange}
                  key={id}
                />
                <FormControl.Feedback />
              </Col>
            </FormGroup>

            {/*Due*/}

            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Due
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={DateInput}
                  onValidityChange={this.onValidityChange}
                  name="due"
                  value={due}
                  onChange={this.onChange}
                  key={id}
                />
                <FormControl.Feedback />
              </Col>
            </FormGroup>

            {/*title*/}
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Title
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={TextInput}
                  onValidityChange={this.onValidityChange}
                  key={id}
                  size={50}
                  name="title"
                  value={title}
                  onChange={this.onChange}
                />
                <FormControl.Feedback />
              </Col>
            </FormGroup>

            {/*description*/}
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Description
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={TextInput}
                  key={id}
                  rows={4}
                  cols={50}
                  tag="textarea"
                  name="description"
                  value={description}
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>

            {/*submit*/}
            <FormGroup>
              <Col smOffset={3} sm={6}>
                <ButtonToolbar>
                  <Button bsStyle="primary" type="submit">
                    Submit
                  </Button>
                  <LinkContainer to="/issues">
                    <Button bsStyle="link">Back</Button>
                  </LinkContainer>
                </ButtonToolbar>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={3} sm={9}>
                {validationMessage}
              </Col>
            </FormGroup>
          </Form>
        </Panel.Body>

        {/* Footer TODO  */}
        <Panel.Footer>
          <Link to={`/edit/${parseInt(id, 10) - 1}`}>Prev</Link>
          {" | "}
          <Link to={`/edit/${parseInt(id, 10) + 1}`}>Next</Link>
        </Panel.Footer>
      </Panel>
    );
  }
}
