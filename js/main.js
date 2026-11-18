const TIMELINE = [
 {t:0,type:"section",section:"intro"},
 {t:0.90,type:"section",section:"verse"},
 {t:0.90,type:"word",line:0,text:"do",section:"verse"},
 {t:1.25,type:"word",line:0,text:"you",section:"verse"},
 {t:1.65,type:"word",line:0,text:"think",section:"verse"},
 {t:2.25,type:"word",line:1,text:"I",section:"verse"},
 {t:2.80,type:"word",line:1,text:"have",section:"verse"},
 {t:3.40,type:"word",line:1,text:"forgotten?",section:"verse"},
 {t:5.85,type:"word",line:2,text:"Do",section:"verse"},
 {t:6.25,type:"word",line:2,text:"you",section:"verse"},
 {t:6.65,type:"word",line:2,text:"think",section:"verse"},
 {t:7.20,type:"word",line:3,text:"I",section:"verse"},
 {t:7.75,type:"word",line:3,text:"have",section:"verse"},
 {t:8.25,type:"word",line:3,text:"forgotten?",section:"verse"},
 {t:11.00,type:"word",line:4,text:"Do",section:"verse"},
 {t:11.40,type:"word",line:4,text:"you",section:"verse"},
 {t:11.95,type:"word",line:4,text:"think",section:"verse"},
 {t:12.50,type:"word",line:5,text:"I",section:"verse"},
 {t:13.05,type:"word",line:5,text:"have",section:"verse"},
 {t:13.65,type:"word",line:5,text:"forgotten",section:"verse"},
 {t:15.95,type:"word",line:6,text:"about",section:"verse"},
 {t:16.75,type:"word",line:6,text:"you?",section:"verse"},
 {t:19.30,type:"section",section:"bridge"},
 {t:19.30,type:"word",line:7,text:"And",section:"bridge"},
 {t:19.55,type:"word",line:7,text:"there",section:"bridge"},
 {t:19.80,type:"word",line:7,text:"was",section:"bridge"},
 {t:20.05,type:"word",line:8,text:"something",section:"bridge"},
 {t:20.75,type:"word",line:8,text:"'bout",section:"bridge"},
 {t:21.25,type:"word",line:8,text:"you",section:"bridge"},
 {t:23.60,type:"word",line:9,text:"that",section:"bridge"},
 {t:24.01,type:"word",line:9,text:"now",section:"bridge"},
 {t:24.55,type:"word",line:10,text:"I",section:"bridge"},
 {t:24.85,type:"word",line:10,text:"can′t",section:"bridge"},
 {t:25.25,type:"word",line:10,text:"remember",section:"bridge"},
 {t:26.55,type:"word",line:11,text:"It's",section:"bridge"},
 {t:26.85,type:"word",line:11,text:"the",section:"bridge"},
 {t:27.20,type:"word",line:12,text:"same",section:"bridge"},
 {t:27.65,type:"word",line:12,text:"damn",section:"bridge"},
 {t:28.00,type:"word",line:12,text:"thing",section:"bridge"},
 {t:28.50,type:"word",line:13,text:"that",section:"bridge"},
 {t:28.85,type:"word",line:13,text:"made",section:"bridge"},
 {t:29.25,type:"word",line:14,text:"my",section:"bridge"},
 {t:29.65,type:"word",line:14,text:"heart",section:"bridge"},
 {t:30.10,type:"word",line:14,text:"surrender",section:"bridge"},
 {t:31.50,type:"word",line:15,text:"And",section:"bridge"},
 {t:31.78,type:"word",line:15,text:"I",section:"bridge"},
 {t:32.00,type:"word",line:16,text:"miss",section:"bridge"},
 {t:32.35,type:"word",line:16,text:"you",section:"bridge"},
 {t:32.65,type:"word",line:17,text:"on",section:"bridge"},
 {t:32.90,type:"word",line:17,text:"a",section:"bridge"},
 {t:33.15,type:"word",line:17,text:"train,",section:"bridge"},
 {t:34.05,type:"word",line:18,text:"I",section:"bridge"},
 {t:34.35,type:"word",line:18,text:"miss",section:"bridge"},
 {t:34.70,type:"word",line:18,text:"you",section:"bridge"},
 {t:35.05,type:"word",line:19,text:"in",section:"bridge"},
 {t:35.30,type:"word",line:19,text:"the",section:"bridge"},
 {t:35.55,type:"word",line:19,text:"morning",section:"bridge"},
 {t:36.45,type:"word",line:20,text:"I",section:"bridge"},
 {t:36.85,type:"word",line:20,text:"never",section:"bridge"},
 {t:37.45,type:"word",line:20,text:"know",section:"bridge"},
 {t:37.90,type:"word",line:21,text:"what",section:"bridge"},
 {t:38.30,type:"word",line:21,text:"to",section:"bridge"},
 {t:38.65,type:"word",line:22,text:"think",section:"bridge"},
 {t:39.10,type:"word",line:22,text:"about",section:"bridge"},
 {t:40.30,type:"section",section:"chorus"},
 {t:40.30,type:"word",line:23,text:"I",section:"chorus"},
 {t:40.65,type:"word",line:23,text:"think",section:"chorus"},
 {t:41.15,type:"word",line:24,text:"about",section:"chorus"},
 {t:42.10,type:"word",line:24,text:"you",section:"chorus"},
 {t:45.30,type:"word",line:25,text:"About",section:"chorus"},
 {t:46.30,type:"word",line:25,text:"you",section:"chorus"},
 {t:50.95,type:"word",line:26,text:"Do",section:"chorus"},
 {t:51.45,type:"word",line:26,text:"you",section:"chorus"},
 {t:52.00,type:"word",line:26,text:"think",section:"chorus"},
 {t:52.55,type:"word",line:27,text:"I",section:"chorus"},
 {t:53.10,type:"word",line:27,text:"have",section:"chorus"},
 {t:53.65,type:"word",line:27,text:"forgotten",section:"chorus"},
 {t:56.00,type:"word",line:28,text:"about",section:"chorus"},
 {t:56.85,type:"word",line:28,text:"you?",section:"chorus"},
 {t:60.50,type:"word",line:29,text:"About",section:"outro"},
 {t:61.80,type:"word",line:29,text:"you",section:"outro"}
];
const audio=document.getElementById("audio"), experience=document.getElementById("experience");
const base=document.getElementById("lyricsBase"), lit=document.getElementById("lyricsLit");
const status=document.getElementById("status"), breakLabel=document.getElementById("breakLabel");
const words=TIMELINE.filter(x=>x.type==="word"); let started=false, frame=0, lastActive=-1;
const WORD_GROUP=3;
function build(){
 const ids=[...new Set(words.map(x=>x.line))];
 ids.forEach(id=>{
  const group=words.filter(x=>x.line===id), section=group[0]?.section||"verse";
  for(let start=0;start<group.length;start+=WORD_GROUP){
   const chunk=group.slice(start,start+WORD_GROUP);
   [base,lit].forEach(layer=>{
    const line=document.createElement("div"); line.className=`lyric-line is-${section}`; line.dataset.line=id; line.dataset.cues=chunk.map(c=>words.indexOf(c)).join(",");
    chunk.forEach((cue,index)=>{
     const span=document.createElement("span"); span.className="lyric-word"; span.dataset.cue=words.indexOf(cue);
     span.textContent=cue.text+(index<chunk.length-1?" ":""); line.appendChild(span);
    }); layer.appendChild(line);
   });
  }
 });
}
function render(){
 const now=audio.currentTime||0; let section="intro", activeBreak="";
 TIMELINE.forEach(item=>{if(item.t<=now){if(item.type==="section")section=item.section;if(item.type==="break")activeBreak=item.label}});
 let active=-1; words.forEach((w,i)=>{if(w.t<=now)active=i});
 if(active<lastActive){
  document.querySelectorAll(".lyric-word").forEach(el=>el.classList.remove("is-visible","is-active"));
  lastActive=-1;
 }
 for(let i=0;i<=active;i++){
  base.querySelector(`[data-cue="${i}"]`)?.classList.add("is-visible");
  lit.querySelector(`[data-cue="${i}"]`)?.classList.add("is-visible");
 }
 if(active!==lastActive&&active>=0){
  document.querySelectorAll(".lyric-word.is-active").forEach(el=>el.classList.remove("is-active"));
  base.querySelector(`[data-cue="${active}"]`)?.classList.add("is-active");
  lit.querySelector(`[data-cue="${active}"]`)?.classList.add("is-active"); lastActive=active;
 }
 experience.dataset.section=section; breakLabel.textContent=activeBreak;
 const isBreak=section==="break"; base.style.opacity=isBreak?"0":"1"; lit.style.opacity=isBreak?"0":"1";
 const focusCue=active<0?-1:active;
 document.querySelectorAll(".lyric-line").forEach(el=>{
  const cues=el.dataset.cues?el.dataset.cues.split(",").map(Number):[];
  el.classList.toggle("is-focus",focusCue>=0&&cues.includes(focusCue));
 });
 if(!audio.paused&&!audio.ended)frame=requestAnimationFrame(render);
}
function play(){
 if(started)return; started=true;
 audio.play().then(()=>{status.textContent="Playing";cancelAnimationFrame(frame);render()})
 .catch(err=>{started=false;status.textContent="Audio unavailable";console.warn(err)});
}
function toggle(){
 if(!started){play();return}
 if(audio.paused)audio.play().then(render).catch(console.warn);else{audio.pause();cancelAnimationFrame(frame)}
}
function restart(){
 audio.currentTime=0;lastActive=-1;
 document.querySelectorAll(".lyric-word").forEach(el=>el.classList.remove("is-visible","is-active"));
 if(started&&!audio.paused)render();
}
function startAutoplay(){
 audio.muted=false;
 audio.play().catch(()=>{
  audio.muted=true;
  audio.play().catch(()=>{});
 });
}
function unmute(){
 if(audio.muted)audio.muted=false;
 if(audio.paused&&!started)play();
}
document.addEventListener("pointerdown",unmute,{passive:true});
document.addEventListener("click",unmute,{passive:true});
document.addEventListener("keydown",e=>{
 if(e.code==="Space"){e.preventDefault();toggle();return}
 if(e.key.toLowerCase()==="r"){restart();return}
 if(e.key.toLowerCase()==="m"){audio.muted=!audio.muted;return}
 unmute();
});
audio.addEventListener("pause",()=>cancelAnimationFrame(frame));
audio.addEventListener("play",()=>{started=true;status.textContent="Playing";cancelAnimationFrame(frame);render()});
audio.addEventListener("seeked",()=>{lastActive=-1;document.querySelectorAll(".lyric-word").forEach(el=>el.classList.remove("is-visible","is-active"));render()});
audio.addEventListener("ended",()=>{cancelAnimationFrame(frame);experience.dataset.section="outro";status.textContent="Finished"});
build();
startAutoplay();
audio.addEventListener("canplay",()=>{if(!started&&audio.paused)startAutoplay()},{once:true});
