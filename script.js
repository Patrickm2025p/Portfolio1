document.addEventListener('DOMContentLoaded', () => {
    // Toggle CSS class to switch .project-grid from grid to flex (clean separation)
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projectGrid.classList.add('project-flex');
    }

    // Apply orange->black gradient background to project cards at runtime
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        // set gradient background and white text
        item.style.background = 'linear-gradient(180deg, #FF8C00 0%, #000000 100%)';
        item.style.color = '#ffffff';
        item.style.position = item.style.position || 'relative';

        // ensure inner text container uses white color and proper layout
        const text = item.querySelector('.project-text');
        if (text) {
            text.style.color = '#ffffff';
            text.style.background = 'linear-gradient(180deg, rgba(255,140,0,0) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.65) 100%)';
            text.style.padding = text.style.padding || '18px';
            text.style.boxSizing = 'border-box';
        }

        // style links inside project text to be visible on dark background
        const links = item.querySelectorAll('a');
        links.forEach(a => {
            a.style.color = '#ffffff';
            a.style.textDecoration = 'none';
            a.style.fontWeight = '700';
        });
    });

    // Set skill buttons background to #723e00 and ensure white text for contrast
    const skillButtons = document.querySelectorAll('.skill-list li');
    skillButtons.forEach(btn => {
        btn.style.backgroundColor = '#723e00';
        btn.style.color = '#ffffff';
        btn.style.border = 'none';
    });

    // Handle layout toggle button
    const layoutToggle = document.getElementById('layout-toggle');
    const body = document.body;
    if (layoutToggle) {
        layoutToggle.addEventListener('click', () => {
            const isRows = body.classList.contains('rows-layout');
            if (isRows) {
                body.classList.remove('rows-layout');
                body.classList.add('columns-layout');
                layoutToggle.textContent = '≡ Columns';
            } else {
                body.classList.remove('columns-layout');
                body.classList.add('rows-layout');
                layoutToggle.textContent = '≡ Rows';
            }
        });
    }
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
        position: relative;
        z-index: 100;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease, transform 0.3s ease;
        display: block;
        margin: 20px auto;
    `;

    visitSiteButton.onmouseover = () => {
        visitSiteButton.style.backgroundColor = '#f0f0f0';
        visitSiteButton.style.transform = 'scale(1.05)';
    };
    visitSiteButton.onmouseout = () => {
        visitSiteButton.style.backgroundColor = 'white';
        visitSiteButton.style.transform = 'scale(1)';
    };

    const heroSection = document.querySelector('#hero .container');
    if (heroSection) {
        heroSection.appendChild(visitSiteButton);
    } else {
        body.appendChild(visitSiteButton);
    }

    body.style.cssText = `
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        background-color: #f4f4f4;
        font-family: Arial, sans-serif;
        overflow: auto; /* Allow scrolling */
    `;

    visitSiteButton.addEventListener('click', () => {
        body.innerHTML = ''; // Clear the initial content
        body.style.overflow = 'auto'; // Allow scrolling if content overflows
        body.style.background = 'none'; // Remove gradient for content
        body.style.backgroundColor = '#f0f0f0'; // A light background for the content
        body.style.height = 'auto'; // Adjust height for content
        body.classList.add('rows-layout'); // Preserve rows-layout
        body.classList.remove('columns-layout'); // Remove columns-layout

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