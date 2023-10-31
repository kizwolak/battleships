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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Gruppo\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@keyframes opacityAnimation {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n    display: block;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes colourAnimation {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #ff124f;\n  }\n}\n\n@keyframes visibilityAnimationHidden {\n  100% {\n    visibility: hidden;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Gruppo\", sans-serif;\n  background-color: #602080;\n}\n\nh1 {\n  font-size: 6em;\n  color: #ff00a0;\n  background-color: transparent;\n  animation: opacityAnimation 1s ease-in;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 50vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: 75%;\n  background-position: center;\n  margin-bottom: 5rem;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.boardContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 80vh;\n  margin-top: 3.5em;\n}\n\n.board1,\n.board2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  justify-content: center;\n}\n\n.board1container {\n  width: 100%;\n  height: 100%;\n}\n\n.board1container.activated {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.player1Name,\n.player2Name {\n  font-size: 3em;\n}\n\n.board1Ships,\n.board2Ships {\n  font-size: 2em;\n  margin-bottom: 1.5em;\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.board1Ships > *:hover,\n.board2Ships > *:hover {\n  color: green;\n  font-weight: bold;\n}\n\n.cell1,\n.cell2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n}\n\n.cellTakenByPlayer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByComputer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #edf84f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByPlayer3Cruiser {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer3 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer4 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer5 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cell1:hover,\n.cell2:hover {\n  transition: 0.4s;\n  background-color: #fe75fe;\n}\n\n.empty {\n  background-color: #33163a;\n  width: 4em;\n  height: 4em;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  border: 1px solid black;\n}\n\nbutton {\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  font-size: 2.5em;\n  animation: opacityAnimation 1s ease-in;\n}\n\nbutton:hover {\n  color: #ff124f;\n  transition: 0.3s;\n}\n\n.deactivated {\n  animation: visibilityAnimationHidden 2s ease-out;\n  opacity: 0;\n  display: none;\n  transition: opacity 1.5s display 1.5s linear;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Gruppo\";\n  src: url(./fonts/Gruppo-Regular.ttf);\n}\n\n@keyframes opacityAnimation {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n    display: block;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes colourAnimation {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #ff124f;\n  }\n}\n\n@keyframes visibilityAnimationHidden {\n  100% {\n    visibility: hidden;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Gruppo\", sans-serif;\n  background-color: #602080;\n}\n\nh1 {\n  font-size: 6em;\n  color: #ff00a0;\n  background-color: transparent;\n  animation: opacityAnimation 1s ease-in;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 50vh;\n  background-image: url(\"/src/images/WIKIPEDIA15_BATTLESHIP.svg\");\n  background-repeat: no-repeat;\n  background-size: 75%;\n  background-position: center;\n  margin-bottom: 5rem;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.boardContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 80vh;\n  margin-top: 3.5em;\n}\n\n.board1,\n.board2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  justify-content: center;\n}\n\n.board1container {\n  width: 100%;\n  height: 100%;\n}\n\n.board1container.activated {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.player1Name,\n.player2Name {\n  font-size: 3em;\n}\n\n.board1Ships,\n.board2Ships {\n  font-size: 2em;\n  margin-bottom: 1.5em;\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.board1Ships > *:hover,\n.board2Ships > *:hover {\n  color: green;\n  font-weight: bold;\n}\n\n.cell1,\n.cell2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n}\n\n.cellTakenByPlayer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByComputer {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #edf84f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cellTakenByPlayer3Cruiser {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer2 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer3 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer4 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cellTakenByPlayer5 {\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  color: transparent;\n  background-color: #ff124f;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cell1:hover,\n.cell2:hover {\n  transition: 0.4s;\n  background-color: #fe75fe;\n}\n\n.empty {\n  background-color: #33163a;\n  width: 4em;\n  height: 4em;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  border: 1px solid black;\n}\n\nbutton {\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  font-size: 2.5em;\n  animation: opacityAnimation 1s ease-in;\n}\n\nbutton:hover {\n  color: #ff124f;\n  transition: 0.3s;\n}\n\n.deactivated {\n  animation: visibilityAnimationHidden 2s ease-out;\n  opacity: 0;\n  display: none;\n  transition: opacity 1.5s display 1.5s linear;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRTaGlwVG9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkU2hpcFRvQm9hcmRBSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXR0YWNrTG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvaW5GbGlwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dlbmVyYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL251bWJlckdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGxhY2VTaGlwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGxhY2VTaGlwc0FJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0dydXBwby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL1dJS0lQRURJQTE1X0JBVFRMRVNISVAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcnVwcG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHlBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNvbG91ckFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogI2ZmMTI0ZjtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB2aXNpYmlsaXR5QW5pbWF0aW9uSGlkZGVuIHtcXG4gIDEwMCUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkdydXBwb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjAyMDgwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDZlbTtcXG4gIGNvbG9yOiAjZmYwMGEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBhbmltYXRpb246IG9wYWNpdHlBbmltYXRpb24gMXMgZWFzZS1pbjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDc1JTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIG1hcmdpbi10b3A6IDMuNWVtO1xcbn1cXG5cXG4uYm9hcmQxLFxcbi5ib2FyZDIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lci5hY3RpdmF0ZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVlbTtcXG59XFxuXFxuLnBsYXllcjFOYW1lLFxcbi5wbGF5ZXIyTmFtZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmJvYXJkMVNoaXBzLFxcbi5ib2FyZDJTaGlwcyB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJvYXJkMVNoaXBzID4gKjpob3ZlcixcXG4uYm9hcmQyU2hpcHMgPiAqOmhvdmVyIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VsbDEsXFxuLmNlbGwyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNlbGxUYWtlbkJ5UGxheWVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsVGFrZW5CeUNvbXB1dGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjg0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNlbGxUYWtlbkJ5UGxheWVyMyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXI0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNlbGwxOmhvdmVyLFxcbi5jZWxsMjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNzVmZTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzE2M2E7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eUFuaW1hdGlvbiAxcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZjEyNGY7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uZGVhY3RpdmF0ZWQge1xcbiAgYW5pbWF0aW9uOiB2aXNpYmlsaXR5QW5pbWF0aW9uSGlkZGVuIDJzIGVhc2Utb3V0O1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZGlzcGxheSAxLjVzIGxpbmVhcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix5REFBK0Q7RUFDL0QsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDRDQUE0QztBQUM5Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3J1cHBvXFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udHMvR3J1cHBvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5QW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjb2xvdXJBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgY29sb3I6ICNmZjEyNGY7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdmlzaWJpbGl0eUFuaW1hdGlvbkhpZGRlbiB7XFxuICAxMDAlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcnVwcG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwMjA4MDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA2ZW07XFxuICBjb2xvcjogI2ZmMDBhMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5QW5pbWF0aW9uIDFzIGVhc2UtaW47XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWFnZXMvV0lLSVBFRElBMTVfQkFUVExFU0hJUC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDc1JTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIG1hcmdpbi10b3A6IDMuNWVtO1xcbn1cXG5cXG4uYm9hcmQxLFxcbi5ib2FyZDIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lci5hY3RpdmF0ZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVlbTtcXG59XFxuXFxuLnBsYXllcjFOYW1lLFxcbi5wbGF5ZXIyTmFtZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmJvYXJkMVNoaXBzLFxcbi5ib2FyZDJTaGlwcyB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJvYXJkMVNoaXBzID4gKjpob3ZlcixcXG4uYm9hcmQyU2hpcHMgPiAqOmhvdmVyIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VsbDEsXFxuLmNlbGwyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNlbGxUYWtlbkJ5UGxheWVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsVGFrZW5CeUNvbXB1dGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjg0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNlbGxUYWtlbkJ5UGxheWVyMyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICB0ZXh0LWluZGVudDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXI0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNlbGwxOmhvdmVyLFxcbi5jZWxsMjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNzVmZTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzE2M2E7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eUFuaW1hdGlvbiAxcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZjEyNGY7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uZGVhY3RpdmF0ZWQge1xcbiAgYW5pbWF0aW9uOiB2aXNpYmlsaXR5QW5pbWF0aW9uSGlkZGVuIDJzIGVhc2Utb3V0O1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZGlzcGxheSAxLjVzIGxpbmVhcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZFNoaXBUb0JvYXJkKGUpIHtcbiAgY29uc3QgYXJyYXlPZkNvb3JkcyA9IFtdO1xuICBsZXQgbnVtYmVyT2ZDZWxscyA9IDA7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgbGV0IGNsYXNzQ291bnRlciA9IDA7XG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgY29uc3QgY2hlY2tNYXJrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlY2tNYXJrRGl2LnRleHRDb250ZW50ID0gXCLinJTvuI9cIjtcbiAgY29uc3QgY3Jvc3NNYXJrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3Jvc3NNYXJrRGl2LnRleHRDb250ZW50ID0gXCLinYxcIjtcbiAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoY2hlY2tNYXJrRGl2KTtcbiAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoY3Jvc3NNYXJrRGl2KTtcbiAgZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoYXJyLCBpdGVtKSB7XG4gICAgY29uc3QgaXRlbUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgY29uc3QgY29udGFpbnMgPSBhcnIuc29tZSgoZWxlKSA9PiBKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpO1xuICAgIHJldHVybiBjb250YWlucztcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIjJcIikpIHtcbiAgICAgIG51bWJlck9mQ2VsbHMgPSAyO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQuaW5jbHVkZXMoXCIzXCIpKSB7XG4gICAgICBudW1iZXJPZkNlbGxzID0gMztcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LmluY2x1ZGVzKFwiNFwiKSkge1xuICAgICAgbnVtYmVyT2ZDZWxscyA9IDQ7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIjVcIikpIHtcbiAgICAgIG51bWJlck9mQ2VsbHMgPSA1O1xuICAgIH1cbiAgICBsZXQgY2xhc3NUb0JlQWRkZWQgPSBgY2VsbFRha2VuQnlQbGF5ZXIke251bWJlck9mQ2VsbHN9YDtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQuaW5jbHVkZXMoXCJDcnVpc2VyXCIpKSB7XG4gICAgICBjbGFzc1RvQmVBZGRlZCA9IGBjZWxsVGFrZW5CeVBsYXllciR7bnVtYmVyT2ZDZWxsc31DcnVpc2VyYDtcbiAgICB9XG4gICAgY29uc3QgYWxsUDFDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbDFcIik7XG4gICAgZnVuY3Rpb24gY29vcmRpbmF0ZXMoZikge1xuICAgICAgY29uc3QgdG9Db21wYXJlMSA9IGFycmF5T2ZDb29yZHMuc2xpY2UoMSwgMik7XG4gICAgICBjb25zdCB0b0NvbXBhcmUwID0gYXJyYXlPZkNvb3Jkcy5zbGljZSgwLCAxKTtcbiAgICAgIGNvbnN0IHRvQmVBZGRlZCA9IEpTT04ucGFyc2UoYFske2YudGFyZ2V0LnRleHRDb250ZW50fV1gKTtcbiAgICAgIGlmIChpc0FycmF5SW5BcnJheShhcnJheU9mQ29vcmRzLCB0b0JlQWRkZWQpKSByZXR1cm47XG4gICAgICBpZiAoYXJyYXlPZkNvb3Jkcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0b0NvbXBhcmUwWzBdWzBdIC0gdG9CZUFkZGVkWzBdID09PSAxIHx8XG4gICAgICAgICAgICB0b0NvbXBhcmUwWzBdWzBdIC0gdG9CZUFkZGVkWzBdID09PSAtMSkgJiZcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzFdIC0gdG9CZUFkZGVkWzFdICE9PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9Db21wYXJlMFswXVswXSAtIHRvQmVBZGRlZFswXSA+IDEgfHxcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzBdIC0gdG9CZUFkZGVkWzBdIDwgLTEgfHxcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzFdIC0gdG9CZUFkZGVkWzFdID4gMSB8fFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPCAtMVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMF0gLSB0b0JlQWRkZWRbMF0gIT09IDAgJiZcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzFdIC0gdG9CZUFkZGVkWzFdID09PSAxICYmXG4gICAgICAgICAgdG9Db21wYXJlMFswXVsxXSAtIHRvQmVBZGRlZFsxXSA9PT0gMVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJyYXlPZkNvb3Jkcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHRvQ29tcGFyZTIgPSBhcnJheU9mQ29vcmRzLnNsaWNlKFxuICAgICAgICAgIGFycmF5T2ZDb29yZHMubGVuZ3RoIC0gMSxcbiAgICAgICAgICBhcnJheU9mQ29vcmRzLmxlbmd0aCAtIDBcbiAgICAgICAgKTtcbiAgICAgICAgLy8gdmVydGljYWwgY2hlY2tcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMF0gLSB0b0NvbXBhcmUxWzBdWzBdID09PSAxIHx8XG4gICAgICAgICAgdG9Db21wYXJlMFswXVswXSAtIHRvQ29tcGFyZTFbMF1bMF0gPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPj0gMSB8fFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVsxXSAtIHRvQmVBZGRlZFsxXSA8PSAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzBdIC0gdG9CZUFkZGVkWzBdID4gMSB8fFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVswXSAtIHRvQmVBZGRlZFswXSA8IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodG9Db21wYXJlMFswXVswXSAtIHRvQ29tcGFyZTFbMF1bMF0gPT09IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRvQmVBZGRlZFswXSAtIHRvQ29tcGFyZTBbMF1bMF0gIT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b0NvbXBhcmUwWzBdWzBdIC0gdG9Db21wYXJlMVswXVswXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKHRvQ29tcGFyZTBbMF1bMF0gLSB0b0JlQWRkZWRbMF0gIT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaG9yaXpvbnRhbCBjaGVja1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9Db21wYXJlMFswXVsxXSAtIHRvQ29tcGFyZTFbMF1bMV0gPT09IDEgfHxcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzFdIC0gdG9Db21wYXJlMVswXVsxXSA9PT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVswXSAtIHRvQmVBZGRlZFswXSA+PSAxIHx8XG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzBdIC0gdG9CZUFkZGVkWzBdIDw9IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPiAxIHx8XG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzFdIC0gdG9CZUFkZGVkWzFdIDwgLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGYudGFyZ2V0LmNsYXNzTGlzdCA9IGNsYXNzVG9CZUFkZGVkO1xuICAgICAgZi50YXJnZXQuY2xhc3NMaXN0ICs9IGAgJHtjbGFzc0NvdW50ZXJ9YDtcbiAgICAgIGNsYXNzQ291bnRlciArPSAxO1xuICAgICAgYXJyYXlPZkNvb3Jkcy5wdXNoKHRvQmVBZGRlZCk7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBpZiAobnVtYmVyT2ZDZWxscyA9PT0gY291bnRlcikge1xuICAgICAgICBhbGxQMUNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb29yZGluYXRlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGVydChcIlByZXNzIHRoZSBncmVlbiBjaGVjayBtYXJrIGluIG9yZGVyIHRvIGNvbmZpcm0geW91ciBjaG9pY2UuXCIpO1xuICAgICAgICBjaGVja01hcmtEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChjaGVja01hcmtEaXYpO1xuICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUNoaWxkKGNyb3NzTWFya0Rpdik7XG4gICAgICAgICAgcmVzb2x2ZShhcnJheU9mQ29vcmRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNyb3NzTWFya0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgY29uc3QgY2VsbHNUYWtlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzVG9CZUFkZGVkfWApO1xuICAgICAgY2VsbHNUYWtlbi5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc1RvQmVBZGRlZH1gKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbDFcIik7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGFsbEJvYXJkMUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImNlbGwxXCIpO1xuICAgICAgYWxsQm9hcmQxQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb29yZGluYXRlcyk7XG4gICAgICB9KTtcbiAgICAgIGUudGFyZ2V0LnJlbW92ZUNoaWxkKGNoZWNrTWFya0Rpdik7XG4gICAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChjcm9zc01hcmtEaXYpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gICAgYWxsUDFDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH0pO1xuICAvLyAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIC8vICAgICBpZiAoYXJyYXlPZkNvb3Jkcy5sZW5ndGggPT09IG51bWJlck9mQ2VsbHMpIHtcbiAgLy8gICAgICAgcmVzb2x2ZSgpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyAgIHByb21pc2UudGhlbigodmFsdWUpID0+IGFycmF5VG9CZVJldHVybmVkID0gdmFsdWUpO1xuICAvLyAgIHByb21pc2UudGhlblxufVxuIiwiaW1wb3J0IG51bWJlckdlbmVyYXRvciBmcm9tIFwiLi9udW1iZXJHZW5lcmF0b3IuanNcIjtcbmltcG9ydCBjb2luRmxpcCBmcm9tIFwiLi9jb2luRmxpcC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRTaGlwVG9Cb2FyZEFJKGUsIGFycmF5KSB7XG4gIGNvbnN0IHRha2VuQ2VsbHMgPSBbXTtcbiAgbGV0IGFycmF5T2ZDb29yZHMgPSBbXTtcbiAgbGV0IG51bWJlck9mQ2VsbHMgPSAwO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGlmIChlLnRleHRDb250ZW50LmluY2x1ZGVzKFwiMlwiKSkge1xuICAgIG51bWJlck9mQ2VsbHMgPSAyO1xuICB9IGVsc2UgaWYgKGUudGV4dENvbnRlbnQuaW5jbHVkZXMoXCIzXCIpKSB7XG4gICAgbnVtYmVyT2ZDZWxscyA9IDM7XG4gIH0gZWxzZSBpZiAoZS50ZXh0Q29udGVudC5pbmNsdWRlcyhcIjRcIikpIHtcbiAgICBudW1iZXJPZkNlbGxzID0gNDtcbiAgfSBlbHNlIGlmIChlLnRleHRDb250ZW50LmluY2x1ZGVzKFwiNVwiKSkge1xuICAgIG51bWJlck9mQ2VsbHMgPSA1O1xuICB9XG4gIGZ1bmN0aW9uIGlzQXJyYXlJbkFycmF5KGFyciwgaXRlbSkge1xuICAgIGNvbnN0IGl0ZW1Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgIGNvbnN0IGNvbnRhaW5zID0gYXJyLnNvbWUoKGVsZSkgPT4gSlNPTi5zdHJpbmdpZnkoZWxlKSA9PT0gaXRlbUFzU3RyaW5nKTtcbiAgICByZXR1cm4gY29udGFpbnM7XG4gIH1cbiAgbGV0IG51bWJlcjEgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gIGZ1bmN0aW9uIGNvb3Jkc0ZpbHRlcihudW1iZXIpIHtcbiAgICBsZXQgdG9CZUFkZGVkID0gbnVtYmVyO1xuICAgIGNvbnN0IHJhbmRvbTEgPSBjb2luRmxpcCgpO1xuICAgIGNvbnN0IHJhbmRvbTIgPSBjb2luRmxpcCgpO1xuICAgIGNvbnN0IHJhbmRvbTMgPSBjb2luRmxpcCgpO1xuICAgIGNvbnN0IG9yaWdpbmFsTnVtID0gYXJyYXlPZkNvb3Jkcy5zbGljZSgwLCAxKTtcbiAgICBsZXQgdG9Db21wYXJlID0gYXJyYXlPZkNvb3Jkcy5zbGljZShcbiAgICAgIGFycmF5T2ZDb29yZHMubGVuZ3RoIC0gMSxcbiAgICAgIGFycmF5T2ZDb29yZHMubGVuZ3RoXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICB0b0JlQWRkZWRbMF0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdG9CZUFkZGVkWzFdID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRvQmVBZGRlZFswXSA9PT0gTmFOIHx8XG4gICAgICB0b0JlQWRkZWRbMV0gPT09IE5hTlxuICAgICkge1xuICAgICAgdG9Db21wYXJlID0gYXJyYXlPZkNvb3Jkcy5zbGljZSgwLCAxKTtcbiAgICAgIHRvQmVBZGRlZCA9IG51bWJlckdlbmVyYXRvcigwLCA5LCB0YWtlbkNlbGxzKTtcbiAgICB9XG4gICAgaWYgKGFycmF5T2ZDb29yZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAocmFuZG9tMSA9PT0gMCkge1xuICAgICAgICBpZiAocmFuZG9tMyA9PT0gMCkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFt0b0NvbXBhcmVbMF1bMF0gLSAxLCB0b0NvbXBhcmVbMF1bMV1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb20zID09PSAxKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gW3RvQ29tcGFyZVswXVswXSArIDEsIHRvQ29tcGFyZVswXVsxXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyYW5kb20xID09PSAxKSB7XG4gICAgICAgIGlmIChyYW5kb20zID09PSAwKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gW3RvQ29tcGFyZVswXVswXSwgdG9Db21wYXJlWzBdWzFdIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmRvbTMgPT09IDEpIHtcbiAgICAgICAgICB0b0JlQWRkZWQgPSBbdG9Db21wYXJlWzBdWzBdLCB0b0NvbXBhcmVbMF1bMV0gKyAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJyYXlPZkNvb3Jkcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzZWNvbmRPcmlnaW5hbCA9IGFycmF5T2ZDb29yZHMuc2xpY2UoMSwgMik7XG4gICAgICBpZiAoXG4gICAgICAgIHNlY29uZE9yaWdpbmFsWzBdWzBdIC0gb3JpZ2luYWxOdW1bMF1bMF0gPT09IDEgfHxcbiAgICAgICAgc2Vjb25kT3JpZ2luYWxbMF1bMF0gLSBvcmlnaW5hbE51bVswXVswXSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICBpZiAodG9Db21wYXJlWzBdWzBdID09PSA5IHx8IHRvQ29tcGFyZVswXVswXSA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZTEgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gICAgICAgICAgaWYgKHRvQ29tcGFyZVswXVswXSA9PT0gMCkge1xuICAgICAgICAgICAgdG9Db21wYXJlID0gWzAsIHRvQ29tcGFyZTFbMF1bMV1dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0NvbXBhcmUgPSBbOSwgdG9Db21wYXJlMVsxXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb20yID09PSAwKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gW3RvQ29tcGFyZVswXVswXSAtIDEsIHRvQ29tcGFyZVswXVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmRvbTIgPT09IDEpIHtcbiAgICAgICAgICB0b0JlQWRkZWQgPSBbdG9Db21wYXJlWzBdWzBdICsgMSwgdG9Db21wYXJlWzBdWzFdXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheUluQXJyYXkodGFrZW5DZWxscywgdG9CZUFkZGVkKSkgcmV0dXJuO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9CZUFkZGVkWzBdIC0gb3JpZ2luYWxOdW1bMF1bMF0gPiA1IHx8XG4gICAgICAgICAgdG9CZUFkZGVkIC0gb3JpZ2luYWxOdW1bMF1bMF0gPCAtNVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgc2Vjb25kT3JpZ2luYWxbMF1bMV0gLSBvcmlnaW5hbE51bVswXVsxXSA9PT0gMSB8fFxuICAgICAgICBzZWNvbmRPcmlnaW5hbFswXVsxXSAtIG9yaWdpbmFsTnVtWzBdWzFdID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGlmICh0b0NvbXBhcmVbMF1bMV0gPT09IDkgfHwgdG9Db21wYXJlWzBdWzFdID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgdG9Db21wYXJlMSA9IG51bWJlckdlbmVyYXRvcigwLCA5LCB0YWtlbkNlbGxzKTtcbiAgICAgICAgICBpZiAodG9Db21wYXJlWzBdWzFdID09PSAwKSB7XG4gICAgICAgICAgICB0b0NvbXBhcmUgPSBbdG9Db21wYXJlMVswXSwgMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQ29tcGFyZSA9IFt0b0NvbXBhcmUxWzBdLCA5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmRvbTIgPT09IDApIHtcbiAgICAgICAgICB0b0JlQWRkZWQgPSBbdG9Db21wYXJlWzBdWzBdLCB0b0NvbXBhcmVbMF1bMV0gLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZG9tMiA9PT0gMSkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFt0b0NvbXBhcmVbMF1bMF0sIHRvQ29tcGFyZVswXVsxXSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5SW5BcnJheSh0YWtlbkNlbGxzLCB0b0JlQWRkZWQpKSByZXR1cm47XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b0JlQWRkZWRbMF0gLSBvcmlnaW5hbE51bVswXVswXSA+IDUgfHxcbiAgICAgICAgICB0b0JlQWRkZWQgLSBvcmlnaW5hbE51bVswXVswXSA8IC01XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICB0b0JlQWRkZWRbMF0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdG9CZUFkZGVkWzBdID09PSBOYU4gfHxcbiAgICAgIHRvQmVBZGRlZFsxXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0b0JlQWRkZWRbMV0gPT09IE5hTiB8fFxuICAgICAgdG9CZUFkZGVkWzBdIDwgMCB8fFxuICAgICAgdG9CZUFkZGVkWzFdIDwgMCB8fFxuICAgICAgdG9CZUFkZGVkWzBdID4gOSB8fFxuICAgICAgdG9CZUFkZGVkWzFdID4gOVxuICAgICkge1xuICAgICAgdG9CZUFkZGVkID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIHRha2VuQ2VsbHMpO1xuICAgICAgYXJyYXlPZkNvb3JkcyA9IFtdO1xuICAgICAgY291bnRlciA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRvQmVBZGRlZFswXSA8IC0xIHx8XG4gICAgICB0b0JlQWRkZWRbMV0gPCAtMSB8fFxuICAgICAgdG9CZUFkZGVkWzBdID4gOSB8fFxuICAgICAgdG9CZUFkZGVkWzFdID4gOVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUluQXJyYXkodGFrZW5DZWxscywgdG9CZUFkZGVkKSkgcmV0dXJuO1xuICAgIGlmIChpc0FycmF5SW5BcnJheShhcnJheSwgdG9CZUFkZGVkKSkge1xuICAgICAgdG9CZUFkZGVkID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIHRha2VuQ2VsbHMpO1xuICAgICAgYXJyYXlPZkNvb3JkcyA9IFtdO1xuICAgICAgY291bnRlciA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFycmF5T2ZDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAvLyAgIGxldCBpc0luY29ycmVjdCA9IGZhbHNlO1xuICAgIC8vICAgaWYgKGNvb3JkWzBdID09PSB1bmRlZmluZWQgfHwgY29vcmRbMV0gPT09IHVuZGVmaW5lZCB8fCBjb29yZFswXSA9PT0gTmFOIHx8IGNvb3JkWzFdID09PSBOYU4pIHtcbiAgICAvLyAgICAgYXJyYXlPZkNvb3JkcyA9IFtdO1xuICAgIC8vICAgICBjb3VudGVyID0gMDtcbiAgICAvLyAgICAgaXNJbmNvcnJlY3QgPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKGlzSW5jb3JyZWN0KSByZXR1cm47XG4gICAgLy8gfSk7XG4gICAgYXJyYXlPZkNvb3Jkcy5wdXNoKHRvQmVBZGRlZCk7XG4gICAgdGFrZW5DZWxscy5wdXNoKHRvQmVBZGRlZCk7XG4gICAgY291bnRlciArPSAxO1xuICB9XG4gIGFycmF5T2ZDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBpZiAoaXNBcnJheUluQXJyYXkoYXJyYXksIGNvb3JkKSkge1xuICAgICAgY291bnRlciA9IDA7XG4gICAgICBhcnJheU9mQ29vcmRzID0gW107XG4gICAgfVxuICB9KTtcbiAgd2hpbGUgKGNvdW50ZXIgIT09IG51bWJlck9mQ2VsbHMpIHtcbiAgICBudW1iZXIxID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIHRha2VuQ2VsbHMpO1xuICAgIGNvb3Jkc0ZpbHRlcihudW1iZXIxKTtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBpZiAobnVtYmVyT2ZDZWxscyA9PT0gY291bnRlcikge1xuICAgICAgcmVzb2x2ZShhcnJheU9mQ29vcmRzKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IG51bWJlckdlbmVyYXRvciBmcm9tIFwiLi9udW1iZXJHZW5lcmF0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrTG9naWMoYm9hcmQxLCBib2FyZDIpIHtcbiAgZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoYXJyLCBpdGVtKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IGl0ZW1Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgIGNvbnN0IGNvbnRhaW5zID0gYXJyLnNvbWUoKGVsZSkgPT4ge1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGVsZSkgPT09IGl0ZW1Bc1N0cmluZykgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoIShKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpKSBjb3VudGVyICs9IDE7XG4gICAgfSk7XG4gICAgaWYgKGNvdW50ZXIgPj0gYXJyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG4gIGZ1bmN0aW9uIGlzQXJyYXlJbkFycmF5T3JpZ2luYWwoYXJyLCBpdGVtKSB7XG4gICAgY29uc3QgaXRlbUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgY29uc3QgY29udGFpbnMgPSBhcnIuc29tZSgoZWxlKSA9PiBKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpO1xuICAgIHJldHVybiBjb250YWlucztcbiAgfVxuICBjb25zdCBjcHVBdHRhY2tzID0gW107XG4gIGNvbnN0IGJvYXJkMUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsMVwiKTtcbiAgY29uc3QgYm9hcmQyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGwyXCIpO1xuICBib2FyZDJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgZnVuY3Rpb24gYm9hcmRDZWxsQ2xpY2soKSB7XG4gICAgICBjb25zdCBjZWxsMkNvbnRlbnRzID0gYFske2NlbGwudGV4dENvbnRlbnR9XWA7XG4gICAgICBpZiAoYm9hcmQyLnJlY2VpdmVBdHRhY2soSlNPTi5wYXJzZShjZWxsMkNvbnRlbnRzKSkgPT09IHRydWUpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJlbXB0eVwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbDJcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxUYWtlbkJ5UGxheWVyXCIpO1xuICAgICAgfSBlbHNlIGlmIChib2FyZDIucmVjZWl2ZUF0dGFjayhKU09OLnBhcnNlKGNlbGwyQ29udGVudHMpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSBcImVtcHR5XCI7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvYXJkQ2VsbENsaWNrKTtcbiAgICAgIH1cbiAgICAgIGxldCBzdW5rZW5Db3VudGVyMiA9IDA7XG4gICAgICBib2FyZDIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyMiArPSAxO1xuICAgICAgICBpZiAoc3Vua2VuQ291bnRlcjIgPT09IDUpIGFsZXJ0KFwiSHVtYW4gd2lucyFcIik7XG4gICAgICB9KTtcbiAgICAgIGxldCByYW5kb21DUFVhdHRhY2sgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgY3B1QXR0YWNrcyk7XG4gICAgICBpZiAoaXNBcnJheUluQXJyYXkoY3B1QXR0YWNrcywgcmFuZG9tQ1BVYXR0YWNrKSkge1xuICAgICAgICByYW5kb21DUFVhdHRhY2sgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgY3B1QXR0YWNrcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsYXNzQ2hlY2tlcigpIHtcbiAgICAgICAgbGV0IHRvQmVSZXR1cm5lZDtcbiAgICAgICAgY29uc3QgY2VsbFRha2VuQnlQbGF5ZXIyID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VsbFRha2VuQnlQbGF5ZXIyXCIpO1xuICAgICAgICBjb25zdCBjZWxsVGFrZW5CeVBsYXllcjMgPVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjZWxsVGFrZW5CeVBsYXllcjNcIik7XG4gICAgICAgIGNvbnN0IGNlbGxUYWtlbkJ5UGxheWVyM0NydWlzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgIFwiY2VsbFRha2VuQnlQbGF5ZXIzQ3J1aXNlclwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNlbGxUYWtlbkJ5UGxheWVyNCA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNlbGxUYWtlbkJ5UGxheWVyNFwiKTtcbiAgICAgICAgY29uc3QgY2VsbFRha2VuQnlQbGF5ZXI1ID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VsbFRha2VuQnlQbGF5ZXI1XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxUYWtlbkJ5UGxheWVyMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHRlc3QxID0gSlNPTi5wYXJzZShgWyR7Y2VsbFRha2VuQnlQbGF5ZXIyW2ldLnRleHRDb250ZW50fV1gKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0ZXN0MVswXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzBdICYmXG4gICAgICAgICAgICB0ZXN0MVsxXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0b0JlUmV0dXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICBgY2VsbFRha2VuQnlQbGF5ZXIyICR7aX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbFRha2VuQnlQbGF5ZXIzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgdGVzdDEgPSBKU09OLnBhcnNlKGBbJHtjZWxsVGFrZW5CeVBsYXllcjNbal0udGV4dENvbnRlbnR9XWApO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRlc3QxWzBdID09PSByYW5kb21DUFVhdHRhY2tbMF0gJiZcbiAgICAgICAgICAgIHRlc3QxWzFdID09PSByYW5kb21DUFVhdHRhY2tbMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRvQmVSZXR1cm5lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgIGBjZWxsVGFrZW5CeVBsYXllcjMgJHtqfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgY29uc3QgdGVzdDEgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgYFske2NlbGxUYWtlbkJ5UGxheWVyM0NydWlzZXJba10udGV4dENvbnRlbnR9XWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRlc3QxWzBdID09PSByYW5kb21DUFVhdHRhY2tbMF0gJiZcbiAgICAgICAgICAgIHRlc3QxWzFdID09PSByYW5kb21DUFVhdHRhY2tbMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRvQmVSZXR1cm5lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgIGBjZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyICR7a31gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgY2VsbFRha2VuQnlQbGF5ZXI0Lmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgY29uc3QgdGVzdDEgPSBKU09OLnBhcnNlKGBbJHtjZWxsVGFrZW5CeVBsYXllcjRbbF0udGV4dENvbnRlbnR9XWApO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRlc3QxWzBdID09PSByYW5kb21DUFVhdHRhY2tbMF0gJiZcbiAgICAgICAgICAgIHRlc3QxWzFdID09PSByYW5kb21DUFVhdHRhY2tbMV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRvQmVSZXR1cm5lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgIGBjZWxsVGFrZW5CeVBsYXllcjQgJHtsfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBjZWxsVGFrZW5CeVBsYXllcjUubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICBjb25zdCB0ZXN0MSA9IEpTT04ucGFyc2UoYFske2NlbGxUYWtlbkJ5UGxheWVyNVttXS50ZXh0Q29udGVudH1dYCk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGVzdDFbMF0gPT09IHJhbmRvbUNQVWF0dGFja1swXSAmJlxuICAgICAgICAgICAgdGVzdDFbMV0gPT09IHJhbmRvbUNQVWF0dGFja1sxXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdG9CZVJldHVybmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgYGNlbGxUYWtlbkJ5UGxheWVyNSAke219YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG9CZVJldHVybmVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBhdHRhY2tlZENlbGxJbmRleCA9IGlzQXJyYXlJbkFycmF5KFxuICAgICAgICAgICAgYm9hcmQxLmJvYXJkLFxuICAgICAgICAgICAgcmFuZG9tQ1BVYXR0YWNrXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0b0JlUmV0dXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgYGNlbGwxICR7YXR0YWNrZWRDZWxsSW5kZXh9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvQmVSZXR1cm5lZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNlbGxUb0JlTW9kaWZpZWQgPSBjbGFzc0NoZWNrZXIoKTtcblxuICAgICAgaWYgKGJvYXJkMS5yZWNlaXZlQXR0YWNrKHJhbmRvbUNQVWF0dGFjaykgPT09IHRydWUpIHtcbiAgICAgICAgY2VsbFRvQmVNb2RpZmllZFswXS5jbGFzc0xpc3QudmFsdWUgPSBcImNlbGxUYWtlbkJ5Q29tcHV0ZXJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNwdUF0dGFja3MucHVzaChyYW5kb21DUFVhdHRhY2spO1xuICAgICAgICBjZWxsVG9CZU1vZGlmaWVkWzBdLmNsYXNzTGlzdC52YWx1ZSA9IFwiZW1wdHlcIjtcbiAgICAgICAgLy8gY2VsbFRvQmVNb2RpZmllZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkQ2VsbENsaWNrKTtcbiAgICAgIH1cbiAgICAgIGxldCBzdW5rZW5Db3VudGVyMSA9IDA7XG4gICAgICBib2FyZDEuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyMSArPSAxO1xuICAgICAgICBpZiAoc3Vua2VuQ291bnRlcjEgPT09IDUpIGFsZXJ0KFwiUm9ib3Qgd2lucyFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDZWxsQ2xpY2spO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvaW5GbGlwKCkge1xuICBjb25zdCBtaW4gPSAwO1xuICBjb25zdCBtYXggPSAyO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBmdW5jdGlvbiBib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZFRvUmV0dXJuID0gW107XG4gICAgLy8gY29uc3QgYm9hcmRUb1JldHVybiA9IG5ldyBBcnJheSgxMCkuZmlsbChuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGJvYXJkVG9SZXR1cm4ucHVzaChbaSwgal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmRUb1JldHVybjtcbiAgfVxuICBmdW5jdGlvbiBpc0FycmF5SW5BcnJheShhcnIsIGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICBjb25zdCBjb250YWlucyA9IGFyci5zb21lKChlbGUpID0+IEpTT04uc3RyaW5naWZ5KGVsZSkgPT09IGl0ZW1Bc1N0cmluZyk7XG4gICAgcmV0dXJuIGNvbnRhaW5zO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmVsb25nc1RvUGxheWVyOiBmYWxzZSxcbiAgICBzaGlwcyxcbiAgICBib2FyZDogYm9hcmQoKSxcbiAgICBhbGxTaGlwc1N1bmtlbjogZmFsc2UsXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgcGxhY2UoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnRbMF0gPiA5IHx8IGVsZW1lbnRbMF0gPCAwIHx8IGVsZW1lbnRbMV0gPiA5IHx8IGVsZW1lbnRbMV0gPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlIG91dCBvZiBib3VuZHMuIENoZWNrIGFsbCBjb29yZGluYXRlcyEnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzaGlwcy5wdXNoKFNoaXAoLi4uY29vcmRpbmF0ZXMpKTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIGxldCBzdW5rZW5Db3VudGVyID0gMDtcbiAgICAgIGxldCB0b0JlUmV0dXJuZWQgPSBmYWxzZTtcbiAgICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKGlzQXJyYXlJbkFycmF5KHNoaXAubG9jYXRpb25bMF0sIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyICs9IDE7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdW5rZW5Db3VudGVyID09PSA1KSBhbGVydCgnR2FtZSBlbmRlZCEnKTtcbiAgICAgIGlmIChjYWxsZWQgPT09IHRydWUpIHRvQmVSZXR1cm5lZCA9IHRydWU7XG4gICAgICByZXR1cm4gdG9CZVJldHVybmVkO1xuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IHBsYWNlU2hpcHMgZnJvbSBcIi4vcGxhY2VTaGlwcy5qc1wiO1xuaW1wb3J0IHBsYWNlU2hpcHNBSSBmcm9tIFwiLi9wbGFjZVNoaXBzQUkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZCgpIHtcbiAgY29uc3QgY3B1QXR0YWNrcyA9IFtdO1xuICBjb25zdCBpc1JlYWR5ID0gZmFsc2U7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3R2FtZUJ1dHRvblwiKTtcbiAgY29uc3QgYm9hcmQxQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDFDb250YWluZXJcIik7XG4gIGNvbnN0IGJvYXJkMkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQyQ29udGFpbmVyXCIpO1xuICBjb25zdCB3ZWJCb2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkMVwiKTtcbiAgY29uc3Qgd2ViQm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDJcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkZWFjdGl2YXRlZFwiKTtcbiAgbmV3R2FtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVhY3RpdmF0ZWRcIik7XG4gIGJvYXJkMUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImJvYXJkMWNvbnRhaW5lciBhY3RpdmF0ZWRcIjtcbiAgYm9hcmQyQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiYm9hcmQxY29udGFpbmVyIGFjdGl2YXRlZFwiO1xuICBjb25zdCBib2FyZDEgPSBnYW1lQm9hcmQoKTtcbiAgYm9hcmQxLmJlbG9uZ3NUb1BsYXllciA9IHRydWU7XG4gIGNvbnN0IGJvYXJkMiA9IGdhbWVCb2FyZCgpO1xuICBsZXQgY2VsbE51bWJlciA9IDA7XG4gIGJvYXJkMS5ib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBgJHtjZWxsWzBdfSwgJHtjZWxsWzFdfWA7XG4gICAgYm9hcmRDZWxsLmNsYXNzTGlzdCA9IFwiY2VsbDFcIjtcbiAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZChgJHtjZWxsTnVtYmVyfWApO1xuICAgIGNlbGxOdW1iZXIgKz0gMTtcbiAgICBib2FyZDEuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5sb2NhdGlvbi5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdpZmllZENvb3JkcyA9IEpTT04uc3RyaW5naWZ5KGNlbGwpO1xuICAgICAgICBjb25zdCBzdHJpbmdpZmllZExvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pO1xuICAgICAgICBpZiAoc3RyaW5naWZpZWRMb2NhdGlvbiA9PT0gc3RyaW5naWZpZWRDb29yZHMpIHtcbiAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0ID0gXCJjZWxsVGFrZW5CeVBsYXllclwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB3ZWJCb2FyZDEuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbiAgfSk7XG4gIGJvYXJkMi5ib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmdW5jdGlvbiBib2FyZENlbGxDbGljaygpIHtcbiAgICAgIGNvbnN0IGNlbGxDb250ZW50cyA9IGBbJHtib2FyZENlbGwudGV4dENvbnRlbnR9XWA7XG4gICAgICBpZiAoYm9hcmQyLnJlY2VpdmVBdHRhY2soSlNPTi5wYXJzZShjZWxsQ29udGVudHMpKSA9PT0gdHJ1ZSkge1xuICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJlbXB0eVwiKTtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsMlwiKTtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsVGFrZW5CeVBsYXllclwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmQyLnJlY2VpdmVBdHRhY2soSlNPTi5wYXJzZShjZWxsQ29udGVudHMpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdCA9IFwiZW1wdHlcIjtcbiAgICAgICAgYm9hcmRDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib2FyZENlbGxDbGljayk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzdW5rZW5Db3VudGVyID0gMDtcbiAgICAgIGJvYXJkMi5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmlzU3Vua2VuUHJvcGVydHkgPT09IHRydWUpIHN1bmtlbkNvdW50ZXIgKz0gMTtcbiAgICAgICAgaWYgKHN1bmtlbkNvdW50ZXIgPT09IDUpIGFsZXJ0KFwiSHVtYW4gd2lucyFcIik7XG4gICAgICB9KTtcbiAgICAgIGJvYXJkMS5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmlzU3Vua2VuUHJvcGVydHkgPT09IHRydWUpIHN1bmtlbkNvdW50ZXIgKz0gMTtcbiAgICAgICAgaWYgKHN1bmtlbkNvdW50ZXIgPT09IDUpIGFsZXJ0KFwiUm9ib3Qgd2lucyFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gYCR7Y2VsbFswXX0sICR7Y2VsbFsxXX1gO1xuICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QgPSBcImNlbGwyXCI7XG4gICAgd2ViQm9hcmQyLmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gIH0pO1xuICBwbGFjZVNoaXBzKGJvYXJkMSwgYm9hcmQyKTtcbiAgcGxhY2VTaGlwc0FJKGJvYXJkMik7XG59XG4iLCJpbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBnZW5lcmF0ZUJvYXJkIGZyb20gJy4vZ2VuZXJhdGVCb2FyZC5qcyc7XG5pbXBvcnQgcGxhY2VTaGlwcyBmcm9tICcuL3BsYWNlU2hpcHMuanMnO1xuXG5jb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0dhbWVCdXR0b24nKTtcbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdlbmVyYXRlQm9hcmQoKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyR2VuZXJhdG9yKG1pbiwgbWF4LCBhcnJheSkge1xuICBmdW5jdGlvbiBpc0FycmF5SW5BcnJheShhcnIsIGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICBjb25zdCBjb250YWlucyA9IGFyci5zb21lKChlbGUpID0+IEpTT04uc3RyaW5naWZ5KGVsZSkgPT09IGl0ZW1Bc1N0cmluZyk7XG4gICAgcmV0dXJuIGNvbnRhaW5zO1xuICB9XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIGNvbnN0IGZpcnN0TnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgY29uc3Qgc2Vjb25kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgLy8gaWYgKHZlcnRpY2FsICE9PSB1bmRlZmluZWQpIHtcbiAgLy8gICByZXR1cm4gW3ZlcnRpY2FsLCBzZWNvbmROdW1iZXJdO1xuICAvLyB9IGlmIChob3Jpem9udGFsICE9PSB1bmRlZmluZWQpIHtcbiAgLy8gICByZXR1cm4gW2ZpcnN0TnVtYmVyLCBob3Jpem9udGFsXTtcbiAgLy8gfVxuICBpZiAoaXNBcnJheUluQXJyYXkoYXJyYXksIFtmaXJzdE51bWJlciwgc2Vjb25kTnVtYmVyXSkpIHJldHVybiBudW1iZXJHZW5lcmF0b3IobWluLCBtYXgsIGFycmF5KTtcbiAgcmV0dXJuIFtmaXJzdE51bWJlciwgc2Vjb25kTnVtYmVyXTtcbn1cbiIsImltcG9ydCBhZGRTaGlwVG9Cb2FyZCBmcm9tIFwiLi9hZGRTaGlwVG9Cb2FyZC5qc1wiO1xuaW1wb3J0IGF0dGFja0xvZ2ljIGZyb20gXCIuL2F0dGFja0xvZ2ljLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlU2hpcHMoYm9hcmQsIG9wcEJvYXJkKSB7XG4gIGNvbnN0IGJvYXJkMVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDFTaGlwc1wiKTtcbiAgY29uc3QgY2FycmllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJyaWVyMS50ZXh0Q29udGVudCA9IFwiQ2FycmllciAoNSBjZWxscylcIjtcbiAgY29uc3QgYmF0dGxlc2hpcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXR0bGVzaGlwMS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcCAoNCBjZWxscylcIjtcbiAgY29uc3QgY3J1aXNlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcnVpc2VyMS50ZXh0Q29udGVudCA9IFwiQ3J1aXNlciAoMyBjZWxscylcIjtcbiAgY29uc3Qgc3VibWFyaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1hcmluZTEudGV4dENvbnRlbnQgPSBcIlN1Ym1hcmluZSAoMyBjZWxscylcIjtcbiAgY29uc3QgZGVzdHJveWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3Ryb3llcjEudGV4dENvbnRlbnQgPSBcIkRlc3Ryb3llciAoMiBjZWxscylcIjtcbiAgY29uc3QgcGxheWVyMVNoaXBzID0gW1xuICAgIGNhcnJpZXIxLFxuICAgIGJhdHRsZXNoaXAxLFxuICAgIGNydWlzZXIxLFxuICAgIHN1Ym1hcmluZTEsXG4gICAgZGVzdHJveWVyMSxcbiAgXTtcbiAgY29uc3QgY2FycmllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJyaWVyMi50ZXh0Q29udGVudCA9IFwiQ2FycmllciAoNSBjZWxscylcIjtcbiAgY29uc3QgYmF0dGxlc2hpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXR0bGVzaGlwMi50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcCAoNCBjZWxscylcIjtcbiAgY29uc3QgY3J1aXNlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcnVpc2VyMi50ZXh0Q29udGVudCA9IFwiQ3J1aXNlciAoMyBjZWxscylcIjtcbiAgY29uc3Qgc3VibWFyaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1hcmluZTIudGV4dENvbnRlbnQgPSBcIlN1Ym1hcmluZSAoMyBjZWxscylcIjtcbiAgY29uc3QgZGVzdHJveWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3Ryb3llcjIudGV4dENvbnRlbnQgPSBcIkRlc3Ryb3llciAoMiBjZWxscylcIjtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzRm9yU2hpcChlKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhZGRTaGlwVG9Cb2FyZChlKTtcbiAgICBib2FyZC5wbGFjZShyZXNwb25zZSk7XG4gICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldENvb3Jkc0ZvclNoaXApO1xuICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgIGlmIChib2FyZC5zaGlwcy5sZW5ndGggPT09IDUpIGF0dGFja0xvZ2ljKGJvYXJkLCBvcHBCb2FyZCk7XG4gIH1cbiAgcGxheWVyMVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBib2FyZDFTaGlwcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRDb29yZHNGb3JTaGlwKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgYWRkU2hpcFRvQm9hcmRBSSBmcm9tIFwiLi9hZGRTaGlwVG9Cb2FyZEFJLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlU2hpcHNBSShib2FyZCwgb3BwQm9hcmQpIHtcbiAgY29uc3QgYm9hcmQyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkMlNoaXBzXCIpO1xuICBjb25zdCB0YWtlbkNlbGxzID0gW107XG4gIGNvbnN0IGNhcnJpZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FycmllcjIudGV4dENvbnRlbnQgPSBcIkNhcnJpZXIgKDUgY2VsbHMpXCI7XG4gIGNvbnN0IGJhdHRsZXNoaXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmF0dGxlc2hpcDIudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXAgKDQgY2VsbHMpXCI7XG4gIGNvbnN0IGNydWlzZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3J1aXNlcjIudGV4dENvbnRlbnQgPSBcIkNydWlzZXIgKDMgY2VsbHMpXCI7XG4gIGNvbnN0IHN1Ym1hcmluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtYXJpbmUyLnRleHRDb250ZW50ID0gXCJTdWJtYXJpbmUgKDMgY2VsbHMpXCI7XG4gIGNvbnN0IGRlc3Ryb3llcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXN0cm95ZXIyLnRleHRDb250ZW50ID0gXCJEZXN0cm95ZXIgKDIgY2VsbHMpXCI7XG4gIGNvbnN0IHBsYXllcjJTaGlwcyA9IFtcbiAgICBjYXJyaWVyMixcbiAgICBiYXR0bGVzaGlwMixcbiAgICBjcnVpc2VyMixcbiAgICBzdWJtYXJpbmUyLFxuICAgIGRlc3Ryb3llcjIsXG4gIF07XG4gIHBsYXllcjJTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgYm9hcmQyU2hpcHMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuICBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHNGb3JTaGlwKGUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZFNoaXBUb0JvYXJkQUkoZSwgdGFrZW5DZWxscyk7XG4gICAgcmVzcG9uc2UuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgdGFrZW5DZWxscy5wdXNoKGNlbGwpO1xuICAgIH0pO1xuICAgIGJvYXJkLnBsYWNlKHJlc3BvbnNlKTtcbiAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRDb29yZHNGb3JTaGlwKTtcbiAgICBlLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICB9XG4gIGdldENvb3Jkc0ZvclNoaXAoY2FycmllcjIpO1xuICBnZXRDb29yZHNGb3JTaGlwKGJhdHRsZXNoaXAyKTtcbiAgZ2V0Q29vcmRzRm9yU2hpcChjcnVpc2VyMik7XG4gIGdldENvb3Jkc0ZvclNoaXAoc3VibWFyaW5lMik7XG4gIGdldENvb3Jkc0ZvclNoaXAoZGVzdHJveWVyMik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKC4uLmNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gY29vcmRpbmF0ZXM7XG4gIGxldCBsZW5ndGggPSAwO1xuICBsb2NhdGlvblswXS5mb3JFYWNoKCgpID0+IHtcbiAgICBsZW5ndGggKz0gMTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaGl0czogMCxcbiAgICBsZW5ndGgsXG4gICAgaXNTdW5rZW5Qcm9wZXJ0eTogZmFsc2UsXG4gICAgaGl0KGhpdHMpIHtcbiAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pc1N1bmtlblByb3BlcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvY2F0aW9uLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImFkZFNoaXBUb0JvYXJkIiwiZSIsImlzQXJyYXlJbkFycmF5IiwiYXJyIiwiaXRlbSIsIml0ZW1Bc1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250YWlucyIsInNvbWUiLCJlbGUiLCJhcnJheU9mQ29vcmRzIiwibnVtYmVyT2ZDZWxscyIsImNvdW50ZXIiLCJjbGFzc0NvdW50ZXIiLCJ0YXJnZXQiLCJzdHlsZSIsImNvbG9yIiwiY2hlY2tNYXJrRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjcm9zc01hcmtEaXYiLCJhcHBlbmRDaGlsZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5jbHVkZXMiLCJjbGFzc1RvQmVBZGRlZCIsImFsbFAxQ2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29vcmRpbmF0ZXMiLCJmIiwidG9Db21wYXJlMSIsInNsaWNlIiwidG9Db21wYXJlMCIsInRvQmVBZGRlZCIsInBhcnNlIiwibGVuZ3RoIiwidG9Db21wYXJlMiIsImNsYXNzTGlzdCIsInB1c2giLCJmb3JFYWNoIiwiY2VsbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhbGVydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsImNlbGxzVGFrZW4iLCJyZW1vdmUiLCJhZGQiLCJhbGxCb2FyZDFDZWxscyIsIm51bWJlckdlbmVyYXRvciIsImNvaW5GbGlwIiwiYWRkU2hpcFRvQm9hcmRBSSIsImFycmF5IiwiY29vcmRzRmlsdGVyIiwibnVtYmVyIiwicmFuZG9tMSIsInJhbmRvbTIiLCJyYW5kb20zIiwib3JpZ2luYWxOdW0iLCJ0b0NvbXBhcmUiLCJ1bmRlZmluZWQiLCJOYU4iLCJ0YWtlbkNlbGxzIiwic2Vjb25kT3JpZ2luYWwiLCJudW1iZXIxIiwiY29vcmQiLCJhdHRhY2tMb2dpYyIsImJvYXJkMSIsImJvYXJkMiIsImlzQXJyYXlJbkFycmF5T3JpZ2luYWwiLCJjcHVBdHRhY2tzIiwiYm9hcmQxQ2VsbHMiLCJib2FyZDJDZWxscyIsImJvYXJkQ2VsbENsaWNrIiwiY2VsbDJDb250ZW50cyIsInJlY2VpdmVBdHRhY2siLCJzdW5rZW5Db3VudGVyMiIsInNoaXBzIiwic2hpcCIsImlzU3Vua2VuUHJvcGVydHkiLCJyYW5kb21DUFVhdHRhY2siLCJjbGFzc0NoZWNrZXIiLCJ0b0JlUmV0dXJuZWQiLCJjZWxsVGFrZW5CeVBsYXllcjIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2VsbFRha2VuQnlQbGF5ZXIzIiwiY2VsbFRha2VuQnlQbGF5ZXIzQ3J1aXNlciIsImNlbGxUYWtlbkJ5UGxheWVyNCIsImNlbGxUYWtlbkJ5UGxheWVyNSIsImkiLCJ0ZXN0MSIsImoiLCJrIiwibCIsIm0iLCJhdHRhY2tlZENlbGxJbmRleCIsImJvYXJkIiwiY2VsbFRvQmVNb2RpZmllZCIsInZhbHVlIiwic3Vua2VuQ291bnRlcjEiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJTaGlwIiwiZ2FtZUJvYXJkIiwiYm9hcmRUb1JldHVybiIsImJlbG9uZ3NUb1BsYXllciIsImFsbFNoaXBzU3Vua2VuIiwibWlzc2VkQXR0YWNrcyIsInBsYWNlIiwiZWxlbWVudCIsIkVycm9yIiwic3Vua2VuQ291bnRlciIsImNhbGxlZCIsImxvY2F0aW9uIiwiaGl0IiwicGxhY2VTaGlwcyIsInBsYWNlU2hpcHNBSSIsImdlbmVyYXRlQm9hcmQiLCJpc1JlYWR5IiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwibmV3R2FtZUJ1dHRvbiIsImJvYXJkMUNvbnRhaW5lciIsImJvYXJkMkNvbnRhaW5lciIsIndlYkJvYXJkMSIsIndlYkJvYXJkMiIsImNlbGxOdW1iZXIiLCJib2FyZENlbGwiLCJzdHJpbmdpZmllZENvb3JkcyIsInN0cmluZ2lmaWVkTG9jYXRpb24iLCJjZWxsQ29udGVudHMiLCJjc3MiLCJjZWlsIiwiZmlyc3ROdW1iZXIiLCJzZWNvbmROdW1iZXIiLCJvcHBCb2FyZCIsImJvYXJkMVNoaXBzIiwiY2FycmllcjEiLCJiYXR0bGVzaGlwMSIsImNydWlzZXIxIiwic3VibWFyaW5lMSIsImRlc3Ryb3llcjEiLCJwbGF5ZXIxU2hpcHMiLCJjYXJyaWVyMiIsImJhdHRsZXNoaXAyIiwiY3J1aXNlcjIiLCJzdWJtYXJpbmUyIiwiZGVzdHJveWVyMiIsImdldENvb3Jkc0ZvclNoaXAiLCJyZXNwb25zZSIsImJvYXJkMlNoaXBzIiwicGxheWVyMlNoaXBzIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=