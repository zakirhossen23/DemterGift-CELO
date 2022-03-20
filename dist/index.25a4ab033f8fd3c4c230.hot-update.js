"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @harmony-js/utils */ "./node_modules/@harmony-js/utils/dist/index.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_harmony_js_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");










function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      contract = _ref.contract,
      senderAddress = _ref.senderAddress,
      tokenId = _ref.tokenId,
      eventId = _ref.eventId,
      type = _ref.type,
      Highestbid = _ref.Highestbid;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  function activateWarningModal() {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert("Amount cannot be under ".concat(Highestbid, " CELO Dollar (CUSD)"));
  }

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var tokenUri, parsed, currentDate, createdObject, CUSDinFull, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(Amount < Highestbid)) {
                _context.next = 3;
                break;
              }

              activateWarningModal();
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return contract.tokenURI(tokenId);

            case 5:
              tokenUri = _context.sent;
              _context.next = 8;
              return JSON.parse(tokenUri);

            case 8:
              parsed = _context.sent;

              if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
                parsed['properties']['price']['description'] = Amount;
                parsed['properties']['higherbidadd']['description'] = senderAddress;
              }

              currentDate = new Date();
              createdObject = {
                title: 'Asset Metadata Bids',
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    description: senderAddress
                  },
                  bid: {
                    type: 'string',
                    description: Amount
                  },
                  time: {
                    type: 'string',
                    description: currentDate
                  }
                }
              };
              CUSDinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              }); //cUSDcontractData = '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1'

              _context.next = 15;
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(parsed), eventId, {
                from: senderAddress,
                data: cUSDcontractData,
                gasPrice: 100000000000,
                value: CUSDinFull
              });

            case 15:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _bidNFT.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    closeButton: true
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "alert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, null, "Bid Amount in CELO Dollar (CUSD)"), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cd56217a82eaed827b0d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjI1YTRhYjAzM2Y4ZmQzYzRjMjMwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsUUFPRSxRQVBGQSxRQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmpCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT2tCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUdBLHNCQUE4QlgseURBQVksQ0FBQztBQUMxQ1EsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDSSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQVIsSUFBQUEsUUFBUSxrQ0FBMkJGLFVBQTNCLHlCQUFSO0FBQ0E7O0FBZEMsV0FlYVcsTUFmYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1TUFlRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDS1AsTUFBTSxHQUFHSixVQURkO0FBQUE7QUFBQTtBQUFBOztBQUVFTSxjQUFBQSxvQkFBb0I7QUFGdEI7O0FBQUE7QUFBQTtBQUFBLHFCQUt3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T0FBUjtBQUFnQixTQUFLLEVBQUU7QUFBRTZDLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxNQUFBQSxRQUFRLEVBQUM7QUFBNUIsS0FBdkI7QUFBNkQsYUFBUyxFQUFDLG9CQUF2RTtBQUE0RixRQUFJLEVBQUM7QUFBakcsS0FDRTVDLEtBREYsQ0FERCxlQUlDLGlEQUFDLGtFQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxrRUFBRCwyQ0FERCxFQUVFSSxXQUZGLENBSkQsZUFRQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLGlEQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRU07QUFBbkMsZUFERCxDQVJELENBREQsQ0FoQkQsQ0FERDtBQXNDQTs7Ozs7Ozs7VUNySEQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IGZyb21XZWksIFVuaXRzLCBVbml0IH0gZnJvbSAnQGhhcm1vbnktanMvdXRpbHMnO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dHlwZSxcblx0SGlnaGVzdGJpZFxuXG59KSB7XG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXG5cblx0Y29uc3QgW0Ftb3VudCwgQW1vdW50SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdBbW91bnQnLFxuXHR9KTtcblxuXG5cdGZ1bmN0aW9uIGFjdGl2YXRlV2FybmluZ01vZGFsKCkge1xuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KGBBbW91bnQgY2Fubm90IGJlIHVuZGVyICR7SGlnaGVzdGJpZH0gQ0VMTyBEb2xsYXIgKENVU0QpYClcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cdFx0aWYgKEFtb3VudCA8IEhpZ2hlc3RiaWQpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkodG9rZW5JZCk7XG5cdFx0dmFyIHBhcnNlZCA9IGF3YWl0IEpTT04ucGFyc2UodG9rZW5VcmkpO1xuXHRcdGlmIChOdW1iZXIocGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10pIDwgTnVtYmVyKEFtb3VudCkpIHtcblx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddID0gQW1vdW50O1xuXHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ2hpZ2hlcmJpZGFkZCddWydkZXNjcmlwdGlvbiddID0gc2VuZGVyQWRkcmVzcztcblxuXHRcdH1cblx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhIEJpZHMnLFxuXHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdHVzZXJuYW1lOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHNlbmRlckFkZHJlc3Ncblx0XHRcdFx0fSxcblx0XHRcdFx0YmlkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IEFtb3VudFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aW1lOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGN1cnJlbnREYXRlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGxldCBDVVNEaW5GdWxsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cdFx0Ly9jVVNEY29udHJhY3REYXRhID0gJzB4ODc0MDY5RmExRWIxNkQ0NGQ2MjJGMmUwQ2EyNWVlQTE3MjM2OWJDMSdcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCwge1xuXHRcdFx0ZnJvbTogc2VuZGVyQWRkcmVzcyxcblx0XHRcdGRhdGE6IGNVU0Rjb250cmFjdERhdGEsXG5cdFx0XHRnYXNQcmljZTogMTAwMDAwMDAwMDAwLCB2YWx1ZTogQ1VTRGluRnVsbFxuXHRcdH0pO1xuXG5cblx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgZm9udFNpemU6XCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gQ0VMTyBEb2xsYXIgKENVU0QpPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdDwvTW9kYWw+XG5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJjZDU2MjE3YTgyZWFlZDgyN2IwZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJmcm9tV2VpIiwiVW5pdHMiLCJVbml0IiwiVXNlRm9ybUlucHV0IiwiQmlkTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiY29udHJhY3QiLCJzZW5kZXJBZGRyZXNzIiwidG9rZW5JZCIsImV2ZW50SWQiLCJ0eXBlIiwiSGlnaGVzdGJpZCIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJpZE5GVCIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJOdW1iZXIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJDVVNEaW5GdWxsIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsImNyZWF0ZUJpZCIsImZyb20iLCJkYXRhIiwiY1VTRGNvbnRyYWN0RGF0YSIsImdhc1ByaWNlIiwidmFsdWUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXNwbGF5IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9