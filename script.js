window.addEventListener('resize', function() {
    // Obtener el contenedor del elemento <a>
    var container = document.getElementById('twitter-container');

    // Obtener la línea de tiempo de Twitter (iframe)
    var twitterTimeline = container.querySelector('iframe');

    // Obtener la URL de la línea de tiempo
    var twitterUrl = twitterTimeline.getAttribute('src');

    // Actualizar el src del iframe para forzar la recarga
    twitterTimeline.src = '';
    twitterTimeline.src = twitterUrl;
});
