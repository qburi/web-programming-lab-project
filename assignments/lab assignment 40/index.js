const image = document.getElementById('productImage');
const tooltip = document.getElementById('tooltip');

// 2. Mouseover: Show the tooltip
image.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
});

// 3. Mouseout: Hide the tooltip
image.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});

// 4. Mousemove: Update position
image.addEventListener('mousemove', (event) => {
    // Get cursor coordinates
    const x = event.clientX;
    const y = event.clientY;

    // Update tooltip position
    // Adding an offset (+15px) ensures the tooltip doesn't cover the cursor
    tooltip.style.left = (x + 15) + 'px';
    tooltip.style.top = (y + 15) + 'px';
});