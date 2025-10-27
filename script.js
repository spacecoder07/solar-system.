document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");

    planets.forEach(planet => {
        let speed = parseFloat(getComputedStyle(planet).animationDuration); // Extract number
        if (!isNaN(speed)) {
            let newSpeed = speed / 1.5; // Adjust speed dynamically
            planet.style.animationDuration = newSpeed + "s";
        }
    });
});