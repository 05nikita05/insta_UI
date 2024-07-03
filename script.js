var arr = [
  {
    id: "0",
    username: "nikita",
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1611619827107-ff5b4b4aea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwYWVzdGhldGljfGVufDB8fDB8fHww",
      
  },
  {
    id: "1",
    username: "nishu",
    dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: "2",
    username: "atul",
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: "3",
    username: "kavita",
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1613703154528-fa47dd7ffcfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnx4ZXR2OEF3ZDQ1UXx8ZW58MHx8fHx8",
  },
  {
    id: "4",
    username: "aayushi",
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1611619827107-ff5b4b4aea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwYWVzdGhldGljfGVufDB8fDB8fHww",
  },
  {
    id: "5",
    username: "rishika",
    dp: "https://plus.unsplash.com/premium_photo-1670588776179-98d0be927841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: 6,
    username: "nikita",
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1611619827107-ff5b4b4aea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwYWVzdGhldGljfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    username: "nishu",
    dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwYWVzdGhldGljfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    username: "atul",
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1450297350677-623de575f31c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];

var clutter = "";
var clutter1 = "";

arr.forEach(function (elem) {
  clutter += `<div class="story"><img id=${elem.id} src=${elem.dp}></div>`;

  clutter1 += `<div class="post-1"> <div class="p1">
  <div class="dp"><img id =${elem.id} src =${elem.dp}></div>
  <h5>${elem.username}</h5></div>
  
  <div class="p2"><button>Follow</button> <i class="ri-more-2-fill"></i></div>
  </div>
  <div class="post-2"><img src=${elem.story}></div>
  <div class="post-3">
            <i class="ri-heart-3-line"></i>
            <i class="ri-chat-3-line"></i>
            <i id="mark" class="ri-bookmark-line"></i>
          </div>`;
});

// document.querySelector("#stories").innerHTML = clutter;

var stories = document.querySelector("#stories");
var image = document.querySelector("#image");
var progress = document.querySelector("#progress");
var post = document.querySelector(".post");

stories.innerHTML = clutter;
post.innerHTML = clutter1;

stories.addEventListener("click", function (dets) {
  image.style.display = "block";
  image.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    image.style.display = "none";
  }, 3500);
  var grow = 0;
  var interval = setInterval(function () {
    if (grow < 100) {
      grow++;
      progress.style.width = `${grow}%`;
    }
  }, 35);
});
