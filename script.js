AOS.init();
const hbdsong = document.querySelector("#hbdsong");
const imgbest = document.querySelector("#imgbest");
const clickme = document.querySelector("clickme");
const hbd = document.querySelector('#hbd');
function fireworks() {
  setTimeout(() => {
    $("#fireworks").fireworks();
  }, 3500);
}

function startmusic() {
  setTimeout(() => {
    hbdsong.muted = false;
    hbdsong.volume = 0.5;
    hbdsong.play();
    clickme.style.display = "none";
    console.log("Happy Birth Day!!");
  }, 0);

  hbd.classList.remove("mb-10")
  hbd.classList.add("mb-3")

  var headtext = ["ขอให้", "สุขสันต์วันเกิดนะ"];
  var text = [
    "สุขสมหวังในสิ่งที่อยากได้นะ",
    "สวยๆหล่อๆ",
    "ติดมหาลัย สาธุ ขอให้ตัวเองด้วย",
  ];
  var color = ["#000"];
  var i = 0;

  for (i = 0; i < text.length; i++) {
    text[i] = `<span style="color:${color[i]};">${text[i]}</span>`;
  }

  var typed = new Typed("#type", {
    strings: [
      headtext[0] + text[0],
      headtext[0] + text[1],
      headtext[0] + text[2],
      headtext[1],
    ],
    typeSpeed: 52,
    smartBackspace: true,
    cursorChar: "",
    backSpeed: 20,
    backDelay: 1500,
  });
  document.removeEventListener("click", startmusic);
  document.removeEventListener("click", fireworks);
}
document.addEventListener("click", startmusic);
document.addEventListener("click", fireworks);

//typeing
