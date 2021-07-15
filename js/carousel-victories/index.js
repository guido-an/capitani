
let firstElement = 0
let secondElement = 1
let thirdElement = 2

function displayVictories () {
  return document.getElementById('carousel-victories').innerHTML +=
  `<div class="carousel-img-container">
     <img class="carousel-img" src="${victories[firstElement].img}" alt="${victories[firstElement].name}">
    </div>
    <div class="carousel-img-container">
     <img class="carousel-img" src="${victories[secondElement].img}" alt="${victories[secondElement].name}">
    </div>
    <div class="carousel-img-container">
     <img class="carousel-img" src="${victories[thirdElement].img}" alt="${victories[thirdElement].name}">
    </div>
    `
}

function hideVictories () {
  return document.getElementById('carousel-victories').innerHTML = ''
}

window.addEventListener('load', function () {
  displayVictories()

  document.getElementById('next-arrow-victories').addEventListener('click', (e) => {
    handleArrows(e, 'increase')
  })
  document.getElementById('prev-arrow-victories').addEventListener('click', (e) => {
    handleArrows(e, 'decrease')
  })
})

function handleArrows (e, operator) {
  e.preventDefault()
  if (operator === 'increase') {
    firstElement === victories.length - 1 ? firstElement = 0 : firstElement++
    secondElement === victories.length - 1 ? secondElement = 0 : secondElement++
    thirdElement === victories.length - 1 ? thirdElement = 0 : thirdElement++
  }
  if (operator === 'decrease') {
    firstElement === 0 ? firstElement = victories.length - 1 : firstElement--
    secondElement === 0 ? secondElement = victories.length - 1 : secondElement--
    thirdElement === 0 ? thirdElement = victories.length - 1 : thirdElement--
  }
  hideVictories()
  displayVictories()
}
