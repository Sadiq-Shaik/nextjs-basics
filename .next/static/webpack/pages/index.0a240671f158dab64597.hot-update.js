webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "D:\\1. React_Course\\6.1NextJS_Advanced_Project\\pages\\index.js";
// import { useEffect, useState } from "react";


var DUMMY_MEETUPS = [{
  id: "m1",
  title: "A First Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg",
  address: "Sultan Ahmet, Ayasofya Meydan No:1, 34122 Fatih/İstanbul, Turkey",
  description: "Hagia Sophia, officially known as the Holy Hagia Sophia Grand Mosque, and formerly the Church of Hagia Sophia is a Late Antique place of worship in Istanbul, designed by the Greek geometers Isidore of Miletus and Anthemius of Tralles"
}, {
  id: "m2",
  title: "A Second Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mezquita_de_C%C3%B3rdoba_desde_el_aire_%28C%C3%B3rdoba%2C_Espa%C3%B1a%29.jpg",
  address: "C. Cardenal Herrero, 1, 14003 Córdoba, Spain",
  description: "The Mosque–Cathedral of Córdoba, officially known by its ecclesiastical name, the Cathedral of Our Lady of the Assumption, is the cathedral of the Roman Catholic Diocese of Córdoba dedicated to the Assumption of Mary and located in the Spanish region of Andalusia"
}];

function HomePage(props) {
  //   no need to do this
  //   const [loadedMeetups, setMeetups] = useState([]);
  //   useEffect(() => {
  //     //send hhtp to receive meetup list
  //     setMeetups(DUMMY_MEETUPS);
  //   }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} // SSG;
// static data fetching for static site generation.
// getStaticProps() and props property in return object are mandatory names.
// we can access database or file system too here, the code inside this is NEITHER RUN ON SERVER NOR ON CLIENT** but during build process.


_c = HomePage;
// // SSR
// export async function getServerSideProps(context) {
//   // request from client
//   const req = context.req;
//   const res = context.res;
//   // fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZ0JBRlQ7QUFHRUMsT0FBSyxFQUNILGdGQUpKO0FBS0VDLFNBQU8sRUFBRSxrRUFMWDtBQU1FQyxhQUFXLEVBQ1Q7QUFQSixDQURvQixFQVVwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNILGtJQUpKO0FBS0VDLFNBQU8sRUFBRSw4Q0FMWDtBQU1FQyxhQUFXLEVBQ1Q7QUFQSixDQVZvQixDQUF0Qjs7QUFxQkEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQVNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTs7O0tBdkJTRixRO0FBdURUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGEyNDA2NzFmMTU4ZGFiNjQ1OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMi8yMi9IYWdpYV9Tb3BoaWFfTWFyc18yMDEzLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTdWx0YW4gQWhtZXQsIEF5YXNvZnlhIE1leWRhbiBObzoxLCAzNDEyMiBGYXRpaC/EsHN0YW5idWwsIFR1cmtleVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSGFnaWEgU29waGlhLCBvZmZpY2lhbGx5IGtub3duIGFzIHRoZSBIb2x5IEhhZ2lhIFNvcGhpYSBHcmFuZCBNb3NxdWUsIGFuZCBmb3JtZXJseSB0aGUgQ2h1cmNoIG9mIEhhZ2lhIFNvcGhpYSBpcyBhIExhdGUgQW50aXF1ZSBwbGFjZSBvZiB3b3JzaGlwIGluIElzdGFuYnVsLCBkZXNpZ25lZCBieSB0aGUgR3JlZWsgZ2VvbWV0ZXJzIElzaWRvcmUgb2YgTWlsZXR1cyBhbmQgQW50aGVtaXVzIG9mIFRyYWxsZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNi82Yy9NZXpxdWl0YV9kZV9DJUMzJUIzcmRvYmFfZGVzZGVfZWxfYWlyZV8lMjhDJUMzJUIzcmRvYmElMkNfRXNwYSVDMyVCMWElMjkuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIkMuIENhcmRlbmFsIEhlcnJlcm8sIDEsIDE0MDAzIEPDs3Jkb2JhLCBTcGFpblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhlIE1vc3F1ZeKAk0NhdGhlZHJhbCBvZiBDw7NyZG9iYSwgb2ZmaWNpYWxseSBrbm93biBieSBpdHMgZWNjbGVzaWFzdGljYWwgbmFtZSwgdGhlIENhdGhlZHJhbCBvZiBPdXIgTGFkeSBvZiB0aGUgQXNzdW1wdGlvbiwgaXMgdGhlIGNhdGhlZHJhbCBvZiB0aGUgUm9tYW4gQ2F0aG9saWMgRGlvY2VzZSBvZiBDw7NyZG9iYSBkZWRpY2F0ZWQgdG8gdGhlIEFzc3VtcHRpb24gb2YgTWFyeSBhbmQgbG9jYXRlZCBpbiB0aGUgU3BhbmlzaCByZWdpb24gb2YgQW5kYWx1c2lhXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgLy8gICBubyBuZWVkIHRvIGRvIHRoaXNcclxuICAvLyAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICAvL3NlbmQgaGh0cCB0byByZWNlaXZlIG1lZXR1cCBsaXN0XHJcbiAgLy8gICAgIHNldE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgLy8gICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGE+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vLyBTU0c7XHJcbi8vIHN0YXRpYyBkYXRhIGZldGNoaW5nIGZvciBzdGF0aWMgc2l0ZSBnZW5lcmF0aW9uLlxyXG4vLyBnZXRTdGF0aWNQcm9wcygpIGFuZCBwcm9wcyBwcm9wZXJ0eSBpbiByZXR1cm4gb2JqZWN0IGFyZSBtYW5kYXRvcnkgbmFtZXMuXHJcbi8vIHdlIGNhbiBhY2Nlc3MgZGF0YWJhc2Ugb3IgZmlsZSBzeXN0ZW0gdG9vIGhlcmUsIHRoZSBjb2RlIGluc2lkZSB0aGlzIGlzIE5FSVRIRVIgUlVOIE9OIFNFUlZFUiBOT1IgT04gQ0xJRU5UKiogYnV0IGR1cmluZyBidWlsZCBwcm9jZXNzLlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4gIC8vIHRoaXMgZmV0Y2ggaXMgcHJvdmlkZWQgYnkgbmV4dGpzIHNpbmNlIGl0IGlzIGF2YWlsYWJsZSBvbiBzZXJ2ZXIgc2lkZVxyXG4gIC8vIGNvbnN0IG1lZXR1cHMgPSBmZXRjaChcIi9hcGkvbWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9zYW06WnhjdmJubS0zMjFAbmV4dGpzLXByYWN0aWNlLndidTB5Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIHRoaXMgcHJvcHMgcHJvcGVydHkgaXMgc2V0IHRvIHByb3BzIG9uIHBhZ2UgY29tcG9uZW50IChIb21lcGFnZShwcm9wcykpLlxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICAgIC8vIHJlIHByZS1nZW5lcmF0ZSBwYWdlIGFmdGVyIHggc2Vjb25kcyAoaS5lIGRvbnQgaGF2ZSByZWRlcGxveSBmb3IgY2hhbmdlcyB0byBiZSBwcmUtZ2VuZXJhdGVkKVxyXG4gICAgcmV2YWxpZGF0ZTogMTAsIC8vc2Vjb25kc1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIC8vIFNTUlxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICAvLyByZXF1ZXN0IGZyb20gY2xpZW50XHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgIC8vIGZldGNoIGRhdGEgZnJvbSBhcGlcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9