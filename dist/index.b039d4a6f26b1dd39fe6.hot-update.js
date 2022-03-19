"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/donation/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/donation/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Donation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");














function Donation() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setModalShow = _useState2[1];

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_8__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

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
      selectid = _useState10[0],
      setselectid = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      selectedtype = _useState12[0],
      setselectedtype = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      SelectedTitle = _useState14[0],
      setSelectedTitle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      SelectedendDate = _useState16[0],
      setSelectedendDate = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    fetchContractData();
    window.ethereum.on('accountsChanged', fetchContractData);
    window.ethereum.on('chainChanged', fetchContractData);
    return function () {
      window.ethereum.removeListener('accountsChanged', fetchContractData);
      window.ethereum.removeListener('chainChanged', fetchContractData);
    };
  }, [contract]);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("DateCount");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }
    } catch (error) {}
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
      var totalEvent, arr, i, value, object, pricedes1;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!contract) {
                _context.next = 28;
                break;
              }

              _context.t0 = setTokenName;
              _context.next = 5;
              return contract.name();

            case 5:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
              _context.t2 = setTokenSymbol;
              _context.next = 10;
              return contract.symbol();

            case 10:
              _context.t3 = _context.sent;
              (0, _context.t2)(_context.t3);
              _context.next = 14;
              return contract.totalEvent();

            case 14:
              totalEvent = _context.sent;
              arr = [];
              i = 0;

            case 17:
              if (!(i < Number(totalEvent))) {
                _context.next = 26;
                break;
              }

              _context.next = 20;
              return contract.eventURI(i);

            case 20:
              value = _context.sent;

              if (value) {
                object = JSON.parse(value);
                pricedes1 = 0;

                try {
                  pricedes1 = Number(object.properties.Goal.description * 3.054);
                } catch (ex) {}

                arr.push({
                  eventId: i,
                  Title: object.properties.Title.description,
                  Date: object.properties.Date.description,
                  Goalusd: formatter.format(pricedes1),
                  Goal: object.properties.Goal.description,
                  logo: object.properties.logo.description
                });
              }

              console.log(value);

            case 23:
              i++;
              _context.next = 17;
              break;

            case 26:
              setList(arr);
              document.getElementById("Loading").style = "display:none";

            case 28:
              _context.next = 33;
              break;

            case 30:
              _context.prev = 30;
              _context.t4 = _context["catch"](0);
              console.error(_context.t4);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 30]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  function activateCreateNFTModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setSelectedendDate(e.target.getAttribute("date"));
    setselectedtype("NFT");
    setModalShow(true);
  }

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_head__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, "Donation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: "Donation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("link", {
    rel: "icon",
    href: "/Logo.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "DonationBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
    to: "?q=All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "DonationBarLink active"
  }, "All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
    to: "?q=Today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "DonationBarLink"
  }, "Today")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
    to: "?q=This Month"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "DonationBarLink"
  }, "This Month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      key: listItem.eventId,
      className: "row",
      style: {
        height: 305,
        margin: 28,
        background: "white",
        color: "black",
        position: "relative",
        overflow: "hidden",
        padding: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "",
      style: {
        top: 15,
        left: 25,
        position: "absolute"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
      name: "DateCount",
      date: listItem.Date
    }, LeftDate(listItem.Date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        top: '56px',
        position: 'absolute',
        left: '20px',
        height: '217px',
        right: '28px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.logo,
      style: {
        aspectRatio: '4',
        maxWidth: '250px',
        maxHeight: '220px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        paddingTop: 10,
        marginLeft: 29,
        display: "flex",
        height: "100%",
        flexDirection: "column",
        width: "100%",
        rowGap: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, listItem.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: "flex",
        "whiteSpace": "pre-wrap"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, "Goal:  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, "$", listItem.Goalusd, " (", listItem.Goal, " CELO)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        height: '61px',
        float: 'right',
        gap: '26px',
        position: 'inherit',
        right: '-319px',
        bottom: '-104px',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: "flex",
        gap: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      onClick: activateCreateNFTModal,
      className: "card",
      style: {
        color: "white",
        background: "rgb(0, 222, 205)",
        textAlign: "center",
        cursor: "pointer",
        height: "100%",
        float: "right",
        margin: 0,
        width: 245
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card-body",
      style: {
        height: "100%"
      }
    }, "Donate NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
      to: "/donation/auction?[".concat(listItem.eventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "card",
      style: {
        color: "white",
        background: "rgb(0, 222, 205)",
        textAlign: "center",
        cursor: "pointer",
        height: "100%",
        float: "right",
        margin: 0,
        width: 266
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "card-body",
      style: {
        height: "100%"
      }
    }, "Go to auction"))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setModalShow(false);
    },
    contract: contract,
    senderAddress: signerAddress,
    EventID: selectid,
    type: selectedtype,
    SelectedTitle: SelectedTitle,
    enddate: SelectedendDate
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "adc7dd5158d223826d96"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmIwMzlkNGE2ZjI2YjFkZDM5ZmU2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU1ksUUFBVCxHQUFvQjtBQUMvQixrQkFBd0NYLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT1ksZUFBUDtBQUFBLE1BQXdCQyxZQUF4Qjs7QUFDQSxxQkFBb0NKLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFLLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFDQSxtQkFBd0JmLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT2dCLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFrQ2pCLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBO0FBQUEsTUFBT2tCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQXNDbkIsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPb0IsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBZ0NyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9zQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG9CQUF3Q3ZCLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT3dCLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esb0JBQTBDekIsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPMEIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0Esb0JBQThDM0IsK0NBQVEsQ0FBQyxFQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBR0E1QixFQUFB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QUFTLEVBQUMsV0FBM0Y7QUFBdUcsV0FBSyxFQUFFO0FBQUV5QixRQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUE5RyxvQkFESixDQURKLGVBTUksaURBQUMsc0RBQUQ7QUFBVSxRQUFFLCtCQUF3QkQsUUFBUSxDQUFDekIsT0FBakM7QUFBWixvQkFDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLFdBQUssRUFBRTtBQUFFNkIsUUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JELFFBQUFBLFVBQVUsRUFBRSxrQkFBOUI7QUFBa0RvQixRQUFBQSxTQUFTLEVBQUUsUUFBN0Q7QUFBdUVDLFFBQUFBLE1BQU0sRUFBRSxTQUEvRTtBQUEwRnZCLFFBQUFBLE1BQU0sRUFBRSxNQUFsRztBQUEwR21CLFFBQUFBLEtBQUssRUFBRSxPQUFqSDtBQUEwSGxCLFFBQUFBLE1BQU0sRUFBRSxDQUFsSTtBQUFxSWdCLFFBQUFBLEtBQUssRUFBRTtBQUE1STtBQUE3QixvQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUssRUFBRTtBQUFFakIsUUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBbEMsdUJBREosQ0FESixDQU5KLENBREosQ0FkSixDQURNO0FBQUEsR0FBTCxDQTVCVCxlQTZESSxpREFBQyxvRkFBRDtBQUNJLFFBQUksRUFBRWxGLGVBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEtBSkw7QUFLSSxZQUFRLEVBQUVDLFFBTGQ7QUFNSSxpQkFBYSxFQUFFQyxhQU5uQjtBQU9JLFdBQU8sRUFBRU8sUUFQYjtBQVFJLFFBQUksRUFBRUUsWUFSVjtBQVNJLGlCQUFhLEVBQUVFLGFBVG5CO0FBVUksV0FBTyxFQUFFRTtBQVZiLElBN0RKLENBREo7QUE0RUg7Ozs7Ozs7O1VDaE1ELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvZG9uYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGlvbigpIHtcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWR0eXBlLCBzZXRzZWxlY3RlZHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtTZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbU2VsZWN0ZWRlbmREYXRlLCBzZXRTZWxlY3RlZGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcbiAgICAgICAgfTtcbiAgICB9LCBbY29udHJhY3RdKTtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIkRhdGVDb3VudFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29udHJhY3QpIHtcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEV2ZW50ID0gYXdhaXQgY29udHJhY3QudG90YWxFdmVudCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKHRvdGFsRXZlbnQpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC5ldmVudFVSSShpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkgeyBwcmljZWRlczEgPSBOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDMuMDU0KSB9IGNhdGNoIChleCkgeyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlOiBvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWx1c2Q6IGZvcm1hdHRlci5mb3JtYXQocHJpY2VkZXMxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiBvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RG9uYXRpb248L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEb25hdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5zdmdcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nRG9uYXRpb25CYXInPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1BbGwnPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayBhY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRvZGF5Jz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VGhpcyBNb250aCc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5ldmVudElkfSBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e2hlaWdodDogMzA1LG1hcmdpbjogMjgsYmFja2dyb3VuZDogXCJ3aGl0ZVwiLGNvbG9yOiBcImJsYWNrXCIscG9zaXRpb246IFwicmVsYXRpdmVcIixvdmVyZmxvdzogXCJoaWRkZW5cIixwYWRkaW5nOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgdG9wOiAxNSwgbGVmdDogMjUsIHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgbmFtZT1cIkRhdGVDb3VudFwiIGRhdGU9e2xpc3RJdGVtLkRhdGV9PntMZWZ0RGF0ZShsaXN0SXRlbS5EYXRlKX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4Jyx0b3A6ICc1NnB4Jyxwb3NpdGlvbjogJ2Fic29sdXRlJyxsZWZ0OiAnMjBweCcsaGVpZ2h0OiAnMjE3cHgnLHJpZ2h0OiAnMjhweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5sb2dvfSBzdHlsZT17eyBhc3BlY3RSYXRpbzogJzQnLG1heFdpZHRoOiAnMjUwcHgnLG1heEhlaWdodDogJzIyMHB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxMCwgbWFyZ2luTGVmdDogMjksIGRpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCB3aWR0aDogXCIxMDAlXCIsIHJvd0dhcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntsaXN0SXRlbS5UaXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIFwid2hpdGVTcGFjZVwiOiBcInByZS13cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiR7bGlzdEl0ZW0uR29hbHVzZH0gKHtsaXN0SXRlbS5Hb2FsfSBDRUxPKTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICc2MXB4JywgZmxvYXQ6ICdyaWdodCcsIGdhcDogJzI2cHgnLCBwb3NpdGlvbjogJ2luaGVyaXQnLCByaWdodDogJy0zMTlweCcsIGJvdHRvbTogJy0xMDRweCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogXCJyZ2IoMCwgMjIyLCAyMDUpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luOiAwLCB3aWR0aDogMjQ1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIE5GVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayAgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtsaXN0SXRlbS5ldmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogXCJyZ2IoMCwgMjIyLCAyMDUpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luOiAwLCB3aWR0aDogMjY2IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIGF1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbmsgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cbiAgICAgICAgICAgICAgICBFdmVudElEPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3RlZHR5cGV9XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17U2VsZWN0ZWRUaXRsZX1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtTZWxlY3RlZGVuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImFkYzdkZDUxNThkMjIzODI2ZDk2XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiTmF2TGluayIsIkNhcmQiLCJDb2wiLCJSb3ciLCJ1c2VDb250cmFjdCIsIkRvbmF0ZU5GVE1vZGFsIiwiRG9uYXRpb24iLCJDcmVhdGVtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJsaXN0Iiwic2V0TGlzdCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0ZWR0eXBlIiwic2V0c2VsZWN0ZWR0eXBlIiwiU2VsZWN0ZWRUaXRsZSIsInNldFNlbGVjdGVkVGl0bGUiLCJTZWxlY3RlZGVuZERhdGUiLCJzZXRTZWxlY3RlZGVuZERhdGUiLCJmZXRjaENvbnRyYWN0RGF0YSIsIndpbmRvdyIsImV0aGVyZXVtIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiZXJyb3IiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibmFtZSIsInN5bWJvbCIsInRvdGFsRXZlbnQiLCJhcnIiLCJOdW1iZXIiLCJldmVudFVSSSIsInZhbHVlIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJpY2VkZXMxIiwicHJvcGVydGllcyIsIkdvYWwiLCJkZXNjcmlwdGlvbiIsImV4IiwicHVzaCIsImV2ZW50SWQiLCJUaXRsZSIsIkRhdGUiLCJHb2FsdXNkIiwiZm9ybWF0IiwibG9nbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImUiLCJ0YXJnZXQiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJtIiwicyIsInRvU3RyaW5nIiwibGlzdEl0ZW0iLCJoZWlnaHQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZyIsInRvcCIsImxlZnQiLCJkaXNwbGF5IiwicmlnaHQiLCJhc3BlY3RSYXRpbyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZ1RvcCIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJyb3dHYXAiLCJmbG9hdCIsImdhcCIsImJvdHRvbSIsInRleHRBbGlnbiIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=