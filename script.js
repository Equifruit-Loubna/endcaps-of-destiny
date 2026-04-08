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
},800);
}

function share(){
let tag=document.getElementById("tag").innerText;

let text=`I got my Endcaps of Destiny gamertag: "${tag}" 🎮🍌 Think you can beat me at #CPMA2026?`;

navigator.clipboard.writeText(text);

let url="https://www.linkedin.com/feed/?shareActive=true&text="+encodeURIComponent(text);
window.open(url,"_blank");
}
