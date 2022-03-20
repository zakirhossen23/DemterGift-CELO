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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "eb961a84dffd4fbb50b3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmNiMDU4ZWYzNTkzZDk3ZTM2ZmY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSWUsU0FBU2EsYUFBVCxPQUtaO0FBQUEsTUFKRkMsSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsRUFFRSxRQUZGQSxFQUVFO0FBQUEsTUFERkMsS0FDRSxRQURGQSxLQUNFOztBQUNGLHFCQUFvQ0wsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUU0sUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCOztBQUNBLGtCQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPbUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsV0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDckIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sY0FBZUEsR0FBZixJQUF1QkEsR0FBOUI7QUFDQTs7QUFDRCxXQUFTQyxJQUFULENBQWNELEdBQWQsRUFBbUI7QUFDbEIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sR0FBVyxJQUFYLEdBQWtCLElBQXpCO0FBQ0E7O0FBQ0QsTUFBTUUsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNoREMsSUFBQUEscUJBQXFCLEVBQUUsQ0FEeUI7QUFFaERDLElBQUFBLHFCQUFxQixFQUFFO0FBRnlCLEdBQS9CLENBQWxCOztBQVhFLFdBZ0JhQyxpQkFoQmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsa05BZ0JGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxv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QztBQUE3RCxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFlBREQsQ0FERCxlQUlDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxpQkFERCxDQUpELGVBT0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFdBREQsQ0FQRCxDQURELENBREQsT0FhUywwRkFBQXRELElBQUksTUFBSixDQUFBQSxJQUFJLEVBQUssVUFBQ3VELFFBQUQ7QUFBQSx3QkFDaEI7QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ1osRUFBbkI7QUFBdUIsZUFBUyxFQUFDO0FBQWpDLG9CQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNDO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBc0JZLFFBQVEsQ0FBQ3JCLElBQS9CLENBREQsQ0FERCxlQUlDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFzQnFCLFFBQVEsQ0FBQ1gsSUFBL0IsQ0FERCxDQUpELGVBT0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFJLGVBQVMsRUFBQztBQUFkLFlBQXVCVyxRQUFRLENBQUNSLFdBQWhDLFFBQStDUSxRQUFRLENBQUNULFFBQXhELFdBREQsQ0FQRCxDQURELENBREQsQ0FEZ0I7QUFBQSxHQUFMLENBYmIsQ0FERCxDQWRELENBREQ7QUFtREE7Ozs7Ozs7O1VDeklELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdtb2RhbFNob3coe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGlkLFxuXHR0aXRsZVxufSkge1xuXHRjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblx0ZnVuY3Rpb24gYWRkWmVybyhudW0pIHtcblx0XHRyZXR1cm4gbnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW07XG5cdH1cblx0ZnVuY3Rpb24gQW1QTShudW0pIHtcblx0XHRyZXR1cm4gbnVtIDwgMTIgPyAnQU0nIDogJ1BNJztcblx0fVxuXHRjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuXHRcdG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcblx0XHRtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY29udHJhY3QgJiYgaWQpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0Y29uc3QgYXJyID0gW107XG5cdFx0XHRcdGNvbnN0IHRvdGFsQmlkcyA9IGF3YWl0IGNvbnRyYWN0LmdldEJpZHNTZWFyY2hUb2tlbihpZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRvdGFsQmlkcyk7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKDEwKTsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqID0gYXdhaXQgdG90YWxCaWRzW2ldO1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IHt9O1xuXHRcdFx0XHRcdHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxuXHRcdFx0XHRcdGlmIChvYmplY3QudGl0bGUpIHtcblx0XHRcdFx0XHRcdHZhciBwcmljZWRlczEgPSAwO1xuXHRcdFx0XHRcdFx0dHJ5IHsgcHJpY2VkZXMxID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuYmlkLmRlc2NyaXB0aW9uICogMy4wNTQpKSB9IGNhdGNoIChleCkgeyB9XG5cdFx0XHRcdFx0XHRjb25zdCBCaWRJZCA9IE51bWJlcihhd2FpdCBjb250cmFjdC5nZXRCaWRJZEJ5VXJpKG9iaikpO1xuXHRcdFx0XHRcdFx0Y29uc3QgRGF0ZXRpbWUgPSBuZXcgRGF0ZShvYmplY3QucHJvcGVydGllcy50aW1lLmRlc2NyaXB0aW9uKTtcblxuXHRcdFx0XHRcdFx0bGV0IGN1cnJlbnRkYXRlID0gYCR7YWRkWmVybyhEYXRldGltZS5nZXREYXRlKCkpfS8ke2FkZFplcm8oRGF0ZXRpbWUuZ2V0TW9udGgoKSArIDEpfS8ke2FkZFplcm8oRGF0ZXRpbWUuZ2V0RnVsbFllYXIoKSl9ICR7YWRkWmVybyhEYXRldGltZS5nZXRIb3VycygpKX06JHthZGRaZXJvKERhdGV0aW1lLmdldE1pbnV0ZXMoKSl9OiR7YWRkWmVybyhEYXRldGltZS5nZXRTZWNvbmRzKCkpfSAke0FtUE0oRGF0ZXRpbWUuZ2V0SG91cnMoKSl9YFxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRJZDogQmlkSWQsXG5cdFx0XHRcdFx0XHRcdG5hbWU6IG9iamVjdC5wcm9wZXJ0aWVzLnVzZXJuYW1lLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR0aW1lOiBjdXJyZW50ZGF0ZSxcblx0XHRcdFx0XHRcdFx0YmlkcHJpY2U6IG9iamVjdC5wcm9wZXJ0aWVzLmJpZC5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcdFx0YmlkcHJpY2V1c2Q6IHByaWNlZGVzMVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGFycik7XG5cdFx0XHRcdHNldExpc3QoYXJyKTtcblx0XHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuXHRcdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5ndGFibGVcIikpIHtcblx0XHRcdFx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ3RhYmxlXCIpO1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2tcIjtcblx0XHRcdFx0XHQoZWxlbWVudCkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG5cdH0sIFsgY29udHJhY3RdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0b25TaG93PXtmZXRjaENvbnRyYWN0RGF0YX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdHNpemU9XCJ4bFwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0VmlldyBCaWQgLSB7dGl0bGV9XG5cdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxkaXYgaWQ9J0xvYWRpbmd0YWJsZScgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZUhlYWRlcic+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVIZWFkZXJDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVoZWFkZXJEYXRlQ29udGFpbmVyJyA+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImhlYWRlclwiPkRhdGU8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZWhlYWRlclVzZXJDb250YWluZXJcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImhlYWRlclwiPlVzZXIgTmFtZTwvaDQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlaGVhZGVyQmlkQ29udGFpbmVyXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5CaWQ8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PiB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT0ndGFibGVGdWxsUm93Q29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDZWxsQ29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NlbGxEYXRlQ29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNlbGxcIj57bGlzdEl0ZW0udGltZX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDZWxsVXNlckNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+e2xpc3RJdGVtLm5hbWV9PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd0NlbGxCaWRDb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNlbGxcIj4ke2xpc3RJdGVtLmJpZHByaWNldXNkfSAoe2xpc3RJdGVtLmJpZHByaWNlfSBjVVNEKTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj4pKX1cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZWI5NjFhODRkZmZkNGZiYjUwYjNcIjsgfSJdLCJuYW1lcyI6WyJNb2RhbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJGb3JtIiwiSGVhZCIsIlJvdyIsIkxpbmsiLCJDb2wiLCJJbWFnZSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiVmlld21vZGFsU2hvdyIsInNob3ciLCJvbkhpZGUiLCJpZCIsInRpdGxlIiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwibGlzdCIsInNldExpc3QiLCJhZGRaZXJvIiwibnVtIiwiQW1QTSIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmZXRjaENvbnRyYWN0RGF0YSIsInRva2VuVVJJIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYXJyIiwiZ2V0Qmlkc1NlYXJjaFRva2VuIiwidG90YWxCaWRzIiwiaSIsIk51bWJlciIsIm9iaiIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInByaWNlZGVzMSIsImZvcm1hdCIsInByb3BlcnRpZXMiLCJiaWQiLCJkZXNjcmlwdGlvbiIsImV4IiwiZ2V0QmlkSWRCeVVyaSIsIkJpZElkIiwiRGF0ZXRpbWUiLCJEYXRlIiwidGltZSIsImN1cnJlbnRkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwicHVzaCIsIklkIiwibmFtZSIsInVzZXJuYW1lIiwiYmlkcHJpY2UiLCJiaWRwcmljZXVzZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImRpc3BsYXkiLCJsaXN0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=