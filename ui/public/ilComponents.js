"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

//import IssueDataService from "../services/issue.service";
// const issues = [
//   {
//     id: 1,
//     status: "New",
//     owner: "Ravan",
//     effort: 5,
//     created: new Date("2018-08-15"),
//     due: undefined,
//     title: "Error in console when clicking Add",
//   },
//   {
//     id: 2,
//     status: "Assigned",
//     owner: "Eddie",
//     effort: 14,
//     created: new Date("2018-08-16"),
//     due: new Date("2018-08-30"),
//     title: "Missing bottom border on panel",
//   },
// ];
var api = window.ENV.UI_API_ENDPOINT;

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
/**EXAMPLE WITH DYNAMIC COMPOSITION */


var IssueTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueTable, _React$Component2);

  var _super2 = _createSuper(IssueTable);

  function IssueTable(props) {
    var _this;

    _classCallCheck(this, IssueTable);

    _this = _super2.call(this, props);
    _this.state = {
      issues: []
    };
    return _this;
  }

  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var style = {
        border: "1px solid silver",
        padding: 4
      };
      var issueRows = this.props.issues.map(function (issue) {
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
  }]);

  return IssueTable;
}(React.Component); //Date manipulation needs a review!


var dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

var IssueRow = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueRow, _React$Component3);

  var _super3 = _createSuper(IssueRow);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _super3.apply(this, arguments);
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      //     The recommended string format for transferring Date objects in a JSON is the ISO 8601 format. It is
      // concise and widely accepted. It is also the same format used by JavaScript Date’s toJSON() method. In this
      // format, a date such as 26 January 2019, 2:30 PM UTC would be written as 2019-01-26T14:30:00.000Z. It
      // is easy and unambiguous to convert a date to this string using either the toJSON() or the toISOString()
      // methods of Date, as well as to convert it back to a date using new Date(dateString).
      var issue = this.props.issue; // console.log(issue.created);
      // console.log(typeof issue.created);
      // console.log("estoc:", new Date(issue.created).toLocaleDateString())
      // console.log(new Date().toJSON());
      // console.log(new Date().toTimeString());
      // console.log(new Date().toLocaleDateString());

      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, new Date(issue.created).toLocaleDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? new Date(issue.due).toLocaleDateString() : ""), /*#__PURE__*/React.createElement("td", null, issue.title));
    }
  }]);

  return IssueRow;
}(React.Component); // /**EXAMPLE WITH THIS.PROPS.CHILDREN */
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


var IssueAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(IssueAdd, _React$Component4);

  var _super4 = _createSuper(IssueAdd);

  function IssueAdd() {
    var _this2;

    _classCallCheck(this, IssueAdd);

    _this2 = _super4.call(this); // setTimeout(() => {
    //     this.props.createIssue(sampleIssue);
    // }, 2000);

    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
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
        status: "New"
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

var IssueList = /*#__PURE__*/function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  var _super5 = _createSuper(IssueList);

  function IssueList() {
    var _this3;

    _classCallCheck(this, IssueList);

    _this3 = _super5.call(this);
    _this3.state = {
      issues: []
    };
    _this3.createIssue = _this3.createIssue.bind(_assertThisInitialized(_this3));
    _this3.loadData = _this3.loadData.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    } // async loadData() {
    //   // setTimeout(() => {
    //   //     this.setState({issues : initialIssues});
    //   // }, 500);
    //   //  console.log("retrieve");
    //   // const response = await fetch("http://localhost:3000/api/issues");
    //   // console.log(response);
    //   // const result =  response.json();
    //   // this.setState({ issues: result.data.issues });
    //   await fetch("http://localhost:3000/api/issues")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       //console.log(data);
    //       this.setState({ issues: data.issues });
    //     });
    // }

  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api + "/issues").then(function (response) {
                  return response.json();
                }).then(function (data) {
                  _this4.setState({
                    issues: data.issues
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "createIssue",
    value: function createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date().toDateString(); //take a look at inmutable.js for making copys of objects

      var newIssueList = this.state.issues.slice();
      newIssueList.push(issue); //this.setState({ issues: newIssueList });

      this.addIssue(issue);
      this.loadData();
    }
  }, {
    key: "addIssue",
    value: function () {
      var _addIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(issue) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api + "/issue", {
                  method: "POST",
                  body: JSON.stringify(issue),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                }).then(function (response) {
                  return response.json();
                }).then(function (json) {
                  return console.log(json);
                }).catch(function (err) {
                  return console.log(err);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addIssue(_x) {
        return _addIssue.apply(this, arguments);
      }

      return addIssue;
    }()
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