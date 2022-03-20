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
              _context.next = 48;
              break;

            case 42:
              _context.prev = 42;
              _context.t0 = _context["catch"](7);
              activateWarningModal("Error! Please try again!");
              alertELM = document.getElementById("workingalert");
              alertELM.style.display = 'none';
              return _context.abrupt("return");

            case 48:
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
/******/ 	__webpack_require__.h = function() { return "24e37e307529aae9e4d8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjI2ZWM1MWRjOTc3NmZmYzU1NjQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDO0FBQ3hDLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9B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ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IGZyb21XZWksIFVuaXRzLCBVbml0IH0gZnJvbSAnQGhhcm1vbnktanMvdXRpbHMnO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dG9BZGRyZXNzLFxuXHR0eXBlLFxuXHRIaWdoZXN0YmlkXG5cbn0pIHtcblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpXG5cdGNvbnN0IENvbnRyYWN0S2l0ID0gcmVxdWlyZSgnQGNlbG8vY29udHJhY3RraXQnKVxuXHRjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxuXHRjb25zdCBraXQgPSBDb250cmFjdEtpdC5uZXdLaXRGcm9tV2ViMyh3ZWIzKVxuXG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbChUZXh0QWxlcnQpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChUZXh0QWxlcnQpXG5cdH1cblx0ZnVuY3Rpb24gYWN0aXZhdGVXb3JraW5nTW9kYWwoVGV4dEFsZXJ0KSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JraW5nYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KFRleHRBbGVydClcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVCgpIHtcblxuXHRcdGlmIChBbW91bnQgPCBIaWdoZXN0YmlkKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IENFTE8gRG9sbGFyIChDVVNEKWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1lbHNle1xuXHRcdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRcdGFsZXJ0RUxNLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHRcdFx0XG5cdFx0fVxuXHRcdHRyeVx0e1xuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJCaWRkaW5nLi4uLlwiKVxuXHRcdFx0bGV0IGNVU0R0b2tlbiA9IGF3YWl0IGtpdC5jb250cmFjdHMuZ2V0U3RhYmxlVG9rZW4oKVxuXHRcdFx0bGV0IENVU0RpbkZ1bGwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiUGxlYXNlIGNvbmZpcm0uLi4uXCIpXG5cdFx0XHRsZXQgY1VTRHR4ID0gYXdhaXQgY1VTRHRva2VuLnRyYW5zZmVyKHRvQWRkcmVzcywgQ1VTRGluRnVsbCkuc2VuZCh7ICBmcm9tOiBzZW5kZXJBZGRyZXNzLCBnYXNQcmljZTogMTAwMDAwMDAwMDAwMCwgZmVlQ3VycmVuY3k6IGNVU0R0b2tlbi5hZGRyZXNzIH0pXG5cdFx0XHRsZXQgY1VTRFJlY2VpcHQgPSBhd2FpdCBjVVNEdHgud2FpdFJlY2VpcHQoKVxuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJQZW5kaW5nIHRyYW5zYWN0aW9ucy4uLi5cIilcblxuXHRcdFx0Y29uc29sZS5sb2coY1VTRFJlY2VpcHQpO1xuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJEb25lISBBZGRpbmcgaW50byBDRUxPIE5ldHdvcmsuLi5cIilcblxuXHRcdFx0Y29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcblx0XHRcdHZhciBwYXJzZWQgPSBhd2FpdCBKU09OLnBhcnNlKHRva2VuVXJpKTtcblx0XHRcdGlmIChOdW1iZXIocGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10pIDwgTnVtYmVyKEFtb3VudCkpIHtcblx0XHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydoaWdoZXJiaWRhZGQnXVsnZGVzY3JpcHRpb24nXSA9IHNlbmRlckFkZHJlc3M7XG5cdFxuXHRcdFx0fVxuXHRcdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEgQmlkcycsXG5cdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHNlbmRlckFkZHJlc3Ncblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJpZDoge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogQW1vdW50XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50RGF0ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiUGxlYXNlIGNvbmZpcm0gY3JlYXRpbmcgQmlkLi4uXCIpXG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJTdWNjZXNzIVwiKVxuXG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1jYXRjaChlKXtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKGBFcnJvciEgUGxlYXNlIHRyeSBhZ2FpbiFgKTtcblx0XHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2luZ2FsZXJ0XCIpO1xuXHRcdFx0YWxlcnRFTE0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcdFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KSA6IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGlkPSdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCBmb250U2l6ZTogXCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBpZD0nd29ya2luZ2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIGZvbnRTaXplOiBcIjMwcHhcIiB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gQ0VMTyBEb2xsYXIgKENVU0QpPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdDwvTW9kYWw+XG5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIyNGUzN2UzMDc1MjlhYWU5ZTRkOFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJmcm9tV2VpIiwiVW5pdHMiLCJVbml0IiwiVXNlRm9ybUlucHV0IiwiQmlkTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiY29udHJhY3QiLCJzZW5kZXJBZGRyZXNzIiwidG9rZW5JZCIsImV2ZW50SWQiLCJ0b0FkZHJlc3MiLCJ0eXBlIiwiSGlnaGVzdGJpZCIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJXZWIzIiwicmVxdWlyZSIsIkNvbnRyYWN0S2l0Iiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwia2l0IiwibmV3S2l0RnJvbVdlYjMiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJUZXh0QWxlcnQiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImFjdGl2YXRlV29ya2luZ01vZGFsIiwiYmlkTkZUIiwiZGlzcGxheSIsImNvbnRyYWN0cyIsImdldFN0YWJsZVRva2VuIiwiY1VTRHRva2VuIiwiQ1VTRGluRnVsbCIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJ0cmFuc2ZlciIsInNlbmQiLCJmcm9tIiwiZ2FzUHJpY2UiLCJmZWVDdXJyZW5jeSIsImFkZHJlc3MiLCJjVVNEdHgiLCJ3YWl0UmVjZWlwdCIsImNVU0RSZWNlaXB0IiwiY29uc29sZSIsImxvZyIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJjcmVhdGVCaWQiLCJyZXN1bHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJsb2NhdGlvbiIsInJlbG9hZCIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==