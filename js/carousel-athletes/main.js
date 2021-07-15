let firstToDisplay = 0
let secondToDisplay = 1
let thirdToDisplay = 2

function displayAthletes () {
  return document.getElementById('carousel-athletes').innerHTML +=
  `<div class="carousel-img-container">
     <img class="carousel-img" src="${athletes[firstToDisplay].img}" alt="${athletes[firstToDisplay].name}">
    </div>
    <div class="carousel-img-container">
     <img class="carousel-img" src="${athletes[secondToDisplay].img}" alt="${athletes[secondToDisplay].name}">
    </div>
    <div class="carousel-img-container">
     <img class="carousel-img" src="${athletes[thirdToDisplay].img}" alt="${athletes[thirdToDisplay].name}">
    </div>
    `
}

window.addEventListener('load', function () {
  displayAthletes()
  document.getElementById('next-arrow').addEventListener('click', (e) => {
    e.preventDefault()
    firstToDisplay === athletes.length - 1 ? firstToDisplay = 0 : firstToDisplay++
    secondToDisplay === athletes.length - 1 ? secondToDisplay = 0 : secondToDisplay++
    thirdToDisplay === athletes.length - 1 ? thirdToDisplay = 0 : thirdToDisplay++
    document.getElementById('carousel-athletes').innerHTML = ''
    displayAthletes()
  })
  document.getElementById('prev-arrow').addEventListener('click', (e) => {
    e.preventDefault()
    firstToDisplay === 0 ? firstToDisplay = athletes.length - 1 : firstToDisplay--
    secondToDisplay === 0 ? secondToDisplay = athletes.length - 1 : secondToDisplay--
    thirdToDisplay === 0 ? thirdToDisplay = athletes.length - 1 : thirdToDisplay--
    document.getElementById('carousel-athletes').innerHTML = ''
    displayAthletes()
  })
})
