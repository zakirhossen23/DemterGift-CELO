self["webpackHotUpdatedemeter"]("/index",{

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ "./node_modules/core-js-pure/stable/instance/concat.js");

/***/ }),

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\src\\components\\components\\modals\\BidNFTModal.jsx: Unexpected reserved word 'await'. (25:20)\n\n\u001b[0m \u001b[90m 23 |\u001b[39m \t\u001b[36mconst\u001b[39m web3 \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mWeb3\u001b[39m(window\u001b[33m.\u001b[39methereum)\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m \t\u001b[36mconst\u001b[39m kit \u001b[33m=\u001b[39m \u001b[33mContractKit\u001b[39m\u001b[33m.\u001b[39mnewKitFromWeb3(web3)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m     \u001b[36mlet\u001b[39m cUSDtoken \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m kit\u001b[33m.\u001b[39mcontracts\u001b[33m.\u001b[39mgetStableToken()\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m \t\u001b[36mconst\u001b[39m [\u001b[33mAmount\u001b[39m\u001b[33m,\u001b[39m \u001b[33mAmountInput\u001b[39m] \u001b[33m=\u001b[39m \u001b[33mUseFormInput\u001b[39m({\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m \t\ttype\u001b[33m:\u001b[39m \u001b[32m'text'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at Object._raise (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\error.js:151:45)\n    at Object.raiseWithData (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\error.js:146:17)\n    at Object.raise (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\error.js:89:17)\n    at Object.checkReservedWord (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\expression.js:2702:12)\n    at Object.parseIdentifierName (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\expression.js:2637:12)\n    at Object.parseIdentifier (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\expression.js:2605:23)\n    at Object.parseExprAtom (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\expression.js:1246:27)\n    at Object.parseExprAtom (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\plugins\\jsx\\index.js:572:22)\n    at Object.parseExprSubscripts (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\expression.js:680:23)\n    at Object.parseUpdate (C:\\Users\\zakir\\Documents\\DemeterGift-ONE-main\\DemeterGift-CELO\\node_modules\\@babel\\parser\\src\\parser\\expression.js:660:21)");

/***/ }),

/***/ "./src/components/components/modals/ViewBidNFTModal.jsx":
/*!**************************************************************!*\
  !*** ./src/components/components/modals/ViewBidNFTModal.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewmodalShow; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
















function ViewmodalShow(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      id = _ref.id,
      title = _ref.title;

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  function addZero(num) {
    return num < 10 ? "0".concat(num) : num;
  }

  function AmPM(num) {
    return num < 12 ? 'AM' : 'PM';
  }

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var value, arr, totalBids, i, obj, object, _context, _context2, _context3, _context4, _context5, _context6, pricedes1, BidId, Datetime, currentdate, element;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;

              if (!(contract && id)) {
                _context7.next = 43;
                break;
              }

              _context7.next = 4;
              return contract.tokenURI(id);

            case 4:
              value = _context7.sent;
              console.log(value);
              arr = [];
              _context7.next = 9;
              return contract.getBidsSearchToken(id);

            case 9:
              totalBids = _context7.sent;
              console.log(totalBids);
              i = 0;

            case 12:
              if (!(i < Number(10))) {
                _context7.next = 39;
                break;
              }

              _context7.next = 15;
              return totalBids[i];

            case 15:
              obj = _context7.sent;
              object = {};
              _context7.prev = 17;
              _context7.next = 20;
              return JSON.parse(obj);

            case 20:
              object = _context7.sent;
              _context7.next = 25;
              break;

            case 23:
              _context7.prev = 23;
              _context7.t0 = _context7["catch"](17);

            case 25:
              if (!object.title) {
                _context7.next = 36;
                break;
              }

              pricedes1 = 0;

              try {
                pricedes1 = formatter.format(Number(object.properties.bid.description * 3.054));
              } catch (ex) {}

              _context7.t1 = Number;
              _context7.next = 31;
              return contract.getBidIdByUri(obj);

            case 31:
              _context7.t2 = _context7.sent;
              BidId = (0, _context7.t1)(_context7.t2);
              Datetime = new Date(object.properties.time.description);
              currentdate = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context6 = "".concat(addZero(Datetime.getDate()), "/")).call(_context6, addZero(Datetime.getMonth() + 1), "/")).call(_context5, addZero(Datetime.getFullYear()), " ")).call(_context4, addZero(Datetime.getHours()), ":")).call(_context3, addZero(Datetime.getMinutes()), ":")).call(_context2, addZero(Datetime.getSeconds()), " ")).call(_context, AmPM(Datetime.getHours()));
              arr.push({
                Id: BidId,
                name: object.properties.username.description,
                time: currentdate,
                bidprice: object.properties.bid.description,
                bidpriceusd: pricedes1
              });

            case 36:
              i++;
              _context7.next = 12;
              break;

            case 39:
              console.log(arr);
              setList(arr);
              if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";

              if (document.getElementById("Loadingtable")) {
                element = document.getElementById("Loadingtable");
                element.style = "display:block";
                element.setAttribute("id", "");
              }

            case 43:
              _context7.next = 48;
              break;

            case 45:
              _context7.prev = 45;
              _context7.t3 = _context7["catch"](0);
              console.error(_context7.t3);

            case 48:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee, null, [[0, 45], [17, 23]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchContractData();
  }, [contract]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchContractData,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "xl",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "View Bid - ", title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "Loadingtable",
    style: {
      display: 'none'
    },
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeaderContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderDateContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderUserContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "User Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderBidContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "Bid")))), " ", _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.Id,
      className: "tableFullRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellDateContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, listItem.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellUserContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, listItem.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellBidContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, "$", listItem.bidpriceusd, " (", listItem.bidprice, " cUSD)")))));
  }))));
}

/***/ }),

/***/ "./src/pages/donation/auction/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/donation/auction/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewNFT; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var _components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components/modals/BidNFTModal */ "./src/components/components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/components/modals/ViewBidNFTModal */ "./src/components/components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
















function ViewNFT(user) {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_10__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(-1),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      eventId = _useState2[0],
      setEventId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      tokenName = _useState6[0],
      setTokenName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      tokenSymbol = _useState8[0],
      setTokenSymbol = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      title = _useState10[0],
      setTitle = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      goalusd = _useState12[0],
      setgoalusd = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      goal = _useState14[0],
      setgoal = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      dateleft = _useState16[0],
      setdateleft = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      date = _useState18[0],
      setdate = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      dateleftBid = _useState20[0],
      setdateleftBid = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState22 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
      logo = _useState22[0],
      setlogo = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState24 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
      selectid = _useState24[0],
      setselectid = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState26 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
      selecttitle = _useState26[0],
      setselecttitle = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState28 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
      selectedAddress = _useState28[0],
      setselectedAddress = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState30 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
      selecttype = _useState30[0],
      setselecttype = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState32 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState31, 2),
      selectbid = _useState32[0],
      setselectbid = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState34 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState33, 2),
      eventuri = _useState34[0],
      setEventuri = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState36 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState35, 2),
      modalShow = _useState36[0],
      setModalShow = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState38 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState37, 2),
      ViewmodalShow = _useState38[0],
      setViewModalShow = _useState38[1];

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  function LeftDateBid(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  var regex = /\[(.*)\]/g;
  var str = decodeURIComponent(window.location.search);
  var m;
  var id = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    id = m[1];
  }

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var value, arr, totalTokens, i, obj, _object, pricedes1, TokenId, object;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(contract && id)) {
                _context.next = 58;
                break;
              }

              setEventId(id);
              _context.next = 5;
              return contract.eventURI(id);

            case 5:
              value = _context.sent;
              arr = [];
              _context.next = 9;
              return contract.gettokenSearchEventTotal(id);

            case 9:
              totalTokens = _context.sent;
              i = 0;

            case 11:
              if (!(i < Number(10))) {
                _context.next = 37;
                break;
              }

              _context.next = 14;
              return totalTokens[i];

            case 14:
              obj = _context.sent;
              _object = {};
              _context.prev = 16;
              _context.next = 19;
              return JSON.parse(obj);

            case 19:
              _object = _context.sent;
              _context.next = 24;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](16);

            case 24:
              if (!_object.title) {
                _context.next = 34;
                break;
              }

              pricedes1 = 0;

              try {
                pricedes1 = formatter.format(Number(_object.properties.price.description * 0.9972));
              } catch (ex) {}

              _context.t1 = Number;
              _context.next = 30;
              return contract.gettokenIdByUri(obj);

            case 30:
              _context.t2 = _context.sent;
              TokenId = (0, _context.t1)(_context.t2);
              console.log(TokenId);
              arr.push({
                Id: TokenId,
                name: _object.properties.name.description,
                description: _object.properties.description.description,
                Bidprice: pricedes1,
                price: Number(_object.properties.price.description),
                type: _object.properties.typeimg.description,
                image: _object.properties.image.description,
                wallet: _object.properties.wallet.description
              });

            case 34:
              i++;
              _context.next = 11;
              break;

            case 37:
              setList(arr);
              if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
              setEventuri(value);
              object = JSON.parse(value);
              setTitle(object.properties.Title.description);
              setgoalusd(formatter.format(Number(object.properties.Goal.description * 0.9972)));
              setgoal(Number(object.properties.Goal.description));
              setdateleft(LeftDate(object.properties.Date.description));
              setdate(object.properties.Date.description);
              setdateleftBid(LeftDateBid(object.properties.Date.description));
              setlogo(object.properties.logo.description);
              _context.t3 = setTokenName;
              _context.next = 51;
              return contract.name();

            case 51:
              _context.t4 = _context.sent;
              (0, _context.t3)(_context.t4);
              _context.t5 = setTokenSymbol;
              _context.next = 56;
              return contract.symbol();

            case 56:
              _context.t6 = _context.sent;
              (0, _context.t5)(_context.t6);

            case 58:
              _context.next = 63;
              break;

            case 60:
              _context.prev = 60;
              _context.t7 = _context["catch"](0);
              console.error(_context.t7);

            case 63:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 60], [16, 22]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    fetchContractData();
  }, [id, contract]);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("dateleft");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }

      var allDates = document.getElementsByName("date");

      for (var _i = 0; _i < allDates.length; _i++) {
        var date = allDates[_i].getAttribute("date");

        allDates[_i].innerHTML = LeftDateBid(date);
      }
    } catch (error) {}
  }

  function activateViewBidModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselectedAddress(e.target.getAttribute("address"));
    setselectbid(e.target.getAttribute("highestbid"));
    console.log(selectbid);
    setselecttype("NFT");
    setModalShow(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_head__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "row EventContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      "display": "flex",
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
    src: logo,
    className: "AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "DetialsContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, "$ ", goalusd, " (", goal, " cUSD)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
    name: "dateleft",
    date: date
  }, dateleft))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      key: listItem.Id,
      className: "row ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        "display": "flex",
        width: '100%'
      }
    }, listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage pixel"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h5", {
      style: {
        color: "rgb(139, 139, 139)"
      }
    }, "Type: ", listItem.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h5", {
      style: {
        color: "#8B8B8B"
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        width: "116px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      className: "smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
      className: "bidprice"
    }, "$ ", listItem.Bidprice, " (", listItem.price, " cUSD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      name: "date",
      date: date,
      className: "smallgrey"
    }, dateleftBid)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "BidAllcontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "Bidsbutton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      onClick: activateViewBidModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      className: "card-body bidbuttonText"
    }, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
      address: listItem.wallet,
      onClick: activateBidNFTModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
      address: listItem.wallet,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
      address: listItem.wallet,
      className: "card-body bidbuttonText"
    }, "Bid")))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: modalShow,
    onHide: function onHide() {
      setModalShow(false); // This is a poor implementation, better to implement an event listener

      fetchContractData();
    },
    contract: contract,
    tokenId: selectid,
    senderAddress: signerAddress,
    toAddress: selectedAddress,
    type: selecttype,
    eventId: eventId,
    Highestbid: selectbid
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: ViewmodalShow,
    onHide: function onHide() {
      setViewModalShow(false); // This is a poor implementation, better to implement an event listener

      fetchContractData();
    },
    id: selectid,
    title: selecttitle
  }));
}

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.concat */ "./node_modules/core-js-pure/modules/es.array.concat.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').concat;


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/concat.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var concat = __webpack_require__(/*! ../array/virtual/concat */ "./node_modules/core-js-pure/es/array/virtual/concat.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/concat.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/concat.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/concat */ "./node_modules/core-js-pure/es/instance/concat.js");

module.exports = parent;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6dc13a08138a8bebf74b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmE1NmUyNWIzOWRmZmUzMjhjMzAzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3SUFBK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJZSxTQUFTYSxhQUFULE9BS1o7QUFBQSxNQUpGQyxJQUlFLFFBSkZBLElBSUU7QUFBQSxNQUhGQyxNQUdFLFFBSEZBLE1BR0U7QUFBQSxNQUZGQyxFQUVFLFFBRkZBLEVBRUU7QUFBQSxNQURGQyxLQUNFLFFBREZBLEtBQ0U7O0FBQ0YscUJBQW9DTCxpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRTSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHaEIsc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQXdCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9tQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQSxXQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUNyQixXQUFPQSxHQUFHLEdBQUcsRUFBTixjQUFlQSxHQUFmLElBQXVCQSxHQUE5QjtBQUNBOztBQUNELFdBQVNDLElBQVQsQ0FBY0QsR0FBZCxFQUFtQjtBQUNsQixXQUFPQSxHQUFHLEdBQUcsRUFBTixHQUFXLElBQVgsR0FBa0IsSUFBekI7QUFDQTs7QUFDRCxNQUFNRSxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ2hEQyxJQUFBQSxxQkFBcUIsRUFBRSxDQUR5QjtBQUVoREMsSUFBQUEscUJBQXFCLEVBQUU7QUFGeUIsR0FBL0IsQ0FBbEI7O0FBWEUsV0FnQmFDLGlCQWhCYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTkFnQkY7QUFBQTs7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QSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCLENBRFUsQ0FFVjs7QUFDQW5GLE1BQUFBLGlCQUFpQjtBQUNwQixLQU5MO0FBT0ksTUFBRSxFQUFFcUUsUUFQUjtBQVFJLFNBQUssRUFBRUU7QUFSWCxJQTVGSixDQURKO0FBeUdIOzs7Ozs7Ozs7O0FDdlJELG1CQUFPLENBQUMsZ0dBQWtDO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLGdHQUFrQzs7QUFFN0Q7Ozs7Ozs7Ozs7O0FDSEEsYUFBYSxtQkFBTyxDQUFDLHVGQUF5Qjs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEEsYUFBYSxtQkFBTyxDQUFDLG1GQUEwQjs7QUFFL0M7Ozs7Ozs7OztVQ0ZBLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2NvbmNhdFwiKTsiLCJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3bW9kYWxTaG93KHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRpZCxcblx0dGl0bGVcbn0pIHtcblx0Y29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG5cdGZ1bmN0aW9uIGFkZFplcm8obnVtKSB7XG5cdFx0cmV0dXJuIG51bSA8IDEwID8gYDAke251bX1gIDogbnVtO1xuXHR9XG5cdGZ1bmN0aW9uIEFtUE0obnVtKSB7XG5cdFx0cmV0dXJuIG51bSA8IDEyID8gJ0FNJyA6ICdQTSc7XG5cdH1cblx0Y29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcblx0XHRtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG5cdFx0bWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuXHR9KTtcblxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGNvbnRyYWN0ICYmIGlkKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkoaWQpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdGNvbnN0IGFyciA9IFtdO1xuXHRcdFx0XHRjb25zdCB0b3RhbEJpZHMgPSBhd2FpdCBjb250cmFjdC5nZXRCaWRzU2VhcmNoVG9rZW4oaWQpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0b3RhbEJpZHMpO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcigxMCk7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IG9iaiA9IGF3YWl0IHRvdGFsQmlkc1tpXTtcblx0XHRcdFx0XHRjb25zdCBvYmplY3QgPSB7fTtcblx0XHRcdFx0XHR0cnkgeyBvYmplY3QgPSBhd2FpdCBKU09OLnBhcnNlKG9iaikgfSBjYXRjaCB7IH1cblx0XHRcdFx0XHRpZiAob2JqZWN0LnRpdGxlKSB7XG5cdFx0XHRcdFx0XHR2YXIgcHJpY2VkZXMxID0gMDtcblx0XHRcdFx0XHRcdHRyeSB7IHByaWNlZGVzMSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLmJpZC5kZXNjcmlwdGlvbiAqIDMuMDU0KSkgfSBjYXRjaCAoZXgpIHsgfVxuXHRcdFx0XHRcdFx0Y29uc3QgQmlkSWQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QuZ2V0QmlkSWRCeVVyaShvYmopKTtcblx0XHRcdFx0XHRcdGNvbnN0IERhdGV0aW1lID0gbmV3IERhdGUob2JqZWN0LnByb3BlcnRpZXMudGltZS5kZXNjcmlwdGlvbik7XG5cblx0XHRcdFx0XHRcdGxldCBjdXJyZW50ZGF0ZSA9IGAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0RGF0ZSgpKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldE1vbnRoKCkgKyAxKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldEZ1bGxZZWFyKCkpfSAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0SG91cnMoKSl9OiR7YWRkWmVybyhEYXRldGltZS5nZXRNaW51dGVzKCkpfToke2FkZFplcm8oRGF0ZXRpbWUuZ2V0U2Vjb25kcygpKX0gJHtBbVBNKERhdGV0aW1lLmdldEhvdXJzKCkpfWBcblx0XHRcdFx0XHRcdGFyci5wdXNoKHtcblx0XHRcdFx0XHRcdFx0SWQ6IEJpZElkLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiBvYmplY3QucHJvcGVydGllcy51c2VybmFtZS5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcdFx0dGltZTogY3VycmVudGRhdGUsXG5cdFx0XHRcdFx0XHRcdGJpZHByaWNlOiBvYmplY3QucHJvcGVydGllcy5iaWQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0XHRcdGJpZHByaWNldXNkOiBwcmljZWRlczFcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhhcnIpO1xuXHRcdFx0XHRzZXRMaXN0KGFycik7XG5cdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcblx0XHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ3RhYmxlXCIpKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmd0YWJsZVwiKTtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlID0gXCJkaXNwbGF5OmJsb2NrXCI7XG5cdFx0XHRcdFx0KGVsZW1lbnQpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hDb250cmFjdERhdGEoKTtcblxuXHR9LCBbIGNvbnRyYWN0XSk7XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdG9uU2hvdz17ZmV0Y2hDb250cmFjdERhdGF9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwieGxcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFZpZXcgQmlkIC0ge3RpdGxlfVxuXHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8ZGl2IGlkPSdMb2FkaW5ndGFibGUnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVIZWFkZXInPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlSGVhZGVyQ29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlaGVhZGVyRGF0ZUNvbnRhaW5lcicgPlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5EYXRlPC9oND5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVoZWFkZXJVc2VyQ29udGFpbmVyXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5Vc2VyIE5hbWU8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZWhlYWRlckJpZENvbnRhaW5lclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+QmlkPC9oND5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj4ge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9J3RhYmxlRnVsbFJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbENvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDZWxsRGF0ZUNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+e2xpc3RJdGVtLnRpbWV9PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbFVzZXJDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2VsbFwiPntsaXN0SXRlbS5uYW1lfTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dDZWxsQmlkQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+JHtsaXN0SXRlbS5iaWRwcmljZXVzZH0gKHtsaXN0SXRlbS5iaWRwcmljZX0gY1VTRCk8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+KSl9XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcbmltcG9ydCBWaWV3QmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwnO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3TkZUKHVzZXIpIHtcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoLTEpO1xuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0b2tlblN5bWJvbCwgc2V0VG9rZW5TeW1ib2xdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbCwgc2V0Z29hbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdEJpZCwgc2V0ZGF0ZWxlZnRCaWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dGl0bGUsIHNldHNlbGVjdHRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRBZGRyZXNzLCBzZXRzZWxlY3RlZEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0eXBlLCBzZXRzZWxlY3R0eXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0YmlkLCBzZXRzZWxlY3RiaWRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgW2V2ZW50dXJpLCBzZXRFdmVudHVyaV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbVmlld21vZGFsU2hvdywgc2V0Vmlld01vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XG4gICAgfVxuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb250cmFjdCAmJiBpZCkge1xuICAgICAgICAgICAgICAgIHNldEV2ZW50SWQoaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QuZXZlbnRVUkkoaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsVG9rZW5zID0gYXdhaXQgY29udHJhY3QuZ2V0dG9rZW5TZWFyY2hFdmVudFRvdGFsKGlkKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcigxMCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBhd2FpdCB0b3RhbFRva2Vuc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHsgb2JqZWN0ID0gYXdhaXQgSlNPTi5wYXJzZShvYmopIH0gY2F0Y2ggeyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmljZWRlczEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcHJpY2VkZXMxID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24gKiAwLjk5NzIpKSB9IGNhdGNoIChleCkgeyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUb2tlbklkID0gTnVtYmVyKGF3YWl0IGNvbnRyYWN0LmdldHRva2VuSWRCeVVyaShvYmopKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRva2VuSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiBUb2tlbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9iamVjdC5wcm9wZXJ0aWVzLm5hbWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG9iamVjdC5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZHByaWNlOiBwcmljZWRlczEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihvYmplY3QucHJvcGVydGllcy5wcmljZS5kZXNjcmlwdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqZWN0LnByb3BlcnRpZXMudHlwZWltZy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogb2JqZWN0LnByb3BlcnRpZXMuaW1hZ2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiBvYmplY3QucHJvcGVydGllcy53YWxsZXQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcblxuXG4gICAgICAgICAgICAgICAgc2V0RXZlbnR1cmkodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGl0bGUob2JqZWN0LnByb3BlcnRpZXMuVGl0bGUuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QoZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDAuOTk3MikpKTtcbiAgICAgICAgICAgICAgICBzZXRnb2FsKE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgIHNldGRhdGUob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnRCaWQoTGVmdERhdGVCaWQob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgIHNldGxvZ28ob2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgc2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XG4gICAgICAgICAgICAgICAgc2V0VG9rZW5TeW1ib2woYXdhaXQgY29udHJhY3Quc3ltYm9sKCkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgfSwgW2lkLCBjb250cmFjdF0pO1xuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgIH0sIDEwMDApO1xuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVWaWV3QmlkTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0dGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikpO1xuXG4gICAgICAgIHNldFZpZXdNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RlZEFkZHJlc3MoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiYWRkcmVzc1wiKSlcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdvYWw6IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiQge2dvYWx1c2R9ICh7Z29hbH0gY1VTRCk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG5hbWU9J2RhdGVsZWZ0JyBkYXRlPXtkYXRlfT57ZGF0ZWxlZnR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2UgcGl4ZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IFwiNXB4XCIgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2xpc3RJdGVtLm5hbWV9PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwicmdiKDEzOSwgMTM5LCAxMzkpXCIgfX0+VHlwZToge2xpc3RJdGVtLnR5cGV9PC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjOEI4QjhCXCIgfX0+e2xpc3RJdGVtLmRlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdFbGVtZW50Qm90dG9tQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMTZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZX0gKHtsaXN0SXRlbS5wcmljZX0gY1VTRCk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkQWxsY29udGFpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkc2J1dHRvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IG9uQ2xpY2s9e2FjdGl2YXRlVmlld0JpZE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGFkZHJlc3M9e2xpc3RJdGVtLndhbGxldH0gb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gYWRkcmVzcz17bGlzdEl0ZW0ud2FsbGV0fSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBhZGRyZXNzPXtsaXN0SXRlbS53YWxsZXR9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XG4gICAgICAgICAgICAgICAgdG9rZW5JZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cbiAgICAgICAgICAgICAgICB0b0FkZHJlc3M9e3NlbGVjdGVkQWRkcmVzc31cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgSGlnaGVzdGJpZD17c2VsZWN0YmlkfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFZpZXdCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e1ZpZXdtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXdNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3R0aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdCcpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmNvbmNhdDtcbiIsInZhciBjb25jYXQgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2NvbmNhdCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5jb25jYXQ7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5jb25jYXQpID8gY29uY2F0IDogb3duO1xufTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9jb25jYXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNmRjMTNhMDgxMzhhOGJlYmY3NGJcIjsgfSJdLCJuYW1lcyI6WyJNb2RhbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJGb3JtIiwiSGVhZCIsIlJvdyIsIkxpbmsiLCJDb2wiLCJJbWFnZSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiVmlld21vZGFsU2hvdyIsInNob3ciLCJvbkhpZGUiLCJpZCIsInRpdGxlIiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwibGlzdCIsInNldExpc3QiLCJhZGRaZXJvIiwibnVtIiwiQW1QTSIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmZXRjaENvbnRyYWN0RGF0YSIsInRva2VuVVJJIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYXJyIiwiZ2V0Qmlkc1NlYXJjaFRva2VuIiwidG90YWxCaWRzIiwiaSIsIk51bWJlciIsIm9iaiIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInByaWNlZGVzMSIsImZvcm1hdCIsInByb3BlcnRpZXMiLCJiaWQiLCJkZXNjcmlwdGlvbiIsImV4IiwiZ2V0QmlkSWRCeVVyaSIsIkJpZElkIiwiRGF0ZXRpbWUiLCJEYXRlIiwidGltZSIsImN1cnJlbnRkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwicHVzaCIsIklkIiwibmFtZSIsInVzZXJuYW1lIiwiYmlkcHJpY2UiLCJiaWRwcmljZXVzZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImRpc3BsYXkiLCJsaXN0SXRlbSIsIkJpZE5GVE1vZGFsIiwiVmlld0JpZE5GVE1vZGFsIiwiVmlld05GVCIsInVzZXIiLCJldmVudElkIiwic2V0RXZlbnRJZCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdGVkQWRkcmVzcyIsInNldHNlbGVjdGVkQWRkcmVzcyIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsInNldFZpZXdNb2RhbFNob3ciLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJldmVudFVSSSIsImdldHRva2VuU2VhcmNoRXZlbnRUb3RhbCIsInRvdGFsVG9rZW5zIiwicHJpY2UiLCJnZXR0b2tlbklkQnlVcmkiLCJUb2tlbklkIiwiQmlkcHJpY2UiLCJ0eXBlIiwidHlwZWltZyIsImltYWdlIiwid2FsbGV0IiwiVGl0bGUiLCJHb2FsIiwic3ltYm9sIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsImUiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwid2lkdGgiLCJyb3dHYXAiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=