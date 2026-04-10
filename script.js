const tags=["BananaBadass","FairtradeFury","EndcapLegend","BCorpBoss"];

function startGame(){
document.getElementById("startScreen").style.display="none";
document.getElementById("game").classList.remove("hidden");
document.getElementById("music").play();
}

function generate(){
document.getElementById("clickSound").play();
document.getElementById("loading").classList.remove("hidden");

setTimeout(()=>{
let tag=tags[Math.floor(Math.random()*tags.length)]+Math.floor(Math.random()*999);
document.getElementById("tag").innerText=tag;
document.getElementById("loading").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");
document.getElementById("result").scrollIntoView({
  behavior: "smooth",
  block: "center"
});
},800);
}

function share(){

  let tag = document.getElementById("tag").innerText;

  let text = `I got my Endcaps of Destiny gamertag: "${tag}" 🎮🍌 Think you can beat me at #CPMA2026?`;

  navigator.clipboard.writeText(text).then(() => {

    // 👉 SHOW MESSAGE
    let msg = document.getElementById("copyMsg");
    msg.style.display = "block";

    setTimeout(()=>{
      msg.style.display = "none";
    },5000);

    // 👉 OPEN LINKEDIN (slight delay for UX)
    setTimeout(()=>{
      let url = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href);
      window.open(url, "_blank");
    }, 5000);

  }).catch(() => {
    console.log("Copy failed");
  });

}
