let btn = document.getElementById('btn');
let dropdown = document.getElementById('dropdown');
let downArrow = document.getElementById('down-arrow');

btn.addEventListener('click', function (e) {
  console.log(e.target.value);
  if(dropdown.classList == 'dropdown') {
    dropdown.classList.toggle('active')
    dropdown.classList.remove('dropdown')
    downArrow.style = 'transition: 0.3s;transform: rotate(180deg);'
  } else {
    dropdown.classList.toggle('dropdown')
    dropdown.classList.remove('active')
    downArrow.style = 'transition: 0.3s;transform: rotate(0deg);'
  }
});
