const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = +(document.querySelector('#height').value)
  const weight = +(document.querySelector('#weight').value)
  const results = document.querySelector('#results');
  // console.log(typeof height, typeof weight);

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight  ${weight}`;
  }
  else{
    const ans = (weight/ (height*height)).toFixed(2)
    results.innerHTML = `<span>${ans}</span>`
  }
})