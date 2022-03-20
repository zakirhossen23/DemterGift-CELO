"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/components/modals/ViewBidNFTModal.jsx":
/*!**************************************************************!*\
  !*** ./src/components/components/modals/ViewBidNFTModal.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
                pricedes1 = formatter.format(Number(object.properties.bid.description * 0.9972));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c444d2be8acbbb83e5c2"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmRiN2Y2OWIzMWYwYmIxZmYyOTU4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSWUsU0FBU2EsYUFBVCxPQUtaO0FBQUEsTUFKRkMsSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsRUFFRSxRQUZGQSxFQUVFO0FBQUEsTUFERkMsS0FDRSxRQURGQSxLQUNFOztBQUNGLHFCQUFvQ0wsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUU0sUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCOztBQUNBLGtCQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPbUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsV0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDckIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sY0FBZUEsR0FBZixJQUF1QkEsR0FBOUI7QUFDQTs7QUFDRCxXQUFTQyxJQUFULENBQWNELEdBQWQsRUFBbUI7QUFDbEIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sR0FBVyxJQUFYLEdBQWtCLElBQXpCO0FBQ0E7O0FBQ0QsTUFBTUUsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNoREMsSUFBQUEscUJBQXFCLEVBQUUsQ0FEeUI7QUFFaERDLElBQUFBLHFCQUFxQixFQUFFO0FBRnlCLEdBQS9CLENBQWxCOztBQVhFLFdBZ0JhQyxpQkFoQmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsa05BZ0JGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxv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QztBQUE3RCxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFlBREQsQ0FERCxlQUlDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxpQkFERCxDQUpELGVBT0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFdBREQsQ0FQRCxDQURELENBREQsT0FhUywwRkFBQXRELElBQUksTUFBSixDQUFBQSxJQUFJLEVBQUssVUFBQ3VELFFBQUQ7QUFBQSx3QkFDaEI7QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ1osRUFBbkI7QUFBdUIsZUFBUyxFQUFDO0FBQWpDLG9CQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNDO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBc0JZLFFBQVEsQ0FBQ3JCLElBQS9CLENBREQsQ0FERCxlQUlDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFzQnFCLFFBQVEsQ0FBQ1gsSUFBL0IsQ0FERCxDQUpELGVBT0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFJLGVBQVMsRUFBQztBQUFkLFlBQXVCVyxRQUFRLENBQUNSLFdBQWhDLFFBQStDUSxRQUFRLENBQUNULFFBQXhELFdBREQsQ0FQRCxDQURELENBREQsQ0FEZ0I7QUFBQSxHQUFMLENBYmIsQ0FERCxDQWRELENBREQ7QUFtREE7Ozs7Ozs7O1VDeklELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdtb2RhbFNob3coe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGlkLFxuXHR0aXRsZVxufSkge1xuXHRjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblx0ZnVuY3Rpb24gYWRkWmVybyhudW0pIHtcblx0XHRyZXR1cm4gbnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW07XG5cdH1cblx0ZnVuY3Rpb24gQW1QTShudW0pIHtcblx0XHRyZXR1cm4gbnVtIDwgMTIgPyAnQU0nIDogJ1BNJztcblx0fVxuXHRjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuXHRcdG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcblx0XHRtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY29udHJhY3QgJiYgaWQpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0Y29uc3QgYXJyID0gW107XG5cdFx0XHRcdGNvbnN0IHRvdGFsQmlkcyA9IGF3YWl0IGNvbnRyYWN0LmdldEJpZHNTZWFyY2hUb2tlbihpZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRvdGFsQmlkcyk7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKDEwKTsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqID0gYXdhaXQgdG90YWxCaWRzW2ldO1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IHt9O1xuXHRcdFx0XHRcdHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxuXHRcdFx0XHRcdGlmIChvYmplY3QudGl0bGUpIHtcblx0XHRcdFx0XHRcdHZhciBwcmljZWRlczEgPSAwO1xuXHRcdFx0XHRcdFx0dHJ5IHsgcHJpY2VkZXMxID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuYmlkLmRlc2NyaXB0aW9uICogMC45OTcyKSkgfSBjYXRjaCAoZXgpIHsgfVxuXHRcdFx0XHRcdFx0Y29uc3QgQmlkSWQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QuZ2V0QmlkSWRCeVVyaShvYmopKTtcblx0XHRcdFx0XHRcdGNvbnN0IERhdGV0aW1lID0gbmV3IERhdGUob2JqZWN0LnByb3BlcnRpZXMudGltZS5kZXNjcmlwdGlvbik7XG5cblx0XHRcdFx0XHRcdGxldCBjdXJyZW50ZGF0ZSA9IGAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0RGF0ZSgpKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldE1vbnRoKCkgKyAxKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldEZ1bGxZZWFyKCkpfSAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0SG91cnMoKSl9OiR7YWRkWmVybyhEYXRldGltZS5nZXRNaW51dGVzKCkpfToke2FkZFplcm8oRGF0ZXRpbWUuZ2V0U2Vjb25kcygpKX0gJHtBbVBNKERhdGV0aW1lLmdldEhvdXJzKCkpfWBcblx0XHRcdFx0XHRcdGFyci5wdXNoKHtcblx0XHRcdFx0XHRcdFx0SWQ6IEJpZElkLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiBvYmplY3QucHJvcGVydGllcy51c2VybmFtZS5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcdFx0dGltZTogY3VycmVudGRhdGUsXG5cdFx0XHRcdFx0XHRcdGJpZHByaWNlOiBvYmplY3QucHJvcGVydGllcy5iaWQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0XHRcdGJpZHByaWNldXNkOiBwcmljZWRlczFcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhhcnIpO1xuXHRcdFx0XHRzZXRMaXN0KGFycik7XG5cdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcblx0XHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ3RhYmxlXCIpKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmd0YWJsZVwiKTtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlID0gXCJkaXNwbGF5OmJsb2NrXCI7XG5cdFx0XHRcdFx0KGVsZW1lbnQpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hDb250cmFjdERhdGEoKTtcblxuXHR9LCBbIGNvbnRyYWN0XSk7XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdG9uU2hvdz17ZmV0Y2hDb250cmFjdERhdGF9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwieGxcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFZpZXcgQmlkIC0ge3RpdGxlfVxuXHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8ZGl2IGlkPSdMb2FkaW5ndGFibGUnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVIZWFkZXInPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlSGVhZGVyQ29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlaGVhZGVyRGF0ZUNvbnRhaW5lcicgPlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5EYXRlPC9oND5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVoZWFkZXJVc2VyQ29udGFpbmVyXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5Vc2VyIE5hbWU8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZWhlYWRlckJpZENvbnRhaW5lclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+QmlkPC9oND5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj4ge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9J3RhYmxlRnVsbFJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbENvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDZWxsRGF0ZUNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+e2xpc3RJdGVtLnRpbWV9PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbFVzZXJDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2VsbFwiPntsaXN0SXRlbS5uYW1lfTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dDZWxsQmlkQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+JHtsaXN0SXRlbS5iaWRwcmljZXVzZH0gKHtsaXN0SXRlbS5iaWRwcmljZX0gY1VTRCk8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+KSl9XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImM0NDRkMmJlOGFjYmJiODNlNWMyXCI7IH0iXSwibmFtZXMiOlsiTW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRm9ybSIsIkhlYWQiLCJSb3ciLCJMaW5rIiwiQ29sIiwiSW1hZ2UiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIlZpZXdtb2RhbFNob3ciLCJzaG93Iiwib25IaWRlIiwiaWQiLCJ0aXRsZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInJvdXRlciIsImxpc3QiLCJzZXRMaXN0IiwiYWRkWmVybyIsIm51bSIsIkFtUE0iLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZmV0Y2hDb250cmFjdERhdGEiLCJ0b2tlblVSSSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFyciIsImdldEJpZHNTZWFyY2hUb2tlbiIsInRvdGFsQmlkcyIsImkiLCJOdW1iZXIiLCJvYmoiLCJvYmplY3QiLCJKU09OIiwicGFyc2UiLCJwcmljZWRlczEiLCJmb3JtYXQiLCJwcm9wZXJ0aWVzIiwiYmlkIiwiZGVzY3JpcHRpb24iLCJleCIsImdldEJpZElkQnlVcmkiLCJCaWRJZCIsIkRhdGV0aW1lIiwiRGF0ZSIsInRpbWUiLCJjdXJyZW50ZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInB1c2giLCJJZCIsIm5hbWUiLCJ1c2VybmFtZSIsImJpZHByaWNlIiwiYmlkcHJpY2V1c2QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJlbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZXJyb3IiLCJkaXNwbGF5IiwibGlzdEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9