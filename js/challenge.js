const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const likesList = document.getElementsByClassName('likes')[0]
let currentTime = parseInt(counter.innerText, 10)

document.addEventListener("DOMContentLoaded", (e) => {
    setInterval(startTimer, 1000)

    function startTimer() {
      currentTime++
      counter.innerText = currentTime
    }
})

plus.addEventListener("click", (e) => {
    currentTime++
    counter.innerText = currentTime
})

plus.addEventListener("click", (e) => {
    currentTime++
    counter.innerText = currentTime
})

minus.addEventListener("click", (e) => {
    currentTime--
    counter.innerText = currentTime
})

heart.addEventListener("click", (e) => {
    let newLike = Array.prototype.slice.call(likesList).find(function(e) {
        debugger
        e.className.split(" ").shift() === `${currentTime}`
    })

    // first number of class name is time, second is number of likes.
    if (newLike) {
        newLike.className = `${currentTime} + ${parseInt(newLike.className.split(" ").pop()) + 1}`
        newLike.textContent = `You've liked ${currentTime} (${parseInt(newLike.className.split(" ").pop())} times)`
    } else {
        newLike = document.createElement("li");
        newLike.setAttribute("class", `${currentTime} + 1`);
        newLike.textContent = `You've liked ${currentTime} (1 times)`;
        likesList.appendChild(newLike);
    }
})

function resetLikes() {
    let childName = parseInt(likesList.lastChild.className, 10)
    if (currentTime !== childName) {
        numOfLikes = 0
    }
}