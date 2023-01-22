const nick = document.querySelector('.input-name')
const form = document.querySelector('.status-wrapper')
const status = document.querySelectorAll('input[name="status"]')
const errorText1 = document.querySelector('.text-error1')
const errorText2 = document.querySelector('.text-error2')
const errorText3 = document.querySelector('.text-error3')
const successfully = document.querySelector('.successfully')

const button = document.querySelector('button')

let lifeStatus = 0

nick.addEventListener('change', () => {
  nick.classList.remove('error-nick')
  errorText1.style.display = 'none'
  errorText2.style.display = 'none'
  errorText3.style.display = 'none'
})


button.addEventListener('click', () => {

  let key = 0

  for (let i of status) {
    if (i.checked) lifeStatus = Number(i.value)
  }

  if (lifeStatus === 0) form.classList.add('radio-error')
  else {
    form.classList.remove('radio-error')
    key += 1
  }
  ////////////////////////////////////////////////////////

  if (nick.value.length <= 5) {
    nick.classList.add('error-nick')
    errorText1.style.display = 'block'
  }
  else {
    nick.classList.remove('error-nick')
    errorText1.style.display = 'none'
    errorText3.style.display = 'none'
    key += 1
  }

  if (nick.value[0] === nick.value[0].toUpperCase()) {
    nick.classList.add('error-nick')
    errorText2.style.display = 'block'
  }
  else {
    nick.classList.remove('error-nick')
    errorText2.style.display = 'none'
    key += 1
  }

  /////////////////////////////////////////////////////////

  for (let i = 0; i < nick.value.length; i++) {
    if (nick.value[i] === ' ') {
      nick.classList.add('error-nick')
      errorText3.style.display = 'block'
      key -= 1
    }
    // else errorText3.style.display = 'none'
  }

  //////////////////////////////////////////////////////////

  if (key !== 3) successfully.style.display = 'none'
  else successfully.style.display = 'block'
  console.log(key)
})


