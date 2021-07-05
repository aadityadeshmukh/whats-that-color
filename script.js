let decoyColorSelector = document.getElementById('colorSelText');
let colorSelection = document.getElementById('colorSel');
decoyColorSelector.onclick = function() {
  colorSelection.click();
};

colorSelection.addEventListener('input', changeColor, false);
function changeColor() {
  let col = colorSelection.value;
  console.log(col);
  decoyColorSelector.style.color = col;
}
