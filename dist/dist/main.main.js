"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Gruppo-Regular.ttf */ "./src/fonts/Gruppo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/WIKIPEDIA15_BATTLESHIP.svg */ "./src/images/WIKIPEDIA15_BATTLESHIP.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Gruppo\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@keyframes opacityAnimation {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n    display: block;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes colourAnimation {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #ff124f;\n  }\n}\n\n@keyframes visibilityAnimationHidden {\n  100% {\n    visibility: hidden;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Gruppo\", sans-serif;\n  background-color: #602080;\n}\n\nh1 {\n  font-size: 6em;\n  color: #ff00a0;\n  background-color: transparent;\n  animation: opacityAnimation 1s ease-in;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 50vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: 75%;\n  background-position: center;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.boardContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 80vh;\n  margin-top: 3.5em;\n}\n\n.board1,\n.board2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  justify-content: center;\n}\n\n.board1container {\n  width: 100%;\n  height: 100%;\n}\n\n.board1container.activated {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.player1Name,\n.player2Name {\n  font-size: 3em;\n}\n\n.board1Ships,\n.board2Ships {\n  font-size: 2em;\n  margin-bottom: 1.5em;\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.board1Ships > *:hover,\n.board2Ships > *:hover {\n  color: green;\n  font-weight: bold;\n}\n\n.cell1,\n.cell2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n}\n\n.cellTakenByPlayer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByComputer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #edf84f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByPlayer3Cruiser {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer3 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer4 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer5 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cell1:hover,\n.cell2:hover {\n  transition: 0.4s;\n  background-color: #fe75fe;\n}\n\n.empty {\n  background-color: #33163a;\n  width: 4em;\n  height: 4em;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  border: 1px solid black;\n}\n\nbutton {\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  font-size: 2.5em;\n  animation: opacityAnimation 1s ease-in;\n}\n\nbutton:hover {\n  color: #ff124f;\n  transition: 0.3s;\n}\n\n.deactivated {\n  animation: visibilityAnimationHidden 2s ease-out;\n  opacity: 0;\n  display: none;\n  transition: opacity 1.5s display 1.5s linear;\n}\n\n.activated {\n  animation: opacityAnimation 3s ease-in;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Gruppo\";\n  src: url(./fonts/Gruppo-Regular.ttf);\n}\n\n@keyframes opacityAnimation {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n    display: block;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes colourAnimation {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #ff124f;\n  }\n}\n\n@keyframes visibilityAnimationHidden {\n  100% {\n    visibility: hidden;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Gruppo\", sans-serif;\n  background-color: #602080;\n}\n\nh1 {\n  font-size: 6em;\n  color: #ff00a0;\n  background-color: transparent;\n  animation: opacityAnimation 1s ease-in;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 50vh;\n  background-image: url(\"/src/images/WIKIPEDIA15_BATTLESHIP.svg\");\n  background-repeat: no-repeat;\n  background-size: 75%;\n  background-position: center;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.boardContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 80vh;\n  margin-top: 3.5em;\n}\n\n.board1,\n.board2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  justify-content: center;\n}\n\n.board1container {\n  width: 100%;\n  height: 100%;\n}\n\n.board1container.activated {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.player1Name,\n.player2Name {\n  font-size: 3em;\n}\n\n.board1Ships,\n.board2Ships {\n  font-size: 2em;\n  margin-bottom: 1.5em;\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.board1Ships > *:hover,\n.board2Ships > *:hover {\n  color: green;\n  font-weight: bold;\n}\n\n.cell1,\n.cell2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n}\n\n.cellTakenByPlayer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByComputer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #edf84f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByPlayer3Cruiser {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer3 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer4 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer5 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cell1:hover,\n.cell2:hover {\n  transition: 0.4s;\n  background-color: #fe75fe;\n}\n\n.empty {\n  background-color: #33163a;\n  width: 4em;\n  height: 4em;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  border: 1px solid black;\n}\n\nbutton {\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  font-size: 2.5em;\n  animation: opacityAnimation 1s ease-in;\n}\n\nbutton:hover {\n  color: #ff124f;\n  transition: 0.3s;\n}\n\n.deactivated {\n  animation: visibilityAnimationHidden 2s ease-out;\n  opacity: 0;\n  display: none;\n  transition: opacity 1.5s display 1.5s linear;\n}\n\n.activated {\n  animation: opacityAnimation 3s ease-in;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Gruppo-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Gruppo-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2393675620be8c54ff95.ttf";

/***/ }),

/***/ "./src/images/WIKIPEDIA15_BATTLESHIP.svg":
/*!***********************************************!*\
  !*** ./src/images/WIKIPEDIA15_BATTLESHIP.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "921b2ece482ed9983bb5.svg";

/***/ }),

/***/ "./src/addShipToBoard.js":
/*!*******************************!*\
  !*** ./src/addShipToBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addShipToBoard)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function addShipToBoard(_x) {
  return _addShipToBoard.apply(this, arguments);
}
function _addShipToBoard() {
  _addShipToBoard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var arrayOfCoords, numberOfCells, counter, classCounter, checkMarkDiv, crossMarkDiv, isArrayInArray;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          isArrayInArray = function _isArrayInArray(arr, item) {
            var itemAsString = JSON.stringify(item);
            var contains = arr.some(function (ele) {
              return JSON.stringify(ele) === itemAsString;
            });
            return contains;
          };
          arrayOfCoords = [];
          numberOfCells = 0;
          counter = 0;
          classCounter = 0;
          e.target.style.color = "yellow";
          checkMarkDiv = document.createElement("div");
          checkMarkDiv.textContent = "✔️";
          crossMarkDiv = document.createElement("div");
          crossMarkDiv.textContent = "❌";
          e.target.appendChild(checkMarkDiv);
          e.target.appendChild(crossMarkDiv);
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            if (e.target.textContent.includes("2")) {
              numberOfCells = 2;
            } else if (e.target.textContent.includes("3")) {
              numberOfCells = 3;
            } else if (e.target.textContent.includes("4")) {
              numberOfCells = 4;
            } else if (e.target.textContent.includes("5")) {
              numberOfCells = 5;
            }
            var classToBeAdded = "cellTakenByPlayer".concat(numberOfCells);
            if (e.target.textContent.includes("Cruiser")) {
              classToBeAdded = "cellTakenByPlayer".concat(numberOfCells, "Cruiser");
            }
            var allP1Cells = document.querySelectorAll(".cell1");
            function coordinates(f) {
              var toCompare1 = arrayOfCoords.slice(1, 2);
              var toCompare0 = arrayOfCoords.slice(0, 1);
              var toBeAdded = JSON.parse("[".concat(f.target.textContent, "]"));
              if (isArrayInArray(arrayOfCoords, toBeAdded)) return;
              if (arrayOfCoords.length === 1) {
                if ((toCompare0[0][0] - toBeAdded[0] === 1 || toCompare0[0][0] - toBeAdded[0] === -1) && toCompare0[0][1] - toBeAdded[1] !== 0) {
                  return;
                }
                if (toCompare0[0][0] - toBeAdded[0] > 1 || toCompare0[0][0] - toBeAdded[0] < -1 || toCompare0[0][1] - toBeAdded[1] > 1 || toCompare0[0][1] - toBeAdded[1] < -1) {
                  return;
                }
                if (toCompare0[0][0] - toBeAdded[0] !== 0 && toCompare0[0][1] - toBeAdded[1] === 1 && toCompare0[0][1] - toBeAdded[1] === 1) {
                  return;
                }
              } else if (arrayOfCoords.length > 1) {
                var toCompare2 = arrayOfCoords.slice(arrayOfCoords.length - 1, arrayOfCoords.length - 0);
                // vertical check
                if (toCompare0[0][0] - toCompare1[0][0] === 1 || toCompare0[0][0] - toCompare1[0][0] === -1) {
                  if (toCompare2[0][1] - toBeAdded[1] >= 1 || toCompare2[0][1] - toBeAdded[1] <= -1) {
                    return;
                  }
                  if (toCompare2[0][0] - toBeAdded[0] > 1 || toCompare2[0][0] - toBeAdded[0] < -1) {
                    if (toCompare0[0][0] - toCompare1[0][0] === 1) {
                      if (toBeAdded[0] - toCompare0[0][0] !== 1) {
                        return;
                      }
                    }
                    if (toCompare0[0][0] - toCompare1[0][0] === -1) {
                      if (toCompare0[0][0] - toBeAdded[0] !== 1) {
                        return;
                      }
                    }
                  }
                }
                // horizontal check
                if (toCompare0[0][1] - toCompare1[0][1] === 1 || toCompare0[0][1] - toCompare1[0][1] === -1) {
                  if (toCompare2[0][0] - toBeAdded[0] >= 1 || toCompare2[0][0] - toBeAdded[0] <= -1) {
                    return;
                  }
                  if (toCompare2[0][1] - toBeAdded[1] > 1 || toCompare2[0][1] - toBeAdded[1] < -1) {}
                }
              }
              f.target.classList = classToBeAdded;
              f.target.classList += " ".concat(classCounter);
              classCounter += 1;
              arrayOfCoords.push(toBeAdded);
              counter += 1;
              if (numberOfCells === counter) {
                allP1Cells.forEach(function (cell) {
                  cell.removeEventListener("click", coordinates);
                });
                alert("Press the green check mark in order to confirm your choice.");
                checkMarkDiv.addEventListener("click", function () {
                  e.target.removeChild(checkMarkDiv);
                  e.target.removeChild(crossMarkDiv);
                  resolve(arrayOfCoords);
                });
              }
            }
            crossMarkDiv.addEventListener("click", function () {
              e.target.style.color = "";
              var cellsTaken = document.querySelectorAll(".".concat(classToBeAdded));
              cellsTaken.forEach(function (cell) {
                cell.classList.remove("".concat(classToBeAdded));
                cell.classList.add("cell1");
              });
              var allBoard1Cells = document.querySelectorAll("cell1");
              allBoard1Cells.forEach(function (cell) {
                cell.addEventListener("click", coordinates);
              });
              e.target.removeChild(checkMarkDiv);
              e.target.removeChild(crossMarkDiv);
              reject();
            });
            allP1Cells.forEach(function (cell) {
              cell.addEventListener("click", coordinates);
            });
          }));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _addShipToBoard.apply(this, arguments);
}

/***/ }),

/***/ "./src/addShipToBoardAI.js":
/*!*********************************!*\
  !*** ./src/addShipToBoardAI.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addShipToBoardAI)
/* harmony export */ });
/* harmony import */ var _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberGenerator.js */ "./src/numberGenerator.js");
/* harmony import */ var _coinFlip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coinFlip.js */ "./src/coinFlip.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function addShipToBoardAI(_x, _x2) {
  return _addShipToBoardAI.apply(this, arguments);
}
function _addShipToBoardAI() {
  _addShipToBoardAI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, array) {
    var takenCells, arrayOfCoords, numberOfCells, counter, isArrayInArray, number1, coordsFilter;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          coordsFilter = function _coordsFilter(number) {
            var toBeAdded = number;
            var random1 = (0,_coinFlip_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            var random2 = (0,_coinFlip_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            var random3 = (0,_coinFlip_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            var originalNum = arrayOfCoords.slice(0, 1);
            var toCompare = arrayOfCoords.slice(arrayOfCoords.length - 1, arrayOfCoords.length);
            if (toBeAdded[0] === undefined || toBeAdded[1] === undefined || toBeAdded[0] === NaN || toBeAdded[1] === NaN) {
              toCompare = arrayOfCoords.slice(0, 1);
              toBeAdded = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, takenCells);
            }
            if (arrayOfCoords.length === 1) {
              if (random1 === 0) {
                if (random3 === 0) {
                  toBeAdded = [toCompare[0][0] - 1, toCompare[0][1]];
                }
                if (random3 === 1) {
                  toBeAdded = [toCompare[0][0] + 1, toCompare[0][1]];
                }
              }
              if (random1 === 1) {
                if (random3 === 0) {
                  toBeAdded = [toCompare[0][0], toCompare[0][1] - 1];
                }
                if (random3 === 1) {
                  toBeAdded = [toCompare[0][0], toCompare[0][1] + 1];
                }
              }
            }
            if (arrayOfCoords.length > 1) {
              var secondOriginal = arrayOfCoords.slice(1, 2);
              if (secondOriginal[0][0] - originalNum[0][0] === 1 || secondOriginal[0][0] - originalNum[0][0] === -1) {
                if (toCompare[0][0] === 9 || toCompare[0][0] === 0) {
                  var toCompare1 = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, takenCells);
                  if (toCompare[0][0] === 0) {
                    toCompare = [0, toCompare1[0][1]];
                  } else {
                    toCompare = [9, toCompare1[1]];
                  }
                }
                if (random2 === 0) {
                  toBeAdded = [toCompare[0][0] - 1, toCompare[0][1]];
                }
                if (random2 === 1) {
                  toBeAdded = [toCompare[0][0] + 1, toCompare[0][1]];
                }
                if (isArrayInArray(takenCells, toBeAdded)) return;
                if (toBeAdded[0] - originalNum[0][0] > 5 || toBeAdded - originalNum[0][0] < -5) {
                  return;
                }
              }
              if (secondOriginal[0][1] - originalNum[0][1] === 1 || secondOriginal[0][1] - originalNum[0][1] === -1) {
                if (toCompare[0][1] === 9 || toCompare[0][1] === 0) {
                  var _toCompare = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, takenCells);
                  if (toCompare[0][1] === 0) {
                    toCompare = [_toCompare[0], 0];
                  } else {
                    toCompare = [_toCompare[0], 9];
                  }
                }
                if (random2 === 0) {
                  toBeAdded = [toCompare[0][0], toCompare[0][1] - 1];
                }
                if (random2 === 1) {
                  toBeAdded = [toCompare[0][0], toCompare[0][1] + 1];
                }
                if (isArrayInArray(takenCells, toBeAdded)) return;
                if (toBeAdded[0] - originalNum[0][0] > 5 || toBeAdded - originalNum[0][0] < -5) {
                  return;
                }
              }
            }
            if (toBeAdded[0] === undefined || toBeAdded[0] === NaN || toBeAdded[1] === undefined || toBeAdded[1] === NaN || toBeAdded[0] < 0 || toBeAdded[1] < 0 || toBeAdded[0] > 9 || toBeAdded[1] > 9) {
              toBeAdded = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, takenCells);
              arrayOfCoords = [];
              counter = 0;
              return;
            }
            if (toBeAdded[0] < -1 || toBeAdded[1] < -1 || toBeAdded[0] > 9 || toBeAdded[1] > 9) {
              return;
            }
            if (isArrayInArray(takenCells, toBeAdded)) return;
            if (isArrayInArray(array, toBeAdded)) {
              toBeAdded = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, takenCells);
              arrayOfCoords = [];
              counter = 0;
              return;
            }
            // arrayOfCoords.forEach((coord) => {
            //   let isIncorrect = false;
            //   if (coord[0] === undefined || coord[1] === undefined || coord[0] === NaN || coord[1] === NaN) {
            //     arrayOfCoords = [];
            //     counter = 0;
            //     isIncorrect = true;
            //   }
            //   if (isIncorrect) return;
            // });
            arrayOfCoords.push(toBeAdded);
            takenCells.push(toBeAdded);
            counter += 1;
          };
          isArrayInArray = function _isArrayInArray(arr, item) {
            var itemAsString = JSON.stringify(item);
            var contains = arr.some(function (ele) {
              return JSON.stringify(ele) === itemAsString;
            });
            return contains;
          };
          takenCells = [];
          arrayOfCoords = [];
          numberOfCells = 0;
          counter = 0;
          if (e.textContent.includes("2")) {
            numberOfCells = 2;
          } else if (e.textContent.includes("3")) {
            numberOfCells = 3;
          } else if (e.textContent.includes("4")) {
            numberOfCells = 4;
          } else if (e.textContent.includes("5")) {
            numberOfCells = 5;
          }
          number1 = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, takenCells);
          arrayOfCoords.forEach(function (coord) {
            if (isArrayInArray(array, coord)) {
              counter = 0;
              arrayOfCoords = [];
            }
          });
          while (counter !== numberOfCells) {
            number1 = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, takenCells);
            coordsFilter(number1);
          }
          return _context.abrupt("return", new Promise(function (resolve) {
            if (numberOfCells === counter) {
              resolve(arrayOfCoords);
            }
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _addShipToBoardAI.apply(this, arguments);
}

/***/ }),

/***/ "./src/attackLogic.js":
/*!****************************!*\
  !*** ./src/attackLogic.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attackLogic)
/* harmony export */ });
/* harmony import */ var _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberGenerator.js */ "./src/numberGenerator.js");

function attackLogic(board1, board2) {
  function isArrayInArray(arr, item) {
    var counter = 0;
    var itemAsString = JSON.stringify(item);
    var contains = arr.some(function (ele) {
      if (JSON.stringify(ele) === itemAsString) return true;
      if (!(JSON.stringify(ele) === itemAsString)) counter += 1;
    });
    if (counter >= arr.length) return false;
    return counter;
  }
  function isArrayInArrayOriginal(arr, item) {
    var itemAsString = JSON.stringify(item);
    var contains = arr.some(function (ele) {
      return JSON.stringify(ele) === itemAsString;
    });
    return contains;
  }
  var cpuAttacks = [];
  var board1Cells = document.querySelectorAll(".cell1");
  var board2Cells = document.querySelectorAll(".cell2");
  board2Cells.forEach(function (cell) {
    function boardCellClick() {
      var cell2Contents = "[".concat(cell.textContent, "]");
      if (board2.receiveAttack(JSON.parse(cell2Contents)) === true) {
        cell.classList = "";
        cell.classList.remove("empty");
        cell.classList.remove("cell2");
        cell.classList.add("cellTakenByPlayer");
      } else if (board2.receiveAttack(JSON.parse(cell2Contents)) === false) {
        cell.classList = "empty";
        cell.removeEventListener("click", boardCellClick);
      }
      var sunkenCounter2 = 0;
      board2.ships.forEach(function (ship) {
        if (ship.isSunkenProperty === true) sunkenCounter2 += 1;
        if (sunkenCounter2 === 5) alert("Human wins!");
      });
      var randomCPUattack = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, cpuAttacks);
      if (isArrayInArray(cpuAttacks, randomCPUattack)) {
        randomCPUattack = (0,_numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9, cpuAttacks);
      }
      function classChecker() {
        var toBeReturned;
        var cellTakenByPlayer2 = document.getElementsByClassName("cellTakenByPlayer2");
        var cellTakenByPlayer3 = document.getElementsByClassName("cellTakenByPlayer3");
        var cellTakenByPlayer3Cruiser = document.getElementsByClassName("cellTakenByPlayer3Cruiser");
        var cellTakenByPlayer4 = document.getElementsByClassName("cellTakenByPlayer4");
        var cellTakenByPlayer5 = document.getElementsByClassName("cellTakenByPlayer5");
        for (var i = 0; i < cellTakenByPlayer2.length; i++) {
          var test1 = JSON.parse("[".concat(cellTakenByPlayer2[i].textContent, "]"));
          if (test1[0] === randomCPUattack[0] && test1[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName("cellTakenByPlayer2 ".concat(i));
            break;
          }
        }
        for (var j = 0; j < cellTakenByPlayer3.length; j++) {
          var _test = JSON.parse("[".concat(cellTakenByPlayer3[j].textContent, "]"));
          if (_test[0] === randomCPUattack[0] && _test[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName("cellTakenByPlayer3 ".concat(j));
            break;
          }
        }
        for (var k = 0; k < cellTakenByPlayer3Cruiser.length; k++) {
          var _test2 = JSON.parse("[".concat(cellTakenByPlayer3Cruiser[k].textContent, "]"));
          if (_test2[0] === randomCPUattack[0] && _test2[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName("cellTakenByPlayer3Cruiser ".concat(k));
            break;
          }
        }
        for (var l = 0; l < cellTakenByPlayer4.length; l++) {
          var _test3 = JSON.parse("[".concat(cellTakenByPlayer4[l].textContent, "]"));
          if (_test3[0] === randomCPUattack[0] && _test3[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName("cellTakenByPlayer4 ".concat(l));
            break;
          }
        }
        for (var m = 0; m < cellTakenByPlayer5.length; m++) {
          var _test4 = JSON.parse("[".concat(cellTakenByPlayer5[m].textContent, "]"));
          if (_test4[0] === randomCPUattack[0] && _test4[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName("cellTakenByPlayer5 ".concat(m));
            break;
          }
        }
        if (toBeReturned === undefined) {
          var attackedCellIndex = isArrayInArray(board1.board, randomCPUattack);
          toBeReturned = document.getElementsByClassName("cell1 ".concat(attackedCellIndex));
        }
        return toBeReturned;
      }
      var cellToBeModified = classChecker();
      if (board1.receiveAttack(randomCPUattack) === true) {
        cellToBeModified[0].classList.value = "cellTakenByComputer";
      } else {
        cpuAttacks.push(randomCPUattack);
        cellToBeModified[0].classList.value = "empty";
        // cellToBeModified.removeEventListener('click', boardCellClick);
      }

      var sunkenCounter1 = 0;
      board1.ships.forEach(function (ship) {
        if (ship.isSunkenProperty === true) sunkenCounter1 += 1;
        if (sunkenCounter1 === 5) alert("Robot wins!");
      });
    }
    cell.addEventListener("click", boardCellClick);
  });
}

/***/ }),

/***/ "./src/coinFlip.js":
/*!*************************!*\
  !*** ./src/coinFlip.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ coinFlip)
/* harmony export */ });
function coinFlip() {
  var min = 0;
  var max = 2;
  return Math.floor(Math.random() * (max - min) + min);
}

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");

function gameBoard() {
  var ships = [];
  function board() {
    var boardToReturn = [];
    // const boardToReturn = new Array(10).fill(new Array(10).fill(0));
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        boardToReturn.push([i, j]);
      }
    }
    return boardToReturn;
  }
  function isArrayInArray(arr, item) {
    var itemAsString = JSON.stringify(item);
    var contains = arr.some(function (ele) {
      return JSON.stringify(ele) === itemAsString;
    });
    return contains;
  }
  return {
    belongsToPlayer: false,
    ships: ships,
    board: board(),
    allShipsSunken: false,
    missedAttacks: [],
    place: function place() {
      for (var _len = arguments.length, coordinates = new Array(_len), _key = 0; _key < _len; _key++) {
        coordinates[_key] = arguments[_key];
      }
      coordinates.forEach(function (element) {
        if (element[0] > 9 || element[0] < 0 || element[1] > 9 || element[1] < 0) {
          throw new Error('Coordinate out of bounds. Check all coordinates!');
        }
      });
      ships.push(_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, coordinates));
    },
    receiveAttack: function receiveAttack(coordinates) {
      var sunkenCounter = 0;
      var toBeReturned = false;
      var called = false;
      ships.forEach(function (ship) {
        if (isArrayInArray(ship.location[0], coordinates)) {
          ship.hit();
          called = true;
        }
        if (ship.isSunkenProperty === true) sunkenCounter += 1;
      });
      if (sunkenCounter === 5) alert('Game ended!');
      if (called === true) toBeReturned = true;
      return toBeReturned;
    }
  };
}

/***/ }),

/***/ "./src/generateBoard.js":
/*!******************************!*\
  !*** ./src/generateBoard.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateBoard)
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
/* harmony import */ var _placeShips_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShips.js */ "./src/placeShips.js");
/* harmony import */ var _placeShipsAI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeShipsAI.js */ "./src/placeShipsAI.js");



function generateBoard() {
  var cpuAttacks = [];
  var isReady = false;
  var title = document.querySelector(".title");
  var newGameButton = document.querySelector(".newGameButton");
  var board1Container = document.querySelector(".board1Container");
  var board2Container = document.querySelector(".board2Container");
  var webBoard1 = document.querySelector(".board1");
  var webBoard2 = document.querySelector(".board2");
  title.classList.add("deactivated");
  newGameButton.classList.add("deactivated");
  board1Container.classList = "board1container activated";
  board2Container.classList = "board1container activated";
  var board1 = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  board1.belongsToPlayer = true;
  var board2 = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var cellNumber = 0;
  board1.board.forEach(function (cell) {
    var boardCell = document.createElement("div");
    boardCell.textContent = "".concat(cell[0], ", ").concat(cell[1]);
    boardCell.classList = "cell1";
    boardCell.classList.add("".concat(cellNumber));
    cellNumber += 1;
    board1.ships.forEach(function (ship) {
      ship.location.forEach(function (location) {
        var stringifiedCoords = JSON.stringify(cell);
        var stringifiedLocation = JSON.stringify(location);
        if (stringifiedLocation === stringifiedCoords) {
          boardCell.classList = "cellTakenByPlayer";
        }
      });
    });
    webBoard1.appendChild(boardCell);
  });
  board2.board.forEach(function (cell) {
    var boardCell = document.createElement("div");
    function boardCellClick() {
      var cellContents = "[".concat(boardCell.textContent, "]");
      if (board2.receiveAttack(JSON.parse(cellContents)) === true) {
        boardCell.classList = "";
        boardCell.classList.remove("empty");
        boardCell.classList.remove("cell2");
        boardCell.classList.add("cellTakenByPlayer");
      } else if (board2.receiveAttack(JSON.parse(cellContents)) === false) {
        boardCell.classList = "empty";
        boardCell.removeEventListener("click", boardCellClick);
      }
      var sunkenCounter = 0;
      board2.ships.forEach(function (ship) {
        if (ship.isSunkenProperty === true) sunkenCounter += 1;
        if (sunkenCounter === 5) alert("Human wins!");
      });
      board1.ships.forEach(function (ship) {
        if (ship.isSunkenProperty === true) sunkenCounter += 1;
        if (sunkenCounter === 5) alert("Robot wins!");
      });
    }
    boardCell.textContent = "".concat(cell[0], ", ").concat(cell[1]);
    boardCell.classList = "cell2";
    webBoard2.appendChild(boardCell);
  });
  (0,_placeShips_js__WEBPACK_IMPORTED_MODULE_1__["default"])(board1, board2);
  (0,_placeShipsAI_js__WEBPACK_IMPORTED_MODULE_2__["default"])(board2);
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _generateBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateBoard.js */ "./src/generateBoard.js");
/* harmony import */ var _placeShips_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeShips.js */ "./src/placeShips.js");





var newGameButton = document.querySelector('.newGameButton');
newGameButton.addEventListener('click', function () {
  (0,_generateBoard_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/numberGenerator.js":
/*!********************************!*\
  !*** ./src/numberGenerator.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ numberGenerator)
/* harmony export */ });
function numberGenerator(min, max, array) {
  function isArrayInArray(arr, item) {
    var itemAsString = JSON.stringify(item);
    var contains = arr.some(function (ele) {
      return JSON.stringify(ele) === itemAsString;
    });
    return contains;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  var firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  // if (vertical !== undefined) {
  //   return [vertical, secondNumber];
  // } if (horizontal !== undefined) {
  //   return [firstNumber, horizontal];
  // }
  if (isArrayInArray(array, [firstNumber, secondNumber])) return numberGenerator(min, max, array);
  return [firstNumber, secondNumber];
}

/***/ }),

/***/ "./src/placeShips.js":
/*!***************************!*\
  !*** ./src/placeShips.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeShips)
/* harmony export */ });
/* harmony import */ var _addShipToBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addShipToBoard.js */ "./src/addShipToBoard.js");
/* harmony import */ var _attackLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attackLogic.js */ "./src/attackLogic.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function placeShips(board, oppBoard) {
  var board1Ships = document.querySelector(".board1Ships");
  var carrier1 = document.createElement("div");
  carrier1.textContent = "Carrier (5 cells)";
  var battleship1 = document.createElement("div");
  battleship1.textContent = "Battleship (4 cells)";
  var cruiser1 = document.createElement("div");
  cruiser1.textContent = "Cruiser (3 cells)";
  var submarine1 = document.createElement("div");
  submarine1.textContent = "Submarine (3 cells)";
  var destroyer1 = document.createElement("div");
  destroyer1.textContent = "Destroyer (2 cells)";
  var player1Ships = [carrier1, battleship1, cruiser1, submarine1, destroyer1];
  var carrier2 = document.createElement("div");
  carrier2.textContent = "Carrier (5 cells)";
  var battleship2 = document.createElement("div");
  battleship2.textContent = "Battleship (4 cells)";
  var cruiser2 = document.createElement("div");
  cruiser2.textContent = "Cruiser (3 cells)";
  var submarine2 = document.createElement("div");
  submarine2.textContent = "Submarine (3 cells)";
  var destroyer2 = document.createElement("div");
  destroyer2.textContent = "Destroyer (2 cells)";
  function getCoordsForShip(_x) {
    return _getCoordsForShip.apply(this, arguments);
  }
  function _getCoordsForShip() {
    _getCoordsForShip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_addShipToBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e);
          case 2:
            response = _context.sent;
            board.place(response);
            e.target.removeEventListener("click", getCoordsForShip);
            e.target.style.color = "green";
            if (board.ships.length === 5) (0,_attackLogic_js__WEBPACK_IMPORTED_MODULE_1__["default"])(board, oppBoard);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getCoordsForShip.apply(this, arguments);
  }
  player1Ships.forEach(function (element) {
    board1Ships.appendChild(element);
    element.addEventListener("click", getCoordsForShip);
  });
}

/***/ }),

/***/ "./src/placeShipsAI.js":
/*!*****************************!*\
  !*** ./src/placeShipsAI.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeShipsAI)
/* harmony export */ });
/* harmony import */ var _addShipToBoardAI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addShipToBoardAI.js */ "./src/addShipToBoardAI.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function placeShipsAI(board, oppBoard) {
  var board2Ships = document.querySelector(".board2Ships");
  var takenCells = [];
  var carrier2 = document.createElement("div");
  carrier2.textContent = "Carrier (5 cells)";
  var battleship2 = document.createElement("div");
  battleship2.textContent = "Battleship (4 cells)";
  var cruiser2 = document.createElement("div");
  cruiser2.textContent = "Cruiser (3 cells)";
  var submarine2 = document.createElement("div");
  submarine2.textContent = "Submarine (3 cells)";
  var destroyer2 = document.createElement("div");
  destroyer2.textContent = "Destroyer (2 cells)";
  var player2Ships = [carrier2, battleship2, cruiser2, submarine2, destroyer2];
  player2Ships.forEach(function (element) {
    board2Ships.appendChild(element);
  });
  function getCoordsForShip(_x) {
    return _getCoordsForShip.apply(this, arguments);
  }
  function _getCoordsForShip() {
    _getCoordsForShip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_addShipToBoardAI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, takenCells);
          case 2:
            response = _context.sent;
            response.forEach(function (cell) {
              takenCells.push(cell);
            });
            board.place(response);
            e.removeEventListener("click", getCoordsForShip);
            e.style.color = "green";
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getCoordsForShip.apply(this, arguments);
  }
  getCoordsForShip(carrier2);
  getCoordsForShip(battleship2);
  getCoordsForShip(cruiser2);
  getCoordsForShip(submarine2);
  getCoordsForShip(destroyer2);
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship() {
  for (var _len = arguments.length, coordinates = new Array(_len), _key = 0; _key < _len; _key++) {
    coordinates[_key] = arguments[_key];
  }
  var location = coordinates;
  var length = 0;
  location[0].forEach(function () {
    length += 1;
  });
  return {
    hits: 0,
    length: length,
    isSunkenProperty: false,
    hit: function hit(hits) {
      this.hits += 1;
      if (this.hits === this.length) {
        this.isSunkenProperty = true;
      }
    },
    location: location
  };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMyQixNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixJQUNFLENBQUNILFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFDcENELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUN4Q0QsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUNyQztrQkFDQTtnQkFDRjtnQkFDQSxJQUNFRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQ25DRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFDcENELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFDbkNELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNwQztrQkFDQTtnQkFDRjtnQkFDQSxJQUNFRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQ3JDRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQ3JDRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQ3JDO2tCQUNBO2dCQUNGO2NB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QUM7SUFDRHFDLFFBQVEsRUFBUkE7RUFDRixDQUFDO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkU2hpcFRvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZFNoaXBUb0JvYXJkQUkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2F0dGFja0xvZ2ljLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb2luRmxpcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nZW5lcmF0ZUJvYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9udW1iZXJHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BsYWNlU2hpcHNBSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9HcnVwcG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltYWdlcy9XSUtJUEVESUExNV9CQVRUTEVTSElQLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3J1cHBvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5QW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjb2xvdXJBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgY29sb3I6ICNmZjEyNGY7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdmlzaWJpbGl0eUFuaW1hdGlvbkhpZGRlbiB7XFxuICAxMDAlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcnVwcG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwMjA4MDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA2ZW07XFxuICBjb2xvcjogI2ZmMDBhMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5QW5pbWF0aW9uIDFzIGVhc2UtaW47XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiA3NSU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIG1hcmdpbi10b3A6IDMuNWVtO1xcbn1cXG5cXG4uYm9hcmQxLFxcbi5ib2FyZDIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lci5hY3RpdmF0ZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVlbTtcXG59XFxuXFxuLnBsYXllcjFOYW1lLFxcbi5wbGF5ZXIyTmFtZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmJvYXJkMVNoaXBzLFxcbi5ib2FyZDJTaGlwcyB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJvYXJkMVNoaXBzID4gKjpob3ZlcixcXG4uYm9hcmQyU2hpcHMgPiAqOmhvdmVyIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VsbDEsXFxuLmNlbGwyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNlbGxUYWtlbkJ5UGxheWVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsVGFrZW5CeUNvbXB1dGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjg0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNlbGxUYWtlbkJ5UGxheWVyMyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXI0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNlbGwxOmhvdmVyLFxcbi5jZWxsMjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNzVmZTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzE2M2E7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eUFuaW1hdGlvbiAxcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZjEyNGY7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uZGVhY3RpdmF0ZWQge1xcbiAgYW5pbWF0aW9uOiB2aXNpYmlsaXR5QW5pbWF0aW9uSGlkZGVuIDJzIGVhc2Utb3V0O1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZGlzcGxheSAxLjVzIGxpbmVhcjtcXG59XFxuXFxuLmFjdGl2YXRlZCB7XFxuICBhbmltYXRpb246IG9wYWNpdHlBbmltYXRpb24gM3MgZWFzZS1pbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix5REFBK0Q7RUFDL0QsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELFVBQVU7RUFDVixhQUFhO0VBQ2IsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcnVwcG9cXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250cy9HcnVwcG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHlBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNvbG91ckFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogI2ZmMTI0ZjtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB2aXNpYmlsaXR5QW5pbWF0aW9uSGlkZGVuIHtcXG4gIDEwMCUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkdydXBwb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjAyMDgwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDZlbTtcXG4gIGNvbG9yOiAjZmYwMGEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBhbmltYXRpb246IG9wYWNpdHlBbmltYXRpb24gMXMgZWFzZS1pbjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltYWdlcy9XSUtJUEVESUExNV9CQVRUTEVTSElQLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNzUlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBtYXJnaW4tdG9wOiAzLjVlbTtcXG59XFxuXFxuLmJvYXJkMSxcXG4uYm9hcmQyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZDFjb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ib2FyZDFjb250YWluZXIuYWN0aXZhdGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41ZW07XFxufVxcblxcbi5wbGF5ZXIxTmFtZSxcXG4ucGxheWVyMk5hbWUge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5ib2FyZDFTaGlwcyxcXG4uYm9hcmQyU2hpcHMge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ib2FyZDFTaGlwcyA+ICo6aG92ZXIsXFxuLmJvYXJkMlNoaXBzID4gKjpob3ZlciB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNlbGwxLFxcbi5jZWxsMiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jZWxsVGFrZW5CeVBsYXllciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2VsbFRha2VuQnlDb21wdXRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGY4NGY7XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2VsbFRha2VuQnlQbGF5ZXIzQ3J1aXNlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXIyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNlbGxUYWtlbkJ5UGxheWVyNCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXI1IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsMTpob3ZlcixcXG4uY2VsbDI6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTc1ZmU7XFxufVxcblxcbi5lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMxNjNhO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBhbmltYXRpb246IG9wYWNpdHlBbmltYXRpb24gMXMgZWFzZS1pbjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmYxMjRmO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmRlYWN0aXZhdGVkIHtcXG4gIGFuaW1hdGlvbjogdmlzaWJpbGl0eUFuaW1hdGlvbkhpZGRlbiAycyBlYXNlLW91dDtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGRpc3BsYXkgMS41cyBsaW5lYXI7XFxufVxcblxcbi5hY3RpdmF0ZWQge1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5QW5pbWF0aW9uIDNzIGVhc2UtaW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRTaGlwVG9Cb2FyZChlKSB7XG4gIGNvbnN0IGFycmF5T2ZDb29yZHMgPSBbXTtcbiAgbGV0IG51bWJlck9mQ2VsbHMgPSAwO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGxldCBjbGFzc0NvdW50ZXIgPSAwO1xuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwieWVsbG93XCI7XG4gIGNvbnN0IGNoZWNrTWFya0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNoZWNrTWFya0Rpdi50ZXh0Q29udGVudCA9IFwi4pyU77iPXCI7XG4gIGNvbnN0IGNyb3NzTWFya0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNyb3NzTWFya0Rpdi50ZXh0Q29udGVudCA9IFwi4p2MXCI7XG4gIGUudGFyZ2V0LmFwcGVuZENoaWxkKGNoZWNrTWFya0Rpdik7XG4gIGUudGFyZ2V0LmFwcGVuZENoaWxkKGNyb3NzTWFya0Rpdik7XG4gIGZ1bmN0aW9uIGlzQXJyYXlJbkFycmF5KGFyciwgaXRlbSkge1xuICAgIGNvbnN0IGl0ZW1Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgIGNvbnN0IGNvbnRhaW5zID0gYXJyLnNvbWUoKGVsZSkgPT4gSlNPTi5zdHJpbmdpZnkoZWxlKSA9PT0gaXRlbUFzU3RyaW5nKTtcbiAgICByZXR1cm4gY29udGFpbnM7XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQuaW5jbHVkZXMoXCIyXCIpKSB7XG4gICAgICBudW1iZXJPZkNlbGxzID0gMjtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LmluY2x1ZGVzKFwiM1wiKSkge1xuICAgICAgbnVtYmVyT2ZDZWxscyA9IDM7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIjRcIikpIHtcbiAgICAgIG51bWJlck9mQ2VsbHMgPSA0O1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQuaW5jbHVkZXMoXCI1XCIpKSB7XG4gICAgICBudW1iZXJPZkNlbGxzID0gNTtcbiAgICB9XG4gICAgbGV0IGNsYXNzVG9CZUFkZGVkID0gYGNlbGxUYWtlbkJ5UGxheWVyJHtudW1iZXJPZkNlbGxzfWA7XG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LmluY2x1ZGVzKFwiQ3J1aXNlclwiKSkge1xuICAgICAgY2xhc3NUb0JlQWRkZWQgPSBgY2VsbFRha2VuQnlQbGF5ZXIke251bWJlck9mQ2VsbHN9Q3J1aXNlcmA7XG4gICAgfVxuICAgIGNvbnN0IGFsbFAxQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGwxXCIpO1xuICAgIGZ1bmN0aW9uIGNvb3JkaW5hdGVzKGYpIHtcbiAgICAgIGNvbnN0IHRvQ29tcGFyZTEgPSBhcnJheU9mQ29vcmRzLnNsaWNlKDEsIDIpO1xuICAgICAgY29uc3QgdG9Db21wYXJlMCA9IGFycmF5T2ZDb29yZHMuc2xpY2UoMCwgMSk7XG4gICAgICBjb25zdCB0b0JlQWRkZWQgPSBKU09OLnBhcnNlKGBbJHtmLnRhcmdldC50ZXh0Q29udGVudH1dYCk7XG4gICAgICBpZiAoaXNBcnJheUluQXJyYXkoYXJyYXlPZkNvb3JkcywgdG9CZUFkZGVkKSkgcmV0dXJuO1xuICAgICAgaWYgKGFycmF5T2ZDb29yZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAodG9Db21wYXJlMFswXVswXSAtIHRvQmVBZGRlZFswXSA9PT0gMSB8fFxuICAgICAgICAgICAgdG9Db21wYXJlMFswXVswXSAtIHRvQmVBZGRlZFswXSA9PT0gLTEpICYmXG4gICAgICAgICAgdG9Db21wYXJlMFswXVsxXSAtIHRvQmVBZGRlZFsxXSAhPT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPiAxIHx8XG4gICAgICAgICAgdG9Db21wYXJlMFswXVswXSAtIHRvQmVBZGRlZFswXSA8IC0xIHx8XG4gICAgICAgICAgdG9Db21wYXJlMFswXVsxXSAtIHRvQmVBZGRlZFsxXSA+IDEgfHxcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzFdIC0gdG9CZUFkZGVkWzFdIDwgLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzBdIC0gdG9CZUFkZGVkWzBdICE9PSAwICYmXG4gICAgICAgICAgdG9Db21wYXJlMFswXVsxXSAtIHRvQmVBZGRlZFsxXSA9PT0gMSAmJlxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPT09IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFycmF5T2ZDb29yZHMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCB0b0NvbXBhcmUyID0gYXJyYXlPZkNvb3Jkcy5zbGljZShcbiAgICAgICAgICBhcnJheU9mQ29vcmRzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgYXJyYXlPZkNvb3Jkcy5sZW5ndGggLSAwXG4gICAgICAgICk7XG4gICAgICAgIC8vIHZlcnRpY2FsIGNoZWNrXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzBdIC0gdG9Db21wYXJlMVswXVswXSA9PT0gMSB8fFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMF0gLSB0b0NvbXBhcmUxWzBdWzBdID09PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzFdIC0gdG9CZUFkZGVkWzFdID49IDEgfHxcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPD0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVswXSAtIHRvQmVBZGRlZFswXSA+IDEgfHxcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPCAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRvQ29tcGFyZTBbMF1bMF0gLSB0b0NvbXBhcmUxWzBdWzBdID09PSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0b0JlQWRkZWRbMF0gLSB0b0NvbXBhcmUwWzBdWzBdICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9Db21wYXJlMFswXVswXSAtIHRvQ29tcGFyZTFbMF1bMF0gPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmICh0b0NvbXBhcmUwWzBdWzBdIC0gdG9CZUFkZGVkWzBdICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGhvcml6b250YWwgY2hlY2tcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMV0gLSB0b0NvbXBhcmUxWzBdWzFdID09PSAxIHx8XG4gICAgICAgICAgdG9Db21wYXJlMFswXVsxXSAtIHRvQ29tcGFyZTFbMF1bMV0gPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPj0gMSB8fFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVswXSAtIHRvQmVBZGRlZFswXSA8PSAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzFdIC0gdG9CZUFkZGVkWzFdID4gMSB8fFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVsxXSAtIHRvQmVBZGRlZFsxXSA8IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmLnRhcmdldC5jbGFzc0xpc3QgPSBjbGFzc1RvQmVBZGRlZDtcbiAgICAgIGYudGFyZ2V0LmNsYXNzTGlzdCArPSBgICR7Y2xhc3NDb3VudGVyfWA7XG4gICAgICBjbGFzc0NvdW50ZXIgKz0gMTtcbiAgICAgIGFycmF5T2ZDb29yZHMucHVzaCh0b0JlQWRkZWQpO1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgaWYgKG51bWJlck9mQ2VsbHMgPT09IGNvdW50ZXIpIHtcbiAgICAgICAgYWxsUDFDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29vcmRpbmF0ZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQoXCJQcmVzcyB0aGUgZ3JlZW4gY2hlY2sgbWFyayBpbiBvcmRlciB0byBjb25maXJtIHlvdXIgY2hvaWNlLlwiKTtcbiAgICAgICAgY2hlY2tNYXJrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgZS50YXJnZXQucmVtb3ZlQ2hpbGQoY2hlY2tNYXJrRGl2KTtcbiAgICAgICAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChjcm9zc01hcmtEaXYpO1xuICAgICAgICAgIHJlc29sdmUoYXJyYXlPZkNvb3Jkcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjcm9zc01hcmtEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgIGNvbnN0IGNlbGxzVGFrZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc1RvQmVBZGRlZH1gKTtcbiAgICAgIGNlbGxzVGFrZW4uZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NUb0JlQWRkZWR9YCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwxXCIpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBhbGxCb2FyZDFDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjZWxsMVwiKTtcbiAgICAgIGFsbEJvYXJkMUNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29vcmRpbmF0ZXMpO1xuICAgICAgfSk7XG4gICAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChjaGVja01hcmtEaXYpO1xuICAgICAgZS50YXJnZXQucmVtb3ZlQ2hpbGQoY3Jvc3NNYXJrRGl2KTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICAgIGFsbFAxQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9KTtcbiAgLy8gICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAvLyAgICAgaWYgKGFycmF5T2ZDb29yZHMubGVuZ3RoID09PSBudW1iZXJPZkNlbGxzKSB7XG4gIC8vICAgICAgIHJlc29sdmUoKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gICBwcm9taXNlLnRoZW4oKHZhbHVlKSA9PiBhcnJheVRvQmVSZXR1cm5lZCA9IHZhbHVlKTtcbiAgLy8gICBwcm9taXNlLnRoZW5cbn1cbiIsImltcG9ydCBudW1iZXJHZW5lcmF0b3IgZnJvbSBcIi4vbnVtYmVyR2VuZXJhdG9yLmpzXCI7XG5pbXBvcnQgY29pbkZsaXAgZnJvbSBcIi4vY29pbkZsaXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkU2hpcFRvQm9hcmRBSShlLCBhcnJheSkge1xuICBjb25zdCB0YWtlbkNlbGxzID0gW107XG4gIGxldCBhcnJheU9mQ29vcmRzID0gW107XG4gIGxldCBudW1iZXJPZkNlbGxzID0gMDtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBpZiAoZS50ZXh0Q29udGVudC5pbmNsdWRlcyhcIjJcIikpIHtcbiAgICBudW1iZXJPZkNlbGxzID0gMjtcbiAgfSBlbHNlIGlmIChlLnRleHRDb250ZW50LmluY2x1ZGVzKFwiM1wiKSkge1xuICAgIG51bWJlck9mQ2VsbHMgPSAzO1xuICB9IGVsc2UgaWYgKGUudGV4dENvbnRlbnQuaW5jbHVkZXMoXCI0XCIpKSB7XG4gICAgbnVtYmVyT2ZDZWxscyA9IDQ7XG4gIH0gZWxzZSBpZiAoZS50ZXh0Q29udGVudC5pbmNsdWRlcyhcIjVcIikpIHtcbiAgICBudW1iZXJPZkNlbGxzID0gNTtcbiAgfVxuICBmdW5jdGlvbiBpc0FycmF5SW5BcnJheShhcnIsIGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICBjb25zdCBjb250YWlucyA9IGFyci5zb21lKChlbGUpID0+IEpTT04uc3RyaW5naWZ5KGVsZSkgPT09IGl0ZW1Bc1N0cmluZyk7XG4gICAgcmV0dXJuIGNvbnRhaW5zO1xuICB9XG4gIGxldCBudW1iZXIxID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIHRha2VuQ2VsbHMpO1xuICBmdW5jdGlvbiBjb29yZHNGaWx0ZXIobnVtYmVyKSB7XG4gICAgbGV0IHRvQmVBZGRlZCA9IG51bWJlcjtcbiAgICBjb25zdCByYW5kb20xID0gY29pbkZsaXAoKTtcbiAgICBjb25zdCByYW5kb20yID0gY29pbkZsaXAoKTtcbiAgICBjb25zdCByYW5kb20zID0gY29pbkZsaXAoKTtcbiAgICBjb25zdCBvcmlnaW5hbE51bSA9IGFycmF5T2ZDb29yZHMuc2xpY2UoMCwgMSk7XG4gICAgbGV0IHRvQ29tcGFyZSA9IGFycmF5T2ZDb29yZHMuc2xpY2UoXG4gICAgICBhcnJheU9mQ29vcmRzLmxlbmd0aCAtIDEsXG4gICAgICBhcnJheU9mQ29vcmRzLmxlbmd0aFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgdG9CZUFkZGVkWzBdID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRvQmVBZGRlZFsxXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0b0JlQWRkZWRbMF0gPT09IE5hTiB8fFxuICAgICAgdG9CZUFkZGVkWzFdID09PSBOYU5cbiAgICApIHtcbiAgICAgIHRvQ29tcGFyZSA9IGFycmF5T2ZDb29yZHMuc2xpY2UoMCwgMSk7XG4gICAgICB0b0JlQWRkZWQgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gICAgfVxuICAgIGlmIChhcnJheU9mQ29vcmRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKHJhbmRvbTEgPT09IDApIHtcbiAgICAgICAgaWYgKHJhbmRvbTMgPT09IDApIHtcbiAgICAgICAgICB0b0JlQWRkZWQgPSBbdG9Db21wYXJlWzBdWzBdIC0gMSwgdG9Db21wYXJlWzBdWzFdXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZG9tMyA9PT0gMSkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFt0b0NvbXBhcmVbMF1bMF0gKyAxLCB0b0NvbXBhcmVbMF1bMV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmFuZG9tMSA9PT0gMSkge1xuICAgICAgICBpZiAocmFuZG9tMyA9PT0gMCkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFt0b0NvbXBhcmVbMF1bMF0sIHRvQ29tcGFyZVswXVsxXSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb20zID09PSAxKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gW3RvQ29tcGFyZVswXVswXSwgdG9Db21wYXJlWzBdWzFdICsgMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFycmF5T2ZDb29yZHMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc2Vjb25kT3JpZ2luYWwgPSBhcnJheU9mQ29vcmRzLnNsaWNlKDEsIDIpO1xuICAgICAgaWYgKFxuICAgICAgICBzZWNvbmRPcmlnaW5hbFswXVswXSAtIG9yaWdpbmFsTnVtWzBdWzBdID09PSAxIHx8XG4gICAgICAgIHNlY29uZE9yaWdpbmFsWzBdWzBdIC0gb3JpZ2luYWxOdW1bMF1bMF0gPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRvQ29tcGFyZVswXVswXSA9PT0gOSB8fCB0b0NvbXBhcmVbMF1bMF0gPT09IDApIHtcbiAgICAgICAgICBjb25zdCB0b0NvbXBhcmUxID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIHRha2VuQ2VsbHMpO1xuICAgICAgICAgIGlmICh0b0NvbXBhcmVbMF1bMF0gPT09IDApIHtcbiAgICAgICAgICAgIHRvQ29tcGFyZSA9IFswLCB0b0NvbXBhcmUxWzBdWzFdXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9Db21wYXJlID0gWzksIHRvQ29tcGFyZTFbMV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZG9tMiA9PT0gMCkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFt0b0NvbXBhcmVbMF1bMF0gLSAxLCB0b0NvbXBhcmVbMF1bMV1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb20yID09PSAxKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gW3RvQ29tcGFyZVswXVswXSArIDEsIHRvQ29tcGFyZVswXVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlJbkFycmF5KHRha2VuQ2VsbHMsIHRvQmVBZGRlZCkpIHJldHVybjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRvQmVBZGRlZFswXSAtIG9yaWdpbmFsTnVtWzBdWzBdID4gNSB8fFxuICAgICAgICAgIHRvQmVBZGRlZCAtIG9yaWdpbmFsTnVtWzBdWzBdIDwgLTVcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHNlY29uZE9yaWdpbmFsWzBdWzFdIC0gb3JpZ2luYWxOdW1bMF1bMV0gPT09IDEgfHxcbiAgICAgICAgc2Vjb25kT3JpZ2luYWxbMF1bMV0gLSBvcmlnaW5hbE51bVswXVsxXSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICBpZiAodG9Db21wYXJlWzBdWzFdID09PSA5IHx8IHRvQ29tcGFyZVswXVsxXSA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZTEgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gICAgICAgICAgaWYgKHRvQ29tcGFyZVswXVsxXSA9PT0gMCkge1xuICAgICAgICAgICAgdG9Db21wYXJlID0gW3RvQ29tcGFyZTFbMF0sIDBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0NvbXBhcmUgPSBbdG9Db21wYXJlMVswXSwgOV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb20yID09PSAwKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gW3RvQ29tcGFyZVswXVswXSwgdG9Db21wYXJlWzBdWzFdIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmRvbTIgPT09IDEpIHtcbiAgICAgICAgICB0b0JlQWRkZWQgPSBbdG9Db21wYXJlWzBdWzBdLCB0b0NvbXBhcmVbMF1bMV0gKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheUluQXJyYXkodGFrZW5DZWxscywgdG9CZUFkZGVkKSkgcmV0dXJuO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9CZUFkZGVkWzBdIC0gb3JpZ2luYWxOdW1bMF1bMF0gPiA1IHx8XG4gICAgICAgICAgdG9CZUFkZGVkIC0gb3JpZ2luYWxOdW1bMF1bMF0gPCAtNVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgdG9CZUFkZGVkWzBdID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRvQmVBZGRlZFswXSA9PT0gTmFOIHx8XG4gICAgICB0b0JlQWRkZWRbMV0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdG9CZUFkZGVkWzFdID09PSBOYU4gfHxcbiAgICAgIHRvQmVBZGRlZFswXSA8IDAgfHxcbiAgICAgIHRvQmVBZGRlZFsxXSA8IDAgfHxcbiAgICAgIHRvQmVBZGRlZFswXSA+IDkgfHxcbiAgICAgIHRvQmVBZGRlZFsxXSA+IDlcbiAgICApIHtcbiAgICAgIHRvQmVBZGRlZCA9IG51bWJlckdlbmVyYXRvcigwLCA5LCB0YWtlbkNlbGxzKTtcbiAgICAgIGFycmF5T2ZDb29yZHMgPSBbXTtcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0b0JlQWRkZWRbMF0gPCAtMSB8fFxuICAgICAgdG9CZUFkZGVkWzFdIDwgLTEgfHxcbiAgICAgIHRvQmVBZGRlZFswXSA+IDkgfHxcbiAgICAgIHRvQmVBZGRlZFsxXSA+IDlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlJbkFycmF5KHRha2VuQ2VsbHMsIHRvQmVBZGRlZCkpIHJldHVybjtcbiAgICBpZiAoaXNBcnJheUluQXJyYXkoYXJyYXksIHRvQmVBZGRlZCkpIHtcbiAgICAgIHRvQmVBZGRlZCA9IG51bWJlckdlbmVyYXRvcigwLCA5LCB0YWtlbkNlbGxzKTtcbiAgICAgIGFycmF5T2ZDb29yZHMgPSBbXTtcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhcnJheU9mQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgLy8gICBsZXQgaXNJbmNvcnJlY3QgPSBmYWxzZTtcbiAgICAvLyAgIGlmIChjb29yZFswXSA9PT0gdW5kZWZpbmVkIHx8IGNvb3JkWzFdID09PSB1bmRlZmluZWQgfHwgY29vcmRbMF0gPT09IE5hTiB8fCBjb29yZFsxXSA9PT0gTmFOKSB7XG4gICAgLy8gICAgIGFycmF5T2ZDb29yZHMgPSBbXTtcbiAgICAvLyAgICAgY291bnRlciA9IDA7XG4gICAgLy8gICAgIGlzSW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmIChpc0luY29ycmVjdCkgcmV0dXJuO1xuICAgIC8vIH0pO1xuICAgIGFycmF5T2ZDb29yZHMucHVzaCh0b0JlQWRkZWQpO1xuICAgIHRha2VuQ2VsbHMucHVzaCh0b0JlQWRkZWQpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfVxuICBhcnJheU9mQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgaWYgKGlzQXJyYXlJbkFycmF5KGFycmF5LCBjb29yZCkpIHtcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgYXJyYXlPZkNvb3JkcyA9IFtdO1xuICAgIH1cbiAgfSk7XG4gIHdoaWxlIChjb3VudGVyICE9PSBudW1iZXJPZkNlbGxzKSB7XG4gICAgbnVtYmVyMSA9IG51bWJlckdlbmVyYXRvcigwLCA5LCB0YWtlbkNlbGxzKTtcbiAgICBjb29yZHNGaWx0ZXIobnVtYmVyMSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKG51bWJlck9mQ2VsbHMgPT09IGNvdW50ZXIpIHtcbiAgICAgIHJlc29sdmUoYXJyYXlPZkNvb3Jkcyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBudW1iZXJHZW5lcmF0b3IgZnJvbSBcIi4vbnVtYmVyR2VuZXJhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja0xvZ2ljKGJvYXJkMSwgYm9hcmQyKSB7XG4gIGZ1bmN0aW9uIGlzQXJyYXlJbkFycmF5KGFyciwgaXRlbSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBjb25zdCBpdGVtQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICBjb25zdCBjb250YWlucyA9IGFyci5zb21lKChlbGUpID0+IHtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKCEoSlNPTi5zdHJpbmdpZnkoZWxlKSA9PT0gaXRlbUFzU3RyaW5nKSkgY291bnRlciArPSAxO1xuICAgIH0pO1xuICAgIGlmIChjb3VudGVyID49IGFyci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfVxuICBmdW5jdGlvbiBpc0FycmF5SW5BcnJheU9yaWdpbmFsKGFyciwgaXRlbSkge1xuICAgIGNvbnN0IGl0ZW1Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgIGNvbnN0IGNvbnRhaW5zID0gYXJyLnNvbWUoKGVsZSkgPT4gSlNPTi5zdHJpbmdpZnkoZWxlKSA9PT0gaXRlbUFzU3RyaW5nKTtcbiAgICByZXR1cm4gY29udGFpbnM7XG4gIH1cbiAgY29uc3QgY3B1QXR0YWNrcyA9IFtdO1xuICBjb25zdCBib2FyZDFDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbDFcIik7XG4gIGNvbnN0IGJvYXJkMkNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsMlwiKTtcbiAgYm9hcmQyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGZ1bmN0aW9uIGJvYXJkQ2VsbENsaWNrKCkge1xuICAgICAgY29uc3QgY2VsbDJDb250ZW50cyA9IGBbJHtjZWxsLnRleHRDb250ZW50fV1gO1xuICAgICAgaWYgKGJvYXJkMi5yZWNlaXZlQXR0YWNrKEpTT04ucGFyc2UoY2VsbDJDb250ZW50cykpID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZW1wdHlcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNlbGwyXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsVGFrZW5CeVBsYXllclwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmQyLnJlY2VpdmVBdHRhY2soSlNPTi5wYXJzZShjZWxsMkNvbnRlbnRzKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gXCJlbXB0eVwiO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib2FyZENlbGxDbGljayk7XG4gICAgICB9XG4gICAgICBsZXQgc3Vua2VuQ291bnRlcjIgPSAwO1xuICAgICAgYm9hcmQyLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rZW5Qcm9wZXJ0eSA9PT0gdHJ1ZSkgc3Vua2VuQ291bnRlcjIgKz0gMTtcbiAgICAgICAgaWYgKHN1bmtlbkNvdW50ZXIyID09PSA1KSBhbGVydChcIkh1bWFuIHdpbnMhXCIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgcmFuZG9tQ1BVYXR0YWNrID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIGNwdUF0dGFja3MpO1xuICAgICAgaWYgKGlzQXJyYXlJbkFycmF5KGNwdUF0dGFja3MsIHJhbmRvbUNQVWF0dGFjaykpIHtcbiAgICAgICAgcmFuZG9tQ1BVYXR0YWNrID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIGNwdUF0dGFja3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGFzc0NoZWNrZXIoKSB7XG4gICAgICAgIGxldCB0b0JlUmV0dXJuZWQ7XG4gICAgICAgIGNvbnN0IGNlbGxUYWtlbkJ5UGxheWVyMiA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNlbGxUYWtlbkJ5UGxheWVyMlwiKTtcbiAgICAgICAgY29uc3QgY2VsbFRha2VuQnlQbGF5ZXIzID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VsbFRha2VuQnlQbGF5ZXIzXCIpO1xuICAgICAgICBjb25zdCBjZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICBcImNlbGxUYWtlbkJ5UGxheWVyM0NydWlzZXJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjZWxsVGFrZW5CeVBsYXllcjQgPVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjZWxsVGFrZW5CeVBsYXllcjRcIik7XG4gICAgICAgIGNvbnN0IGNlbGxUYWtlbkJ5UGxheWVyNSA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNlbGxUYWtlbkJ5UGxheWVyNVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsVGFrZW5CeVBsYXllcjIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB0ZXN0MSA9IEpTT04ucGFyc2UoYFske2NlbGxUYWtlbkJ5UGxheWVyMltpXS50ZXh0Q29udGVudH1dYCk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGVzdDFbMF0gPT09IHJhbmRvbUNQVWF0dGFja1swXSAmJlxuICAgICAgICAgICAgdGVzdDFbMV0gPT09IHJhbmRvbUNQVWF0dGFja1sxXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdG9CZVJldHVybmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgYGNlbGxUYWtlbkJ5UGxheWVyMiAke2l9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNlbGxUYWtlbkJ5UGxheWVyMy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHRlc3QxID0gSlNPTi5wYXJzZShgWyR7Y2VsbFRha2VuQnlQbGF5ZXIzW2pdLnRleHRDb250ZW50fV1gKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0ZXN0MVswXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzBdICYmXG4gICAgICAgICAgICB0ZXN0MVsxXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0b0JlUmV0dXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICBgY2VsbFRha2VuQnlQbGF5ZXIzICR7an1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2VsbFRha2VuQnlQbGF5ZXIzQ3J1aXNlci5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGNvbnN0IHRlc3QxID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIGBbJHtjZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyW2tdLnRleHRDb250ZW50fV1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0ZXN0MVswXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzBdICYmXG4gICAgICAgICAgICB0ZXN0MVsxXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0b0JlUmV0dXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICBgY2VsbFRha2VuQnlQbGF5ZXIzQ3J1aXNlciAke2t9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGNlbGxUYWtlbkJ5UGxheWVyNC5sZW5ndGg7IGwrKykge1xuICAgICAgICAgIGNvbnN0IHRlc3QxID0gSlNPTi5wYXJzZShgWyR7Y2VsbFRha2VuQnlQbGF5ZXI0W2xdLnRleHRDb250ZW50fV1gKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0ZXN0MVswXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzBdICYmXG4gICAgICAgICAgICB0ZXN0MVsxXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0b0JlUmV0dXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICBgY2VsbFRha2VuQnlQbGF5ZXI0ICR7bH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgY2VsbFRha2VuQnlQbGF5ZXI1Lmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgY29uc3QgdGVzdDEgPSBKU09OLnBhcnNlKGBbJHtjZWxsVGFrZW5CeVBsYXllcjVbbV0udGV4dENvbnRlbnR9XWApO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRlc3QxWzBdID09PSByYW5kb21DUFVhdHRhY2tbMF0gJiZcbiAgICAgICAgICAgIHRlc3QxWzFdID09PSByYW5kb21DUFVhdHRhY2tbMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRvQmVSZXR1cm5lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgIGBjZWxsVGFrZW5CeVBsYXllcjUgJHttfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvQmVSZXR1cm5lZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgYXR0YWNrZWRDZWxsSW5kZXggPSBpc0FycmF5SW5BcnJheShcbiAgICAgICAgICAgIGJvYXJkMS5ib2FyZCxcbiAgICAgICAgICAgIHJhbmRvbUNQVWF0dGFja1xuICAgICAgICAgICk7XG4gICAgICAgICAgdG9CZVJldHVybmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgIGBjZWxsMSAke2F0dGFja2VkQ2VsbEluZGV4fWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b0JlUmV0dXJuZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBjZWxsVG9CZU1vZGlmaWVkID0gY2xhc3NDaGVja2VyKCk7XG5cbiAgICAgIGlmIChib2FyZDEucmVjZWl2ZUF0dGFjayhyYW5kb21DUFVhdHRhY2spID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGxUb0JlTW9kaWZpZWRbMF0uY2xhc3NMaXN0LnZhbHVlID0gXCJjZWxsVGFrZW5CeUNvbXB1dGVyXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjcHVBdHRhY2tzLnB1c2gocmFuZG9tQ1BVYXR0YWNrKTtcbiAgICAgICAgY2VsbFRvQmVNb2RpZmllZFswXS5jbGFzc0xpc3QudmFsdWUgPSBcImVtcHR5XCI7XG4gICAgICAgIC8vIGNlbGxUb0JlTW9kaWZpZWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib2FyZENlbGxDbGljayk7XG4gICAgICB9XG4gICAgICBsZXQgc3Vua2VuQ291bnRlcjEgPSAwO1xuICAgICAgYm9hcmQxLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rZW5Qcm9wZXJ0eSA9PT0gdHJ1ZSkgc3Vua2VuQ291bnRlcjEgKz0gMTtcbiAgICAgICAgaWYgKHN1bmtlbkNvdW50ZXIxID09PSA1KSBhbGVydChcIlJvYm90IHdpbnMhXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvYXJkQ2VsbENsaWNrKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2luRmxpcCgpIHtcbiAgY29uc3QgbWluID0gMDtcbiAgY29uc3QgbWF4ID0gMjtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgZnVuY3Rpb24gYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRUb1JldHVybiA9IFtdO1xuICAgIC8vIGNvbnN0IGJvYXJkVG9SZXR1cm4gPSBuZXcgQXJyYXkoMTApLmZpbGwobmV3IEFycmF5KDEwKS5maWxsKDApKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBib2FyZFRvUmV0dXJuLnB1c2goW2ksIGpdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkVG9SZXR1cm47XG4gIH1cbiAgZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoYXJyLCBpdGVtKSB7XG4gICAgY29uc3QgaXRlbUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgY29uc3QgY29udGFpbnMgPSBhcnIuc29tZSgoZWxlKSA9PiBKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpO1xuICAgIHJldHVybiBjb250YWlucztcbiAgfVxuICByZXR1cm4ge1xuICAgIGJlbG9uZ3NUb1BsYXllcjogZmFsc2UsXG4gICAgc2hpcHMsXG4gICAgYm9hcmQ6IGJvYXJkKCksXG4gICAgYWxsU2hpcHNTdW5rZW46IGZhbHNlLFxuICAgIG1pc3NlZEF0dGFja3M6IFtdLFxuICAgIHBsYWNlKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50WzBdID4gOSB8fCBlbGVtZW50WzBdIDwgMCB8fCBlbGVtZW50WzFdID4gOSB8fCBlbGVtZW50WzFdIDwgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29vcmRpbmF0ZSBvdXQgb2YgYm91bmRzLiBDaGVjayBhbGwgY29vcmRpbmF0ZXMhJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2hpcHMucHVzaChTaGlwKC4uLmNvb3JkaW5hdGVzKSk7XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICBsZXQgc3Vua2VuQ291bnRlciA9IDA7XG4gICAgICBsZXQgdG9CZVJldHVybmVkID0gZmFsc2U7XG4gICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChpc0FycmF5SW5BcnJheShzaGlwLmxvY2F0aW9uWzBdLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rZW5Qcm9wZXJ0eSA9PT0gdHJ1ZSkgc3Vua2VuQ291bnRlciArPSAxO1xuICAgICAgfSk7XG4gICAgICBpZiAoc3Vua2VuQ291bnRlciA9PT0gNSkgYWxlcnQoJ0dhbWUgZW5kZWQhJyk7XG4gICAgICBpZiAoY2FsbGVkID09PSB0cnVlKSB0b0JlUmV0dXJuZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRvQmVSZXR1cm5lZDtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcbmltcG9ydCBwbGFjZVNoaXBzIGZyb20gXCIuL3BsYWNlU2hpcHMuanNcIjtcbmltcG9ydCBwbGFjZVNoaXBzQUkgZnJvbSBcIi4vcGxhY2VTaGlwc0FJLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoKSB7XG4gIGNvbnN0IGNwdUF0dGFja3MgPSBbXTtcbiAgY29uc3QgaXNSZWFkeSA9IGZhbHNlO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0dhbWVCdXR0b25cIik7XG4gIGNvbnN0IGJvYXJkMUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQxQ29udGFpbmVyXCIpO1xuICBjb25zdCBib2FyZDJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkMkNvbnRhaW5lclwiKTtcbiAgY29uc3Qgd2ViQm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDFcIik7XG4gIGNvbnN0IHdlYkJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZGVhY3RpdmF0ZWRcIik7XG4gIG5ld0dhbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlYWN0aXZhdGVkXCIpO1xuICBib2FyZDFDb250YWluZXIuY2xhc3NMaXN0ID0gXCJib2FyZDFjb250YWluZXIgYWN0aXZhdGVkXCI7XG4gIGJvYXJkMkNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImJvYXJkMWNvbnRhaW5lciBhY3RpdmF0ZWRcIjtcbiAgY29uc3QgYm9hcmQxID0gZ2FtZUJvYXJkKCk7XG4gIGJvYXJkMS5iZWxvbmdzVG9QbGF5ZXIgPSB0cnVlO1xuICBjb25zdCBib2FyZDIgPSBnYW1lQm9hcmQoKTtcbiAgbGV0IGNlbGxOdW1iZXIgPSAwO1xuICBib2FyZDEuYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gYCR7Y2VsbFswXX0sICR7Y2VsbFsxXX1gO1xuICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QgPSBcImNlbGwxXCI7XG4gICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoYCR7Y2VsbE51bWJlcn1gKTtcbiAgICBjZWxsTnVtYmVyICs9IDE7XG4gICAgYm9hcmQxLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAubG9jYXRpb24uZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5naWZpZWRDb29yZHMgPSBKU09OLnN0cmluZ2lmeShjZWxsKTtcbiAgICAgICAgY29uc3Qgc3RyaW5naWZpZWRMb2NhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKHN0cmluZ2lmaWVkTG9jYXRpb24gPT09IHN0cmluZ2lmaWVkQ29vcmRzKSB7XG4gICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdCA9IFwiY2VsbFRha2VuQnlQbGF5ZXJcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgd2ViQm9hcmQxLmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gIH0pO1xuICBib2FyZDIuYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnVuY3Rpb24gYm9hcmRDZWxsQ2xpY2soKSB7XG4gICAgICBjb25zdCBjZWxsQ29udGVudHMgPSBgWyR7Ym9hcmRDZWxsLnRleHRDb250ZW50fV1gO1xuICAgICAgaWYgKGJvYXJkMi5yZWNlaXZlQXR0YWNrKEpTT04ucGFyc2UoY2VsbENvbnRlbnRzKSkgPT09IHRydWUpIHtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZW1wdHlcIik7XG4gICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbDJcIik7XG4gICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFRha2VuQnlQbGF5ZXJcIik7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkMi5yZWNlaXZlQXR0YWNrKEpTT04ucGFyc2UoY2VsbENvbnRlbnRzKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QgPSBcImVtcHR5XCI7XG4gICAgICAgIGJvYXJkQ2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDZWxsQ2xpY2spO1xuICAgICAgfVxuXG4gICAgICBsZXQgc3Vua2VuQ291bnRlciA9IDA7XG4gICAgICBib2FyZDIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyICs9IDE7XG4gICAgICAgIGlmIChzdW5rZW5Db3VudGVyID09PSA1KSBhbGVydChcIkh1bWFuIHdpbnMhXCIpO1xuICAgICAgfSk7XG4gICAgICBib2FyZDEuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyICs9IDE7XG4gICAgICAgIGlmIChzdW5rZW5Db3VudGVyID09PSA1KSBhbGVydChcIlJvYm90IHdpbnMhXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGJvYXJkQ2VsbC50ZXh0Q29udGVudCA9IGAke2NlbGxbMF19LCAke2NlbGxbMV19YDtcbiAgICBib2FyZENlbGwuY2xhc3NMaXN0ID0gXCJjZWxsMlwiO1xuICAgIHdlYkJvYXJkMi5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xuICB9KTtcbiAgcGxhY2VTaGlwcyhib2FyZDEsIGJvYXJkMik7XG4gIHBsYWNlU2hpcHNBSShib2FyZDIpO1xufVxuIiwiaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgZ2VuZXJhdGVCb2FyZCBmcm9tICcuL2dlbmVyYXRlQm9hcmQuanMnO1xuaW1wb3J0IHBsYWNlU2hpcHMgZnJvbSAnLi9wbGFjZVNoaXBzLmpzJztcblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdHYW1lQnV0dG9uJyk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZW5lcmF0ZUJvYXJkKCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlckdlbmVyYXRvcihtaW4sIG1heCwgYXJyYXkpIHtcbiAgZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoYXJyLCBpdGVtKSB7XG4gICAgY29uc3QgaXRlbUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgY29uc3QgY29udGFpbnMgPSBhcnIuc29tZSgoZWxlKSA9PiBKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpO1xuICAgIHJldHVybiBjb250YWlucztcbiAgfVxuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICBjb25zdCBmaXJzdE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIGNvbnN0IHNlY29uZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIC8vIGlmICh2ZXJ0aWNhbCAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgcmV0dXJuIFt2ZXJ0aWNhbCwgc2Vjb25kTnVtYmVyXTtcbiAgLy8gfSBpZiAoaG9yaXpvbnRhbCAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgcmV0dXJuIFtmaXJzdE51bWJlciwgaG9yaXpvbnRhbF07XG4gIC8vIH1cbiAgaWYgKGlzQXJyYXlJbkFycmF5KGFycmF5LCBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl0pKSByZXR1cm4gbnVtYmVyR2VuZXJhdG9yKG1pbiwgbWF4LCBhcnJheSk7XG4gIHJldHVybiBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl07XG59XG4iLCJpbXBvcnQgYWRkU2hpcFRvQm9hcmQgZnJvbSBcIi4vYWRkU2hpcFRvQm9hcmQuanNcIjtcbmltcG9ydCBhdHRhY2tMb2dpYyBmcm9tIFwiLi9hdHRhY2tMb2dpYy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZVNoaXBzKGJvYXJkLCBvcHBCb2FyZCkge1xuICBjb25zdCBib2FyZDFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQxU2hpcHNcIik7XG4gIGNvbnN0IGNhcnJpZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FycmllcjEudGV4dENvbnRlbnQgPSBcIkNhcnJpZXIgKDUgY2VsbHMpXCI7XG4gIGNvbnN0IGJhdHRsZXNoaXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmF0dGxlc2hpcDEudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXAgKDQgY2VsbHMpXCI7XG4gIGNvbnN0IGNydWlzZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3J1aXNlcjEudGV4dENvbnRlbnQgPSBcIkNydWlzZXIgKDMgY2VsbHMpXCI7XG4gIGNvbnN0IHN1Ym1hcmluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtYXJpbmUxLnRleHRDb250ZW50ID0gXCJTdWJtYXJpbmUgKDMgY2VsbHMpXCI7XG4gIGNvbnN0IGRlc3Ryb3llcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXN0cm95ZXIxLnRleHRDb250ZW50ID0gXCJEZXN0cm95ZXIgKDIgY2VsbHMpXCI7XG4gIGNvbnN0IHBsYXllcjFTaGlwcyA9IFtcbiAgICBjYXJyaWVyMSxcbiAgICBiYXR0bGVzaGlwMSxcbiAgICBjcnVpc2VyMSxcbiAgICBzdWJtYXJpbmUxLFxuICAgIGRlc3Ryb3llcjEsXG4gIF07XG4gIGNvbnN0IGNhcnJpZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FycmllcjIudGV4dENvbnRlbnQgPSBcIkNhcnJpZXIgKDUgY2VsbHMpXCI7XG4gIGNvbnN0IGJhdHRsZXNoaXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmF0dGxlc2hpcDIudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXAgKDQgY2VsbHMpXCI7XG4gIGNvbnN0IGNydWlzZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3J1aXNlcjIudGV4dENvbnRlbnQgPSBcIkNydWlzZXIgKDMgY2VsbHMpXCI7XG4gIGNvbnN0IHN1Ym1hcmluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtYXJpbmUyLnRleHRDb250ZW50ID0gXCJTdWJtYXJpbmUgKDMgY2VsbHMpXCI7XG4gIGNvbnN0IGRlc3Ryb3llcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXN0cm95ZXIyLnRleHRDb250ZW50ID0gXCJEZXN0cm95ZXIgKDIgY2VsbHMpXCI7XG4gIGFzeW5jIGZ1bmN0aW9uIGdldENvb3Jkc0ZvclNoaXAoZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWRkU2hpcFRvQm9hcmQoZSk7XG4gICAgYm9hcmQucGxhY2UocmVzcG9uc2UpO1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRDb29yZHNGb3JTaGlwKTtcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICBpZiAoYm9hcmQuc2hpcHMubGVuZ3RoID09PSA1KSBhdHRhY2tMb2dpYyhib2FyZCwgb3BwQm9hcmQpO1xuICB9XG4gIHBsYXllcjFTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgYm9hcmQxU2hpcHMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0Q29vcmRzRm9yU2hpcCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGFkZFNoaXBUb0JvYXJkQUkgZnJvbSBcIi4vYWRkU2hpcFRvQm9hcmRBSS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZVNoaXBzQUkoYm9hcmQsIG9wcEJvYXJkKSB7XG4gIGNvbnN0IGJvYXJkMlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDJTaGlwc1wiKTtcbiAgY29uc3QgdGFrZW5DZWxscyA9IFtdO1xuICBjb25zdCBjYXJyaWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcnJpZXIyLnRleHRDb250ZW50ID0gXCJDYXJyaWVyICg1IGNlbGxzKVwiO1xuICBjb25zdCBiYXR0bGVzaGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhdHRsZXNoaXAyLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwICg0IGNlbGxzKVwiO1xuICBjb25zdCBjcnVpc2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNydWlzZXIyLnRleHRDb250ZW50ID0gXCJDcnVpc2VyICgzIGNlbGxzKVwiO1xuICBjb25zdCBzdWJtYXJpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VibWFyaW5lMi50ZXh0Q29udGVudCA9IFwiU3VibWFyaW5lICgzIGNlbGxzKVwiO1xuICBjb25zdCBkZXN0cm95ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzdHJveWVyMi50ZXh0Q29udGVudCA9IFwiRGVzdHJveWVyICgyIGNlbGxzKVwiO1xuICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBbXG4gICAgY2FycmllcjIsXG4gICAgYmF0dGxlc2hpcDIsXG4gICAgY3J1aXNlcjIsXG4gICAgc3VibWFyaW5lMixcbiAgICBkZXN0cm95ZXIyLFxuICBdO1xuICBwbGF5ZXIyU2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGJvYXJkMlNoaXBzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzRm9yU2hpcChlKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhZGRTaGlwVG9Cb2FyZEFJKGUsIHRha2VuQ2VsbHMpO1xuICAgIHJlc3BvbnNlLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIHRha2VuQ2VsbHMucHVzaChjZWxsKTtcbiAgICB9KTtcbiAgICBib2FyZC5wbGFjZShyZXNwb25zZSk7XG4gICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0Q29vcmRzRm9yU2hpcCk7XG4gICAgZS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgfVxuICBnZXRDb29yZHNGb3JTaGlwKGNhcnJpZXIyKTtcbiAgZ2V0Q29vcmRzRm9yU2hpcChiYXR0bGVzaGlwMik7XG4gIGdldENvb3Jkc0ZvclNoaXAoY3J1aXNlcjIpO1xuICBnZXRDb29yZHNGb3JTaGlwKHN1Ym1hcmluZTIpO1xuICBnZXRDb29yZHNGb3JTaGlwKGRlc3Ryb3llcjIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcCguLi5jb29yZGluYXRlcykge1xuICBjb25zdCBsb2NhdGlvbiA9IGNvb3JkaW5hdGVzO1xuICBsZXQgbGVuZ3RoID0gMDtcbiAgbG9jYXRpb25bMF0uZm9yRWFjaCgoKSA9PiB7XG4gICAgbGVuZ3RoICs9IDE7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGhpdHM6IDAsXG4gICAgbGVuZ3RoLFxuICAgIGlzU3Vua2VuUHJvcGVydHk6IGZhbHNlLFxuICAgIGhpdChoaXRzKSB7XG4gICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaXNTdW5rZW5Qcm9wZXJ0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2NhdGlvbixcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJhZGRTaGlwVG9Cb2FyZCIsImUiLCJpc0FycmF5SW5BcnJheSIsImFyciIsIml0ZW0iLCJpdGVtQXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGFpbnMiLCJzb21lIiwiZWxlIiwiYXJyYXlPZkNvb3JkcyIsIm51bWJlck9mQ2VsbHMiLCJjb3VudGVyIiwiY2xhc3NDb3VudGVyIiwidGFyZ2V0Iiwic3R5bGUiLCJjb2xvciIsImNoZWNrTWFya0RpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY3Jvc3NNYXJrRGl2IiwiYXBwZW5kQ2hpbGQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImluY2x1ZGVzIiwiY2xhc3NUb0JlQWRkZWQiLCJhbGxQMUNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvb3JkaW5hdGVzIiwiZiIsInRvQ29tcGFyZTEiLCJzbGljZSIsInRvQ29tcGFyZTAiLCJ0b0JlQWRkZWQiLCJwYXJzZSIsImxlbmd0aCIsInRvQ29tcGFyZTIiLCJjbGFzc0xpc3QiLCJwdXNoIiwiZm9yRWFjaCIsImNlbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWxlcnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJjZWxsc1Rha2VuIiwicmVtb3ZlIiwiYWRkIiwiYWxsQm9hcmQxQ2VsbHMiLCJudW1iZXJHZW5lcmF0b3IiLCJjb2luRmxpcCIsImFkZFNoaXBUb0JvYXJkQUkiLCJhcnJheSIsImNvb3Jkc0ZpbHRlciIsIm51bWJlciIsInJhbmRvbTEiLCJyYW5kb20yIiwicmFuZG9tMyIsIm9yaWdpbmFsTnVtIiwidG9Db21wYXJlIiwidW5kZWZpbmVkIiwiTmFOIiwidGFrZW5DZWxscyIsInNlY29uZE9yaWdpbmFsIiwibnVtYmVyMSIsImNvb3JkIiwiYXR0YWNrTG9naWMiLCJib2FyZDEiLCJib2FyZDIiLCJpc0FycmF5SW5BcnJheU9yaWdpbmFsIiwiY3B1QXR0YWNrcyIsImJvYXJkMUNlbGxzIiwiYm9hcmQyQ2VsbHMiLCJib2FyZENlbGxDbGljayIsImNlbGwyQ29udGVudHMiLCJyZWNlaXZlQXR0YWNrIiwic3Vua2VuQ291bnRlcjIiLCJzaGlwcyIsInNoaXAiLCJpc1N1bmtlblByb3BlcnR5IiwicmFuZG9tQ1BVYXR0YWNrIiwiY2xhc3NDaGVja2VyIiwidG9CZVJldHVybmVkIiwiY2VsbFRha2VuQnlQbGF5ZXIyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNlbGxUYWtlbkJ5UGxheWVyMyIsImNlbGxUYWtlbkJ5UGxheWVyM0NydWlzZXIiLCJjZWxsVGFrZW5CeVBsYXllcjQiLCJjZWxsVGFrZW5CeVBsYXllcjUiLCJpIiwidGVzdDEiLCJqIiwiayIsImwiLCJtIiwiYXR0YWNrZWRDZWxsSW5kZXgiLCJib2FyZCIsImNlbGxUb0JlTW9kaWZpZWQiLCJ2YWx1ZSIsInN1bmtlbkNvdW50ZXIxIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiU2hpcCIsImdhbWVCb2FyZCIsImJvYXJkVG9SZXR1cm4iLCJiZWxvbmdzVG9QbGF5ZXIiLCJhbGxTaGlwc1N1bmtlbiIsIm1pc3NlZEF0dGFja3MiLCJwbGFjZSIsImVsZW1lbnQiLCJFcnJvciIsInN1bmtlbkNvdW50ZXIiLCJjYWxsZWQiLCJsb2NhdGlvbiIsImhpdCIsInBsYWNlU2hpcHMiLCJwbGFjZVNoaXBzQUkiLCJnZW5lcmF0ZUJvYXJkIiwiaXNSZWFkeSIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsIm5ld0dhbWVCdXR0b24iLCJib2FyZDFDb250YWluZXIiLCJib2FyZDJDb250YWluZXIiLCJ3ZWJCb2FyZDEiLCJ3ZWJCb2FyZDIiLCJjZWxsTnVtYmVyIiwiYm9hcmRDZWxsIiwic3RyaW5naWZpZWRDb29yZHMiLCJzdHJpbmdpZmllZExvY2F0aW9uIiwiY2VsbENvbnRlbnRzIiwiY3NzIiwiY2VpbCIsImZpcnN0TnVtYmVyIiwic2Vjb25kTnVtYmVyIiwib3BwQm9hcmQiLCJib2FyZDFTaGlwcyIsImNhcnJpZXIxIiwiYmF0dGxlc2hpcDEiLCJjcnVpc2VyMSIsInN1Ym1hcmluZTEiLCJkZXN0cm95ZXIxIiwicGxheWVyMVNoaXBzIiwiY2FycmllcjIiLCJiYXR0bGVzaGlwMiIsImNydWlzZXIyIiwic3VibWFyaW5lMiIsImRlc3Ryb3llcjIiLCJnZXRDb29yZHNGb3JTaGlwIiwicmVzcG9uc2UiLCJib2FyZDJTaGlwcyIsInBsYXllcjJTaGlwcyIsImhpdHMiXSwic291cmNlUm9vdCI6IiJ9