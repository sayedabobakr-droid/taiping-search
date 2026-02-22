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

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');

    // منطق البحث الخاص بك
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const word = searchInput.value.trim();
            if (word === "اهلا" || word === "رمضان") {
                window.location.href = "search/search1.html";
            } else if (word !== "") {
                window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(word);
            }
        }
    });

    // --- منطق إظهار نافذة تثبيت التطبيق الرسمية ---
    let deferredPrompt;
    const installBtn = document.getElementById('installBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
        // منع المتصفح من إظهار النافذة تلقائياً
        e.preventDefault();
        // حفظ الحدث ليتم استدعاؤه عند ضغط الزر
        deferredPrompt = e;
        // إظهار الزرار للمستخدم
        if (installBtn) installBtn.style.display = 'inline-block';

        installBtn.addEventListener('click', () => {
            // إخفاء الزرار
            installBtn.style.display = 'none';
            // إظهار النافذة المنبثقة الرسمية (مثل صورة يوتيوب)
            deferredPrompt.prompt();
            // معرفة قرار المستخدم
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('المستخدم وافق على التثبيت');
                }
                deferredPrompt = null;
            });
        });
    });

    // إخفاء الزرار إذا تم التثبيت بالفعل
    window.addEventListener('appinstalled', () => {
        if (installBtn) installBtn.style.display = 'none';
    });
});

// تسجيل الـ Service Worker (ضروري جداً لعمل النافذة)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js');
    });
}
