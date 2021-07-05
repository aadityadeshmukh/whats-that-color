let decoyColorSelector = document.getElementById('colorSelText');
let colorSelection = document.getElementById('colorSel');
let colorNameElem = document.getElementById('colorName');
decoyColorSelector.onclick = function() {
  colorSelection.click();
};

colorSelection.addEventListener('input', changeColor, false);
function changeColor() {
  let col = colorSelection.value;
  console.log(col);
  decoyColorSelector.style.color = col;

  //get the name of the color
  let n_match = ntc.name(col);
  n_rgb = n_match[0];
  n_name = n_match[1];
  n_exactMatch = n_match[2];
  console.log(n_name);

  //set the color name to paragraph elem
  colorNameElem.textContent = n_name;
}
