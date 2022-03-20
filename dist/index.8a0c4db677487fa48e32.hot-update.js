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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @harmony-js/utils */ "./node_modules/@harmony-js/utils/dist/index.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_harmony_js_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");









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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");

  var ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");

  var web3 = new Web3(window.ethereum);
  var kit = ContractKit.newKitFromWeb3(web3);

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
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
      var cUSDtoken, cUSDtx;
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
              _context.next = 8;
              return cUSDtoken.transfer(toAddress, Amount).send({
                from: senderAddress,
                feeCurrency: cUSDtoken.address
              });

            case 8:
              cUSDtx = _context.sent;
              console.log(cUSDtx); // const tokenUri = await contract.tokenURI(tokenId);
              // var parsed = await JSON.parse(tokenUri);
              // if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
              // 	parsed['properties']['price']['description'] = Amount;
              // 	parsed['properties']['higherbidadd']['description'] = senderAddress;
              // }
              // let currentDate = new Date();
              // const createdObject = {
              // 	title: 'Asset Metadata Bids',
              // 	type: 'object',
              // 	properties: {
              // 		username: {
              // 			type: 'string',
              // 			description: senderAddress
              // 		},
              // 		bid: {
              // 			type: 'string',
              // 			description: Amount
              // 		},
              // 		time: {
              // 			type: 'string',
              // 			description: currentDate
              // 		}
              // 	}
              // };
              // let CUSDinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', { useGrouping: false });
              // let cUSDcontractData = '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1'
              // const result = await contract.createBid(tokenId, JSON.stringify(createdObject), JSON.stringify(parsed), eventId, {
              // 	from: senderAddress,
              // 	gasPrice: 100000000000, value: CUSDinFull
              // });

              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _bidNFT.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    closeButton: true
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "alert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Label, null, "Bid Amount in CELO Dollar (CUSD)"), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ad1634bf06ef144a56c5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjhhMGM0ZGI2Nzc0ODdmYTQ4ZTMyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQWhCLElBQUFBLFFBQVEsa0NBQTJCRixVQUEzQix5QkFBUjtBQUNBOztBQWxCQyxXQW1CYW1CLE1BbkJiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQW1CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFS1AsTUFBTSxHQUFHWixVQUZkO0FBQUE7QUFBQTtBQUFBOztBQUdFYyxjQUFBQSxvQkFBb0I7QUFIdEI7O0FBQUE7QUFBQTtBQUFBLHFCQU11QkwsR0FBRyxDQUFDVyxTQUFKLENBQWNDLGNBQWQsRUFOdkI7O0FBQUE7QUFNS0MsY0FBQUEsU0FOTDtBQUFBO0FBQUEscUJBUW9CQSxTQUFTLENBQUNDLFFBQVYsQ0FBbUJ6QixTQUFuQixFQUE4QmMsTUFBOUIsRUFBc0NZLElBQXRDLENBQTJDO0FBQUNDLGdCQUFBQSxJQUFJLEVBQUU5QixhQUFQO0FBQXNCK0IsZ0JBQUFBLFdBQVcsRUFBRUosU0FBUyxDQUFDSztBQUE3QyxlQUEzQyxDQVJwQjs7QUFBQTtBQVFLQyxjQUFBQSxNQVJMO0FBVURDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBVkMsQ0FXQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQVo7QUFDQXhCLGNBQUFBLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQmdCLHNCQUFoQixDQUF1QyxXQUF2QyxFQUFvRCxDQUFwRCxFQUF1REMsS0FBdkQ7QUFDQTFCLGNBQUFBLE1BQU0sQ0FBQzJCLFFBQVAsQ0FBZ0JDLE1BQWhCOztBQWxERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5CRTtBQUFBO0FBQUE7O0FBd0VGLHNCQUNDLGlEQUFDLDZEQUFEO0FBQ0MsUUFBSSxFQUFFM0MsSUFEUDtBQUVDLFVBQU0sRUFBRUMsTUFGVDtBQUdDLHVCQUFnQiwrQkFIakI7QUFJQyxZQUFRO0FBSlQsa0JBTUMsaURBQUMsb0VBQUQ7QUFBYyxlQUFXO0FBQXpCLEtBQ0dNLElBQUksSUFBSSxZQUFULGdCQUNBLGlEQUFDLG1FQUFEO0FBQWEsTUFBRSxFQUFDO0FBQWhCLHNCQURBLGdCQUlBLGlEQUFDLG1FQUFEO0FBQWEsTUFBRSxFQUFDO0FBQWhCLGVBTEYsQ0FORCxlQWdCQyxpREFBQyxrRUFBRDtBQUFZLGFBQVMsRUFBQztBQUF0QixrQkFDQyxpREFBQyw0REFBRCxxQkFDQztBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLFNBQUssRUFBRTtBQUFFcUMsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLE1BQUFBLFFBQVEsRUFBQztBQUE1QixLQUF2QjtBQUE2RCxhQUFTLEVBQUMsb0JBQXZFO0FBQTRGLFFBQUksRUFBQztBQUFqRyxLQUNFcEMsS0FERixDQURELGVBSUMsaURBQUMsa0VBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLGtFQUFELDJDQURELEVBRUVZLFdBRkYsQ0FKRCxlQVFDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsaURBQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFTTtBQUFuQyxlQURELENBUkQsQ0FERCxDQWhCRCxDQUREO0FBc0NBOzs7Ozs7OztVQ2pJRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHsgZnJvbVdlaSwgVW5pdHMsIFVuaXQgfSBmcm9tICdAaGFybW9ueS1qcy91dGlscyc7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRldmVudElkLFxuXHR0b0FkZHJlc3MsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuXHRjb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIilcblx0Y29uc3QgQ29udHJhY3RLaXQgPSByZXF1aXJlKCdAY2Vsby9jb250cmFjdGtpdCcpXG5cdGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG5cdGNvbnN0IGtpdCA9IENvbnRyYWN0S2l0Lm5ld0tpdEZyb21XZWIzKHdlYjMpXG4gIFxuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBDRUxPIERvbGxhciAoQ1VTRClgKVxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVCgpIHtcblx0XHRcblx0XHRpZiAoQW1vdW50IDwgSGlnaGVzdGJpZCkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGNVU0R0b2tlbiA9IGF3YWl0IGtpdC5jb250cmFjdHMuZ2V0U3RhYmxlVG9rZW4oKVxuXG5cdFx0bGV0IGNVU0R0eCA9IGF3YWl0IGNVU0R0b2tlbi50cmFuc2Zlcih0b0FkZHJlc3MsIEFtb3VudCkuc2VuZCh7ZnJvbTogc2VuZGVyQWRkcmVzcywgZmVlQ3VycmVuY3k6IGNVU0R0b2tlbi5hZGRyZXNzfSlcblxuY29uc29sZS5sb2coY1VTRHR4KTtcblx0XHQvLyBjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKHRva2VuSWQpO1xuXHRcdC8vIHZhciBwYXJzZWQgPSBhd2FpdCBKU09OLnBhcnNlKHRva2VuVXJpKTtcblx0XHQvLyBpZiAoTnVtYmVyKHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddKSA8IE51bWJlcihBbW91bnQpKSB7XG5cdFx0Ly8gXHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSA9IEFtb3VudDtcblx0XHQvLyBcdHBhcnNlZFsncHJvcGVydGllcyddWydoaWdoZXJiaWRhZGQnXVsnZGVzY3JpcHRpb24nXSA9IHNlbmRlckFkZHJlc3M7XG5cblx0XHQvLyB9XG5cdFx0Ly8gbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHQvLyBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdC8vIFx0dGl0bGU6ICdBc3NldCBNZXRhZGF0YSBCaWRzJyxcblx0XHQvLyBcdHR5cGU6ICdvYmplY3QnLFxuXHRcdC8vIFx0cHJvcGVydGllczoge1xuXHRcdC8vIFx0XHR1c2VybmFtZToge1xuXHRcdC8vIFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiBzZW5kZXJBZGRyZXNzXG5cdFx0Ly8gXHRcdH0sXG5cdFx0Ly8gXHRcdGJpZDoge1xuXHRcdC8vIFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiBBbW91bnRcblx0XHQvLyBcdFx0fSxcblx0XHQvLyBcdFx0dGltZToge1xuXHRcdC8vIFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50RGF0ZVxuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfTtcblx0XHQvLyBsZXQgQ1VTRGluRnVsbCA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXHRcdC8vIGxldCBjVVNEY29udHJhY3REYXRhID0gJzB4ODc0MDY5RmExRWIxNkQ0NGQ2MjJGMmUwQ2EyNWVlQTE3MjM2OWJDMSdcblxuXG5cblx0XHQvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCaWQodG9rZW5JZCwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksIEpTT04uc3RyaW5naWZ5KHBhcnNlZCksIGV2ZW50SWQsIHtcblx0XHQvLyBcdGZyb206IHNlbmRlckFkZHJlc3MsXG5cdFx0Ly8gXHRnYXNQcmljZTogMTAwMDAwMDAwMDAwLCB2YWx1ZTogQ1VTRGluRnVsbFxuXHRcdC8vIH0pO1xuXG5cblx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgZm9udFNpemU6XCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gQ0VMTyBEb2xsYXIgKENVU0QpPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdDwvTW9kYWw+XG5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhZDE2MzRiZjA2ZWYxNDRhNTZjNVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJmcm9tV2VpIiwiVW5pdHMiLCJVbml0IiwiVXNlRm9ybUlucHV0IiwiQmlkTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiY29udHJhY3QiLCJzZW5kZXJBZGRyZXNzIiwidG9rZW5JZCIsImV2ZW50SWQiLCJ0b0FkZHJlc3MiLCJ0eXBlIiwiSGlnaGVzdGJpZCIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJXZWIzIiwicmVxdWlyZSIsIkNvbnRyYWN0S2l0Iiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwia2l0IiwibmV3S2l0RnJvbVdlYjMiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJpZE5GVCIsImNvbnRyYWN0cyIsImdldFN0YWJsZVRva2VuIiwiY1VTRHRva2VuIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImZlZUN1cnJlbmN5IiwiYWRkcmVzcyIsImNVU0R0eCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpc3BsYXkiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=