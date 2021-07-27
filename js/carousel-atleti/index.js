let firstAtleti = 0
let secondAtleti = 1
let thirdAtleti = 2

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

function displayAtleties() {
    return document.getElementById('carousel-atleties').innerHTML +=
        `<div id="atleti-carousel-container">
        <div>
      <div class="carousel-img-container">
      <img class="carousel-img" src="${atletiess[firstAtleti].img}" alt="${atletiess[firstAtleti].name}">
     </div>
     <div class="caption">
     <p class="victory-name">${atletiess[firstAtleti].name}</p>
     </div>
     </div>
     
  

     <div>
      <div class="carousel-img-container" id="second-victory-container">
      <img class="carousel-img" src="${atletiess[secondAtleti].img}" alt="${atletiess[secondAtleti].name}">
     </div>
     <div class="caption">
     <p class="victory-name">${atletiess[secondAtleti].name}</p>
     </div>
     </div>
     
     <div>
      <div class="carousel-img-container" id="third-victory-container">
      <img class="carousel-img" src="${atletiess[thirdAtleti].img}" alt="${atletiess[thirdAtleti].name}" test="ciao">
     </div>
     <div class="caption">
      <p class="victory-name">${atletiess[thirdAtleti].name}</p>
      </div>
      </div>
    


  </div>

    `
}

// function hideAtleties() {
//     return document.getElementById('carousel-atleties').innerHTML = ''
// }

// window.addEventListener('load', function() {
//     displayAtleties()
//     document.getElementById('next-arrow-atleti').addEventListener('click', (e) => {
//         handleArrows(e, 'increase')
//     })
//     document.getElementById('prev-arrow-atleti').addEventListener('click', (e) => {
//         handleArrows(e, 'decrease')
//     })





//     // var elements = document.getElementsByClassName('victory-img')

//     // for (var i = 0; i < elements.length; i++) {
//     //   elements[i].addEventListener('click', handleHoverImg, false)
//     // }
// });

window.addEventListener('load', function() {
    displayAtleties()
    document.getElementById('next-arrow-atleti').addEventListener('click', (e) => {
        e.preventDefault()
        firstAtleti === atletiess.length - 1 ? firstAtleti = 0 : firstAtleti++
            secondAtleti === atletiess.length - 1 ? secondAtleti = 0 : secondAtleti++
            thirdAtleti === atletiess.length - 1 ? thirdAtleti = 0 : thirdAtleti++
            document.getElementById('carousel-atleties').innerHTML = ''
        displayAtleties()
    });
    document.getElementById('prev-arrow-atleti').addEventListener('click', (e) => {
        e.preventDefault()
        firstAtleti === 0 ? firstAtleti = atletiess.length - 1 : firstAtleti--
            secondAtleti === 0 ? secondAtleti = atletiess.length - 1 : secondAtleti--
            thirdAtleti === 0 ? thirdAtleti = atletiess.length - 1 : thirdAtleti--
            document.getElementById('carousel-atleties').innerHTML = ''
        displayAtleties()
    });
});

// var handleHoverImg = function () {
//   var attribute = this.getAttribute('alt')
//   console.log(this)
//   document.getElementById('victory-hover').innerHTML += attribute
// }

// var handleHoverOut = function () {
//   // this.style.opacity = 1
// }

// function handleArrows(e, operator) {
//     e.preventDefault()
//     if (operator === 'increase') {
//         firstAtleti === atleties.length - 1 ? firstAtleti = 0 : firstAtleti++
//             secondAtleti === atleties.length - 1 ? secondAtleti = 0 : secondAtleti++
//             thirdAtleti === atleties.length - 1 ? thirdAtleti = 0 : thirdAtleti++
//     }
//     if (operator === 'decrease') {
//         firstAtleti === 0 ? firstAtleti = atleties.length - 1 : firstAtleti--
//             secondAtleti === 0 ? secondAtleti = atleties.length - 1 : secondAtleti--
//             thirdAtleti === 0 ? thirdAtleti = atleties.length - 1 : thirdAtleti--
//     }
//     hideAtleties()
//     displayAtleties()
// }