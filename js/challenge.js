const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const likesList = document.getElementsByClassName('likes')[0]
let currentTime = parseInt(counter.innerText, 10)
let numOfLikes = 0

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
    numOfLikes++

    let newLike = document.createElement("li");
    newLike.setAttribute("class", `${currentTime}`);
    newLike.textContent = `You've liked ${currentTime} (${numOfLikes} times)`
    likesList.appendChild(newLike);

    if (currentTime !== parseInt(likesList.lastChild.className, 10)) {
        numOfLikes = 0
    }
})
