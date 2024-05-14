window.addEventListener('resize', function() {
    // Obtener el contenedor del elemento <a>
    var container = document.getElementById('twitter-timeline');

    // Obtener la línea de tiempo de Twitter (iframe)
    var twittertimeline = container.querySelector('iframe');

    // Obtener la URL de la línea de tiempo
    var twitterUrl = twittertimeline.getAttribute('src');

    // Actualizar el src del iframe para forzar la recarga
    twittertimeline.src = '';
    twittertimeline.src = twitterUrl;
});
