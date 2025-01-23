const container = document.getElementById("key-container");

container.innerHTML = generateHTML("-", "-", "-");

window.addEventListener("keydown", (e) => {
  container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
});

function generateHTML(key, code, keyCode) {
  return `
      <div class="key-container">
        <h4>Key</h4>
        <div class="key-content"><h2>${key === " " ? "Space" : key}</h2></div>
        <h4>Code</h4>
        <div class="key-content"><h2>${code}</h2></div>
        <h4>Key Code</h4>
        <div class="key-content"><h2>${keyCode}</h2></div>
      </div>
    `;
}
