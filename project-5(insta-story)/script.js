let stories = document.getElementById("stories");
let arr = [
  {
    dp: "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww",
    story:
      "https://media.istockphoto.com/id/1644776292/photo/a-side-view-of-an-unrecognizable-businessman-turning-his-radio-on-while-driving.webp?b=1&s=170667a&w=0&k=20&c=be6a14bsw-bw96-FYRyuwJLWk-FnawpEd7vvt9-ABeY=",
  },
  {
    story:
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    dp: "https://plus.unsplash.com/premium_photo-1661891539075-24b4e473f67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://media.istockphoto.com/id/1468178137/photo/close-up-side-view-of-an-orange-luxury-sports-car.webp?b=1&s=170667a&w=0&k=20&c=QFTkvPuIY5CEdzIYj3l7Dc9BRyOO2SVLP6rklx1N6PQ=",
    story:
      "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let clutter = "";
arr.forEach((item, i) => {
  clutter += `  <div class="story">
          <img id="${i}" src="${item.dp}" alt="Image ${i}" />
        </div>
`;
});

stories.innerHTML = clutter;
stories.addEventListener("click", (dets) => {
  let val = arr[dets.target.id].story;
  let screen = document.querySelector("#fullscreen");
  screen.style.display = "block";
  screen.style.background = `url(${val})`;
  setTimeout(() => {
    screen.style.display = "none";
  }, 3000);
});
