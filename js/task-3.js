const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handler = function (event) {
  const name = event.currentTarget.value.trim();
  outputEl.textContent = name === '' ? 'Anonymous' : name;
};

inputEl.addEventListener('input', handler);
