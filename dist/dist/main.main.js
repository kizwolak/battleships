(self.webpackChunkrestaurant_page =
  self.webpackChunkrestaurant_page || []).push([
  ["main"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*! *************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \************************************************************ */
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        const ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/Gruppo-Regular.ttf */ "./src/fonts/Gruppo-Regular.ttf"
          ),
          __webpack_require__.b
        );
        const ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ../../../../src/images/WIKIPEDIA15_BATTLESHIP.svg */ "./src/images/WIKIPEDIA15_BATTLESHIP.svg"
          ),
          __webpack_require__.b
        );
        const ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        const ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        const ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `@font-face {\n    font-family: 'Gruppo';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@keyframes opacityAnimation {\n    0% {\n        opacity: 0 \n    }\n    50% {\n        opacity: 0.5;\n        display: block;\n    }\n    100% {\n        opacity: 1\n    }\n}\n\n@keyframes colourAnimation {\n    0% { color: black; }\n    100% { color: #ff124f}\n}\n\n@keyframes visibilityAnimationHidden {\n    100% { visibility: hidden; }\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Gruppo', sans-serif;\n    background-color: #602080;\n}\n\nh1 {\n    font-size: 6em;\n    color: #ff00a0;\n    background-color: transparent;\n    animation: opacityAnimation 1s ease-in;\n}\n\n.title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 50vh;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-repeat: no-repeat;\n    background-size: 75%;\n    background-position: center;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.boardContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    height: 80vh;\n    width: 100vw;\n    margin-top: 3.5em;\n}\n\n.board1, .board2 {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    justify-content: center;\n    width: 20vw;\n    height: 40vw;\n}\n\n.board1container {\n    width: 100%;\n    height: 100%;\n}\n\n.board1container.activated {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5em;\n}\n\n.player1Name, .player2Name {\n    font-size: 3em;\n}\n\n.board1Ships, .board2Ships {\n    font-size: 2em;\n    margin-bottom: 1.5em;\n    background-color: transparent;\n    font-weight: bold;\n}\n\n.board1Ships > *:hover, .board2Ships > *:hover {\n    color: green;\n    font-weight: bold;\n}\n\n.cell1, .cell2 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;  \n}\n\n.cellTakenByPlayer {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.cellTakenByComputer {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #edf84f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.cellTakenByPlayer3Cruiser {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer2 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer3 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer4 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer5 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.cell1:hover, .cell2:hover {\n    transition: 0.4s;\n    background-color: #fe75fe;\n}\n\n.empty {\n    background-color: #33163a;\n    width: 4em;\n    height: 4em;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;\n    border: 1px solid black;\n}\n\nbutton {\n    font-weight: bold;\n    border: none;\n    background-color: transparent;\n    font-size: 2.5em;\n    animation: opacityAnimation 1s ease-in;\n}\n\nbutton:hover {\n    color: #ff124f;\n    transition: 0.3s;\n}\n\n.deactivated {\n    animation: visibilityAnimationHidden 2s ease-out;\n    opacity: 0;\n    display: none;\n    transition: opacity 1.5s display 1.5s linear;\n}\n\n.activated {\n    animation: opacityAnimation 3s ease-in;\n}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              "@font-face {\n    font-family: 'Gruppo';\n    src: url(./fonts/Gruppo-Regular.ttf);\n}\n\n@keyframes opacityAnimation {\n    0% {\n        opacity: 0 \n    }\n    50% {\n        opacity: 0.5;\n        display: block;\n    }\n    100% {\n        opacity: 1\n    }\n}\n\n@keyframes colourAnimation {\n    0% { color: black; }\n    100% { color: #ff124f}\n}\n\n@keyframes visibilityAnimationHidden {\n    100% { visibility: hidden; }\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Gruppo', sans-serif;\n    background-color: #602080;\n}\n\nh1 {\n    font-size: 6em;\n    color: #ff00a0;\n    background-color: transparent;\n    animation: opacityAnimation 1s ease-in;\n}\n\n.title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 50vh;\n    background-image: url('/src/images/WIKIPEDIA15_BATTLESHIP.svg');\n    background-repeat: no-repeat;\n    background-size: 75%;\n    background-position: center;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.boardContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    height: 80vh;\n    width: 100vw;\n    margin-top: 3.5em;\n}\n\n.board1, .board2 {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    justify-content: center;\n    width: 20vw;\n    height: 40vw;\n}\n\n.board1container {\n    width: 100%;\n    height: 100%;\n}\n\n.board1container.activated {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5em;\n}\n\n.player1Name, .player2Name {\n    font-size: 3em;\n}\n\n.board1Ships, .board2Ships {\n    font-size: 2em;\n    margin-bottom: 1.5em;\n    background-color: transparent;\n    font-weight: bold;\n}\n\n.board1Ships > *:hover, .board2Ships > *:hover {\n    color: green;\n    font-weight: bold;\n}\n\n.cell1, .cell2 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;  \n}\n\n.cellTakenByPlayer {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.cellTakenByComputer {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #edf84f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.cellTakenByPlayer3Cruiser {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer2 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer3 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer4 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.cellTakenByPlayer5 {\n    border: 1px solid black;\n    width: 4em;\n    height: 4em;\n    color: transparent;\n    background-color: #ff124f;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.cell1:hover, .cell2:hover {\n    transition: 0.4s;\n    background-color: #fe75fe;\n}\n\n.empty {\n    background-color: #33163a;\n    width: 4em;\n    height: 4em;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;\n    border: 1px solid black;\n}\n\nbutton {\n    font-weight: bold;\n    border: none;\n    background-color: transparent;\n    font-size: 2.5em;\n    animation: opacityAnimation 1s ease-in;\n}\n\nbutton:hover {\n    color: #ff124f;\n    transition: 0.3s;\n}\n\n.deactivated {\n    animation: visibilityAnimationHidden 2s ease-out;\n    opacity: 0;\n    display: none;\n    transition: opacity 1.5s display 1.5s linear;\n}\n\n.activated {\n    animation: opacityAnimation 3s ease-in;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;
        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          const list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map((item) => {
              let content = "";
              const needLayer = typeof item[5] !== "undefined";
              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }
              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }
              if (needLayer) {
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
            const alreadyImportedModules = {};
            if (dedupe) {
              for (let k = 0; k < this.length; k++) {
                const id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (let _k = 0; _k < modules.length; _k++) {
              const item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };
        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*! ********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \******************************************************* */
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
        };
        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*! ************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************** */
      /***/ (module) => {
        module.exports = function (item) {
          const content = item[1];
          const cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            const base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            const data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            const sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };
        /***/
      },

    /***/ "./src/style.css":
      /*! ***********************!*\
  !*** ./src/style.css ***!
  \********************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ const _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        const options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        const update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default,
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__
            .default.locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__
                .default.locals
            : undefined;
        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
      /***/ (module) => {
        const stylesInDOM = [];

        function getIndexByIdentifier(identifier) {
          let result = -1;

          for (let i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          const idCountMap = {};
          const identifiers = [];

          for (let i = 0; i < list.length; i++) {
            const item = list[i];
            const id = options.base ? item[0] + options.base : item[0];
            const count = idCountMap[id] || 0;
            const identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            const indexByIdentifier = getIndexByIdentifier(identifier);
            const obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };

            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              const updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier,
                updater,
                references: 1,
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function addElementStyle(obj, options) {
          const api = options.domAPI(options);
          api.update(obj);

          const updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };

          return updater;
        }

        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          let lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            for (let i = 0; i < lastIdentifiers.length; i++) {
              const identifier = lastIdentifiers[i];
              const index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }

            const newLastIdentifiers = modulesToDom(newList, options);

            for (let _i = 0; _i < lastIdentifiers.length; _i++) {
              const _identifier = lastIdentifiers[_i];

              const _index = getIndexByIdentifier(_identifier);

              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();

                stylesInDOM.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };
        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
      /***/ (module) => {
        const memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            let styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
          const target = getTarget(insert);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;
        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          const element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;
        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          const nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;
        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          let css = "";

          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }

          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }

          const needLayer = typeof obj.layer !== "undefined";

          if (needLayer) {
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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

          const { sourceMap } = obj;

          if (sourceMap && typeof btoa !== "undefined") {
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
          const styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }

        module.exports = domAPI;
        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
      /***/ (module) => {
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
        /***/
      },

    /***/ "./src/fonts/Gruppo-Regular.ttf":
      /*! **************************************!*\
  !*** ./src/fonts/Gruppo-Regular.ttf ***!
  \************************************* */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}2393675620be8c54ff95.ttf`;
        /***/
      },

    /***/ "./src/images/WIKIPEDIA15_BATTLESHIP.svg":
      /*! ***********************************************!*\
  !*** ./src/images/WIKIPEDIA15_BATTLESHIP.svg ***!
  \********************************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}921b2ece482ed9983bb5.svg`;
        /***/
      },

    /***/ "./src/addShipToBoard.js":
      /*! *******************************!*\
  !*** ./src/addShipToBoard.js ***!
  \****************************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ addShipToBoard,
          /* harmony export */
        });
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return (
            (_typeof =
              typeof Symbol === "function" &&
              typeof Symbol.iterator === "symbol"
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      typeof Symbol === "function" &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _regeneratorRuntime() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {};
          const Op = Object.prototype;
          const hasOwn = Op.hasOwnProperty;
          const defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            };
          const $Symbol = typeof Symbol === "function" ? Symbol : {};
          const iteratorSymbol = $Symbol.iterator || "@@iterator";
          const asyncIteratorSymbol =
            $Symbol.asyncIterator || "@@asyncIterator";
          const toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            const protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            const generator = Object.create(protoGenerator.prototype);
            const context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, "_invoke", {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }
          exports.wrap = wrap;
          const ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          let IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          const getProto = Object.getPrototypeOf;
          const NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          const Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach((method) => {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              const record = tryCatch(generator[method], generator, arg);
              if (record.type !== "throw") {
                const result = record.arg;
                const { value } = result;
                return value &&
                  _typeof(value) == "object" &&
                  hasOwn.call(value, "__await")
                  ? PromiseImpl.resolve(value.__await).then(
                      (value) => {
                        invoke("next", value, resolve, reject);
                      },
                      (err) => {
                        invoke("throw", err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      (unwrapped) => {
                        (result.value = unwrapped), resolve(result);
                      },
                      (error) => invoke("throw", error, resolve, reject)
                    );
              }
              reject(record.arg);
            }
            let previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl((resolve, reject) => {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            let state = "suspendedStart";
            return function (method, arg) {
              if (state === "executing")
                throw new Error("Generator is already running");
              if (state === "completed") {
                if (method === "throw") throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                const { delegate } = context;
                if (delegate) {
                  const delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if (context.method === "next")
                  context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                  if (state === "suspendedStart")
                    throw ((state = "completed"), context.arg);
                  context.dispatchException(context.arg);
                } else
                  context.method === "return" &&
                    context.abrupt("return", context.arg);
                state = "executing";
                const record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  if (
                    ((state = context.done ? "completed" : "suspendedYield"),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                record.type === "throw" &&
                  ((state = "completed"),
                  (context.method = "throw"),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            const methodName = context.method;
            const method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                (methodName === "throw" &&
                  delegate.iterator.return &&
                  ((context.method = "return"),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  context.method === "throw")) ||
                  (methodName !== "return" &&
                    ((context.method = "throw"),
                    (context.arg = new TypeError(
                      `The iterator does not provide a '${methodName}' method`
                    )))),
                ContinueSentinel
              );
            const record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw")
              return (
                (context.method = "throw"),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            const info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  context.method !== "return" &&
                    ((context.method = "next"), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = "throw"),
                (context.arg = new TypeError(
                  "iterator result is not an object"
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            const entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            const record = entry.completion || {};
            (record.type = "normal"),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              const iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if (typeof iterable.next === "function") return iterable;
              if (!isNaN(iterable.length)) {
                let i = -1;
                const next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = undefined), (next.done = !0), next;
                };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              "GeneratorFunction"
            )),
            (exports.isGeneratorFunction = function (genFun) {
              const ctor = typeof genFun === "function" && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  (ctor.displayName || ctor.name) === "GeneratorFunction")
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, "GeneratorFunction")),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              const iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter
                    .next()
                    .then((result) =>
                      result.done ? result.value : iter.next()
                    );
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, "Generator"),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, "toString", () => "[object Generator]"),
            (exports.keys = function (val) {
              const object = Object(val);
              const keys = [];
              for (const key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    const key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (const name in this)
                    name.charAt(0) === "t" &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
              },
              stop: function stop() {
                this.done = !0;
                const rootRecord = this.tryEntries[0].completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                const context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = "throw"),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = "next"), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  var record = entry.completion;
                  if (entry.tryLoc === "root") return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    const hasCatch = hasOwn.call(entry, "catchLoc");
                    const hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, "finallyLoc") &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  (type === "break" || type === "continue") &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                const record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = "next"),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                return (
                  record.type === "break" || record.type === "continue"
                    ? (this.next = record.arg)
                    : record.type === "return"
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : record.type === "normal" &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    const record = entry.completion;
                    if (record.type === "throw") {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName,
                    nextLoc,
                  }),
                  this.method === "next" && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var { value } = info;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            const self = this;
            const args = arguments;
            return new Promise((resolve, reject) => {
              const gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }
        function addShipToBoard(_x) {
          return _addShipToBoard.apply(this, arguments);
        }
        function _addShipToBoard() {
          _addShipToBoard = _asyncToGenerator(
            /* #__PURE__ */ _regeneratorRuntime().mark(function _callee(e) {
              let arrayOfCoords;
              let numberOfCells;
              let counter;
              let classCounter;
              let checkMarkDiv;
              let crossMarkDiv;
              let isArrayInArray;
              return _regeneratorRuntime().wrap((_context) => {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      isArrayInArray = function _isArrayInArray(arr, item) {
                        const itemAsString = JSON.stringify(item);
                        const contains = arr.some(
                          (ele) => JSON.stringify(ele) === itemAsString
                        );
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
                      return _context.abrupt(
                        "return",
                        new Promise((resolve, reject) => {
                          if (e.target.textContent.includes("2")) {
                            numberOfCells = 2;
                          } else if (e.target.textContent.includes("3")) {
                            numberOfCells = 3;
                          } else if (e.target.textContent.includes("4")) {
                            numberOfCells = 4;
                          } else if (e.target.textContent.includes("5")) {
                            numberOfCells = 5;
                          }
                          let classToBeAdded = "cellTakenByPlayer".concat(
                            numberOfCells
                          );
                          if (e.target.textContent.includes("Cruiser")) {
                            classToBeAdded = "cellTakenByPlayer".concat(
                              numberOfCells,
                              "Cruiser"
                            );
                          }
                          const allP1Cells =
                            document.querySelectorAll(".cell1");
                          function coordinates(f) {
                            const toCompare1 = arrayOfCoords.slice(1, 2);
                            const toCompare0 = arrayOfCoords.slice(0, 1);
                            const toBeAdded = JSON.parse(
                              "[".concat(f.target.textContent, "]")
                            );
                            if (isArrayInArray(arrayOfCoords, toBeAdded))
                              return;
                            if (arrayOfCoords.length === 1) {
                              if (
                                (toCompare0[0][0] - toBeAdded[0] === 1 ||
                                  toCompare0[0][0] - toBeAdded[0] === -1) &&
                                toCompare0[0][1] - toBeAdded[1] !== 0
                              ) {
                                return;
                              }
                              if (
                                toCompare0[0][0] - toBeAdded[0] > 1 ||
                                toCompare0[0][0] - toBeAdded[0] < -1 ||
                                toCompare0[0][1] - toBeAdded[1] > 1 ||
                                toCompare0[0][1] - toBeAdded[1] < -1
                              ) {
                                return;
                              }
                              if (
                                toCompare0[0][0] - toBeAdded[0] !== 0 &&
                                toCompare0[0][1] - toBeAdded[1] === 1 &&
                                toCompare0[0][1] - toBeAdded[1] === 1
                              ) {
                                return;
                              }
                            } else if (arrayOfCoords.length > 1) {
                              const toCompare2 = arrayOfCoords.slice(
                                arrayOfCoords.length - 1,
                                arrayOfCoords.length - 0
                              );
                              // vertical check
                              if (
                                toCompare0[0][0] - toCompare1[0][0] === 1 ||
                                toCompare0[0][0] - toCompare1[0][0] === -1
                              ) {
                                if (
                                  toCompare2[0][1] - toBeAdded[1] >= 1 ||
                                  toCompare2[0][1] - toBeAdded[1] <= -1
                                ) {
                                  return;
                                }
                                if (
                                  toCompare2[0][0] - toBeAdded[0] > 1 ||
                                  toCompare2[0][0] - toBeAdded[0] < -1
                                ) {
                                  if (
                                    toCompare0[0][0] - toCompare1[0][0] ===
                                    1
                                  ) {
                                    if (toBeAdded[0] - toCompare0[0][0] !== 1) {
                                      return;
                                    }
                                  }
                                  if (
                                    toCompare0[0][0] - toCompare1[0][0] ===
                                    -1
                                  ) {
                                    if (toCompare0[0][0] - toBeAdded[0] !== 1) {
                                      return;
                                    }
                                  }
                                }
                              }
                              // horizontal check
                              if (
                                toCompare0[0][1] - toCompare1[0][1] === 1 ||
                                toCompare0[0][1] - toCompare1[0][1] === -1
                              ) {
                                if (
                                  toCompare2[0][0] - toBeAdded[0] >= 1 ||
                                  toCompare2[0][0] - toBeAdded[0] <= -1
                                ) {
                                  return;
                                }
                                if (
                                  toCompare2[0][1] - toBeAdded[1] > 1 ||
                                  toCompare2[0][1] - toBeAdded[1] < -1
                                ) {
                                  if (
                                    toCompare0[0][1] - toCompare1[0][1] ===
                                    1
                                  ) {
                                  }
                                  if (
                                    toCompare0[0][1] - toCompare1[0][1] ===
                                    -1
                                  ) 
                                }
                              }
                            }
                            f.target.classList = classToBeAdded;
                            f.target.classList += " ".concat(classCounter);
                            classCounter += 1;
                            arrayOfCoords.push(toBeAdded);
                            counter += 1;
                            if (numberOfCells === counter) {
                              allP1Cells.forEach((cell) => {
                                cell.removeEventListener("click", coordinates);
                              });
                              alert(
                                "Press the green check mark in order to confirm your choice."
                              );
                              checkMarkDiv.addEventListener("click", () => {
                                e.target.removeChild(checkMarkDiv);
                                e.target.removeChild(crossMarkDiv);
                                resolve(arrayOfCoords);
                              });
                            }
                          }
                          crossMarkDiv.addEventListener("click", () => {
                            e.target.style.color = "";
                            const cellsTaken = document.querySelectorAll(
                              ".".concat(classToBeAdded)
                            );
                            cellsTaken.forEach((cell) => {
                              cell.classList.remove("".concat(classToBeAdded));
                              cell.classList.add("cell1");
                            });
                            const allBoard1Cells =
                              document.querySelectorAll("cell1");
                            allBoard1Cells.forEach((cell) => {
                              cell.addEventListener("click", coordinates);
                            });
                            e.target.removeChild(checkMarkDiv);
                            e.target.removeChild(crossMarkDiv);
                            reject();
                          });
                          allP1Cells.forEach((cell) => {
                            cell.addEventListener("click", coordinates);
                          });
                        })
                      );
                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );
          return _addShipToBoard.apply(this, arguments);
        }
        /***/
      },

    /***/ "./src/addShipToBoardAI.js":
      /*! *********************************!*\
  !*** ./src/addShipToBoardAI.js ***!
  \******************************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ addShipToBoardAI,
          /* harmony export */
        });
        /* harmony import */ const _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./numberGenerator.js */ "./src/numberGenerator.js"
          );
        /* harmony import */ const _coinFlip_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./coinFlip.js */ "./src/coinFlip.js");
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return (
            (_typeof =
              typeof Symbol === "function" &&
              typeof Symbol.iterator === "symbol"
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      typeof Symbol === "function" &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _regeneratorRuntime() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {};
          const Op = Object.prototype;
          const hasOwn = Op.hasOwnProperty;
          const defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            };
          const $Symbol = typeof Symbol === "function" ? Symbol : {};
          const iteratorSymbol = $Symbol.iterator || "@@iterator";
          const asyncIteratorSymbol =
            $Symbol.asyncIterator || "@@asyncIterator";
          const toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            const protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            const generator = Object.create(protoGenerator.prototype);
            const context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, "_invoke", {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }
          exports.wrap = wrap;
          const ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          let IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          const getProto = Object.getPrototypeOf;
          const NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          const Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach((method) => {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              const record = tryCatch(generator[method], generator, arg);
              if (record.type !== "throw") {
                const result = record.arg;
                const { value } = result;
                return value &&
                  _typeof(value) == "object" &&
                  hasOwn.call(value, "__await")
                  ? PromiseImpl.resolve(value.__await).then(
                      (value) => {
                        invoke("next", value, resolve, reject);
                      },
                      (err) => {
                        invoke("throw", err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      (unwrapped) => {
                        (result.value = unwrapped), resolve(result);
                      },
                      (error) => invoke("throw", error, resolve, reject)
                    );
              }
              reject(record.arg);
            }
            let previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl((resolve, reject) => {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            let state = "suspendedStart";
            return function (method, arg) {
              if (state === "executing")
                throw new Error("Generator is already running");
              if (state === "completed") {
                if (method === "throw") throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                const { delegate } = context;
                if (delegate) {
                  const delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if (context.method === "next")
                  context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                  if (state === "suspendedStart")
                    throw ((state = "completed"), context.arg);
                  context.dispatchException(context.arg);
                } else
                  context.method === "return" &&
                    context.abrupt("return", context.arg);
                state = "executing";
                const record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  if (
                    ((state = context.done ? "completed" : "suspendedYield"),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                record.type === "throw" &&
                  ((state = "completed"),
                  (context.method = "throw"),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            const methodName = context.method;
            const method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                (methodName === "throw" &&
                  delegate.iterator.return &&
                  ((context.method = "return"),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  context.method === "throw")) ||
                  (methodName !== "return" &&
                    ((context.method = "throw"),
                    (context.arg = new TypeError(
                      `The iterator does not provide a '${methodName}' method`
                    )))),
                ContinueSentinel
              );
            const record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw")
              return (
                (context.method = "throw"),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            const info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  context.method !== "return" &&
                    ((context.method = "next"), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = "throw"),
                (context.arg = new TypeError(
                  "iterator result is not an object"
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            const entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            const record = entry.completion || {};
            (record.type = "normal"),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              const iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if (typeof iterable.next === "function") return iterable;
              if (!isNaN(iterable.length)) {
                let i = -1;
                const next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = undefined), (next.done = !0), next;
                };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              "GeneratorFunction"
            )),
            (exports.isGeneratorFunction = function (genFun) {
              const ctor = typeof genFun === "function" && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  (ctor.displayName || ctor.name) === "GeneratorFunction")
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, "GeneratorFunction")),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              const iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter
                    .next()
                    .then((result) =>
                      result.done ? result.value : iter.next()
                    );
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, "Generator"),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, "toString", () => "[object Generator]"),
            (exports.keys = function (val) {
              const object = Object(val);
              const keys = [];
              for (const key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    const key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (const name in this)
                    name.charAt(0) === "t" &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
              },
              stop: function stop() {
                this.done = !0;
                const rootRecord = this.tryEntries[0].completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                const context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = "throw"),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = "next"), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  var record = entry.completion;
                  if (entry.tryLoc === "root") return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    const hasCatch = hasOwn.call(entry, "catchLoc");
                    const hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, "finallyLoc") &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  (type === "break" || type === "continue") &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                const record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = "next"),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                return (
                  record.type === "break" || record.type === "continue"
                    ? (this.next = record.arg)
                    : record.type === "return"
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : record.type === "normal" &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    const record = entry.completion;
                    if (record.type === "throw") {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName,
                    nextLoc,
                  }),
                  this.method === "next" && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var { value } = info;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            const self = this;
            const args = arguments;
            return new Promise((resolve, reject) => {
              const gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function addShipToBoardAI(_x, _x2) {
          return _addShipToBoardAI.apply(this, arguments);
        }
        function _addShipToBoardAI() {
          _addShipToBoardAI = _asyncToGenerator(
            /* #__PURE__ */ _regeneratorRuntime().mark(function _callee(
              e,
              array
            ) {
              let takenCells;
              let arrayOfCoords;
              let numberOfCells;
              let counter;
              let isArrayInArray;
              let number1;
              let coordsFilter;
              return _regeneratorRuntime().wrap((_context) => {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      coordsFilter = function _coordsFilter(number) {
                        let toBeAdded = number;
                        const random1 = (0,
                        _coinFlip_js__WEBPACK_IMPORTED_MODULE_1__.default)();
                        const random2 = (0,
                        _coinFlip_js__WEBPACK_IMPORTED_MODULE_1__.default)();
                        const random3 = (0,
                        _coinFlip_js__WEBPACK_IMPORTED_MODULE_1__.default)();
                        const originalNum = arrayOfCoords.slice(0, 1);
                        let toCompare = arrayOfCoords.slice(
                          arrayOfCoords.length - 1,
                          arrayOfCoords.length
                        );
                        if (
                          toBeAdded[0] === undefined ||
                          toBeAdded[1] === undefined ||
                          toBeAdded[0] === NaN ||
                          toBeAdded[1] === NaN
                        ) {
                          toCompare = arrayOfCoords.slice(0, 1);
                          toBeAdded = (0,
                          _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                            0,
                            9,
                            takenCells
                          );
                        }
                        if (arrayOfCoords.length === 1) {
                          if (random1 === 0) {
                            if (random3 === 0) {
                              toBeAdded = [
                                toCompare[0][0] - 1,
                                toCompare[0][1],
                              ];
                            }
                            if (random3 === 1) {
                              toBeAdded = [
                                toCompare[0][0] + 1,
                                toCompare[0][1],
                              ];
                            }
                          }
                          if (random1 === 1) {
                            if (random3 === 0) {
                              toBeAdded = [
                                toCompare[0][0],
                                toCompare[0][1] - 1,
                              ];
                            }
                            if (random3 === 1) {
                              toBeAdded = [
                                toCompare[0][0],
                                toCompare[0][1] + 1,
                              ];
                            }
                          }
                        }
                        if (arrayOfCoords.length > 1) {
                          const secondOriginal = arrayOfCoords.slice(1, 2);
                          if (
                            secondOriginal[0][0] - originalNum[0][0] === 1 ||
                            secondOriginal[0][0] - originalNum[0][0] === -1
                          ) {
                            if (
                              toCompare[0][0] === 9 ||
                              toCompare[0][0] === 0
                            ) {
                              const toCompare1 = (0,
                              _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                                0,
                                9,
                                takenCells
                              );
                              if (toCompare[0][0] === 0) {
                                toCompare = [0, toCompare1[0][1]];
                              } else {
                                toCompare = [9, toCompare1[1]];
                              }
                            }
                            if (random2 === 0) {
                              toBeAdded = [
                                toCompare[0][0] - 1,
                                toCompare[0][1],
                              ];
                            }
                            if (random2 === 1) {
                              toBeAdded = [
                                toCompare[0][0] + 1,
                                toCompare[0][1],
                              ];
                            }
                            if (isArrayInArray(takenCells, toBeAdded)) return;
                            if (
                              toBeAdded[0] - originalNum[0][0] > 5 ||
                              toBeAdded - originalNum[0][0] < -5
                            )
                              return;
                          }
                          if (
                            secondOriginal[0][1] - originalNum[0][1] === 1 ||
                            secondOriginal[0][1] - originalNum[0][1] === -1
                          ) {
                            if (
                              toCompare[0][1] === 9 ||
                              toCompare[0][1] === 0
                            ) {
                              const _toCompare = (0,
                              _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                                0,
                                9,
                                takenCells
                              );
                              if (toCompare[0][1] === 0) {
                                toCompare = [_toCompare[0], 0];
                              } else {
                                toCompare = [_toCompare[0], 9];
                              }
                            }
                            if (random2 === 0) {
                              toBeAdded = [
                                toCompare[0][0],
                                toCompare[0][1] - 1,
                              ];
                            }
                            if (random2 === 1) {
                              toBeAdded = [
                                toCompare[0][0],
                                toCompare[0][1] + 1,
                              ];
                            }
                            if (isArrayInArray(takenCells, toBeAdded)) return;
                            if (
                              toBeAdded[0] - originalNum[0][0] > 5 ||
                              toBeAdded - originalNum[0][0] < -5
                            )
                              return;
                          }
                        }
                        if (
                          toBeAdded[0] === undefined ||
                          toBeAdded[0] === NaN ||
                          toBeAdded[1] === undefined ||
                          toBeAdded[1] === NaN ||
                          toBeAdded[0] < 0 ||
                          toBeAdded[1] < 0 ||
                          toBeAdded[0] > 9 ||
                          toBeAdded[1] > 9
                        ) {
                          toBeAdded = (0,
                          _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                            0,
                            9,
                            takenCells
                          );
                          arrayOfCoords = [];
                          counter = 0;
                          return;
                        }
                        if (
                          toBeAdded[0] < -1 ||
                          toBeAdded[1] < -1 ||
                          toBeAdded[0] > 9 ||
                          toBeAdded[1] > 9
                        )
                          return;
                        if (isArrayInArray(takenCells, toBeAdded)) return;
                        if (isArrayInArray(array, toBeAdded)) {
                          toBeAdded = (0,
                          _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                            0,
                            9,
                            takenCells
                          );
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
                        const itemAsString = JSON.stringify(item);
                        const contains = arr.some(
                          (ele) => JSON.stringify(ele) === itemAsString
                        );
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
                      number1 = (0,
                      _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                        0,
                        9,
                        takenCells
                      );
                      arrayOfCoords.forEach((coord) => {
                        if (isArrayInArray(array, coord)) {
                          counter = 0;
                          arrayOfCoords = [];
                        }
                      });
                      while (counter !== numberOfCells) {
                        number1 = (0,
                        _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                          0,
                          9,
                          takenCells
                        );
                        coordsFilter(number1);
                      }
                      return _context.abrupt(
                        "return",
                        new Promise((resolve) => {
                          if (numberOfCells === counter) {
                            resolve(arrayOfCoords);
                          }
                        })
                      );
                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );
          return _addShipToBoardAI.apply(this, arguments);
        }
        /***/
      },

    /***/ "./src/attackLogic.js":
      /*! ****************************!*\
  !*** ./src/attackLogic.js ***!
  \*************************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ attackLogic,
          /* harmony export */
        });
        /* harmony import */ const _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./numberGenerator.js */ "./src/numberGenerator.js"
          );

        function attackLogic(board1, board2) {
          function isArrayInArray(arr, item) {
            let counter = 0;
            const itemAsString = JSON.stringify(item);
            const contains = arr.some((ele) => {
              if (JSON.stringify(ele) === itemAsString) return true;
              if (!(JSON.stringify(ele) === itemAsString)) counter += 1;
            });
            if (counter >= arr.length) return false;
            return counter;
          }
          function isArrayInArrayOriginal(arr, item) {
            const itemAsString = JSON.stringify(item);
            const contains = arr.some(
              (ele) => JSON.stringify(ele) === itemAsString
            );
            return contains;
          }
          const cpuAttacks = [];
          const board1Cells = document.querySelectorAll(".cell1");
          const board2Cells = document.querySelectorAll(".cell2");
          board2Cells.forEach((cell) => {
            function boardCellClick() {
              const cell2Contents = "[".concat(cell.textContent, "]");
              if (board2.receiveAttack(JSON.parse(cell2Contents)) === true) {
                cell.classList = "";
                cell.classList.remove("empty");
                cell.classList.remove("cell2");
                cell.classList.add("cellTakenByPlayer");
              } else if (
                board2.receiveAttack(JSON.parse(cell2Contents)) === false
              ) {
                cell.classList = "empty";
                cell.removeEventListener("click", boardCellClick);
              }
              let sunkenCounter2 = 0;
              board2.ships.forEach((ship) => {
                if (ship.isSunkenProperty === true) sunkenCounter2 += 1;
                if (sunkenCounter2 === 5) alert("Human wins!");
              });
              let randomCPUattack = (0,
              _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                0,
                9,
                cpuAttacks
              );
              if (isArrayInArray(cpuAttacks, randomCPUattack)) {
                randomCPUattack = (0,
                _numberGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                  0,
                  9,
                  cpuAttacks
                );
              }

              function classChecker() {
                let toBeReturned;
                const cellTakenByPlayer2 =
                  document.getElementsByClassName("cellTakenByPlayer2");
                const cellTakenByPlayer3 =
                  document.getElementsByClassName("cellTakenByPlayer3");
                const cellTakenByPlayer3Cruiser =
                  document.getElementsByClassName("cellTakenByPlayer3Cruiser");
                const cellTakenByPlayer4 =
                  document.getElementsByClassName("cellTakenByPlayer4");
                const cellTakenByPlayer5 =
                  document.getElementsByClassName("cellTakenByPlayer5");
                const playerCell1 = document.getElementsByClassName("cell1");
                for (let i = 0; i < cellTakenByPlayer2.length; i++) {
                  const test1 = JSON.parse(
                    "[".concat(cellTakenByPlayer2[i].textContent, "]")
                  );
                  if (
                    test1[0] === randomCPUattack[0] &&
                    test1[1] === randomCPUattack[1]
                  ) {
                    toBeReturned = document.getElementsByClassName(
                      "cellTakenByPlayer2 ".concat(i)
                    );
                    break;
                  }
                }
                for (let j = 0; j < cellTakenByPlayer3.length; j++) {
                  const _test = JSON.parse(
                    "[".concat(cellTakenByPlayer3[j].textContent, "]")
                  );
                  if (
                    _test[0] === randomCPUattack[0] &&
                    _test[1] === randomCPUattack[1]
                  ) {
                    toBeReturned = document.getElementsByClassName(
                      "cellTakenByPlayer3 ".concat(j)
                    );
                    break;
                  }
                }
                for (let k = 0; k < cellTakenByPlayer3Cruiser.length; k++) {
                  const _test2 = JSON.parse(
                    "[".concat(cellTakenByPlayer3Cruiser[k].textContent, "]")
                  );
                  if (
                    _test2[0] === randomCPUattack[0] &&
                    _test2[1] === randomCPUattack[1]
                  ) {
                    toBeReturned = document.getElementsByClassName(
                      "cellTakenByPlayer3Cruiser ".concat(k)
                    );
                    break;
                  }
                }
                for (let l = 0; l < cellTakenByPlayer4.length; l++) {
                  const _test3 = JSON.parse(
                    "[".concat(cellTakenByPlayer4[l].textContent, "]")
                  );
                  if (
                    _test3[0] === randomCPUattack[0] &&
                    _test3[1] === randomCPUattack[1]
                  ) {
                    toBeReturned = document.getElementsByClassName(
                      "cellTakenByPlayer4 ".concat(l)
                    );
                    break;
                  }
                }
                for (let m = 0; m < cellTakenByPlayer5.length; m++) {
                  const _test4 = JSON.parse(
                    "[".concat(cellTakenByPlayer5[m].textContent, "]")
                  );
                  if (
                    _test4[0] === randomCPUattack[0] &&
                    _test4[1] === randomCPUattack[1]
                  ) {
                    toBeReturned = document.getElementsByClassName(
                      "cellTakenByPlayer5 ".concat(m)
                    );
                    break;
                  }
                }
                if (toBeReturned === undefined) {
                  const attackedCellIndex = isArrayInArray(
                    board1.board,
                    randomCPUattack
                  );
                  toBeReturned = document.getElementsByClassName(
                    "cell1 ".concat(attackedCellIndex)
                  );
                }
                return toBeReturned;
              }
              const cellToBeModified = classChecker();

              if (board1.receiveAttack(randomCPUattack) === true) {
                cellToBeModified[0].classList.value = "cellTakenByComputer";
              } else {
                cpuAttacks.push(randomCPUattack);
                cellToBeModified[0].classList.value = "empty";
              }

              let sunkenCounter1 = 0;
              board1.ships.forEach((ship) => {
                if (ship.isSunkenProperty === true) sunkenCounter1 += 1;
                if (sunkenCounter1 === 5) alert("Robot wins!");
              });
            }
            cell.addEventListener("click", boardCellClick);
          });
        }
        /***/
      },

    /***/ "./src/coinFlip.js":
      /*! *************************!*\
  !*** ./src/coinFlip.js ***!
  \************************ */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ coinFlip,
          /* harmony export */
        });
        function coinFlip() {
          const min = 0;
          const max = 2;
          return Math.floor(Math.random() * (max - min) + min);
        }
        /***/
      },

    /***/ "./src/gameBoard.js":
      /*! **************************!*\
  !*** ./src/gameBoard.js ***!
  \************************* */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ gameBoard,
          /* harmony export */
        });
        /* harmony import */ const _ship_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./ship.js */ "./src/ship.js");

        function gameBoard() {
          const ships = [];
          function board() {
            const boardToReturn = [];
            // const boardToReturn = new Array(10).fill(new Array(10).fill(0));
            for (let i = 0; i < 10; i++) {
              for (let j = 0; j < 10; j++) {
                boardToReturn.push([i, j]);
              }
            }
            return boardToReturn;
          }
          function isArrayInArray(arr, item) {
            const itemAsString = JSON.stringify(item);
            const contains = arr.some(
              (ele) => JSON.stringify(ele) === itemAsString
            );
            return contains;
          }
          return {
            belongsToPlayer: false,
            ships,
            board: board(),
            allShipsSunken: false,
            missedAttacks: [],
            place: function place() {
              for (
                var _len = arguments.length,
                  coordinates = new Array(_len),
                  _key = 0;
                _key < _len;
                _key++
              ) {
                coordinates[_key] = arguments[_key];
              }
              coordinates.forEach((element) => {
                if (
                  element[0] > 9 ||
                  element[0] < 0 ||
                  element[1] > 9 ||
                  element[1] < 0
                ) {
                  throw new Error(
                    "Coordinate out of bounds. Check all coordinates!"
                  );
                }
              });
              ships.push(
                _ship_js__WEBPACK_IMPORTED_MODULE_0__.default.apply(
                  void 0,
                  coordinates
                )
              );
            },
            receiveAttack: function receiveAttack(coordinates) {
              let sunkenCounter = 0;
              let toBeReturned = false;
              let called = false;
              ships.forEach((ship) => {
                if (isArrayInArray(ship.location[0], coordinates)) {
                  ship.hit();
                  called = true;
                }
                if (ship.isSunkenProperty === true) sunkenCounter += 1;
              });
              if (sunkenCounter === 5) alert("Game ended!");
              if (called === true) toBeReturned = true;
              return toBeReturned;
            },
          };
        }
        /***/
      },

    /***/ "./src/generateBoard.js":
      /*! ******************************!*\
  !*** ./src/generateBoard.js ***!
  \***************************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ generateBoard,
          /* harmony export */
        });
        /* harmony import */ const _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
        /* harmony import */ const _placeShips_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./placeShips.js */ "./src/placeShips.js");
        /* harmony import */ const _placeShipsAI_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./placeShipsAI.js */ "./src/placeShipsAI.js");

        function generateBoard() {
          const cpuAttacks = [];
          const isReady = false;
          const title = document.querySelector(".title");
          const newGameButton = document.querySelector(".newGameButton");
          const board1Container = document.querySelector(".board1Container");
          const board2Container = document.querySelector(".board2Container");
          const webBoard1 = document.querySelector(".board1");
          const webBoard2 = document.querySelector(".board2");
          title.classList.add("deactivated");
          newGameButton.classList.add("deactivated");
          board1Container.classList = "board1container activated";
          board2Container.classList = "board1container activated";
          const board1 = (0,
          _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.default)();
          board1.belongsToPlayer = true;
          const board2 = (0,
          _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.default)();
          let cellNumber = 0;
          board1.board.forEach((cell) => {
            const boardCell = document.createElement("div");
            boardCell.textContent = "".concat(cell[0], ", ").concat(cell[1]);
            boardCell.classList = "cell1";
            boardCell.classList.add("".concat(cellNumber));
            cellNumber += 1;
            board1.ships.forEach((ship) => {
              ship.location.forEach((location) => {
                const stringifiedCoords = JSON.stringify(cell);
                const stringifiedLocation = JSON.stringify(location);
                if (stringifiedLocation === stringifiedCoords) {
                  boardCell.classList = "cellTakenByPlayer";
                }
              });
            });
            webBoard1.appendChild(boardCell);
          });
          board2.board.forEach((cell) => {
            const boardCell = document.createElement("div");
            function boardCellClick() {
              const cellContents = "[".concat(boardCell.textContent, "]");
              if (board2.receiveAttack(JSON.parse(cellContents)) === true) {
                boardCell.classList = "";
                boardCell.classList.remove("empty");
                boardCell.classList.remove("cell2");
                boardCell.classList.add("cellTakenByPlayer");
              } else if (
                board2.receiveAttack(JSON.parse(cellContents)) === false
              ) {
                boardCell.classList = "empty";
                boardCell.removeEventListener("click", boardCellClick);
              }
              let sunkenCounter = 0;
              board2.ships.forEach((ship) => {
                if (ship.isSunkenProperty === true) sunkenCounter += 1;
                if (sunkenCounter === 5) alert("Human wins!");
              });
              board1.ships.forEach((ship) => {
                if (ship.isSunkenProperty === true) sunkenCounter += 1;
                if (sunkenCounter === 5) alert("Robot wins!");
              });
            }
            boardCell.textContent = "".concat(cell[0], ", ").concat(cell[1]);
            boardCell.classList = "cell2";
            webBoard2.appendChild(boardCell);
          });
          (0, _placeShips_js__WEBPACK_IMPORTED_MODULE_1__.default)(
            board1,
            board2
          );
          (0, _placeShipsAI_js__WEBPACK_IMPORTED_MODULE_2__.default)(board2);
        }
        /***/
      },

    /***/ "./src/main.js":
      /*! *********************!*\
  !*** ./src/main.js ***!
  \******************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ const _style_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./style.css */ "./src/style.css");
        /* harmony import */ const _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
        /* harmony import */ const _ship_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./ship.js */ "./src/ship.js");
        /* harmony import */ const _generateBoard_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./generateBoard.js */ "./src/generateBoard.js"
          );
        /* harmony import */ const _placeShips_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./placeShips.js */ "./src/placeShips.js");

        const newGameButton = document.querySelector(".newGameButton");
        newGameButton.addEventListener("click", () => {
          (0, _generateBoard_js__WEBPACK_IMPORTED_MODULE_3__.default)();
        });
        /***/
      },

    /***/ "./src/numberGenerator.js":
      /*! ********************************!*\
  !*** ./src/numberGenerator.js ***!
  \******************************* */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ numberGenerator,
          /* harmony export */
        });
        function numberGenerator(min, max, array) {
          function isArrayInArray(arr, item) {
            const itemAsString = JSON.stringify(item);
            const contains = arr.some(
              (ele) => JSON.stringify(ele) === itemAsString
            );
            return contains;
          }
          min = Math.ceil(min);
          max = Math.floor(max);
          const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          const secondNumber =
            Math.floor(Math.random() * (max - min + 1)) + min;
          // if (vertical !== undefined) {
          //   return [vertical, secondNumber];
          // } if (horizontal !== undefined) {
          //   return [firstNumber, horizontal];
          // }
          if (isArrayInArray(array, [firstNumber, secondNumber]))
            return numberGenerator(min, max, array);
          return [firstNumber, secondNumber];
        }
        /***/
      },

    /***/ "./src/placeShips.js":
      /*! ***************************!*\
  !*** ./src/placeShips.js ***!
  \************************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ placeShips,
          /* harmony export */
        });
        /* harmony import */ const _addShipToBoard_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./addShipToBoard.js */ "./src/addShipToBoard.js"
          );
        /* harmony import */ const _attackLogic_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./attackLogic.js */ "./src/attackLogic.js");
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return (
            (_typeof =
              typeof Symbol === "function" &&
              typeof Symbol.iterator === "symbol"
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      typeof Symbol === "function" &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _regeneratorRuntime() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {};
          const Op = Object.prototype;
          const hasOwn = Op.hasOwnProperty;
          const defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            };
          const $Symbol = typeof Symbol === "function" ? Symbol : {};
          const iteratorSymbol = $Symbol.iterator || "@@iterator";
          const asyncIteratorSymbol =
            $Symbol.asyncIterator || "@@asyncIterator";
          const toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            const protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            const generator = Object.create(protoGenerator.prototype);
            const context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, "_invoke", {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }
          exports.wrap = wrap;
          const ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          let IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          const getProto = Object.getPrototypeOf;
          const NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          const Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach((method) => {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              const record = tryCatch(generator[method], generator, arg);
              if (record.type !== "throw") {
                const result = record.arg;
                const { value } = result;
                return value &&
                  _typeof(value) == "object" &&
                  hasOwn.call(value, "__await")
                  ? PromiseImpl.resolve(value.__await).then(
                      (value) => {
                        invoke("next", value, resolve, reject);
                      },
                      (err) => {
                        invoke("throw", err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      (unwrapped) => {
                        (result.value = unwrapped), resolve(result);
                      },
                      (error) => invoke("throw", error, resolve, reject)
                    );
              }
              reject(record.arg);
            }
            let previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl((resolve, reject) => {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            let state = "suspendedStart";
            return function (method, arg) {
              if (state === "executing")
                throw new Error("Generator is already running");
              if (state === "completed") {
                if (method === "throw") throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                const { delegate } = context;
                if (delegate) {
                  const delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if (context.method === "next")
                  context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                  if (state === "suspendedStart")
                    throw ((state = "completed"), context.arg);
                  context.dispatchException(context.arg);
                } else
                  context.method === "return" &&
                    context.abrupt("return", context.arg);
                state = "executing";
                const record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  if (
                    ((state = context.done ? "completed" : "suspendedYield"),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                record.type === "throw" &&
                  ((state = "completed"),
                  (context.method = "throw"),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            const methodName = context.method;
            const method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                (methodName === "throw" &&
                  delegate.iterator.return &&
                  ((context.method = "return"),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  context.method === "throw")) ||
                  (methodName !== "return" &&
                    ((context.method = "throw"),
                    (context.arg = new TypeError(
                      `The iterator does not provide a '${methodName}' method`
                    )))),
                ContinueSentinel
              );
            const record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw")
              return (
                (context.method = "throw"),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            const info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  context.method !== "return" &&
                    ((context.method = "next"), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = "throw"),
                (context.arg = new TypeError(
                  "iterator result is not an object"
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            const entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            const record = entry.completion || {};
            (record.type = "normal"),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              const iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if (typeof iterable.next === "function") return iterable;
              if (!isNaN(iterable.length)) {
                let i = -1;
                const next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = undefined), (next.done = !0), next;
                };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              "GeneratorFunction"
            )),
            (exports.isGeneratorFunction = function (genFun) {
              const ctor = typeof genFun === "function" && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  (ctor.displayName || ctor.name) === "GeneratorFunction")
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, "GeneratorFunction")),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              const iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter
                    .next()
                    .then((result) =>
                      result.done ? result.value : iter.next()
                    );
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, "Generator"),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, "toString", () => "[object Generator]"),
            (exports.keys = function (val) {
              const object = Object(val);
              const keys = [];
              for (const key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    const key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (const name in this)
                    name.charAt(0) === "t" &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
              },
              stop: function stop() {
                this.done = !0;
                const rootRecord = this.tryEntries[0].completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                const context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = "throw"),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = "next"), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  var record = entry.completion;
                  if (entry.tryLoc === "root") return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    const hasCatch = hasOwn.call(entry, "catchLoc");
                    const hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, "finallyLoc") &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  (type === "break" || type === "continue") &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                const record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = "next"),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                return (
                  record.type === "break" || record.type === "continue"
                    ? (this.next = record.arg)
                    : record.type === "return"
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : record.type === "normal" &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    const record = entry.completion;
                    if (record.type === "throw") {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName,
                    nextLoc,
                  }),
                  this.method === "next" && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var { value } = info;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            const self = this;
            const args = arguments;
            return new Promise((resolve, reject) => {
              const gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function placeShips(board, oppBoard) {
          const board1Ships = document.querySelector(".board1Ships");
          const carrier1 = document.createElement("div");
          carrier1.textContent = "Carrier (5 cells)";
          const battleship1 = document.createElement("div");
          battleship1.textContent = "Battleship (4 cells)";
          const cruiser1 = document.createElement("div");
          cruiser1.textContent = "Cruiser (3 cells)";
          const submarine1 = document.createElement("div");
          submarine1.textContent = "Submarine (3 cells)";
          const destroyer1 = document.createElement("div");
          destroyer1.textContent = "Destroyer (2 cells)";
          const player1Ships = [
            carrier1,
            battleship1,
            cruiser1,
            submarine1,
            destroyer1,
          ];
          const carrier2 = document.createElement("div");
          carrier2.textContent = "Carrier (5 cells)";
          const battleship2 = document.createElement("div");
          battleship2.textContent = "Battleship (4 cells)";
          const cruiser2 = document.createElement("div");
          cruiser2.textContent = "Cruiser (3 cells)";
          const submarine2 = document.createElement("div");
          submarine2.textContent = "Submarine (3 cells)";
          const destroyer2 = document.createElement("div");
          destroyer2.textContent = "Destroyer (2 cells)";
          function getCoordsForShip(_x) {
            return _getCoordsForShip.apply(this, arguments);
          }
          function _getCoordsForShip() {
            _getCoordsForShip = _asyncToGenerator(
              /* #__PURE__ */ _regeneratorRuntime().mark(function _callee(e) {
                let response;
                return _regeneratorRuntime().wrap((_context) => {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return (0,
                        _addShipToBoard_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                          e
                        );
                      case 2:
                        response = _context.sent;
                        board.place(response);
                        e.target.removeEventListener("click", getCoordsForShip);
                        e.target.style.color = "green";
                        if (board.ships.length === 5)
                          (0,
                          _attackLogic_js__WEBPACK_IMPORTED_MODULE_1__.default)(
                            board,
                            oppBoard
                          );
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );
            return _getCoordsForShip.apply(this, arguments);
          }
          player1Ships.forEach((element) => {
            board1Ships.appendChild(element);
            element.addEventListener("click", getCoordsForShip);
          });
        }
        /***/
      },

    /***/ "./src/placeShipsAI.js":
      /*! *****************************!*\
  !*** ./src/placeShipsAI.js ***!
  \**************************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ placeShipsAI,
          /* harmony export */
        });
        /* harmony import */ const _addShipToBoardAI_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./addShipToBoardAI.js */ "./src/addShipToBoardAI.js"
          );
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return (
            (_typeof =
              typeof Symbol === "function" &&
              typeof Symbol.iterator === "symbol"
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      typeof Symbol === "function" &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _regeneratorRuntime() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {};
          const Op = Object.prototype;
          const hasOwn = Op.hasOwnProperty;
          const defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            };
          const $Symbol = typeof Symbol === "function" ? Symbol : {};
          const iteratorSymbol = $Symbol.iterator || "@@iterator";
          const asyncIteratorSymbol =
            $Symbol.asyncIterator || "@@asyncIterator";
          const toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            const protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            const generator = Object.create(protoGenerator.prototype);
            const context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, "_invoke", {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }
          exports.wrap = wrap;
          const ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          let IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          const getProto = Object.getPrototypeOf;
          const NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          const Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach((method) => {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              const record = tryCatch(generator[method], generator, arg);
              if (record.type !== "throw") {
                const result = record.arg;
                const { value } = result;
                return value &&
                  _typeof(value) == "object" &&
                  hasOwn.call(value, "__await")
                  ? PromiseImpl.resolve(value.__await).then(
                      (value) => {
                        invoke("next", value, resolve, reject);
                      },
                      (err) => {
                        invoke("throw", err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      (unwrapped) => {
                        (result.value = unwrapped), resolve(result);
                      },
                      (error) => invoke("throw", error, resolve, reject)
                    );
              }
              reject(record.arg);
            }
            let previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl((resolve, reject) => {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            let state = "suspendedStart";
            return function (method, arg) {
              if (state === "executing")
                throw new Error("Generator is already running");
              if (state === "completed") {
                if (method === "throw") throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                const { delegate } = context;
                if (delegate) {
                  const delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if (context.method === "next")
                  context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                  if (state === "suspendedStart")
                    throw ((state = "completed"), context.arg);
                  context.dispatchException(context.arg);
                } else
                  context.method === "return" &&
                    context.abrupt("return", context.arg);
                state = "executing";
                const record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  if (
                    ((state = context.done ? "completed" : "suspendedYield"),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                record.type === "throw" &&
                  ((state = "completed"),
                  (context.method = "throw"),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            const methodName = context.method;
            const method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                (methodName === "throw" &&
                  delegate.iterator.return &&
                  ((context.method = "return"),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  context.method === "throw")) ||
                  (methodName !== "return" &&
                    ((context.method = "throw"),
                    (context.arg = new TypeError(
                      `The iterator does not provide a '${methodName}' method`
                    )))),
                ContinueSentinel
              );
            const record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw")
              return (
                (context.method = "throw"),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            const info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  context.method !== "return" &&
                    ((context.method = "next"), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = "throw"),
                (context.arg = new TypeError(
                  "iterator result is not an object"
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            const entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            const record = entry.completion || {};
            (record.type = "normal"),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              const iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if (typeof iterable.next === "function") return iterable;
              if (!isNaN(iterable.length)) {
                let i = -1;
                const next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = undefined), (next.done = !0), next;
                };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              "GeneratorFunction"
            )),
            (exports.isGeneratorFunction = function (genFun) {
              const ctor = typeof genFun === "function" && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  (ctor.displayName || ctor.name) === "GeneratorFunction")
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, "GeneratorFunction")),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              const iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter
                    .next()
                    .then((result) =>
                      result.done ? result.value : iter.next()
                    );
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, "Generator"),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, "toString", () => "[object Generator]"),
            (exports.keys = function (val) {
              const object = Object(val);
              const keys = [];
              for (const key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    const key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (const name in this)
                    name.charAt(0) === "t" &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
              },
              stop: function stop() {
                this.done = !0;
                const rootRecord = this.tryEntries[0].completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                const context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = "throw"),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = "next"), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  var record = entry.completion;
                  if (entry.tryLoc === "root") return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    const hasCatch = hasOwn.call(entry, "catchLoc");
                    const hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, "finallyLoc") &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  (type === "break" || type === "continue") &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                const record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = "next"),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                return (
                  record.type === "break" || record.type === "continue"
                    ? (this.next = record.arg)
                    : record.type === "return"
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : record.type === "normal" &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    const record = entry.completion;
                    if (record.type === "throw") {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName,
                    nextLoc,
                  }),
                  this.method === "next" && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var { value } = info;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            const self = this;
            const args = arguments;
            return new Promise((resolve, reject) => {
              const gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function placeShipsAI(board, oppBoard) {
          const board2Ships = document.querySelector(".board2Ships");
          const takenCells = [];
          const carrier2 = document.createElement("div");
          carrier2.textContent = "Carrier (5 cells)";
          const battleship2 = document.createElement("div");
          battleship2.textContent = "Battleship (4 cells)";
          const cruiser2 = document.createElement("div");
          cruiser2.textContent = "Cruiser (3 cells)";
          const submarine2 = document.createElement("div");
          submarine2.textContent = "Submarine (3 cells)";
          const destroyer2 = document.createElement("div");
          destroyer2.textContent = "Destroyer (2 cells)";
          const player2Ships = [
            carrier2,
            battleship2,
            cruiser2,
            submarine2,
            destroyer2,
          ];
          player2Ships.forEach((element) => {
            board2Ships.appendChild(element);
          });
          function getCoordsForShip(_x) {
            return _getCoordsForShip.apply(this, arguments);
          }
          function _getCoordsForShip() {
            _getCoordsForShip = _asyncToGenerator(
              /* #__PURE__ */ _regeneratorRuntime().mark(function _callee(e) {
                let response;
                return _regeneratorRuntime().wrap((_context) => {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return (0,
                        _addShipToBoardAI_js__WEBPACK_IMPORTED_MODULE_0__.default)(
                          e,
                          takenCells
                        );
                      case 2:
                        response = _context.sent;
                        response.forEach((cell) => {
                          takenCells.push(cell);
                        });
                        board.place(response);
                        e.removeEventListener("click", getCoordsForShip);
                        e.style.color = "green";
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );
            return _getCoordsForShip.apply(this, arguments);
          }
          getCoordsForShip(carrier2);
          getCoordsForShip(battleship2);
          getCoordsForShip(cruiser2);
          getCoordsForShip(submarine2);
          getCoordsForShip(destroyer2);
        }
        /***/
      },

    /***/ "./src/ship.js":
      /*! *********************!*\
  !*** ./src/ship.js ***!
  \******************** */
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Ship,
          /* harmony export */
        });
        function Ship() {
          for (
            var _len = arguments.length,
              coordinates = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          ) {
            coordinates[_key] = arguments[_key];
          }
          const location = coordinates;
          let length = 0;
          location[0].forEach(() => {
            length += 1;
          });
          return {
            hits: 0,
            length,
            isSunkenProperty: false,
            hit: function hit(hits) {
              this.hits += 1;
              if (this.hits === this.length) {
                this.isSunkenProperty = true;
              }

            },
            location,
          };
        }
        /***/
      },
  },
  /** *** */ (__webpack_require__) => {
    // webpackRuntimeModules
    /** *** */ const __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /** *** */ const __webpack_exports__ = __webpack_exec__("./src/main.js");
    /** *** */
  },
]);
// # sourceMappingURL=data:application/json;charset=utf-8;base64,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c3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRTaGlwVG9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkU2hpcFRvQm9hcmRBSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXR0YWNrTG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvaW5GbGlwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dlbmVyYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL251bWJlckdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGxhY2VTaGlwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGxhY2VTaGlwc0FJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0dydXBwby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL1dJS0lQRURJQTE1X0JBVFRMRVNISVAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dydXBwbyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5QW5pbWF0aW9uIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCBcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxXFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjb2xvdXJBbmltYXRpb24ge1xcbiAgICAwJSB7IGNvbG9yOiBibGFjazsgfVxcbiAgICAxMDAlIHsgY29sb3I6ICNmZjEyNGZ9XFxufVxcblxcbkBrZXlmcmFtZXMgdmlzaWJpbGl0eUFuaW1hdGlvbkhpZGRlbiB7XFxuICAgIDEwMCUgeyB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdHcnVwcG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjAyMDgwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbiAgICBjb2xvcjogI2ZmMDBhMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFuaW1hdGlvbjogb3BhY2l0eUFuaW1hdGlvbiAxcyBlYXNlLWluO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc1JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi10b3A6IDMuNWVtO1xcbn1cXG5cXG4uYm9hcmQxLCAuYm9hcmQyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogNDB2dztcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ib2FyZDFjb250YWluZXIuYWN0aXZhdGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVlbTtcXG59XFxuXFxuLnBsYXllcjFOYW1lLCAucGxheWVyMk5hbWUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmJvYXJkMVNoaXBzLCAuYm9hcmQyU2hpcHMge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJvYXJkMVNoaXBzID4gKjpob3ZlciwgLmJvYXJkMlNoaXBzID4gKjpob3ZlciB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jZWxsMSwgLmNlbGwyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAgXFxufVxcblxcbi5jZWxsVGFrZW5CeVBsYXllciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBoZWlnaHQ6IDRlbTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMjRmO1xcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNlbGxUYWtlbkJ5Q29tcHV0ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjg0ZjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXIyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXIzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXI0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbFRha2VuQnlQbGF5ZXI1IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2VsbDE6aG92ZXIsIC5jZWxsMjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTc1ZmU7XFxufVxcblxcbi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzE2M2E7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBhbmltYXRpb246IG9wYWNpdHlBbmltYXRpb24gMXMgZWFzZS1pbjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZjEyNGY7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5kZWFjdGl2YXRlZCB7XFxuICAgIGFuaW1hdGlvbjogdmlzaWJpbGl0eUFuaW1hdGlvbkhpZGRlbiAycyBlYXNlLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGRpc3BsYXkgMS41cyBsaW5lYXI7XFxufVxcblxcbi5hY3RpdmF0ZWQge1xcbiAgICBhbmltYXRpb246IG9wYWNpdHlBbmltYXRpb24gM3MgZWFzZS1pbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFlBQVk7UUFDWixjQUFjO0lBQ2xCO0lB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QTZCO0lBQzdCLGdCQUFnQjtJQUNoQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELFVBQVU7SUFDVixhQUFhO0lBQ2IsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dydXBwbyc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvR3J1cHBvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5QW5pbWF0aW9uIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCBcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxXFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjb2xvdXJBbmltYXRpb24ge1xcbiAgICAwJSB7IGNvbG9yOiBibGFjazsgfVxcbiAgICAxMDAlIHsgY29sb3I6ICNmZjEyNGZ9XFxufVxcblxcbkBrZXlmcmFtZXMgdmlzaWJpbGl0eUFuaW1hdGlvbkhpZGRlbiB7XFxuICAgIDEwMCUgeyB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdHcnVwcG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjAyMDgwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbiAgICBjb2xvcjogI2ZmMDBhMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFuaW1hdGlvbjogb3BhY2l0eUFuaW1hdGlvbiAxcyBlYXNlLWluO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvaW1hZ2VzL1dJS0lQRURJQTE1X0JBVFRMRVNISVAuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luLXRvcDogMy41ZW07XFxufVxcblxcbi5ib2FyZDEsIC5ib2FyZDIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4uYm9hcmQxY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkMWNvbnRhaW5lci5hY3RpdmF0ZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuNWVtO1xcbn1cXG5cXG4ucGxheWVyMU5hbWUsIC5wbGF5ZXIyTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uYm9hcmQxU2hpcHMsIC5ib2FyZDJTaGlwcyB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYm9hcmQxU2hpcHMgPiAqOmhvdmVyLCAuYm9hcmQyU2hpcHMgPiAqOmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNlbGwxLCAuY2VsbDIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7ICBcXG59XFxuXFxuLmNlbGxUYWtlbkJ5UGxheWVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjEyNGY7XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2VsbFRha2VuQnlDb21wdXRlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBoZWlnaHQ6IDRlbTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmODRmO1xcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNlbGxUYWtlbkJ5UGxheWVyM0NydWlzZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jZWxsVGFrZW5CeVBsYXllcjUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTI0ZjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jZWxsMTpob3ZlciwgLmNlbGwyOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNzVmZTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMTYzYTtcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGFuaW1hdGlvbjogb3BhY2l0eUFuaW1hdGlvbiAxcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmMTI0ZjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmRlYWN0aXZhdGVkIHtcXG4gICAgYW5pbWF0aW9uOiB2aXNpYmlsaXR5QW5pbWF0aW9uSGlkZGVuIDJzIGVhc2Utb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZGlzcGxheSAxLjVzIGxpbmVhcjtcXG59XFxuXFxuLmFjdGl2YXRlZCB7XFxuICAgIGFuaW1hdGlvbjogb3BhY2l0eUFuaW1hdGlvbiAzcyBlYXNlLWluO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkU2hpcFRvQm9hcmQoZSkge1xuICBjb25zdCBhcnJheU9mQ29vcmRzID0gW107XG4gIGxldCBudW1iZXJPZkNlbGxzID0gMDtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBsZXQgY2xhc3NDb3VudGVyID0gMDtcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcInllbGxvd1wiO1xuICBjb25zdCBjaGVja01hcmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVja01hcmtEaXYudGV4dENvbnRlbnQgPSBcIuKclO+4j1wiO1xuICBjb25zdCBjcm9zc01hcmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcm9zc01hcmtEaXYudGV4dENvbnRlbnQgPSBcIuKdjFwiO1xuICBlLnRhcmdldC5hcHBlbmRDaGlsZChjaGVja01hcmtEaXYpO1xuICBlLnRhcmdldC5hcHBlbmRDaGlsZChjcm9zc01hcmtEaXYpO1xuICBmdW5jdGlvbiBpc0FycmF5SW5BcnJheShhcnIsIGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICBjb25zdCBjb250YWlucyA9IGFyci5zb21lKChlbGUpID0+IEpTT04uc3RyaW5naWZ5KGVsZSkgPT09IGl0ZW1Bc1N0cmluZyk7XG4gICAgcmV0dXJuIGNvbnRhaW5zO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LmluY2x1ZGVzKFwiMlwiKSkge1xuICAgICAgbnVtYmVyT2ZDZWxscyA9IDI7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIjNcIikpIHtcbiAgICAgIG51bWJlck9mQ2VsbHMgPSAzO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQuaW5jbHVkZXMoXCI0XCIpKSB7XG4gICAgICBudW1iZXJPZkNlbGxzID0gNDtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LmluY2x1ZGVzKFwiNVwiKSkge1xuICAgICAgbnVtYmVyT2ZDZWxscyA9IDU7XG4gICAgfVxuICAgIGxldCBjbGFzc1RvQmVBZGRlZCA9IGBjZWxsVGFrZW5CeVBsYXllciR7bnVtYmVyT2ZDZWxsc31gO1xuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkNydWlzZXJcIikpIHtcbiAgICAgIGNsYXNzVG9CZUFkZGVkID0gYGNlbGxUYWtlbkJ5UGxheWVyJHtudW1iZXJPZkNlbGxzfUNydWlzZXJgO1xuICAgIH1cbiAgICBjb25zdCBhbGxQMUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsMVwiKTtcbiAgICBmdW5jdGlvbiBjb29yZGluYXRlcyhmKSB7XG4gICAgICBjb25zdCB0b0NvbXBhcmUxID0gYXJyYXlPZkNvb3Jkcy5zbGljZSgxLCAyKTtcbiAgICAgIGNvbnN0IHRvQ29tcGFyZTAgPSBhcnJheU9mQ29vcmRzLnNsaWNlKDAsIDEpO1xuICAgICAgY29uc3QgdG9CZUFkZGVkID0gSlNPTi5wYXJzZShgWyR7Zi50YXJnZXQudGV4dENvbnRlbnR9XWApO1xuICAgICAgaWYgKGlzQXJyYXlJbkFycmF5KGFycmF5T2ZDb29yZHMsIHRvQmVBZGRlZCkpIHJldHVybjtcbiAgICAgIGlmIChhcnJheU9mQ29vcmRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHRvQ29tcGFyZTBbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPT09IDEgfHxcbiAgICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPT09IC0xKSAmJlxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMV0gLSB0b0JlQWRkZWRbMV0gIT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzBdIC0gdG9CZUFkZGVkWzBdID4gMSB8fFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPCAtMSB8fFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPiAxIHx8XG4gICAgICAgICAgdG9Db21wYXJlMFswXVsxXSAtIHRvQmVBZGRlZFsxXSA8IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9Db21wYXJlMFswXVswXSAtIHRvQmVBZGRlZFswXSAhPT0gMCAmJlxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPT09IDEgJiZcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzFdIC0gdG9CZUFkZGVkWzFdID09PSAxXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcnJheU9mQ29vcmRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgdG9Db21wYXJlMiA9IGFycmF5T2ZDb29yZHMuc2xpY2UoXG4gICAgICAgICAgYXJyYXlPZkNvb3Jkcy5sZW5ndGggLSAxLFxuICAgICAgICAgIGFycmF5T2ZDb29yZHMubGVuZ3RoIC0gMFxuICAgICAgICApO1xuICAgICAgICAvLyB2ZXJ0aWNhbCBjaGVja1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9Db21wYXJlMFswXVswXSAtIHRvQ29tcGFyZTFbMF1bMF0gPT09IDEgfHxcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzBdIC0gdG9Db21wYXJlMVswXVswXSA9PT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVsxXSAtIHRvQmVBZGRlZFsxXSA+PSAxIHx8XG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzFdIC0gdG9CZUFkZGVkWzFdIDw9IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPiAxIHx8XG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzBdIC0gdG9CZUFkZGVkWzBdIDwgLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0b0NvbXBhcmUwWzBdWzBdIC0gdG9Db21wYXJlMVswXVswXSA9PT0gMSkge1xuICAgICAgICAgICAgICBpZiAodG9CZUFkZGVkWzBdIC0gdG9Db21wYXJlMFswXVswXSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvQ29tcGFyZTBbMF1bMF0gLSB0b0NvbXBhcmUxWzBdWzBdID09PSAtMSkge1xuICAgICAgICAgICAgICBpZiAodG9Db21wYXJlMFswXVswXSAtIHRvQmVBZGRlZFswXSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBob3Jpem9udGFsIGNoZWNrXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b0NvbXBhcmUwWzBdWzFdIC0gdG9Db21wYXJlMVswXVsxXSA9PT0gMSB8fFxuICAgICAgICAgIHRvQ29tcGFyZTBbMF1bMV0gLSB0b0NvbXBhcmUxWzBdWzFdID09PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0b0NvbXBhcmUyWzBdWzBdIC0gdG9CZUFkZGVkWzBdID49IDEgfHxcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMF0gLSB0b0JlQWRkZWRbMF0gPD0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdG9Db21wYXJlMlswXVsxXSAtIHRvQmVBZGRlZFsxXSA+IDEgfHxcbiAgICAgICAgICAgIHRvQ29tcGFyZTJbMF1bMV0gLSB0b0JlQWRkZWRbMV0gPCAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRvQ29tcGFyZTBbMF1bMV0gLSB0b0NvbXBhcmUxWzBdWzFdID09PSAxKSB7XG4gICAgICAgICAgICAgIC8vIGlmICh0b0JlQWRkZWRbMV0gLSB0b0NvbXBhcmUwWzBdWzFdICE9PSAxKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkcnVnaSBpZicpO1xuICAgICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b0NvbXBhcmUwWzBdWzFdIC0gdG9Db21wYXJlMVswXVsxXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gaWYgKHRvQ29tcGFyZTBbMF1bMV0gLSB0b0JlQWRkZWRbMV0gIT09IDEpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9Db21wYXJlMCk7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvQmVBZGRlZCk7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cnplY2kgaWYnKTtcbiAgICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmLnRhcmdldC5jbGFzc0xpc3QgPSBjbGFzc1RvQmVBZGRlZDtcbiAgICAgIGYudGFyZ2V0LmNsYXNzTGlzdCArPSBgICR7Y2xhc3NDb3VudGVyfWA7XG4gICAgICBjbGFzc0NvdW50ZXIgKz0gMTtcbiAgICAgIGFycmF5T2ZDb29yZHMucHVzaCh0b0JlQWRkZWQpO1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgaWYgKG51bWJlck9mQ2VsbHMgPT09IGNvdW50ZXIpIHtcbiAgICAgICAgYWxsUDFDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29vcmRpbmF0ZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQoXCJQcmVzcyB0aGUgZ3JlZW4gY2hlY2sgbWFyayBpbiBvcmRlciB0byBjb25maXJtIHlvdXIgY2hvaWNlLlwiKTtcbiAgICAgICAgY2hlY2tNYXJrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgZS50YXJnZXQucmVtb3ZlQ2hpbGQoY2hlY2tNYXJrRGl2KTtcbiAgICAgICAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChjcm9zc01hcmtEaXYpO1xuICAgICAgICAgIHJlc29sdmUoYXJyYXlPZkNvb3Jkcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjcm9zc01hcmtEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgIGNvbnN0IGNlbGxzVGFrZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc1RvQmVBZGRlZH1gKTtcbiAgICAgIGNlbGxzVGFrZW4uZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NUb0JlQWRkZWR9YCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwxXCIpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBhbGxCb2FyZDFDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjZWxsMVwiKTtcbiAgICAgIGFsbEJvYXJkMUNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29vcmRpbmF0ZXMpO1xuICAgICAgfSk7XG4gICAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChjaGVja01hcmtEaXYpO1xuICAgICAgZS50YXJnZXQucmVtb3ZlQ2hpbGQoY3Jvc3NNYXJrRGl2KTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICAgIGFsbFAxQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9KTtcbiAgLy8gICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAvLyAgICAgaWYgKGFycmF5T2ZDb29yZHMubGVuZ3RoID09PSBudW1iZXJPZkNlbGxzKSB7XG4gIC8vICAgICAgIHJlc29sdmUoKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gICBwcm9taXNlLnRoZW4oKHZhbHVlKSA9PiBhcnJheVRvQmVSZXR1cm5lZCA9IHZhbHVlKTtcbiAgLy8gICBwcm9taXNlLnRoZW5cbn1cbiIsImltcG9ydCBudW1iZXJHZW5lcmF0b3IgZnJvbSAnLi9udW1iZXJHZW5lcmF0b3IuanMnO1xuaW1wb3J0IGNvaW5GbGlwIGZyb20gJy4vY29pbkZsaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRTaGlwVG9Cb2FyZEFJKGUsIGFycmF5KSB7XG4gIGNvbnNvbGUubG9nKGUudGV4dENvbnRlbnQpO1xuICBjb25zdCB0YWtlbkNlbGxzID0gW107XG4gIGxldCBhcnJheU9mQ29vcmRzID0gW107XG4gIGxldCBudW1iZXJPZkNlbGxzID0gMDtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBpZiAoZS50ZXh0Q29udGVudC5pbmNsdWRlcygnMicpKSB7XG4gICAgbnVtYmVyT2ZDZWxscyA9IDI7XG4gIH0gZWxzZSBpZiAoZS50ZXh0Q29udGVudC5pbmNsdWRlcygnMycpKSB7XG4gICAgbnVtYmVyT2ZDZWxscyA9IDM7XG4gIH0gZWxzZSBpZiAoZS50ZXh0Q29udGVudC5pbmNsdWRlcygnNCcpKSB7XG4gICAgbnVtYmVyT2ZDZWxscyA9IDQ7XG4gIH0gZWxzZSBpZiAoZS50ZXh0Q29udGVudC5pbmNsdWRlcygnNScpKSB7XG4gICAgbnVtYmVyT2ZDZWxscyA9IDU7XG4gIH1cbiAgZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoYXJyLCBpdGVtKSB7XG4gICAgY29uc3QgaXRlbUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgY29uc3QgY29udGFpbnMgPSBhcnIuc29tZSgoZWxlKSA9PiBKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpO1xuICAgIHJldHVybiBjb250YWlucztcbiAgfVxuICBsZXQgbnVtYmVyMSA9IG51bWJlckdlbmVyYXRvcigwLCA5LCB0YWtlbkNlbGxzKTtcbiAgZnVuY3Rpb24gY29vcmRzRmlsdGVyKG51bWJlcikge1xuICAgIGxldCB0b0JlQWRkZWQgPSBudW1iZXI7XG4gICAgY29uc3QgcmFuZG9tMSA9IGNvaW5GbGlwKCk7XG4gICAgY29uc3QgcmFuZG9tMiA9IGNvaW5GbGlwKCk7XG4gICAgY29uc3QgcmFuZG9tMyA9IGNvaW5GbGlwKCk7XG4gICAgY29uc3Qgb3JpZ2luYWxOdW0gPSBhcnJheU9mQ29vcmRzLnNsaWNlKDAsIDEpO1xuICAgIGxldCB0b0NvbXBhcmUgPSBhcnJheU9mQ29vcmRzLnNsaWNlKGFycmF5T2ZDb29yZHMubGVuZ3RoIC0gMSwgYXJyYXlPZkNvb3Jkcy5sZW5ndGgpO1xuICAgIGlmICh0b0JlQWRkZWRbMF0gPT09IHVuZGVmaW5lZCB8fCB0b0JlQWRkZWRbMV0gPT09IHVuZGVmaW5lZCB8fCB0b0JlQWRkZWRbMF0gPT09IE5hTiB8fCB0b0JlQWRkZWRbMV0gPT09IE5hTikge1xuICAgICAgdG9Db21wYXJlID0gYXJyYXlPZkNvb3Jkcy5zbGljZSgwLCAxKTtcbiAgICAgIHRvQmVBZGRlZCA9IG51bWJlckdlbmVyYXRvcigwLCA5LCB0YWtlbkNlbGxzKTtcbiAgICB9XG4gICAgaWYgKGFycmF5T2ZDb29yZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZyh0b0NvbXBhcmUpO1xuICAgICAgY29uc29sZS5sb2coYCR7dG9Db21wYXJlWzBdWzBdfSAke3RvQ29tcGFyZVswXVsxXX1gKTtcbiAgICAgIGlmIChyYW5kb20xID09PSAwKSB7XG4gICAgICAgIGlmIChyYW5kb20zID09PSAwKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gWyh0b0NvbXBhcmVbMF1bMF0gLSAxKSwgdG9Db21wYXJlWzBdWzFdXTtcbiAgICAgICAgfSBpZiAocmFuZG9tMyA9PT0gMSkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFsodG9Db21wYXJlWzBdWzBdICsgMSksIHRvQ29tcGFyZVswXVsxXV07XG4gICAgICAgIH1cbiAgICAgIH0gaWYgKHJhbmRvbTEgPT09IDEpIHtcbiAgICAgICAgaWYgKHJhbmRvbTMgPT09IDApIHtcbiAgICAgICAgICB0b0JlQWRkZWQgPSBbdG9Db21wYXJlWzBdWzBdLCB0b0NvbXBhcmVbMF1bMV0gLSAxXTtcbiAgICAgICAgfSBpZiAocmFuZG9tMyA9PT0gMSkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFt0b0NvbXBhcmVbMF1bMF0sIHRvQ29tcGFyZVswXVsxXSArIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcnJheU9mQ29vcmRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHNlY29uZE9yaWdpbmFsID0gYXJyYXlPZkNvb3Jkcy5zbGljZSgxLCAyKTtcbiAgICAgIGlmICgoc2Vjb25kT3JpZ2luYWxbMF1bMF0gLSBvcmlnaW5hbE51bVswXVswXSA9PT0gMSB8fCBzZWNvbmRPcmlnaW5hbFswXVswXSAtIG9yaWdpbmFsTnVtWzBdWzBdID09PSAtMSkpIHtcbiAgICAgICAgaWYgKHRvQ29tcGFyZVswXVswXSA9PT0gOSB8fCB0b0NvbXBhcmVbMF1bMF0gPT09IDApIHtcbiAgICAgICAgICBjb25zdCB0b0NvbXBhcmUxID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIHRha2VuQ2VsbHMpO1xuICAgICAgICAgIGlmICh0b0NvbXBhcmVbMF1bMF0gPT09IDApIHtcbiAgICAgICAgICAgIHRvQ29tcGFyZSA9IFswLCB0b0NvbXBhcmUxWzBdWzFdXTtcbiAgICAgICAgICB9IGVsc2UgeyB0b0NvbXBhcmUgPSBbOSwgdG9Db21wYXJlMVsxXV07IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZG9tMiA9PT0gMCkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFsodG9Db21wYXJlWzBdWzBdIC0gMSksIHRvQ29tcGFyZVswXVsxXV07XG4gICAgICAgIH0gaWYgKHJhbmRvbTIgPT09IDEpIHtcbiAgICAgICAgICB0b0JlQWRkZWQgPSBbKHRvQ29tcGFyZVswXVswXSArIDEpLCB0b0NvbXBhcmVbMF1bMV1dO1xuICAgICAgICB9IGlmIChpc0FycmF5SW5BcnJheSh0YWtlbkNlbGxzLCB0b0JlQWRkZWQpKSByZXR1cm47XG4gICAgICAgIGlmICh0b0JlQWRkZWRbMF0gLSBvcmlnaW5hbE51bVswXVswXSA+IDUgfHwgdG9CZUFkZGVkIC0gb3JpZ2luYWxOdW1bMF1bMF0gPCAtNSkgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKChzZWNvbmRPcmlnaW5hbFswXVsxXSAtIG9yaWdpbmFsTnVtWzBdWzFdID09PSAxIHx8IHNlY29uZE9yaWdpbmFsWzBdWzFdIC0gb3JpZ2luYWxOdW1bMF1bMV0gPT09IC0xKSkge1xuICAgICAgICBpZiAodG9Db21wYXJlWzBdWzFdID09PSA5IHx8IHRvQ29tcGFyZVswXVsxXSA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZTEgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gICAgICAgICAgaWYgKHRvQ29tcGFyZVswXVsxXSA9PT0gMCkge1xuICAgICAgICAgICAgdG9Db21wYXJlID0gW3RvQ29tcGFyZTFbMF0sIDBdO1xuICAgICAgICAgIH0gZWxzZSB7IHRvQ29tcGFyZSA9IFt0b0NvbXBhcmUxWzBdLCA5XTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb20yID09PSAwKSB7XG4gICAgICAgICAgdG9CZUFkZGVkID0gW3RvQ29tcGFyZVswXVswXSwgKHRvQ29tcGFyZVswXVsxXSAtIDEpXTtcbiAgICAgICAgfSBpZiAocmFuZG9tMiA9PT0gMSkge1xuICAgICAgICAgIHRvQmVBZGRlZCA9IFt0b0NvbXBhcmVbMF1bMF0sICh0b0NvbXBhcmVbMF1bMV0gKyAxKV07XG4gICAgICAgIH0gaWYgKGlzQXJyYXlJbkFycmF5KHRha2VuQ2VsbHMsIHRvQmVBZGRlZCkpIHJldHVybjtcbiAgICAgICAgaWYgKHRvQmVBZGRlZFswXSAtIG9yaWdpbmFsTnVtWzBdWzBdID4gNSB8fCB0b0JlQWRkZWQgLSBvcmlnaW5hbE51bVswXVswXSA8IC01KSByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0b0JlQWRkZWRbMF0gPT09IHVuZGVmaW5lZCB8fCB0b0JlQWRkZWRbMF0gPT09IE5hTiB8fCB0b0JlQWRkZWRbMV0gPT09IHVuZGVmaW5lZCB8fCB0b0JlQWRkZWRbMV0gPT09IE5hTiB8fCB0b0JlQWRkZWRbMF0gPCAwIHx8IHRvQmVBZGRlZFsxXSA8IDAgfHwgdG9CZUFkZGVkWzBdID4gOSB8fCB0b0JlQWRkZWRbMV0gPiA5KSB7XG4gICAgICBhbGVydChgTmFOL3VuZGVmaW5lZDogJHt0b0JlQWRkZWR9YCk7XG4gICAgICB0b0JlQWRkZWQgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gICAgICBhcnJheU9mQ29vcmRzID0gW107XG4gICAgICBjb3VudGVyID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRvQmVBZGRlZFswXSA8IC0xIHx8IHRvQmVBZGRlZFsxXSA8IC0xIHx8IHRvQmVBZGRlZFswXSA+IDkgfHwgdG9CZUFkZGVkWzFdID4gOSkgcmV0dXJuO1xuICAgIGlmIChpc0FycmF5SW5BcnJheSh0YWtlbkNlbGxzLCB0b0JlQWRkZWQpKSByZXR1cm47XG4gICAgaWYgKGlzQXJyYXlJbkFycmF5KGFycmF5LCB0b0JlQWRkZWQpKSB7XG4gICAgICB0b0JlQWRkZWQgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gICAgICBhcnJheU9mQ29vcmRzID0gW107XG4gICAgICBjb3VudGVyID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYXJyYXlPZkNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIC8vICAgbGV0IGlzSW5jb3JyZWN0ID0gZmFsc2U7XG4gICAgLy8gICBpZiAoY29vcmRbMF0gPT09IHVuZGVmaW5lZCB8fCBjb29yZFsxXSA9PT0gdW5kZWZpbmVkIHx8IGNvb3JkWzBdID09PSBOYU4gfHwgY29vcmRbMV0gPT09IE5hTikge1xuICAgIC8vICAgICBhcnJheU9mQ29vcmRzID0gW107XG4gICAgLy8gICAgIGNvdW50ZXIgPSAwO1xuICAgIC8vICAgICBpc0luY29ycmVjdCA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gICBpZiAoaXNJbmNvcnJlY3QpIHJldHVybjtcbiAgICAvLyB9KTtcbiAgICBhcnJheU9mQ29vcmRzLnB1c2godG9CZUFkZGVkKTtcbiAgICB0YWtlbkNlbGxzLnB1c2godG9CZUFkZGVkKTtcbiAgICBjb3VudGVyICs9IDE7XG4gIH1cbiAgYXJyYXlPZkNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGlmIChpc0FycmF5SW5BcnJheShhcnJheSwgY29vcmQpKSB7XG4gICAgICBjb3VudGVyID0gMDtcbiAgICAgIGFycmF5T2ZDb29yZHMgPSBbXTtcbiAgICB9XG4gIH0pO1xuICB3aGlsZSAoY291bnRlciAhPT0gbnVtYmVyT2ZDZWxscykge1xuICAgIG51bWJlcjEgPSBudW1iZXJHZW5lcmF0b3IoMCwgOSwgdGFrZW5DZWxscyk7XG4gICAgY29vcmRzRmlsdGVyKG51bWJlcjEpO1xuICAgIGNvbnNvbGUubG9nKGFycmF5T2ZDb29yZHMpO1xuICAgIGNvbnNvbGUubG9nKG51bWJlcjEpO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGlmIChudW1iZXJPZkNlbGxzID09PSBjb3VudGVyKSB7XG4gICAgICByZXNvbHZlKGFycmF5T2ZDb29yZHMpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgbnVtYmVyR2VuZXJhdG9yIGZyb20gJy4vbnVtYmVyR2VuZXJhdG9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrTG9naWMoYm9hcmQxLCBib2FyZDIpIHtcbiAgY29uc29sZS5sb2coWzAsIDBdKTtcbiAgY29uc29sZS5sb2coYm9hcmQxLnJlY2VpdmVBdHRhY2soWzAsIDBdKSk7XG4gIGZ1bmN0aW9uIGlzQXJyYXlJbkFycmF5KGFyciwgaXRlbSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBjb25zdCBpdGVtQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICBjb25zdCBjb250YWlucyA9IGFyci5zb21lKChlbGUpID0+IHtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKCEoSlNPTi5zdHJpbmdpZnkoZWxlKSA9PT0gaXRlbUFzU3RyaW5nKSkgY291bnRlciArPSAxO1xuICAgIH0pO1xuICAgIGlmIChjb3VudGVyID49IGFyci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfVxuICBmdW5jdGlvbiBpc0FycmF5SW5BcnJheU9yaWdpbmFsKGFyciwgaXRlbSkge1xuICAgIGNvbnN0IGl0ZW1Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgIGNvbnN0IGNvbnRhaW5zID0gYXJyLnNvbWUoKGVsZSkgPT4gSlNPTi5zdHJpbmdpZnkoZWxlKSA9PT0gaXRlbUFzU3RyaW5nKTtcbiAgICByZXR1cm4gY29udGFpbnM7XG4gIH1cbiAgY29uc3QgY3B1QXR0YWNrcyA9IFtdO1xuICBjb25zdCBib2FyZDFDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMScpO1xuICBjb25zdCBib2FyZDJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMicpO1xuICBib2FyZDJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgZnVuY3Rpb24gYm9hcmRDZWxsQ2xpY2soKSB7XG4gICAgICBjb25zdCBjZWxsMkNvbnRlbnRzID0gYFske2NlbGwudGV4dENvbnRlbnR9XWA7XG4gICAgICBpZiAoYm9hcmQyLnJlY2VpdmVBdHRhY2soSlNPTi5wYXJzZShjZWxsMkNvbnRlbnRzKSkgPT09IHRydWUpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnJztcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGwyJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFRha2VuQnlQbGF5ZXInKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmQyLnJlY2VpdmVBdHRhY2soSlNPTi5wYXJzZShjZWxsMkNvbnRlbnRzKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2VtcHR5JztcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkQ2VsbENsaWNrKTtcbiAgICAgIH1cbiAgICAgIGxldCBzdW5rZW5Db3VudGVyMiA9IDA7XG4gICAgICBib2FyZDIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyMiArPSAxO1xuICAgICAgICBpZiAoc3Vua2VuQ291bnRlcjIgPT09IDUpIGFsZXJ0KCdIdW1hbiB3aW5zIScpO1xuICAgICAgfSk7XG4gICAgICBsZXQgcmFuZG9tQ1BVYXR0YWNrID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIGNwdUF0dGFja3MpO1xuICAgICAgaWYgKGlzQXJyYXlJbkFycmF5KGNwdUF0dGFja3MsIHJhbmRvbUNQVWF0dGFjaykpIHtcbiAgICAgICAgcmFuZG9tQ1BVYXR0YWNrID0gbnVtYmVyR2VuZXJhdG9yKDAsIDksIGNwdUF0dGFja3MpO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2cocmFuZG9tQ1BVYXR0YWNrKTtcbiAgICAgIC8vIGNvbnN0IGNlbGxUYWtlbkJ5UGxheWVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGxUYWtlbkJ5UGxheWVyMicpO1xuICAgICAgLy8gY29uc3QgdGVzdCA9IChKU09OLnBhcnNlKGBbJHtjZWxsVGFrZW5CeVBsYXllcjJbMF0uaW5uZXJIVE1MfV1gKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGB0ZXN0MDogJHt0ZXN0WzBdfWApO1xuICAgICAgZnVuY3Rpb24gY2xhc3NDaGVja2VyKCkge1xuICAgICAgICBsZXQgdG9CZVJldHVybmVkO1xuICAgICAgICBjb25zdCBjZWxsVGFrZW5CeVBsYXllcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsVGFrZW5CeVBsYXllcjInKTtcbiAgICAgICAgY29uc3QgY2VsbFRha2VuQnlQbGF5ZXIzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbFRha2VuQnlQbGF5ZXIzJyk7XG4gICAgICAgIGNvbnN0IGNlbGxUYWtlbkJ5UGxheWVyM0NydWlzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyJyk7XG4gICAgICAgIGNvbnN0IGNlbGxUYWtlbkJ5UGxheWVyNCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGxUYWtlbkJ5UGxheWVyNCcpO1xuICAgICAgICBjb25zdCBjZWxsVGFrZW5CeVBsYXllcjUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsVGFrZW5CeVBsYXllcjUnKTtcbiAgICAgICAgY29uc3QgcGxheWVyQ2VsbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsMScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxUYWtlbkJ5UGxheWVyMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHRlc3QxID0gKEpTT04ucGFyc2UoYFske2NlbGxUYWtlbkJ5UGxheWVyMltpXS50ZXh0Q29udGVudH1dYCkpO1xuICAgICAgICAgIGlmICh0ZXN0MVswXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzBdICYmIHRlc3QxWzFdID09PSByYW5kb21DUFVhdHRhY2tbMV0pIHtcbiAgICAgICAgICAgIHRvQmVSZXR1cm5lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGNlbGxUYWtlbkJ5UGxheWVyMiAke2l9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMSB0ZXN0Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjZWxsVGFrZW5CeVBsYXllcjMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB0ZXN0MSA9IChKU09OLnBhcnNlKGBbJHtjZWxsVGFrZW5CeVBsYXllcjNbal0udGV4dENvbnRlbnR9XWApKTtcbiAgICAgICAgICBpZiAodGVzdDFbMF0gPT09IHJhbmRvbUNQVWF0dGFja1swXSAmJiB0ZXN0MVsxXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzFdKSB7XG4gICAgICAgICAgICB0b0JlUmV0dXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBjZWxsVGFrZW5CeVBsYXllcjMgJHtqfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzIgdGVzdCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2VsbFRha2VuQnlQbGF5ZXIzQ3J1aXNlci5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGNvbnN0IHRlc3QxID0gKEpTT04ucGFyc2UoYFske2NlbGxUYWtlbkJ5UGxheWVyM0NydWlzZXJba10udGV4dENvbnRlbnR9XWApKTtcbiAgICAgICAgICBpZiAodGVzdDFbMF0gPT09IHJhbmRvbUNQVWF0dGFja1swXSAmJiB0ZXN0MVsxXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzFdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMyB0ZXN0Jyk7XG4gICAgICAgICAgICB0b0JlUmV0dXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBjZWxsVGFrZW5CeVBsYXllcjNDcnVpc2VyICR7a31gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGNlbGxUYWtlbkJ5UGxheWVyNC5sZW5ndGg7IGwrKykge1xuICAgICAgICAgIGNvbnN0IHRlc3QxID0gKEpTT04ucGFyc2UoYFske2NlbGxUYWtlbkJ5UGxheWVyNFtsXS50ZXh0Q29udGVudH1dYCkpO1xuICAgICAgICAgIGlmICh0ZXN0MVswXSA9PT0gcmFuZG9tQ1BVYXR0YWNrWzBdICYmIHRlc3QxWzFdID09PSByYW5kb21DUFVhdHRhY2tbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0IHRlc3QnKTtcbiAgICAgICAgICAgIHRvQmVSZXR1cm5lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGNlbGxUYWtlbkJ5UGxheWVyNCAke2x9YCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBjZWxsVGFrZW5CeVBsYXllcjUubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICBjb25zdCB0ZXN0MSA9IChKU09OLnBhcnNlKGBbJHtjZWxsVGFrZW5CeVBsYXllcjVbbV0udGV4dENvbnRlbnR9XWApKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0MSk7XG4gICAgICAgICAgaWYgKHRlc3QxWzBdID09PSByYW5kb21DUFVhdHRhY2tbMF0gJiYgdGVzdDFbMV0gPT09IHJhbmRvbUNQVWF0dGFja1sxXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzUgdGVzdCcpO1xuICAgICAgICAgICAgdG9CZVJldHVybmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgY2VsbFRha2VuQnlQbGF5ZXI1ICR7bX1gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG9CZVJldHVybmVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBhdHRhY2tlZENlbGxJbmRleCA9IGlzQXJyYXlJbkFycmF5KGJvYXJkMS5ib2FyZCwgcmFuZG9tQ1BVYXR0YWNrKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhhdHRhY2tlZENlbGxJbmRleCk7XG4gICAgICAgICAgdG9CZVJldHVybmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgY2VsbDEgJHthdHRhY2tlZENlbGxJbmRleH1gKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b0JlUmV0dXJuZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b0JlUmV0dXJuZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBjZWxsVG9CZU1vZGlmaWVkID0gY2xhc3NDaGVja2VyKCk7XG4gICAgICBjb25zb2xlLmxvZyhjZWxsVG9CZU1vZGlmaWVkWzBdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBjZWxsVG9CZU1vZGlmaWVkOiAke2NlbGxUb0JlTW9kaWZpZWRbMF0udGV4dENvbnRlbnRbMF19YCk7XG4gICAgICAvLyBjb25zdCBjZWxsMUNvbnRlbnRzID0gSlNPTi5wYXJzZShgWyR7Y2VsbFRvQmVNb2RpZmllZFswXS50ZXh0Q29udGVudH1dYCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjZWxsMUNvbnRlbnRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBjZWxsMUNvbnRlbnRzOiAke2NlbGwxQ29udGVudHN9YCk7XG4gICAgICBpZiAoYm9hcmQxLnJlY2VpdmVBdHRhY2socmFuZG9tQ1BVYXR0YWNrKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcHV0ZXIgaGl0IScpO1xuICAgICAgICBjZWxsVG9CZU1vZGlmaWVkWzBdLmNsYXNzTGlzdC52YWx1ZSA9ICdjZWxsVGFrZW5CeUNvbXB1dGVyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNwdUF0dGFja3MucHVzaChyYW5kb21DUFVhdHRhY2spO1xuICAgICAgICBjZWxsVG9CZU1vZGlmaWVkWzBdLmNsYXNzTGlzdC52YWx1ZSA9ICdlbXB0eSc7XG4gICAgICAgIC8vIGNlbGxUb0JlTW9kaWZpZWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib2FyZENlbGxDbGljayk7XG4gICAgICB9XG4gICAgICBsZXQgc3Vua2VuQ291bnRlcjEgPSAwO1xuICAgICAgYm9hcmQxLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rZW5Qcm9wZXJ0eSA9PT0gdHJ1ZSkgc3Vua2VuQ291bnRlcjEgKz0gMTtcbiAgICAgICAgaWYgKHN1bmtlbkNvdW50ZXIxID09PSA1KSBhbGVydCgnUm9ib3Qgd2lucyEnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9hcmRDZWxsQ2xpY2spO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvaW5GbGlwKCkge1xuICBjb25zdCBtaW4gPSAwO1xuICBjb25zdCBtYXggPSAyO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBmdW5jdGlvbiBib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZFRvUmV0dXJuID0gW107XG4gICAgLy8gY29uc3QgYm9hcmRUb1JldHVybiA9IG5ldyBBcnJheSgxMCkuZmlsbChuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGJvYXJkVG9SZXR1cm4ucHVzaChbaSwgal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmRUb1JldHVybjtcbiAgfVxuICBmdW5jdGlvbiBpc0FycmF5SW5BcnJheShhcnIsIGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICBjb25zdCBjb250YWlucyA9IGFyci5zb21lKChlbGUpID0+IEpTT04uc3RyaW5naWZ5KGVsZSkgPT09IGl0ZW1Bc1N0cmluZyk7XG4gICAgcmV0dXJuIGNvbnRhaW5zO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmVsb25nc1RvUGxheWVyOiBmYWxzZSxcbiAgICBzaGlwcyxcbiAgICBib2FyZDogYm9hcmQoKSxcbiAgICBhbGxTaGlwc1N1bmtlbjogZmFsc2UsXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgcGxhY2UoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnRbMF0gPiA5IHx8IGVsZW1lbnRbMF0gPCAwIHx8IGVsZW1lbnRbMV0gPiA5IHx8IGVsZW1lbnRbMV0gPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlIG91dCBvZiBib3VuZHMuIENoZWNrIGFsbCBjb29yZGluYXRlcyEnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzaGlwcy5wdXNoKFNoaXAoLi4uY29vcmRpbmF0ZXMpKTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIGxldCBzdW5rZW5Db3VudGVyID0gMDtcbiAgICAgIGxldCB0b0JlUmV0dXJuZWQgPSBmYWxzZTtcbiAgICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKGlzQXJyYXlJbkFycmF5KHNoaXAubG9jYXRpb25bMF0sIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyICs9IDE7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdW5rZW5Db3VudGVyID09PSA1KSBhbGVydCgnR2FtZSBlbmRlZCEnKTtcbiAgICAgIGlmIChjYWxsZWQgPT09IHRydWUpIHRvQmVSZXR1cm5lZCA9IHRydWU7XG4gICAgICByZXR1cm4gdG9CZVJldHVybmVkO1xuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkLmpzJztcbmltcG9ydCBwbGFjZVNoaXBzIGZyb20gJy4vcGxhY2VTaGlwcy5qcyc7XG5pbXBvcnQgcGxhY2VTaGlwc0FJIGZyb20gJy4vcGxhY2VTaGlwc0FJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZCgpIHtcbiAgY29uc3QgY3B1QXR0YWNrcyA9IFtdO1xuICBjb25zdCBpc1JlYWR5ID0gZmFsc2U7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3R2FtZUJ1dHRvbicpO1xuICBjb25zdCBib2FyZDFDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQxQ29udGFpbmVyJyk7XG4gIGNvbnN0IGJvYXJkMkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZDJDb250YWluZXInKTtcbiAgY29uc3Qgd2ViQm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMScpO1xuICBjb25zdCB3ZWJCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQyJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJyk7XG4gIG5ld0dhbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZWQnKTtcbiAgYm9hcmQxQ29udGFpbmVyLmNsYXNzTGlzdCA9ICgnYm9hcmQxY29udGFpbmVyIGFjdGl2YXRlZCcpO1xuICBib2FyZDJDb250YWluZXIuY2xhc3NMaXN0ID0gKCdib2FyZDFjb250YWluZXIgYWN0aXZhdGVkJyk7XG4gIGNvbnN0IGJvYXJkMSA9IGdhbWVCb2FyZCgpO1xuICBib2FyZDEuYmVsb25nc1RvUGxheWVyID0gdHJ1ZTtcbiAgY29uc3QgYm9hcmQyID0gZ2FtZUJvYXJkKCk7XG4gIGxldCBjZWxsTnVtYmVyID0gMDtcbiAgYm9hcmQxLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZENlbGwudGV4dENvbnRlbnQgPSBgJHtjZWxsWzBdfSwgJHtjZWxsWzFdfWA7XG4gICAgYm9hcmRDZWxsLmNsYXNzTGlzdCA9ICdjZWxsMSc7XG4gICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoYCR7Y2VsbE51bWJlcn1gKTtcbiAgICBjZWxsTnVtYmVyICs9IDE7XG4gICAgYm9hcmQxLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAubG9jYXRpb24uZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5naWZpZWRDb29yZHMgPSBKU09OLnN0cmluZ2lmeShjZWxsKTtcbiAgICAgICAgY29uc3Qgc3RyaW5naWZpZWRMb2NhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKHN0cmluZ2lmaWVkTG9jYXRpb24gPT09IHN0cmluZ2lmaWVkQ29vcmRzKSB7XG4gICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdCA9ICdjZWxsVGFrZW5CeVBsYXllcic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHdlYkJvYXJkMS5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xuICB9KTtcbiAgYm9hcmQyLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmdW5jdGlvbiBib2FyZENlbGxDbGljaygpIHtcbiAgICAgIGNvbnN0IGNlbGxDb250ZW50cyA9IGBbJHtib2FyZENlbGwudGV4dENvbnRlbnR9XWA7XG4gICAgICBjb25zb2xlLmxvZyhjZWxsQ29udGVudHMpO1xuICAgICAgaWYgKGJvYXJkMi5yZWNlaXZlQXR0YWNrKEpTT04ucGFyc2UoY2VsbENvbnRlbnRzKSkgPT09IHRydWUpIHtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGwyJyk7XG4gICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsVGFrZW5CeVBsYXllcicpO1xuICAgICAgfSBlbHNlIGlmIChib2FyZDIucmVjZWl2ZUF0dGFjayhKU09OLnBhcnNlKGNlbGxDb250ZW50cykpID09PSBmYWxzZSkge1xuICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0ID0gJ2VtcHR5JztcbiAgICAgICAgYm9hcmRDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9hcmRDZWxsQ2xpY2spO1xuICAgICAgfVxuXG4gICAgICBsZXQgc3Vua2VuQ291bnRlciA9IDA7XG4gICAgICBib2FyZDIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmtlblByb3BlcnR5ID09PSB0cnVlKSBzdW5rZW5Db3VudGVyICs9IDE7XG4gICAgICAgIGlmIChzdW5rZW5Db3VudGVyID09PSA1KSBhbGVydCgnSHVtYW4gd2lucyEnKTtcbiAgICAgIH0pO1xuICAgICAgYm9hcmQxLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rZW5Qcm9wZXJ0eSA9PT0gdHJ1ZSkgc3Vua2VuQ291bnRlciArPSAxO1xuICAgICAgICBpZiAoc3Vua2VuQ291bnRlciA9PT0gNSkgYWxlcnQoJ1JvYm90IHdpbnMhJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgYm9hcmRDZWxsLnRleHRDb250ZW50ID0gYCR7Y2VsbFswXX0sICR7Y2VsbFsxXX1gO1xuICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QgPSAnY2VsbDInO1xuICAgIHdlYkJvYXJkMi5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xuICB9KTtcbiAgcGxhY2VTaGlwcyhib2FyZDEsIGJvYXJkMik7XG4gIHBsYWNlU2hpcHNBSShib2FyZDIpO1xuICBzZXRUaW1lb3V0KGNvbnNvbGUubG9nKGJvYXJkMi5zaGlwcyksIDIwMDApO1xufVxuIiwiaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgZ2VuZXJhdGVCb2FyZCBmcm9tICcuL2dlbmVyYXRlQm9hcmQuanMnO1xuaW1wb3J0IHBsYWNlU2hpcHMgZnJvbSAnLi9wbGFjZVNoaXBzLmpzJztcblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdHYW1lQnV0dG9uJyk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZW5lcmF0ZUJvYXJkKCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlckdlbmVyYXRvcihtaW4sIG1heCwgYXJyYXkpIHtcbiAgZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoYXJyLCBpdGVtKSB7XG4gICAgY29uc3QgaXRlbUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgY29uc3QgY29udGFpbnMgPSBhcnIuc29tZSgoZWxlKSA9PiBKU09OLnN0cmluZ2lmeShlbGUpID09PSBpdGVtQXNTdHJpbmcpO1xuICAgIHJldHVybiBjb250YWlucztcbiAgfVxuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICBjb25zdCBmaXJzdE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIGNvbnN0IHNlY29uZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIC8vIGlmICh2ZXJ0aWNhbCAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgcmV0dXJuIFt2ZXJ0aWNhbCwgc2Vjb25kTnVtYmVyXTtcbiAgLy8gfSBpZiAoaG9yaXpvbnRhbCAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgcmV0dXJuIFtmaXJzdE51bWJlciwgaG9yaXpvbnRhbF07XG4gIC8vIH1cbiAgaWYgKGlzQXJyYXlJbkFycmF5KGFycmF5LCBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl0pKSByZXR1cm4gbnVtYmVyR2VuZXJhdG9yKG1pbiwgbWF4LCBhcnJheSk7XG4gIHJldHVybiBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl07XG59XG4iLCJpbXBvcnQgYWRkU2hpcFRvQm9hcmQgZnJvbSAnLi9hZGRTaGlwVG9Cb2FyZC5qcyc7XG5pbXBvcnQgYXR0YWNrTG9naWMgZnJvbSAnLi9hdHRhY2tMb2dpYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlU2hpcHMoYm9hcmQsIG9wcEJvYXJkKSB7XG4gIGNvbnN0IGJvYXJkMVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkMVNoaXBzJyk7XG4gIGNvbnN0IGNhcnJpZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcnJpZXIxLnRleHRDb250ZW50ID0gJ0NhcnJpZXIgKDUgY2VsbHMpJztcbiAgY29uc3QgYmF0dGxlc2hpcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmF0dGxlc2hpcDEudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCAoNCBjZWxscyknO1xuICBjb25zdCBjcnVpc2VyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcnVpc2VyMS50ZXh0Q29udGVudCA9ICdDcnVpc2VyICgzIGNlbGxzKSc7XG4gIGNvbnN0IHN1Ym1hcmluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWFyaW5lMS50ZXh0Q29udGVudCA9ICdTdWJtYXJpbmUgKDMgY2VsbHMpJztcbiAgY29uc3QgZGVzdHJveWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXN0cm95ZXIxLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3llciAoMiBjZWxscyknO1xuICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBbY2FycmllcjEsIGJhdHRsZXNoaXAxLCBjcnVpc2VyMSwgc3VibWFyaW5lMSwgZGVzdHJveWVyMV07XG4gIGNvbnN0IGNhcnJpZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcnJpZXIyLnRleHRDb250ZW50ID0gJ0NhcnJpZXIgKDUgY2VsbHMpJztcbiAgY29uc3QgYmF0dGxlc2hpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmF0dGxlc2hpcDIudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCAoNCBjZWxscyknO1xuICBjb25zdCBjcnVpc2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcnVpc2VyMi50ZXh0Q29udGVudCA9ICdDcnVpc2VyICgzIGNlbGxzKSc7XG4gIGNvbnN0IHN1Ym1hcmluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWFyaW5lMi50ZXh0Q29udGVudCA9ICdTdWJtYXJpbmUgKDMgY2VsbHMpJztcbiAgY29uc3QgZGVzdHJveWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXN0cm95ZXIyLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3llciAoMiBjZWxscyknO1xuICBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHNGb3JTaGlwKGUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZFNoaXBUb0JvYXJkKGUpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBib2FyZC5wbGFjZShyZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coYm9hcmQuc2hpcHMpO1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0Q29vcmRzRm9yU2hpcCk7XG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xuICAgIGlmIChib2FyZC5zaGlwcy5sZW5ndGggPT09IDUpIGF0dGFja0xvZ2ljKGJvYXJkLCBvcHBCb2FyZCk7XG4gIH1cbiAgcGxheWVyMVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBib2FyZDFTaGlwcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0Q29vcmRzRm9yU2hpcCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGFkZFNoaXBUb0JvYXJkQUkgZnJvbSAnLi9hZGRTaGlwVG9Cb2FyZEFJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VTaGlwc0FJKGJvYXJkLCBvcHBCb2FyZCkge1xuICBjb25zdCBib2FyZDJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZDJTaGlwcycpO1xuICBjb25zdCB0YWtlbkNlbGxzID0gW107XG4gIGNvbnN0IGNhcnJpZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcnJpZXIyLnRleHRDb250ZW50ID0gJ0NhcnJpZXIgKDUgY2VsbHMpJztcbiAgY29uc3QgYmF0dGxlc2hpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmF0dGxlc2hpcDIudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCAoNCBjZWxscyknO1xuICBjb25zdCBjcnVpc2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcnVpc2VyMi50ZXh0Q29udGVudCA9ICdDcnVpc2VyICgzIGNlbGxzKSc7XG4gIGNvbnN0IHN1Ym1hcmluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWFyaW5lMi50ZXh0Q29udGVudCA9ICdTdWJtYXJpbmUgKDMgY2VsbHMpJztcbiAgY29uc3QgZGVzdHJveWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXN0cm95ZXIyLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3llciAoMiBjZWxscyknO1xuICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBbY2FycmllcjIsIGJhdHRsZXNoaXAyLCBjcnVpc2VyMiwgc3VibWFyaW5lMiwgZGVzdHJveWVyMl07XG4gIHBsYXllcjJTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgYm9hcmQyU2hpcHMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuICBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHNGb3JTaGlwKGUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZFNoaXBUb0JvYXJkQUkoZSwgdGFrZW5DZWxscyk7XG4gICAgcmVzcG9uc2UuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coY2VsbCk7XG4gICAgICB0YWtlbkNlbGxzLnB1c2goY2VsbCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coYHRha2VuIGNlbGxzOiAke3Rha2VuQ2VsbHN9YCk7XG4gICAgYm9hcmQucGxhY2UocmVzcG9uc2UpO1xuICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRDb29yZHNGb3JTaGlwKTtcbiAgICBlLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcbiAgICBjb25zb2xlLmxvZyhib2FyZC5zaGlwcyk7XG4gIH1cbiAgZ2V0Q29vcmRzRm9yU2hpcChjYXJyaWVyMik7XG4gIGdldENvb3Jkc0ZvclNoaXAoYmF0dGxlc2hpcDIpO1xuICBnZXRDb29yZHNGb3JTaGlwKGNydWlzZXIyKTtcbiAgZ2V0Q29vcmRzRm9yU2hpcChzdWJtYXJpbmUyKTtcbiAgZ2V0Q29vcmRzRm9yU2hpcChkZXN0cm95ZXIyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoLi4uY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBjb29yZGluYXRlcztcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIGxvY2F0aW9uWzBdLmZvckVhY2goKCkgPT4ge1xuICAgIGxlbmd0aCArPSAxO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBoaXRzOiAwLFxuICAgIGxlbmd0aCxcbiAgICBpc1N1bmtlblByb3BlcnR5OiBmYWxzZSxcbiAgICBoaXQoaGl0cykge1xuICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmlzU3Vua2VuUHJvcGVydHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYExlbmd0aDogJHt0aGlzLmxlbmd0aH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBIaXRzOiAke3RoaXMuaGl0c31gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBTdW5rZW4gcHJvcGVydHk6ICR7dGhpcy5pc1N1bmtlblByb3BlcnR5fWApO1xuICAgIH0sXG4gICAgbG9jYXRpb24sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiYWRkU2hpcFRvQm9hcmQiLCJlIiwiaXNBcnJheUluQXJyYXkiLCJhcnIiLCJpdGVtIiwiaXRlbUFzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRhaW5zIiwic29tZSIsImVsZSIsImFycmF5T2ZDb29yZHMiLCJudW1iZXJPZkNlbGxzIiwiY291bnRlciIsImNsYXNzQ291bnRlciIsInRhcmdldCIsInN0eWxlIiwiY29sb3IiLCJjaGVja01hcmtEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNyb3NzTWFya0RpdiIsImFwcGVuZENoaWxkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbmNsdWRlcyIsImNsYXNzVG9CZUFkZGVkIiwiYWxsUDFDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb29yZGluYXRlcyIsImYiLCJ0b0NvbXBhcmUxIiwic2xpY2UiLCJ0b0NvbXBhcmUwIiwidG9CZUFkZGVkIiwicGFyc2UiLCJsZW5ndGgiLCJ0b0NvbXBhcmUyIiwiY2xhc3NMaXN0IiwicHVzaCIsImZvckVhY2giLCJjZWxsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwiY2VsbHNUYWtlbiIsInJlbW92ZSIsImFkZCIsImFsbEJvYXJkMUNlbGxzIiwibnVtYmVyR2VuZXJhdG9yIiwiY29pbkZsaXAiLCJhZGRTaGlwVG9Cb2FyZEFJIiwiYXJyYXkiLCJjb29yZHNGaWx0ZXIiLCJudW1iZXIiLCJyYW5kb20xIiwicmFuZG9tMiIsInJhbmRvbTMiLCJvcmlnaW5hbE51bSIsInRvQ29tcGFyZSIsInVuZGVmaW5lZCIsIk5hTiIsInRha2VuQ2VsbHMiLCJjb25zb2xlIiwibG9nIiwic2Vjb25kT3JpZ2luYWwiLCJudW1iZXIxIiwiY29vcmQiLCJhdHRhY2tMb2dpYyIsImJvYXJkMSIsImJvYXJkMiIsInJlY2VpdmVBdHRhY2siLCJpc0FycmF5SW5BcnJheU9yaWdpbmFsIiwiY3B1QXR0YWNrcyIsImJvYXJkMUNlbGxzIiwiYm9hcmQyQ2VsbHMiLCJib2FyZENlbGxDbGljayIsImNlbGwyQ29udGVudHMiLCJzdW5rZW5Db3VudGVyMiIsInNoaXBzIiwic2hpcCIsImlzU3Vua2VuUHJvcGVydHkiLCJyYW5kb21DUFVhdHRhY2siLCJjbGFzc0NoZWNrZXIiLCJ0b0JlUmV0dXJuZWQiLCJjZWxsVGFrZW5CeVBsYXllcjIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2VsbFRha2VuQnlQbGF5ZXIzIiwiY2VsbFRha2VuQnlQbGF5ZXIzQ3J1aXNlciIsImNlbGxUYWtlbkJ5UGxheWVyNCIsImNlbGxUYWtlbkJ5UGxheWVyNSIsInBsYXllckNlbGwxIiwiaSIsInRlc3QxIiwiaiIsImsiLCJsIiwibSIsImF0dGFja2VkQ2VsbEluZGV4IiwiYm9hcmQiLCJjZWxsVG9CZU1vZGlmaWVkIiwidmFsdWUiLCJzdW5rZW5Db3VudGVyMSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlNoaXAiLCJnYW1lQm9hcmQiLCJib2FyZFRvUmV0dXJuIiwiYmVsb25nc1RvUGxheWVyIiwiYWxsU2hpcHNTdW5rZW4iLCJtaXNzZWRBdHRhY2tzIiwicGxhY2UiLCJlbGVtZW50IiwiRXJyb3IiLCJzdW5rZW5Db3VudGVyIiwiY2FsbGVkIiwibG9jYXRpb24iLCJoaXQiLCJwbGFjZVNoaXBzIiwicGxhY2VTaGlwc0FJIiwiZ2VuZXJhdGVCb2FyZCIsImlzUmVhZHkiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdHYW1lQnV0dG9uIiwiYm9hcmQxQ29udGFpbmVyIiwiYm9hcmQyQ29udGFpbmVyIiwid2ViQm9hcmQxIiwid2ViQm9hcmQyIiwiY2VsbE51bWJlciIsImJvYXJkQ2VsbCIsInN0cmluZ2lmaWVkQ29vcmRzIiwic3RyaW5naWZpZWRMb2NhdGlvbiIsImNlbGxDb250ZW50cyIsInNldFRpbWVvdXQiLCJjc3MiLCJjZWlsIiwiZmlyc3ROdW1iZXIiLCJzZWNvbmROdW1iZXIiLCJvcHBCb2FyZCIsImJvYXJkMVNoaXBzIiwiY2FycmllcjEiLCJiYXR0bGVzaGlwMSIsImNydWlzZXIxIiwic3VibWFyaW5lMSIsImRlc3Ryb3llcjEiLCJwbGF5ZXIxU2hpcHMiLCJjYXJyaWVyMiIsImJhdHRsZXNoaXAyIiwiY3J1aXNlcjIiLCJzdWJtYXJpbmUyIiwiZGVzdHJveWVyMiIsImdldENvb3Jkc0ZvclNoaXAiLCJyZXNwb25zZSIsImJvYXJkMlNoaXBzIiwicGxheWVyMlNoaXBzIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=
