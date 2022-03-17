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
    console.log(getShipByCoordinates(ships, startCoord, endCoord));
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
    console.log(coords);
    const foundShips = coords.map((coord) => coordinateHasShip(coord));
    console.log(foundShips);

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
    console.log(e.target);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3RELFlBQVksMkRBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1REFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix1REFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFlO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdhcDogNCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY1ZWJkO1xcbn1cXG5cXG4jbWFpbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDcwcHg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBjb2xvcjogI2ZmYWUzNDtcXG4gIG1hcmdpbi10b3A6IDEyJTtcXG59XFxuXFxuI3Byb21wdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4jb3JpZW50YXRpb24tYnV0dG9uIHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjc2ZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAxNCwgNzgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwIHJnYig0MSwgNDUsIDU4KTtcXG59XFxuXFxuI29yaWVudGF0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyY2JkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud3JhcHBlciA+IGgxIHtcXG4gIGNvbG9yOiAjZmZkYmI1O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk3LCA2MCUsIDI0JSk7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggMCAjMjUyNTI1O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDM1dmg7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMHB4ICMyNzI3Mjc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk3LCA4MCUsIDQ1JSk7XFxufVxcblxcbi5zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk3LCAyNSUsIDI1JSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTI2ZDQyO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUyNzI3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZlMDAwMDtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJmZjNlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2ZmYwMDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsT0FBTztFQUNQLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdhcDogNCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY1ZWJkO1xcbn1cXG5cXG4jbWFpbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDcwcHg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBjb2xvcjogI2ZmYWUzNDtcXG4gIG1hcmdpbi10b3A6IDEyJTtcXG59XFxuXFxuI3Byb21wdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4jb3JpZW50YXRpb24tYnV0dG9uIHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjc2ZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAxNCwgNzgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwIHJnYig0MSwgNDUsIDU4KTtcXG59XFxuXFxuI29yaWVudGF0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyY2JkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud3JhcHBlciA+IGgxIHtcXG4gIGNvbG9yOiAjZmZkYmI1O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk3LCA2MCUsIDI0JSk7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggMCAjMjUyNTI1O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDM1dmg7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMHB4ICMyNzI3Mjc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk3LCA4MCUsIDQ1JSk7XFxufVxcblxcbi5zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk3LCAyNSUsIDI1JSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTI2ZDQyO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUyNzI3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZlMDAwMDtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJmZjNlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2ZmYwMDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RhcnRlclNoaXBzID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBtaXNzZWRIaXRzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHN0YXJ0Q29vcmQsIGVuZENvb3JkKSA9PiB7XG4gICAgaWYgKHN0YXJ0Q29vcmQueCAhPT0gZW5kQ29vcmQueCAmJiBzdGFydENvb3JkLnkgIT09IGVuZENvb3JkLnkpXG4gICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgY29vcmRpbmF0ZXMsIHNoaXAgaXMgZGlhZ29uYWxseSBwbGFjZWRcIik7XG5cbiAgICBjb25zdCBjaGVja2VkQ29vcmRzID0gW3N0YXJ0Q29vcmQsIGVuZENvb3JkXS5maWx0ZXIoKGNvb3JkKSA9PiB7XG4gICAgICByZXR1cm4gY29vcmQueCA8IDEgfHwgY29vcmQueSA8IDEgfHwgY29vcmQueCA+IDEwIHx8IGNvb3JkLnkgPiAxMDtcbiAgICB9KTtcbiAgICBpZiAoY2hlY2tlZENvb3Jkcy5sZW5ndGggPiAwKSB0aHJvdyBFcnJvcihcIkludmFsaWQgY29vcmRpbmF0ZSByYW5nZVwiKTtcbiAgICBjb25zb2xlLmxvZyhnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgc3RhcnRDb29yZCwgZW5kQ29vcmQpKTtcbiAgICBpZiAoZ2V0U2hpcEJ5Q29vcmRpbmF0ZXMoc2hpcHMsIHN0YXJ0Q29vcmQsIGVuZENvb3JkKSkgcmV0dXJuO1xuXG4gICAgaWYgKHN0YXJ0Q29vcmQueCA+IGVuZENvb3JkLnggfHwgc3RhcnRDb29yZC55ID4gZW5kQ29vcmQueSkge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoZ2V0TGVuZ3RoKGVuZENvb3JkLCBzdGFydENvb3JkKSk7XG4gICAgICBzaGlwcy5wdXNoKHsgc2hpcDogc2hpcCwgc3RhcnQ6IGVuZENvb3JkLCBlbmQ6IHN0YXJ0Q29vcmQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGdldExlbmd0aChzdGFydENvb3JkLCBlbmRDb29yZCkpO1xuICAgICAgc2hpcHMucHVzaCh7IHNoaXA6IHNoaXAsIHN0YXJ0OiBzdGFydENvb3JkLCBlbmQ6IGVuZENvb3JkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgaGl0U2hpcCA9IGdldFNoaXBCeUNvb3JkaW5hdGVzKHNoaXBzLCBjb29yZCk7XG4gICAgaWYgKCFoaXRTaGlwKSB7XG4gICAgICBtaXNzZWRIaXRzLnB1c2goY29vcmQpO1xuICAgICAgcmV0dXJuIHsgaGl0OiBmYWxzZSwgY29vcmQ6IGNvb3JkIH07XG4gICAgfVxuICAgIGhpdFNoaXAuc2hpcC5oaXQoZ2V0SGl0UG9zaXRpb24oaGl0U2hpcC5zdGFydCwgaGl0U2hpcC5lbmQsIGNvb3JkKSk7XG4gICAgcmV0dXJuIHsgaGl0OiB0cnVlLCBjb29yZDogY29vcmQgfTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBnZXRNaXNzZWRIaXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4ubWlzc2VkSGl0c107XG4gIH07XG5cbiAgY29uc3QgYXJlU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1bmtTaGlwcyA9IHNoaXBzLmZpbHRlcigoc2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIHNoaXAuc2hpcC5pc1N1bmsoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aCA9PT0gc2hpcHMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVIYXNTaGlwID0gKGNvb3JkKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGdldFNoaXBCeUNvb3JkaW5hdGVzKHNoaXBzLCBjb29yZCk7XG4gICAgaWYgKHNoaXAgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRTdWdnZXN0ZWRQbGFjZW1lbnQgPSAoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBjb25zdCBhZGp1c3RlZENvb3JkcyA9IFtdO1xuICAgIGNvbnN0IHJldHVybkNvb3JkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ4XCIpIGNvb3Jkcy5wdXNoKHsgeDogY29vcmQueCArIGksIHk6IGNvb3JkLnkgfSk7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwieVwiKSBjb29yZHMucHVzaCh7IHg6IGNvb3JkLngsIHk6IGNvb3JkLnkgKyBpIH0pO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNvb3JkW29yaWVudGF0aW9uXSArIGxlbmd0aCAtIDEpIHtcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4gYWRqdXN0ZWRDb29yZHMucHVzaChjb29yZFtvcmllbnRhdGlvbl0gLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEyOlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gMikpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxMzpcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiBhZGp1c3RlZENvb3Jkcy5wdXNoKGNvb3JkW29yaWVudGF0aW9uXSAtIDMpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4gYWRqdXN0ZWRDb29yZHMucHVzaChjb29yZFtvcmllbnRhdGlvbl0gLSA0KSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgIH1cbiAgICBhZGp1c3RlZENvb3Jkcy5mb3JFYWNoKChhZGp1c3RlZCkgPT4ge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInhcIikge1xuICAgICAgICByZXR1cm5Db29yZHMucHVzaCh7IHg6IGFkanVzdGVkLCB5OiBjb29yZC55IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuQ29vcmRzLnB1c2goeyB4OiBjb29yZC54LCB5OiBhZGp1c3RlZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuQ29vcmRzO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBUb1BsYWNlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGFydGVyU2hpcHNbc2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwQXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoIXN0YXJ0KSByZXR1cm47XG4gICAgaWYgKCFlbmQpIHtcbiAgICAgIGNvbnN0IFtmb3VuZFNoaXBdID0gc2hpcEFycmF5LmZpbHRlcigoc2hpcCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHNoaXAuc3RhcnQueCA8PSBzdGFydC54ICYmXG4gICAgICAgICAgc2hpcC5zdGFydC55IDw9IHN0YXJ0LnkgJiZcbiAgICAgICAgICBzaGlwLmVuZC54ID49IHN0YXJ0LnggJiZcbiAgICAgICAgICBzaGlwLmVuZC55ID49IHN0YXJ0LnlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFmb3VuZFNoaXApIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIGZvdW5kU2hpcDtcbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gZ2V0QWxsQ29vcmRpbmF0ZXMoc3RhcnQsIGVuZCk7XG4gICAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgICBjb25zdCBmb3VuZFNoaXBzID0gY29vcmRzLm1hcCgoY29vcmQpID0+IGNvb3JkaW5hdGVIYXNTaGlwKGNvb3JkKSk7XG4gICAgY29uc29sZS5sb2coZm91bmRTaGlwcyk7XG5cbiAgICBpZiAoXG4gICAgICBmb3VuZFNoaXBzLmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGVsICE9PSBmYWxzZTtcbiAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRTaGlwQ291bnQsXG4gICAgZ2V0TWlzc2VkSGl0cyxcbiAgICBhcmVTaGlwc1N1bmssXG4gICAgY29vcmRpbmF0ZUhhc1NoaXAsXG4gICAgZ2V0U3VnZ2VzdGVkUGxhY2VtZW50LFxuICAgIGdldFNoaXBUb1BsYWNlLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0TGVuZ3RoKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLnNxcnQoXG4gICAgICAoc3RhcnQueCAtIGVuZC54KSAqIChzdGFydC54IC0gZW5kLngpICtcbiAgICAgICAgKHN0YXJ0LnkgLSBlbmQueSkgKiAoc3RhcnQueSAtIGVuZC55KVxuICAgICkgKyAxXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldEhpdFBvc2l0aW9uKHN0YXJ0LCBlbmQsIGhpdENvb3JkKSB7XG4gIGlmIChzdGFydC54ICE9PSBlbmQueCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKHN0YXJ0LnggLSBlbmQueCk7IGkrKykge1xuICAgICAgaWYgKHN0YXJ0LnggKyBpID09PSBoaXRDb29yZC54ICYmIHN0YXJ0LnkgPT09IGhpdENvb3JkLnkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKHN0YXJ0LnkgLSBlbmQueSk7IGkrKykge1xuICAgICAgaWYgKHN0YXJ0LnggPT09IGhpdENvb3JkLnggJiYgc3RhcnQueSArIGkgPT09IGhpdENvb3JkLnkpIHJldHVybiBpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbGxDb29yZGluYXRlcyhzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBpZiAoc3RhcnQueCAhPT0gZW5kLngpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhlbmQueCAtIHN0YXJ0LngpOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKHsgeDogc3RhcnQueCArIGksIHk6IHN0YXJ0LnkgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKGVuZC55IC0gc3RhcnQueSk7IGkrKykge1xuICAgICAgY29vcmRzLnB1c2goeyB4OiBzdGFydC54LCB5OiBzdGFydC55ICsgaSB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSBuYW1lID0gXCJQbGF5ZXIgMVwiO1xuXG4gIGNvbnN0IHByZXZpb3VzQXR0YWNrcyA9IFtdO1xuICBjb25zdCBwb3NzaWJsZUF0dGFja3MgPSBbXTtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBpc05leHQgPSBmYWxzZTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICBjb25zdCBzZXRJc05leHQgPSAoYm9vbCkgPT4gKGlzTmV4dCA9IGJvb2wpO1xuXG4gIGNvbnN0IG1ha2VBdHRhY2sgPSAodGFyZ2V0LCBjb29yZCkgPT4ge1xuICAgIGlmICghaXNOZXh0KSB0aHJvdyBFcnJvcihgJHtnZXROYW1lKCl9IGlzIG5vdCBuZXh0IWApO1xuICAgIGlmICh0YXJnZXQgPT09IGdhbWVib2FyZCkgdGhyb3cgRXJyb3IoXCJDYW4ndCBhdHRhY2sgb3duIGdhbWVib2FyZCFcIik7XG4gICAgbGV0IHdhc0hpdDtcblxuICAgIGlmIChuYW1lID09PSBcImNvbXB1dGVyXCIgfHwgbmFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgICBjb25zdCBhdHRhY2sgPSBnZXRDb21wdXRlckF0dGFjaygpO1xuICAgICAgd2FzSGl0ID0gdGFyZ2V0LnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICAgIHByZXZpb3VzQXR0YWNrcy5wdXNoKGF0dGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhc0hpdCA9IHRhcmdldC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgIHByZXZpb3VzQXR0YWNrcy5wdXNoKGNvb3JkKTtcbiAgICB9XG4gICAgcmV0dXJuIHdhc0hpdDtcbiAgfTtcblxuICBjb25zdCBnZXRDb21wdXRlckF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2sgPVxuICAgICAgcG9zc2libGVBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQXR0YWNrcy5sZW5ndGgpXTtcbiAgICBwb3NzaWJsZUF0dGFja3Muc3BsaWNlKHBvc3NpYmxlQXR0YWNrcy5pbmRleE9mKGF0dGFjayksIDEpO1xuICAgXG4gICAgcmV0dXJuIGF0dGFjaztcbiAgfTtcblxuICBjb25zdCBnZXRDb21wdXRlclBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB7XG4gICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMSxcbiAgICB9O1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDEpID09PSAxID8gXCJ4XCIgOiBcInlcIjtcbiAgICByZXR1cm4geyBwbGFjZW1lbnQsIG9yaWVudGF0aW9uIH07XG4gIH07XG5cbiAgY29uc3QgZmlsbFBvc3NpYmxlQXR0YWNrID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKHsgeDogaSwgeTogaiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFzQWxyZWFkeUNsaWNrZWQgPSAoY29vcmQpID0+IHtcbiAgICByZXR1cm4gcHJldmlvdXNBdHRhY2tzLmZpbmQoXG4gICAgICAoZWwpID0+IGVsLnggPT09IGNvb3JkLnggJiYgZWwueSA9PT0gY29vcmQueVxuICAgICkgIT09IHVuZGVmaW5lZFxuICAgICAgPyB0cnVlXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGdldE5hbWUsXG4gICAgbWFrZUF0dGFjayxcbiAgICBzZXRJc05leHQsXG4gICAgZmlsbFBvc3NpYmxlQXR0YWNrLFxuICAgIGhhc0FscmVhZHlDbGlja2VkLFxuICAgIGdldENvbXB1dGVyUGxhY2VtZW50LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0IGNyZWF0aW9uXCIpO1xuICBpZiAoc2l6ZSA8IDIpIHRocm93IEVycm9yKFwiU2l6ZSB0b28gbG93XCIpO1xuICBjb25zdCBsZW5ndGggPSBwYXJzZUludChzaXplKTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuXG4gIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICBpZiAodHlwZW9mIHBvcyAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0XCIpO1xuICAgIGlmIChpc1N1bmsoKSkgcmV0dXJuO1xuICAgIGlmIChoaXRzLmluY2x1ZGVzKHBvcykpIHJldHVybjtcbiAgICBoaXRzLnB1c2gocG9zKTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHMubGVuZ3RoID09PSBsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImNvbnN0IFVJID0gKCgpID0+IHtcbiAgbGV0IG9yaWVudGF0aW9uID0gXCJ4XCI7XG5cbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAocGxheWVyLCBvcHBvbmVudCwgaXNQbGF5ZXJCb2FyZCwgZ2FtZUlzT3ZlcikgPT4ge1xuICAgIGNvbnN0IGJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICAgIGlmICghaXNQbGF5ZXJCb2FyZCkgYm9hcmRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29tcHV0ZXItYm9hcmRcIik7XG4gICAgaWYgKGlzUGxheWVyQm9hcmQpIGJvYXJkV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1ib2FyZFwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IHBsYXllci5nZXROYW1lKCk7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC54ID0gaTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyLmdldE5hbWUoKSAhPT0gXCJDb21wdXRlclwiICYmXG4gICAgICAgICAgIWdhbWVJc092ZXIgJiZcbiAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVIYXNTaGlwKHsgeDogaSwgeTogaiB9KVxuICAgICAgICApIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGdhbWVJc092ZXIpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVIYXNTaGlwKHsgeDogaSwgeTogaiB9KSAmJlxuICAgICAgICAgICAgb3Bwb25lbnQuaGFzQWxyZWFkeUNsaWNrZWQoeyB4OiBpLCB5OiBqIH0pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wcG9uZW50Lmhhc0FscmVhZHlDbGlja2VkKHsgeDogaSwgeTogaiB9KSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmdhbWVib2FyZC5jb29yZGluYXRlSGFzU2hpcCh7IHg6IGksIHk6IGogfSkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XG4gICAgfVxuICAgIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIHJldHVybiBib2FyZFdyYXBwZXI7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySGl0U3RhdHVzID0gKGhpdFN0YXR1cywgZWwpID0+IHtcbiAgICBpZiAoaGl0U3RhdHVzLmhpdCkgZWwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICBlbHNlIGVsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICB9O1xuXG4gIGNvbnN0IGdldEVsZW1lbnRCeUNvb3JkID0gKHsgeCwgeSB9KSA9PiB7XG4gICAgbGV0IGZvdW5kQ2hpbGQ7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLWJvYXJkXCIpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LngpID09PSB4ICYmXG4gICAgICAgIHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LnkpID09PSB5XG4gICAgICApIHtcbiAgICAgICAgZm91bmRDaGlsZCA9IHNxdWFyZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmRDaGlsZDtcbiAgfTtcblxuICBjb25zdCBhZGRXaW5IZWFkZXIgPSAod2lubmVyKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2lubmVyLmdldE5hbWUoKX0gd29uIWA7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi13cmFwcGVyXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwXCI7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGhlYWRlcik7XG4gIH07XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIG9yaWVudGF0aW9uID0gb3JpZW50YXRpb24gPT09IFwieFwiID8gXCJ5XCIgOiBcInhcIjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGBTd2l0Y2ggb3JpZW50YXRpb246ICR7Z2V0T3JpZW50YXRpb24oKX1gO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9yaWVudGF0aW9uLWJ1dHRvblwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBzd2l0Y2hPcmllbnRhdGlvbigpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYFN3aXRjaCBvcmllbnRhdGlvbjogJHtnZXRPcmllbnRhdGlvbigpfWA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBhZGRTZWxlY3Rpb24gPSAoY29vcmRzLCBpc1NoaXApID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGNvb3Jkcy5tYXAoKGNvb3JkKSA9PiB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXg9XCIke2Nvb3JkLngudG9TdHJpbmcoKX1cIl1bZGF0YS15PVwiJHtjb29yZC55LnRvU3RyaW5nKCl9XCJdYFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIWlzU2hpcCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBlbHNlIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNlbGVjdGlvbnMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9tcHQgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb21wdFwiKTtcbiAgICBwcm9tcHQudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcHMgdG8gY29udGludWUuLi5cIjtcbiAgICBpZiAodGV4dCkgcHJvbXB0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQocHJvbXB0KTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9tcHRUZXh0ID0gKHRleHQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdFwiKS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcmVuZGVySGl0U3RhdHVzLFxuICAgIGdldEVsZW1lbnRCeUNvb3JkLFxuICAgIGFkZFdpbkhlYWRlcixcbiAgICBjcmVhdGVXcmFwcGVyLFxuICAgIGNyZWF0ZUhlYWRlcixcbiAgICBnZXRPcmllbnRhdGlvbixcbiAgICBzd2l0Y2hPcmllbnRhdGlvbixcbiAgICBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbixcbiAgICBhZGRTZWxlY3Rpb24sXG4gICAgcmVtb3ZlU2VsZWN0aW9ucyxcbiAgICBjcmVhdGVQcm9tcHQsXG4gICAgc2V0UHJvbXB0VGV4dCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vdWlcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gUGxheWVyKFwiWW91XCIpO1xuICAvKnBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogMSwgeTogMSB9LCB7IHg6IDUsIHk6IDEgfSk7XG4gIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogNiwgeTogNSB9LCB7IHg6IDgsIHk6IDUgfSk7XG4gIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogMiwgeTogMyB9LCB7IHg6IDIsIHk6IDUgfSk7XG4gIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogMTAsIHk6IDggfSwgeyB4OiAxMCwgeTogMTAgfSk7XG4gIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogNCwgeTogMyB9LCB7IHg6IDQsIHk6IDYgfSk7Ki9cblxuICBjb25zdCBjb21wID0gUGxheWVyKFwiQ29tcHV0ZXJcIik7XG4gIC8qY29tcC5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogOCwgeTogMSB9LCB7IHg6IDQsIHk6IDEgfSk7XG4gIGNvbXAuZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDEwLCB5OiA1IH0sIHsgeDogOCwgeTogNSB9KTtcbiAgY29tcC5nYW1lYm9hcmQucGxhY2VTaGlwKHsgeDogMiwgeTogOCB9LCB7IHg6IDIsIHk6IDUgfSk7XG4gIGNvbXAuZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDEwLCB5OiA4IH0sIHsgeDogMTAsIHk6IDYgfSk7XG4gIGNvbXAuZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDQsIHk6IDMgfSwgeyB4OiA0LCB5OiA2IH0pOyovXG5cbiAgY29tcC5maWxsUG9zc2libGVBdHRhY2soKTtcblxuICBVSS5jcmVhdGVXcmFwcGVyKCk7XG4gIFVJLmNyZWF0ZVByb21wdCgpO1xuICBVSS5jcmVhdGVIZWFkZXIoKTtcblxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1haW4td3JhcHBlclwiKVxuICAgIC5hcHBlbmRDaGlsZChVSS5jcmVhdGVCb2FyZChwbGF5ZXIsIGNvbXAsIHRydWUsIGZhbHNlKSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibWFpbi13cmFwcGVyXCIpXG4gICAgLmFwcGVuZENoaWxkKFVJLmNyZWF0ZUJvYXJkKGNvbXAsIHBsYXllciwgZmFsc2UsIGZhbHNlKSk7XG5cbiAgY29uc3QgcGxheWVyRE9NQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1ib2FyZFwiKTtcbiAgcGxheWVyRE9NQm9hcmQuYXBwZW5kQ2hpbGQoVUkuY3JlYXRlT3JpZW50YXRpb25CdXR0b24oKSk7XG5cbiAgcGxheWVyRE9NQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBDb3VudCgpID49IDUpIHJldHVybjtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNxdWFyZVwiKSkgcmV0dXJuO1xuICAgIFVJLnJlbW92ZVNlbGVjdGlvbnMoKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgVUkuYWRkU2VsZWN0aW9uKFxuICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRTdWdnZXN0ZWRQbGFjZW1lbnQoXG4gICAgICAgIHsgeDogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSwgeTogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSB9LFxuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBUb1BsYWNlKCksXG4gICAgICAgIFVJLmdldE9yaWVudGF0aW9uKClcbiAgICAgIClcbiAgICApO1xuICB9KTtcblxuICBwbGF5ZXJET01Cb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwQ291bnQoKSA+PSA1KSByZXR1cm47XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNxdWFyZVwiKSkgcmV0dXJuO1xuICAgIFVJLnJlbW92ZVNlbGVjdGlvbnMoKTtcbiAgfSk7XG5cbiAgcGxheWVyRE9NQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBDb3VudCgpID49IDUpIHJldHVybjtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNxdWFyZVwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHBsYXllci5nYW1lYm9hcmQuZ2V0U3VnZ2VzdGVkUGxhY2VtZW50KFxuICAgICAgeyB4OiBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpLCB5OiBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpIH0sXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBUb1BsYWNlKCksXG4gICAgICBVSS5nZXRPcmllbnRhdGlvbigpXG4gICAgKTtcbiAgICBjb25zdCB3YXNQbGFjZWQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHBsYWNlbWVudFswXSxcbiAgICAgIHBsYWNlbWVudFtwbGFjZW1lbnQubGVuZ3RoIC0gMV1cbiAgICApO1xuICAgIFVJLmFkZFNlbGVjdGlvbihwbGFjZW1lbnQsIHdhc1BsYWNlZCk7XG4gICAgaWYgKHdhc1BsYWNlZCkge1xuICAgICAgbGV0IGNvbXBQbGFjZWQgPSBmYWxzZTtcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgcmV0dXJuZWQgPSBjb21wLmdldENvbXB1dGVyUGxhY2VtZW50KCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGNvbXAuZ2FtZWJvYXJkLmdldFN1Z2dlc3RlZFBsYWNlbWVudChcbiAgICAgICAgICByZXR1cm5lZC5wbGFjZW1lbnQsXG4gICAgICAgICAgY29tcC5nYW1lYm9hcmQuZ2V0U2hpcFRvUGxhY2UoKSxcbiAgICAgICAgICByZXR1cm5lZC5vcmllbnRhdGlvblxuICAgICAgICApO1xuICAgICAgICBjb21wUGxhY2VkID0gY29tcC5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIGNvb3Jkc1swXSxcbiAgICAgICAgICBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdXG4gICAgICAgICk7XG4gICAgICB9IHdoaWxlICghY29tcFBsYWNlZCk7XG4gICAgfVxuICAgIFVJLnJlbW92ZVNlbGVjdGlvbnMoKTtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwQ291bnQoKSA+PSA1KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yaWVudGF0aW9uLWJ1dHRvblwiKS5yZW1vdmUoKTtcbiAgICAgIFVJLnNldFByb21wdFRleHQoXCJGaXJlIGF0IHlvdXIgb3Bwb25lbnQncyBib2FyZCB0byBjb250aW51ZSFcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlci1ib2FyZFwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHJldHVybjtcblxuICAgICAgICAgIGNvbnN0IGNsaWNrZWRDb29yZCA9IHtcbiAgICAgICAgICAgIHg6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCksXG4gICAgICAgICAgICB5OiBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHBsYXllci5oYXNBbHJlYWR5Q2xpY2tlZChjbGlja2VkQ29vcmQpKSByZXR1cm47XG4gICAgICAgICAgcGxheWVyLnNldElzTmV4dCh0cnVlKTtcblxuICAgICAgICAgIGNvbnN0IHBsYXllckhpdFN0YXR1cyA9IHBsYXllci5tYWtlQXR0YWNrKGNvbXAuZ2FtZWJvYXJkLCB7XG4gICAgICAgICAgICB4OiBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpLFxuICAgICAgICAgICAgeTogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBVSS5zZXRQcm9tcHRUZXh0KFxuICAgICAgICAgICAgcGxheWVySGl0U3RhdHVzLmhpdCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IFwiWW91IGhpdCEgRmlyZSBhZ2FpbiB0byBjb250aW51ZS4uLlwiXG4gICAgICAgICAgICAgIDogXCJZb3UgbWlzc2VkISBGaXJlIGFnYWluIHRvIGNvbnRpbnVlLi4uXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIFVJLnJlbmRlckhpdFN0YXR1cyhwbGF5ZXJIaXRTdGF0dXMsIGUudGFyZ2V0KTtcbiAgICAgICAgICBwbGF5ZXIuc2V0SXNOZXh0KGZhbHNlKTtcblxuICAgICAgICAgIGxldCBbd2lubmVyLCBsb3Nlcl0gPSBpc0dhbWVPdmVyKHBsYXllciwgY29tcCk7XG4gICAgICAgICAgaWYgKHdpbm5lciAmJiBsb3Nlcikge1xuICAgICAgICAgICAgVUkuc2V0UHJvbXB0VGV4dChcIllvdSBoaXQgYW5kIGRlc3Ryb3llZCB0aGUgb3Bwb25lbnQncyBsYXN0IHNoaXAhXCIpO1xuICAgICAgICAgICAgZ2FtZU92ZXIod2lubmVyLCBsb3Nlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAuc2V0SXNOZXh0KHRydWUpO1xuICAgICAgICAgICAgY29uc3QgY29tcEhpdFN0YXR1cyA9IGNvbXAubWFrZUF0dGFjayhwbGF5ZXIuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBIaXRUYXJnZXQgPSBVSS5nZXRFbGVtZW50QnlDb29yZChjb21wSGl0U3RhdHVzLmNvb3JkKTtcbiAgICAgICAgICAgIFVJLnJlbmRlckhpdFN0YXR1cyhjb21wSGl0U3RhdHVzLCBjb21wSGl0VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbXAuc2V0SXNOZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIFt3aW5uZXIsIGxvc2VyXSA9IGlzR2FtZU92ZXIocGxheWVyLCBjb21wKTtcbiAgICAgICAgICAgIGlmICh3aW5uZXIgJiYgbG9zZXIpIGdhbWVPdmVyKHdpbm5lciwgbG9zZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGlzR2FtZU92ZXIocGxheWVyMSwgcGxheWVyMikge1xuICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCkpIHJldHVybiBbcGxheWVyMiwgcGxheWVyMV07XG4gIGlmIChwbGF5ZXIyLmdhbWVib2FyZC5hcmVTaGlwc1N1bmsoKSkgcmV0dXJuIFtwbGF5ZXIxLCBwbGF5ZXIyXTtcbiAgcmV0dXJuIFtmYWxzZSwgZmFsc2VdO1xufVxuXG5mdW5jdGlvbiBnYW1lT3Zlcih3aW5uZXIsIGxvc2VyKSB7XG4gIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdyYXBwZXJcIik7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlclwiKTtcbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiBib2FyZC5yZW1vdmUoKSk7XG4gIGNvbnN0IHdpbm5lckJvYXJkID0gVUkuY3JlYXRlQm9hcmQoXG4gICAgd2lubmVyLFxuICAgIGxvc2VyLFxuICAgIHdpbm5lci5nZXROYW1lKCkgIT09IFwiQ29tcHV0ZXJcIixcbiAgICB0cnVlXG4gICk7XG5cbiAgY29uc3QgbG9zZXJCb2FyZCA9IFVJLmNyZWF0ZUJvYXJkKFxuICAgIGxvc2VyLFxuICAgIHdpbm5lcixcbiAgICBsb3Nlci5nZXROYW1lKCkgIT09IFwiQ29tcHV0ZXJcIixcbiAgICB0cnVlXG4gICk7XG5cbiAgaWYgKHdpbm5lci5nZXROYW1lKCkgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGxvc2VyQm9hcmQpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKHdpbm5lckJvYXJkKTtcbiAgfSBlbHNlIHtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZCh3aW5uZXJCb2FyZCk7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQobG9zZXJCb2FyZCk7XG4gIH1cbiAgVUkuYWRkV2luSGVhZGVyKHdpbm5lcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=