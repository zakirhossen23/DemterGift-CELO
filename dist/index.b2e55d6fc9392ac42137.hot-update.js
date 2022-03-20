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
      var alertELM, cUSDtoken, CUSDinFull, cUSDtx, tokenUri, parsed, currentDate, createdObject, result;
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
                feeCurrency: cUSDtoken.address
              });

            case 14:
              cUSDtx = _context.sent;
              console.log(cUSDtx);
              _context.next = 18;
              return contract.tokenURI(tokenId);

            case 18:
              tokenUri = _context.sent;
              _context.next = 21;
              return JSON.parse(tokenUri);

            case 21:
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
              _context.next = 27;
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(parsed), eventId);

            case 27:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();
              _context.next = 37;
              break;

            case 33:
              _context.prev = 33;
              _context.t0 = _context["catch"](7);
              activateWarningModal("Error! Please try again!");
              return _context.abrupt("return");

            case 37:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 33]]);
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
/******/ 	__webpack_require__.h = function() { return "031c9060d4723241a2e3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmIyZTU1ZDZmYzkzOTJhYzQyMTM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDO0FBQ3hDLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9B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LGtCQUNDLGlEQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRU87QUFBbkMsZUFERCxDQVJELENBREQsQ0FoQkQsQ0FERDtBQXNDQTs7Ozs7Ozs7VUNqSUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IGZyb21XZWksIFVuaXRzLCBVbml0IH0gZnJvbSAnQGhhcm1vbnktanMvdXRpbHMnO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dG9BZGRyZXNzLFxuXHR0eXBlLFxuXHRIaWdoZXN0YmlkXG5cbn0pIHtcblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpXG5cdGNvbnN0IENvbnRyYWN0S2l0ID0gcmVxdWlyZSgnQGNlbG8vY29udHJhY3RraXQnKVxuXHRjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxuXHRjb25zdCBraXQgPSBDb250cmFjdEtpdC5uZXdLaXRGcm9tV2ViMyh3ZWIzKVxuXG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbChUZXh0QWxlcnQpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChUZXh0QWxlcnQpXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXG5cdFx0aWYgKEFtb3VudCA8IEhpZ2hlc3RiaWQpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKGBBbW91bnQgY2Fubm90IGJlIHVuZGVyICR7SGlnaGVzdGJpZH0gQ0VMTyBEb2xsYXIgKENVU0QpYCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdFx0YWxlcnRFTE0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcdFx0XHRcblx0XHR9XG5cdFx0dHJ5XHR7XG5cdFx0XHRsZXQgY1VTRHRva2VuID0gYXdhaXQga2l0LmNvbnRyYWN0cy5nZXRTdGFibGVUb2tlbigpXG5cdFx0XHRsZXQgQ1VTRGluRnVsbCA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXHRcblx0XHRcdGxldCBjVVNEdHggPSBhd2FpdCBjVVNEdG9rZW4udHJhbnNmZXIodG9BZGRyZXNzLCBDVVNEaW5GdWxsKS5zZW5kKHsgZnJvbTogc2VuZGVyQWRkcmVzcywgZmVlQ3VycmVuY3k6IGNVU0R0b2tlbi5hZGRyZXNzIH0pXG5cdFxuXHRcdFx0Y29uc29sZS5sb2coY1VTRHR4KTtcblx0XHRcdGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkodG9rZW5JZCk7XG5cdFx0XHR2YXIgcGFyc2VkID0gYXdhaXQgSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0XHRpZiAoTnVtYmVyKHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddKSA8IE51bWJlcihBbW91bnQpKSB7XG5cdFx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddID0gQW1vdW50O1xuXHRcdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXHRcblx0XHRcdH1cblx0XHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0XHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhIEJpZHMnLFxuXHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0cHJvcGVydGllczoge1xuXHRcdFx0XHRcdHVzZXJuYW1lOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBzZW5kZXJBZGRyZXNzXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRiaWQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IEFtb3VudFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZToge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogY3VycmVudERhdGVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCaWQodG9rZW5JZCwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksIEpTT04uc3RyaW5naWZ5KHBhcnNlZCksIGV2ZW50SWQpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fWNhdGNoKGUpe1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoYEVycm9yISBQbGVhc2UgdHJ5IGFnYWluIWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KSA6IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGlkPSdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCBmb250U2l6ZTogXCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gQ0VMTyBEb2xsYXIgKENVU0QpPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdDwvTW9kYWw+XG5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIwMzFjOTA2MGQ0NzIzMjQxYTJlM1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJmcm9tV2VpIiwiVW5pdHMiLCJVbml0IiwiVXNlRm9ybUlucHV0IiwiQmlkTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiY29udHJhY3QiLCJzZW5kZXJBZGRyZXNzIiwidG9rZW5JZCIsImV2ZW50SWQiLCJ0b0FkZHJlc3MiLCJ0eXBlIiwiSGlnaGVzdGJpZCIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJXZWIzIiwicmVxdWlyZSIsIkNvbnRyYWN0S2l0Iiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwia2l0IiwibmV3S2l0RnJvbVdlYjMiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJUZXh0QWxlcnQiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJpZE5GVCIsImRpc3BsYXkiLCJjb250cmFjdHMiLCJnZXRTdGFibGVUb2tlbiIsImNVU0R0b2tlbiIsIkNVU0RpbkZ1bGwiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImZlZUN1cnJlbmN5IiwiYWRkcmVzcyIsImNVU0R0eCIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlblVSSSIsInRva2VuVXJpIiwiSlNPTiIsInBhcnNlIiwicGFyc2VkIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3JlYXRlZE9iamVjdCIsInRpdGxlIiwicHJvcGVydGllcyIsInVzZXJuYW1lIiwiZGVzY3JpcHRpb24iLCJiaWQiLCJ0aW1lIiwiY3JlYXRlQmlkIiwicmVzdWx0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=