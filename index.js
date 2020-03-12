document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const outerUl = document.querySelector("ul#moves-container")
  const moveNow = document.querySelector("button#move-button")
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
         renderOneMove("LEFT")
         function renderOneMove(move){
            const innerLi = document.createElement('li')
            innerLi.dataset["direction"] = move.toLowerCase()
            innerLi.innerHTML =`
                 <p><strong>${move}</strong></p>
            `
            outerUl.append(innerLi)
            innerLi.firstElementChild.addEventListener("click", (event) => event.target.parentElement.parentElement.remove())
        }
    } else if (e.key === "ArrowRight") {
              renderOneMove("RIGHT")
              function renderOneMove(move){
                  const innerLi = document.createElement('li')
                  innerLi.dataset["direction"] = move.toLowerCase()
                  innerLi.innerHTML =`
                       <p><strong>${move}</strong></p>
                  `
                  outerUl.append(innerLi)
                  innerLi.firstElementChild.addEventListener("click", (event) => event.target.parentElement.parentElement.remove())
              }
    } else if (e.key === "ArrowUp") {
              renderOneMove("UP")
              function renderOneMove(move){
                  const innerLi = document.createElement('li')
                  innerLi.dataset["direction"] = move.toLowerCase()
                  innerLi.innerHTML =`
                       <p><strong>${move}</strong></p>
                  `
                  outerUl.append(innerLi)
                  innerLi.firstElementChild.addEventListener("click", (event) => event.target.parentElement.parentElement.remove())
              }
    } else if (e.key === "ArrowDown") {
              renderOneMove("DOWN")
              function renderOneMove(move){
                  const innerLi = document.createElement('li')
                  innerLi.dataset["direction"] = move.toLowerCase()
                  innerLi.innerHTML =`
                       <p><strong>${move}</strong></p>
                  `
                  outerUl.append(innerLi)
                  innerLi.firstElementChild.addEventListener("click", (event) => event.target.parentElement.parentElement.remove())
              }
    }
  })
  moveNow.addEventListener("click", handleMoves)
  function handleMoves(event) {
       const moves = outerUl.querySelectorAll('li')
       moves.forEach((item) => {
             move(item.dataset["direction"])
             const doneMove = event.target.parentElement.children[1].firstElementChild
             doneMove.remove()   
       })
  }
});
