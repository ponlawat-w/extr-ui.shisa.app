const _base = document.getElementById('input-base');
const _url = document.getElementById('input-url');
const _extr = document.getElementById('input-extr');

const save = () => {
  localStorage.setItem('extr-ui', JSON.stringify({
    base: _base.value,
    extr: _extr.value
  }));
};

const load = () => {
  const dataStr = localStorage.getItem('extr-ui');
  if (dataStr) {
    const data = JSON.parse(dataStr);
    if (data.base) {
      _base.value = data.base;
    }
    if (data.extr) {
      _extr.value = data.extr;
    }
  }
};

document.getElementById('form').onsubmit = e => {
  e.stopImmediatePropagation();
  e.stopPropagation();
  e.preventDefault();

  save();
  window.location = `${_base.value}/${window.btoa(_url.value)}/${_extr.value}`;
};

load();
