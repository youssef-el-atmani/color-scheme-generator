const form = document.querySelector("#scheme-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const seedColor = document
    .querySelector("#seed-color")
    .value.replace("#", "");
  const mode = document.querySelector("#color-mode").value;
  console.log(`seed: ${seedColor}, mode: ${mode}`);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=5`,
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const html = data.colors
        .map((color) => {
          console.log(color);
          return `
          <div class="column">
            <div class="color" style="background-color: ${color.hex.value}"></div>
            <div class="hex-value">${color.hex.value}</div>
          </div>

      `;
        })
        .join("");

      document.querySelector("#color-scheme").innerHTML = html;
    });
});
