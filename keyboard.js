
const keyMatrixArr = [
  [
    {
      enKey: '`',
      ruKey: 'ё',
      enUpKey: '~',
      code: 'Backquote',
    },
    {
      enKey: '1',
      ruKey: '1',
      enUpKey: '!',
      ruUpKey: '!',
      code: 'Digit1',
    },
    {
      enKey: '2',
      ruKey: '2',
      enUpKey: '@',
      ruUpKey: '"',
      code: 'Digit2',
    },
    {
      enKey: '3',
      ruKey: '3',
      enUpKey: '#',
      ruUpKey: '№',
      code: 'Digit3',
    },
    {
      enKey: '4',
      ruKey: '4',
      enUpKey: '$',
      ruUpKey: ';',
      code: 'Digit4',
    },
    {
      enKey: '5',
      ruKey: '5',
      enUpKey: '%',
      ruUpKey: '%',
      code: 'Digit5',
    },
    {
      enKey: '6',
      ruKey: '6',
      enUpKey: '^',
      ruUpKey: ':',
      code: 'Digit6',
    },
    {
      enKey: '7',
      ruKey: '7',
      enUpKey: '&',
      ruUpKey: '?',
      code: 'Digit7',
    },
    {
      enKey: '8',
      ruKey: '8',
      enUpKey: '*',
      ruUpKey: '*',
      code: 'Digit8',
    },
    {
      enKey: '9',
      ruKey: '9',
      enUpKey: '(',
      ruUpKey: '(',
      code: 'Digit9',
    },
    {
      enKey: '0',
      ruKey: '0',
      enUpKey: ')',
      ruUpKey: ')',
      code: 'Digit0',
    },
    {
      enKey: '-',
      ruKey: '-',
      enUpKey: '_',
      ruUpKey: '_',
      code: 'Minus',
    },
    {
      enKey: '=',
      ruKey: '=',
      enUpKey: '+',
      ruUpKey: '+',
      code: 'Equal',
    },
    {
      enKey: '&larr;',
      ruKey: '&larr;',
      code: 'Backspace',
      speсification: 'functional',
    },
  ],
  [
    {
      enKey: 'Tab',
      ruKey: 'Tab',
      code: 'Tab',
      speсification: 'functional',
    },
    {
      enKey: 'q',
      ruKey: 'й',
      code: 'KeyQ',
    },
    {
      enKey: 'w',
      ruKey: 'ц',
      code: 'KeyW',
    },
    {
      enKey: 'e',
      ruKey: 'у',
      code: 'KeyE',
    },
    {
      enKey: 'r',
      ruKey: 'к',
      code: 'KeyR',
    },
    {
      enKey: 't',
      ruKey: 'е',
      code: 'KeyT',
    },
    {
      enKey: 'y',
      ruKey: 'н',
      code: 'KeyY',
    },
    {
      enKey: 'u',
      ruKey: 'г',
      code: 'KeyU',
    },
    {
      enKey: 'i',
      ruKey: 'ш',
      code: 'KeyI',
    },
    {
      enKey: 'o',
      ruKey: 'щ',
      code: 'KeyO',
    },
    {
      enKey: 'p',
      ruKey: 'з',
      code: 'KeyP',
    },
    {
      enKey: '[',
      ruKey: 'х',
      enUpKey: '{',
      code: 'BracketLeft',
    },
    {
      enKey: ']',
      ruKey: 'ъ',
      enUpKey: '}',
      code: 'BracketRight',
    },
    {
      enKey: '\\',
      ruKey: '\\',
      enUpKey: '|',
      ruUpKey: '/',
      code: 'Backslash',
    },
  ],
  [
    {
      enKey: 'caps',
      ruKey: 'caps',
      code: 'CapsLock',
      speсification: 'functional',
    },
    {
      enKey: 'a',
      ruKey: 'ф',
      code: 'KeyA',
    },
    {
      enKey: 's',
      ruKey: 'ы',
      code: 'KeyS',
    },
    {
      enKey: 'd',
      ruKey: 'в',
      code: 'KeyD',
    },
    {
      enKey: 'f',
      ruKey: 'а',
      code: 'KeyF',
    },
    {
      enKey: 'g',
      ruKey: 'п',
      code: 'KeyG',
    },
    {
      enKey: 'h',
      ruKey: 'р',
      code: 'KeyH',
    },
    {
      enKey: 'j',
      ruKey: 'о',
      code: 'KeyJ',
    },
    {
      enKey: 'k',
      ruKey: 'л',
      code: 'KeyK',
    },
    {
      enKey: 'l',
      ruKey: 'д',
      code: 'KeyL',
    },
    {
      enKey: ';',
      ruKey: 'ж',
      enUpKey: ':',
      code: 'Semicolon',
    },
    {
      enKey: "'",
      ruKey: 'э',
      enUpKey: '"',
      code: 'IntlBackslash',
    },
    {
      enKey: '&crarr;',
      ruKey: '&crarr;',
      code: 'Enter',
      speсification: 'functional',
    },
  ],
  [
    {
      enKey: 'shift',
      ruKey: 'shift',
      code: 'ShiftLeft',
      speсification: 'functional',
    },
    {
      enKey: 'z',
      ruKey: 'я',
      code: 'KeyZ',
    },
    {
      enKey: 'x',
      ruKey: 'ч',
      code: 'KeyX',
    },
    {
      enKey: 'c',
      ruKey: 'с',
      code: 'KeyC',
    },
    {
      enKey: 'v',
      ruKey: 'м',
      code: 'KeyV',
    },
    {
      enKey: 'b',
      ruKey: 'и',
      code: 'KeyB',
    },
    {
      enKey: 'n',
      ruKey: 'т',
      code: 'KeyN',
    },
    {
      enKey: 'm',
      ruKey: 'ь',
      code: 'KeyM',
    },
    {
      enKey: ',',
      ruKey: 'б',
      enUpKey: '<',
      code: 'Comma',
    },
    {
      enKey: '.',
      ruKey: 'ю',
      enUpKey: '>',
      code: 'Period',
    },
    {
      enKey: '/',
      ruKey: '.',
      enUpKey: '?',
      ruUpKey: ',',
      code: 'Slash',
    },
    {
      enKey: '&#9650;',
      ruKey: '&#9650;',
      code: 'ArrowUp',
      speсification: 'functional',
    },
    {
      enKey: 'shift',
      ruKey: 'shift',
      code: 'ShiftRight',
      speсification: 'functional',
    },
  ],
  [
    {
      enKey: 'ctrl',
      ruKey: 'ctrl',
      code: 'ControlLeft',
      speсification: 'functional',
    },
    {
      enKey: 'EN',
      ruKey: 'ру',
      code: 'ChangeLang',
      speсification: 'functional',
    },
    {
      enKey: 'alt',
      ruKey: 'alt',
      code: 'AltLeft',
      speсification: 'functional',
    },
    {
      enKey: ' ',
      ruKey: ' ',
      enUpKey: ' ',
      ruUpKey: ' ',
      code: 'Space',
    },
    {
      enKey: 'alt',
      ruKey: 'alt',
      code: 'AltRight',
      speсification: 'functional',
    },
    {
      enKey: '&#9668;',
      ruKey: '&#9668;',
      code: 'ArrowLeft',
      speсification: 'functional',
    },
    {
      enKey: '&#9660;',
      ruKey: '&#9660;',
      code: 'ArrowDown',
      speсification: 'functional',
    },
    {
      enKey: '&#9658;',
      ruKey: '&#9658;',
      code: 'ArrowRight',
      speсification: 'functional',
    },
    {
      enKey: 'ctrl',
      ruKey: 'ctrl',
      code: 'ControlRight',
      speсification: 'functional',
    },
  ],
];


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
