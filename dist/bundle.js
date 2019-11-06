/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keyboard__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"enKey\":\"`\",\"ruKey\":\"ё\",\"enUpKey\":\"~\",\"code\":\"Backquote\"},{\"enKey\":\"1\",\"ruKey\":\"1\",\"enUpKey\":\"!\",\"ruUpKey\":\"!\",\"code\":\"Digit1\"},{\"enKey\":\"2\",\"ruKey\":\"2\",\"enUpKey\":\"@\",\"ruUpKey\":\"\\\"\",\"code\":\"Digit2\"},{\"enKey\":\"3\",\"ruKey\":\"3\",\"enUpKey\":\"#\",\"ruUpKey\":\"№\",\"code\":\"Digit3\"},{\"enKey\":\"4\",\"ruKey\":\"4\",\"enUpKey\":\"$\",\"ruUpKey\":\";\",\"code\":\"Digit4\"},{\"enKey\":\"5\",\"ruKey\":\"5\",\"enUpKey\":\"%\",\"ruUpKey\":\"%\",\"code\":\"Digit5\"},{\"enKey\":\"6\",\"ruKey\":\"6\",\"enUpKey\":\"^\",\"ruUpKey\":\":\",\"code\":\"Digit6\"},{\"enKey\":\"7\",\"ruKey\":\"7\",\"enUpKey\":\"&\",\"ruUpKey\":\"?\",\"code\":\"Digit7\"},{\"enKey\":\"8\",\"ruKey\":\"8\",\"enUpKey\":\"*\",\"ruUpKey\":\"*\",\"code\":\"Digit8\"},{\"enKey\":\"9\",\"ruKey\":\"9\",\"enUpKey\":\"(\",\"ruUpKey\":\"(\",\"code\":\"Digit9\"},{\"enKey\":\"0\",\"ruKey\":\"0\",\"enUpKey\":\")\",\"ruUpKey\":\")\",\"code\":\"Digit0\"},{\"enKey\":\"-\",\"ruKey\":\"-\",\"enUpKey\":\"_\",\"ruUpKey\":\"_\",\"code\":\"Minus\"},{\"enKey\":\"=\",\"ruKey\":\"=\",\"enUpKey\":\"+\",\"ruUpKey\":\"+\",\"code\":\"Equal\"},{\"enKey\":\"&larr;\",\"ruKey\":\"&larr;\",\"code\":\"Backspace\",\"speсification\":\"functional\"}],[{\"enKey\":\"Tab\",\"ruKey\":\"Tab\",\"code\":\"Tab\",\"speсification\":\"functional\"},{\"enKey\":\"q\",\"ruKey\":\"й\",\"code\":\"KeyQ\"},{\"enKey\":\"w\",\"ruKey\":\"ц\",\"code\":\"KeyW\"},{\"enKey\":\"e\",\"ruKey\":\"у\",\"code\":\"KeyE\"},{\"enKey\":\"r\",\"ruKey\":\"к\",\"code\":\"KeyR\"},{\"enKey\":\"t\",\"ruKey\":\"е\",\"code\":\"KeyT\"},{\"enKey\":\"y\",\"ruKey\":\"н\",\"code\":\"KeyY\"},{\"enKey\":\"u\",\"ruKey\":\"г\",\"code\":\"KeyU\"},{\"enKey\":\"i\",\"ruKey\":\"ш\",\"code\":\"KeyI\"},{\"enKey\":\"o\",\"ruKey\":\"щ\",\"code\":\"KeyO\"},{\"enKey\":\"p\",\"ruKey\":\"з\",\"code\":\"KeyP\"},{\"enKey\":\"[\",\"ruKey\":\"х\",\"enUpKey\":\"{\",\"code\":\"BracketLeft\"},{\"enKey\":\"]\",\"ruKey\":\"ъ\",\"enUpKey\":\"}\",\"code\":\"BracketRight\"},{\"enKey\":\"\\\\\",\"ruKey\":\"\\\\\",\"enUpKey\":\"|\",\"ruUpKey\":\"/\",\"code\":\"Backslash\"}],[{\"enKey\":\"caps\",\"ruKey\":\"caps\",\"code\":\"CapsLock\",\"speсification\":\"functional\"},{\"enKey\":\"a\",\"ruKey\":\"ф\",\"code\":\"KeyA\"},{\"enKey\":\"s\",\"ruKey\":\"ы\",\"code\":\"KeyS\"},{\"enKey\":\"d\",\"ruKey\":\"в\",\"code\":\"KeyD\"},{\"enKey\":\"f\",\"ruKey\":\"а\",\"code\":\"KeyF\"},{\"enKey\":\"g\",\"ruKey\":\"п\",\"code\":\"KeyG\"},{\"enKey\":\"h\",\"ruKey\":\"р\",\"code\":\"KeyH\"},{\"enKey\":\"j\",\"ruKey\":\"о\",\"code\":\"KeyJ\"},{\"enKey\":\"k\",\"ruKey\":\"л\",\"code\":\"KeyK\"},{\"enKey\":\"l\",\"ruKey\":\"д\",\"code\":\"KeyL\"},{\"enKey\":\";\",\"ruKey\":\"ж\",\"enUpKey\":\":\",\"code\":\"Semicolon\"},{\"enKey\":\"'\",\"ruKey\":\"э\",\"enUpKey\":\"\\\"\",\"code\":\"IntlBackslash\"},{\"enKey\":\"&crarr;\",\"ruKey\":\"&crarr;\",\"code\":\"Enter\",\"speсification\":\"functional\"}],[{\"enKey\":\"shift\",\"ruKey\":\"shift\",\"code\":\"ShiftLeft\",\"speсification\":\"functional\"},{\"enKey\":\"z\",\"ruKey\":\"я\",\"code\":\"KeyZ\"},{\"enKey\":\"x\",\"ruKey\":\"ч\",\"code\":\"KeyX\"},{\"enKey\":\"c\",\"ruKey\":\"с\",\"code\":\"KeyC\"},{\"enKey\":\"v\",\"ruKey\":\"м\",\"code\":\"KeyV\"},{\"enKey\":\"b\",\"ruKey\":\"и\",\"code\":\"KeyB\"},{\"enKey\":\"n\",\"ruKey\":\"т\",\"code\":\"KeyN\"},{\"enKey\":\"m\",\"ruKey\":\"ь\",\"code\":\"KeyM\"},{\"enKey\":\",\",\"ruKey\":\"б\",\"enUpKey\":\"<\",\"code\":\"Comma\"},{\"enKey\":\".\",\"ruKey\":\"ю\",\"enUpKey\":\">\",\"code\":\"Period\"},{\"enKey\":\"/\",\"ruKey\":\".\",\"enUpKey\":\"?\",\"ruUpKey\":\",\",\"code\":\"Slash\"},{\"enKey\":\"&#9650;\",\"ruKey\":\"&#9650;\",\"code\":\"ArrowUp\",\"speсification\":\"functional\"},{\"enKey\":\"shift\",\"ruKey\":\"shift\",\"code\":\"ShiftRight\",\"speсification\":\"functional\"}],[{\"enKey\":\"ctrl\",\"ruKey\":\"ctrl\",\"code\":\"ControlLeft\",\"speсification\":\"functional\"},{\"enKey\":\"EN\",\"ruKey\":\"ру\",\"code\":\"ChangeLang\",\"speсification\":\"functional\"},{\"enKey\":\"alt\",\"ruKey\":\"alt\",\"code\":\"AltLeft\",\"speсification\":\"functional\"},{\"enKey\":\" \",\"ruKey\":\" \",\"enUpKey\":\" \",\"ruUpKey\":\" \",\"code\":\"Space\"},{\"enKey\":\"alt\",\"ruKey\":\"alt\",\"code\":\"AltRight\",\"speсification\":\"functional\"},{\"enKey\":\"&#9668;\",\"ruKey\":\"&#9668;\",\"code\":\"ArrowLeft\",\"speсification\":\"functional\"},{\"enKey\":\"&#9660;\",\"ruKey\":\"&#9660;\",\"code\":\"ArrowDown\",\"speсification\":\"functional\"},{\"enKey\":\"&#9658;\",\"ruKey\":\"&#9658;\",\"code\":\"ArrowRight\",\"speсification\":\"functional\"},{\"enKey\":\"ctrl\",\"ruKey\":\"ctrl\",\"code\":\"ControlRight\",\"speсification\":\"functional\"}]]");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const keyMatrixArr = __webpack_require__(/*! ./data.json */ "./src/data.json");


if (localStorage.language !== 'en' && localStorage.language !== 'ru') {
  localStorage.language = 'en';
}
const keyObjArr = [];
const rowObjArr = [];
// <textarea-----------------------
const textarea = document.createElement('textarea');
document.body.append(textarea);
textarea.id = 'textarea';
textarea.rows = '8';
textarea.readOnly = true;
// ---------------------------->

const keyboard = document.createElement('div');
document.body.append(keyboard);
keyboard.classList.add('keyboard');
const prevRow = keyboard;
// <----------create elements----------------------------
for (let row = 0; row < keyMatrixArr.length; row += 1) {
  rowObjArr[row] = document.createElement('div');
  prevRow.append(rowObjArr[row]);
  rowObjArr[row].classList.add('keyboard-row');
  const prevKey = rowObjArr[row];
  keyObjArr[row] = [];
  for (let keyNum = 0; keyNum < keyMatrixArr[row].length; keyNum += 1) {
    keyObjArr[row].push(document.createElement('span'));
    prevKey.append(keyObjArr[row][keyNum]);
    keyObjArr[row][keyNum].classList.add('keyboard-key');
    keyObjArr[row][keyNum].id = keyMatrixArr[row][keyNum].code;
    const upcase = document.createElement('p');
    keyObjArr[row][keyNum].append(upcase);
    upcase.classList.add('keyboard-key--upcase');
    const downcase = document.createElement('p');
    upcase.after(downcase);
    downcase.classList.add('keyboard-key--downcase');
  }
}
// -------------------------------->
let uppercase = false;
let shiftOn = false;

function getSymbol(code, keyArr) {
  for (let row = 0; row < keyArr.length; row += 1) {
    for (let key = 0; key < keyArr[row].length; key += 1) {
      if (keyArr[row][key].speсification !== 'functional' && code === keyArr[row][key].code) {
        if (localStorage.language === 'en') {
          if (uppercase && ((!uppercase && shiftOn) || (uppercase && !shiftOn))) {
            if (keyArr[row][key].enUpKey) {
              return keyArr[row][key].enKey;
            }

            return keyArr[row][key].enKey.toUpperCase();
          }
          if (shiftOn && ((!uppercase && shiftOn) || (uppercase && !shiftOn))) {
            if (keyArr[row][key].enUpKey) {
              return keyArr[row][key].enUpKey;
            }

            return keyArr[row][key].enKey.toUpperCase();
          }

          return keyArr[row][key].enKey;
        }

        if (uppercase && ((!uppercase && shiftOn) || (uppercase && !shiftOn))) {
          if (keyArr[row][key].ruUpKey) {
            return keyArr[row][key].ruKey;
          }

          return keyArr[row][key].ruKey.toUpperCase();
        }
        if (shiftOn && ((!uppercase && shiftOn) || (uppercase && !shiftOn))) {
          if (keyArr[row][key].ruUpKey) {
            return keyArr[row][key].ruUpKey;
          }

          return keyArr[row][key].ruKey.toUpperCase();
        }

        return keyArr[row][key].ruKey;
      }
    }
  }
  return '';
}

function keyFilling(keyArr) {
  if (localStorage.language === 'en') {
    for (let row = 0; row < keyArr.length; row += 1) {
      for (let key = 0; key < keyArr[row].length; key += 1) {
        document.getElementById(keyArr[row][key].code).lastChild.innerHTML = keyArr[row][key].enKey;
        if (keyArr[row][key].enUpKey) {
          document.getElementById(keyArr[row][key].code)
            .firstChild.innerHTML = keyArr[row][key].enUpKey;
        } else if (((!uppercase && shiftOn) || (uppercase && !shiftOn))
        && keyArr[row][key].speсification !== 'functional') {
          document.getElementById(keyArr[row][key].code)
            .lastChild.innerHTML = keyArr[row][key].enKey.toUpperCase();
        }
      }
    }
  } else if (localStorage.language === 'ru') {
    for (let row = 0; row < keyArr.length; row += 1) {
      for (let key = 0; key < keyArr[row].length; key += 1) {
        document.getElementById(keyArr[row][key].code).lastChild.innerHTML = keyArr[row][key].ruKey;
        if (keyArr[row][key].ruUpKey) {
          document.getElementById(keyArr[row][key].code)
            .firstChild.innerHTML = keyArr[row][key].ruUpKey;
        } else if (keyArr[row][key].speсification !== 'functional') {
          document.getElementById(keyArr[row][key].code).firstChild.innerHTML = '';
          if ((!uppercase && shiftOn) || (uppercase && !shiftOn)) {
            document.getElementById(keyArr[row][key].code)
              .lastChild.innerHTML = keyArr[row][key].ruKey.toUpperCase();
          }
        }
      }
    }
  }
}

function changeCase() {
  uppercase = !uppercase;
  if (uppercase) {
    document.getElementById('CapsLock').style.cssText = 'background-color: rgba(243, 255, 142, 0.9);';
  } else {
    document.getElementById('CapsLock').style.cssText = 'background-color: none;';
  }
  keyFilling(keyMatrixArr);
}

function changeShift() {
  shiftOn = !shiftOn;
  if (shiftOn) {
    document.getElementById('ShiftLeft').style.cssText = 'background-color: rgba(243, 255, 142, 0.9);';
  } else {
    document.getElementById('ShiftLeft').style.cssText = 'background-color: none;';
  }
  keyFilling(keyMatrixArr);
}

function setTab() {
  textarea.value += '  ';
}

function setEnter() {
  textarea.value += '\n';
}

function setBackspace() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

function changeLanguage() {
  localStorage.language = localStorage.language === 'en' ? 'ru' : 'en';
  keyFilling(keyMatrixArr);
}

function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', () => {
    pressed.add(window.event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', () => {
    pressed.delete(window.event.code);
  });
}


document.addEventListener('keydown', () => {
  document.getElementById(window.event.code).classList.add('active');
});

document.addEventListener('keyup', () => {
  document.getElementById(window.event.code).classList.remove('active');
  window.event.repeat = false;
  textarea.value += getSymbol(window.event.code, keyMatrixArr);
});

[].forEach.call(
  document.getElementsByClassName('keyboard-key'),
  (element) => {
    element.addEventListener('mousedown', () => {
      element.classList.add('active');
    });
  },
);
[].forEach.call(
  document.getElementsByClassName('keyboard-key'),
  (element) => {
    element.addEventListener('mouseup', () => {
      element.classList.remove('active');
      textarea.value += getSymbol(element.id, keyMatrixArr);
    });
  },
);
document.addEventListener('mouseup', () => { [].forEach.call(document.getElementsByClassName('active'), (element) => { element.classList.remove('active'); }); });


// for first filling key label
keyFilling(keyMatrixArr);
// caps lock
document.getElementById('CapsLock').addEventListener('click', () => { changeCase(); });
document.addEventListener('keydown', () => { if (window.event.code === 'CapsLock') { changeCase(); } });
// shift
document.getElementById('ShiftLeft').addEventListener('click', () => { changeShift(); });
document.addEventListener('keydown', () => {
  if (window.event.code === 'ShiftLeft') {
    window.event.repeat = false;
    changeShift();
  }
});
document.addEventListener('keyup', () => {
  if (window.event.code === 'ShiftLeft') {
    window.event.repeat = false;
    changeShift();
  }
});
// tab
document.getElementById('Tab').addEventListener('click', () => { setTab(); });
document.addEventListener('keydown', () => { if (window.event.code === 'Tab') { setTab(); } });
// enter
document.getElementById('Enter').addEventListener('click', () => { setEnter(); });
document.addEventListener('keydown', () => { if (window.event.code === 'Enter') { setEnter(); } });
// backspace
document.getElementById('Backspace').addEventListener('click', () => { setBackspace(); });
document.addEventListener('keydown', () => { if (window.event.code === 'Backspace') { setBackspace(); } });
// virtual key change language
document.getElementById('ChangeLang').addEventListener('click', () => { changeLanguage(); });
// change language ShiftLeft + AltLeft
runOnKeys(() => { changeLanguage(); }, 'ShiftLeft', 'AltLeft');


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3M/YmMzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0I7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXBCLHFCQUFxQixtQkFBTyxDQUFDLG9DQUFhOzs7QUFHMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEMscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUMsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLHFCQUFxQjtBQUMxQyx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9HQUFvRztBQUNwRyxHQUFHO0FBQ0gsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUc7QUFDckcsR0FBRztBQUNILGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLDRDQUE0QywwRUFBMEUsb0NBQW9DLEVBQUUsRUFBRSxFQUFFOzs7QUFHaEs7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGNBQWMsRUFBRTtBQUNyRiw0Q0FBNEMsd0NBQXdDLGNBQWMsRUFBRSxFQUFFO0FBQ3RHO0FBQ0Esc0VBQXNFLGVBQWUsRUFBRTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnRUFBZ0UsVUFBVSxFQUFFO0FBQzVFLDRDQUE0QyxtQ0FBbUMsVUFBVSxFQUFFLEVBQUU7QUFDN0Y7QUFDQSxrRUFBa0UsWUFBWSxFQUFFO0FBQ2hGLDRDQUE0QyxxQ0FBcUMsWUFBWSxFQUFFLEVBQUU7QUFDakc7QUFDQSxzRUFBc0UsZ0JBQWdCLEVBQUU7QUFDeEYsNENBQTRDLHlDQUF5QyxnQkFBZ0IsRUFBRSxFQUFFO0FBQ3pHO0FBQ0EsdUVBQXVFLGtCQUFrQixFQUFFO0FBQzNGO0FBQ0EsaUJBQWlCLGtCQUFrQixFQUFFOzs7Ozs7Ozs7Ozs7QUNqUHJDLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICcuL2tleWJvYXJkJztcbiIsIlxyXG5jb25zdCBrZXlNYXRyaXhBcnIgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UubGFuZ3VhZ2UgIT09ICdlbicgJiYgbG9jYWxTdG9yYWdlLmxhbmd1YWdlICE9PSAncnUnKSB7XHJcbiAgbG9jYWxTdG9yYWdlLmxhbmd1YWdlID0gJ2VuJztcclxufVxyXG5jb25zdCBrZXlPYmpBcnIgPSBbXTtcclxuY29uc3Qgcm93T2JqQXJyID0gW107XHJcbi8vIDx0ZXh0YXJlYS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQodGV4dGFyZWEpO1xyXG50ZXh0YXJlYS5pZCA9ICd0ZXh0YXJlYSc7XHJcbnRleHRhcmVhLnJvd3MgPSAnOCc7XHJcbnRleHRhcmVhLnJlYWRPbmx5ID0gdHJ1ZTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbmNvbnN0IGtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGtleWJvYXJkKTtcclxua2V5Ym9hcmQuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQnKTtcclxuY29uc3QgcHJldlJvdyA9IGtleWJvYXJkO1xyXG4vLyA8LS0tLS0tLS0tLWNyZWF0ZSBlbGVtZW50cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZm9yIChsZXQgcm93ID0gMDsgcm93IDwga2V5TWF0cml4QXJyLmxlbmd0aDsgcm93ICs9IDEpIHtcclxuICByb3dPYmpBcnJbcm93XSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByZXZSb3cuYXBwZW5kKHJvd09iakFycltyb3ddKTtcclxuICByb3dPYmpBcnJbcm93XS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1yb3cnKTtcclxuICBjb25zdCBwcmV2S2V5ID0gcm93T2JqQXJyW3Jvd107XHJcbiAga2V5T2JqQXJyW3Jvd10gPSBbXTtcclxuICBmb3IgKGxldCBrZXlOdW0gPSAwOyBrZXlOdW0gPCBrZXlNYXRyaXhBcnJbcm93XS5sZW5ndGg7IGtleU51bSArPSAxKSB7XHJcbiAgICBrZXlPYmpBcnJbcm93XS5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XHJcbiAgICBwcmV2S2V5LmFwcGVuZChrZXlPYmpBcnJbcm93XVtrZXlOdW1dKTtcclxuICAgIGtleU9iakFycltyb3ddW2tleU51bV0uY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQta2V5Jyk7XHJcbiAgICBrZXlPYmpBcnJbcm93XVtrZXlOdW1dLmlkID0ga2V5TWF0cml4QXJyW3Jvd11ba2V5TnVtXS5jb2RlO1xyXG4gICAgY29uc3QgdXBjYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAga2V5T2JqQXJyW3Jvd11ba2V5TnVtXS5hcHBlbmQodXBjYXNlKTtcclxuICAgIHVwY2FzZS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1rZXktLXVwY2FzZScpO1xyXG4gICAgY29uc3QgZG93bmNhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB1cGNhc2UuYWZ0ZXIoZG93bmNhc2UpO1xyXG4gICAgZG93bmNhc2UuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQta2V5LS1kb3duY2FzZScpO1xyXG4gIH1cclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxubGV0IHVwcGVyY2FzZSA9IGZhbHNlO1xyXG5sZXQgc2hpZnRPbiA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3ltYm9sKGNvZGUsIGtleUFycikge1xyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGtleUFyci5sZW5ndGg7IHJvdyArPSAxKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBrZXlBcnJbcm93XS5sZW5ndGg7IGtleSArPSAxKSB7XHJcbiAgICAgIGlmIChrZXlBcnJbcm93XVtrZXldLnNwZdGBaWZpY2F0aW9uICE9PSAnZnVuY3Rpb25hbCcgJiYgY29kZSA9PT0ga2V5QXJyW3Jvd11ba2V5XS5jb2RlKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5sYW5ndWFnZSA9PT0gJ2VuJykge1xyXG4gICAgICAgICAgaWYgKHVwcGVyY2FzZSAmJiAoKCF1cHBlcmNhc2UgJiYgc2hpZnRPbikgfHwgKHVwcGVyY2FzZSAmJiAhc2hpZnRPbikpKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlBcnJbcm93XVtrZXldLmVuVXBLZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ga2V5QXJyW3Jvd11ba2V5XS5lbktleTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGtleUFycltyb3ddW2tleV0uZW5LZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzaGlmdE9uICYmICgoIXVwcGVyY2FzZSAmJiBzaGlmdE9uKSB8fCAodXBwZXJjYXNlICYmICFzaGlmdE9uKSkpIHtcclxuICAgICAgICAgICAgaWYgKGtleUFycltyb3ddW2tleV0uZW5VcEtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXlBcnJbcm93XVtrZXldLmVuVXBLZXk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlBcnJbcm93XVtrZXldLmVuS2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGtleUFycltyb3ddW2tleV0uZW5LZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXBwZXJjYXNlICYmICgoIXVwcGVyY2FzZSAmJiBzaGlmdE9uKSB8fCAodXBwZXJjYXNlICYmICFzaGlmdE9uKSkpIHtcclxuICAgICAgICAgIGlmIChrZXlBcnJbcm93XVtrZXldLnJ1VXBLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleUFycltyb3ddW2tleV0ucnVLZXk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGtleUFycltyb3ddW2tleV0ucnVLZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNoaWZ0T24gJiYgKCghdXBwZXJjYXNlICYmIHNoaWZ0T24pIHx8ICh1cHBlcmNhc2UgJiYgIXNoaWZ0T24pKSkge1xyXG4gICAgICAgICAgaWYgKGtleUFycltyb3ddW2tleV0ucnVVcEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5QXJyW3Jvd11ba2V5XS5ydVVwS2V5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBrZXlBcnJbcm93XVtrZXldLnJ1S2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5QXJyW3Jvd11ba2V5XS5ydUtleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleUZpbGxpbmcoa2V5QXJyKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5sYW5ndWFnZSA9PT0gJ2VuJykge1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwga2V5QXJyLmxlbmd0aDsgcm93ICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwga2V5QXJyW3Jvd10ubGVuZ3RoOyBrZXkgKz0gMSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleUFycltyb3ddW2tleV0uY29kZSkubGFzdENoaWxkLmlubmVySFRNTCA9IGtleUFycltyb3ddW2tleV0uZW5LZXk7XHJcbiAgICAgICAgaWYgKGtleUFycltyb3ddW2tleV0uZW5VcEtleSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5QXJyW3Jvd11ba2V5XS5jb2RlKVxyXG4gICAgICAgICAgICAuZmlyc3RDaGlsZC5pbm5lckhUTUwgPSBrZXlBcnJbcm93XVtrZXldLmVuVXBLZXk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoKCF1cHBlcmNhc2UgJiYgc2hpZnRPbikgfHwgKHVwcGVyY2FzZSAmJiAhc2hpZnRPbikpXHJcbiAgICAgICAgJiYga2V5QXJyW3Jvd11ba2V5XS5zcGXRgWlmaWNhdGlvbiAhPT0gJ2Z1bmN0aW9uYWwnKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXlBcnJbcm93XVtrZXldLmNvZGUpXHJcbiAgICAgICAgICAgIC5sYXN0Q2hpbGQuaW5uZXJIVE1MID0ga2V5QXJyW3Jvd11ba2V5XS5lbktleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmxhbmd1YWdlID09PSAncnUnKSB7XHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBrZXlBcnIubGVuZ3RoOyByb3cgKz0gMSkge1xyXG4gICAgICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBrZXlBcnJbcm93XS5sZW5ndGg7IGtleSArPSAxKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5QXJyW3Jvd11ba2V5XS5jb2RlKS5sYXN0Q2hpbGQuaW5uZXJIVE1MID0ga2V5QXJyW3Jvd11ba2V5XS5ydUtleTtcclxuICAgICAgICBpZiAoa2V5QXJyW3Jvd11ba2V5XS5ydVVwS2V5KSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXlBcnJbcm93XVtrZXldLmNvZGUpXHJcbiAgICAgICAgICAgIC5maXJzdENoaWxkLmlubmVySFRNTCA9IGtleUFycltyb3ddW2tleV0ucnVVcEtleTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleUFycltyb3ddW2tleV0uc3Bl0YFpZmljYXRpb24gIT09ICdmdW5jdGlvbmFsJykge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5QXJyW3Jvd11ba2V5XS5jb2RlKS5maXJzdENoaWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgaWYgKCghdXBwZXJjYXNlICYmIHNoaWZ0T24pIHx8ICh1cHBlcmNhc2UgJiYgIXNoaWZ0T24pKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleUFycltyb3ddW2tleV0uY29kZSlcclxuICAgICAgICAgICAgICAubGFzdENoaWxkLmlubmVySFRNTCA9IGtleUFycltyb3ddW2tleV0ucnVLZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNhc2UoKSB7XHJcbiAgdXBwZXJjYXNlID0gIXVwcGVyY2FzZTtcclxuICBpZiAodXBwZXJjYXNlKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2Fwc0xvY2snKS5zdHlsZS5jc3NUZXh0ID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNTUsIDE0MiwgMC45KTsnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2Fwc0xvY2snKS5zdHlsZS5jc3NUZXh0ID0gJ2JhY2tncm91bmQtY29sb3I6IG5vbmU7JztcclxuICB9XHJcbiAga2V5RmlsbGluZyhrZXlNYXRyaXhBcnIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTaGlmdCgpIHtcclxuICBzaGlmdE9uID0gIXNoaWZ0T247XHJcbiAgaWYgKHNoaWZ0T24pIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTaGlmdExlZnQnKS5zdHlsZS5jc3NUZXh0ID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNTUsIDE0MiwgMC45KTsnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2hpZnRMZWZ0Jykuc3R5bGUuY3NzVGV4dCA9ICdiYWNrZ3JvdW5kLWNvbG9yOiBub25lOyc7XHJcbiAgfVxyXG4gIGtleUZpbGxpbmcoa2V5TWF0cml4QXJyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGFiKCkge1xyXG4gIHRleHRhcmVhLnZhbHVlICs9ICcgICc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEVudGVyKCkge1xyXG4gIHRleHRhcmVhLnZhbHVlICs9ICdcXG4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRCYWNrc3BhY2UoKSB7XHJcbiAgdGV4dGFyZWEudmFsdWUgPSB0ZXh0YXJlYS52YWx1ZS5zdWJzdHJpbmcoMCwgdGV4dGFyZWEudmFsdWUubGVuZ3RoIC0gMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUxhbmd1YWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5sYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5sYW5ndWFnZSA9PT0gJ2VuJyA/ICdydScgOiAnZW4nO1xyXG4gIGtleUZpbGxpbmcoa2V5TWF0cml4QXJyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuT25LZXlzKGZ1bmMsIC4uLmNvZGVzKSB7XHJcbiAgY29uc3QgcHJlc3NlZCA9IG5ldyBTZXQoKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4ge1xyXG4gICAgcHJlc3NlZC5hZGQod2luZG93LmV2ZW50LmNvZGUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKCFwcmVzc2VkLmhhcyhjb2Rlc1tpXSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZXNzZWQuY2xlYXIoKTtcclxuICAgIGZ1bmMoKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgIHByZXNzZWQuZGVsZXRlKHdpbmRvdy5ldmVudC5jb2RlKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93LmV2ZW50LmNvZGUpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5ldmVudC5jb2RlKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB3aW5kb3cuZXZlbnQucmVwZWF0ID0gZmFsc2U7XHJcbiAgdGV4dGFyZWEudmFsdWUgKz0gZ2V0U3ltYm9sKHdpbmRvdy5ldmVudC5jb2RlLCBrZXlNYXRyaXhBcnIpO1xyXG59KTtcclxuXHJcbltdLmZvckVhY2guY2FsbChcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrZXlib2FyZC1rZXknKSxcclxuICAoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4pO1xyXG5bXS5mb3JFYWNoLmNhbGwoXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgna2V5Ym9hcmQta2V5JyksXHJcbiAgKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgdGV4dGFyZWEudmFsdWUgKz0gZ2V0U3ltYm9sKGVsZW1lbnQuaWQsIGtleU1hdHJpeEFycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4geyBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyksIChlbGVtZW50KSA9PiB7IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IH0pOyB9KTtcclxuXHJcblxyXG4vLyBmb3IgZmlyc3QgZmlsbGluZyBrZXkgbGFiZWxcclxua2V5RmlsbGluZyhrZXlNYXRyaXhBcnIpO1xyXG4vLyBjYXBzIGxvY2tcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NhcHNMb2NrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZUNhc2UoKTsgfSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7IGlmICh3aW5kb3cuZXZlbnQuY29kZSA9PT0gJ0NhcHNMb2NrJykgeyBjaGFuZ2VDYXNlKCk7IH0gfSk7XHJcbi8vIHNoaWZ0XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTaGlmdExlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hhbmdlU2hpZnQoKTsgfSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5ldmVudC5jb2RlID09PSAnU2hpZnRMZWZ0Jykge1xyXG4gICAgd2luZG93LmV2ZW50LnJlcGVhdCA9IGZhbHNlO1xyXG4gICAgY2hhbmdlU2hpZnQoKTtcclxuICB9XHJcbn0pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICBpZiAod2luZG93LmV2ZW50LmNvZGUgPT09ICdTaGlmdExlZnQnKSB7XHJcbiAgICB3aW5kb3cuZXZlbnQucmVwZWF0ID0gZmFsc2U7XHJcbiAgICBjaGFuZ2VTaGlmdCgpO1xyXG4gIH1cclxufSk7XHJcbi8vIHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNldFRhYigpOyB9KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHsgaWYgKHdpbmRvdy5ldmVudC5jb2RlID09PSAnVGFiJykgeyBzZXRUYWIoKTsgfSB9KTtcclxuLy8gZW50ZXJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VudGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNldEVudGVyKCk7IH0pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4geyBpZiAod2luZG93LmV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHsgc2V0RW50ZXIoKTsgfSB9KTtcclxuLy8gYmFja3NwYWNlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdCYWNrc3BhY2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2V0QmFja3NwYWNlKCk7IH0pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4geyBpZiAod2luZG93LmV2ZW50LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7IHNldEJhY2tzcGFjZSgpOyB9IH0pO1xyXG4vLyB2aXJ0dWFsIGtleSBjaGFuZ2UgbGFuZ3VhZ2VcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NoYW5nZUxhbmcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hhbmdlTGFuZ3VhZ2UoKTsgfSk7XHJcbi8vIGNoYW5nZSBsYW5ndWFnZSBTaGlmdExlZnQgKyBBbHRMZWZ0XHJcbnJ1bk9uS2V5cygoKSA9PiB7IGNoYW5nZUxhbmd1YWdlKCk7IH0sICdTaGlmdExlZnQnLCAnQWx0TGVmdCcpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9