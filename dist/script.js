/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // $.prototype.dropdown = function () {
//   for (let i = 0; i < this.length; i++) {
//     const id = this[i].getAttribute("id");
//     $(this[i]).click(() => {
//       $(`[data-toggle-id='${id}']`).fadeToggle(300);
//     });
//   }
// };

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute("id");
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
      this.toggleClass("dropdown-active");
    });
  }
};

(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-toggle").dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // $.prototype.modal = function () {
//   const scroll = calcScroll();
//   for (let i = 0; i < this.length; i++) {
//     const target = this[i].getAttribute("data-target");
//     $(this[i]).click((e) => {
//       e.preventDefault();
//       // $(`[data-target-id="${id}"]`).fadeToggle(300);
//       $(target).fadeToggle(300);
//       document.body.style.overflow = "hidden";
//       document.body.style.paddingRight = `${scroll}px`;
//     });
//   }
//   function calcScroll() {
//     const div = document.createElement("div");
//     div.style.width = "100%";
//     div.style.height = "100px";
//     div.style.overflowY = "scroll";
//     div.style.visibility = "hidden";
//     document.body.appendChild(div);
//     let scrollWidth = div.offsetWidth - div.clientWidth;
//     div.remove();
//     return scrollWidth;
//   }
//   const closeElements =
//     document.querySelectorAll("[data-close]");
//   closeElements.forEach((elem) => {
//     $(elem).click(() => {
//       $(".modal").fadeOut(100);
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = `0px`;
//     });
//   });
//   $(".modal").click((e) => {
//     if (e.target.classList.contains("modal")) {
//       $(".modal").fadeOut(100);
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = `0px`;
//     }
//   });
// };

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  const scroll = calcScroll();

  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault(); // $(`[data-target-id="${id}"]`).fadeToggle(300);

      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeToggle(300);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scroll}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(100);
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains(target)) {
        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(100);
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }

  function calcScroll() {
    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
};

(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle='modal']").modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1)); // btns = { count: num, settings: [[text, className = [], close, cb]] };

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute("data-close", true);
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
        btn.addEventListener("click", btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <button class="close" data-close>
              <span>&times;</span>
          </button>
          <div class="modal-header">
              <div class="modal-title">
                  ${text.title}
              </div>
          </div>
          <div class="modal-body">
              ${text.body}
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute("data-target")).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// (() => {
//   const $ = function (selector) {
//     const elements = document.querySelectorAll(selector);
//     // console.log(elements);
//     const obj = {};
//     obj.hide = function () {
//       elements.forEach((elem) => {
//         elem.style.display = "none";
//       });
//       return obj;
//     };
//     obj.show = function () {
//       elements.forEach((elem) => {
//         elem.style.display = "";
//       });
//       return obj;
//     };
//     return obj;
//   };
//   window.$ = $;
// })();
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //// {} ???????????? ????????????
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attribute */ "./src/js/lib/modules/attribute.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _modules_calcScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calcScroll */ "./src/js/lib/modules/calcScroll.js");
/* harmony import */ var _modules_calcScroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_calcScroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0,
      counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) === null) {
      console.log("?????????? 'closest' - ???????????? ?????????????????? ???? ????????????????????");
    }

    this[i] = this[i].closest(selector);
    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0,
      counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attribute.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/attribute.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAttribute = function (attributeName, attributeValue) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].setAttribute) {
    //   continue;
    // }
    this[i].setAttribute(attributeName, attributeValue);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (attributeName // attributeValue
) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].setAttribute) {
    //   continue;
    // }
    this[i].removeAttribute(attributeName);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/calcScroll.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/calcScroll.js ***!
  \******************************************/
/***/ (() => {

// import $ from "../core";
// $.prototype.calcScroll = function () {
//   for (let i = 0; i < this.length; i++) {
//     const div = document.createElement("div");
//     div.style.width = "100%";
//     div.style.height = "100px";
//     div.style.overflowY = "scroll";
//     div.style.visibility = "hidden";
//     document.body.appendChild(div);
//     // let scrollWidth = div.offsetWidth - div.clientWidth;
//     let widthClient = div.clientWidth,
//       widthOffset = div.offsetWidth,
//       scrollWidth = widthOffset - widthClient;
//     div.remove();
//     return scrollWidth;
//   }
//   // return this;
//   // return scrollWidth;
// };
// // function calcScroll() {
// //   const div = document.createElement("div");
// //   div.style.width = "100%";
// //   div.style.height = "100px";
// //   div.style.overflowY = "scroll";
// //   div.style.visibility = "hidden";
// //   document.body.appendChild(div);
// //   // let scrollWidth = div.offsetWidth - div.clientWidth;
// //   let widthClient = div.clientWidth,
// //     widthOffset = div.offsetWidth,
// //     scrollWidth = widthOffset - widthClient;
// //   div.remove();
// //   return scrollWidth;
// // }
// // export default calcScroll;

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].classList) {
    //   continue;
    // }
    this[i].classList.remove(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].classList) {
    //   continue;
    // }
    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.showDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "";
  }

  return this; // console.log(this);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hideDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "none";
  }

  return this; // console.log(this);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === "none") {
      this[i].style.display = "";
    } else {
      this[i].style.display = "none";
    }
  }

  return this; // console.log(this);
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, callback, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElepsed = time - timeStart;
    let complection = Math.min(timeElepsed / dur, 1);
    callback(complection);

    if (timeElepsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || "block";

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = "none";
      } // this[i].style.opacity = complection;

    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this[i].style.display = display || "block";

      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
          this[i].style.display = "none";
        }
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener("click", handler);
    } else {
      this[i].click();
    } // this[i].addEventListener(handler);

  }

  return this;
};

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#first").on("click", () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("div").eq(1).fadeToggle(800);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').on("click", () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("div").eq(2).toggleClass("active");
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("button").eq(2).on("click", () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".w-50").fadeToggle(800);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").click(() => (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").createModal({
  text: {
    title: "Modal title",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!"
  },
  btns: {
    count: 2,
    settings: [["Close", ["btn-danger", "mr-10"], true], ["Save change", ["btn-success"], false, () => {
      alert("???????????? ??????????????????");
    }]]
  }
}));
})();

/******/ })()
;
//# sourceMappingURL=script.js.map