"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/donation/auction/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/donation/auction/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
                _context.next = 59;
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
                image: _object.properties.image.description
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
              setselectedAddress(object.properties.wallet.description);
              setgoalusd(formatter.format(Number(object.properties.Goal.description * 0.9972)));
              setgoal(Number(object.properties.Goal.description));
              setdateleft(LeftDate(object.properties.Date.description));
              setdate(object.properties.Date.description);
              setdateleftBid(LeftDateBid(object.properties.Date.description));
              setlogo(object.properties.logo.description);
              _context.t3 = setTokenName;
              _context.next = 52;
              return contract.name();

            case 52:
              _context.t4 = _context.sent;
              (0, _context.t3)(_context.t4);
              _context.t5 = setTokenSymbol;
              _context.next = 57;
              return contract.symbol();

            case 57:
              _context.t6 = _context.sent;
              (0, _context.t5)(_context.t6);

            case 59:
              _context.next = 64;
              break;

            case 61:
              _context.prev = 61;
              _context.t7 = _context["catch"](0);
              console.error(_context.t7);

            case 64:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 61], [16, 22]]);
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
      onClick: activateBidNFTModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "53cfde101fd698e6fcfb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmVhNDg0NWVlYWRjNDk5NWZiY2ViLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRWUsU0FBU2MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDbEMscUJBQW9DRixrRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRRyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHZixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBOEJGLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQXRDO0FBQUE7QUFBQSxNQUFPa0IsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBd0JuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9vQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9zQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ3ZCLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3dCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTBCekIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPMEIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0Esb0JBQThCM0IsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPNEIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxvQkFBd0I3QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU84QixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxvQkFBZ0MvQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9nQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG9CQUF3QmpDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT2tDLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG9CQUFzQ25DLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT29DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQXdCckMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPc0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQWdDdkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPd0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBc0N6QywrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU8wQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG9CQUE4QzNDLCtDQUFRLENBQUMsRUFBRCxDQUF0RDtBQUFBO0FBQUEsTUFBTzRDLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG9CQUFvQzdDLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBO0FBQUEsTUFBTzhDLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0Esb0JBQWtDL0MsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPZ0QsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxvQkFBZ0NqRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9rRCxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG9CQUFrQ25ELCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT29ELFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0Esb0JBQTBDckQsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPc0QsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUM3Q0MsSUFBQUEscUJBQXFCLEVBQUUsQ0FEc0I7QUFFN0NDLElBQUFBLHFCQUFxQixFQUFFO0FBRnNCLEdBQS9CLENBQWxCOztBQUtBLFdBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQ3hCLFFBQUlDLENBQUMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLFFBQVQsRUFBbUJHLE9BQW5CLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsSUFBSUYsSUFBSixHQUFXQyxPQUFYLEVBQVI7QUFDQSxRQUFJRSxDQUFDLEdBQUdKLENBQUMsR0FBR0csQ0FBWjtBQUNBLFFBQUlFLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQVosQ0FBVDtBQUNBLFFBQUlJLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQUYsSUFBK0IsT0FBTyxFQUFQLEdBQVksRUFBM0MsQ0FBWCxDQUFSO0FBQ0EsUUFBSUssQ0FBQyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQUYsSUFBMEIsT0FBTyxFQUFqQyxDQUFYLENBQVI7QUFDQSxRQUFJTSxDQUFDLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFYLENBQUYsR0FBb0IsSUFBL0IsQ0FBUjtBQUNBLFdBQVFDLEVBQUUsQ0FBQ00sUUFBSCxLQUFnQixRQUFoQixHQUEyQkgsQ0FBQyxDQUFDRyxRQUFGLEVBQTNCLEdBQTBDLFNBQTFDLEdBQXNERixDQUFDLENBQUNFLFFBQUYsRUFBdEQsR0FBcUUsV0FBckUsR0FBbUZELENBQUMsQ0FBQ0MsUUFBRixFQUFuRixHQUFrRyxVQUExRztBQUNIOztBQUNELFdBQVNDLFdBQVQsQ0FBcUJiLFFBQXJCLEVBQStCO0FBQzNCLFFBQUlDLENBQUMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLFFBQVQsRUFBbUJHLE9BQW5CLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsSUFBSUYsSUFBSixHQUFXQyxPQUFYLEVBQVI7QUFDQSxRQUFJRSxDQUFDLEdBQUdKLENBQUMsR0FBR0csQ0FBWjtBQUNBLFFBQUlFLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQVosQ0FBVDtBQUNBLFFBQUlJLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQUYsSUFBK0IsT0FBTyxFQUFQLEdBQVksRUFBM0MsQ0FBWCxDQUFSO0FBQ0EsUUFBSUssQ0FBQyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQUYsSUFBMEIsT0FBTyxFQUFqQyxDQUFYLENBQVI7QUFDQSxRQUFJTSxDQUFDLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFYLENBQUYsR0FBb0IsSUFBL0IsQ0FBUjtBQUNBLFdBQVFDLEVBQUUsQ0FBQ00sUUFBSCxLQUFnQixJQUFoQixHQUF1QkgsQ0FBQyxDQUFDRyxRQUFGLEVBQXZCLEdBQXNDLElBQXRDLEdBQTZDRixDQUFDLENBQUNFLFFBQUYsRUFBN0MsR0FBNEQsSUFBNUQsR0FBbUVELENBQUMsQ0FBQ0MsUUFBRixFQUFuRSxHQUFrRixHQUExRjtBQUNIOztBQUNELE1BQU1FLEtBQUssR0FBRyxXQUFkO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyxrQkFBa0IsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFqQixDQUE5QjtBQUNBLE1BQUlULENBQUo7QUFDQSxNQUFJVSxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNWLENBQUMsR0FBR0ksS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlMLENBQUMsQ0FBQ1ksS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHVixDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBM0RpQyxXQTZEbkJjLGlCQTdEbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsa05BNkRsQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBRVl2RSxRQUFRLElBQUltRSxFQUZ4QjtBQUFBO0FBQUE7QUFBQTs7QUFHWS9ELGNBQUFBLFVBQVUsQ0FBQytELEVBQUQsQ0FBVjtBQUhaO0FBQUEscUJBSWdDbkUsUUFBUSxDQUFDd0UsUUFBVCxDQUFrQkwsRUFBbEIsQ0FKaEM7O0FBQUE7QUFJa0JNLGNBQUFBLEtBSmxCO0FBS2tCQyxjQUFBQSxHQUxsQixHQUt3QixFQUx4QjtBQUFBO0FBQUEscUJBTXNDMUUsUUFBUSxDQUFDMkUsd0JBQVQsQ0FBa0NSLEVBQWxDLENBTnRDOztBQUFBO0FBTWtCUyxjQUFBQSxXQU5sQjtBQU9xQkMsY0FBQUEsQ0FQckIsR0FPeUIsQ0FQekI7O0FBQUE7QUFBQSxvQkFPNEJBLENBQUMsR0FBR0MsTUFBTSxDQUFDLEVBQUQsQ0FQdEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFRa0NGLFdBQVcsQ0FBQ0MsQ0FBRCxDQVI3Qzs7QUFBQTtBQVFzQkUsY0FBQUEsR0FSdEI7QUFVc0JDLGNBQUFBLE9BVnRCLEdBVStCLEVBVi9CO0FBQUE7QUFBQTtBQUFBLHFCQVdxQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQVgsQ0FYckM7O0FBQUE7QUFXc0JDLGNBQUFBLE9BWHRCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFZb0JBLE9BQU0sQ0FBQ3JFLEtBWjNCO0FBQUE7QUFBQTtBQUFBOztBQWF3QndFLGNBQUFBLFNBYnhCLEdBYW9DLENBYnBDOztBQWNvQixrQkFBSTtBQUFFQSxnQkFBQUEsU0FBUyxHQUFHMUMsU0FBUyxDQUFDMkMsTUFBVixDQUFpQk4sTUFBTSxDQUFDRSxPQUFNLENBQUNLLFVBQVAsQ0FBa0JDLEtBQWxCLENBQXdCQyxXQUF4QixHQUFzQyxNQUF2QyxDQUF2QixDQUFaO0FBQW9GLGVBQTFGLENBQTJGLE9BQU9DLEVBQVAsRUFBVyxDQUFHOztBQWQ3SCw0QkFlb0NWLE1BZnBDO0FBQUE7QUFBQSxxQkFlaUQ5RSxRQUFRLENBQUN5RixlQUFULENBQXlCVixHQUF6QixDQWZqRDs7QUFBQTtBQUFBO0FBZTBCVyxjQUFBQSxPQWYxQjtBQWdCb0JDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FoQixjQUFBQSxHQUFHLENBQUNtQixJQUFKLENBQVM7QUFDTEMsZ0JBQUFBLEVBQUUsRUFBRUosT0FEQztBQUVMSyxnQkFBQUEsSUFBSSxFQUFFZixPQUFNLENBQUNLLFVBQVAsQ0FBa0JVLElBQWxCLENBQXVCUixXQUZ4QjtBQUdMQSxnQkFBQUEsV0FBVyxFQUFFUCxPQUFNLENBQUNLLFVBQVAsQ0FBa0JFLFdBQWxCLENBQThCQSxXQUh0QztBQUlMUyxnQkFBQUEsUUFBUSxFQUFFYixTQUpMO0FBS0xHLGdCQUFBQSxLQUFLLEVBQUVSLE1BQU0sQ0FBQ0UsT0FBTSxDQUFDSyxVQUFQLENBQWtCQyxLQUFsQixDQUF3QkMsV0FBekIsQ0FMUjtBQU1MVSxnQkFBQUEsSUFBSSxFQUFFakIsT0FBTSxDQUFDSyxVQUFQLENBQWtCYSxPQUFsQixDQUEwQlgsV0FOM0I7QUFPTFksZ0JBQUFBLEtBQUssRUFBRW5CLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQmMsS0FBbEIsQ0FBd0JaO0FBUDFCLGVBQVQ7O0FBakJwQjtBQU80Q1YsY0FBQUEsQ0FBQyxFQVA3QztBQUFBO0FBQUE7O0FBQUE7QUE4Qll2RSxjQUFBQSxPQUFPLENBQUNvRSxHQUFELENBQVA7QUFDQSxrQkFBSTBCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFKLEVBQ0lELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FBbkMsR0FBMkMsY0FBM0M7QUFHSmxFLGNBQUFBLFdBQVcsQ0FBQ3FDLEtBQUQsQ0FBWDtBQUVNTyxjQUFBQSxNQXJDbEIsR0FxQzJCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsS0FBWCxDQXJDM0I7QUFzQ1k3RCxjQUFBQSxRQUFRLENBQUNvRSxNQUFNLENBQUNLLFVBQVAsQ0FBa0JrQixLQUFsQixDQUF3QmhCLFdBQXpCLENBQVI7QUFDQXpELGNBQUFBLGtCQUFrQixDQUFDa0QsTUFBTSxDQUFDSyxVQUFQLENBQWtCbUIsTUFBbEIsQ0FBeUJqQixXQUExQixDQUFsQjtBQUNBekUsY0FBQUEsVUFBVSxDQUFDMkIsU0FBUyxDQUFDMkMsTUFBVixDQUFpQk4sTUFBTSxDQUFDRSxNQUFNLENBQUNLLFVBQVAsQ0FBa0JvQixJQUFsQixDQUF1QmxCLFdBQXZCLEdBQXFDLE1BQXRDLENBQXZCLENBQUQsQ0FBVjtBQUNBdkUsY0FBQUEsT0FBTyxDQUFDOEQsTUFBTSxDQUFDRSxNQUFNLENBQUNLLFVBQVAsQ0FBa0JvQixJQUFsQixDQUF1QmxCLFdBQXhCLENBQVAsQ0FBUDtBQUNBckUsY0FBQUEsV0FBVyxDQUFDNEIsUUFBUSxDQUFDa0MsTUFBTSxDQUFDSyxVQUFQLENBQWtCcEMsSUFBbEIsQ0FBdUJzQyxXQUF4QixDQUFULENBQVg7QUFDQW5FLGNBQUFBLE9BQU8sQ0FBQzRELE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQnBDLElBQWxCLENBQXVCc0MsV0FBeEIsQ0FBUDtBQUNBakUsY0FBQUEsY0FBYyxDQUFDc0MsV0FBVyxDQUFDb0IsTUFBTSxDQUFDSyxVQUFQLENBQWtCcEMsSUFBbEIsQ0FBdUJzQyxXQUF4QixDQUFaLENBQWQ7QUFDQS9ELGNBQUFBLE9BQU8sQ0FBQ3dELE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQjlELElBQWxCLENBQXVCZ0UsV0FBeEIsQ0FBUDtBQTdDWiw0QkE4Q1kvRSxZQTlDWjtBQUFBO0FBQUEscUJBOEMrQlIsUUFBUSxDQUFDK0YsSUFBVCxFQTlDL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBK0NZckYsY0EvQ1o7QUFBQTtBQUFBLHFCQStDaUNWLFFBQVEsQ0FBQzBHLE1BQVQsRUEvQ2pDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbURRZixjQUFBQSxPQUFPLENBQUNnQixLQUFSOztBQW5EUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTdEa0M7QUFBQTtBQUFBOztBQW1IbEN6SCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWnFGLElBQUFBLGlCQUFpQjtBQUVwQixHQUhRLEVBR04sQ0FBQ0osRUFBRCxFQUFLbkUsUUFBTCxDQUhNLENBQVQ7QUFLQTRHLEVBQUFBLFdBQVcsQ0FBQyxZQUFZO0FBQ3BCQyxJQUFBQSxpQkFBaUI7QUFDcEIsR0FGVSxFQUVSLElBRlEsQ0FBWDs7QUFLQSxXQUFTQSxpQkFBVCxHQUE2QjtBQUN6QixRQUFJO0FBQ0EsVUFBSUMsUUFBUSxHQUFHVixRQUFRLENBQUNXLGlCQUFULENBQTJCLFVBQTNCLENBQWY7O0FBQ0EsV0FBSyxJQUFJbEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lDLFFBQVEsQ0FBQ0UsTUFBN0IsRUFBcUNuQyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQUkxRCxJQUFJLEdBQUkyRixRQUFRLENBQUNqQyxDQUFELENBQVQsQ0FBY29DLFlBQWQsQ0FBMkIsTUFBM0IsQ0FBWDtBQUNBSCxRQUFBQSxRQUFRLENBQUNqQyxDQUFELENBQVIsQ0FBWXFDLFNBQVosR0FBd0JwRSxRQUFRLENBQUMzQixJQUFELENBQWhDO0FBQ0g7O0FBQ0QsVUFBSTJGLFFBQVEsR0FBR1YsUUFBUSxDQUFDVyxpQkFBVCxDQUEyQixNQUEzQixDQUFmOztBQUNBLFdBQUssSUFBSWxDLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdpQyxRQUFRLENBQUNFLE1BQTdCLEVBQXFDbkMsRUFBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFJMUQsSUFBSSxHQUFJMkYsUUFBUSxDQUFDakMsRUFBRCxDQUFULENBQWNvQyxZQUFkLENBQTJCLE1BQTNCLENBQVg7O0FBQ0FILFFBQUFBLFFBQVEsQ0FBQ2pDLEVBQUQsQ0FBUixDQUFZcUMsU0FBWixHQUF3QnRELFdBQVcsQ0FBQ3pDLElBQUQsQ0FBbkM7QUFDSDtBQUNKLEtBWEQsQ0FXRSxPQUFPd0YsS0FBUCxFQUFjLENBRWY7QUFFSjs7QUFFRCxXQUFTUSxvQkFBVCxDQUE4QkMsQ0FBOUIsRUFBaUM7QUFDN0IxRixJQUFBQSxXQUFXLENBQUMwRixDQUFDLENBQUNDLE1BQUYsQ0FBU0osWUFBVCxDQUFzQixTQUF0QixDQUFELENBQVg7QUFDQXJGLElBQUFBLGNBQWMsQ0FBQ3dGLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixZQUFULENBQXNCLE9BQXRCLENBQUQsQ0FBZDtBQUVBekUsSUFBQUEsZ0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNIOztBQUVELFdBQVM4RSxtQkFBVCxDQUE2QkYsQ0FBN0IsRUFBZ0M7QUFDNUIxRixJQUFBQSxXQUFXLENBQUMwRixDQUFDLENBQUNDLE1BQUYsQ0FBU0osWUFBVCxDQUFzQixTQUF0QixDQUFELENBQVg7QUFDQS9FLElBQUFBLFlBQVksQ0FBQ2tGLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixZQUFULENBQXNCLFlBQXRCLENBQUQsQ0FBWjtBQUNBdEIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkzRCxTQUFaO0FBQ0FELElBQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDQU0sSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUNELHNCQUNJLGlIQUNJLGlEQUFDLGlEQUFELHFCQUNJLGdFQUFRM0IsS0FBUixDQURKLGVBRUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVBO0FBQWxDLElBRkosZUFHSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQztBQUF0QixJQUhKLENBREosZUFPSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUUsaUJBQVcsTUFBYjtBQUFxQjRHLE1BQUFBLEtBQUssRUFBRTtBQUE1QjtBQUFaLGtCQUNJO0FBQUssT0FBRyxFQUFFaEcsSUFBVjtBQUFnQixhQUFTLEVBQUM7QUFBMUIsSUFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksNkRBQUtaLEtBQUwsQ0FESixlQUdJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksc0VBREosZUFFSSxtRUFBT0UsT0FBUCxRQUFrQkUsSUFBbEIsV0FGSixDQUhKLGVBT0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFJLFFBQUksRUFBQyxVQUFUO0FBQW9CLFFBQUksRUFBRUk7QUFBMUIsS0FBaUNGLFFBQWpDLENBREosQ0FQSixDQUZKLENBREosQ0FQSixlQXVCSTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQztBQUE1QixrQkFDSSwwRUFESixDQXZCSixFQTBCSywwRkFBQVosSUFBSSxNQUFKLENBQUFBLElBQUksRUFBSyxVQUFDbUgsUUFBRDtBQUFBLHdCQUNOO0FBQUssU0FBRyxFQUFFQSxRQUFRLENBQUMxQixFQUFuQjtBQUF1QixlQUFTLEVBQUM7QUFBakMsb0JBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRSxtQkFBVyxNQUFiO0FBQXFCeUIsUUFBQUEsS0FBSyxFQUFFO0FBQTVCO0FBQVosT0FDS0MsUUFBUSxDQUFDdkIsSUFBVCxJQUFpQixZQUFqQixnQkFDRztBQUFLLFNBQUcsRUFBRXVCLFFBQVEsQ0FBQ3JCLEtBQW5CO0FBQTBCLGVBQVMsRUFBQztBQUFwQyxNQURILGdCQUdHO0FBQUssU0FBRyxFQUFFcUIsUUFBUSxDQUFDckIsS0FBbkI7QUFBMEIsZUFBUyxFQUFDO0FBQXBDLE1BSlIsZUFPSTtBQUFLLFdBQUssRUFBRTtBQUFFb0IsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBWixvQkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFrQyxXQUFLLEVBQUU7QUFBRUUsUUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBekMsb0JBQ0ksNkRBQUtELFFBQVEsQ0FBQ3pCLElBQWQsQ0FESixlQUdJO0FBQUksV0FBSyxFQUFFO0FBQUUyQixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFYLGlCQUFtREYsUUFBUSxDQUFDdkIsSUFBNUQsQ0FISixlQUtJO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBSSxXQUFLLEVBQUU7QUFBRXlCLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVgsT0FBa0NGLFFBQVEsQ0FBQ2pDLFdBQTNDLENBREosQ0FMSixDQURKLGVBVUk7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFZ0MsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBWixvQkFDSTtBQUFJLGVBQVMsRUFBQztBQUFkLHFCQURKLGVBRUk7QUFBSSxlQUFTLEVBQUM7QUFBZCxhQUE0QkMsUUFBUSxDQUFDeEIsUUFBckMsUUFBaUR3QixRQUFRLENBQUNsQyxLQUExRCxXQUZKLGVBR0k7QUFBSSxVQUFJLEVBQUMsTUFBVDtBQUFnQixVQUFJLEVBQUVuRSxJQUF0QjtBQUE0QixlQUFTLEVBQUM7QUFBdEMsT0FBbURFLFdBQW5ELENBSEosQ0FESixlQU1JO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFLLGFBQU8sRUFBRW1HLFFBQVEsQ0FBQzFCLEVBQXZCO0FBQTJCLFdBQUssRUFBRTBCLFFBQVEsQ0FBQ3pCLElBQTNDO0FBQWlELGFBQU8sRUFBRW9CLG9CQUExRDtBQUFnRixlQUFTLEVBQUM7QUFBMUYsb0JBQ0k7QUFBSyxhQUFPLEVBQUVLLFFBQVEsQ0FBQzFCLEVBQXZCO0FBQTJCLFdBQUssRUFBRTBCLFFBQVEsQ0FBQ3pCLElBQTNDO0FBQWlELGVBQVMsRUFBQztBQUEzRCxvQkFDSTtBQUFLLGFBQU8sRUFBRXlCLFFBQVEsQ0FBQzFCLEVBQXZCO0FBQTJCLFdBQUssRUFBRTBCLFFBQVEsQ0FBQ3pCLElBQTNDO0FBQWlELGVBQVMsRUFBQztBQUEzRCxjQURKLENBREosQ0FESixlQU1JO0FBQUssYUFBTyxFQUFFeUIsUUFBUSxDQUFDMUIsRUFBdkI7QUFBMkIsZ0JBQVUsRUFBRTBCLFFBQVEsQ0FBQ2xDLEtBQWhEO0FBQXVELGFBQU8sRUFBRWdDLG1CQUFoRTtBQUFxRixlQUFTLEVBQUM7QUFBL0Ysb0JBQ0k7QUFBSyxhQUFPLEVBQUVFLFFBQVEsQ0FBQzFCLEVBQXZCO0FBQTJCLGdCQUFVLEVBQUUwQixRQUFRLENBQUNsQyxLQUFoRDtBQUF3RCxlQUFTLEVBQUM7QUFBbEUsb0JBQ0k7QUFBSyxhQUFPLEVBQUVrQyxRQUFRLENBQUMxQixFQUF2QjtBQUEyQixnQkFBVSxFQUFFMEIsUUFBUSxDQUFDbEMsS0FBaEQ7QUFBdUQsZUFBUyxFQUFDO0FBQWpFLGFBREosQ0FESixDQU5KLENBREosQ0FOSixDQVZKLENBUEosQ0FESixDQURNO0FBQUEsR0FBTCxDQTFCVCxlQTRFSSxpREFBQyxpRkFBRDtBQUNJLFFBQUksRUFBRWpELFNBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWixDQURVLENBRVY7O0FBQ0FpQyxNQUFBQSxpQkFBaUI7QUFDcEIsS0FOTDtBQU9JLFlBQVEsRUFBRXZFLFFBUGQ7QUFRSSxXQUFPLEVBQUV5QixRQVJiO0FBU0ksaUJBQWEsRUFBRXhCLGFBVG5CO0FBVUksYUFBUyxFQUFFNEIsZUFWZjtBQVdJLFFBQUksRUFBRUUsVUFYVjtBQVlJLFdBQU8sRUFBRTVCLE9BWmI7QUFhSSxjQUFVLEVBQUU4QjtBQWJoQixJQTVFSixlQTRGSSxpREFBQyxxRkFBRDtBQUNJLFFBQUksRUFBRU0sYUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCLENBRFUsQ0FFVjs7QUFDQStCLE1BQUFBLGlCQUFpQjtBQUNwQixLQU5MO0FBT0ksTUFBRSxFQUFFOUMsUUFQUjtBQVFJLFNBQUssRUFBRUU7QUFSWCxJQTVGSixDQURKO0FBeUdIOzs7Ozs7OztVQ3RSRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgQmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XG5pbXBvcnQgVmlld0JpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld05GVCh1c2VyKSB7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKC0xKTtcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQWRkcmVzcywgc2V0c2VsZWN0ZWRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFtldmVudHVyaSwgc2V0RXZlbnR1cmldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcbiAgICAgICAgICAgICAgICBzZXRFdmVudElkKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IGNvbnRyYWN0LmdldHRva2VuU2VhcmNoRXZlbnRUb3RhbChpZCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoMTApOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgdG90YWxUb2tlbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uICogMC45OTcyKSkgfSBjYXRjaCAoZXgpIHsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVG9rZW5JZCA9IE51bWJlcihhd2FpdCBjb250cmFjdC5nZXR0b2tlbklkQnlVcmkob2JqKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUb2tlbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogVG9rZW5JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvYmplY3QucHJvcGVydGllcy5uYW1lLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvYmplY3QucHJvcGVydGllcy5kZXNjcmlwdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogcHJpY2VkZXMxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG9iamVjdC5wcm9wZXJ0aWVzLnR5cGVpbWcuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG9iamVjdC5wcm9wZXJ0aWVzLmltYWdlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuXG5cbiAgICAgICAgICAgICAgICBzZXRFdmVudHVyaSh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgc2V0c2VsZWN0ZWRBZGRyZXNzKG9iamVjdC5wcm9wZXJ0aWVzLndhbGxldC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZChmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uICogMC45OTcyKSkpO1xuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgc2V0ZGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgc2V0bG9nbyhvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICB9LCBbaWQsIGNvbnRyYWN0XSk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0YmlkKTtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgRXZlbnRDb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4kIHtnb2FsdXNkfSAoe2dvYWx9IGNVU0QpPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlIHBpeGVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntsaXN0SXRlbS5uYW1lfTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxMzksIDEzOSwgMTM5KVwiIH19PlR5cGU6IHtsaXN0SXRlbS50eXBlfTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzhCOEI4QlwiIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTE2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2V9ICh7bGlzdEl0ZW0ucHJpY2V9IGNVU0QpPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBuYW1lPVwiZGF0ZVwiIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdEJpZH08L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSAgY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG5cbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHRvQWRkcmVzcz17c2VsZWN0ZWRBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI1M2NmZGUxMDFmZDY5OGU2ZmNmYlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJGb3JtIiwiSGVhZCIsIlJvdyIsIkxpbmsiLCJDb2wiLCJJbWFnZSIsIkJ1dHRvbiIsIkJpZE5GVE1vZGFsIiwiVmlld0JpZE5GVE1vZGFsIiwidXNlQ29udHJhY3QiLCJWaWV3TkZUIiwidXNlciIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInJvdXRlciIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlblN5bWJvbCIsInNldFRva2VuU3ltYm9sIiwidGl0bGUiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdGVkQWRkcmVzcyIsInNldHNlbGVjdGVkQWRkcmVzcyIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImZldGNoQ29udHJhY3REYXRhIiwiZXZlbnRVUkkiLCJ2YWx1ZSIsImFyciIsImdldHRva2VuU2VhcmNoRXZlbnRUb3RhbCIsInRvdGFsVG9rZW5zIiwiaSIsIk51bWJlciIsIm9iaiIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInByaWNlZGVzMSIsImZvcm1hdCIsInByb3BlcnRpZXMiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiZXgiLCJnZXR0b2tlbklkQnlVcmkiLCJUb2tlbklkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJJZCIsIm5hbWUiLCJCaWRwcmljZSIsInR5cGUiLCJ0eXBlaW1nIiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJUaXRsZSIsIndhbGxldCIsIkdvYWwiLCJzeW1ib2wiLCJlcnJvciIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJlIiwidGFyZ2V0IiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsIndpZHRoIiwibGlzdEl0ZW0iLCJyb3dHYXAiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=