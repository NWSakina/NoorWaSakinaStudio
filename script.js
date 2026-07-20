// NoorWaSakina Studio
// Main JavaScript File

document.addEventListener("DOMContentLoaded", () => {

    console.log("NoorWaSakina Studio بدأ العمل بنجاح");

    const textContent = document.getElementById("text-content");

    const textBtn = document.getElementById("textBtn");
    const bgBtn = document.getElementById("bgBtn");
    const effectsBtn = document.getElementById("effectsBtn");
    const saveBtn = document.getElementById("saveBtn");


    // زر النص
    textBtn.addEventListener("click", () => {
        textContent.focus();
    });


    // زر الخلفية
    bgBtn.addEventListener("click", () => {
        document.body.style.background = "#f5f0e6";
    });


    // زر المؤثرات
    effectsBtn.addEventListener("click", () => {
        textContent.style.textShadow = "2px 2px 5px #888";
    });


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
    const oldText = localStorage.getItem("NoorWaSakinaText");

    if (oldText) {
        textContent.innerText = oldText;
    }

});
