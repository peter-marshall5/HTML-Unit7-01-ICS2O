const numInput = document.getElementById('num')
const playButton = document.getElementById('play')

function onclick () {
  if (numInput.value === '') {
    alert('You must enter a number into the field.')
    return
  }
  const num = parseInt(numInput.value)
  if (num < 1 || num > 10) {
    alert('Enter a number from 1 to 10.')
    return
  }
  if (isNaN(num)) {
    alert('You entered an invalid number')
    return
  }
  const random = Math.ceil(Math.random() * 10)
  if (random === num) {
    win()
  } else {
    lose(random)
  }
  numInput.value = ''
}

function win () {
  alert('You won!')
}

function lose (n) {
  alert('I picked ' + n + '. Try again')
}

playButton.addEventListener('click', onclick)
