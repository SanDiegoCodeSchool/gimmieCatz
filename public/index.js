document.addEventListener(
  'DOMContentLoaded',
  () => {
    fetch('/gimmieCats', res => res)
      .then(cats => cats.json())
      .then(cats => {
        cats.map((cat, i) => {
          const root = document.querySelector('#root')
          root.innerHTML += `
          <div>
              <img src="cat-images/${cat}" />
              <button class="unlike" onclick="handleUnlike(${i})" id="hide-${i}">Unlike</button>
              <button class="like" onclick="handleLike(${i})" id="show-${i}">Like! <span id="cat-${i}" style="display:none">❤️</span></button>
              <div class="comment">
                  <input id="comment-${i}"/>
                  <button onclick="handleComment(${i})" id="add-comment-${i}">add</button>
              </div>
              <ul id="list-comments-${i}"></ul>
          </div>`
        })
      })
  },
  false
)

const handleLike = i => {
  const currentCat = document.querySelector(`#cat-${i}`)
  currentCat.style.display = 'inline'
}

const handleUnlike = i => {
  const currentCat = document.querySelector(`#cat-${i}`)
  currentCat.style.display = 'none'
}
const handleComment = i => {
  const commentInput = document.querySelector(`#comment-${i}`)
  if (commentInput.value) {
    document.querySelector(`#list-comments-${i}`).innerHTML += `<li>${
      commentInput.value
    }</li>`
  }
  commentInput.value = ''
}
