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
              setBalance(cUSDBalance / 1000000000000000000 + " cUSD");
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
/******/ 	__webpack_require__.h = function() { return "7a82afb20f3472198146"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmIzYzUxZjY0OTgzOGVjYTI1NGE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBSU8sU0FBU0ksR0FBVCxHQUE0QjtBQUMvQixrQkFBc0JILCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBO0FBQUEsTUFBT0ksR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsbUJBQThCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsU0FBakI7O0FBRUgsTUFBTUMsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDhDQUFELENBQXBCOztBQUNBLE1BQU1DLFdBQVcsR0FBR0QsbUJBQU8sQ0FBQyx3RUFBRCxDQUEzQjs7QUFDQSxNQUFNRSxJQUFJLEdBQUcsSUFBSUgsSUFBSixDQUFTSSxNQUFNLENBQUNDLFFBQWhCLENBQWI7QUFDQSxNQUFNQyxHQUFHLEdBQUdKLFdBQVcsQ0FBQ0ssY0FBWixDQUEyQkosSUFBM0IsQ0FBWjs7QUFUa0MsV0FZaEJLLFNBWmdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQVkvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFUUosTUFBTSxDQUFDQyxRQUFQLENBQWdCSSxlQUFoQixJQUFtQyxJQUFuQyxJQUErQ0wsTUFBTSxDQUFDTSxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixtQkFBNUIsS0FBb0QsTUFGM0c7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHOEJMLEdBQUcsQ0FBQ00sU0FBSixDQUFjQyxjQUFkLEVBSDlCOztBQUFBO0FBR1lDLGNBQUFBLFNBSFo7QUFBQTtBQUFBLHFCQUtnQ0EsU0FBUyxDQUFDQyxTQUFWLENBQW9CWCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JJLGVBQXBDLENBTGhDOztBQUFBO0FBS1lPLGNBQUFBLFdBTFo7QUFBQTtBQUFBLHFCQVFjckIsTUFBTSxDQUFDUyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JJLGVBQWhCLENBQWdDUSxRQUFoQyxHQUEyQ0MsU0FBM0MsQ0FBcUQsQ0FBckQsRUFBd0QsRUFBeEQsSUFBOEQsS0FBL0QsQ0FScEI7O0FBQUE7QUFTUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBckIsY0FBQUEsVUFBVSxDQUFDbUIsV0FBVyxHQUFDLG1CQUFaLEdBQWtDLE9BQW5DLENBQVY7QUFDQWpCLGNBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUssY0FBQUEsTUFBTSxDQUFDZSxRQUFQLENBQWdCQyxjQUFoQixDQUErQixhQUEvQixFQUE4Q0MsS0FBOUMsQ0FBb0RDLE9BQXBELEdBQThELE1BQTlEO0FBQ0FsQixjQUFBQSxNQUFNLENBQUNlLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLFVBQS9CLEVBQTJDQyxLQUEzQyxDQUFpREMsT0FBakQsR0FBMkQsRUFBM0Q7O0FBM0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWitCO0FBQUE7QUFBQTs7QUEwQy9CL0IsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pnQyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiZixNQUFBQSxTQUFTO0FBQ1osS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUlILEdBTFEsRUFLTixDQUFDLElBQUQsQ0FMTSxDQUFUOztBQU1BLFdBQVNnQixVQUFULEdBQW1DO0FBRS9CLHdCQUFRLGlIQUNKLDBFQUNJLGlEQUFDLHFEQUFEO0FBQVMsUUFBRSxFQUFDLFdBQVo7QUFBd0IsUUFBRSxFQUFDO0FBQTNCLGtCQURKLENBREksZUFNSiwwRUFDSSxpREFBQyxxREFBRDtBQUFTLFFBQUUsRUFBQztBQUFaLHVCQURKLENBTkksQ0FBUjtBQVlIOztBQUNELG1CQUFrQ2xDLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT21DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEIsaUJBL0QrQixDQWlFakM7OztBQWpFaUMsV0FrRWxCQyxrQkFsRWtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1OQWtFakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDcUJ2QixNQUFNLENBQUNDLFFBQVAsQ0FBZ0J1QixPQUFoQixDQUF3QjtBQUFFQyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBeEIsQ0FEckI7O0FBQUE7QUFDTUMsY0FBQUEsTUFETjtBQUVFQSxjQUFBQSxNQUFNO0FBRlI7QUFBQTtBQUFBLHFCQUkyQjFCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnVCLE9BQWhCLENBQXdCO0FBQ3pDQyxnQkFBQUEsTUFBTSxFQUFFLDRCQURpQztBQUV6Q0UsZ0JBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQUVDLGtCQUFBQSxPQUFPLEVBQUU7QUFBWCxpQkFBRCxDQUZpQyxDQUVQOztBQUZPLGVBQXhCLENBSjNCOztBQUFBO0FBSVlDLGNBQUFBLE1BSlo7QUFRTUEsY0FBQUEsTUFBTTtBQVJaO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQVdVLGFBQVlDLElBQVosS0FBcUIsSUFYL0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWFvQjlCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnVCLE9BQWhCLENBQXdCO0FBQzFCQyxnQkFBQUEsTUFBTSxFQUFFLHlCQURrQjtBQUUxQkUsZ0JBQUFBLE1BQU0sRUFBRSxDQUNKO0FBQ0lDLGtCQUFBQSxPQUFPLEVBQUUsUUFEYjtBQUN1QjtBQUNuQkcsa0JBQUFBLFNBQVMsRUFBRSx3QkFGZjtBQUdJQyxrQkFBQUEsY0FBYyxFQUFFO0FBQ1pDLG9CQUFBQSxJQUFJLEVBQUUsTUFETTtBQUVaQyxvQkFBQUEsTUFBTSxFQUFFLE1BRkk7QUFHWkMsb0JBQUFBLFFBQVEsRUFBRTtBQUhFLG1CQUhwQjtBQVFJQyxrQkFBQUEsT0FBTyxFQUFFLENBQUMsMENBQUQ7QUFSYixpQkFESTtBQUZrQixlQUF4QixDQWJwQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNkJjO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUE5QmQ7QUFtQ0V0QyxjQUFBQSxNQUFNLENBQUNNLFlBQVAsQ0FBb0JpQyxPQUFwQixDQUE0QixtQkFBNUIsRUFBaUQsTUFBakQ7QUFDQXZDLGNBQUFBLE1BQU0sQ0FBQ3dDLFFBQVAsQ0FBZ0JDLE1BQWhCOztBQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWxFaUM7QUFBQTtBQUFBOztBQUFBLFdBeUdwQkMscUJBekdvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxzTkF5R25DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTFDLGNBQUFBLE1BQU0sQ0FBQ00sWUFBUCxDQUFvQmlDLE9BQXBCLENBQTRCLG1CQUE1QixFQUFpRCxFQUFqRDtBQUNBdkMsY0FBQUEsTUFBTSxDQUFDd0MsUUFBUCxDQUFnQkMsTUFBaEI7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F6R21DO0FBQUE7QUFBQTs7QUErRy9CLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksMEVBQ0ksaURBQUMsVUFBRCxPQURKLGVBR0ksMEVBQ0k7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDUTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRWxCLGtCQUEvQjtBQUFtRCxhQUFTLEVBQUMsbUJBQTdEO0FBQWlGLHFCQUFjO0FBQS9GLGFBRFIsQ0FESixDQURKLGVBU0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUMsU0FBN0I7QUFBdUMsU0FBSyxFQUFFO0FBQUVMLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQTlDLGtCQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUV5QixNQUFBQSxNQUFNLEVBQUUsRUFBVjtBQUFjekIsTUFBQUEsT0FBTyxFQUFFLE1BQXZCO0FBQStCMEIsTUFBQUEsVUFBVSxFQUFFO0FBQTNDO0FBQS9CLGtCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUssRUFBRTtBQUFFMUIsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUIwQixNQUFBQSxVQUFVLEVBQUUsUUFBL0I7QUFBeUNELE1BQUFBLE1BQU0sRUFBRTtBQUFqRDtBQUF4QyxrQkFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUssRUFBRTtBQUFFRSxNQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkMsTUFBQUEsYUFBYSxFQUFFO0FBQS9CO0FBQXhDLEtBQ0t4RCxHQURMLENBREosZUFJSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxTQUFLLEVBQUU7QUFBRXlELE1BQUFBLEtBQUssRUFBRSx1QkFBVDtBQUFrQ0YsTUFBQUEsUUFBUSxFQUFFLEVBQTVDO0FBQWdEQyxNQUFBQSxhQUFhLEVBQUU7QUFBL0Q7QUFBeEMsS0FDS3RELE9BREwsQ0FKSixDQUZKLGVBVUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUVrRCxxQkFBL0I7QUFBc0QsYUFBUyxFQUFDLGdCQUFoRTtBQUFpRixTQUFLLEVBQUU7QUFBRU0sTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBeEYsa0JBQ0k7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0k7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLFdBQWhEO0FBQTRELFVBQU0sRUFBRSxFQUFwRTtBQUF3RSxTQUFLLEVBQUUsRUFBL0U7QUFBbUYsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRTtBQUFSO0FBQTFGLGtCQUNJO0FBQ0ksWUFBUSxFQUFDLFNBRGI7QUFFSSxZQUFRLEVBQUMsU0FGYjtBQUdJLEtBQUMsRUFBQztBQUhOLElBREosQ0FESixDQURKLENBVkosQ0FESixDQURKLENBVEosQ0FISixDQURKLENBREo7QUFnREg7Ozs7Ozs7O1VDeEtELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7Q29udGVudExvYWRlcn0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50TG9hZGVyJ1xuaW1wb3J0IHsgdXNlSW50bCB9IGZyb20gJ3JlYWN0LWludGwnXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBOYXYoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFthY2MsIHNldEFjY10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuXHRjb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIilcblx0Y29uc3QgQ29udHJhY3RLaXQgPSByZXF1aXJlKCdAY2Vsby9jb250cmFjdGtpdCcpXG5cdGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG5cdGNvbnN0IGtpdCA9IENvbnRyYWN0S2l0Lm5ld0tpdEZyb21XZWIzKHdlYjMpXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSW5mbygpIHtcblxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSA9PSBcInRydWVcIikgIHtcbiAgICAgICAgICAgIGxldCBjVVNEdG9rZW4gPSBhd2FpdCBraXQuY29udHJhY3RzLmdldFN0YWJsZVRva2VuKClcblxuICAgICAgICAgICAgbGV0IGNVU0RCYWxhbmNlID0gYXdhaXQgY1VTRHRva2VuLmJhbGFuY2VPZih3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKVxuXG5cbiAgICAgICAgICAgIGF3YWl0IHNldEFjYyh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDI1KSArIFwiLi4uXCIpO1xuICAgICAgICAgICAgLy8gbGV0IEJsYyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hbGZham9yZXMtYmxvY2tzY291dC5jZWxvLXRlc3RuZXQub3JnL2FwaS9ldGgtcnBjXCIsIHtcbiAgICAgICAgICAgIC8vICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgLy8gICAgICAgICBcImFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDFcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJhY2NlcHQtbGFuZ3VhZ2VcIjogXCJlbi1VUyxlbjtxPTAuOVwiLFxuICAgICAgICAgICAgLy8gICAgICAgICBcImNhY2hlLWNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxuICAgICAgICAgICAgLy8gICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcblxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgXCJib2R5XCI6IFwie1xcXCJpZFxcXCI6MCxcXFwianNvbnJwY1xcXCI6XFxcIjIuMFxcXCIsXFxcIm1ldGhvZFxcXCI6XFxcImV0aF9nZXRCYWxhbmNlXFxcIixcXFwicGFyYW1zXFxcIjpbXFxcIlwiICsgd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyArIFwiXFxcIixcXFwibGF0ZXN0XFxcIl19XCIsXG4gICAgICAgICAgICAvLyAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgICAgICAvLyAgICAgXCJtb2RlXCI6IFwiY29yc1wiLFxuICAgICAgICAgICAgLy8gICAgIFwiY3JlZGVudGlhbHNcIjogXCJvbWl0XCJcbiAgICAgICAgICAgIC8vIH0pLnRoZW4oZSA9PiBlLmpzb24oKSkudGhlbihlID0+IGUucmVzdWx0KTtcbiAgICAgICAgICAgIC8vIGxldCBwcmljZSA9IHBhcnNlSW50KEJsYykgLyAxMDAwMDAwMDAwMDAwMDAwMDAwXG5cbiAgICAgICAgICAgIHNldEJhbGFuY2UoY1VTREJhbGFuY2UvMTAwMDAwMDAwMDAwMDAwMDAwMCArIFwiIGNVU0RcIik7XG4gICAgICAgICAgICBzZXRTaWduZWQodHJ1ZSk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZldGNoSW5mbygpO1xuICAgICAgICB9LCAxMDApXG5cbiAgICB9LCBbMjAwMF0pO1xuICAgIGZ1bmN0aW9uIE5hdkJ1dHRvbnMoKTogSlNYLkVsZW1lbnQge1xuICAgICBcbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvbmF0aW9uXCIgaWQ9XCJkb25hdGlvbmJ0bk5hdlwiPlxuICAgICAgICAgICAgICAgICAgICBEb25hdGlvblxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvQ3JlYXRlRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudHNcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz4pXG4gICAgfVxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy9DZWxvXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0Q2VsbygpIHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHhhZWYzJywgfV0sIC8vNDQ3ODdcbiAgICAgICAgfSk7XG4gICAgICAgIGdldGFjYztcbiAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcjogYW55KSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4YWVmMycsIC8vNDQ3ODdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ1VTRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NVU0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcInRydWVcIilcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0Q2Vsbygpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIsIFwiXCIpXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG59XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPE5hdkJ1dHRvbnMgLz5cblxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nd2l0aG91dFNpZ24nIGNsYXNzTmFtZT1cIndhbGxldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdENlbG99IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgYXJpYS1kaXNhYmxlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aXRoU2lnblwiIGNsYXNzTmFtZT1cIndhbGxldHNcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCIgc3R5bGU9e3sgaGVpZ2h0OiA0OCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX3dyYXBwZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9faW5mb1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19hZGRyZXNzXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBsZXR0ZXJTcGFjaW5nOiBcIjAuNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2JhbGFuY2VcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjM2IDE5MCAzMyAvIDUwJSlcIiwgZm9udFNpemU6IDEyLCBsZXR0ZXJTcGFjaW5nOiBcIjAuNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0Q2Vsb30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dvdXRcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9ezMyfSB3aWR0aD17MzJ9IHN0eWxlPXt7IGZpbGw6IFwicmdiKDE5NywgMjI4LCAyNDMpXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjdhODJhZmIyMGYzNDcyMTk4MTQ2XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJOYXYiLCJhY2MiLCJzZXRBY2MiLCJCYWxhbmNlIiwic2V0QmFsYW5jZSIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwiV2ViMyIsInJlcXVpcmUiLCJDb250cmFjdEtpdCIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImtpdCIsIm5ld0tpdEZyb21XZWIzIiwiZmV0Y2hJbmZvIiwic2VsZWN0ZWRBZGRyZXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnRyYWN0cyIsImdldFN0YWJsZVRva2VuIiwiY1VTRHRva2VuIiwiYmFsYW5jZU9mIiwiY1VTREJhbGFuY2UiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiTmF2QnV0dG9ucyIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbkNsaWNrRGlzQ29ubmVjdENlbG8iLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJwYWRkaW5nIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=