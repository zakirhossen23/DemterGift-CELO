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

  function activateWarningModal(TextAlert) {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert(TextAlert);
  }

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var alertELM, cUSDtoken, CUSDinFull, cUSDtx, cUSDReceipt, tokenUri, parsed, currentDate, createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(Amount < Highestbid)) {
                _context.next = 5;
                break;
              }

              activateWarningModal("Amount cannot be under ".concat(Highestbid, " CELO Dollar (CUSD)"));
              return _context.abrupt("return");

            case 5:
              alertELM = document.getElementById("alert");
              alertELM.style.display = 'none';

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return kit.contracts.getStableToken();

            case 10:
              cUSDtoken = _context.sent;
              CUSDinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context.next = 14;
              return cUSDtoken.transfer(toAddress, CUSDinFull).send({
                from: senderAddress,
                gasPrice: 1000000000000,
                feeCurrency: cUSDtoken.address
              });

            case 14:
              cUSDtx = _context.sent;
              _context.next = 17;
              return cUSDtx.waitReceipt();

            case 17:
              cUSDReceipt = _context.sent;
              console.log(cUSDReceipt);
              _context.next = 21;
              return contract.tokenURI(tokenId);

            case 21:
              tokenUri = _context.sent;
              _context.next = 24;
              return JSON.parse(tokenUri);

            case 24:
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
              _context.next = 30;
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(parsed), eventId);

            case 30:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();
              _context.next = 40;
              break;

            case 36:
              _context.prev = 36;
              _context.t0 = _context["catch"](7);
              activateWarningModal("Error! Please try again!");
              return _context.abrupt("return");

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 36]]);
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
/******/ 	__webpack_require__.h = function() { return "db7f69b31f0bb1ff2958"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjhhNzg1ZWFjMmIzYWJkZTBlMjBlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDO0FBQ3hDLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9B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LEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLGtFQUFELDJDQURELEVBRUVZLFdBRkYsQ0FKRCxlQVFDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsaURBQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFTztBQUFuQyxlQURELENBUkQsQ0FERCxDQWhCRCxDQUREO0FBc0NBOzs7Ozs7OztVQ2xJRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHsgZnJvbVdlaSwgVW5pdHMsIFVuaXQgfSBmcm9tICdAaGFybW9ueS1qcy91dGlscyc7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRldmVudElkLFxuXHR0b0FkZHJlc3MsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuXHRjb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIilcblx0Y29uc3QgQ29udHJhY3RLaXQgPSByZXF1aXJlKCdAY2Vsby9jb250cmFjdGtpdCcpXG5cdGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG5cdGNvbnN0IGtpdCA9IENvbnRyYWN0S2l0Lm5ld0tpdEZyb21XZWIzKHdlYjMpXG5cblx0Y29uc3QgW0Ftb3VudCwgQW1vdW50SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdBbW91bnQnLFxuXHR9KTtcblxuXG5cdGZ1bmN0aW9uIGFjdGl2YXRlV2FybmluZ01vZGFsKFRleHRBbGVydCkge1xuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KFRleHRBbGVydClcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cblx0XHRpZiAoQW1vdW50IDwgSGlnaGVzdGJpZCkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBDRUxPIERvbGxhciAoQ1VTRClgKTtcblx0XHRcdHJldHVybjtcblx0XHR9ZWxzZXtcblx0XHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0XHRhbGVydEVMTS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1x0XHRcdFxuXHRcdH1cblx0XHR0cnlcdHtcblx0XHRcdGxldCBjVVNEdG9rZW4gPSBhd2FpdCBraXQuY29udHJhY3RzLmdldFN0YWJsZVRva2VuKClcblx0XHRcdGxldCBDVVNEaW5GdWxsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cdFxuXHRcdFx0bGV0IGNVU0R0eCA9IGF3YWl0IGNVU0R0b2tlbi50cmFuc2Zlcih0b0FkZHJlc3MsIENVU0RpbkZ1bGwpLnNlbmQoeyAgZnJvbTogc2VuZGVyQWRkcmVzcywgZ2FzUHJpY2U6IDEwMDAwMDAwMDAwMDAsIGZlZUN1cnJlbmN5OiBjVVNEdG9rZW4uYWRkcmVzcyB9KVxuXHRcdFx0bGV0IGNVU0RSZWNlaXB0ID0gYXdhaXQgY1VTRHR4LndhaXRSZWNlaXB0KClcblxuXHRcdFx0Y29uc29sZS5sb2coY1VTRFJlY2VpcHQpO1xuXHRcdFx0Y29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcblx0XHRcdHZhciBwYXJzZWQgPSBhd2FpdCBKU09OLnBhcnNlKHRva2VuVXJpKTtcblx0XHRcdGlmIChOdW1iZXIocGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10pIDwgTnVtYmVyKEFtb3VudCkpIHtcblx0XHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydoaWdoZXJiaWRhZGQnXVsnZGVzY3JpcHRpb24nXSA9IHNlbmRlckFkZHJlc3M7XG5cdFxuXHRcdFx0fVxuXHRcdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEgQmlkcycsXG5cdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHNlbmRlckFkZHJlc3Ncblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJpZDoge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogQW1vdW50XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50RGF0ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbChgRXJyb3IhIFBsZWFzZSB0cnkgYWdhaW4hYCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIGZvbnRTaXplOiBcIjMwcHhcIiB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiBDRUxPIERvbGxhciAoQ1VTRCk8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7QW1vdW50SW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0PC9Nb2RhbD5cblxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImRiN2Y2OWIzMWYwYmIxZmYyOTU4XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsImZyb21XZWkiLCJVbml0cyIsIlVuaXQiLCJVc2VGb3JtSW5wdXQiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJ0b2tlbklkIiwiZXZlbnRJZCIsInRvQWRkcmVzcyIsInR5cGUiLCJIaWdoZXN0YmlkIiwiQWxlcnQiLCJzZXRBbGVydCIsIldlYjMiLCJyZXF1aXJlIiwiQ29udHJhY3RLaXQiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJraXQiLCJuZXdLaXRGcm9tV2ViMyIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsIlRleHRBbGVydCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmlkTkZUIiwiZGlzcGxheSIsImNvbnRyYWN0cyIsImdldFN0YWJsZVRva2VuIiwiY1VTRHRva2VuIiwiQ1VTRGluRnVsbCIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJ0cmFuc2ZlciIsInNlbmQiLCJmcm9tIiwiZ2FzUHJpY2UiLCJmZWVDdXJyZW5jeSIsImFkZHJlc3MiLCJjVVNEdHgiLCJ3YWl0UmVjZWlwdCIsImNVU0RSZWNlaXB0IiwiY29uc29sZSIsImxvZyIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJjcmVhdGVCaWQiLCJyZXN1bHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJsb2NhdGlvbiIsInJlbG9hZCIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==