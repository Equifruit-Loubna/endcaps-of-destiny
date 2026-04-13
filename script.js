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

  let text = `I got my Endcaps of Destiny gamertag: "${tag}" 🎮🍌 Think you can beat me at #CPMA2026?`;

  let msg = document.getElementById("copyMsg");

  // detect mobile
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  let url;

  if(!isMobile){
    url = "https://www.linkedin.com/feed/?shareActive=true&text=" + encodeURIComponent(text);
  } else {
    url = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href);
  }

  // ✅ COPY FIRST (critical for mobile)
  navigator.clipboard.writeText(text).then(() => {

    msg.innerText = "Caption copied. Paste it on your LinkedIn 👇";
    msg.style.display = "block";

    // open after short delay
    setTimeout(()=>{
      window.open(url, "_blank");
    }, 300);

    setTimeout(()=>{
      msg.style.display = "none";
    }, 4000);

  }).catch(() => {

    // 🔴 FALLBACK (very important for mobile)
    msg.innerText = "Copy failed — long press to copy 👇";
    msg.style.display = "block";

    // fallback: show text in prompt
    window.prompt("Copy your caption:", text);

    setTimeout(()=>{
      window.open(url, "_blank");
    }, 800);

  });

}


function regenerate(){
document.getElementById("clickSound").play();

if(!currentType) return;

// pick from SAME player type
let list = gamertags[currentType];
let base = list[Math.floor(Math.random() * list.length)];
let tag = base + Math.floor(Math.random()*999);

// update UI
document.getElementById("tag").innerText = tag;

// ✨ small animation (optional but nice)
let el = document.getElementById("tag");
el.style.transform = "scale(1.1)";
setTimeout(()=>{
  el.style.transform = "scale(1)";
},150);

}
