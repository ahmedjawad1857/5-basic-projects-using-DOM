const con = document.querySelector("img");
const like = document.querySelector("i");

con.addEventListener("dblclick", () => {
  console.log("Double click event detected");

  like.style.transform = "translate(-50%,-50%) scale(1)";
  like.style.opacity = "0.8";
  setTimeout(() => {
    like.style.opacity = "0";
  }, 1000);
  setTimeout(() => {
    like.style.transform = "translate(-50%,-50%) scale(0)";
  }, 2000);
});
