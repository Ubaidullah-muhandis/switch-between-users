let btns = document.querySelectorAll(".btn")
let name = document.querySelector("#name")
let job = document.querySelector("#field")
let bio = document.querySelector("#desc")
let img = document.querySelector("#avatar")
let counter = 0

window.addEventListener("DOMContentLoaded", function() {
   showPerson(counter) 
})

function showPerson(person) {
        let item = reviews[person]
        img.src = item.img
        name.innerHTML = item.name
        job.innerHTML = item.job
        bio.innerHTML = item.bio
}

btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
      let cl = e.target.classList;
      if (cl.contains("nxt")) {
          counter++
          if (counter == reviews.length) {
              counter = 0
          }
          showPerson(counter)
             
      } else {
          counter--
            if (counter < 0) {
              counter = reviews.length - 1
          }
          showPerson(counter)
      }
  })
})
