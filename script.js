

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');


function changeColor(){
  document.body.style.backgroundColor = color.value;
  text.textContent = color.value;
}


color.addEventListener('input', changeColor);