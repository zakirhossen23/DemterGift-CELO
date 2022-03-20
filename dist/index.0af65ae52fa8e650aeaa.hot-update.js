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
      toAddress = _ref.toAddress,
      type = _ref.type,
      Highestbid = _ref.Highestbid;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");

  var ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");

  var web3 = new Web3(window.ethereum);
  var kit = ContractKit.newKitFromWeb3(web3);

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
      var cUSDtoken, CUSDinFull, cUSDtx, tokenUri, parsed, currentDate, createdObject, result;
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
              return kit.contracts.getStableToken();

            case 5:
              cUSDtoken = _context.sent;
              CUSDinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context.next = 9;
              return cUSDtoken.transfer(toAddress, CUSDinFull).send({
                from: senderAddress,
                feeCurrency: cUSDtoken.address
              });

            case 9:
              cUSDtx = _context.sent;
              console.log(cUSDtx);
              _context.next = 13;
              return contract.tokenURI(tokenId);

            case 13:
              tokenUri = _context.sent;
              _context.next = 16;
              return JSON.parse(tokenUri);

            case 16:
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
              _context.next = 22;
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(parsed), eventId);

            case 22:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();

            case 26:
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
/******/ 	__webpack_require__.h = function() { return "33cb860698b40f13642f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjBhZjY1YWU1MmZhOGU2NTBhZWFhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNB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QUFNLENBQUM4QyxRQUFQLENBQWdCQyxNQUFoQjs7QUF6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQkU7QUFBQTtBQUFBOztBQStERixzQkFDQyxpREFBQyw2REFBRDtBQUNDLFFBQUksRUFBRTlELElBRFA7QUFFQyxVQUFNLEVBQUVDLE1BRlQ7QUFHQyx1QkFBZ0IsK0JBSGpCO0FBSUMsWUFBUTtBQUpULGtCQU1DLGlEQUFDLG9FQUFEO0FBQWMsZUFBVztBQUF6QixLQUNHTSxJQUFJLElBQUksWUFBVCxnQkFDQSxpREFBQyxtRUFBRDtBQUFhLE1BQUUsRUFBQztBQUFoQixzQkFEQSxnQkFJQSxpREFBQyxtRUFBRDtBQUFhLE1BQUUsRUFBQztBQUFoQixlQUxGLENBTkQsZUFnQkMsaURBQUMsa0VBQUQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsa0JBQ0MsaURBQUMsNERBQUQscUJBQ0M7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixTQUFLLEVBQUU7QUFBRXdELE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxNQUFBQSxRQUFRLEVBQUU7QUFBN0IsS0FBdkI7QUFBOEQsYUFBUyxFQUFDLG9CQUF4RTtBQUE2RixRQUFJLEVBQUM7QUFBbEcsS0FDRXZELEtBREYsQ0FERCxlQUlDLGlEQUFDLGtFQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxrRUFBRCwyQ0FERCxFQUVFWSxXQUZGLENBSkQsZUFRQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLGlEQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRU07QUFBbkMsZUFERCxDQVJELENBREQsQ0FoQkQsQ0FERDtBQXNDQTs7Ozs7Ozs7VUN4SEQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IGZyb21XZWksIFVuaXRzLCBVbml0IH0gZnJvbSAnQGhhcm1vbnktanMvdXRpbHMnO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dG9BZGRyZXNzLFxuXHR0eXBlLFxuXHRIaWdoZXN0YmlkXG5cbn0pIHtcblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpXG5cdGNvbnN0IENvbnRyYWN0S2l0ID0gcmVxdWlyZSgnQGNlbG8vY29udHJhY3RraXQnKVxuXHRjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxuXHRjb25zdCBraXQgPSBDb250cmFjdEtpdC5uZXdLaXRGcm9tV2ViMyh3ZWIzKVxuXG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IENFTE8gRG9sbGFyIChDVVNEKWApXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXG5cdFx0aWYgKEFtb3VudCA8IEhpZ2hlc3RiaWQpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBjVVNEdG9rZW4gPSBhd2FpdCBraXQuY29udHJhY3RzLmdldFN0YWJsZVRva2VuKClcblx0XHRsZXQgQ1VTRGluRnVsbCA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG5cdFx0bGV0IGNVU0R0eCA9IGF3YWl0IGNVU0R0b2tlbi50cmFuc2Zlcih0b0FkZHJlc3MsIENVU0RpbkZ1bGwpLnNlbmQoeyBmcm9tOiBzZW5kZXJBZGRyZXNzLCBmZWVDdXJyZW5jeTogY1VTRHRva2VuLmFkZHJlc3MgfSlcblxuXHRcdGNvbnNvbGUubG9nKGNVU0R0eCk7XG5cdFx0Y29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcblx0XHR2YXIgcGFyc2VkID0gYXdhaXQgSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0aWYgKE51bWJlcihwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSkgPCBOdW1iZXIoQW1vdW50KSkge1xuXHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXG5cdFx0fVxuXHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEgQmlkcycsXG5cdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogc2VuZGVyQWRkcmVzc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRiaWQ6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogQW1vdW50XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogY3VycmVudERhdGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmlkKHRva2VuSWQsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpLCBldmVudElkKTtcblx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgZm9udFNpemU6IFwiMzBweFwiIH19IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIENFTE8gRG9sbGFyIChDVVNEKTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHQ8L01vZGFsPlxuXG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMzNjYjg2MDY5OGI0MGYxMzY0MmZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiZnJvbVdlaSIsIlVuaXRzIiwiVW5pdCIsIlVzZUZvcm1JbnB1dCIsIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidG9BZGRyZXNzIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJBbGVydCIsInNldEFsZXJ0IiwiV2ViMyIsInJlcXVpcmUiLCJDb250cmFjdEtpdCIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImtpdCIsIm5ld0tpdEZyb21XZWIzIiwicGxhY2Vob2xkZXIiLCJBbW91bnQiLCJBbW91bnRJbnB1dCIsImFjdGl2YXRlV2FybmluZ01vZGFsIiwiYWxlcnRFTE0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiaWRORlQiLCJjb250cmFjdHMiLCJnZXRTdGFibGVUb2tlbiIsImNVU0R0b2tlbiIsIkNVU0RpbkZ1bGwiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImZlZUN1cnJlbmN5IiwiYWRkcmVzcyIsImNVU0R0eCIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlblVSSSIsInRva2VuVXJpIiwiSlNPTiIsInBhcnNlIiwicGFyc2VkIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3JlYXRlZE9iamVjdCIsInRpdGxlIiwicHJvcGVydGllcyIsInVzZXJuYW1lIiwiZGVzY3JpcHRpb24iLCJiaWQiLCJ0aW1lIiwiY3JlYXRlQmlkIiwicmVzdWx0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXNwbGF5IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9