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
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // if (Amount < Highestbid) {
              // 	activateWarningModal();
              // 	return;
              // }
              // const tokenUri = await contract.tokenURI(tokenId);
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

            case 3:
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
/******/ 	__webpack_require__.h = function() { return "0771da7bf6a0f448c6d0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjQzMGNiNGFhMjFjNzE5NzUxOGUyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsUUFPRSxRQVBGQSxRQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmpCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT2tCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCZix5REFBWSxDQUFDO0FBQzFDUSxJQUFBQSxJQUFJLEVBQUUsTUFEb0M7QUFFMUNZLElBQUFBLFdBQVcsRUFBRTtBQUY2QixHQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsV0FBZjs7QUFNQSxXQUFTQyxvQkFBVCxHQUFnQztBQUMvQixRQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQ0csS0FBVCxHQUFpQixVQUFqQjtBQUNBaEIsSUFBQUEsUUFBUSxrQ0FBMkJGLFVBQTNCLHlCQUFSO0FBQ0E7O0FBbEJDLFdBbUJhbUIsTUFuQmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsdU1BbUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFaO0FBQ0FmLGNBQUFBLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQk8sc0JBQWhCLENBQXVDLFdBQXZDLEVBQW9ELENBQXBELEVBQXVEQyxLQUF2RDtBQUNBakIsY0FBQUEsTUFBTSxDQUFDa0IsUUFBUCxDQUFnQkMsTUFBaEI7O0FBN0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkJFO0FBQUE7QUFBQTs7QUFtRUYsc0JBQ0MsaURBQUMsNkRBQUQ7QUFDQyxRQUFJLEVBQUVqQyxJQURQO0FBRUMsVUFBTSxFQUFFQyxNQUZUO0FBR0MsdUJBQWdCLCtCQUhqQjtBQUlDLFlBQVE7QUFKVCxrQkFNQyxpREFBQyxvRUFBRDtBQUFjLGVBQVc7QUFBekIsS0FDR0ssSUFBSSxJQUFJLFlBQVQsZ0JBQ0EsaURBQUMsbUVBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsc0JBREEsZ0JBSUEsaURBQUMsbUVBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsZUFMRixDQU5ELGVBZ0JDLGlEQUFDLGtFQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLGtCQUNDLGlEQUFDLDREQUFELHFCQUNDO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBZ0IsU0FBSyxFQUFFO0FBQUU0QixNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsTUFBQUEsUUFBUSxFQUFDO0FBQTVCLEtBQXZCO0FBQTZELGFBQVMsRUFBQyxvQkFBdkU7QUFBNEYsUUFBSSxFQUFDO0FBQWpHLEtBQ0UzQixLQURGLENBREQsZUFJQyxpREFBQyxrRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsa0VBQUQsMkNBREQsRUFFRVksV0FGRixDQUpELGVBUUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxpREFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVNO0FBQW5DLGVBREQsQ0FSRCxDQURELENBaEJELENBREQ7QUFzQ0E7Ozs7Ozs7O1VDM0hELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgeyBmcm9tV2VpLCBVbml0cywgVW5pdCB9IGZyb20gJ0BoYXJtb255LWpzL3V0aWxzJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHRva2VuSWQsXG5cdGV2ZW50SWQsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuXHRjb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIilcblx0Y29uc3QgQ29udHJhY3RLaXQgPSByZXF1aXJlKCdAY2Vsby9jb250cmFjdGtpdCcpXG5cdGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG5cdGNvbnN0IGtpdCA9IENvbnRyYWN0S2l0Lm5ld0tpdEZyb21XZWIzKHdlYjMpXG5cblx0Y29uc3QgW0Ftb3VudCwgQW1vdW50SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdBbW91bnQnLFxuXHR9KTtcblxuXG5cdGZ1bmN0aW9uIGFjdGl2YXRlV2FybmluZ01vZGFsKCkge1xuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KGBBbW91bnQgY2Fubm90IGJlIHVuZGVyICR7SGlnaGVzdGJpZH0gQ0VMTyBEb2xsYXIgKENVU0QpYClcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cdFx0XG5cdFx0Ly8gaWYgKEFtb3VudCA8IEhpZ2hlc3RiaWQpIHtcblx0XHQvLyBcdGFjdGl2YXRlV2FybmluZ01vZGFsKCk7XG5cdFx0Ly8gXHRyZXR1cm47XG5cdFx0Ly8gfVxuXHRcdC8vIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkodG9rZW5JZCk7XG5cdFx0Ly8gdmFyIHBhcnNlZCA9IGF3YWl0IEpTT04ucGFyc2UodG9rZW5VcmkpO1xuXHRcdC8vIGlmIChOdW1iZXIocGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10pIDwgTnVtYmVyKEFtb3VudCkpIHtcblx0XHQvLyBcdHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddID0gQW1vdW50O1xuXHRcdC8vIFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ2hpZ2hlcmJpZGFkZCddWydkZXNjcmlwdGlvbiddID0gc2VuZGVyQWRkcmVzcztcblxuXHRcdC8vIH1cblx0XHQvLyBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdC8vIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0Ly8gXHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhIEJpZHMnLFxuXHRcdC8vIFx0dHlwZTogJ29iamVjdCcsXG5cdFx0Ly8gXHRwcm9wZXJ0aWVzOiB7XG5cdFx0Ly8gXHRcdHVzZXJuYW1lOiB7XG5cdFx0Ly8gXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0Ly8gXHRcdFx0ZGVzY3JpcHRpb246IHNlbmRlckFkZHJlc3Ncblx0XHQvLyBcdFx0fSxcblx0XHQvLyBcdFx0YmlkOiB7XG5cdFx0Ly8gXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0Ly8gXHRcdFx0ZGVzY3JpcHRpb246IEFtb3VudFxuXHRcdC8vIFx0XHR9LFxuXHRcdC8vIFx0XHR0aW1lOiB7XG5cdFx0Ly8gXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0Ly8gXHRcdFx0ZGVzY3JpcHRpb246IGN1cnJlbnREYXRlXG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyB9O1xuXHRcdC8vIGxldCBDVVNEaW5GdWxsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cdFx0Ly8gbGV0IGNVU0Rjb250cmFjdERhdGEgPSAnMHg4NzQwNjlGYTFFYjE2RDQ0ZDYyMkYyZTBDYTI1ZWVBMTcyMzY5YkMxJ1xuXG5cblxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCwge1xuXHRcdC8vIFx0ZnJvbTogc2VuZGVyQWRkcmVzcyxcblx0XHQvLyBcdGdhc1ByaWNlOiAxMDAwMDAwMDAwMDAsIHZhbHVlOiBDVVNEaW5GdWxsXG5cdFx0Ly8gfSk7XG5cblxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KSA6IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGlkPSdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCBmb250U2l6ZTpcIjMwcHhcIiB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiBDRUxPIERvbGxhciAoQ1VTRCk8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7QW1vdW50SW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0PC9Nb2RhbD5cblxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjA3NzFkYTdiZjZhMGY0NDhjNmQwXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsImZyb21XZWkiLCJVbml0cyIsIlVuaXQiLCJVc2VGb3JtSW5wdXQiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJ0b2tlbklkIiwiZXZlbnRJZCIsInR5cGUiLCJIaWdoZXN0YmlkIiwiQWxlcnQiLCJzZXRBbGVydCIsIldlYjMiLCJyZXF1aXJlIiwiQ29udHJhY3RLaXQiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJraXQiLCJuZXdLaXRGcm9tV2ViMyIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmlkTkZUIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGlzcGxheSIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==