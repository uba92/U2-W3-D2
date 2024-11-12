// riferimento per i button

const saveButton = document.getElementById('save')
const removeButton = document.getElementById('remove')

// riferimento per input field

const inputField = document.getElementById('username')

const key = 'form-memory'

saveButton.addEventListener('click', function () {
  //salvo il valore di input in localStorage
  localStorage.setItem(key, inputField.value)

  const firstAlert = document.getElementsByClassName('alert')[0]

  firstAlert.classList.remove('d-none')

  setTimeout(() => {
    firstAlert.classList.add('d-none')
  }, 2000)
})

removeButton.addEventListener('click', function () {
  const savedContent = localStorage.getItem(key)

  if (!savedContent) {
    const thirdAlert = document.getElementsByClassName('alert')[2]

    thirdAlert.classList.remove('d-none')

    setTimeout(() => {
      thirdAlert.classList.add('d-none')
    }, 2000)
  } else {
    inputField.value = ''
    localStorage.removeItem(key)

    const secondAlert = document.getElementsByClassName('alert')[1]
    secondAlert.classList.remove('d-none')
    setTimeout(() => {
      secondAlert.classList.add('d-none')
    }, 2000)
  }
})

const fillField = function () {
  const lastNameSaved = localStorage.getItem(key)

  if (!lastNameSaved) {
    inputField.value = ''
  } else {
    inputField.value = lastNameSaved
  }
}

fillField()
