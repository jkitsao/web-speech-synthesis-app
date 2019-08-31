//cashing the dom
const synth=window.speechSynthesis;
////normal variables
const text_input=document.getElementById("content");
const button=document.getElementById("bt-n");
const selection=document.getElementById("voice-select");
const pitch=document.getElementById("pitch");
const form=document.getElementById("section1");
//initilizing   *****codebyjacksonkitsao*****
let voices=[];
function getvoices(){
    voices=synth.getVoices();
    console.log(voices);
}
//option for each voice
getvoices();
if(synth.onvoiceschanged!==undefined){
    synth.onvoiceschanged=getvoices;
}



button.addEventListener("click",function speak(){
const speaktext=new SpeechSynthesisUtterance(text_input.value);
const kitsao=voices[3];
console.log(kitsao);
//if speaking
if(synth.speaking){
    console.error("already speaking");
const myname=document.getElementById("heading1");
myname.style.color="yellow";
return;
}
//speak end
speaktext.onend=()=>{
    alert("jackson is a genius")
    console.log("done speaking");
}
if(text_input.value!==""){
    speaktext;
}
speaktext.onerror=()=>{
    console.error("something went wrong");
}

synth.speak(speaktext);
});