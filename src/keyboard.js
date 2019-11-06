
const keyMatrixArr = require('./data.json');


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
