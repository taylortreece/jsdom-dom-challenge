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
    // let newLike = document.createElement("li");
    // newLike.setAttribute("class", `${currentTime}`);
    // newLike.textContent = `You've liked ${currentTime} (${numOfLikes} times)`
    // likesList.appendChild(newLike);

    // resetLikes()

    let newLike = Array.prototype.slice.call(likesList).find(function(e) {
        e.className === `${currentTime}`
    })

    if (newLike) {
        newLike.textContent = `You've liked ${currentTime} (${numOfLikes} times)`
    } else {
        newLike = document.createElement("li");
        newLike.setAttribute("class", `${currentTime}`);
        newLike.textContent = `You've liked ${currentTime} (${numOfLikes} times)`;
        likesList.appendChild(newLike);
    }
})

function resetLikes() {
    let childName = parseInt(likesList.lastChild.className, 10)
    if (currentTime !== childName) {
        numOfLikes = 0
    }
}