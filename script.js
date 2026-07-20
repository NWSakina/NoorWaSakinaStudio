// NoorWaSakina Studio
// Main JavaScript File v1.2


document.addEventListener("DOMContentLoaded", () => {


console.log("NoorWaSakina Studio يعمل بنجاح");



const textContent = document.getElementById("text-content");


const textBtn = document.getElementById("textBtn");
const bgBtn = document.getElementById("bgBtn");
const effectsBtn = document.getElementById("effectsBtn");
const saveBtn = document.getElementById("saveBtn");



const textPanel = document.getElementById("text-panel");
const bgPanel = document.getElementById("bg-panel");
const effectsPanel = document.getElementById("effects-panel");



const fontSelect = document.getElementById("fontSelect");
const textColor = document.getElementById("textColor");



function hidePanels(){

    textPanel.style.display="none";
    bgPanel.style.display="none";
    effectsPanel.style.display="none";

}




// زر النص

textBtn.onclick = ()=>{

    hidePanels();

    textPanel.style.display="block";

    textContent.focus();

};



// زر الخلفية

bgBtn.onclick = ()=>{

    hidePanels();

    bgPanel.style.display="block";

};



// زر المؤثرات

effectsBtn.onclick = ()=>{

    hidePanels();

    effectsPanel.style.display="block";

};





// تغيير الخط


fontSelect.onchange = ()=>{

    textContent.style.fontFamily =
    fontSelect.value;

};




// تغيير اللون


textColor.oninput = ()=>{

    textContent.style.color =
    textColor.value;

};






// تكبير النص


window.increaseText = ()=>{


let size=parseInt(
window.getComputedStyle(textContent).fontSize
);


textContent.style.fontSize =
(size+4)+"px";


};






// تصغير النص


window.decreaseText = ()=>{


let size=parseInt(
window.getComputedStyle(textContent).fontSize
);


if(size>20){

textContent.style.fontSize =
(size-4)+"px";

}


};








// الخلفيات


window.background1 = ()=>{


document.getElementById("preview").style.background =
"linear-gradient(to bottom,#6d8fbd,#243b55)";


};




window.background2 = ()=>{


document.getElementById("preview").style.background =
"linear-gradient(to bottom,#355c7d,#6c5b7b)";


};




window.background3 = ()=>{


document.getElementById("preview").style.background =
"linear-gradient(to bottom,#134e5e,#71b280)";


};






// المؤثرات


window.goldGlow = ()=>{


textContent.style.textShadow =
"0 0 20px #ffd86b";


};





window.softShadow = ()=>{


textContent.style.textShadow =
"3px 3px 8px #000";


};





window.clearEffects = ()=>{


textContent.style.textShadow="none";


};







// الحفظ


saveBtn.onclick=()=>{


localStorage.setItem(
"NoorWaSakinaText",
textContent.innerText
);


localStorage.setItem(
"NoorWaSakinaFont",
textContent.style.fontFamily
);


localStorage.setItem(
"NoorWaSakinaColor",
textContent.style.color
);



alert("تم حفظ العمل بنجاح");


};







// استرجاع البيانات


const oldText =
localStorage.getItem("NoorWaSakinaText");


if(oldText){

textContent.innerText=oldText;

}



const oldFont =
localStorage.getItem("NoorWaSakinaFont");


if(oldFont){

textContent.style.fontFamily=oldFont;

}



const oldColor =
localStorage.getItem("NoorWaSakinaColor");


if(oldColor){

textContent.style.color=oldColor;

}



});
