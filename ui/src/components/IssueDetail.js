import React, { Component } from 'react';
import IssueDataService from '../services/issue.service';

export default class IssueDetail extends Component{
    constructor(props){
        super(props);
        this.state = { issue : {} };
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { id: prevId } } } = prevProps;
        const { match: { params: { id } } } = this.props;
        if (prevId !== id) {
        this.loadData();
     }
    }

    async loadData(){
        const { match: { params: { id } } } = this.props;
        console.log(id);
        await IssueDataService.get(id)
      .then((response) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }


    render(){
        const { issue: { description }} = this.state;
        return(
            <div>
              <h3>Description</h3>
              <pre>{description}</pre>
            </div>
        )
    }
}
