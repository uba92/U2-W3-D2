let counter = document.getElementById('counter')
console.log(counter.innerText)

const key = 'current'

const currentTime = sessionStorage.setItem(
  key,
  JSON.stringify(parseInt(counter.innerText))
)

const updateCounter = function () {
  const current = sessionStorage.getItem(currentTime)
  console.log(current)
}

updateCounter()
