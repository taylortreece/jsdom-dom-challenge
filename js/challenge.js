const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const commentField = document.getElementById('list')
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
    let newLike

    for (let i=0; i < likesList.children.length; i++) {
      if (likesList.children[i].className.split(" ").shift() === `${currentTime}`) {
        newLike = likesList.children[i]
      }
    }

    // first number of class name is time, second is number of likes. -- ex. "1 + 3"
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

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newComment = document.createElement('li');
    newComment.textContent = `${commentInput.value}`
    commentField.appendChild(newComment)
})

