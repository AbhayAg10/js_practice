const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector('body');
buttons.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    // console.log(e.target.id);
    body.style.backgroundColor = e.target.id
  })
});