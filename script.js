let currentType;
const gamertags = {

  assassin: [
    "SilentBananaBadass","FairtradeGhostMode","EndcapSneakAttack","BananaUndercoverX","ShelfShadowPlayer",
    "FairtradeCovertOps","BananaQuietTakeover","EndcapPhantomMove","BananaLowkeyLegend","ShelfStealthMode",
    "BananaInvisibleWin","FairtradeBackdoorBoss","BananaSneakPeak","EndcapGhostPlay","BananaSilentStrike",
    "ShelfHiddenWeapon","BananaCovertCloser","FairtradeSneakWin","BananaStealthStack","EndcapShadowBoss",
    "BananaUnderTheRadar","ShelfGhostMove","BananaSecretWeapon","FairtradeStealthPro","BananaQuietForce",
    "EndcapSilentMode","BananaBackroomBoss","ShelfInvisibleX","BananaStrategicGhost","FairtradeShadowPlay",
    "BananaSubtleTakeover","EndcapWhisperWin","BananaSneakyStacker","ShelfSilentCloser","BananaHiddenImpact",
    "FairtradeQuietPower","BananaStealthBoss","EndcapGhostStrategy","BananaUndercoverPro","ShelfSneakMode",
    "BananaShadowCloser","FairtradeLowkeyWin","BananaInvisibleForce","EndcapStealthX","BananaCovertKing",
    "ShelfHiddenBoss","BananaQuietDomination","FairtradeSneakyMove","BananaSilentLegend","EndcapGhostCloser"
  ],

  bulldozer: [
    "BananaBadassOverdrive","FairtradeForceOfNature","EndcapDominationMode","BananaFullSend","ShelfTakeoverBoss",
    "FairtradeNoLimits","BananaImpactZone","EndcapExplosion","BananaMassMover","FairtradePowerPlay",
    "BananaVolumeStorm","ShelfObliterator","BananaUnstoppableX","EndcapShockwave","BananaStackAttack",
    "FairtradeRampage","BananaBigEnergy","ShelfTakeoverX","BananaMaximumImpact","FairtradeAllIn",
    "BananaMomentumKing","EndcapBlowout","BananaRelentlessMode","ShelfDominationPro","BananaCrushMode",
    "FairtradePowerRush","BananaBulkBoss","EndcapWarMachine","BananaPushThrough","ShelfNoMercy",
    "BananaImpactDriver","FairtradeHeavyHitter","BananaMegaForce","EndcapOverdrive","BananaForceMultiplier",
    "ShelfStormMode","BananaLoudAndProud","FairtradeAllGas","BananaMarketMover","EndcapSmashMode",
    "BananaStackLegend","ShelfPowerPlayer","BananaDominanceX","FairtradeUnstoppable","BananaVolumeKing",
    "EndcapTakeover","BananaPressureMode","ShelfMegaMover","BananaGameBreaker","FairtradeDomination"
  ],

  nerd: [
    "BananaDataBadass","FairtradeFactMachine","EndcapAnalyticsPro","BananaInsightMode","ShelfDataDriven",
    "FairtradeLogicBoss","BananaImpactNerd","EndcapMetricMaster","BananaProofPoint","ShelfKPIKing",
    "BananaResearchMode","FairtradeStatsDriven","BananaDataStack","EndcapSmartPlay","BananaDeepDive",
    "ShelfInsightBoss","BananaFactBased","FairtradeBrainMode","BananaNumberCruncher","EndcapOptimizer",
    "BananaSmartStack","ShelfDataBoss","BananaEvidencePro","FairtradeImpactX","BananaInsightHunter",
    "EndcapDataDriven","BananaKPIPro","ShelfLogicMode","BananaSmartMover","FairtradeDataPower",
    "BananaAnalysisMode","EndcapPrecision","BananaFactBoss","ShelfOptimizerX","BananaDataElite",
    "FairtradeResearchPro","BananaSmartForce","EndcapInsightX","BananaLogicLegend","ShelfMetricMaster",
    "BananaDataKing","FairtradeEvidenceX","BananaImpactBoss","EndcapSmartBoss","BananaPrecisionPro",
    "ShelfDataHero","BananaInsightElite","FairtradeBrainBoss","BananaOptimizationX","EndcapDataLegend"
  ],

  curious: [
    "CuriousBananaMode","FairtradeExplorerX","EndcapTestDrive","BananaWhatIf","ShelfCuriosity",
    "FairtradeMaybe","BananaHmmInteresting","EndcapDiscovery","BananaTestMode","ShelfExplorerPro",
    "BananaLearningCurve","FairtradeNewbieX","BananaCuriousMind","EndcapTrialRun","BananaExplorationMode",
    "ShelfDiscoveryX","BananaEarlyStage","FairtradeOpenMind","BananaTesting123","EndcapFirstStep",
    "BananaIntriguedX","ShelfCuriousPlayer","BananaLearningMode","FairtradeExplorerPro","BananaNotSureYet",
    "EndcapTryMode","BananaExperimentX","ShelfTestPlayer","BananaGrowingInterest","FairtradeStarter",
    "BananaCuriousEnergy","EndcapBetaMode","BananaTestAndSee","ShelfExplorerBoss","BananaLetsSee",
    "FairtradeJourney","BananaStepByStep","EndcapLearningX","BananaTryingThings","ShelfDiscoveryMode",
    "BananaEarlyMover","FairtradeCuriousPro","BananaTestDriveX","EndcapExplorerMode","BananaOpenToIt",
    "ShelfLearningCurve","BananaCuriousPro","FairtradeFirstMove","BananaExploringX","EndcapCuriousBoss"
  ]

};

function startGame(){
document.getElementById("startScreen").style.display="none";
document.getElementById("game").classList.remove("hidden");
document.getElementById("music").play();
}

function generate(type){
currentType = type;

document.getElementById("clickSound").play();
document.getElementById("loading").classList.remove("hidden");

setTimeout(()=>{

// 👉 use the correct list
let list = gamertags[type];

// 👉 pick random tag
let base = list[Math.floor(Math.random() * list.length)];

// 👉 add number
let tag = base + Math.floor(Math.random()*999);

// 👉 display
document.getElementById("tag").innerText = tag;

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


  let msg = document.getElementById("copyMsg");

  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // ✅ ADD LINK TO CAPTION
  let text;

if(!isMobile){
  // 💻 Desktop → include link
  text = `I got my Endcaps of Destiny gamertag: "${tag}" 🎮🍌 Think you can beat me at #CPMA2026 — come prove it at Equifruit Booth #638. 🔥 👉🏼Generate your gamertag here: https://equifruit-bananas.github.io/endcaps-of-destiny/`;
} else {
  // 📱 Mobile → NO link (LinkedIn adds it automatically)
  text = `👉🏼 I got my Endcaps of Destiny gamertag: "${tag}" 🎮🍌 Think you can beat me at #CPMA2026 — come prove it at Equifruit Booth #638.🔥👉🏼Generate your gamertag below!`; 
}

  let url;

  // 💻 Desktop → try prefill
  if(!isMobile){
    url = "https://www.linkedin.com/feed/?shareActive=true&text=" + encodeURIComponent(text);
  } 
  // 📱 Mobile → link only
  else{
    url = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href);
  }

  // 🔁 fallback copy (mobile-safe)
  function fallbackCopy(text) {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  // ✅ COPY FIRST
  navigator.clipboard.writeText(text).then(() => {

    msg.innerText = "Caption + link copied ✅ Paste it on LinkedIn 👇";
    msg.style.display = "block";

  }).catch(() => {

    fallbackCopy(text);

    msg.innerText = "Copied! Paste it on LinkedIn 👇";
    msg.style.display = "block";

  });

  // 🚀 OPEN FAST (after copy)
  setTimeout(()=>{
    window.open(url, "_blank");
  }, 400);

  // hide message
  setTimeout(()=>{
    msg.style.display = "none";
  }, 4000);

}


function regenerate(){
document.getElementById("clickSound").play();

if(!currentType) return;

// pick from SAME player type
let list = gamertags[currentType];
let base = list[Math.floor(Math.random() * list.length)];
let tag = base + Math.floor(Math.random()*100000);

// update UI
document.getElementById("tag").innerText = tag;

// ✨ small animation (optional but nice)
let el = document.getElementById("tag");
el.style.transform = "scale(1.1)";
setTimeout(()=>{
  el.style.transform = "scale(1)";
},150);

}
