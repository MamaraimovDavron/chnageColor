let body = document.getElementById("body");
let colorName = document.getElementById("colorName");
// let letters = "0123456789abcdef";
let color;

const changeColor = () => {
  setInterval(() => {
    // for (let i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    //   //   if ((color.length = 7)) {
    //   //     body.style.background = color;
    //   //   }
    //   console.log(letters[Math.floor(Math.random() * 16)]);
    // }

    color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    // if ((color.length = 7)) {
    //   body.style.background = color;
    // } else {
    //   color = color;
    // }
    body.style.background = color;
    colorName.innerHTML = color;
    // console.log(color);
    // console.log("Working!");
  }, 1000);
};
