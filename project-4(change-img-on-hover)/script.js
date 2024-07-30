let elem = document.querySelectorAll(".elem");
console.log(elem);

elem.forEach((el, i) => {
  let img = el.childNodes[3];

  el.addEventListener("mousemove", (dets) => {
    console.log(dets);
    img.style.left = dets.x + "px";
    // img.style.top = dets.y + "px";
  });
  el.addEventListener("mouseenter", () => {
    img.style.opacity = 1;
  });
  el.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
  });
});
