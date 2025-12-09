document.addEventListener('DOMContentLoaded', () => {
    // Toggle CSS class to switch .project-grid from grid to flex (clean separation)
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projectGrid.classList.add('project-flex');
    }
    const body = document.body;
    const visitSiteButton = document.createElement('button');
    visitSiteButton.textContent = 'Visit My Site';
    visitSiteButton.style.cssText = `
        background-color: white;
        color: black;
        padding: 15px 30px;
        font-size: 1.2em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease, transform 0.3s ease;
    `;

    visitSiteButton.onmouseover = () => {
        visitSiteButton.style.backgroundColor = '#f0f0f0';
        visitSiteButton.style.transform = 'translate(-50%, -50%) scale(1.05)';
    };
    visitSiteButton.onmouseout = () => {
        visitSiteButton.style.backgroundColor = 'white';
        visitSiteButton.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    body.appendChild(visitSiteButton);

    body.style.cssText = `
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom, #0000FF, #000000); /* Blue to Black Gradient */
        font-family: Arial, sans-serif;
        overflow: hidden; /* Hide scrollbar initially */
    `;

    visitSiteButton.addEventListener('click', () => {
        body.innerHTML = ''; // Clear the initial content
        body.style.overflow = 'auto'; // Allow scrolling if content overflows
        body.style.background = 'none'; // Remove gradient for content
        body.style.backgroundColor = '#f0f0f0'; // A light background for the content

        const frames = ['Home', 'Menu', 'CV', 'Blog'];
        frames.forEach(frameText => {
            const frame = document.createElement('div');
            frame.innerHTML = `<h2>${frameText}</h2><p>Content for ${frameText} goes here.</p>`;
            frame.style.cssText = `
                background-color: white;
                margin: 20px;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                width: 80%;
                max-width: 800px;
                text-align: center;
            `;
            body.appendChild(frame);
        });
    });
});