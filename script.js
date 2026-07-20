// NoorWaSakina Studio
// Main JavaScript File

document.addEventListener("DOMContentLoaded", () => {

    console.log("NoorWaSakina Studio بدأ العمل بنجاح");

    const app = document.getElementById("app");

    if (app) {
        app.innerHTML = `
            <h1>نور وسكينة</h1>
            <p>مرحباً بك في تطبيق القرآن والسكينة</p>
        `;
    }

});
