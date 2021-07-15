
let firstElement = 0
let secondElement = 1
let thirdElement = 2

// function displayVictories () {
//   return document.getElementById('carousel-victories').innerHTML +=
//   `<div class="carousel-img-container">
//      <img class="carousel-img" src="${victories[firstElement].img}" alt="${victories[firstElement].name}" test="ciao">
//     </div>

//     <div class="carousel-img-container">
//      <img class="carousel-img" src="${victories[secondElement].img}" alt="${victories[secondElement].name}">
//     </div>

//     <div class="carousel-img-container">
//      <img class="carousel-img" src="${victories[thirdElement].img}" alt="${victories[thirdElement].name}">
//      </div>

//     `
// }

function displayVictories () {
  return document.getElementById('carousel-victories').innerHTML +=
  `<div id="victory-carousel-container">
    <div>
      <div class="carousel-img-container">
      <img class="carousel-img" src="${victories[firstElement].img}" alt="${victories[firstElement].name}" test="ciao">
     </div>
     <p class="victory-name">${victories[firstElement].name}</p>
     <p class="victory-date">${victories[firstElement].date}</p>
    </div>

    <div>
      <div class="carousel-img-container" id="second-victory-container">
      <img class="carousel-img" src="${victories[secondElement].img}" alt="${victories[secondElement].name}" test="ciao">
     </div>
     <p class="victory-name">${victories[secondElement].name}</p>
     <p class="victory-date">${victories[secondElement].date}</p>

    </div>
    <div>
      <div class="carousel-img-container" id="third-victory-container">
      <img class="carousel-img" src="${victories[thirdElement].img}" alt="${victories[thirdElement].name}" test="ciao">
     </div>
     <p class="victory-name">${victories[thirdElement].name}</p>
     <p class="victory-date">${victories[thirdElement].date}</p>

    </div>

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

  // var elements = document.getElementsByClassName('victory-img')

  // for (var i = 0; i < elements.length; i++) {
  //   elements[i].addEventListener('click', handleHoverImg, false)
  // }
})

// var handleHoverImg = function () {
//   var attribute = this.getAttribute('alt')
//   console.log(this)
//   document.getElementById('victory-hover').innerHTML += attribute
// }

// var handleHoverOut = function () {
//   // this.style.opacity = 1
// }

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
