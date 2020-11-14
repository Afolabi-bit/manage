var elem = document.getElementById('carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  accessibility: true,
  autoPlay: 4000,
  wrapAround: false
});

//FORM VALIDATION

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

function removeClasses() {
    form.classList.remove('error');
    errorMsg.textContent = '';
}

function timeout() {
    setTimeout(
        removeClasses,5000
    )
}


function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@']+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function validate(e){
  e.preventDefault();
  const emailVal = email.value.trim();
  if(emailVal == '' || emailVal == null) {
    form.classList.add('error');
    errorMsg.textContent = 'Email cannot be empty';
  } else if (!isEmailValid(emailVal)) {
    form.classList.add('error');
    errorMsg.textContent = 'Please insert a valid email';
  } else {
    return
  }
   timeout()
}

form.addEventListener('submit', validate)

//navigation


const body = document.querySelector('body');
const menu = document.querySelector('#toggle')
const overlay = document.querySelector('#overlay')

menu.addEventListener('click', ()=>{
  body.classList.toggle('change')
});

overlay.addEventListener('click', ()=>{
  body.classList.remove('change')
});
