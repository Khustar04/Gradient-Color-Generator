function getrandcolor() {
    let randomcolors = "0123456789ABCDEF"
    let colors = "#"
    for (let i = 0; i < 6; i++) {
        colors += randomcolors[Math.floor(Math.random() * 16)]
    }
    return colors;
}

function getGradientColor() {
    const FirstColor = getrandcolor();
    const SecondColor = getrandcolor();

    document.body.style.background = `linear-gradient(to right, ${FirstColor}, ${SecondColor})`;

    // Store colors for potential copying
    document.body.dataset.firstColor = FirstColor;
    document.body.dataset.secondColor = SecondColor;
}

// New function to copy gradient colors
function copyGradientColors() {
    const firstColor = document.body.dataset.firstColor;
    const secondColor = document.body.dataset.secondColor;

    if (firstColor && secondColor) {
        // Create a temporary textarea to copy text
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = `background-color: linear-gradient(to right, ${firstColor}, ${secondColor})`;

        // Make the textarea out of viewport
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.left = '-9999px';
        document.body.appendChild(tempTextArea);

        // Select and copy the text
        tempTextArea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);

        // Create and show a tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Gradient Colors Copied!';
        tooltip.style.position = 'fixed';
        tooltip.style.top = '20px';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.backgroundColor = 'green';
        tooltip.style.color = 'white';
        tooltip.style.padding = '10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '1000';
        tooltip.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

        // Add tooltip to body
        document.body.appendChild(tooltip);

        // Remove tooltip after 2 seconds
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 2000);
    } else {
        alert('Generate a gradient first!');
    }
}

// Add event listeners
document.getElementById('colorButton').addEventListener('click', getGradientColor);

// Add a new button for copying colors (you'll need to add this to your HTML)
document.getElementById('copyColorButton').addEventListener('click', copyGradientColors);