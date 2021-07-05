let decoyColorSelector = document.getElementById('colorSelText');
let colorSelection = document.getElementById('colorSel');
//set a default color
colorSelection.value = '#5e5555';
let colorNameElem = document.getElementById('colorName');
let defcol = colorSelection.value;
decoyColorSelector.style.color = defcol;
let n_defaultmatch = ntc.name(defcol);
n_defaultname = n_defaultmatch[1];
colorNameElem.textContent = n_defaultname;
colorNameElem.style.color = defcol;
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
  colorNameElem.style.color = col;
}
