document.addEventListener("DOMContentLoaded", function() {
    console.log("¡Bienvenido a mi página personal en GitHub Pages!");

    // Animación para resaltar el texto "Hola, soy..."
    let title = document.querySelector("header h1");
    title.style.opacity = "0";
    title.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        title.style.transition = "all 1s ease";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 500);
});
