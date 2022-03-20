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
/******/ 	__webpack_require__.h = function() { return "9ceeb738da4534f60e5d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmM0NDRkMmJlOGFjYmJiODNlNWMyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDO0FBQ3hDLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9B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QUF1QixTQUFLLEVBQUU7QUFBRW9CLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CdUMsTUFBQUEsUUFBUSxFQUFFO0FBQTdCLEtBQTlCO0FBQXFFLGFBQVMsRUFBQyxxQkFBL0U7QUFBcUcsUUFBSSxFQUFDO0FBQTFHLEtBQ0UzRCxLQURGLENBSkQsZUFPQyxpREFBQyxrRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsa0VBQUQsMkNBREQsRUFFRVksV0FGRixDQVBELGVBV0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxpREFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVPO0FBQW5DLGVBREQsQ0FYRCxDQURELENBaEJELENBREQ7QUF5Q0E7Ozs7Ozs7O1VDcklELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgeyBmcm9tV2VpLCBVbml0cywgVW5pdCB9IGZyb20gJ0BoYXJtb255LWpzL3V0aWxzJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHRva2VuSWQsXG5cdGV2ZW50SWQsXG5cdHRvQWRkcmVzcyxcblx0dHlwZSxcblx0SGlnaGVzdGJpZFxuXG59KSB7XG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXG5cdGNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKVxuXHRjb25zdCBDb250cmFjdEtpdCA9IHJlcXVpcmUoJ0BjZWxvL2NvbnRyYWN0a2l0Jylcblx0Y29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSlcblx0Y29uc3Qga2l0ID0gQ29udHJhY3RLaXQubmV3S2l0RnJvbVdlYjMod2ViMylcblxuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoVGV4dEFsZXJ0KSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoVGV4dEFsZXJ0KVxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVCgpIHtcblxuXHRcdGlmIChBbW91bnQgPCBIaWdoZXN0YmlkKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IENFTE8gRG9sbGFyIChDVVNEKWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1lbHNle1xuXHRcdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRcdGFsZXJ0RUxNLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHRcdFx0XG5cdFx0fVxuXHRcdHRyeVx0e1xuXHRcdFx0bGV0IGNVU0R0b2tlbiA9IGF3YWl0IGtpdC5jb250cmFjdHMuZ2V0U3RhYmxlVG9rZW4oKVxuXHRcdFx0bGV0IENVU0RpbkZ1bGwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblx0XG5cdFx0XHRsZXQgY1VTRHR4ID0gYXdhaXQgY1VTRHRva2VuLnRyYW5zZmVyKHRvQWRkcmVzcywgQ1VTRGluRnVsbCkuc2VuZCh7ICBmcm9tOiBzZW5kZXJBZGRyZXNzLCBnYXNQcmljZTogMTAwMDAwMDAwMDAwMCwgZmVlQ3VycmVuY3k6IGNVU0R0b2tlbi5hZGRyZXNzIH0pXG5cdFx0XHRsZXQgY1VTRFJlY2VpcHQgPSBhd2FpdCBjVVNEdHgud2FpdFJlY2VpcHQoKVxuXG5cdFx0XHRjb25zb2xlLmxvZyhjVVNEUmVjZWlwdCk7XG5cdFx0XHRjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKHRva2VuSWQpO1xuXHRcdFx0dmFyIHBhcnNlZCA9IGF3YWl0IEpTT04ucGFyc2UodG9rZW5VcmkpO1xuXHRcdFx0aWYgKE51bWJlcihwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSkgPCBOdW1iZXIoQW1vdW50KSkge1xuXHRcdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSA9IEFtb3VudDtcblx0XHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ2hpZ2hlcmJpZGFkZCddWydkZXNjcmlwdGlvbiddID0gc2VuZGVyQWRkcmVzcztcblx0XG5cdFx0XHR9XG5cdFx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdFx0dGl0bGU6ICdBc3NldCBNZXRhZGF0YSBCaWRzJyxcblx0XHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdFx0XHR1c2VybmFtZToge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogc2VuZGVyQWRkcmVzc1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YmlkOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBBbW91bnRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpbWU6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IGN1cnJlbnREYXRlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmlkKHRva2VuSWQsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpLCBldmVudElkKTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1jYXRjaChlKXtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKGBFcnJvciEgUGxlYXNlIHRyeSBhZ2FpbiFgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgZm9udFNpemU6IFwiMzBweFwiIH19IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgaWQ9J3dvcmtpbmdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCBmb250U2l6ZTogXCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIENFTE8gRG9sbGFyIChDVVNEKTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHQ8L01vZGFsPlxuXG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOWNlZWI3MzhkYTQ1MzRmNjBlNWRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiZnJvbVdlaSIsIlVuaXRzIiwiVW5pdCIsIlVzZUZvcm1JbnB1dCIsIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidG9BZGRyZXNzIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJBbGVydCIsInNldEFsZXJ0IiwiV2ViMyIsInJlcXVpcmUiLCJDb250cmFjdEtpdCIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImtpdCIsIm5ld0tpdEZyb21XZWIzIiwicGxhY2Vob2xkZXIiLCJBbW91bnQiLCJBbW91bnRJbnB1dCIsImFjdGl2YXRlV2FybmluZ01vZGFsIiwiVGV4dEFsZXJ0IiwiYWxlcnRFTE0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiaWRORlQiLCJkaXNwbGF5IiwiY29udHJhY3RzIiwiZ2V0U3RhYmxlVG9rZW4iLCJjVVNEdG9rZW4iLCJDVVNEaW5GdWxsIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInRyYW5zZmVyIiwic2VuZCIsImZyb20iLCJnYXNQcmljZSIsImZlZUN1cnJlbmN5IiwiYWRkcmVzcyIsImNVU0R0eCIsIndhaXRSZWNlaXB0IiwiY1VTRFJlY2VpcHQiLCJjb25zb2xlIiwibG9nIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsIkpTT04iLCJwYXJzZSIsInBhcnNlZCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJ1c2VybmFtZSIsImRlc2NyaXB0aW9uIiwiYmlkIiwidGltZSIsImNyZWF0ZUJpZCIsInJlc3VsdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9