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

  function activateWorkingModal(TextAlert) {
    var alertELM = document.getElementById("workingalert");
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
              activateWorkingModal("Bidding....");
              _context.next = 11;
              return kit.contracts.getStableToken();

            case 11:
              cUSDtoken = _context.sent;
              CUSDinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              activateWorkingModal("Please confirm....");
              _context.next = 16;
              return cUSDtoken.transfer(toAddress, CUSDinFull).send({
                from: senderAddress,
                gasPrice: 1000000000000,
                feeCurrency: cUSDtoken.address
              });

            case 16:
              cUSDtx = _context.sent;
              _context.next = 19;
              return cUSDtx.waitReceipt();

            case 19:
              cUSDReceipt = _context.sent;
              activateWorkingModal("Pending transactions....");
              console.log(cUSDReceipt);
              activateWorkingModal("Done! Adding into CELO Network...");
              _context.next = 25;
              return contract.tokenURI(tokenId);

            case 25:
              tokenUri = _context.sent;
              _context.next = 28;
              return JSON.parse(tokenUri);

            case 28:
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
              activateWorkingModal("Please confirm creating Bid...");
              _context.next = 35;
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(parsed), eventId);

            case 35:
              result = _context.sent;
              console.log(result);
              activateWorkingModal("Success!");
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();
              _context.next = 46;
              break;

            case 42:
              _context.prev = 42;
              _context.t0 = _context["catch"](7);
              activateWarningModal("Error! Please try again!");
              return _context.abrupt("return");

            case 46:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 42]]);
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
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "workingalert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-success",
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
/******/ 	__webpack_require__.h = function() { return "26ec51dc9776ffc55648"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjljZWViNzM4ZGE0NTM0ZjYwZTVkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDO0FBQ3hDLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9B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REFBQyxvRUFBRDtBQUFjLGVBQVc7QUFBekIsS0FDR00sSUFBSSxJQUFJLFlBQVQsZ0JBQ0EsaURBQUMsbUVBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsc0JBREEsZ0JBSUEsaURBQUMsbUVBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsZUFMRixDQU5ELGVBZ0JDLGlEQUFDLGtFQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLGtCQUNDLGlEQUFDLDREQUFELHFCQUNDO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBZ0IsU0FBSyxFQUFFO0FBQUV1QixNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQnVDLE1BQUFBLFFBQVEsRUFBRTtBQUE3QixLQUF2QjtBQUE4RCxhQUFTLEVBQUMsb0JBQXhFO0FBQTZGLFFBQUksRUFBQztBQUFsRyxLQUNFNUQsS0FERixDQURELGVBSUM7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUF1QixTQUFLLEVBQUU7QUFBRXFCLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CdUMsTUFBQUEsUUFBUSxFQUFFO0FBQTdCLEtBQTlCO0FBQXFFLGFBQVMsRUFBQyxxQkFBL0U7QUFBcUcsUUFBSSxFQUFDO0FBQTFHLEtBQ0U1RCxLQURGLENBSkQsZUFPQyxpREFBQyxrRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsa0VBQUQsMkNBREQsRUFFRVksV0FGRixDQVBELGVBV0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxpREFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVRO0FBQW5DLGVBREQsQ0FYRCxDQURELENBaEJELENBREQ7QUF5Q0E7Ozs7Ozs7O1VDbkpELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgeyBmcm9tV2VpLCBVbml0cywgVW5pdCB9IGZyb20gJ0BoYXJtb255LWpzL3V0aWxzJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHRva2VuSWQsXG5cdGV2ZW50SWQsXG5cdHRvQWRkcmVzcyxcblx0dHlwZSxcblx0SGlnaGVzdGJpZFxuXG59KSB7XG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXG5cdGNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKVxuXHRjb25zdCBDb250cmFjdEtpdCA9IHJlcXVpcmUoJ0BjZWxvL2NvbnRyYWN0a2l0Jylcblx0Y29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSlcblx0Y29uc3Qga2l0ID0gQ29udHJhY3RLaXQubmV3S2l0RnJvbVdlYjMod2ViMylcblxuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoVGV4dEFsZXJ0KSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoVGV4dEFsZXJ0KVxuXHR9XG5cdGZ1bmN0aW9uIGFjdGl2YXRlV29ya2luZ01vZGFsKFRleHRBbGVydCkge1xuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2luZ2FsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChUZXh0QWxlcnQpXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cblx0XHRpZiAoQW1vdW50IDwgSGlnaGVzdGJpZCkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBDRUxPIERvbGxhciAoQ1VTRClgKTtcblx0XHRcdHJldHVybjtcblx0XHR9ZWxzZXtcblx0XHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0XHRhbGVydEVMTS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1x0XHRcdFxuXHRcdH1cblx0XHR0cnlcdHtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiQmlkZGluZy4uLi5cIilcblx0XHRcdGxldCBjVVNEdG9rZW4gPSBhd2FpdCBraXQuY29udHJhY3RzLmdldFN0YWJsZVRva2VuKClcblx0XHRcdGxldCBDVVNEaW5GdWxsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cdFx0XHRhY3RpdmF0ZVdvcmtpbmdNb2RhbChcIlBsZWFzZSBjb25maXJtLi4uLlwiKVxuXHRcdFx0bGV0IGNVU0R0eCA9IGF3YWl0IGNVU0R0b2tlbi50cmFuc2Zlcih0b0FkZHJlc3MsIENVU0RpbkZ1bGwpLnNlbmQoeyAgZnJvbTogc2VuZGVyQWRkcmVzcywgZ2FzUHJpY2U6IDEwMDAwMDAwMDAwMDAsIGZlZUN1cnJlbmN5OiBjVVNEdG9rZW4uYWRkcmVzcyB9KVxuXHRcdFx0bGV0IGNVU0RSZWNlaXB0ID0gYXdhaXQgY1VTRHR4LndhaXRSZWNlaXB0KClcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiUGVuZGluZyB0cmFuc2FjdGlvbnMuLi4uXCIpXG5cblx0XHRcdGNvbnNvbGUubG9nKGNVU0RSZWNlaXB0KTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiRG9uZSEgQWRkaW5nIGludG8gQ0VMTyBOZXR3b3JrLi4uXCIpXG5cblx0XHRcdGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkodG9rZW5JZCk7XG5cdFx0XHR2YXIgcGFyc2VkID0gYXdhaXQgSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0XHRpZiAoTnVtYmVyKHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddKSA8IE51bWJlcihBbW91bnQpKSB7XG5cdFx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddID0gQW1vdW50O1xuXHRcdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXHRcblx0XHRcdH1cblx0XHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0XHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhIEJpZHMnLFxuXHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0cHJvcGVydGllczoge1xuXHRcdFx0XHRcdHVzZXJuYW1lOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBzZW5kZXJBZGRyZXNzXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRiaWQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IEFtb3VudFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZToge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogY3VycmVudERhdGVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRhY3RpdmF0ZVdvcmtpbmdNb2RhbChcIlBsZWFzZSBjb25maXJtIGNyZWF0aW5nIEJpZC4uLlwiKVxuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCaWQodG9rZW5JZCwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksIEpTT04uc3RyaW5naWZ5KHBhcnNlZCksIGV2ZW50SWQpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiU3VjY2VzcyFcIilcblxuXHRcdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbChgRXJyb3IhIFBsZWFzZSB0cnkgYWdhaW4hYCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIGZvbnRTaXplOiBcIjMwcHhcIiB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGlkPSd3b3JraW5nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgZm9udFNpemU6IFwiMzBweFwiIH19IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiBDRUxPIERvbGxhciAoQ1VTRCk8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7QW1vdW50SW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0PC9Nb2RhbD5cblxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjI2ZWM1MWRjOTc3NmZmYzU1NjQ4XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsImZyb21XZWkiLCJVbml0cyIsIlVuaXQiLCJVc2VGb3JtSW5wdXQiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJ0b2tlbklkIiwiZXZlbnRJZCIsInRvQWRkcmVzcyIsInR5cGUiLCJIaWdoZXN0YmlkIiwiQWxlcnQiLCJzZXRBbGVydCIsIldlYjMiLCJyZXF1aXJlIiwiQ29udHJhY3RLaXQiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJraXQiLCJuZXdLaXRGcm9tV2ViMyIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsIlRleHRBbGVydCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYWN0aXZhdGVXb3JraW5nTW9kYWwiLCJiaWRORlQiLCJkaXNwbGF5IiwiY29udHJhY3RzIiwiZ2V0U3RhYmxlVG9rZW4iLCJjVVNEdG9rZW4iLCJDVVNEaW5GdWxsIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInRyYW5zZmVyIiwic2VuZCIsImZyb20iLCJnYXNQcmljZSIsImZlZUN1cnJlbmN5IiwiYWRkcmVzcyIsImNVU0R0eCIsIndhaXRSZWNlaXB0IiwiY1VTRFJlY2VpcHQiLCJjb25zb2xlIiwibG9nIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsIkpTT04iLCJwYXJzZSIsInBhcnNlZCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJ1c2VybmFtZSIsImRlc2NyaXB0aW9uIiwiYmlkIiwidGltZSIsImNyZWF0ZUJpZCIsInJlc3VsdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9