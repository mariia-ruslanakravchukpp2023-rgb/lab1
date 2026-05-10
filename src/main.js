const status = import.meta.env.VITE_APP_STATUS;

document.body.insertAdjacentHTML(
  "beforeend",
  `<div style="text-align:center; font-weight:bold; margin:10px;">${status}</div>`
);