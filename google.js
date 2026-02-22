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

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const word = searchInput.value.trim();

            if (word === "اهلا") {
                window.location.href = "search/search1.html";
            } else if (word === "رمضان") {
                window.location.href = "search/search1.html";
            } else if (word !== "") {
                window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(word);
            }
        }
    });

    // --- منطق زر التنزيل الذكي ---
    let deferredPrompt;
    const installBtn = document.getElementById('installBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) {
            installBtn.style.display = 'inline-block';
        }

        installBtn.addEventListener('click', () => {
            installBtn.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                }
                deferredPrompt = null;
            });
        });
    });

    window.addEventListener('appinstalled', () => {
        if (installBtn) installBtn.style.display = 'none';
    });
});

// تسجيل الـ Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
