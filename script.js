// Variables
const gridSize = 16; // Default grid size
const grid = document.getElementById("grid");
let currentColor = document.getElementById("colorPicker").value;
let isDragging = false;

// Generate the grid
for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);

    // Toggle pixel color on click
    pixel.addEventListener("click", function() {
        if (pixel.style.backgroundColor === currentColor) {
            pixel.style.backgroundColor = "white"; // Clear color
        } else {
            pixel.style.backgroundColor = currentColor; // Set color
        }
    });

    // Color pixels on drag
    pixel.addEventListener("mousedown", function() {
        isDragging = true;
    });

    pixel.addEventListener("mousemove", function() {
        if (isDragging) {
            pixel.style.backgroundColor = currentColor;
        }
    });

    pixel.addEventListener("mouseup", function() {
        isDragging = false;
    });
}

// Update the current color
document.getElementById("colorPicker").addEventListener("input", function() {
    currentColor = this.value;
});

// Reset grid
document.getElementById("reset-btn").addEventListener("click", function() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
});

// Download pixel art as PNG
document.getElementById("download-btn").addEventListener("click", function() {
    html2canvas(document.querySelector("#grid")).then(canvas => {
        const link = document.createElement('a');
        link.download = 'pixel-art.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
