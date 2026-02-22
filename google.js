window.onload = function() {
    const isloggedin = localStorage.getItem("isloggedin")
    if (isloggedin !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("isloggedin");
    window.location.href = "index.html";
}

// بنستنى الصفحة تحمل بالكامل الأول
document.addEventListener('DOMContentLoaded', function() {

    const searchInput = document.getElementById('search');

    // بنراقب الكتابة جوه الـ input
    searchInput.addEventListener('keypress', function(e) {
        // لو داس Enter
        if (e.key === 'Enter') {
            // بنشيل المسافات الزايدة ونحول النص
            const word = searchInput.value.trim();

            if (word === "اهلا") {
                window.location.href = "search/search1.html";
            } else if (word === "رمضان") {
                window.location.href = "search/search1.html";
            } else if (word !== "") {
                // لو كتب أي حاجة تانية يوديه لجوجل العادي
                window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(word);
            }
        }
    });
});

/* =================================================
   كود تفعيل خاصية التنزيل (PWA) 
   لإظهار علامة التثبيت للمستخدم
   =================================================
*/

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
