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
                _context.next = 13;
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
              // let Blc = await fetch("https://alfajores-blockscout.celo-testnet.org/api/eth-rpc", {
              //     "headers": {
              //         "accept": "application/json, text/javascript, */*; q=0.01",
              //         "accept-language": "en-US,en;q=0.9",
              //         "cache-control": "no-cache",
              //         "content-type": "application/json; charset=UTF-8",
              //     },
              //     "body": "{\"id\":0,\"jsonrpc\":\"2.0\",\"method\":\"eth_getBalance\",\"params\":[\"" + window.ethereum.selectedAddress + "\",\"latest\"]}",
              //     "method": "POST",
              //     "mode": "cors",
              //     "credentials": "omit"
              // }).then(e => e.json()).then(e => e.result);
              // let price = parseInt(Blc) / 1000000000000000000
              setBalance(cUSDBalance + " cUSD");
              setSigned(true);
              window.document.getElementById("withoutSign").style.display = "none";
              window.document.getElementById("withSign").style.display = "";

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchInfo.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setTimeout(function () {
      fetchInfo();
    }, 100);
  }, [2000]);

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
              window.location.reload();

            case 24:
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
              window.location.reload();

            case 2:
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
/******/ 	__webpack_require__.h = function() { return "b3c51f649838eca254a7"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmRiMDg3MDBiNWNhYTVhMGYzYzg3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBSU8sU0FBU0ksR0FBVCxHQUE0QjtBQUMvQixrQkFBc0JILCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBO0FBQUEsTUFBT0ksR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsbUJBQThCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsU0FBakI7O0FBRUgsTUFBTUMsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDhDQUFELENBQXBCOztBQUNBLE1BQU1DLFdBQVcsR0FBR0QsbUJBQU8sQ0FBQyx3RUFBRCxDQUEzQjs7QUFDQSxNQUFNRSxJQUFJLEdBQUcsSUFBSUgsSUFBSixDQUFTSSxNQUFNLENBQUNDLFFBQWhCLENBQWI7QUFDQSxNQUFNQyxHQUFHLEdBQUdKLFdBQVcsQ0FBQ0ssY0FBWixDQUEyQkosSUFBM0IsQ0FBWjs7QUFUa0MsV0FZaEJLLFNBWmdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQVkvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFUUosTUFBTSxDQUFDQyxRQUFQLENBQWdCSSxlQUFoQixJQUFtQyxJQUFuQyxJQUErQ0wsTUFBTSxDQUFDTSxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixtQkFBNUIsS0FBb0QsTUFGM0c7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHOEJMLEdBQUcsQ0FBQ00sU0FBSixDQUFjQyxjQUFkLEVBSDlCOztBQUFBO0FBR1lDLGNBQUFBLFNBSFo7QUFBQTtBQUFBLHFCQUtnQ0EsU0FBUyxDQUFDQyxTQUFWLENBQW9CWCxNQUFNLENBQUNDLFFB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REosQ0FWSixDQURKLENBREosQ0FUSixDQUhKLENBREosQ0FESjtBQWdESDs7Ozs7Ozs7VUN4S0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2xheW91dC9OYXYvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtDb250ZW50TG9hZGVyfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRMb2FkZXInXG5pbXBvcnQgeyB1c2VJbnRsIH0gZnJvbSAncmVhY3QtaW50bCdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2FjYywgc2V0QWNjXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbQmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBbaXNTaWduZWQsIHNldFNpZ25lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gXG5cdGNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKVxuXHRjb25zdCBDb250cmFjdEtpdCA9IHJlcXVpcmUoJ0BjZWxvL2NvbnRyYWN0a2l0Jylcblx0Y29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSlcblx0Y29uc3Qga2l0ID0gQ29udHJhY3RLaXQubmV3S2l0RnJvbVdlYjMod2ViMylcblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbmZvKCkge1xuXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwgJiYgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIpID09IFwidHJ1ZVwiKSAge1xuICAgICAgICAgICAgbGV0IGNVU0R0b2tlbiA9IGF3YWl0IGtpdC5jb250cmFjdHMuZ2V0U3RhYmxlVG9rZW4oKVxuXG4gICAgICAgICAgICBsZXQgY1VTREJhbGFuY2UgPSBhd2FpdCBjVVNEdG9rZW4uYmFsYW5jZU9mKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MpXG5cblxuICAgICAgICAgICAgYXdhaXQgc2V0QWNjKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMjUpICsgXCIuLi5cIik7XG4gICAgICAgICAgICAvLyBsZXQgQmxjID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FsZmFqb3Jlcy1ibG9ja3Njb3V0LmNlbG8tdGVzdG5ldC5vcmcvYXBpL2V0aC1ycGNcIiwge1xuICAgICAgICAgICAgLy8gICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIFwiYWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMVwiLFxuICAgICAgICAgICAgLy8gICAgICAgICBcImFjY2VwdC1sYW5ndWFnZVwiOiBcImVuLVVTLGVuO3E9MC45XCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIFwiY2FjaGUtY29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICBcImJvZHlcIjogXCJ7XFxcImlkXFxcIjowLFxcXCJqc29ucnBjXFxcIjpcXFwiMi4wXFxcIixcXFwibWV0aG9kXFxcIjpcXFwiZXRoX2dldEJhbGFuY2VcXFwiLFxcXCJwYXJhbXNcXFwiOltcXFwiXCIgKyB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICsgXCJcXFwiLFxcXCJsYXRlc3RcXFwiXX1cIixcbiAgICAgICAgICAgIC8vICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICAgIC8vICAgICBcIm1vZGVcIjogXCJjb3JzXCIsXG4gICAgICAgICAgICAvLyAgICAgXCJjcmVkZW50aWFsc1wiOiBcIm9taXRcIlxuICAgICAgICAgICAgLy8gfSkudGhlbihlID0+IGUuanNvbigpKS50aGVuKGUgPT4gZS5yZXN1bHQpO1xuICAgICAgICAgICAgLy8gbGV0IHByaWNlID0gcGFyc2VJbnQoQmxjKSAvIDEwMDAwMDAwMDAwMDAwMDAwMDBcblxuICAgICAgICAgICAgc2V0QmFsYW5jZShjVVNEQmFsYW5jZSArIFwiIGNVU0RcIik7XG4gICAgICAgICAgICBzZXRTaWduZWQodHJ1ZSk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZldGNoSW5mbygpO1xuICAgICAgICB9LCAxMDApXG5cbiAgICB9LCBbMjAwMF0pO1xuICAgIGZ1bmN0aW9uIE5hdkJ1dHRvbnMoKTogSlNYLkVsZW1lbnQge1xuICAgICBcbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvbmF0aW9uXCIgaWQ9XCJkb25hdGlvbmJ0bk5hdlwiPlxuICAgICAgICAgICAgICAgICAgICBEb25hdGlvblxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvQ3JlYXRlRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudHNcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz4pXG4gICAgfVxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy9DZWxvXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0Q2VsbygpIHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHhhZWYzJywgfV0sIC8vNDQ3ODdcbiAgICAgICAgfSk7XG4gICAgICAgIGdldGFjYztcbiAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcjogYW55KSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4YWVmMycsIC8vNDQ3ODdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ1VTRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NVU0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcInRydWVcIilcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0Q2Vsbygpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIsIFwiXCIpXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG59XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPE5hdkJ1dHRvbnMgLz5cblxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nd2l0aG91dFNpZ24nIGNsYXNzTmFtZT1cIndhbGxldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdENlbG99IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgYXJpYS1kaXNhYmxlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aXRoU2lnblwiIGNsYXNzTmFtZT1cIndhbGxldHNcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCIgc3R5bGU9e3sgaGVpZ2h0OiA0OCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX3dyYXBwZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9faW5mb1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19hZGRyZXNzXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBsZXR0ZXJTcGFjaW5nOiBcIjAuNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2JhbGFuY2VcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjM2IDE5MCAzMyAvIDUwJSlcIiwgZm9udFNpemU6IDEyLCBsZXR0ZXJTcGFjaW5nOiBcIjAuNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0Q2Vsb30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dvdXRcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9ezMyfSB3aWR0aD17MzJ9IHN0eWxlPXt7IGZpbGw6IFwicmdiKDE5NywgMjI4LCAyNDMpXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImIzYzUxZjY0OTgzOGVjYTI1NGE3XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJOYXYiLCJhY2MiLCJzZXRBY2MiLCJCYWxhbmNlIiwic2V0QmFsYW5jZSIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwiV2ViMyIsInJlcXVpcmUiLCJDb250cmFjdEtpdCIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImtpdCIsIm5ld0tpdEZyb21XZWIzIiwiZmV0Y2hJbmZvIiwic2VsZWN0ZWRBZGRyZXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnRyYWN0cyIsImdldFN0YWJsZVRva2VuIiwiY1VTRHRva2VuIiwiYmFsYW5jZU9mIiwiY1VTREJhbGFuY2UiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiTmF2QnV0dG9ucyIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbkNsaWNrRGlzQ29ubmVjdENlbG8iLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJwYWRkaW5nIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=