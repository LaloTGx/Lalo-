document.addEventListener("DOMContentLoaded", function() {
    const animationDuration = 1000;
    const holdDuration = 1000;
    const fadeOutDuration = 1000; 

    setTimeout(function() {
        const intro = document.getElementById('intro');
        intro.style.opacity = 0;

        setTimeout(function() {
            intro.style.display = 'none';
            const mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
            setTimeout(() => mainContent.classList.add('show'), 10);
        }, fadeOutDuration);
    }, animationDuration + holdDuration);
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Información copiada: ' + text);
    }, function(err) {
        console.error('Error al copiar: ', err);
    });
}
