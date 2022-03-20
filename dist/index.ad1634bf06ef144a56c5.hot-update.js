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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ea4845eeadc4995fbceb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmFkMTYzNGJmMDZlZjE0NGE1NmM1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRWUsU0FBU2MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDbEMscUJBQW9DRixrRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRRyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHZixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBOEJGLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQXRDO0FBQUE7QUFBQSxNQUFPa0IsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBd0JuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9vQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9zQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ3ZCLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3dCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTBCekIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPMEIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0Esb0JBQThCM0IsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPNEIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxvQkFBd0I3QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU84QixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxvQkFBZ0MvQiwrQ0FBUSxDQUFDLEVBQUQs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SixlQTRGSSxpREFBQyxxRkFBRDtBQUNJLFFBQUksRUFBRU0sYUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCLENBRFUsQ0FFVjs7QUFDQStCLE1BQUFBLGlCQUFpQjtBQUNwQixLQU5MO0FBT0ksTUFBRSxFQUFFOUMsUUFQUjtBQVFJLFNBQUssRUFBRUU7QUFSWCxJQTVGSixDQURKO0FBeUdIOzs7Ozs7OztVQ3RSRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgQmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XG5pbXBvcnQgVmlld0JpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld05GVCh1c2VyKSB7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKC0xKTtcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQWRkcmVzcywgc2V0c2VsZWN0ZWRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFtldmVudHVyaSwgc2V0RXZlbnR1cmldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcbiAgICAgICAgICAgICAgICBzZXRFdmVudElkKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IGNvbnRyYWN0LmdldHRva2VuU2VhcmNoRXZlbnRUb3RhbChpZCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoMTApOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgdG90YWxUb2tlbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uICogMC45OTcyKSkgfSBjYXRjaCAoZXgpIHsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVG9rZW5JZCA9IE51bWJlcihhd2FpdCBjb250cmFjdC5nZXR0b2tlbklkQnlVcmkob2JqKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUb2tlbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogVG9rZW5JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvYmplY3QucHJvcGVydGllcy5uYW1lLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvYmplY3QucHJvcGVydGllcy5kZXNjcmlwdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogcHJpY2VkZXMxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG9iamVjdC5wcm9wZXJ0aWVzLnR5cGVpbWcuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG9iamVjdC5wcm9wZXJ0aWVzLmltYWdlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuXG5cbiAgICAgICAgICAgICAgICBzZXRFdmVudHVyaSh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZChmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uICogMC45OTcyKSkpO1xuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgc2V0ZGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgc2V0bG9nbyhvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICB9LCBbaWQsIGNvbnRyYWN0XSk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGVkQWRkcmVzcyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhZGRyZXNzXCIpKVxuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R29hbDogPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+JCB7Z29hbHVzZH0gKHtnb2FsfSBjVVNEKTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57bGlzdEl0ZW0ubmFtZX08L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTM5LCAxMzksIDEzOSlcIiB9fT5UeXBlOiB7bGlzdEl0ZW0udHlwZX08L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiM4QjhCOEJcIiB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjExNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlfSAoe2xpc3RJdGVtLnByaWNlfSBjVVNEKTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRBbGxjb250YWluZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRzYnV0dG9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gb25DbGljaz17YWN0aXZhdGVWaWV3QmlkTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+VmlldzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gYWRkcmVzcz17bGlzdEl0ZW0ud2FsbGV0fSBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBhZGRyZXNzPXtsaXN0SXRlbS53YWxsZXR9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGFkZHJlc3M9e2xpc3RJdGVtLndhbGxldH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG5cbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHRvQWRkcmVzcz17c2VsZWN0ZWRBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJlYTQ4NDVlZWFkYzQ5OTVmYmNlYlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJGb3JtIiwiSGVhZCIsIlJvdyIsIkxpbmsiLCJDb2wiLCJJbWFnZSIsIkJ1dHRvbiIsIkJpZE5GVE1vZGFsIiwiVmlld0JpZE5GVE1vZGFsIiwidXNlQ29udHJhY3QiLCJWaWV3TkZUIiwidXNlciIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInJvdXRlciIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlblN5bWJvbCIsInNldFRva2VuU3ltYm9sIiwidGl0bGUiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdGVkQWRkcmVzcyIsInNldHNlbGVjdGVkQWRkcmVzcyIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImZldGNoQ29udHJhY3REYXRhIiwiZXZlbnRVUkkiLCJ2YWx1ZSIsImFyciIsImdldHRva2VuU2VhcmNoRXZlbnRUb3RhbCIsInRvdGFsVG9rZW5zIiwiaSIsIk51bWJlciIsIm9iaiIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInByaWNlZGVzMSIsImZvcm1hdCIsInByb3BlcnRpZXMiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiZXgiLCJnZXR0b2tlbklkQnlVcmkiLCJUb2tlbklkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJJZCIsIm5hbWUiLCJCaWRwcmljZSIsInR5cGUiLCJ0eXBlaW1nIiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJUaXRsZSIsIkdvYWwiLCJzeW1ib2wiLCJlcnJvciIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJlIiwidGFyZ2V0IiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsIndpZHRoIiwibGlzdEl0ZW0iLCJyb3dHYXAiLCJjb2xvciIsIndhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=