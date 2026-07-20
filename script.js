// NoorWaSakina Studio
// Main JavaScript File v1.1


document.addEventListener("DOMContentLoaded", () => {


    console.log("NoorWaSakina Studio بدأ العمل بنجاح");


    const textContent = document.getElementById("text-content");


    const textBtn = document.getElementById("textBtn");
    const bgBtn = document.getElementById("bgBtn");
    const effectsBtn = document.getElementById("effectsBtn");
    const saveBtn = document.getElementById("saveBtn");


    const textPanel = document.getElementById("text-panel");
    const bgPanel = document.getElementById("bg-panel");
    const effectsPanel = document.getElementById("effects-panel");



    // إخفاء كل اللوحات

    function hidePanels(){

        textPanel.style.display = "none";
        bgPanel.style.display = "none";
        effectsPanel.style.display = "none";

    }



    // زر النص

    textBtn.addEventListener("click", () => {

        hidePanels();

        textPanel.style.display = "block";

        textContent.focus();

    });



    // زر الخلفية

    bgBtn.addEventListener("click", () => {

        hidePanels();

        bgPanel.style.display = "block";

    });



    // زر المؤثرات

    effectsBtn.addEventListener("click", () => {

        hidePanels();

        effectsPanel.style.display = "block";

    });



    // تكبير النص

    window.increaseText = function(){

        let size = parseInt(
            window.getComputedStyle(textContent).fontSize
        );

        textContent.style.fontSize = (size + 4) + "px";

    };



    // تصغير النص

    window.decreaseText = function(){

        let size = parseInt(
            window.getComputedStyle(textContent).fontSize
        );

        if(size > 20){

            textContent.style.fontSize = (size - 4) + "px";

        }

    };



    // تغيير الخلفية

    window.changeBackground = function(){

        document.getElementById("preview").style.background =
        "linear-gradient(to bottom,#355c7d,#6c5b7b)";

    };



    // إضافة إضاءة للنص

    window.addGlow = function(){

        textContent.style.textShadow =
        "0 0 20px #ffe79a";

    };



    // زر الحفظ

    saveBtn.addEventListener("click", () => {


        const savedText = textContent.innerText;


        localStorage.setItem(
            "NoorWaSakinaText",
            savedText
        );


        alert("تم حفظ النص بنجاح");


    });



    // استرجاع النص المحفوظ


    const oldText = localStorage.getItem(
        "NoorWaSakinaText"
    );


    if(oldText){

        textContent.innerText = oldText;

    }



});
