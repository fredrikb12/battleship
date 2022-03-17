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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  gap: 4%;\n  background-color: #165ebd;\n}\n\n#main-wrapper {\n  display: flex;\n  gap: 70px;\n}\n\n#header {\n  font-size: 3.5rem;\n  color: #ffae34;\n  margin-top: 12%;\n}\n\n#prompt {\n  font-size: 1.2rem;\n  color: #000000;\n}\n\n#orientation-button {\n  height: 2em;\n  width: 200px;\n  background-color: #11276d;\n  border: 1px solid rgb(0, 14, 78);\n  border-radius: 8px;\n  color: white;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 5px 0 rgb(41, 45, 58);\n}\n\n#orientation-button:hover {\n  background-color: #002cbd;\n  cursor: pointer;\n}\n\n.wrapper > h1 {\n  color: #ffdbb5;\n}\n\n.wrapper {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 15px;\n  border: 1px solid black;\n  padding: 10px;\n  background-color: hsl(197, 60%, 24%);\n  box-shadow: 3px 5px 10px 0 #252525;\n}\n\n.grid {\n  display: flex;\n  width: 35vh;\n  height: 35vh;\n  gap: 4px;\n  padding: 15px;\n}\n\n.col {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.square {\n  width: 100%;\n  height: 10%;\n  border: 1px solid black;\n  box-shadow: 1px 1px 4px 0px #272727;\n  background-color: hsl(197, 80%, 45%);\n}\n\n.ship-square {\n  background-color: hsl(197, 25%, 25%);\n  border: 1px solid #926d42;\n}\n\n.miss {\n  background-color: #ee2727;\n  border: 1px solid #6e0000;\n}\n\n.hit {\n  background-color: #8bff3e;\n  border: 1px solid #66ff00;\n}\n\n.selected {\n  background-color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,oCAAoC;EACpC,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  gap: 4%;\n  background-color: #165ebd;\n}\n\n#main-wrapper {\n  display: flex;\n  gap: 70px;\n}\n\n#header {\n  font-size: 3.5rem;\n  color: #ffae34;\n  margin-top: 12%;\n}\n\n#prompt {\n  font-size: 1.2rem;\n  color: #000000;\n}\n\n#orientation-button {\n  height: 2em;\n  width: 200px;\n  background-color: #11276d;\n  border: 1px solid rgb(0, 14, 78);\n  border-radius: 8px;\n  color: white;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 5px 0 rgb(41, 45, 58);\n}\n\n#orientation-button:hover {\n  background-color: #002cbd;\n  cursor: pointer;\n}\n\n.wrapper > h1 {\n  color: #ffdbb5;\n}\n\n.wrapper {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 15px;\n  border: 1px solid black;\n  padding: 10px;\n  background-color: hsl(197, 60%, 24%);\n  box-shadow: 3px 5px 10px 0 #252525;\n}\n\n.grid {\n  display: flex;\n  width: 35vh;\n  height: 35vh;\n  gap: 4px;\n  padding: 15px;\n}\n\n.col {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.square {\n  width: 100%;\n  height: 10%;\n  border: 1px solid black;\n  box-shadow: 1px 1px 4px 0px #272727;\n  background-color: hsl(197, 80%, 45%);\n}\n\n.ship-square {\n  background-color: hsl(197, 25%, 25%);\n  border: 1px solid #926d42;\n}\n\n.miss {\n  background-color: #ee2727;\n  border: 1px solid #6e0000;\n}\n\n.hit {\n  background-color: #8bff3e;\n  border: 1px solid #66ff00;\n}\n\n.selected {\n  background-color: #fff;\n}\n"],"sourceRoot":""}]);
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
  /*player.gameboard.placeShip({ x: 1, y: 1 }, { x: 5, y: 1 });
  player.gameboard.placeShip({ x: 6, y: 5 }, { x: 8, y: 5 });
  player.gameboard.placeShip({ x: 2, y: 3 }, { x: 2, y: 5 });
  player.gameboard.placeShip({ x: 10, y: 8 }, { x: 10, y: 10 });
  player.gameboard.placeShip({ x: 4, y: 3 }, { x: 4, y: 6 });*/

  const comp = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("Computer");
  /*comp.gameboard.placeShip({ x: 8, y: 1 }, { x: 4, y: 1 });
  comp.gameboard.placeShip({ x: 10, y: 5 }, { x: 8, y: 5 });
  comp.gameboard.placeShip({ x: 2, y: 8 }, { x: 2, y: 5 });
  comp.gameboard.placeShip({ x: 10, y: 8 }, { x: 10, y: 6 });
  comp.gameboard.placeShip({ x: 4, y: 3 }, { x: 4, y: 6 });*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsdURBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBZTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBnYXA6IDQlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NWViZDtcXG59XFxuXFxuI21haW4td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgY29sb3I6ICNmZmFlMzQ7XFxuICBtYXJnaW4tdG9wOiAxMiU7XFxufVxcblxcbiNwcm9tcHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuI29yaWVudGF0aW9uLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTI3NmQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTQsIDc4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMCByZ2IoNDEsIDQ1LCA1OCk7XFxufVxcblxcbiNvcmllbnRhdGlvbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmNiZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndyYXBwZXIgPiBoMSB7XFxuICBjb2xvcjogI2ZmZGJiNTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NywgNjAlLCAyNCUpO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IDAgIzI1MjUyNTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDBweCAjMjcyNzI3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NywgODAlLCA0NSUpO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NywgMjUlLCAyNSUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzkyNmQ0MjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMjcyNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZTAwMDA7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiZmYzZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NmZmMDA7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLE9BQU87RUFDUCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBnYXA6IDQlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NWViZDtcXG59XFxuXFxuI21haW4td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgY29sb3I6ICNmZmFlMzQ7XFxuICBtYXJnaW4tdG9wOiAxMiU7XFxufVxcblxcbiNwcm9tcHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuI29yaWVudGF0aW9uLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTI3NmQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTQsIDc4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMCByZ2IoNDEsIDQ1LCA1OCk7XFxufVxcblxcbiNvcmllbnRhdGlvbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmNiZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndyYXBwZXIgPiBoMSB7XFxuICBjb2xvcjogI2ZmZGJiNTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NywgNjAlLCAyNCUpO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IDAgIzI1MjUyNTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDBweCAjMjcyNzI3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NywgODAlLCA0NSUpO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NywgMjUlLCAyNSUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzkyNmQ0MjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMjcyNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZTAwMDA7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiZmYzZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NmZmMDA7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN0YXJ0ZXJTaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkSGl0cyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzdGFydENvb3JkLCBlbmRDb29yZCkgPT4ge1xuICAgIGlmIChzdGFydENvb3JkLnggIT09IGVuZENvb3JkLnggJiYgc3RhcnRDb29yZC55ICE9PSBlbmRDb29yZC55KVxuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzLCBzaGlwIGlzIGRpYWdvbmFsbHkgcGxhY2VkXCIpO1xuXG4gICAgY29uc3QgY2hlY2tlZENvb3JkcyA9IFtzdGFydENvb3JkLCBlbmRDb29yZF0uZmlsdGVyKChjb29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkLnggPCAxIHx8IGNvb3JkLnkgPCAxIHx8IGNvb3JkLnggPiAxMCB8fCBjb29yZC55ID4gMTA7XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrZWRDb29yZHMubGVuZ3RoID4gMCkgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGUgcmFuZ2VcIik7XG4gICAgaWYgKGdldFNoaXBCeUNvb3JkaW5hdGVzKHNoaXBzLCBzdGFydENvb3JkLCBlbmRDb29yZCkpIHJldHVybjtcblxuICAgIGlmIChzdGFydENvb3JkLnggPiBlbmRDb29yZC54IHx8IHN0YXJ0Q29vcmQueSA+IGVuZENvb3JkLnkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGdldExlbmd0aChlbmRDb29yZCwgc3RhcnRDb29yZCkpO1xuICAgICAgc2hpcHMucHVzaCh7IHNoaXA6IHNoaXAsIHN0YXJ0OiBlbmRDb29yZCwgZW5kOiBzdGFydENvb3JkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoc3RhcnRDb29yZCwgZW5kQ29vcmQpKTtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwOiBzaGlwLCBzdGFydDogc3RhcnRDb29yZCwgZW5kOiBlbmRDb29yZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgY29vcmQpO1xuICAgIGlmICghaGl0U2hpcCkge1xuICAgICAgbWlzc2VkSGl0cy5wdXNoKGNvb3JkKTtcbiAgICAgIHJldHVybiB7IGhpdDogZmFsc2UsIGNvb3JkOiBjb29yZCB9O1xuICAgIH1cbiAgICBoaXRTaGlwLnNoaXAuaGl0KGdldEhpdFBvc2l0aW9uKGhpdFNoaXAuc3RhcnQsIGhpdFNoaXAuZW5kLCBjb29yZCkpO1xuICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgY29vcmQ6IGNvb3JkIH07XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcy5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWlzc2VkSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLm1pc3NlZEhpdHNdO1xuICB9O1xuXG4gIGNvbnN0IGFyZVNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuaXNTdW5rKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bmtTaGlwcy5sZW5ndGggPT09IHNoaXBzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb29yZGluYXRlSGFzU2hpcCA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgY29vcmQpO1xuICAgIGlmIChzaGlwID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3VnZ2VzdGVkUGxhY2VtZW50ID0gKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgY29uc3QgYWRqdXN0ZWRDb29yZHMgPSBbXTtcbiAgICBjb25zdCByZXR1cm5Db29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwieFwiKSBjb29yZHMucHVzaCh7IHg6IGNvb3JkLnggKyBpLCB5OiBjb29yZC55IH0pO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInlcIikgY29vcmRzLnB1c2goeyB4OiBjb29yZC54LCB5OiBjb29yZC55ICsgaSB9KTtcbiAgICB9XG4gICAgc3dpdGNoIChjb29yZFtvcmllbnRhdGlvbl0gKyBsZW5ndGggLSAxKSB7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gMSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxMjpcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiBhZGp1c3RlZENvb3Jkcy5wdXNoKGNvb3JkW29yaWVudGF0aW9uXSAtIDIpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4gYWRqdXN0ZWRDb29yZHMucHVzaChjb29yZFtvcmllbnRhdGlvbl0gLSAzKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE0OlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gNCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICB9XG4gICAgYWRqdXN0ZWRDb29yZHMuZm9yRWFjaCgoYWRqdXN0ZWQpID0+IHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgcmV0dXJuQ29vcmRzLnB1c2goeyB4OiBhZGp1c3RlZCwgeTogY29vcmQueSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybkNvb3Jkcy5wdXNoKHsgeDogY29vcmQueCwgeTogYWRqdXN0ZWQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkNvb3JkcztcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwVG9QbGFjZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhcnRlclNoaXBzW3NoaXBzLmxlbmd0aF07XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcEJ5Q29vcmRpbmF0ZXMoc2hpcEFycmF5LCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKCFzdGFydCkgcmV0dXJuO1xuICAgIGlmICghZW5kKSB7XG4gICAgICBjb25zdCBbZm91bmRTaGlwXSA9IHNoaXBBcnJheS5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzaGlwLnN0YXJ0LnggPD0gc3RhcnQueCAmJlxuICAgICAgICAgIHNoaXAuc3RhcnQueSA8PSBzdGFydC55ICYmXG4gICAgICAgICAgc2hpcC5lbmQueCA+PSBzdGFydC54ICYmXG4gICAgICAgICAgc2hpcC5lbmQueSA+PSBzdGFydC55XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGlmICghZm91bmRTaGlwKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBmb3VuZFNoaXA7XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IGdldEFsbENvb3JkaW5hdGVzKHN0YXJ0LCBlbmQpO1xuICAgIGNvbnN0IGZvdW5kU2hpcHMgPSBjb29yZHMubWFwKChjb29yZCkgPT4gY29vcmRpbmF0ZUhhc1NoaXAoY29vcmQpKTtcblxuICAgIGlmIChcbiAgICAgIGZvdW5kU2hpcHMuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICByZXR1cm4gZWwgIT09IGZhbHNlO1xuICAgICAgfSkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldFNoaXBDb3VudCxcbiAgICBnZXRNaXNzZWRIaXRzLFxuICAgIGFyZVNoaXBzU3VuayxcbiAgICBjb29yZGluYXRlSGFzU2hpcCxcbiAgICBnZXRTdWdnZXN0ZWRQbGFjZW1lbnQsXG4gICAgZ2V0U2hpcFRvUGxhY2UsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRMZW5ndGgoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKFxuICAgIE1hdGguc3FydChcbiAgICAgIChzdGFydC54IC0gZW5kLngpICogKHN0YXJ0LnggLSBlbmQueCkgK1xuICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC55IC0gZW5kLnkpXG4gICAgKSArIDFcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0SGl0UG9zaXRpb24oc3RhcnQsIGVuZCwgaGl0Q29vcmQpIHtcbiAgaWYgKHN0YXJ0LnggIT09IGVuZC54KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueCAtIGVuZC54KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCArIGkgPT09IGhpdENvb3JkLnggJiYgc3RhcnQueSA9PT0gaGl0Q29vcmQueSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueSAtIGVuZC55KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCA9PT0gaGl0Q29vcmQueCAmJiBzdGFydC55ICsgaSA9PT0gaGl0Q29vcmQueSkgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsbENvb3JkaW5hdGVzKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgY29vcmRzID0gW107XG4gIGlmIChzdGFydC54ICE9PSBlbmQueCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKGVuZC54IC0gc3RhcnQueCk7IGkrKykge1xuICAgICAgY29vcmRzLnB1c2goeyB4OiBzdGFydC54ICsgaSwgeTogc3RhcnQueSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoZW5kLnkgLSBzdGFydC55KTsgaSsrKSB7XG4gICAgICBjb29yZHMucHVzaCh7IHg6IHN0YXJ0LngsIHk6IHN0YXJ0LnkgKyBpIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIG5hbWUgPSBcIlBsYXllciAxXCI7XG5cbiAgY29uc3QgcHJldmlvdXNBdHRhY2tzID0gW107XG4gIGNvbnN0IHBvc3NpYmxlQXR0YWNrcyA9IFtdO1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGlzTmV4dCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IHNldElzTmV4dCA9IChib29sKSA9PiAoaXNOZXh0ID0gYm9vbCk7XG5cbiAgY29uc3QgbWFrZUF0dGFjayA9ICh0YXJnZXQsIGNvb3JkKSA9PiB7XG4gICAgaWYgKCFpc05leHQpIHRocm93IEVycm9yKGAke2dldE5hbWUoKX0gaXMgbm90IG5leHQhYCk7XG4gICAgaWYgKHRhcmdldCA9PT0gZ2FtZWJvYXJkKSB0aHJvdyBFcnJvcihcIkNhbid0IGF0dGFjayBvd24gZ2FtZWJvYXJkIVwiKTtcbiAgICBsZXQgd2FzSGl0O1xuXG4gICAgaWYgKG5hbWUgPT09IFwiY29tcHV0ZXJcIiB8fCBuYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgIGNvbnN0IGF0dGFjayA9IGdldENvbXB1dGVyQXR0YWNrKCk7XG4gICAgICB3YXNIaXQgPSB0YXJnZXQucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goYXR0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FzSGl0ID0gdGFyZ2V0LnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goY29vcmQpO1xuICAgIH1cbiAgICByZXR1cm4gd2FzSGl0O1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0dGFjayA9XG4gICAgICBwb3NzaWJsZUF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVBdHRhY2tzLmxlbmd0aCldO1xuICAgIHBvc3NpYmxlQXR0YWNrcy5zcGxpY2UocG9zc2libGVBdHRhY2tzLmluZGV4T2YoYXR0YWNrKSwgMSk7XG4gICBcbiAgICByZXR1cm4gYXR0YWNrO1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHtcbiAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEsXG4gICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSkgPT09IDEgPyBcInhcIiA6IFwieVwiO1xuICAgIHJldHVybiB7IHBsYWNlbWVudCwgb3JpZW50YXRpb24gfTtcbiAgfTtcblxuICBjb25zdCBmaWxsUG9zc2libGVBdHRhY2sgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goeyB4OiBpLCB5OiBqIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYXNBbHJlYWR5Q2xpY2tlZCA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBwcmV2aW91c0F0dGFja3MuZmluZChcbiAgICAgIChlbCkgPT4gZWwueCA9PT0gY29vcmQueCAmJiBlbC55ID09PSBjb29yZC55XG4gICAgKSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0TmFtZSxcbiAgICBtYWtlQXR0YWNrLFxuICAgIHNldElzTmV4dCxcbiAgICBmaWxsUG9zc2libGVBdHRhY2ssXG4gICAgaGFzQWxyZWFkeUNsaWNrZWQsXG4gICAgZ2V0Q29tcHV0ZXJQbGFjZW1lbnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSBcIm51bWJlclwiKSB0aHJvdyBFcnJvcihcIkluY29ycmVjdCB0eXBlIGZvciBoaXQgY3JlYXRpb25cIik7XG4gIGlmIChzaXplIDwgMikgdGhyb3cgRXJyb3IoXCJTaXplIHRvbyBsb3dcIik7XG4gIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KHNpemUpO1xuICBjb25zdCBoaXRzID0gW107XG5cbiAgY29uc3QgaGl0ID0gKHBvcykgPT4ge1xuICAgIGlmICh0eXBlb2YgcG9zICE9PSBcIm51bWJlclwiKSB0aHJvdyBFcnJvcihcIkluY29ycmVjdCB0eXBlIGZvciBoaXRcIik7XG4gICAgaWYgKGlzU3VuaygpKSByZXR1cm47XG4gICAgaWYgKGhpdHMuaW5jbHVkZXMocG9zKSkgcmV0dXJuO1xuICAgIGhpdHMucHVzaChwb3MpO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cy5sZW5ndGggPT09IGxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY29uc3QgVUkgPSAoKCkgPT4ge1xuICBsZXQgb3JpZW50YXRpb24gPSBcInhcIjtcblxuICBjb25zdCBjcmVhdGVCb2FyZCA9IChwbGF5ZXIsIG9wcG9uZW50LCBpc1BsYXllckJvYXJkLCBnYW1lSXNPdmVyKSA9PiB7XG4gICAgY29uc3QgYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gICAgaWYgKCFpc1BsYXllckJvYXJkKSBib2FyZFdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wdXRlci1ib2FyZFwiKTtcbiAgICBpZiAoaXNQbGF5ZXJCb2FyZCkgYm9hcmRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLWJvYXJkXCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gcGxheWVyLmdldE5hbWUoKTtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBpO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC55ID0gajtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXIuZ2V0TmFtZSgpICE9PSBcIkNvbXB1dGVyXCIgJiZcbiAgICAgICAgICAhZ2FtZUlzT3ZlciAmJlxuICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuY29vcmRpbmF0ZUhhc1NoaXAoeyB4OiBpLCB5OiBqIH0pXG4gICAgICAgICkge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZUlzT3Zlcikge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuY29vcmRpbmF0ZUhhc1NoaXAoeyB4OiBpLCB5OiBqIH0pICYmXG4gICAgICAgICAgICBvcHBvbmVudC5oYXNBbHJlYWR5Q2xpY2tlZCh7IHg6IGksIHk6IGogfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3Bwb25lbnQuaGFzQWxyZWFkeUNsaWNrZWQoeyB4OiBpLCB5OiBqIH0pKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVIYXNTaGlwKHsgeDogaSwgeTogaiB9KSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcbiAgICB9XG4gICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgcmV0dXJuIGJvYXJkV3JhcHBlcjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIaXRTdGF0dXMgPSAoaGl0U3RhdHVzLCBlbCkgPT4ge1xuICAgIGlmIChoaXRTdGF0dXMuaGl0KSBlbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIGVsc2UgZWwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gIH07XG5cbiAgY29uc3QgZ2V0RWxlbWVudEJ5Q29vcmQgPSAoeyB4LCB5IH0pID0+IHtcbiAgICBsZXQgZm91bmRDaGlsZDtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItYm9hcmRcIik7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcGFyc2VJbnQoc3F1YXJlLmRhdGFzZXQueCkgPT09IHggJiZcbiAgICAgICAgcGFyc2VJbnQoc3F1YXJlLmRhdGFzZXQueSkgPT09IHlcbiAgICAgICkge1xuICAgICAgICBmb3VuZENoaWxkID0gc3F1YXJlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZENoaWxkO1xuICB9O1xuXG4gIGNvbnN0IGFkZFdpbkhlYWRlciA9ICh3aW5uZXIpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIuZ2V0TmFtZSgpfSB3b24hYDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLXdyYXBwZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKTtcbiAgfTtcblxuICBjb25zdCBnZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbiA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYFN3aXRjaCBvcmllbnRhdGlvbjogJHtnZXRPcmllbnRhdGlvbigpfWA7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib3JpZW50YXRpb24tYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHN3aXRjaE9yaWVudGF0aW9uKCk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBgU3dpdGNoIG9yaWVudGF0aW9uOiAke2dldE9yaWVudGF0aW9uKCl9YDtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNlbGVjdGlvbiA9IChjb29yZHMsIGlzU2hpcCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gY29vcmRzLm1hcCgoY29vcmQpID0+IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEteD1cIiR7Y29vcmQueC50b1N0cmluZygpfVwiXVtkYXRhLXk9XCIke2Nvb3JkLnkudG9TdHJpbmcoKX1cIl1gXG4gICAgICApO1xuICAgIH0pO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghaXNTaGlwKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGVsc2UgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2VsZWN0aW9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb21wdCA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvbXB0XCIpO1xuICAgIHByb21wdC50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzaGlwcyB0byBjb250aW51ZS4uLlwiO1xuICAgIGlmICh0ZXh0KSBwcm9tcHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChwcm9tcHQpO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb21wdFRleHQgPSAodGV4dCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0XCIpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCb2FyZCxcbiAgICByZW5kZXJIaXRTdGF0dXMsXG4gICAgZ2V0RWxlbWVudEJ5Q29vcmQsXG4gICAgYWRkV2luSGVhZGVyLFxuICAgIGNyZWF0ZVdyYXBwZXIsXG4gICAgY3JlYXRlSGVhZGVyLFxuICAgIGdldE9yaWVudGF0aW9uLFxuICAgIHN3aXRjaE9yaWVudGF0aW9uLFxuICAgIGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uLFxuICAgIGFkZFNlbGVjdGlvbixcbiAgICByZW1vdmVTZWxlY3Rpb25zLFxuICAgIGNyZWF0ZVByb21wdCxcbiAgICBzZXRQcm9tcHRUZXh0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJZb3VcIik7XG4gIC8qcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiAxLCB5OiAxIH0sIHsgeDogNSwgeTogMSB9KTtcbiAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiA2LCB5OiA1IH0sIHsgeDogOCwgeTogNSB9KTtcbiAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiAyLCB5OiAzIH0sIHsgeDogMiwgeTogNSB9KTtcbiAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiAxMCwgeTogOCB9LCB7IHg6IDEwLCB5OiAxMCB9KTtcbiAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiA0LCB5OiAzIH0sIHsgeDogNCwgeTogNiB9KTsqL1xuXG4gIGNvbnN0IGNvbXAgPSBQbGF5ZXIoXCJDb21wdXRlclwiKTtcbiAgLypjb21wLmdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiA4LCB5OiAxIH0sIHsgeDogNCwgeTogMSB9KTtcbiAgY29tcC5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogMTAsIHk6IDUgfSwgeyB4OiA4LCB5OiA1IH0pO1xuICBjb21wLmdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiAyLCB5OiA4IH0sIHsgeDogMiwgeTogNSB9KTtcbiAgY29tcC5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogMTAsIHk6IDggfSwgeyB4OiAxMCwgeTogNiB9KTtcbiAgY29tcC5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogNCwgeTogMyB9LCB7IHg6IDQsIHk6IDYgfSk7Ki9cblxuICBjb21wLmZpbGxQb3NzaWJsZUF0dGFjaygpO1xuXG4gIFVJLmNyZWF0ZVdyYXBwZXIoKTtcbiAgVUkuY3JlYXRlUHJvbXB0KCk7XG4gIFVJLmNyZWF0ZUhlYWRlcigpO1xuXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibWFpbi13cmFwcGVyXCIpXG4gICAgLmFwcGVuZENoaWxkKFVJLmNyZWF0ZUJvYXJkKHBsYXllciwgY29tcCwgdHJ1ZSwgZmFsc2UpKTtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdyYXBwZXJcIilcbiAgICAuYXBwZW5kQ2hpbGQoVUkuY3JlYXRlQm9hcmQoY29tcCwgcGxheWVyLCBmYWxzZSwgZmFsc2UpKTtcblxuICBjb25zdCBwbGF5ZXJET01Cb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpO1xuICBwbGF5ZXJET01Cb2FyZC5hcHBlbmRDaGlsZChVSS5jcmVhdGVPcmllbnRhdGlvbkJ1dHRvbigpKTtcblxuICBwbGF5ZXJET01Cb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuZ2V0U2hpcENvdW50KCkgPj0gNSkgcmV0dXJuO1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3F1YXJlXCIpKSByZXR1cm47XG4gICAgVUkucmVtb3ZlU2VsZWN0aW9ucygpO1xuICAgIFVJLmFkZFNlbGVjdGlvbihcbiAgICAgIHBsYXllci5nYW1lYm9hcmQuZ2V0U3VnZ2VzdGVkUGxhY2VtZW50KFxuICAgICAgICB7IHg6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCksIHk6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgfSxcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRTaGlwVG9QbGFjZSgpLFxuICAgICAgICBVSS5nZXRPcmllbnRhdGlvbigpXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG5cbiAgcGxheWVyRE9NQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuZ2V0U2hpcENvdW50KCkgPj0gNSkgcmV0dXJuO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHJldHVybjtcbiAgICBVSS5yZW1vdmVTZWxlY3Rpb25zKCk7XG4gIH0pO1xuXG4gIHBsYXllckRPTUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwQ291bnQoKSA+PSA1KSByZXR1cm47XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHJldHVybjtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdldFN1Z2dlc3RlZFBsYWNlbWVudChcbiAgICAgIHsgeDogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSwgeTogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSB9LFxuICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRTaGlwVG9QbGFjZSgpLFxuICAgICAgVUkuZ2V0T3JpZW50YXRpb24oKVxuICAgICk7XG4gICAgY29uc3Qgd2FzUGxhY2VkID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICBwbGFjZW1lbnRbMF0sXG4gICAgICBwbGFjZW1lbnRbcGxhY2VtZW50Lmxlbmd0aCAtIDFdXG4gICAgKTtcbiAgICBVSS5hZGRTZWxlY3Rpb24ocGxhY2VtZW50LCB3YXNQbGFjZWQpO1xuICAgIGlmICh3YXNQbGFjZWQpIHtcbiAgICAgIGxldCBjb21wUGxhY2VkID0gZmFsc2U7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHJldHVybmVkID0gY29tcC5nZXRDb21wdXRlclBsYWNlbWVudCgpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSBjb21wLmdhbWVib2FyZC5nZXRTdWdnZXN0ZWRQbGFjZW1lbnQoXG4gICAgICAgICAgcmV0dXJuZWQucGxhY2VtZW50LFxuICAgICAgICAgIGNvbXAuZ2FtZWJvYXJkLmdldFNoaXBUb1BsYWNlKCksXG4gICAgICAgICAgcmV0dXJuZWQub3JpZW50YXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29tcFBsYWNlZCA9IGNvbXAuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBjb29yZHNbMF0sXG4gICAgICAgICAgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXVxuICAgICAgICApO1xuICAgICAgfSB3aGlsZSAoIWNvbXBQbGFjZWQpO1xuICAgIH1cbiAgICBVSS5yZW1vdmVTZWxlY3Rpb25zKCk7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuZ2V0U2hpcENvdW50KCkgPj0gNSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmllbnRhdGlvbi1idXR0b25cIikucmVtb3ZlKCk7XG4gICAgICBVSS5zZXRQcm9tcHRUZXh0KFwiRmlyZSBhdCB5b3VyIG9wcG9uZW50J3MgYm9hcmQgdG8gY29udGludWUhXCIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXItYm9hcmRcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3F1YXJlXCIpKSByZXR1cm47XG5cbiAgICAgICAgICBjb25zdCBjbGlja2VkQ29vcmQgPSB7XG4gICAgICAgICAgICB4OiBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpLFxuICAgICAgICAgICAgeTogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChwbGF5ZXIuaGFzQWxyZWFkeUNsaWNrZWQoY2xpY2tlZENvb3JkKSkgcmV0dXJuO1xuICAgICAgICAgIHBsYXllci5zZXRJc05leHQodHJ1ZSk7XG5cbiAgICAgICAgICBjb25zdCBwbGF5ZXJIaXRTdGF0dXMgPSBwbGF5ZXIubWFrZUF0dGFjayhjb21wLmdhbWVib2FyZCwge1xuICAgICAgICAgICAgeDogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSxcbiAgICAgICAgICAgIHk6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVUkuc2V0UHJvbXB0VGV4dChcbiAgICAgICAgICAgIHBsYXllckhpdFN0YXR1cy5oaXQgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBcIllvdSBoaXQhIEZpcmUgYWdhaW4gdG8gY29udGludWUuLi5cIlxuICAgICAgICAgICAgICA6IFwiWW91IG1pc3NlZCEgRmlyZSBhZ2FpbiB0byBjb250aW51ZS4uLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBVSS5yZW5kZXJIaXRTdGF0dXMocGxheWVySGl0U3RhdHVzLCBlLnRhcmdldCk7XG4gICAgICAgICAgcGxheWVyLnNldElzTmV4dChmYWxzZSk7XG5cbiAgICAgICAgICBsZXQgW3dpbm5lciwgbG9zZXJdID0gaXNHYW1lT3ZlcihwbGF5ZXIsIGNvbXApO1xuICAgICAgICAgIGlmICh3aW5uZXIgJiYgbG9zZXIpIHtcbiAgICAgICAgICAgIFVJLnNldFByb21wdFRleHQoXCJZb3UgaGl0IGFuZCBkZXN0cm95ZWQgdGhlIG9wcG9uZW50J3MgbGFzdCBzaGlwIVwiKTtcbiAgICAgICAgICAgIGdhbWVPdmVyKHdpbm5lciwgbG9zZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wLnNldElzTmV4dCh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBIaXRTdGF0dXMgPSBjb21wLm1ha2VBdHRhY2socGxheWVyLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBjb25zdCBjb21wSGl0VGFyZ2V0ID0gVUkuZ2V0RWxlbWVudEJ5Q29vcmQoY29tcEhpdFN0YXR1cy5jb29yZCk7XG4gICAgICAgICAgICBVSS5yZW5kZXJIaXRTdGF0dXMoY29tcEhpdFN0YXR1cywgY29tcEhpdFRhcmdldCk7XG4gICAgICAgICAgICBjb21wLnNldElzTmV4dChmYWxzZSk7XG4gICAgICAgICAgICBbd2lubmVyLCBsb3Nlcl0gPSBpc0dhbWVPdmVyKHBsYXllciwgY29tcCk7XG4gICAgICAgICAgICBpZiAod2lubmVyICYmIGxvc2VyKSBnYW1lT3Zlcih3aW5uZXIsIGxvc2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBpc0dhbWVPdmVyKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmFyZVNoaXBzU3VuaygpKSByZXR1cm4gW3BsYXllcjIsIHBsYXllcjFdO1xuICBpZiAocGxheWVyMi5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCkpIHJldHVybiBbcGxheWVyMSwgcGxheWVyMl07XG4gIHJldHVybiBbZmFsc2UsIGZhbHNlXTtcbn1cblxuZnVuY3Rpb24gZ2FtZU92ZXIod2lubmVyLCBsb3Nlcikge1xuICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi13cmFwcGVyXCIpO1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndyYXBwZXJcIik7XG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4gYm9hcmQucmVtb3ZlKCkpO1xuICBjb25zdCB3aW5uZXJCb2FyZCA9IFVJLmNyZWF0ZUJvYXJkKFxuICAgIHdpbm5lcixcbiAgICBsb3NlcixcbiAgICB3aW5uZXIuZ2V0TmFtZSgpICE9PSBcIkNvbXB1dGVyXCIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGNvbnN0IGxvc2VyQm9hcmQgPSBVSS5jcmVhdGVCb2FyZChcbiAgICBsb3NlcixcbiAgICB3aW5uZXIsXG4gICAgbG9zZXIuZ2V0TmFtZSgpICE9PSBcIkNvbXB1dGVyXCIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGlmICh3aW5uZXIuZ2V0TmFtZSgpID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChsb3NlckJvYXJkKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZCh3aW5uZXJCb2FyZCk7XG4gIH0gZWxzZSB7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQod2lubmVyQm9hcmQpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGxvc2VyQm9hcmQpO1xuICB9XG4gIFVJLmFkZFdpbkhlYWRlcih3aW5uZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9