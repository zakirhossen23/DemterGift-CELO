"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/CreateEvents/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/CreateEvents/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");











function CreateEvents() {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_7__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Description',
    id: ''
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      EventDescription = _UseFormInput4[0],
      EventDescriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      EventDate = _UseFormInput6[0],
      EventDateInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Goal in CELO Dollar (CUSD)',
    id: 'goal'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput7, 2),
      EventGoal = _UseFormInput8[0],
      EventGoalInput = _UseFormInput8[1];

  function createEvent() {
    return _createEvent.apply(this, arguments);
  }

  function _createEvent() {
    _createEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              createdObject = {
                title: 'Asset Metadata',
                type: 'object',
                properties: {
                  Title: {
                    type: 'string',
                    description: EventTitle
                  },
                  Description: {
                    type: 'string',
                    description: EventDescription
                  },
                  Date: {
                    type: 'string',
                    description: EventDate
                  },
                  Goal: {
                    type: 'string',
                    description: EventGoal
                  },
                  logo: {
                    type: 'string',
                    description: EventLogo
                  },
                  wallet: {
                    type: 'string',
                    description: window.ethereum.selectedAddress
                  },
                  typeimg: {
                    type: 'string',
                    description: "Event"
                  }
                }
              };
              _context.prev = 1;
              _context.next = 4;
              return contract.createEvent(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject));

            case 4:
              result = _context.sent;
              console.log(result);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              window.location.href = '/login';

            case 11:
              window.location.href = '/donation';

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));
    return _createEvent.apply(this, arguments);
  }

  var _UseFormInput9 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Logo Link',
    id: 'logo'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput9, 2),
      EventLogo = _UseFormInput10[0],
      EventLogoInput = _UseFormInput10[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_head__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, "Create Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: "Create Event"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      padding: "0 37%",
      "paddingTop": 0,
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      width: "500px",
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "0px 0px 30px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Create Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event Title"), EventTitleInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event End Date"), EventDateInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event Goal"), EventGoalInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event Logo Link"), EventLogoInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      margin: "17px 0 0px 0px",
      width: "100%"
    },
    onClick: createEvent
  }, "Create Event"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "397ba7bfcbc67d3d9c2e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjNhMjljNDM2M2MxMjU2MWQ3ZmYxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTyxZQUFULEdBQXdCO0FBR25DLHFCQUFvQ0QsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUUUsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUVBLHNCQUFzQ0osK0VBQVksQ0FBQztBQUMvQ0ssSUFBQUEsWUFBWSxFQUFFLEVBRGlDO0FBRS9DQyxJQUFBQSxJQUFJLEVBQUUsTUFGeUM7QUFHL0NDLElBQUFBLFdBQVcsRUFBRSxhQUhrQztBQUkvQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSjJDLEdBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsZUFBbkI7O0FBTUEsdUJBQWtEViwrRUFBWSxDQUFDO0FBQzNESyxJQUFBQSxZQUFZLEVBQUUsRUFENkM7QUFFM0RDLElBQUFBLElBQUksRUFBRSxNQUZxRDtBQUczREMsSUFBQUEsV0FBVyxFQUFFLG1CQUg4QztBQUkzREMsSUFBQUEsRUFBRSxFQUFFO0FBSnVELEdBQUQsQ0FBOUQ7QUFBQTtBQUFBLE1BQU9HLGdCQUFQO0FBQUEsTUFBeUJDLHFCQUF6Qjs7QUFNQSx1QkFBb0NaLCtFQUFZLENBQUM7QUFDN0NLLElBQUFBLFlBQVksRUFBRSxFQUQrQjtBQUU3Q0MsSUFBQUEsSUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsSUFBQUEsV0FBVyxFQUFFLGlCQUhnQztBQUk3Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnlDLEdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9LLFNBQVA7QUFBQSxNQUFrQkMsY0FBbEI7O0FBTUEsdUJBQW9DZCwrRUFBWSxDQUFDO0FBQzdDSyxJQUFBQSxZQUFZLEVBQUUsRUFEK0I7QUFFN0NDLElB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RTtBQUFFQSxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsVUFBVSxFQUFFLGFBQTlCO0FBQTZDRixNQUFBQSxPQUFPLEVBQUUsTUFBdEQ7QUFBOERHLE1BQUFBLFlBQVksRUFBRSxLQUE1RTtBQUFtRkMsTUFBQUEsTUFBTSxFQUFFLE1BQTNGO0FBQW1HQyxNQUFBQSxNQUFNLEVBQUU7QUFBM0c7QUFBWixrQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUFaLGtCQUNJLDRFQURKLENBREosZUFLSTtBQUFLLFNBQUssRUFBRTtBQUFFQSxNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUFaLGtCQUNJLDJFQURKLEVBRUtuQyxlQUZMLENBTEosZUFVSTtBQUFLLFNBQUssRUFBRTtBQUFFbUMsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSSw4RUFESixFQUVLL0IsY0FGTCxDQVZKLGVBY0k7QUFBSyxTQUFLLEVBQUU7QUFBRStCLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0ksMEVBREosRUFFSzdCLGNBRkwsQ0FkSixlQWtCSTtBQUFLLFNBQUssRUFBRTtBQUFFNkIsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSSwrRUFESixFQUVLUCxjQUZMLENBbEJKLGVBdUJJLGlEQUFDLCtEQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVPLE1BQUFBLE1BQU0sRUFBRSxnQkFBVjtBQUE0QkwsTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBQWY7QUFDSSxXQUFPLEVBQUV2QjtBQURiLG9CQXZCSixDQURKLENBREosQ0FORixDQUFGLENBREo7QUE0Q0g7Ozs7Ozs7O1VDMUlELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvQ3JlYXRlRXZlbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XG5cblxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblxuICAgIGNvbnN0IFtFdmVudFRpdGxlLCBFdmVudFRpdGxlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgVGl0bGUnLFxuICAgICAgICBpZDogJydcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnREZXNjcmlwdGlvbiwgRXZlbnREZXNjcmlwdGlvbklucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IERlc2NyaXB0aW9uJyxcbiAgICAgICAgaWQ6ICcnXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50RGF0ZSwgRXZlbnREYXRlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IEVuZCBEYXRlICcsXG4gICAgICAgIGlkOiAnZW5kZGF0ZScsXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50R29hbCwgRXZlbnRHb2FsSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgR29hbCBpbiBDRUxPIERvbGxhciAoQ1VTRCknLFxuICAgICAgICBpZDogJ2dvYWwnLFxuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnQoKSB7XG5cblxuICAgICAgICBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdBc3NldCBNZXRhZGF0YScsXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBUaXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50VGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBEYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogRXZlbnREYXRlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgR29hbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50R29hbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9nbzoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50TG9nb1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2FsbGV0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZWltZzoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRXZlbnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2ZW50KFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKCcvbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgnL2RvbmF0aW9uJyk7XG4gICAgfVxuICAgIGNvbnN0IFtFdmVudExvZ28sIEV2ZW50TG9nb0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IExvZ28gTGluaycsXG4gICAgICAgIGlkOiAnbG9nbydcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD48PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBFdmVudDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNyZWF0ZSBFdmVudFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6IFwiMCAzNyVcIiwgXCJwYWRkaW5nVG9wXCI6IDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MDBweFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAzMHB4IDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5DcmVhdGUgRXZlbnQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBUaXRsZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50VGl0bGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgRW5kIERhdGU8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudERhdGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IEdvYWw8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudEdvYWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IExvZ28gTGluazwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50TG9nb0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMzk3YmE3YmZjYmM2N2QzZDljMmVcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJSb3ciLCJDb2wiLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJ1c2VDb250cmFjdCIsIkNyZWF0ZUV2ZW50cyIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiRXZlbnRUaXRsZSIsIkV2ZW50VGl0bGVJbnB1dCIsIkV2ZW50RGVzY3JpcHRpb24iLCJFdmVudERlc2NyaXB0aW9uSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsIkV2ZW50R29hbCIsIkV2ZW50R29hbElucHV0IiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiVGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uIiwiRGF0ZSIsIkdvYWwiLCJsb2dvIiwiRXZlbnRMb2dvIiwid2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJ0eXBlaW1nIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwiaHJlZiIsIkV2ZW50TG9nb0lucHV0IiwicGFkZGluZyIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=