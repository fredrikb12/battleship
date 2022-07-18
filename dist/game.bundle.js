/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  gap: 4%;\n  background-color: #165ebd;\n}\n\n#main-wrapper {\n  display: flex;\n  gap: 70px;\n}\n\n#header {\n  font-size: 3.5rem;\n  color: #ffae34;\n  margin-top: 5vh;\n}\n\n#prompt {\n  font-size: 1.2rem;\n  color: #000000;\n}\n\n#orientation-button {\n  height: 2em;\n  width: 200px;\n  background-color: #11276d;\n  border: 1px solid rgb(0, 14, 78);\n  border-radius: 8px;\n  color: white;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 5px 0 rgb(41, 45, 58);\n}\n\n#orientation-button:hover {\n  background-color: #002cbd;\n  cursor: pointer;\n}\n\n.wrapper > h1 {\n  color: #ffdbb5;\n}\n\n.wrapper {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 15px;\n  border: 1px solid black;\n  padding: 10px;\n  background-color: hsl(197, 60%, 24%);\n  box-shadow: 3px 5px 10px 0 #252525;\n}\n\n.grid {\n  display: flex;\n  width: 35vh;\n  height: 35vh;\n  gap: 4px;\n  padding: 15px;\n}\n\n.col {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.square {\n  width: 100%;\n  height: 10%;\n  border: 1px solid black;\n  box-shadow: 1px 1px 4px 0px #272727;\n  background-color: hsl(197, 80%, 45%);\n}\n\n.ship-square {\n  background-color: hsl(197, 25%, 25%);\n  border: 1px solid #926d42;\n}\n\n.miss {\n  background-color: #ee2727;\n  border: 1px solid #6e0000;\n}\n\n.hit {\n  background-color: #8bff3e;\n  border: 1px solid #66ff00;\n}\n\n.selected {\n  background-color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,oCAAoC;EACpC,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  gap: 4%;\n  background-color: #165ebd;\n}\n\n#main-wrapper {\n  display: flex;\n  gap: 70px;\n}\n\n#header {\n  font-size: 3.5rem;\n  color: #ffae34;\n  margin-top: 5vh;\n}\n\n#prompt {\n  font-size: 1.2rem;\n  color: #000000;\n}\n\n#orientation-button {\n  height: 2em;\n  width: 200px;\n  background-color: #11276d;\n  border: 1px solid rgb(0, 14, 78);\n  border-radius: 8px;\n  color: white;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 5px 0 rgb(41, 45, 58);\n}\n\n#orientation-button:hover {\n  background-color: #002cbd;\n  cursor: pointer;\n}\n\n.wrapper > h1 {\n  color: #ffdbb5;\n}\n\n.wrapper {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 15px;\n  border: 1px solid black;\n  padding: 10px;\n  background-color: hsl(197, 60%, 24%);\n  box-shadow: 3px 5px 10px 0 #252525;\n}\n\n.grid {\n  display: flex;\n  width: 35vh;\n  height: 35vh;\n  gap: 4px;\n  padding: 15px;\n}\n\n.col {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.square {\n  width: 100%;\n  height: 10%;\n  border: 1px solid black;\n  box-shadow: 1px 1px 4px 0px #272727;\n  background-color: hsl(197, 80%, 45%);\n}\n\n.ship-square {\n  background-color: hsl(197, 25%, 25%);\n  border: 1px solid #926d42;\n}\n\n.miss {\n  background-color: #ee2727;\n  border: 1px solid #6e0000;\n}\n\n.hit {\n  background-color: #8bff3e;\n  border: 1px solid #66ff00;\n}\n\n.selected {\n  background-color: #fff;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const Gameboard = function () {
  const starterShips = [5, 4, 3, 3, 2];
  const ships = [];
  const missedHits = [];

  const placeShip = (startCoord, endCoord) => {
    if (startCoord.x !== endCoord.x && startCoord.y !== endCoord.y)
      throw Error("Invalid coordinates, ship is diagonally placed");

    const checkedCoords = [startCoord, endCoord].filter((coord) => {
      return coord.x < 1 || coord.y < 1 || coord.x > 10 || coord.y > 10;
    });
    if (checkedCoords.length > 0) throw Error("Invalid coordinate range");
    if (getShipByCoordinates(ships, startCoord, endCoord)) return;

    if (startCoord.x > endCoord.x || startCoord.y > endCoord.y) {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(getLength(endCoord, startCoord));
      ships.push({ ship: ship, start: endCoord, end: startCoord });
    } else {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(getLength(startCoord, endCoord));
      ships.push({ ship: ship, start: startCoord, end: endCoord });
    }
    return true;
  };

  const receiveAttack = (coord) => {
    const hitShip = getShipByCoordinates(ships, coord);
    if (!hitShip) {
      missedHits.push(coord);
      return { hit: false, coord: coord };
    }
    hitShip.ship.hit(getHitPosition(hitShip.start, hitShip.end, coord));
    return { hit: true, coord: coord };
  };

  const getShipCount = () => {
    return ships.length;
  };

  const getMissedHits = () => {
    return [...missedHits];
  };

  const areShipsSunk = () => {
    const sunkShips = ships.filter((ship) => {
      return ship.ship.isSunk();
    });
    return sunkShips.length === ships.length ? true : false;
  };

  const coordinateHasShip = (coord) => {
    const ship = getShipByCoordinates(ships, coord);
    if (ship === null) return false;
    return true;
  };

  const getSuggestedPlacement = (coord, length, orientation) => {
    const coords = [];
    const adjustedCoords = [];
    const returnCoords = [];
    for (let i = 0; i < length; i++) {
      if (orientation === "x") coords.push({ x: coord.x + i, y: coord.y });
      if (orientation === "y") coords.push({ x: coord.x, y: coord.y + i });
    }
    switch (coord[orientation] + length - 1) {
      case 11:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 1));
        break;

      case 12:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 2));
        break;

      case 13:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 3));
        break;

      case 14:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 4));
        break;

      default:
        return coords;
    }
    adjustedCoords.forEach((adjusted) => {
      if (orientation === "x") {
        returnCoords.push({ x: adjusted, y: coord.y });
      } else {
        returnCoords.push({ x: coord.x, y: adjusted });
      }
    });
    return returnCoords;
  };

  const getShipToPlace = () => {
    return starterShips[ships.length];
  };

  function getShipByCoordinates(shipArray, start, end) {
    if (!start) return;
    if (!end) {
      const [foundShip] = shipArray.filter((ship) => {
        return (
          ship.start.x <= start.x &&
          ship.start.y <= start.y &&
          ship.end.x >= start.x &&
          ship.end.y >= start.y
        );
      });
      if (!foundShip) return null;
      return foundShip;
    }
    const coords = getAllCoordinates(start, end);
    const foundShips = coords.map((coord) => coordinateHasShip(coord));

    if (
      foundShips.filter((el) => {
        return el !== false;
      }).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  return {
    placeShip,
    receiveAttack,
    getShipCount,
    getMissedHits,
    areShipsSunk,
    coordinateHasShip,
    getSuggestedPlacement,
    getShipToPlace,
  };
};

function getLength(start, end) {
  return (
    Math.sqrt(
      (start.x - end.x) * (start.x - end.x) +
        (start.y - end.y) * (start.y - end.y)
    ) + 1
  );
}

function getHitPosition(start, end, hitCoord) {
  if (start.x !== end.x) {
    for (let i = 0; i <= Math.abs(start.x - end.x); i++) {
      if (start.x + i === hitCoord.x && start.y === hitCoord.y) {
        return i;
      }
    }
  } else {
    for (let i = 0; i <= Math.abs(start.y - end.y); i++) {
      if (start.x === hitCoord.x && start.y + i === hitCoord.y) return i;
    }
  }
}

function getAllCoordinates(start, end) {
  const coords = [];
  if (start.x !== end.x) {
    for (let i = 0; i <= Math.abs(end.x - start.x); i++) {
      coords.push({ x: start.x + i, y: start.y });
    }
  } else {
    for (let i = 0; i <= Math.abs(end.y - start.y); i++) {
      coords.push({ x: start.x, y: start.y + i });
    }
  }
  return coords;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const Player = function (name) {
  if (typeof name !== "string") name = "Player 1";

  const previousAttacks = [];
  const possibleAttacks = [];
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let isNext = false;

  const getName = () => name;

  const setIsNext = (bool) => (isNext = bool);

  const makeAttack = (target, coord) => {
    if (!isNext) throw Error(`${getName()} is not next!`);
    if (target === gameboard) throw Error("Can't attack own gameboard!");
    let wasHit;

    if (name === "computer" || name === "Computer") {
      const attack = getComputerAttack();
      wasHit = target.receiveAttack(attack);
      previousAttacks.push(attack);
    } else {
      wasHit = target.receiveAttack(coord);
      previousAttacks.push(coord);
    }
    return wasHit;
  };

  const getComputerAttack = () => {
    const attack =
      possibleAttacks[Math.floor(Math.random() * possibleAttacks.length)];
    possibleAttacks.splice(possibleAttacks.indexOf(attack), 1);
   
    return attack;
  };

  const getComputerPlacement = () => {
    const placement = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    };
    const orientation = Math.floor(Math.random() * 2 + 1) === 1 ? "x" : "y";
    return { placement, orientation };
  };

  const fillPossibleAttack = () => {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        possibleAttacks.push({ x: i, y: j });
      }
    }
  };

  const hasAlreadyClicked = (coord) => {
    return previousAttacks.find(
      (el) => el.x === coord.x && el.y === coord.y
    ) !== undefined
      ? true
      : false;
  };

  return {
    gameboard,
    getName,
    makeAttack,
    setIsNext,
    fillPossibleAttack,
    hasAlreadyClicked,
    getComputerPlacement,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = function (size) {
  if (typeof size !== "number") throw Error("Incorrect type for hit creation");
  if (size < 2) throw Error("Size too low");
  const length = parseInt(size);
  const hits = [];

  const hit = (pos) => {
    if (typeof pos !== "number") throw Error("Incorrect type for hit");
    if (isSunk()) return;
    if (hits.includes(pos)) return;
    hits.push(pos);
  };

  const isSunk = () => {
    return hits.length === length ? true : false;
  };

  return {
    hit,
    isSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UI = (() => {
  let orientation = "x";

  const createBoard = (player, opponent, isPlayerBoard, gameIsOver) => {
    const boardWrapper = document.createElement("div");
    boardWrapper.classList.add("wrapper");
    if (!isPlayerBoard) boardWrapper.setAttribute("id", "computer-board");
    if (isPlayerBoard) boardWrapper.setAttribute("id", "player-board");
    const h1 = document.createElement("h1");
    h1.textContent = player.getName();
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i = 1; i < 11; i++) {
      const col = document.createElement("div");
      col.classList.add("col");
      for (let j = 1; j < 11; j++) {
        const square = document.createElement("div");
        square.dataset.x = i;
        square.dataset.y = j;
        square.classList.add("square");
        if (
          player.getName() !== "Computer" &&
          !gameIsOver &&
          player.gameboard.coordinateHasShip({ x: i, y: j })
        ) {
          square.classList.add("ship-square");
        } else if (gameIsOver) {
          if (
            player.gameboard.coordinateHasShip({ x: i, y: j }) &&
            opponent.hasAlreadyClicked({ x: i, y: j })
          ) {
            square.classList.add("hit");
          } else if (opponent.hasAlreadyClicked({ x: i, y: j })) {
            square.classList.add("miss");
          } else if (player.gameboard.coordinateHasShip({ x: i, y: j })) {
            square.classList.add("ship-square");
          }
        }

        col.appendChild(square);
      }
      grid.appendChild(col);
    }
    boardWrapper.appendChild(h1);
    boardWrapper.appendChild(grid);
    return boardWrapper;
  };

  const renderHitStatus = (hitStatus, el) => {
    if (hitStatus.hit) el.classList.add("hit");
    else el.classList.add("miss");
  };

  const getElementByCoord = ({ x, y }) => {
    let foundChild;
    const grid = document.querySelector("#player-board");
    const squares = grid.querySelectorAll(".square");
    squares.forEach((square) => {
      if (
        parseInt(square.dataset.x) === x &&
        parseInt(square.dataset.y) === y
      ) {
        foundChild = square;
      }
    });
    return foundChild;
  };

  const addWinHeader = (winner) => {
    const header = document.getElementById("header");
    header.textContent = `${winner.getName()} won!`;
  };

  const createWrapper = () => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "main-wrapper");
    document.body.appendChild(wrapper);
  };

  const createHeader = () => {
    const header = document.createElement("h1");
    header.setAttribute("id", "header");
    header.textContent = "Battleship";
    document.body.prepend(header);
  };

  const getOrientation = () => {
    return orientation;
  };

  const switchOrientation = () => {
    orientation = orientation === "x" ? "y" : "x";
  };

  const createOrientationButton = () => {
    const button = document.createElement("button");
    button.textContent = `Switch orientation: ${getOrientation()}`;
    button.setAttribute("id", "orientation-button");
    button.addEventListener("click", (e) => {
      switchOrientation();
      button.textContent = `Switch orientation: ${getOrientation()}`;
    });
    return button;
  };

  const addSelection = (coords, isShip) => {
    const elements = coords.map((coord) => {
      return document.querySelector(
        `[data-x="${coord.x.toString()}"][data-y="${coord.y.toString()}"]`
      );
    });
    elements.forEach((element) => {
      if (!isShip) element.classList.add("selected");
      else element.classList.add("ship-square");
    });
  };

  const removeSelections = () => {
    document.querySelectorAll(".selected").forEach((element) => {
      element.classList.remove("selected");
    });
  };

  const createPrompt = (text) => {
    const prompt = document.createElement("p");
    prompt.setAttribute("id", "prompt");
    prompt.textContent = "Place your ships to continue...";
    if (text) prompt.textContent = text;
    document.body.prepend(prompt);
  };

  const setPromptText = (text) => {
    document.getElementById("prompt").textContent = text;
  };
  return {
    createBoard,
    renderHitStatus,
    getElementByCoord,
    addWinHeader,
    createWrapper,
    createHeader,
    getOrientation,
    switchOrientation,
    createOrientationButton,
    addSelection,
    removeSelections,
    createPrompt,
    setPromptText,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




const game = (() => {
  const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("You");

  const comp = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("Computer");

  comp.fillPossibleAttack();

  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].createWrapper();
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].createPrompt();
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].createHeader();

  document
    .getElementById("main-wrapper")
    .appendChild(_ui__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(player, comp, true, false));
  document
    .getElementById("main-wrapper")
    .appendChild(_ui__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(comp, player, false, false));

  const playerDOMBoard = document.getElementById("player-board");
  playerDOMBoard.appendChild(_ui__WEBPACK_IMPORTED_MODULE_1__["default"].createOrientationButton());

  playerDOMBoard.addEventListener("mouseover", (e) => {
    if (player.gameboard.getShipCount() >= 5) return;
    if (!e.target.classList.contains("square")) return;
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].removeSelections();
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].addSelection(
      player.gameboard.getSuggestedPlacement(
        { x: parseInt(e.target.dataset.x), y: parseInt(e.target.dataset.y) },
        player.gameboard.getShipToPlace(),
        _ui__WEBPACK_IMPORTED_MODULE_1__["default"].getOrientation()
      )
    );
  });

  playerDOMBoard.addEventListener("mouseout", (e) => {
    if (player.gameboard.getShipCount() >= 5) return;
    if (e.target.classList.contains("square")) return;
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].removeSelections();
  });

  playerDOMBoard.addEventListener("mousedown", (e) => {
    if (player.gameboard.getShipCount() >= 5) return;
    if (!e.target.classList.contains("square")) return;
    const placement = player.gameboard.getSuggestedPlacement(
      { x: parseInt(e.target.dataset.x), y: parseInt(e.target.dataset.y) },
      player.gameboard.getShipToPlace(),
      _ui__WEBPACK_IMPORTED_MODULE_1__["default"].getOrientation()
    );
    const wasPlaced = player.gameboard.placeShip(
      placement[0],
      placement[placement.length - 1]
    );
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].addSelection(placement, wasPlaced);
    if (wasPlaced) {
      let compPlaced = false;
      do {
        const returned = comp.getComputerPlacement();
        const coords = comp.gameboard.getSuggestedPlacement(
          returned.placement,
          comp.gameboard.getShipToPlace(),
          returned.orientation
        );
        compPlaced = comp.gameboard.placeShip(
          coords[0],
          coords[coords.length - 1]
        );
      } while (!compPlaced);
    }
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].removeSelections();
    if (player.gameboard.getShipCount() >= 5) {
      document.getElementById("orientation-button").remove();
      _ui__WEBPACK_IMPORTED_MODULE_1__["default"].setPromptText("Fire at your opponent's board to continue!");
      document
        .getElementById("computer-board")
        .addEventListener("click", (e) => {
          if (!e.target.classList.contains("square")) return;

          const clickedCoord = {
            x: parseInt(e.target.dataset.x),
            y: parseInt(e.target.dataset.y),
          };
          if (player.hasAlreadyClicked(clickedCoord)) return;
          player.setIsNext(true);

          const playerHitStatus = player.makeAttack(comp.gameboard, {
            x: parseInt(e.target.dataset.x),
            y: parseInt(e.target.dataset.y),
          });
          _ui__WEBPACK_IMPORTED_MODULE_1__["default"].setPromptText(
            playerHitStatus.hit === true
              ? "You hit! Fire again to continue..."
              : "You missed! Fire again to continue..."
          );
          _ui__WEBPACK_IMPORTED_MODULE_1__["default"].renderHitStatus(playerHitStatus, e.target);
          player.setIsNext(false);

          let [winner, loser] = isGameOver(player, comp);
          if (winner && loser) {
            _ui__WEBPACK_IMPORTED_MODULE_1__["default"].setPromptText("You hit and destroyed the opponent's last ship!");
            gameOver(winner, loser);
          } else {
            comp.setIsNext(true);
            const compHitStatus = comp.makeAttack(player.gameboard);
            const compHitTarget = _ui__WEBPACK_IMPORTED_MODULE_1__["default"].getElementByCoord(compHitStatus.coord);
            _ui__WEBPACK_IMPORTED_MODULE_1__["default"].renderHitStatus(compHitStatus, compHitTarget);
            comp.setIsNext(false);
            [winner, loser] = isGameOver(player, comp);
            if (winner && loser) gameOver(winner, loser);
          }
        });
    }
  });
})();

function isGameOver(player1, player2) {
  if (player1.gameboard.areShipsSunk()) return [player2, player1];
  if (player2.gameboard.areShipsSunk()) return [player1, player2];
  return [false, false];
}

function gameOver(winner, loser) {
  const mainWrapper = document.getElementById("main-wrapper");
  const boards = document.querySelectorAll(".wrapper");
  boards.forEach((board) => board.remove());
  const winnerBoard = _ui__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(
    winner,
    loser,
    winner.getName() !== "Computer",
    true
  );

  const loserBoard = _ui__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(
    loser,
    winner,
    loser.getName() !== "Computer",
    true
  );

  if (winner.getName() === "Computer") {
    mainWrapper.appendChild(loserBoard);
    mainWrapper.appendChild(winnerBoard);
  } else {
    mainWrapper.appendChild(winnerBoard);
    mainWrapper.appendChild(loserBoard);
  }
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].addWinHeader(winner);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ2FwOiA0JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjVlYmQ7XFxufVxcblxcbiNtYWluLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNzBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGNvbG9yOiAjZmZhZTM0O1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbn1cXG5cXG4jcHJvbXB0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbiNvcmllbnRhdGlvbi1idXR0b24ge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyNzZkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE0LCA3OCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDAgcmdiKDQxLCA0NSwgNTgpO1xcbn1cXG5cXG4jb3JpZW50YXRpb24tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJjYmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53cmFwcGVyID4gaDEge1xcbiAgY29sb3I6ICNmZmRiYjU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTcsIDYwJSwgMjQlKTtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCAwICMyNTI1MjU7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzV2aDtcXG4gIGhlaWdodDogMzV2aDtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAwcHggIzI3MjcyNztcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTcsIDgwJSwgNDUlKTtcXG59XFxuXFxuLnNoaXAtc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTcsIDI1JSwgMjUlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MjZkNDI7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTI3Mjc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmUwMDAwO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmZmM2U7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjZmZjAwO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixPQUFPO0VBQ1AseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ2FwOiA0JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjVlYmQ7XFxufVxcblxcbiNtYWluLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNzBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGNvbG9yOiAjZmZhZTM0O1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbn1cXG5cXG4jcHJvbXB0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbiNvcmllbnRhdGlvbi1idXR0b24ge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyNzZkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE0LCA3OCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDAgcmdiKDQxLCA0NSwgNTgpO1xcbn1cXG5cXG4jb3JpZW50YXRpb24tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJjYmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53cmFwcGVyID4gaDEge1xcbiAgY29sb3I6ICNmZmRiYjU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTcsIDYwJSwgMjQlKTtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCAwICMyNTI1MjU7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzV2aDtcXG4gIGhlaWdodDogMzV2aDtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAwcHggIzI3MjcyNztcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTcsIDgwJSwgNDUlKTtcXG59XFxuXFxuLnNoaXAtc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTcsIDI1JSwgMjUlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MjZkNDI7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTI3Mjc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmUwMDAwO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmZmM2U7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjZmZjAwO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdGFydGVyU2hpcHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NlZEhpdHMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc3RhcnRDb29yZCwgZW5kQ29vcmQpID0+IHtcbiAgICBpZiAoc3RhcnRDb29yZC54ICE9PSBlbmRDb29yZC54ICYmIHN0YXJ0Q29vcmQueSAhPT0gZW5kQ29vcmQueSlcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlcywgc2hpcCBpcyBkaWFnb25hbGx5IHBsYWNlZFwiKTtcblxuICAgIGNvbnN0IGNoZWNrZWRDb29yZHMgPSBbc3RhcnRDb29yZCwgZW5kQ29vcmRdLmZpbHRlcigoY29vcmQpID0+IHtcbiAgICAgIHJldHVybiBjb29yZC54IDwgMSB8fCBjb29yZC55IDwgMSB8fCBjb29yZC54ID4gMTAgfHwgY29vcmQueSA+IDEwO1xuICAgIH0pO1xuICAgIGlmIChjaGVja2VkQ29vcmRzLmxlbmd0aCA+IDApIHRocm93IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlIHJhbmdlXCIpO1xuICAgIGlmIChnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgc3RhcnRDb29yZCwgZW5kQ29vcmQpKSByZXR1cm47XG5cbiAgICBpZiAoc3RhcnRDb29yZC54ID4gZW5kQ29vcmQueCB8fCBzdGFydENvb3JkLnkgPiBlbmRDb29yZC55KSB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoZW5kQ29vcmQsIHN0YXJ0Q29vcmQpKTtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwOiBzaGlwLCBzdGFydDogZW5kQ29vcmQsIGVuZDogc3RhcnRDb29yZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoZ2V0TGVuZ3RoKHN0YXJ0Q29vcmQsIGVuZENvb3JkKSk7XG4gICAgICBzaGlwcy5wdXNoKHsgc2hpcDogc2hpcCwgc3RhcnQ6IHN0YXJ0Q29vcmQsIGVuZDogZW5kQ29vcmQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBjb25zdCBoaXRTaGlwID0gZ2V0U2hpcEJ5Q29vcmRpbmF0ZXMoc2hpcHMsIGNvb3JkKTtcbiAgICBpZiAoIWhpdFNoaXApIHtcbiAgICAgIG1pc3NlZEhpdHMucHVzaChjb29yZCk7XG4gICAgICByZXR1cm4geyBoaXQ6IGZhbHNlLCBjb29yZDogY29vcmQgfTtcbiAgICB9XG4gICAgaGl0U2hpcC5zaGlwLmhpdChnZXRIaXRQb3NpdGlvbihoaXRTaGlwLnN0YXJ0LCBoaXRTaGlwLmVuZCwgY29vcmQpKTtcbiAgICByZXR1cm4geyBoaXQ6IHRydWUsIGNvb3JkOiBjb29yZCB9O1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBDb3VudCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHMubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGdldE1pc3NlZEhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5taXNzZWRIaXRzXTtcbiAgfTtcblxuICBjb25zdCBhcmVTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3Vua1NoaXBzID0gc2hpcHMuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5zaGlwLmlzU3VuaygpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdW5rU2hpcHMubGVuZ3RoID09PSBzaGlwcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29vcmRpbmF0ZUhhc1NoaXAgPSAoY29vcmQpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcEJ5Q29vcmRpbmF0ZXMoc2hpcHMsIGNvb3JkKTtcbiAgICBpZiAoc2hpcCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldFN1Z2dlc3RlZFBsYWNlbWVudCA9IChjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGNvbnN0IGFkanVzdGVkQ29vcmRzID0gW107XG4gICAgY29uc3QgcmV0dXJuQ29vcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInhcIikgY29vcmRzLnB1c2goeyB4OiBjb29yZC54ICsgaSwgeTogY29vcmQueSB9KTtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ5XCIpIGNvb3Jkcy5wdXNoKHsgeDogY29vcmQueCwgeTogY29vcmQueSArIGkgfSk7XG4gICAgfVxuICAgIHN3aXRjaCAoY29vcmRbb3JpZW50YXRpb25dICsgbGVuZ3RoIC0gMSkge1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiBhZGp1c3RlZENvb3Jkcy5wdXNoKGNvb3JkW29yaWVudGF0aW9uXSAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4gYWRqdXN0ZWRDb29yZHMucHVzaChjb29yZFtvcmllbnRhdGlvbl0gLSAyKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEzOlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gMykpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxNDpcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiBhZGp1c3RlZENvb3Jkcy5wdXNoKGNvb3JkW29yaWVudGF0aW9uXSAtIDQpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfVxuICAgIGFkanVzdGVkQ29vcmRzLmZvckVhY2goKGFkanVzdGVkKSA9PiB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwieFwiKSB7XG4gICAgICAgIHJldHVybkNvb3Jkcy5wdXNoKHsgeDogYWRqdXN0ZWQsIHk6IGNvb3JkLnkgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5Db29yZHMucHVzaCh7IHg6IGNvb3JkLngsIHk6IGFkanVzdGVkIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5Db29yZHM7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcFRvUGxhY2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXJ0ZXJTaGlwc1tzaGlwcy5sZW5ndGhdO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNoaXBCeUNvb3JkaW5hdGVzKHNoaXBBcnJheSwgc3RhcnQsIGVuZCkge1xuICAgIGlmICghc3RhcnQpIHJldHVybjtcbiAgICBpZiAoIWVuZCkge1xuICAgICAgY29uc3QgW2ZvdW5kU2hpcF0gPSBzaGlwQXJyYXkuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc2hpcC5zdGFydC54IDw9IHN0YXJ0LnggJiZcbiAgICAgICAgICBzaGlwLnN0YXJ0LnkgPD0gc3RhcnQueSAmJlxuICAgICAgICAgIHNoaXAuZW5kLnggPj0gc3RhcnQueCAmJlxuICAgICAgICAgIHNoaXAuZW5kLnkgPj0gc3RhcnQueVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWZvdW5kU2hpcCkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gZm91bmRTaGlwO1xuICAgIH1cbiAgICBjb25zdCBjb29yZHMgPSBnZXRBbGxDb29yZGluYXRlcyhzdGFydCwgZW5kKTtcbiAgICBjb25zdCBmb3VuZFNoaXBzID0gY29vcmRzLm1hcCgoY29vcmQpID0+IGNvb3JkaW5hdGVIYXNTaGlwKGNvb3JkKSk7XG5cbiAgICBpZiAoXG4gICAgICBmb3VuZFNoaXBzLmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGVsICE9PSBmYWxzZTtcbiAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRTaGlwQ291bnQsXG4gICAgZ2V0TWlzc2VkSGl0cyxcbiAgICBhcmVTaGlwc1N1bmssXG4gICAgY29vcmRpbmF0ZUhhc1NoaXAsXG4gICAgZ2V0U3VnZ2VzdGVkUGxhY2VtZW50LFxuICAgIGdldFNoaXBUb1BsYWNlLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0TGVuZ3RoKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLnNxcnQoXG4gICAgICAoc3RhcnQueCAtIGVuZC54KSAqIChzdGFydC54IC0gZW5kLngpICtcbiAgICAgICAgKHN0YXJ0LnkgLSBlbmQueSkgKiAoc3RhcnQueSAtIGVuZC55KVxuICAgICkgKyAxXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldEhpdFBvc2l0aW9uKHN0YXJ0LCBlbmQsIGhpdENvb3JkKSB7XG4gIGlmIChzdGFydC54ICE9PSBlbmQueCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKHN0YXJ0LnggLSBlbmQueCk7IGkrKykge1xuICAgICAgaWYgKHN0YXJ0LnggKyBpID09PSBoaXRDb29yZC54ICYmIHN0YXJ0LnkgPT09IGhpdENvb3JkLnkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKHN0YXJ0LnkgLSBlbmQueSk7IGkrKykge1xuICAgICAgaWYgKHN0YXJ0LnggPT09IGhpdENvb3JkLnggJiYgc3RhcnQueSArIGkgPT09IGhpdENvb3JkLnkpIHJldHVybiBpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbGxDb29yZGluYXRlcyhzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBpZiAoc3RhcnQueCAhPT0gZW5kLngpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhlbmQueCAtIHN0YXJ0LngpOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKHsgeDogc3RhcnQueCArIGksIHk6IHN0YXJ0LnkgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKGVuZC55IC0gc3RhcnQueSk7IGkrKykge1xuICAgICAgY29vcmRzLnB1c2goeyB4OiBzdGFydC54LCB5OiBzdGFydC55ICsgaSB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSBuYW1lID0gXCJQbGF5ZXIgMVwiO1xuXG4gIGNvbnN0IHByZXZpb3VzQXR0YWNrcyA9IFtdO1xuICBjb25zdCBwb3NzaWJsZUF0dGFja3MgPSBbXTtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBpc05leHQgPSBmYWxzZTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICBjb25zdCBzZXRJc05leHQgPSAoYm9vbCkgPT4gKGlzTmV4dCA9IGJvb2wpO1xuXG4gIGNvbnN0IG1ha2VBdHRhY2sgPSAodGFyZ2V0LCBjb29yZCkgPT4ge1xuICAgIGlmICghaXNOZXh0KSB0aHJvdyBFcnJvcihgJHtnZXROYW1lKCl9IGlzIG5vdCBuZXh0IWApO1xuICAgIGlmICh0YXJnZXQgPT09IGdhbWVib2FyZCkgdGhyb3cgRXJyb3IoXCJDYW4ndCBhdHRhY2sgb3duIGdhbWVib2FyZCFcIik7XG4gICAgbGV0IHdhc0hpdDtcblxuICAgIGlmIChuYW1lID09PSBcImNvbXB1dGVyXCIgfHwgbmFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgICBjb25zdCBhdHRhY2sgPSBnZXRDb21wdXRlckF0dGFjaygpO1xuICAgICAgd2FzSGl0ID0gdGFyZ2V0LnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICAgIHByZXZpb3VzQXR0YWNrcy5wdXNoKGF0dGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhc0hpdCA9IHRhcmdldC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgIHByZXZpb3VzQXR0YWNrcy5wdXNoKGNvb3JkKTtcbiAgICB9XG4gICAgcmV0dXJuIHdhc0hpdDtcbiAgfTtcblxuICBjb25zdCBnZXRDb21wdXRlckF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2sgPVxuICAgICAgcG9zc2libGVBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQXR0YWNrcy5sZW5ndGgpXTtcbiAgICBwb3NzaWJsZUF0dGFja3Muc3BsaWNlKHBvc3NpYmxlQXR0YWNrcy5pbmRleE9mKGF0dGFjayksIDEpO1xuICAgXG4gICAgcmV0dXJuIGF0dGFjaztcbiAgfTtcblxuICBjb25zdCBnZXRDb21wdXRlclBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB7XG4gICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMSxcbiAgICB9O1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDEpID09PSAxID8gXCJ4XCIgOiBcInlcIjtcbiAgICByZXR1cm4geyBwbGFjZW1lbnQsIG9yaWVudGF0aW9uIH07XG4gIH07XG5cbiAgY29uc3QgZmlsbFBvc3NpYmxlQXR0YWNrID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKHsgeDogaSwgeTogaiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFzQWxyZWFkeUNsaWNrZWQgPSAoY29vcmQpID0+IHtcbiAgICByZXR1cm4gcHJldmlvdXNBdHRhY2tzLmZpbmQoXG4gICAgICAoZWwpID0+IGVsLnggPT09IGNvb3JkLnggJiYgZWwueSA9PT0gY29vcmQueVxuICAgICkgIT09IHVuZGVmaW5lZFxuICAgICAgPyB0cnVlXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGdldE5hbWUsXG4gICAgbWFrZUF0dGFjayxcbiAgICBzZXRJc05leHQsXG4gICAgZmlsbFBvc3NpYmxlQXR0YWNrLFxuICAgIGhhc0FscmVhZHlDbGlja2VkLFxuICAgIGdldENvbXB1dGVyUGxhY2VtZW50LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0IGNyZWF0aW9uXCIpO1xuICBpZiAoc2l6ZSA8IDIpIHRocm93IEVycm9yKFwiU2l6ZSB0b28gbG93XCIpO1xuICBjb25zdCBsZW5ndGggPSBwYXJzZUludChzaXplKTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuXG4gIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICBpZiAodHlwZW9mIHBvcyAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0XCIpO1xuICAgIGlmIChpc1N1bmsoKSkgcmV0dXJuO1xuICAgIGlmIChoaXRzLmluY2x1ZGVzKHBvcykpIHJldHVybjtcbiAgICBoaXRzLnB1c2gocG9zKTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHMubGVuZ3RoID09PSBsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImNvbnN0IFVJID0gKCgpID0+IHtcbiAgbGV0IG9yaWVudGF0aW9uID0gXCJ4XCI7XG5cbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAocGxheWVyLCBvcHBvbmVudCwgaXNQbGF5ZXJCb2FyZCwgZ2FtZUlzT3ZlcikgPT4ge1xuICAgIGNvbnN0IGJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICAgIGlmICghaXNQbGF5ZXJCb2FyZCkgYm9hcmRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29tcHV0ZXItYm9hcmRcIik7XG4gICAgaWYgKGlzUGxheWVyQm9hcmQpIGJvYXJkV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1ib2FyZFwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IHBsYXllci5nZXROYW1lKCk7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC54ID0gaTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyLmdldE5hbWUoKSAhPT0gXCJDb21wdXRlclwiICYmXG4gICAgICAgICAgIWdhbWVJc092ZXIgJiZcbiAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVIYXNTaGlwKHsgeDogaSwgeTogaiB9KVxuICAgICAgICApIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGdhbWVJc092ZXIpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVIYXNTaGlwKHsgeDogaSwgeTogaiB9KSAmJlxuICAgICAgICAgICAgb3Bwb25lbnQuaGFzQWxyZWFkeUNsaWNrZWQoeyB4OiBpLCB5OiBqIH0pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wcG9uZW50Lmhhc0FscmVhZHlDbGlja2VkKHsgeDogaSwgeTogaiB9KSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmdhbWVib2FyZC5jb29yZGluYXRlSGFzU2hpcCh7IHg6IGksIHk6IGogfSkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XG4gICAgfVxuICAgIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIHJldHVybiBib2FyZFdyYXBwZXI7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySGl0U3RhdHVzID0gKGhpdFN0YXR1cywgZWwpID0+IHtcbiAgICBpZiAoaGl0U3RhdHVzLmhpdCkgZWwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICBlbHNlIGVsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICB9O1xuXG4gIGNvbnN0IGdldEVsZW1lbnRCeUNvb3JkID0gKHsgeCwgeSB9KSA9PiB7XG4gICAgbGV0IGZvdW5kQ2hpbGQ7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLWJvYXJkXCIpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LngpID09PSB4ICYmXG4gICAgICAgIHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LnkpID09PSB5XG4gICAgICApIHtcbiAgICAgICAgZm91bmRDaGlsZCA9IHNxdWFyZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmRDaGlsZDtcbiAgfTtcblxuICBjb25zdCBhZGRXaW5IZWFkZXIgPSAod2lubmVyKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2lubmVyLmdldE5hbWUoKX0gd29uIWA7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi13cmFwcGVyXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwXCI7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGhlYWRlcik7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIG9yaWVudGF0aW9uID0gb3JpZW50YXRpb24gPT09IFwieFwiID8gXCJ5XCIgOiBcInhcIjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGBTd2l0Y2ggb3JpZW50YXRpb246ICR7Z2V0T3JpZW50YXRpb24oKX1gO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9yaWVudGF0aW9uLWJ1dHRvblwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBzd2l0Y2hPcmllbnRhdGlvbigpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYFN3aXRjaCBvcmllbnRhdGlvbjogJHtnZXRPcmllbnRhdGlvbigpfWA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBhZGRTZWxlY3Rpb24gPSAoY29vcmRzLCBpc1NoaXApID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGNvb3Jkcy5tYXAoKGNvb3JkKSA9PiB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXg9XCIke2Nvb3JkLngudG9TdHJpbmcoKX1cIl1bZGF0YS15PVwiJHtjb29yZC55LnRvU3RyaW5nKCl9XCJdYFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIWlzU2hpcCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBlbHNlIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNlbGVjdGlvbnMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9tcHQgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb21wdFwiKTtcbiAgICBwcm9tcHQudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcHMgdG8gY29udGludWUuLi5cIjtcbiAgICBpZiAodGV4dCkgcHJvbXB0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQocHJvbXB0KTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9tcHRUZXh0ID0gKHRleHQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdFwiKS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcmVuZGVySGl0U3RhdHVzLFxuICAgIGdldEVsZW1lbnRCeUNvb3JkLFxuICAgIGFkZFdpbkhlYWRlcixcbiAgICBjcmVhdGVXcmFwcGVyLFxuICAgIGNyZWF0ZUhlYWRlcixcbiAgICBnZXRPcmllbnRhdGlvbixcbiAgICBzd2l0Y2hPcmllbnRhdGlvbixcbiAgICBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbixcbiAgICBhZGRTZWxlY3Rpb24sXG4gICAgcmVtb3ZlU2VsZWN0aW9ucyxcbiAgICBjcmVhdGVQcm9tcHQsXG4gICAgc2V0UHJvbXB0VGV4dCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vdWlcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gUGxheWVyKFwiWW91XCIpO1xuXG4gIGNvbnN0IGNvbXAgPSBQbGF5ZXIoXCJDb21wdXRlclwiKTtcblxuICBjb21wLmZpbGxQb3NzaWJsZUF0dGFjaygpO1xuXG4gIFVJLmNyZWF0ZVdyYXBwZXIoKTtcbiAgVUkuY3JlYXRlUHJvbXB0KCk7XG4gIFVJLmNyZWF0ZUhlYWRlcigpO1xuXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibWFpbi13cmFwcGVyXCIpXG4gICAgLmFwcGVuZENoaWxkKFVJLmNyZWF0ZUJvYXJkKHBsYXllciwgY29tcCwgdHJ1ZSwgZmFsc2UpKTtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdyYXBwZXJcIilcbiAgICAuYXBwZW5kQ2hpbGQoVUkuY3JlYXRlQm9hcmQoY29tcCwgcGxheWVyLCBmYWxzZSwgZmFsc2UpKTtcblxuICBjb25zdCBwbGF5ZXJET01Cb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpO1xuICBwbGF5ZXJET01Cb2FyZC5hcHBlbmRDaGlsZChVSS5jcmVhdGVPcmllbnRhdGlvbkJ1dHRvbigpKTtcblxuICBwbGF5ZXJET01Cb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuZ2V0U2hpcENvdW50KCkgPj0gNSkgcmV0dXJuO1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3F1YXJlXCIpKSByZXR1cm47XG4gICAgVUkucmVtb3ZlU2VsZWN0aW9ucygpO1xuICAgIFVJLmFkZFNlbGVjdGlvbihcbiAgICAgIHBsYXllci5nYW1lYm9hcmQuZ2V0U3VnZ2VzdGVkUGxhY2VtZW50KFxuICAgICAgICB7IHg6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCksIHk6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgfSxcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRTaGlwVG9QbGFjZSgpLFxuICAgICAgICBVSS5nZXRPcmllbnRhdGlvbigpXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG5cbiAgcGxheWVyRE9NQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuZ2V0U2hpcENvdW50KCkgPj0gNSkgcmV0dXJuO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHJldHVybjtcbiAgICBVSS5yZW1vdmVTZWxlY3Rpb25zKCk7XG4gIH0pO1xuXG4gIHBsYXllckRPTUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwQ291bnQoKSA+PSA1KSByZXR1cm47XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHJldHVybjtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdldFN1Z2dlc3RlZFBsYWNlbWVudChcbiAgICAgIHsgeDogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSwgeTogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSB9LFxuICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRTaGlwVG9QbGFjZSgpLFxuICAgICAgVUkuZ2V0T3JpZW50YXRpb24oKVxuICAgICk7XG4gICAgY29uc3Qgd2FzUGxhY2VkID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICBwbGFjZW1lbnRbMF0sXG4gICAgICBwbGFjZW1lbnRbcGxhY2VtZW50Lmxlbmd0aCAtIDFdXG4gICAgKTtcbiAgICBVSS5hZGRTZWxlY3Rpb24ocGxhY2VtZW50LCB3YXNQbGFjZWQpO1xuICAgIGlmICh3YXNQbGFjZWQpIHtcbiAgICAgIGxldCBjb21wUGxhY2VkID0gZmFsc2U7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHJldHVybmVkID0gY29tcC5nZXRDb21wdXRlclBsYWNlbWVudCgpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSBjb21wLmdhbWVib2FyZC5nZXRTdWdnZXN0ZWRQbGFjZW1lbnQoXG4gICAgICAgICAgcmV0dXJuZWQucGxhY2VtZW50LFxuICAgICAgICAgIGNvbXAuZ2FtZWJvYXJkLmdldFNoaXBUb1BsYWNlKCksXG4gICAgICAgICAgcmV0dXJuZWQub3JpZW50YXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29tcFBsYWNlZCA9IGNvbXAuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBjb29yZHNbMF0sXG4gICAgICAgICAgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXVxuICAgICAgICApO1xuICAgICAgfSB3aGlsZSAoIWNvbXBQbGFjZWQpO1xuICAgIH1cbiAgICBVSS5yZW1vdmVTZWxlY3Rpb25zKCk7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuZ2V0U2hpcENvdW50KCkgPj0gNSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmllbnRhdGlvbi1idXR0b25cIikucmVtb3ZlKCk7XG4gICAgICBVSS5zZXRQcm9tcHRUZXh0KFwiRmlyZSBhdCB5b3VyIG9wcG9uZW50J3MgYm9hcmQgdG8gY29udGludWUhXCIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXItYm9hcmRcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3F1YXJlXCIpKSByZXR1cm47XG5cbiAgICAgICAgICBjb25zdCBjbGlja2VkQ29vcmQgPSB7XG4gICAgICAgICAgICB4OiBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpLFxuICAgICAgICAgICAgeTogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChwbGF5ZXIuaGFzQWxyZWFkeUNsaWNrZWQoY2xpY2tlZENvb3JkKSkgcmV0dXJuO1xuICAgICAgICAgIHBsYXllci5zZXRJc05leHQodHJ1ZSk7XG5cbiAgICAgICAgICBjb25zdCBwbGF5ZXJIaXRTdGF0dXMgPSBwbGF5ZXIubWFrZUF0dGFjayhjb21wLmdhbWVib2FyZCwge1xuICAgICAgICAgICAgeDogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSxcbiAgICAgICAgICAgIHk6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVUkuc2V0UHJvbXB0VGV4dChcbiAgICAgICAgICAgIHBsYXllckhpdFN0YXR1cy5oaXQgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBcIllvdSBoaXQhIEZpcmUgYWdhaW4gdG8gY29udGludWUuLi5cIlxuICAgICAgICAgICAgICA6IFwiWW91IG1pc3NlZCEgRmlyZSBhZ2FpbiB0byBjb250aW51ZS4uLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBVSS5yZW5kZXJIaXRTdGF0dXMocGxheWVySGl0U3RhdHVzLCBlLnRhcmdldCk7XG4gICAgICAgICAgcGxheWVyLnNldElzTmV4dChmYWxzZSk7XG5cbiAgICAgICAgICBsZXQgW3dpbm5lciwgbG9zZXJdID0gaXNHYW1lT3ZlcihwbGF5ZXIsIGNvbXApO1xuICAgICAgICAgIGlmICh3aW5uZXIgJiYgbG9zZXIpIHtcbiAgICAgICAgICAgIFVJLnNldFByb21wdFRleHQoXCJZb3UgaGl0IGFuZCBkZXN0cm95ZWQgdGhlIG9wcG9uZW50J3MgbGFzdCBzaGlwIVwiKTtcbiAgICAgICAgICAgIGdhbWVPdmVyKHdpbm5lciwgbG9zZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wLnNldElzTmV4dCh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBIaXRTdGF0dXMgPSBjb21wLm1ha2VBdHRhY2socGxheWVyLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBjb25zdCBjb21wSGl0VGFyZ2V0ID0gVUkuZ2V0RWxlbWVudEJ5Q29vcmQoY29tcEhpdFN0YXR1cy5jb29yZCk7XG4gICAgICAgICAgICBVSS5yZW5kZXJIaXRTdGF0dXMoY29tcEhpdFN0YXR1cywgY29tcEhpdFRhcmdldCk7XG4gICAgICAgICAgICBjb21wLnNldElzTmV4dChmYWxzZSk7XG4gICAgICAgICAgICBbd2lubmVyLCBsb3Nlcl0gPSBpc0dhbWVPdmVyKHBsYXllciwgY29tcCk7XG4gICAgICAgICAgICBpZiAod2lubmVyICYmIGxvc2VyKSBnYW1lT3Zlcih3aW5uZXIsIGxvc2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBpc0dhbWVPdmVyKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmFyZVNoaXBzU3VuaygpKSByZXR1cm4gW3BsYXllcjIsIHBsYXllcjFdO1xuICBpZiAocGxheWVyMi5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCkpIHJldHVybiBbcGxheWVyMSwgcGxheWVyMl07XG4gIHJldHVybiBbZmFsc2UsIGZhbHNlXTtcbn1cblxuZnVuY3Rpb24gZ2FtZU92ZXIod2lubmVyLCBsb3Nlcikge1xuICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi13cmFwcGVyXCIpO1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndyYXBwZXJcIik7XG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4gYm9hcmQucmVtb3ZlKCkpO1xuICBjb25zdCB3aW5uZXJCb2FyZCA9IFVJLmNyZWF0ZUJvYXJkKFxuICAgIHdpbm5lcixcbiAgICBsb3NlcixcbiAgICB3aW5uZXIuZ2V0TmFtZSgpICE9PSBcIkNvbXB1dGVyXCIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGNvbnN0IGxvc2VyQm9hcmQgPSBVSS5jcmVhdGVCb2FyZChcbiAgICBsb3NlcixcbiAgICB3aW5uZXIsXG4gICAgbG9zZXIuZ2V0TmFtZSgpICE9PSBcIkNvbXB1dGVyXCIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGlmICh3aW5uZXIuZ2V0TmFtZSgpID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChsb3NlckJvYXJkKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZCh3aW5uZXJCb2FyZCk7XG4gIH0gZWxzZSB7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQod2lubmVyQm9hcmQpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGxvc2VyQm9hcmQpO1xuICB9XG4gIFVJLmFkZFdpbkhlYWRlcih3aW5uZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9