"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/layout/Nav/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/layout/Nav/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/components/layout/Nav/index.scss");



 // import {ContentLoader} from '@/components/common/ContentLoader'



function Nav() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      acc = _useState2[0],
      setAcc = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      Balance = _useState4[0],
      setBalance = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      isSigned = _useState6[0],
      setSigned = _useState6[1];

  var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");

  var ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");

  var web3 = new Web3(window.ethereum);
  var kit = ContractKit.newKitFromWeb3(web3);

  function fetchInfo() {
    return _fetchInfo.apply(this, arguments);
  }

  function _fetchInfo() {
    _fetchInfo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var cUSDtoken, cUSDBalance;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(window.ethereum.selectedAddress != null && window.localStorage.getItem("ConnectedMetaCelo") == "true")) {
                _context.next = 15;
                break;
              }

              _context.next = 3;
              return kit.contracts.getStableToken();

            case 3:
              cUSDtoken = _context.sent;
              _context.next = 6;
              return cUSDtoken.balanceOf(window.ethereum.selectedAddress);

            case 6:
              cUSDBalance = _context.sent;
              _context.next = 9;
              return setAcc(window.ethereum.selectedAddress.toString().substring(0, 25) + "...");

            case 9:
              setBalance(cUSDBalance / 1000000000000000000 + " cUSD");
              setSigned(true);
              window.document.getElementById("withoutSign").style.display = "none";
              window.document.getElementById("withSign").style.display = "";
              _context.next = 18;
              break;

            case 15:
              setSigned(false);
              window.document.getElementById("withoutSign").style.display = "";
              window.document.getElementById("withSign").style.display = "none";

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchInfo.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setInterval(function () {
      fetchInfo();
    }, 1000);
  }, [1000]);

  function NavButtons() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
      to: "/donation",
      id: "donationbtnNav"
    }, "Donation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
      to: "/CreateEvents"
    }, "Create Events")));
  }

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      modalShow = _useState8[0],
      setModalShow = _useState8[1]; //Celo


  function onClickConnectCelo() {
    return _onClickConnectCelo.apply(this, arguments);
  }

  function _onClickConnectCelo() {
    _onClickConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var result, getacc;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
              result = _context2.sent;
              result;
              _context2.prev = 4;
              _context2.next = 7;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 7:
              getacc = _context2.sent;
              getacc;
              _context2.next = 22;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](4);

              if (!(_context2.t0.code === 4902)) {
                _context2.next = 22;
                break;
              }

              _context2.prev = 14;
              _context2.next = 17;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaef3',
                  //44787
                  chainName: 'Alfajores Celo Testnet',
                  nativeCurrency: {
                    name: 'CUSD',
                    symbol: 'CUSD',
                    decimals: 18
                  },
                  rpcUrls: ['https://alfajores-forno.celo-testnet.org']
                }]
              });

            case 17:
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t1 = _context2["catch"](14);
              // handle "add" error
              console.log(_context2.t1);

            case 22:
              window.localStorage.setItem("ConnectedMetaCelo", "true");

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 11], [14, 19]]);
    }));
    return _onClickConnectCelo.apply(this, arguments);
  }

  function onClickDisConnectCelo() {
    return _onClickDisConnectCelo.apply(this, arguments);
  }

  function _onClickDisConnectCelo() {
    _onClickDisConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              window.localStorage.setItem("ConnectedMetaCelo", "");

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onClickDisConnectCelo.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("nav", {
    className: "main-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(NavButtons, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "withoutSign",
    className: "wallets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: onClickConnectCelo,
    className: "btn btn-secondary",
    "aria-disabled": "false"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "withSign",
    className: "wallets",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet",
    style: {
      height: 48,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__wrapper",
    style: {
      display: "flex",
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__address",
    style: {
      fontSize: 14,
      letterSpacing: "0.5px"
    }
  }, acc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__balance",
    style: {
      color: "rgb(236 190 33 / 50%)",
      fontSize: 12,
      letterSpacing: "0.6px"
    }
  }, Balance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: onClickDisConnectCelo,
    className: "btn btn-logout",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    height: 32,
    width: 32,
    style: {
      fill: "rgb(197, 228, 243)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
  }))))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e918e615bf7f82c83008"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmVkOThhZGE4OWJjOGQxMWU3YzI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBSU8sU0FBU0ksR0FBVCxHQUE0QjtBQUMvQixrQkFBc0JILCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBO0FBQUEsTUFBT0ksR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsbUJBQThCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsU0FBakI7O0FBRUgsTUFBTUMsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDhDQUFELENBQXBCOztBQUNBLE1BQU1DLFdBQVcsR0FBR0QsbUJBQU8sQ0FBQyx3RUFBRCxDQUEzQjs7QUFDQSxNQUFNRSxJQUFJLEdBQUcsSUFBSUgsSUFBSixDQUFTSSxNQUFNLENBQUNDLFFBQWhCLENBQWI7QUFDQSxNQUFNQyxHQUFHLEdBQUdKLFdBQVcsQ0FBQ0ssY0FBWixDQUEyQkosSUFBM0IsQ0FBWjs7QUFUa0MsV0FZaEJLLFNBWmdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQVkvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFUUosTUFBTSxDQUFDQyxRQUFQLENBQWdCSSxlQUFoQixJQUFtQyxJQUFuQyxJQUErQ0wsTUFBTSxDQUFDTSxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixtQkFBNUIsS0FBb0QsTUFGM0c7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHOEJMLEdBQUcsQ0FBQ00sU0FBSixDQUFjQyxjQUFkLEVBSDlCOztBQUFBO0FBR1lDLGNBQUFBLFNBSFo7QUFBQTtBQUFBLHFCQUtnQ0EsU0FBUyxDQUFDQyxTQUFWLENBQW9CWCxNQUFNLENBQUNDLFFB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LEVBQUU7QUFBUjtBQUExRixrQkFDSTtBQUNJLFlBQVEsRUFBQyxTQURiO0FBRUksWUFBUSxFQUFDLFNBRmI7QUFHSSxLQUFDLEVBQUM7QUFITixJQURKLENBREosQ0FESixDQVZKLENBREosQ0FESixDQVRKLENBSEosQ0FESixDQURKO0FBZ0RIOzs7Ozs7OztVQzdKRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQge0NvbnRlbnRMb2FkZXJ9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vQ29udGVudExvYWRlcidcbmltcG9ydCB7IHVzZUludGwgfSBmcm9tICdyZWFjdC1pbnRsJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5leHBvcnQgZnVuY3Rpb24gTmF2KCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbYWNjLCBzZXRBY2NdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtCYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFtpc1NpZ25lZCwgc2V0U2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcblx0Y29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpXG5cdGNvbnN0IENvbnRyYWN0S2l0ID0gcmVxdWlyZSgnQGNlbG8vY29udHJhY3RraXQnKVxuXHRjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxuXHRjb25zdCBraXQgPSBDb250cmFjdEtpdC5uZXdLaXRGcm9tV2ViMyh3ZWIzKVxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEluZm8oKSB7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIikgPT0gXCJ0cnVlXCIpICB7XG4gICAgICAgICAgICBsZXQgY1VTRHRva2VuID0gYXdhaXQga2l0LmNvbnRyYWN0cy5nZXRTdGFibGVUb2tlbigpXG5cbiAgICAgICAgICAgIGxldCBjVVNEQmFsYW5jZSA9IGF3YWl0IGNVU0R0b2tlbi5iYWxhbmNlT2Yod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcylcblxuXG4gICAgICAgICAgICBhd2FpdCBzZXRBY2Mod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcy50b1N0cmluZygpLnN1YnN0cmluZygwLCAyNSkgKyBcIi4uLlwiKTtcbiAgICAgICAgIFxuICAgICAgICAgICAgc2V0QmFsYW5jZShjVVNEQmFsYW5jZS8xMDAwMDAwMDAwMDAwMDAwMDAwICsgXCIgY1VTRFwiKTtcbiAgICAgICAgICAgIHNldFNpZ25lZCh0cnVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aG91dFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0U2lnbmVkKGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhvdXRTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGZldGNoSW5mbygpO1xuICAgICAgICB9LCAxMDAwKVxuXG4gICAgfSwgWzEwMDBdKTtcbiAgICBmdW5jdGlvbiBOYXZCdXR0b25zKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgXG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb25hdGlvblwiIGlkPVwiZG9uYXRpb25idG5OYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgRG9uYXRpb25cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0NyZWF0ZUV2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgRXZlbnRzXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC8+KVxuICAgIH1cbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vQ2Vsb1xuICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdENlbG8oKSB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzB4YWVmMycsIH1dLCAvLzQ0Nzg3XG4gICAgICAgIH0pO1xuICAgICAgICBnZXRhY2M7XG4gICAgfSBjYXRjaCAoc3dpdGNoRXJyb3I6IGFueSkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cbiAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnQWxmYWpvcmVzIENlbG8gVGVzdG5ldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NVU0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdDVVNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL2FsZmFqb3Jlcy1mb3Juby5jZWxvLXRlc3RuZXQub3JnJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcbiAgICB9XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJ0cnVlXCIpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0Q2Vsbygpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIsIFwiXCIpXG5cbn1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8TmF2QnV0dG9ucyAvPlxuXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd3aXRob3V0U2lnbicgY2xhc3NOYW1lPVwid2FsbGV0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRcIj4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0Q2Vsb30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBhcmlhLWRpc2FibGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndpdGhTaWduXCIgY2xhc3NOYW1lPVwid2FsbGV0c1wiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRcIiBzdHlsZT17eyBoZWlnaHQ6IDQ4LCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fd3JhcHBlclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19pbmZvXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2FkZHJlc3NcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGxldHRlclNwYWNpbmc6IFwiMC41cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fYmFsYW5jZVwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMzYgMTkwIDMzIC8gNTAlKVwiLCBmb250U2l6ZTogMTIsIGxldHRlclNwYWNpbmc6IFwiMC42cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja0Rpc0Nvbm5lY3RDZWxvfSBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ291dFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGhlaWdodD17MzJ9IHdpZHRoPXszMn0gc3R5bGU9e3sgZmlsbDogXCJyZ2IoMTk3LCAyMjgsIDI0MylcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOC40NzUzIDE4LjI5MDNIMTkuMjk1SDIwLjExNDZWMjEuNTE2MlYyMy45MzU1SDE1LjE5NjZMMTUuMTk2NyAyN0wxMy4wNDkyIDI2LjI3OTlMOC4xMTYzMyAyNC42NjJDNy40NDU5IDI0LjQzMyA3IDI0LjI3ODIgNyAyNC4yNzgyVjdIOC42MzkzOEM4LjY2MTk2IDcgOC42ODM3OCA3LjAwNDU5IDguNzA1NTggNy4wMDkxOUM4LjcyMjQ4IDcuMDEyNzUgOC43MzkzNiA3LjAxNjMgOC43NTY1OSA3LjAxNzcyQzguNzY5MjkgNy4wMTYwNSA4Ljc4MTI1IDcuMDEyNjcgOC43OTMxNSA3LjAwOTMxQzguODA5NjggNy4wMDQ2NCA4LjgyNjEgNyA4Ljg0NDI0IDdIMTcuNjU1NkgyMC4xMTQ2VjExLjgzODdIMTkuMjk1SDE4LjQ3NTNMMTguNDc1NCA4LjYxMjY3TDE3LjY1NTYgOC42MTI4MUgxMy44Mzc2SDExLjkxOEwxNS4xOTY2IDkuNDE5MzZWMjIuMzIyNkgxOC40NzUzVjIxLjUxNjJWMTguMjkwM1pNMjMuMTUzIDExLjI2ODZMMjcgMTUuMDY0NEMyNyAxNS4wNjQ0IDI2Ljc1MjIgMTUuMzE5NCAyNi40MzE4IDE1LjYzNDZMMjMuMTUzIDE4Ljg2MDVMMjEuNzU0MSAyMC4yMjU3TDIxLjc1MzkgMTUuODcwOUgxNy42NTU2VjE1LjA2NDVWMTQuMjU4MUgyMS43NTM5TDIxLjc1NDEgOS45MDMwMUwyMy4xNTMgMTEuMjY4NlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cblxuICAgICAgICA8L25hdj5cbiAgICApXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZTkxOGU2MTViZjdmODJjODMwMDhcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsIk5hdiIsImFjYyIsInNldEFjYyIsIkJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiaXNTaWduZWQiLCJzZXRTaWduZWQiLCJXZWIzIiwicmVxdWlyZSIsIkNvbnRyYWN0S2l0Iiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwia2l0IiwibmV3S2l0RnJvbVdlYjMiLCJmZXRjaEluZm8iLCJzZWxlY3RlZEFkZHJlc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29udHJhY3RzIiwiZ2V0U3RhYmxlVG9rZW4iLCJjVVNEdG9rZW4iLCJiYWxhbmNlT2YiLCJjVVNEQmFsYW5jZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInNldEludGVydmFsIiwiTmF2QnV0dG9ucyIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwib25DbGlja0Rpc0Nvbm5lY3RDZWxvIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwicGFkZGluZyIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9