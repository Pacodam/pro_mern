"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//import React, {Component} from 'react';
//import {Fragment} from 'react';
var initialIssues = [{
  id: 1,
  status: "New",
  owner: "Ravan",
  effort: 5,
  created: new Date("2018-08-15"),
  due: undefined,
  title: "Error in console when clicking Add"
}, {
  id: 2,
  status: "Assigned",
  owner: "Eddie",
  effort: 14,
  created: new Date("2018-08-16"),
  due: new Date("2018-08-30"),
  title: "Missing bottom border on panel"
}]; //   const sampleIssue = {
//       status: 'New',
//       owner: 'Pieta',
//       title: 'Completion data should be optional'
//   }

var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  var _super = _createSuper(IssueFilter);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _super.apply(this, arguments);
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "IssueFilter placeholder");
    }
  }]);

  return IssueFilter;
}(React.Component);
/**stateless component (no constructor, no state, only props), method 1 */


function IssueTable(props) {
  var style = {
    border: "1px solid silver",
    padding: 4
  };
  var issueRows = props.issues.map(function (issue) {
    return /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      rowStye: style,
      issue: issue
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
}
/**
 * stateless component, using arrow function
 */


var IssueRow = function IssueRow(props) {
  var issue = props.issue;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ""), /*#__PURE__*/React.createElement("td", null, issue.title));
}; // /**EXAMPLE WITH THIS.PROPS.CHILDREN */
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


var IssueAdd = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueAdd, _React$Component2);

  var _super2 = _createSuper(IssueAdd);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _super2.call(this); // setTimeout(() => {
    //     this.props.createIssue(sampleIssue);
    // }, 2000);

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  } //at this point, we are using the conventional way of taking user
  //  input, using named inputs and getting their value using the value 
  //  property of the DOM element. react has another way of dealing with user
  //   input by way of controlled components, where the value of the input is 
  //   tied to a state variable. We’ll explore this in later chapters


  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        owner: form.owner.value,
        title: form.title.value,
        status: 'New'
      };
      this.props.createIssue(issue);
      form.owner.value = "";
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner",
        required: true
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title",
        required: true
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueList = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueList, _React$Component3);

  var _super3 = _createSuper(IssueList);

  function IssueList() {
    var _this2;

    _classCallCheck(this, IssueList);

    _this2 = _super3.call(this);
    _this2.state = {
      issues: []
    };
    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          issues: initialIssues
        });
      }, 500);
    }
  }, {
    key: "createIssue",
    value: function createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date(); //take a look at inmutable.js for making copys of objects

      var newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      this.setState({
        issues: newIssueList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "IssueList tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
        issues: this.state.issues
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById("contents"));